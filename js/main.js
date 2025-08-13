// 앱의 핵심 로직을 담당하는 파일

// 즉시 실행 함수로 전체 코드를 감싸서 전역 변수 오염을 방지합니다.
(function(){
    // ================== 설정 ==================
    const SPREADSHEET_URL = 'https://script.google.com/macros/s/AKfycbyrlSHgq7H-MY4XVOLWuBXlvScmbeGHHZkVEWtnquPOjx9GX5qJA4xlbZKvdSrcOdg/exec';

    // ================== 상태 변수 ==================
    let currentSetKey = null;
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

    // ================== 엘리먼트 캐싱 ==================
    const $ = sel => document.querySelector(sel);
    const $$ = sel => document.querySelectorAll(sel);

    const viewSets = $('#view-sets');
    const viewLevels = $('#view-levels');
    const viewLevel3Mode = $('#view-level3-mode');
    const viewQuiz = $('#view-quiz');
    const viewEndLevel = $('#view-end-level');
    const viewReview = $('#view-review');

    const crumb = $('#crumb');
    const homeBtn = $('#home-btn');
    const ttsBtn = $('#tts-btn');

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

    // ================== 유틸리티 함수 ==================
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    function setView(id){
        $$('.view').forEach(v => v.classList.remove('active'));
        $(id).classList.add('active');
    }

    // ================== TTS (음성 재생) 기능 ==================
    let englishVoice = null;
    let areVoicesLoaded = false;

    function loadVoices() {
        const voices = window.speechSynthesis.getVoices();
        englishVoice = voices.find(v => /^en-US/.test(v.lang) && /Google|Microsoft|Apple/i.test(v.name)) 
                    || voices.find(v => /^en-/.test(v.lang)) 
                    || null;
        if (voices.length > 0) {
            areVoicesLoaded = true;
        }
    }

    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    }

    function speak(text, rate = 0.95) {
        if (!('speechSynthesis' in window) || !text) return;
        if (!areVoicesLoaded) {
            setTimeout(() => speak(text, rate), 100);
            return;
        }
        try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'en-US';
            if (englishVoice) u.voice = englishVoice;
            u.rate = rate;
            u.pitch = 1.0;
            u.volume = 1;
            window.speechSynthesis.speak(u);
        } catch(e) {
            console.error("TTS Error:", e);
        }
    }
    
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = AC ? new AC() : null;
    function tone(freq = 660, duration = 90, type = 'sine', gain = 0.18) {
        if (!ctx) return;
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
    const uiTap = () => tone(520, 70, 'sine', 0.14);
    
    // ================== 서버 전송 (스프레드시트) ==================
    function sendResult(payload){
      try{
        if(!SPREADSHEET_URL || SPREADSHEET_URL.includes('PASTE')) return;
        fetch(SPREADSHEET_URL, {
          method:'POST',
          mode:'no-cors',
          headers:{ 'Content-Type':'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
      }catch(e){ console.error("Send Result Error:", e); }
    }

    // ================== 퀴즈 로직 ==================
    function choiceCountFor(lv) {
        return lv === 1 ? 2 : lv === 2 ? 4 : lv === 4 ? 8 : 6;
    }

    function buildChoices(word) {
        const set = WORD_SETS[currentSetKey];
        const need = choiceCountFor(currentLevel);
        const isEnKo = quizDirection === 'en-ko';
        
        const others = shuffle(set.filter(w => w.en !== word.en)).slice(0, need - 1);
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
        setView('#view-sets'); 
        crumb.textContent = '세트 선택'; 
        homeBtn.style.display = 'none';
        ttsBtn.style.display = 'none';
        stopTimer(); 
        uiTap(); 
    }

    function startSet(setKey) {
        currentSetKey = setKey;
        chosenSetChip.textContent = labelForSet(setKey);
        chosenSetModeChip.textContent = labelForSet(setKey);
        crumb.textContent = labelForSet(setKey);
        homeBtn.style.display = 'inline-flex';
        setView('#view-levels');
        uiTap();
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
        queue = shuffle([...WORD_SETS[currentSetKey]]);
        solvedCount = 0;
        current = null;
        testDone = 0;
        testCorrect = 0;
        testWrongAnswers = [];
        
        let crumbText = `${labelForSet(currentSetKey)} · ${currentLevel}단계`;
        if (testMode) crumbText += ' (테스트)';
        if (currentLevel === 3) crumbText += quizDirection === 'ko-en' ? ' (뜻 → 단어)' : ' (단어 → 뜻)';
        crumb.textContent = crumbText;
        
        ttsBtn.style.display = 'inline-flex';
        setView('#view-quiz');
        uiTap();
        nextQuestion();
    }

    function labelForSet(key) {
        const labels = { elem: '초등 100개', mid: '중등 100개', high: '고등 100개', uni: '대학 100개', gre: 'GRE 100개' };
        return labels[key] || '세트';
    }

    function updateStatus() {
        if (testMode) {
            statusChip.textContent = `${labelForSet(currentSetKey)} · 4단계 · 진행 ${testDone}/100 · 정답 ${testCorrect}`;
        } else {
            statusChip.textContent = `${labelForSet(currentSetKey)} · ${currentLevel}단계 · 완료 ${solvedCount}/100`;
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
        if (queue.length === 0) {
            if (testMode) {
                sendResult({type:'summary', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, total:100, correct:testCorrect, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
            }
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

        if (testMode) {
            choicesEl.classList.remove('hidden');
            toggleChoicesBtn.style.display = 'none';
            startTimer(6);
        } else {
            choicesEl.classList.add('hidden');
            toggleChoicesBtn.style.display = 'inline-flex';
            toggleChoicesBtn.textContent = '보기';
        }
        
        qStart = performance.now();
        if (quizDirection === 'en-ko') {
            speak(current.en);
        }
    }

    async function onChoice(e) {
        uiTap();
        const btn = e.currentTarget;
        const correct = btn.dataset.correct === 'true';
        [...choicesEl.children].forEach(b => b.disabled = true);
        idkBtn.disabled = true;
        stopTimer();
        const elapsedSec = Math.round((performance.now() - qStart) / 100) / 10;

        if (correct) {
            btn.classList.add('correct');
            speak(current.en, 1.1);
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
        [...choicesEl.children].forEach(c => {
            c.disabled = true;
            if (c.dataset.correct === 'true') c.classList.add('correct');
        });
        const elapsedSec = Math.round((performance.now() - qStart) / 100) / 10;

        if (testMode) {
            testDone++;
            testWrongAnswers.push(current);
            sendResult({type:'result', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, word:current.en, correctKo:current.ko, selectedKo:'시간초과', correct:false, elapsedSec, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
        } else {
            queue.push(current);
        }
        updateStatus();
        wrongPopup();
    }

    function wrongPopup() {
        modalTitle.textContent = '오답!';
        
        const reviewSource = REVIEW_DATA[currentSetKey] || {};
        const data = reviewSource[current.en];
        
        let detailHTML = `<p><strong>정답: ${current.ko}</strong></p>`;
        
        if (data) {
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

    // ================== 오답 학습 기능 (로컬 데이터) ==================
    function showReview() {
        setView('#view-review');
        crumb.textContent = '오답 학습';
        reviewListContainer.innerHTML = '';
        const list = document.createElement('div');
        list.className = 'review-list';

        const reviewSource = REVIEW_DATA[currentSetKey] || {};

        if (testWrongAnswers.length === 0) {
            list.innerHTML = '<p>틀린 문제가 없습니다! 완벽해요!</p>';
        } else {
            testWrongAnswers.forEach(word => {
                const card = document.createElement('div');
                card.className = 'review-card';
                const data = reviewSource[word.en];

                if (data) {
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

    // ================== 이벤트 리스너 설정 ==================
    function setupEventListeners() {
        $$('#view-sets .grid.sets .btn').forEach(b => {
            b.addEventListener('click', () => startSet(b.dataset.set));
        });

        $$('#view-levels [data-level]').forEach(b => {
            b.addEventListener('click', () => startLevel(parseInt(b.dataset.level)));
        });

        $$('#view-level3-mode [data-direction]').forEach(b => {
            b.addEventListener('click', () => {
                quizDirection = b.dataset.direction;
                startLevelCore();
            });
        });

        idStart.addEventListener('click', () => {
            const v = (idInput.value || '').trim();
            if (!v) {
                idInput.focus();
                return;
            }
            testUserId = v;
            idModal.classList.add('hidden');
            startLevelCore();
        });
        idCancel.addEventListener('click', () => idModal.classList.add('hidden'));

        homeBtn.addEventListener('click', goHome);
        reviewHomeBtn.addEventListener('click', goHome);

        ttsBtn.addEventListener('click', () => {
            uiTap();
            if (current) speak(current.en);
        });

        toggleChoicesBtn.addEventListener('click', () => {
            uiTap();
            const hidden = choicesEl.classList.toggle('hidden');
            toggleChoicesBtn.textContent = hidden ? '보기' : '보기 표시됨';
        });

        idkBtn.addEventListener('click', () => {
            uiTap();
            choicesEl.classList.remove('hidden');
            [...choicesEl.children].forEach(c => c.disabled = true);
            [...choicesEl.children].forEach(c => {
                if (c.dataset.correct === 'true') c.classList.add('correct');
            });
            stopTimer();
            const elapsedSec = Math.round((performance.now() - qStart) / 100) / 10;
            if (testMode) {
                testDone++;
                testWrongAnswers.push(current);
                sendResult({type:'result', userId:testUserId, setKey:currentSetKey, setLabel:labelForSet(currentSetKey), level:4, word:current.en, correctKo:current.ko, selectedKo:'모름', correct:false, elapsedSec, timestamp:new Date().toISOString(), userAgent:navigator.userAgent});
            } else {
                queue.push(current);
            }
            updateStatus();
            wrongPopup();
        });
        
        retryBtn.addEventListener('click', startLevelCore);
        nextLevelBtn.addEventListener('click', () => startLevel(currentLevel + 1));
        reviewWrongBtn.addEventListener('click', showReview);

        modalNext.addEventListener('click', async () => {
            uiTap();
            modal.classList.add('hidden');
            await sleep(500);
            nextQuestion();
        });
    }

    // ================== 앱 초기화 ==================
    setupEventListeners();
    setView('#view-sets');

})();
