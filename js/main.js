// 앱의 핵심 로직을 담당하는 파일

// 즉시 실행 함수로 전체 코드를 감싸서 전역 변수 오염을 방지합니다.
(function(){
    // ================== 설정 ==================
    const SPREADSHEET_URL = 'https://script.google.com/macros/s/AKfycbyrlSHgq7H-MY4XVOLWuBXlvScmbeGHHZkVEWtnquPOjx9GX5qJA4xlbZKvdSrcOdg/exec';
    const WORDS_PER_SUBSET = 50;
    // === 모바일(터치) 기기인지 확인하는 변수 추가 ===
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // ================== 상태 변수 ==================
    let currentSetKey = null;
    let currentSubSetIndex = 0;
    let currentWordList = [];
    let currentLevel = 1;
    let quizDirection = 'en-ko';
    let queue = [];
    let solvedCount = 0;
    let current = null;
    let testMode = false;
    let testUserId = '';
    let testDone = 0;
    let testCorrect = 0;
    let testWrongAnswers = [];
    let qStart = 0;
    let timer = null;
    let timeLeft = 0;
    let isReplaying = false;

    // ================== 엘리먼트 캐싱 ==================
    const $ = sel => document.querySelector(sel);
    const $$ = sel => document.querySelectorAll(sel);

    const viewSets = $('#view-sets');
    const viewSubsets = $('#view-subsets');
    const viewLevels = $('#view-levels');
    const viewLevel3Mode = $('#view-level3-mode');
    const viewQuiz = $('#view-quiz');
    const viewEndLevel = $('#view-end-level');
    const viewReview = $('#view-review');

    const crumb = $('#crumb');
    const homeBtn = $('#home-btn');
    const ttsBtn = $('#tts-btn');

    const chosenMainSetChip = $('#chosen-main-set');
    const subsetButtonsContainer = $('#subset-buttons');
    const chosenSetChip = $('#chosen-set');
    const chosenSetModeChip = $('#chosen-set-mode');

    const statusChip = $('#status-chip');
    const timerChip = $('#timer-chip');
    const wordEl = $('#word');
    const choicesEl = $('#choices');
    const controlsDock = $('.controls-dock');

    const idkBtn = $('#idk-btn');
    const toggleChoicesBtn = $('#toggle-choices-btn');

    const modal = $('#result-modal');
    const modalTitle = $('#result-title');
    const modalDetail = $('#result-detail');
    const modalNext = $('#modal-next');

    const idModal = $('#id-modal');
    const idInput = $('#user-id-input');
    const idStart = $('#id-start');
    const idCancel = $('#id-cancel');
    
    const endLevelTitle = $('#end-level-title');
    const retryBtn = $('#retry-btn');
    const nextLevelBtn = $('#next-level-btn');
    const reviewWrongBtn = $('#review-wrong-btn');
    const reviewListContainer = $('#review-list-container');
    const reviewHomeBtn = $('#review-home-btn');
    const replayWrongBtn = $('#replay-wrong-btn');

    // ================== 유틸리티 및 오디오 함수 ==================
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = AC ? new AC() : null;
    function tone(freq = 660, duration = 90, type = 'sine', gain = 0.18) {
        if (!ctx) return;
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = type;
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        const now = ctx.currentTime;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(gain, now + 0.01);
        o.start();
        g.gain.exponentialRampToValueAtTime(0.0001, now + duration / 1000);
        o.stop(now + duration / 1000 + 0.01);
    }
    const playCorrectSound = () => tone(880, 90, 'triangle', 0.15);
    const playWrongSound = () => tone(330, 180, 'sawtooth', 0.18);

    function setView(id){
        $$('.view').forEach(v => v.classList.remove('active'));
        $(id).classList.add('active');
    }

    // ================== TTS (음성 재생) 기능 ==================
    let enVoice = null;
    let koVoice = null;
    let areVoicesLoaded = false;
    function loadVoices() {
        const voices = window.speechSynthesis.getVoices();
        enVoice = voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en-'));
        koVoice = voices.find(v => v.lang.startsWith('ko-KR'));
        if (voices.length > 0) areVoicesLoaded = true;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    }
    function speak(text, lang = 'en-US', rate = 0.95) {
        if (!('speechSynthesis' in window) || !text) return Promise.resolve();
        if (!areVoicesLoaded) {
            return new Promise(resolve => setTimeout(() => resolve(speak(text, lang, rate)), 100));
        }
        
        return new Promise(resolve => {
            try {
                // 음성 재생 전 기존 큐를 취소하여 충돌 방지
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(text);
                u.lang = lang;
                if (lang.startsWith('en') && enVoice) u.voice = enVoice;
                if (lang.startsWith('ko') && koVoice) u.voice = koVoice;
                u.rate = rate;
                u.onend = resolve;
                u.onerror = () => {
                    console.error("TTS Error for:", text);
                    resolve();
                };
                window.speechSynthesis.speak(u);
            } catch(e) { 
                console.error("TTS Exception:", e);
                resolve();
            }
        });
    }
    
    // ================== 서버 전송 (스프레드시트) ==================
    function sendResult(payload){
      try{
        if(!SPREADSHEET_URL || SPREADSHEET_URL.includes('PASTE')) return;
        fetch(SPREADSHEET_URL, {
          method:'POST', mode:'no-cors',
          headers:{ 'Content-Type':'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
      }catch(e){ console.error("Send Result Error:", e); }
    }

    // ================== 퀴즈 로직 ==================
    function choiceCountFor(lv) {
        return lv === 1 ? 2 : lv === 2 ? 4 : 6;
    }

    function buildChoices(word) {
        const mainSet = WORD_SETS[currentSetKey];
        const need = choiceCountFor(currentLevel);
        const isEnKo = quizDirection === 'en-ko';
        
        const others = shuffle(mainSet.filter(w => w.en !== word.en)).slice(0, need - 1);
        const list = shuffle([word, ...others]);
        
        choicesEl.innerHTML = '';
        for (const item of list) {
            const btn = document.createElement('button');
            btn.className = 'choice';
            btn.textContent = isEnKo ? item.ko : item.en;
            btn.dataset.correct = String(isEnKo ? item.ko === word.ko : item.en === word.en);
            btn.addEventListener('click', onChoice);
            choicesEl.appendChild(btn);
        }
    }

    function startTimer(sec) {
        stopTimer();
        timeLeft = sec;
        timerChip.style.display = 'inline-flex';
        timerChip.textContent = `⏱ ${timeLeft}s`;
        timer = setInterval(() => {
            timeLeft--;
            timerChip.textContent = `⏱ ${timeLeft}s`;
            if (timeLeft <= 0) {
                stopTimer();
                onTimeout();
            }
        }, 1000);
    }
    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        timerChip.style.display = 'none';
    }

    function goHome() {
        window.speechSynthesis.cancel();
        isReplaying = false;
        setView('#view-sets'); 
        crumb.textContent = '세트 선택'; 
        homeBtn.style.display = 'none';
        ttsBtn.style.display = 'none';
        stopTimer(); 
    }

    function labelForSet(key) {
        const labels = { mid: '중등 필수', toeic: '토익 기출', gre: 'GRE 고난도' };
        return labels[key] || '세트';
    }
    
    function selectMainSet(setKey) {
        currentSetKey = setKey;
        const mainSet = WORD_SETS[setKey];
        const totalWords = mainSet.length;
        const numSubsets = Math.ceil(totalWords / WORDS_PER_SUBSET);

        chosenMainSetChip.textContent = labelForSet(setKey);
        subsetButtonsContainer.innerHTML = '';

        for (let i = 0; i < numSubsets; i++) {
            const start = i * WORDS_PER_SUBSET + 1;
            const end = Math.min((i + 1) * WORDS_PER_SUBSET, totalWords);
            const btn = document.createElement('button');
            btn.className = 'btn btn-ghost';
            btn.textContent = `${i + 1} Set (${start}–${end}번)`;
            btn.dataset.subsetIndex = i;
            btn.addEventListener('click', () => {
                startSubSet(i);
            });
            subsetButtonsContainer.appendChild(btn);
        }
        
        const allBtn = document.createElement('button');
        allBtn.className = 'btn btn-primary';
        allBtn.textContent = 'ALL Sets (전체 학습)';
        allBtn.style.gridColumn = 'span 2';
        allBtn.dataset.subsetIndex = -1;
        allBtn.addEventListener('click', () => {
            startSubSet(-1);
        });
        subsetButtonsContainer.appendChild(allBtn);


        crumb.textContent = labelForSet(setKey);
        homeBtn.style.display = 'inline-flex';
        setView('#view-subsets');
    }

    function startSubSet(subSetIndex) {
        currentSubSetIndex = subSetIndex;
        const mainSet = WORD_SETS[currentSetKey];
        let setLabel = '';

        if (subSetIndex === -1) {
            currentWordList = mainSet;
            setLabel = `${labelForSet(currentSetKey)} · ALL Sets`;
        } else {
            const start = subSetIndex * WORDS_PER_SUBSET;
            const end = start + WORDS_PER_SUBSET;
            currentWordList = mainSet.slice(start, end);
            setLabel = `${labelForSet(currentSetKey)} · ${subSetIndex + 1} Set`;
        }
        
        chosenSetChip.textContent = setLabel;
        chosenSetModeChip.textContent = setLabel;
        
        setView('#view-levels');
    }
    
    function startLevel(lv) {
        currentLevel = lv;
        testMode = (lv === 4);
        if (lv === 3) {
            setView('#view-level3-mode');
        } else {
            quizDirection = 'en-ko';
            if (lv === 4) {
                idInput.value = '';
                idModal.classList.remove('hidden');
            } else {
                startLevelCore();
            }
        }
    }

    function startLevelCore() {
        queue = shuffle(currentWordList);
        solvedCount = 0;
        current = null;
        testDone = 0;
        testCorrect = 0;
        testWrongAnswers = [];
        
        let crumbText = `${labelForSet(currentSetKey)} · ${currentSubSetIndex === -1 ? 'ALL Sets' : `${currentSubSetIndex + 1} Set`} · ${currentLevel}단계`;
        if (testMode) crumbText += ' (테스트)';
        if (currentLevel === 3) crumbText += quizDirection === 'ko-en' ? ' (뜻 → 단어)' : ' (단어 → 뜻)';
        crumb.textContent = crumbText;
        
        ttsBtn.style.display = 'inline-flex';
        setView('#view-quiz');
        nextQuestion();
    }

    function updateStatus() {
        const total = currentWordList.length;
        const subsetLabel = currentSubSetIndex === -1 ? 'ALL Sets' : `${currentSubSetIndex + 1} Set`;
        if (testMode) {
            statusChip.textContent = `${labelForSet(currentSetKey)} · ${subsetLabel} · 진행 ${testDone}/${total} · 정답 ${testCorrect}`;
        } else {
            statusChip.textContent = `${labelForSet(currentSetKey)} · ${subsetLabel} · 완료 ${solvedCount}/${total}`;
        }
    }

    function showEndLevelView() {
        endLevelTitle.textContent = `${currentLevel}단계 완료!`;
        nextLevelBtn.style.display = (currentLevel < 4) ? 'inline-flex' : 'none';
        reviewWrongBtn.style.display = (testWrongAnswers.length > 0) ? 'inline-flex' : 'none';
        
        setView('#view-end-level');
        ttsBtn.style.display = 'none';
        crumb.textContent = '단계 완료';
    }

    function nextQuestion() {
        if ((!testMode && solvedCount >= currentWordList.length) || (testMode && testDone >= currentWordList.length)) {
            if (testMode) {
                sendResult({type:'summary', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, total:currentWordList.length, correct:testCorrect, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
            }
            showEndLevelView();
            return;
        }

        if (queue.length === 0 && !testMode) {
            showEndLevelView();
            return;
        }
        
        controlsDock.style.display = 'flex';
        idkBtn.disabled = false;
        ttsBtn.disabled = false;

        current = queue.shift();
        updateStatus();
        wordEl.textContent = quizDirection === 'en-ko' ? current.en : current.ko;
        buildChoices(current);

        const showChoicesImmediately = (currentLevel === 1 || testMode);
        choicesEl.classList.toggle('hidden', !showChoicesImmediately);
        toggleChoicesBtn.style.display = showChoicesImmediately ? 'none' : 'inline-flex';
        
        if (!showChoicesImmediately) {
            toggleChoicesBtn.textContent = '보기';
        }
        
        if (testMode) {
            startTimer(6);
        }
        
        qStart = performance.now();
        // === 수정된 부분: 모바일(터치 기기)에서는 자동 재생 안 함 ===
        if (quizDirection === 'en-ko' && !isTouchDevice) {
            speak(current.en, 'en-US');
        }
    }

    async function onChoice(e) {
        const btn = e.currentTarget;
        const correct = btn.dataset.correct === 'true';
        [...choicesEl.children].forEach(b => b.disabled = true);
        idkBtn.disabled = true;
        stopTimer();
        const elapsedSec = Math.round((performance.now() - qStart) / 100) / 10;

        if (correct) {
            playCorrectSound();
            btn.classList.add('correct');
            
            if (testMode) {
                testDone++;
                testCorrect++;
                sendResult({type:'result', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, word:current.en, correctKo:current.ko, selectedKo:btn.textContent, correct:true, elapsedSec, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
            } else {
                solvedCount++;
            }
            updateStatus();
            await sleep(800);
            nextQuestion();
        } else {
            playWrongSound();
            btn.classList.add('wrong');
            [...choicesEl.children].forEach(c => {
                if (c.dataset.correct === 'true') c.classList.add('correct');
            });
            if (testMode) {
                testDone++;
                testWrongAnswers.push(current);
                sendResult({type:'result', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, word:current.en, correctKo:current.ko, selectedKo:btn.textContent, correct:false, elapsedSec, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
            } else {
                queue.push(current);
            }
            updateStatus();
            wrongPopup();
        }
    }

    function onTimeout() {
        playWrongSound();
        [...choicesEl.children].forEach(c => {
            c.disabled = true;
            if (c.dataset.correct === 'true') c.classList.add('correct');
        });
        const elapsedSec = 6;

        testDone++;
        testWrongAnswers.push(current);
        sendResult({type:'result', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, word:current.en, correctKo:current.ko, selectedKo:'시간초과', correct:false, elapsedSec, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
        
        updateStatus();
        wrongPopup();
    }

    function wrongPopup() {
        modalTitle.textContent = '오답!';
        const reviewSource = REVIEW_DATA[currentSetKey] || {};
        const data = reviewSource[current.en];
        
        let detailHTML = `<p><strong>정답: ${current.ko}</strong></p>`;
        
        if (data && data.example && data.translation && data.mnemonic) {
            detailHTML += `
                <div class="review-content">
                    <p><strong>예문:</strong> ${data.example}</p>
                    <p><strong>해석:</strong> ${data.translation}</p>
                    <p><strong>암기법:</strong> ${data.mnemonic}</p>
                </div>
            `;
        }
        
        modalDetail.innerHTML = detailHTML;
        modal.classList.remove('hidden');
    }

    function showReview() {
        setView('#view-review');
        crumb.textContent = '오답 학습';
        replayWrongBtn.style.display = testWrongAnswers.length > 0 ? 'inline-flex' : 'none';
        
        reviewListContainer.innerHTML = '';
        const list = document.createElement('div');
        list.className = 'review-list';

        const reviewSource = REVIEW_DATA[currentSetKey] || {};

        if (testWrongAnswers.length === 0) {
            list.innerHTML = '<p style="text-align:center;">틀린 문제가 없습니다! 완벽해요!</p>';
        } else {
            const uniqueWrongAnswers = [...new Map(testWrongAnswers.map(item => [item['en'], item])).values()];
            uniqueWrongAnswers.forEach(word => {
                const card = document.createElement('div');
                card.className = 'review-card';
                const data = reviewSource[word.en];

                if (data && data.example && data.translation && data.mnemonic) {
                    card.innerHTML = `
                        <h3>${word.en}<span>${word.ko}</span></h3>
                        <p><strong>예문:</strong> ${data.example}</p>
                        <p><strong>해석:</strong> ${data.translation}</p>
                        <p><strong>암기법:</strong> ${data.mnemonic}</p>
                    `;
                } else {
                    card.innerHTML = `<h3>${word.en}<span>${word.ko}</span></h3><p>학습 데이터를 찾을 수 없습니다.</p>`;
                }
                list.appendChild(card);
            });
        }
        reviewListContainer.appendChild(list);
    }
    
    // ================== 오답 다시 듣기 기능 ==================
    async function replayWrongAnswers() {
        if (isReplaying || testWrongAnswers.length === 0) return;
        
        isReplaying = true;
        replayWrongBtn.disabled = true;
        replayWrongBtn.textContent = '듣는 중...';

        const uniqueWrongAnswers = [...new Map(testWrongAnswers.map(item => [item['en'], item])).values()];
        
        for (const word of uniqueWrongAnswers) {
            if (!isReplaying) break; // 중간에 홈 버튼 등으로 중지시키면 루프 탈출
            await speak(word.en, 'en-US', 0.9);
            await sleep(150);
            await speak(word.ko, 'ko-KR', 0.95);
            await sleep(500);
        }
        
        replayWrongBtn.disabled = false;
        replayWrongBtn.textContent = '오답 다시 듣기';
        isReplaying = false;
    }

    // ================== 이벤트 리스너 설정 ==================
    function setupEventListeners() {
        $$('#view-sets .grid.sets .btn').forEach(b => {
            b.addEventListener('click', () => selectMainSet(b.dataset.set));
        });

        $$('#view-levels [data-level]').forEach(b => {
            b.addEventListener('click', () => {
                // 오디오 기능 '깨우기' (모바일 브라우저 정책 대응)
                if (ctx && ctx.state === 'suspended') {
                    ctx.resume();
                }
                if ('speechSynthesis' in window && window.speechSynthesis.getVoices().length === 0) {
                    window.speechSynthesis.getVoices();
                }
                startLevel(parseInt(b.dataset.level));
            });
        });

        $$('#view-level3-mode [data-direction]').forEach(b => {
            b.addEventListener('click', () => {
                quizDirection = b.dataset.direction;
                startLevelCore();
            });
        });

        idStart.addEventListener('click', () => {
            const v = (idInput.value || '').trim();
            if (!v) { idInput.focus(); return; }
            testUserId = v;
            idModal.classList.add('hidden');
            startLevelCore();
        });
        idCancel.addEventListener('click', () => {
            idModal.classList.add('hidden');
            setView('#view-levels');
        });

        homeBtn.addEventListener('click', goHome);
        reviewHomeBtn.addEventListener('click', goHome);

        ttsBtn.addEventListener('click', () => {
            if (current && quizDirection === 'en-ko') speak(current.en, 'en-US');
        });

        toggleChoicesBtn.addEventListener('click', () => {
            const hidden = choicesEl.classList.toggle('hidden');
            toggleChoicesBtn.textContent = hidden ? '보기' : '숨기기';
        });

        idkBtn.addEventListener('click', () => {
            playWrongSound();
            choicesEl.classList.remove('hidden');
            [...choicesEl.children].forEach(c => {
                c.disabled = true;
                if (c.dataset.correct === 'true') c.classList.add('correct');
            });
            stopTimer();
            if (testMode) {
                onTimeout(); 
            } else {
                queue.push(current);
                updateStatus();
                wrongPopup();
            }
        });
        
        retryBtn.addEventListener('click', () => startLevel(currentLevel));
        nextLevelBtn.addEventListener('click', () => startLevel(currentLevel + 1));
        reviewWrongBtn.addEventListener('click', showReview);

        modalNext.addEventListener('click', async () => {
            modal.classList.add('hidden');
            await sleep(100); 
            nextQuestion();
        });
        
        replayWrongBtn.addEventListener('click', replayWrongAnswers);
    }

    // ================== 앱 초기화 ==================
    setupEventListeners();
    setView('#view-sets');

})();