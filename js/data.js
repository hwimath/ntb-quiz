const WORD_SETS = {
  mid: [
    {en:'expect',ko:'기대하다'},{en:'expense',ko:'경비'},{en:'expensive',ko:'값비싼'},{en:'experience',ko:'경험'},{en:'explain',ko:'설명하다'},
    {en:'express',ko:'발표하다'},{en:'extra',ko:'추가의'},{en:'fabric',ko:'천'},{en:'fair',ko:'공평한'},{en:'faith',ko:'신용'},
    {en:'false',ko:'거짓'},{en:'familiar',ko:'익숙한'},{en:'fare',ko:'요금'},{en:'favor',ko:'호의'},{en:'fear',ko:'두려움'},
    {en:'fee',ko:'요금'},{en:'feed',ko:'음식(먹이)을 주다'},{en:'fellow',ko:'동무'},{en:'female',ko:'여성'},{en:'ferry',ko:'배 페리호'},
    {en:'few',ko:'소수의'},{en:'figure',ko:'모습'},{en:'filter',ko:'여과기 여과하다'},{en:'final',ko:'최후의'},{en:'finance',ko:'재정'},
    {en:'fit',ko:'맞는'},{en:'flash',ko:'번쩍임'},{en:'flavor',ko:'(독특한)맛'},{en:'flexible',ko:'구부리기 쉬운'},{en:'flood',ko:'홍수'},
    {en:'fold',ko:'접다'},{en:'folk',ko:'사람들'},{en:'follow',ko:'쫓다 따르다'},{en:'foreign',ko:'외국의'},{en:'former',ko:'이전의'},
    {en:'fortunate',ko:'운좋은'},{en:'fortune',ko:'운'},{en:'frankly',ko:'솔직히'},{en:'frequent',ko:'빈번한'},{en:'fuel',ko:'연료'},
    {en:'function',ko:'기능'},{en:'fund',ko:'기금'},{en:'furniture',ko:'가구'},{en:'gamble',ko:'도박'},{en:'gang',ko:'한 떼'},
    {en:'gap',ko:'갈라진 틈'},{en:'garage',ko:'차고'},{en:'gather',ko:'그러모으다'},{en:'gear',ko:'톱니바퀴'},{en:'gender',ko:'성'},
    {en:'general',ko:'일반적인'},{en:'generation',ko:'세대'},{en:'genius',ko:'천재'},{en:'gentle',ko:'온화한'},{en:'global',ko:'세계적인'},
    {en:'glory',ko:'영광'},{en:'goat',ko:'염소'},{en:'goods',ko:'상품'},{en:'grade',ko:'등급'},{en:'graduate',ko:'졸업하다'},
    {en:'guest',ko:'손님'},{en:'gun',ko:'총'},{en:'gymnasium',ko:'체육관'},{en:'half',ko:'반'},{en:'hammer',ko:'망치'},
    {en:'handicap',ko:'불리한 조건'},{en:'handle',ko:'손잡이'},{en:'happen',ko:'(사건 등이)일어나다'},{en:'harbor',ko:'항구'},{en:'hardly',ko:'거의 -아니다'},
    {en:'harvest',ko:'수확'},{en:'heal',ko:'고치다'},{en:'health',ko:'건강'},{en:'hear',ko:'듣다'},{en:'heel',ko:'발뒤꿈치'},
    {en:'height',ko:'높이'},{en:'hell',ko:'지옥'},{en:'hide',ko:'감추다'},{en:'highway',ko:'고속도로'},{en:'hip',ko:'엉덩이'},
    {en:'hire',ko:'고용하다'},{en:'hole',ko:'구멍'},{en:'horror',ko:'공포'},{en:'host',ko:'집주인'},{en:'hug',ko:'꼭 껴안다'},
    {en:'huge',ko:'거대한'},{en:'ideal',ko:'이상'},{en:'ill',ko:'병든'},{en:'imagine',ko:'상상하다'},{en:'immediate',ko:'즉각적인'},
    {en:'include',ko:'포함하다'},{en:'increase',ko:'늘다'},{en:'indeed',ko:'참으로'},{en:'individual',ko:'개인'},{en:'influence',ko:'영향력'},
    {en:'insect',ko:'곤충'},{en:'insert',ko:'끼워넣다'},{en:'inspect',ko:'검사하다'},{en:'install',ko:'설치하다'},{en:'instead',ko:'그 대신에'},
    {en:'instruct',ko:'가르치다'},{en:'intelligent',ko:'지적인'},{en:'interest',ko:'흥미'},{en:'international',ko:'국제적인'},{en:'invent',ko:'발명하다'},
    {en:'invest',ko:'투자하다'},{en:'iron',ko:'다리미'},{en:'irony',ko:'역설 아이러니'},{en:'island',ko:'섬'},{en:'item',ko:'조항'},
    {en:'jaw',ko:'턱'},{en:'jet',ko:'(가스등의)분출'},{en:'joke',ko:'농담'},{en:'journal',ko:'일간신문'},{en:'journey',ko:'여행'},
    {en:'junior',ko:'손아래사람'},{en:'knee',ko:'무릎'},{en:'knock',ko:'노크하다 치다'},{en:'labor',ko:'노동'},{en:'laboratory',ko:'실험실'},
    {en:'lamp',ko:'등'},{en:'lane',ko:'레인'},{en:'language',ko:'언어'},{en:'laugh',ko:'(소리내어)웃다'},{en:'laundry',ko:'세탁물'},
    {en:'law',ko:'법률'},{en:'lawyer',ko:'법률가'},{en:'lead',ko:'이끌다'},{en:'leave',ko:'떠나다 남겨두다'},{en:'lecture',ko:'강의'},
    {en:'legend',ko:'전설'},{en:'lend',ko:'빌리다'},{en:'let',ko:'시키다'},{en:'level',ko:'수평의'},{en:'license',ko:'면허'},
    {en:'lift',ko:'끌어올리다'},{en:'limit',ko:'한계'},{en:'link',ko:'사슬의 고리'},{en:'list',ko:'일람표'},{en:'load',ko:'짐'},
    {en:'local',ko:'지역의'},{en:'lock',ko:'자물쇠'},{en:'log',ko:'통나무'},{en:'lose',ko:'잃다'},{en:'loud',ko:'시끄러운'},
    {en:'luxury',ko:'사치'},{en:'machine',ko:'기계'},{en:'magazine',ko:'잡지'},{en:'main',ko:'주요한'},{en:'major',ko:'다수의'},
    {en:'male',ko:'남성의'},{en:'manage',ko:'관리하다'},{en:'manner',ko:'방법'},{en:'marine',ko:'바다의'},{en:'mark',ko:'표시'},
    {en:'mate',ko:'상대'},{en:'maybe',ko:'아마'},{en:'meal',ko:'식사'},{en:'mean',ko:'의미하다'},{en:'medical',ko:'의학의'},
    {en:'medicine',ko:'약'},{en:'mental',ko:'마음의'},{en:'mention',ko:'말하다'},{en:'merchant',ko:'상인'},{en:'metal',ko:'금속'},
    {en:'microphone',ko:'마이크 확성기'},{en:'mild',ko:'온후한'},{en:'military',ko:'군의'},{en:'million',ko:'백만'},{en:'minor',ko:'작은 편의'},
    {en:'minute',ko:'분'},{en:'mistake',ko:'실수'},{en:'mix',ko:'섞다'},{en:'mode',ko:'방법'},{en:'modern',ko:'현대의'},
    {en:'monitor',ko:'모니터화면'},{en:'monster',ko:'괴물'},{en:'mood',ko:'(일시적인)기분'},{en:'mud',ko:'진흙'},{en:'muscle',ko:'근육'},
    {en:'mushroom',ko:'버섯'},{en:'nail',ko:'손톱'},{en:'navy',ko:'해군(력)'},{en:'necessary',ko:'필요한'},{en:'needle',ko:'바늘'},
    {en:'neighbor',ko:'이웃사람(나라)'},{en:'neither',ko:'둘다 아닌'},{en:'nephew',ko:'조카'},{en:'nervous',ko:'긴장한'},{en:'net',ko:'그물'},
    {en:'network',ko:'네트워크'},{en:'nobody',ko:'아무도 아닌'},{en:'noise',ko:'소리'},{en:'none',ko:'아무도아닌'},{en:'normal',ko:'표준(의)'},
    {en:'novel',ko:'소설'},{en:'nuclear',ko:'핵의'},{en:'oak',ko:'참나무'},{en:'offend',ko:'성나게 하다'},{en:'offer',ko:'제공하다'},
    {en:'olive',ko:'올리브나무'},{en:'once',ko:'한번'},{en:'opportunity',ko:'기회'},{en:'option',ko:'선택권'},{en:'order',ko:'순서'},
    {en:'other',ko:'다른'},{en:'ought',ko:'해야한다'},{en:'overnight',ko:'전날밤의'},{en:'own',ko:'자기자신의 소유하다'},{en:'pace',ko:'한걸음'},
    {en:'pad',ko:'덧대는것'},{en:'pain',ko:'고통'},{en:'pair',ko:'한쌍'},{en:'pale',ko:'창백한'},{en:'palm',ko:'손바닥'},
    {en:'pardon',ko:'용서하다'},{en:'participate',ko:'참가하다'},{en:'passenger',ko:'승객'},{en:'past',ko:'과거'},{en:'path',ko:'작은 길'},
    {en:'patient',ko:'인내심이 강한 환자'},{en:'pause',ko:'중지'},{en:'pepper',ko:'고추'},{en:'perfect',ko:'완벽한'},{en:'perhaps',ko:'아마'},
    {en:'period',ko:'시간'},{en:'permit',ko:'허가하다'},{en:'person',ko:'사람'},{en:'persuade',ko:'설득하다'},{en:'pet',ko:'애완동물'},
    {en:'photograph',ko:'사진 촬영하다'},{en:'piece',ko:'한 조각'},{en:'pile',ko:'쌓아 올린 것'},{en:'pin',ko:'핀 핀으로 꽂다'},{en:'plant',ko:'식물'},
    {en:'plate',ko:'접시'},{en:'pleasant',ko:'기분 좋은'},{en:'pleasure',ko:'즐거움'},{en:'plenty',ko:'많음'},{en:'plus',ko:'더하기의 -외에'},
    {en:'poem',ko:'시'},{en:'poet',ko:'시인'},{en:'poison',ko:'독'},{en:'polite',ko:'공손한'},{en:'poll',ko:'투표'},
    {en:'pond',ko:'못, 연못'},{en:'pool',ko:'물웅덩이 풀장'},{en:'popular',ko:'인기있는'},{en:'pork',ko:'돼지고기'},{en:'pose',ko:'자세'},
    {en:'position',ko:'위치'},{en:'possible',ko:'가능한'},{en:'poster',ko:'포스터'},{en:'pour',ko:'따르다'},{en:'powder',ko:'가루'},
    {en:'practice',ko:'연습'},{en:'predict',ko:'예측하다'},{en:'prepare',ko:'준비하다'},{en:'president',ko:'대통령 회장'},{en:'press',ko:'누르다 언론'},
    {en:'prevent',ko:'막다, 방해하다'},{en:'previous',ko:'앞의, 이전의'},{en:'price',ko:'가격'},{en:'pride',ko:'자존심'},{en:'prison',ko:'교도소'},
    {en:'probably',ko:'아마, 십중팔구'},{en:'professor',ko:'교수'},{en:'promise',ko:'약속하다'},{en:'proof',ko:'증거'},{en:'protect',ko:'보호하다'},
    {en:'proud',ko:'자랑스러운'},{en:'provide',ko:'제공하다'},{en:'public',ko:'대중의'},{en:'pull',ko:'당기다'},{en:'pump',ko:'퍼올리다'},
    {en:'punch',ko:'주먹질하다'},{en:'purchase',ko:'사다, 구입하다'},{en:'pure',ko:'순수한'},{en:'purple',ko:'자주색'},{en:'quite',ko:'꽤'},
    {en:'rapid',ko:'빠른'},{en:'rat',ko:'쥐'},{en:'rather',ko:'오히려'},{en:'reach',ko:'이르다 도달하다'},{en:'react',ko:'반응하다'},
    {en:'real',ko:'실제의'},{en:'realize',ko:'깨닫다'},{en:'reason',ko:'이유'},{en:'receive',ko:'받다'},{en:'recent',ko:'최근의'},
    {en:'recommend',ko:'추천하다'},{en:'record',ko:'기록하다'},{en:'recycle',ko:'재활용하다'},{en:'refrigerator',ko:'냉장고'},{en:'relax',ko:'안심시키다'},
    {en:'religion',ko:'종교'},{en:'remove',ko:'제거하다'},{en:'rent',ko:'빌리다 렌트하다'},{en:'repair',ko:'수리하다'},{en:'repeat',ko:'반복하다'},
    {en:'replace',ko:'교체하다'},{en:'reply',ko:'대답하다'},{en:'report',ko:'보고하다 보고서'},{en:'research',ko:'연구'},{en:'resemble',ko:'닮다'},
    {en:'resort',ko:'리조트'},{en:'resource',ko:'자원'},{en:'respect',ko:'존경하다'},{en:'respond',ko:'대답하다'},{en:'responsible',ko:'책임을 져야할'},
    {en:'rest',ko:'휴식'},{en:'result',ko:'결과'},{en:'retire',ko:'은퇴하다'},{en:'review',ko:'검토하다 후기'},{en:'rhythm',ko:'율동'},
    {en:'rice',ko:'쌀'},{en:'ride',ko:'타다'},{en:'rise',ko:'오르다 상승하다'},{en:'risk',ko:'위험'},{en:'rival',ko:'라이벌'},
    {en:'role',ko:'(배우의)역'},{en:'romantic',ko:'로맨틱한'},{en:'root',ko:'뿌리'},{en:'rope',ko:'밧줄'},{en:'round',ko:'둥근'},
    {en:'rude',ko:'버릇없는'},{en:'rule',ko:'규칙'},{en:'rumor',ko:'소문'},{en:'rush',ko:'돌진하다'},{en:'salary',ko:'봉급 봉급을 주다'},
    {en:'satisfy',ko:'만족시키다'},{en:'scan',ko:'스캔하다'},{en:'scene',ko:'장면'},{en:'screen',ko:'스크린'},{en:'search',ko:'찾다'},
    {en:'seat',ko:'좌석'},{en:'secret',ko:'비밀의'},{en:'seed',ko:'씨앗'},{en:'seek',ko:'찾다'},{en:'self',ko:'자기 스스로'},
    {en:'senior',ko:'상위의'},{en:'sense',ko:'감각'},{en:'series',ko:'연속'},{en:'serious',ko:'진지한'},{en:'serve',ko:'근무하다 제공하다'},
    {en:'several',ko:'몇몇의'},{en:'sex',ko:'성'},{en:'shade',ko:'그늘'},{en:'shadow',ko:'그림자'},{en:'shake',ko:'흔들어 움직이다'},
    {en:'shall',ko:'하겠다'},{en:'sharp',ko:'날카로운'},{en:'sheep',ko:'양'},{en:'shoot',ko:'쏘다'},{en:'shoulder',ko:'어깨'},
    {en:'shout',ko:'외치다'},{en:'shower',ko:'소나기'},{en:'shut',ko:'닫다'},{en:'sign',ko:'표시 사인'},{en:'silent',ko:'조용한'},
    {en:'silk',ko:'비단'},{en:'silly',ko:'어리석은 바보'},{en:'silver',ko:'은'},{en:'similar',ko:'유사한'},{en:'simple',ko:'단일의'},
    {en:'since',ko:'이후로'},{en:'single',ko:'단 하나의'},{en:'skill',ko:'기술'},{en:'slice',ko:'얇은조각'},{en:'slide',ko:'미끄러지다'},
    {en:'slim',ko:'호리호리한'},{en:'smoke',ko:'연기'},{en:'smooth',ko:'매끄러운'},{en:'snake',ko:'뱀'},{en:'soap',ko:'비누 비누로 씻다'},
    {en:'social',ko:'사회의'},{en:'society',ko:'사회'},{en:'software',ko:'소프트웨어'},{en:'soil',ko:'흙'},{en:'soldier',ko:'군인'},
    {en:'solve',ko:'해결하다'},{en:'soon',ko:'얼마 안 가서'},{en:'soul',ko:'영혼'},{en:'spark',ko:'불꽃'},{en:'special',ko:'특별한'},
    {en:'speech',ko:'연설'},{en:'spend',ko:'소비하다'},{en:'spot',ko:'장소'},{en:'stage',ko:'무대'},{en:'stairs',ko:'계단'},
    {en:'stamp',ko:'도장'},{en:'standard',ko:'기준 표준'},{en:'station',ko:'역'},{en:'steal',ko:'훔치다'},{en:'steam',ko:'증기'},
    {en:'steel',ko:'강철'},{en:'step',ko:'건다 계단'},{en:'still',ko:'여전히'},{en:'storm',ko:'폭풍'},{en:'strange',ko:'이상한'},
    {en:'succeed',ko:'성공하다'},{en:'such',ko:'이러한'},{en:'sudden',ko:'별안간의'},{en:'suggest',ko:'제안하다'},{en:'super',ko:'우수한'},
    {en:'sure',ko:'확신하는 확실한'},{en:'surprise',ko:'놀람'},{en:'surround',ko:'에워싸다'},{en:'survive',ko:'살아 남다'},{en:'sweet',ko:'달달한'},
    {en:'symbol',ko:'상징'},{en:'system',ko:'조직'},{en:'tag',ko:'태그'},{en:'tap',ko:'가볍게 치기'},{en:'target',ko:'과녁'},
    {en:'task',ko:'일'},{en:'tea',ko:'차'},{en:'tear',ko:'눈물'},{en:'teenage',ko:'10대'},{en:'temperature',ko:'온도'},
    {en:'term',ko:'기간'},{en:'terminal',ko:'터미널'},{en:'theater',ko:'극장'},{en:'then',ko:'그때'},{en:'thick',ko:'두꺼운'},
    {en:'thief',ko:'도둑'},{en:'thin',ko:'얇은'},{en:'though',ko:'그럼에도 불구하고'},{en:'thousand',ko:'천'},{en:'through',ko:'통하여 통해서'},
    {en:'throw',ko:'던지다'},{en:'thumb',ko:'엄지'},{en:'thus',ko:'그러므로'},{en:'tie',ko:'매다'},{en:'tight',ko:'단단한'},
    {en:'till',ko:'-까지'},{en:'tiny',ko:'자그마한'},{en:'tire',ko:'피로하게 하다'},{en:'title',ko:'표제'},{en:'tobacco',ko:'담배'},
    {en:'toilet',ko:'화장실'},{en:'tone',ko:'음조'},{en:'tongue',ko:'혀'},{en:'tool',ko:'기구 장비'},{en:'tough',ko:'거친'},
    {en:'tradition',ko:'전통'},{en:'traffic',ko:'교통'},{en:'tray',ko:'쟁반'},{en:'treasure',ko:'보물'},{en:'trend',ko:'트렌드 추세'},
    {en:'trophy',ko:'전리품'},{en:'trouble',ko:'고생'},{en:'trouser',ko:'바지'},{en:'trust',ko:'신뢰'},{en:'truth',ko:'진리'},
    {en:'tunnel',ko:'터널'},{en:'twin',ko:'쌍둥이'},{en:'unit',ko:'단위'},{en:'universe',ko:'우주'},{en:'university',ko:'대학교'},
    {en:'unless',ko:'-하지 않으면'},{en:'until',ko:'-까지'},{en:'update',ko:'갱신하다'},{en:'upon',ko:'-의 위에'},{en:'upward',ko:'위로 향한'},
    {en:'usual',ko:'평소의'},{en:'vacation',ko:'휴가'},{en:'value',ko:'가치'},{en:'vehicle',ko:'차량'},{en:'venture',ko:'모험'},
    {en:'victory',ko:'승리, 전승'},{en:'view',ko:'관점 시야'},{en:'village',ko:'마을'},{en:'vocabulary',ko:'어휘'},{en:'volume',ko:'양, 책의 권수'},
    {en:'vote',ko:'투표하다'},{en:'warn',ko:'경고하다'},{en:'waste',ko:'낭비하다'},{en:'wave',ko:'물결'},{en:'weak',ko:'약한'},
    {en:'wealth',ko:'재산'},{en:'weapon',ko:'무기'},{en:'whale',ko:'고래'},{en:'wheat',ko:'밀'},{en:'wheel',ko:'바퀴'},
    {en:'whether',ko:'-인지 어떤지'},{en:'which',ko:'어느 쪽'},{en:'while',ko:'하는 동안'},{en:'whistle',ko:'휘파람'},{en:'wide',ko:'폭넓은'},
    {en:'wild',ko:'야생의'},{en:'wing',ko:'날개'},{en:'wise',ko:'슬기로운'},{en:'within',ko:'이내에'},{en:'without',ko:'없이'},
    {en:'wool',ko:'양모'},{en:'would',ko:'하겠다'},{en:'wrap',ko:'싸다'},{en:'yet',ko:'아직'}
  ],
  toeic: [
    {en:'performance',ko:'공연, 성능, 실적'},{en:'given',ko:'-를 고려하면'},{en:'carefully',ko:'주의깊게'},{en:'supply',ko:'공급(품), 공급하다'},{en:'support',ko:'후원하다, 지원'},
    {en:'adequate',ko:'적절한, 충분한'},{en:'possible',ko:'가능한'},{en:'popular',ko:'인기있는'},{en:'substantially',ko:'상당히'},{en:'undergo',ko:'겪다'},
    {en:'suspend',ko:'중단하다'},{en:'rental',ko:'임대용의'},{en:'question',ko:'질문'},{en:'collection',ko:'소장품'},{en:'inquiry',ko:'문의(사항)'},
    {en:'originally',ko:'원래'},{en:'effective',ko:'효과적인'},{en:'thoroughly',ko:'철저하게'},{en:'initiative',ko:'캠페인, 솔선수범'},{en:'applicant',ko:'지원자'},
    {en:'recent',ko:'최근의'},{en:'several',ko:'몇몇의'},{en:'successful',ko:'성공적인'},{en:'intention',ko:'의도'},{en:'report',ko:'보고서, 보고하다'},
    {en:'requirement',ko:'요구사항'},{en:'shortly',ko:'신속히'},{en:'consider',ko:'고려하다'},{en:'everyone',ko:'모든사람'},{en:'remain',ko:'-의 상태로 남아있다.'},
    {en:'join',ko:'합류하다'},{en:'upcoming',ko:'다가올'},{en:'actively',ko:'적극적으로'},{en:'additionally',ko:'추가적으로'},{en:'eligible',ko:'자격을 갖춘'},
    {en:'instead',ko:'대신에'},{en:'steadily',ko:'꾸준히'},{en:'strategically',ko:'전략적으로'},{en:'advice',ko:'충고'},{en:'growth',ko:'성장'},
    {en:'inspect',ko:'점검하다'},{en:'productivity',ko:'생산성'},{en:'approach',ko:'접근해오다, 접근방식'},{en:'few',ko:'거의 없는'},{en:'commence',ko:'시작하다'},
    {en:'supplier',ko:'공급업체'},{en:'enclosed',ko:'동봉된'},{en:'find',ko:'찾다, 알게되다'},{en:'resolve',ko:'해결하다'},{en:'prevent',ko:'금지하다, 방해하다'},
    {en:'register for',ko:'-에 등록하다'},{en:'send',ko:'보내다'},{en:'another',ko:'또 다른'},{en:'so that',ko:'~하기 위해서, 그리하여'},{en:'free',ko:'무료의, ~가 없는'},
    {en:'conduct',ko:'수행하다'},{en:'whereas',ko:'반면에'},{en:'cancel',ko:'취소하다'},{en:'present',ko:'발표하다, 현재의'},{en:'likely',ko:'가능성 있는'},
    {en:'substantial',ko:'상당한'},{en:'valid',ko:'유효한'},{en:'wide',ko:'넓은'},{en:'previously',ko:'이전에'},{en:'specially',ko:'특별히'},
    {en:'repeatedly',ko:'반복해서'},{en:'cleaning',ko:'세척'},{en:'demand',ko:'수요'},{en:'enthusiasm',ko:'열정, 인기, 환호'},{en:'need',ko:'필요로 하다, 요구사항'},
    {en:'notice',ko:'통보, 알아차리다'},{en:'excellent',ko:'훌륭한'},{en:'comply with',ko:'준수하다'},{en:'effort',ko:'노력'},{en:'maintain',ko:'유지하다'},
    {en:'in addition to',ko:'게다가'},{en:'permit',ko:'허가하다, 허가(증)'},{en:'whatever',ko:'무엇이든지'},{en:'whoever',ko:'누구든지'},{en:'inspection',ko:'점검'},
    {en:'launch',ko:'출시하다, 출시'},{en:'highly',ko:'높게'},{en:'enough',ko:'충분한, 충분히'},{en:'work',ko:'근무하다, 업무'},{en:'such as',ko:'-와 같은'},
    {en:'besides',ko:'게다가, ~외에'},{en:'precisely',ko:'정밀하게'},{en:'confirmation',ko:'확인, 예약확인서'},{en:'emphasize',ko:'강조하다'},{en:'last',ko:'마지막으로, 지속하다'},
    {en:'completely',ko:'완전히'},{en:'correctly',ko:'정확하게'},{en:'enable',ko:'가능하게 만들다'},{en:'replacement',ko:'교체자, 교체품'},{en:'cause',ko:'야기하다'},
    {en:'profitable',ko:'수익성있는'},{en:'surround',ko:'에워싸다'},{en:'effect',ko:'효과, 영향'},{en:'employee',ko:'직원'},{en:'error',ko:'오류'},
    {en:'event',ko:'행사'},{en:'part',ko:'부분, 부품'},{en:'promotional',ko:'홍보용의'},{en:'phase',ko:'단계'},{en:'response',ko:'응답, 반응'},
    {en:'address',ko:'연설, 처리하다'},{en:'ensure',ko:'확실히 해두다'},{en:'market',ko:'시장, 판매하다'},{en:'none',ko:'아무도, 아무것도'},{en:'specialize in',ko:'전문화하다'},
    {en:'strong',ko:'강력한'},{en:'generously',ko:'관대하게'},{en:'replace',ko:'교체하다'},{en:'negotiation',ko:'협상'},{en:'many',ko:'수많은, 많은 사람들'},
    {en:'exceptional',ko:'탁월한'},{en:'book',ko:'예약하다'},{en:'provided that',ko:'고려하여'},{en:'recognize',ko:'인정하다'},{en:'appropriate',ko:'적절한'},
    {en:'assemble',ko:'조립하다, 모으다'},{en:'defective',ko:'불량의'},{en:'diverse',ko:'다양한'},{en:'compliance',ko:'준수'},{en:'efficient',ko:'효율적인'},
    {en:'functional',ko:'작동하는, 기능성의'},{en:'heavy',ko:'엄청난'},{en:'local',ko:'지역의'},{en:'achievement',ko:'성과'},{en:'specific',ko:'구체적인'},
    {en:'recommendation',ko:'추천'},{en:'personnel',ko:'직원, 인력'},{en:'regulations',ko:'규정'},{en:'entrance',ko:'출입(문)'},{en:'expansion',ko:'확장'},
    {en:'construction',ko:'공사'},{en:'assist',ko:'도와주다'},{en:'identification',ko:'신분증명'},{en:'depend on',ko:'의지하다, ~에 따르다'},{en:'measure',ko:'조치, 측정하다'},
    {en:'under',ko:'~하에, ~중인'},{en:'reasonably',ko:'합리적으로'},{en:'completion',ko:'완성, 종료'},{en:'remarkably',ko:'현저히'},{en:'unfortunately',ko:'불행히'},
    {en:'seldom',ko:'좀 처럼 ~ 아닌'},{en:'acquisition',ko:'인수'},{en:'approve',ko:'승인하다'},{en:'transaction',ko:'거래'},{en:'reminder',ko:'알람'},
    {en:'decide',ko:'결정하다'},{en:'arrange',ko:'준비하다, 예약하다'},{en:'evolve',ko:'진화하다'},{en:'exceed',ko:'초과하다'},{en:'focus on',ko:'포커스를 맞추다'},
    {en:'reach',ko:'도달하다'},{en:'release',ko:'발표하다, 출시'},{en:'furthermore',ko:'게다가'},{en:'residential',ko:'거주용의'},{en:'in advance of',ko:'-이전에'},
    {en:'typically',ko:'일반적으로'},{en:'obtain',ko:'획득하다'},{en:'entirely',ko:'전체적으로'},{en:'even',ko:'심지어'},{en:'closely',ko:'세밀히, 긴밀히'},
    {en:'safety',ko:'안전'},{en:'currently',ko:'현재'},{en:'vacant',ko:'비어있는'},{en:'accuretely',ko:'정확하게'},{en:'routine',ko:'일상의'},
    {en:'seasonal',ko:'계절적인'},{en:'meet',ko:'충족시키다, 만나다'},{en:'valuable',ko:'소중한, 가치있는'},{en:'as well',ko:'게다가'},{en:'effectively',ko:'효과적으로'},
    {en:'elsewhere',ko:'다른 어디선가'},{en:'close',ko:'닫다, 세밀한'},{en:'formally',ko:'공식적으로'},{en:'how',ko:'어떻게, 얼마나'},{en:'firmly',ko:'확고히'},
    {en:'largely',ko:'주로'},{en:'lately',ko:'최근에'},{en:'perfectly',ko:'완벽히'},{en:'surprisingly',ko:'놀라울 정도로'},{en:'take',ko:'취하다'},
    {en:'usually',ko:'보통'},{en:'appreciation',ko:'감사'},{en:'concern',ko:'우려사항, 관심'},{en:'contract',ko:'계약(서)'},{en:'occasionally',ko:'때때로'},
    {en:'like',ko:'-와 같이, 좋아하다'},{en:'day',ko:'일'},{en:'delay',ko:'지연시키다, 지연'},{en:'development',ko:'개발, 최신소식'},{en:'consideration',ko:'고려, 심사숙고'},
    {en:'presentation',ko:'발표'},{en:'opening',ko:'개업, 공석, 시작하는'},{en:'industry',ko:'산업(체)'},{en:'employ',ko:'고용하다'},{en:'order',ko:'주문(서), 순서'},
    {en:'position',ko:'직위, 일자리'},{en:'preparation',ko:'준비'},{en:'recognition',ko:'인정, 기념'},{en:'recruit',ko:'모집하다, 신입사원'},{en:'attract',ko:'매료시키다, 유치하다'},
    {en:'representative',ko:'대표, 대신하는'},{en:'request',ko:'요청(서), 요청하다'},{en:'restoration',ko:'복구'},{en:'delegate',ko:'위임하다, 파견자'},{en:'terms',ko:'기간, 조건'},
    {en:'earnings',ko:'수익금'},{en:'at least',ko:'최소'},{en:'considerable',ko:'상당한'},{en:'appear',ko:'나타나다, 드러나다'},{en:'apply for',ko:'신청하다, 지원하다'},
    {en:'begin',ko:'시작하다'},{en:'assure',ko:'확신하게 만들다'},{en:'apologize for',ko:'사과하다'},{en:'claim',ko:'청구, 청구하다'},{en:'promise',ko:'약속하다, 약속'},
    {en:'rate',ko:'비율, 등급을 매기다'},{en:'rise',ko:'상승하다, 상속'},{en:'predict',ko:'예측하다'},{en:'direct',ko:'직접적인, 안내하다'},{en:'face',ko:'직면하다'},
    {en:'open',ko:'공개된, 비어있는'},{en:'inform',ko:'-에게 통보하다'},{en:'note',ko:'명시하다, 기록하다'},{en:'award',ko:'상, 시상하다'},{en:'clear',ko:'확실한'},
    {en:'become',ko:'되다'},{en:'accommodate',ko:'수용하다'},{en:'assume',ko:'떠맡다, 추정하다'},{en:'value',ko:'가치, 가치를 두다'},{en:'refer to',ko:'참조하다, 언급하다'},
    {en:'certified',ko:'검증된'},{en:'seek',ko:'찾다, 구하다'},{en:'normally',ko:'보통'},{en:'commit',ko:'위임하다'},{en:'impressed',ko:'감명받은'},
    {en:'affect',ko:'영향을 끼치다'},{en:'organizational',ko:'조직상의'},{en:'existing',ko:'기존의'},{en:'produce',ko:'제작하다, 농산물'},{en:'distribution',ko:'유통, 배포'},
    {en:'more than',ko:'이상'},{en:'desired',ko:'원하는, 갈망하는'},{en:'ease',ko:'편의'},{en:'current',ko:'현재의'},{en:'come',ko:'오다'},
    {en:'retrieve',ko:'회수하다'},{en:'brief',ko:'설명하다,잠시동안의'},{en:'shift',ko:'전환, 근무조'},{en:'poor',ko:'저조한'},{en:'attempt',ko:'시도, 시도하다'},
    {en:'addition',ko:'추가(물), 추가인력'},{en:'challenging',ko:'까다로운'},{en:'generous',ko:'관대한'},{en:'repeat',ko:'반복하다'},{en:'information',ko:'정보'},
    {en:'reflect',ko:'반영하다'},{en:'immediate',ko:'즉각적인'},{en:'important',ko:'중요한'},{en:'late',ko:'늦은, 늦게'},{en:'inviting',ko:'매력적인'},
    {en:'less',ko:'더 적은, 덜'},{en:'promising',ko:'(장래가) 유망한'},{en:'necessary',ko:'필수적인'},{en:'objective',ko:'목적'},{en:'official',ko:'공식적인, 고위간부'},
    {en:'noticeable',ko:'눈에 띄는'},{en:'powerful',ko:'강력한'},{en:'familiar',ko:'친숙한'},{en:'faster',ko:'더 빠른, 더 빠르게'},{en:'enthusiastic',ko:'열정적인'},
    {en:'further',ko:'추가적인, 추가로'},{en:'optional',ko:'선택가능한'},{en:'delivery',ko:'배송'},{en:'quietly',ko:'조용하게'},{en:'correspondence',ko:'서신왕래 (편지)'},
    {en:'elect',ko:'선출하다'},{en:'exhibit',ko:'전시하다, 전시품'},{en:'finish',ko:'끝내다'},{en:'merge with',ko:'합병하다'},{en:'relatively',ko:'비교적으로'},
    {en:'routinely',ko:'일상적으로, 자주'},{en:'there',ko:'거기에서'},{en:'affordably',ko:'합리적으로'},{en:'preferred',ko:'선호되는'},{en:'urgently',ko:'긴급하게'},
    {en:'probable',ko:'가능성 있는'},{en:'accomplishments',ko:'성과, 업적'},{en:'article',ko:'기사'},{en:'attendance',ko:'참가(율), 참가자 수'},{en:'benefit',ko:'복지혜택, 혜택을 받다'},
    {en:'career',ko:'전공, 이력'},{en:'celebration',ko:'축하, 축하연'},{en:'collaboration',ko:'협력'},{en:'host',ko:'주최하다, 모시다'},{en:'no',ko:'없는'},
    {en:'more',ko:'더 많은, 더욱'},{en:'investment',ko:'투자, 투자금'},{en:'quite',ko:'꽤'},{en:'donate',ko:'기부하다'},{en:'style',ko:'스타일, 형태'},
    {en:'remarkable',ko:'현저한'},{en:'task',ko:'업무'},{en:'preside over',ko:'(회의를) 주재하다'},{en:'indicate',ko:'나타내다, 표시하다'},{en:'pickup',ko:'가져가다'},
    {en:'post',ko:'게시하다'},{en:'ship',ko:'배송하다'},{en:'sell',ko:'팔다'},{en:'remove',ko:'제거하다'},{en:'verify',ko:'확인하다'},
    {en:'except for',ko:'제외하고'},{en:'rewarding',ko:'보람된'},{en:'variation',ko:'변수, 변형물'},{en:'instead of',ko:'대신에'},{en:'someone',ko:'누군가'},
    {en:'registration',ko:'등록'},{en:'attractive',ko:'매력적인'},{en:'comfortable',ko:'편안한'},{en:'competent',ko:'유능한'},{en:'correct',ko:'정확한, 수정하다'},
    {en:'creative',ko:'창조적인'},{en:'different',ko:'다른'},{en:'distinctive',ko:'독특한'},{en:'educational',ko:'교육의'},{en:'excited',ko:'기쁜'},
    {en:'expensive',ko:'값비싼'},{en:'next',ko:'다음의'},{en:'optimal',ko:'최적의'},{en:'high',ko:'높은, 높게'},{en:'acquire',ko:'획득하다, 인수하다'},
    {en:'rare',ko:'희귀한'},{en:'practical',ko:'실용적인'},{en:'relaxing',ko:'편안한'},{en:'subject',ko:'영향을 받는'},{en:'total',ko:'총, 전체의'},
    {en:'unable',ko:'할 수 없는'},{en:'ask',ko:'요청하다'},{en:'even so',ko:'그렇다 하더라도'},{en:'far',ko:'훨씬, 거리가 먼'},{en:'unforeseen',ko:'예기치 않은'},
    {en:'gently',ko:'부드럽게'},{en:'hardly',ko:'거의 아닌'},{en:'eagerly',ko:'열렬히'},{en:'in particular',ko:'특히'},{en:'durable',ko:'내구성이 강한'},
    {en:'earlier',ko:'더 이른, ~초에'},{en:'notwithstanding',ko:'그럼에도 불구하고'},{en:'monitor',ko:'점검하다'},{en:'where',ko:'그 곳에서'},{en:'owing to',ko:'-때문에'},
    {en:'courtesy',ko:'호의'},{en:'proceed with',ko:'(주어가) 나아가다'},{en:'quick',ko:'빠른'},{en:'instructional',ko:'지침용의'},{en:'technical',ko:'기술적인'},
    {en:'hold',ko:'개최하다, 보유하다'},{en:'active',ko:'활동적인'},{en:'aspire',ko:'열망하다'},{en:'alternative',ko:'대안의, 대안'},{en:'clean',ko:'깨끗한'},
    {en:'collaborative',ko:'협력적인'},{en:'commendable',ko:'칭찬할 만한'},{en:'confidential',ko:'기밀의'},{en:'critical',ko:'중요한, 비판적인'},{en:'comprehensive',ko:'종합적인'},
    {en:'distinct',ko:'뚜렷한, 확연한'},{en:'cooperation',ko:'협력'},{en:'consequence',ko:'결과'},{en:'decision',ko:'결정'},{en:'dedication',ko:'헌신'},
    {en:'feasibility',ko:'실행가능성'},{en:'determine',ko:'판단하다, 결정하다'},{en:'opportunity',ko:'기회'},{en:'instructions',ko:'지시사항'},{en:'lengthy',ko:'장황한, 기나긴'},
    {en:'location',ko:'지점, 위치'},{en:'loyalty',ko:'고객충성(도)'},{en:'maintenance',ko:'설비 점검 , 보수'},{en:'merchandise',ko:'상품'},{en:'option',ko:'선택사항'},
    {en:'designate',ko:'지정하다'},{en:'performer',ko:'공연자, 공연업체'},{en:'period',ko:'기간'},{en:'photograph',ko:'사진'},{en:'renowned',ko:'저명한'},
    {en:'procedure',ko:'절차, 과정'},{en:'progress',ko:'성과, 진행'},{en:'publication',ko:'발행(물)'},{en:'reason',ko:'이유'},{en:'decline',ko:'거절하다, 감소하다'},
    {en:'sizable',ko:'큰'},{en:'impact',ko:'영향'},{en:'stable',ko:'안정한'},{en:'thorough',ko:'철저한'},{en:'unwanted',ko:'원치않은'},
    {en:'vulnerable to',ko:'-에 치명적인'},{en:'accidently',ko:'우연히'},{en:'accordingly',ko:'걸맞게, 상응하게'},{en:'willing',ko:'자발적인'},{en:'alternatively',ko:'대안으로, 혹은'},
    {en:'always',ko:'항상'},{en:'barely',ko:'가까스로'},{en:'briefly',ko:'간략하게'},{en:'relocation',ko:'이주'},{en:'leading',ko:'선도하는, 일류의'},
    {en:'damage',ko:'손실, 손실을 입히다'},{en:'near',ko:'가까이에'},{en:'resolution',ko:'결의 (안)'},{en:'two',ko:'둘의'},{en:'selection',ko:'소장품'},
    {en:'service',ko:'근무'},{en:'show',ko:'보여주다, 쇼'},{en:'accelerate',ko:'가속화하다, 촉진시키다'},{en:'space',ko:'공간'},{en:'submission',ko:'제출(서류/작품)'},
    {en:'distributor',ko:'유통업자(체)'},{en:'consequently',ko:'그 결과로'},{en:'continuously',ko:'계속해서'},{en:'diligently',ko:'부지런하게'},{en:'dramatically',ko:'엄청나게'},
    {en:'exactly',ko:'정확하게'},{en:'very',ko:'매우'},{en:'inside',ko:'안쪽에'},{en:'if so',ko:'만약 그러하다면'},{en:'mistakenly',ko:'실수로'},
    {en:'surpass',ko:'초과하다'},{en:'much',ko:'(양이)많은, 훨씬'},{en:'newly',ko:'새롭게'},{en:'favorably',ko:'우호적으로'},{en:'first',ko:'우선, 첫번째의'},
    {en:'primarily',ko:'주로'},{en:'probably',ko:'아마도, 유력하게'},{en:'regretfully',ko:'유감스럽게도'},{en:'readily',ko:'쉽게'},{en:'inaccessible',ko:'이용불가한'},
    {en:'strictly',ko:'엄격하게'},{en:'strongly',ko:'강력히'},{en:'then',ko:'그 때 , 그러고 나서'},{en:'next to',ko:'옆에'},{en:'widely',ko:'널리'},
    {en:'coverage',ko:'보상, 취재'},{en:'administrator',ko:'관리자'},{en:'admiration',ko:'감탄, 찬사'},{en:'admission',ko:'입장'},{en:'on behalf of',ko:'-~를 대표하여'},
    {en:'arrangements',ko:'준비, 예약'},{en:'authority',ko:'권한, 권위기관'},{en:'break',ko:'휴식기간'},{en:'candidate',ko:'지원자'},{en:'challenge',ko:'도전과제, 업무'},
    {en:'comments',ko:'이야기, 피드백'},{en:'why',ko:'왜 하는지'},{en:'competition',ko:'대회, 경쟁'},{en:'temporary',ko:'일시적인'},{en:'convenience',ko:'편의, 편리'},
    {en:'destination',ko:'목적지'},{en:'description',ko:'설명'},{en:'sufficient',ko:'충분한'},{en:'employment',ko:'고용(율)'},{en:'delight',ko:'기쁘게 만들다'},
    {en:'equipment',ko:'설비'},{en:'site',ko:'장소'},{en:'past',ko:'지나쳐서, 과거의'},{en:'firm',ko:'회사, 확고한'},{en:'founding',ko:'설립'},
    {en:'help',ko:'도움을 주다, 도움'},{en:'anticipate',ko:'기대하다'},{en:'economical',ko:'저렴한'},{en:'assurance',ko:'확신'},{en:'create',ko:'(새롭게) 만들다'},
    {en:'full',ko:'가득찬, 100%의'},{en:'contribution',ko:'기여, 기부'},{en:'emerge as',ko:'-로서 부상하다'},{en:'rapid',ko:'급속한'},{en:'pending',ko:'임박한, 미정의'},
    {en:'comparatively',ko:'비교적'},{en:'application',ko:'약속, 임명'},{en:'roughly',ko:'대략'},{en:'perform',ko:'실행하다, 공연하다'},{en:'a series of',ko:'다양한'},
    {en:'as a result of',ko:'-의 결과로'},{en:'make up for',ko:'을 보충하다'},{en:'lower',ko:'더 낮은, 낮추다'},{en:'contact',ko:'연락하다'},{en:'build',ko:'건설하다, 형성하다'},
    {en:'basic',ko:'기본적인'},{en:'consult',ko:'상담하다, 참조하다'},{en:'neither',ko:'둘 다 아닌'},{en:'separate',ko:'별도의, 분리하다'},{en:'recipient',ko:'수령인, 수상자'},
    {en:'beyond',ko:'넘어선, 이 후'},{en:'expense',ko:'비용'},{en:'exceptionally',ko:'특출나게'},{en:'reliably',ko:'믿을만하게'},{en:'eventually',ko:'결국에'}
  ],
  gre: [
    {en:'porcelain',ko:'자기'},{en:'pore',ko:'구멍, 공극'},{en:'porous',ko:'다공성의, 스며드는, 침투성의'},{en:'portent',ko:'(불길한) 징후, 전조, 경이적인 것/사람'},{en:'portentous',ko:'불길한, 흉조의, 경이적인, 놀랄만한'},
    {en:'portfolio',ko:'서류 가방, 유가 증권 명세표'},{en:'portrait',ko:'초상화'},{en:'poseur',ko:'젠체하는 사람'},{en:'posit',ko:'∼에 두다, 놓다, 사실로 가정하다'},{en:'posterity',ko:'자손, 후대'},
    {en:'postulate',ko:'요구하다, 사실로 가정하다'},{en:'posture',ko:'뽐내는 자세를 취하다, 태도를 취하다'},{en:'pot',ko:'단지, 항아리, 통발'},{en:'potable',ko:'음료로 적합한'},{en:'potboiler',ko:'(돈벌이를 위한) 문학/예술 작품 또는 그 작가'},
    {en:'potentate',ko:'세력가, 유력자, 군주, 지배자'},{en:'potentiate',ko:'유력하게 하다, 약효를 높이다'},{en:'pout',ko:'삐죽거리다, (입술이) 튀어나오다'},{en:'prairie',ko:'(미시시피강 유역의) 대평원'},{en:'prate',ko:'재잘대다'},
    {en:'preach',ko:'설교하다, 전도하다, 권유하다'},{en:'preamble',ko:'전문, 서문, 머리말'},{en:'precarious',ko:'불안정한, 미덥지 않은, 위험한, 근거가'},{en:'precaution',ko:'예방책'},{en:'precedent',ko:'전례'},
    {en:'precipice',ko:'절벽, 벼랑, 위기, 궁지'},{en:'precipitant',ko:'곤두박이치는, 경솔한'},{en:'precipitate',ko:'곤두박질치게 하다, 재촉하다'},{en:'precipitation',ko:'낙하, 추락, 재촉, 촉진, 강수량, 강설량'},{en:'precipitous',ko:'깎아지른 듯한, 급경사의, 허둥대는'},
    {en:'precis',ko:'요약, 대요'},{en:'preclude',ko:'가로막다, 불가능하게 하다'},{en:'precocity',ko:'조숙'},{en:'precursor',ko:'선구자, 조짐'},{en:'predecessor',ko:'전임자, 조상'},
    {en:'predestine',ko:'숙명지우다, 운명짓다'},{en:'predilection',ko:'편애'},{en:'preeminent',ko:'돋보이는, 탁월한'},{en:'preempt',ko:'선점하다, 사물(私物)화하다'},{en:'preen',ko:'(부리로 날개를) 다듬다, 멋 부리다'},
    {en:'preface',ko:'서문'},{en:'prefigure',ko:'미리 형상화하다, 예상하다'},{en:'pregnant',ko:'임신한,다산의,충만한,가득한,의미심장한'},{en:'prehensile',ko:'잡기에 적당한'},{en:'prejudice',ko:'편견, 선입관'},
    {en:'preliminary',ko:'예비의, 서두의, 준비의'},{en:'premeditated',ko:'미리 계획된'},{en:'premonition',ko:'예감, 징조'},{en:'preoccupation',ko:'열중, 몰두, 선입관, 편견'},{en:'preordain',ko:'예정하다, 운명을 미리 정하다'},
    {en:'preponderant',ko:'우세한, 압도적인'},{en:'prepossessing',ko:'매력적인'},{en:'preposterous',ko:'상식을 벗어난, 불합리한'},{en:'prerogative',ko:'특권, 특전, (남보다 뛰어난) 자질'},{en:'presage',ko:'전조, 조짐, 예지, 선견'},
    {en:'prescience',ko:'예지, 선견'},{en:'prescription',ko:'처방'},{en:'presentiment',ko:'예감, 육감'},{en:'preservative',ko:'방부제'},{en:'press',ko:'밀다, 눌러 펴다(iron), 압축/압착하다, 껴안다'},
    {en:'prestige',ko:'명성, 신망, 저명, 인기'},{en:'presumptuous',ko:'뻔뻔스러운, 막무가내의'},{en:'pretend',ko:'꾸미다, 가장하다, 거짓말하다'},{en:'pretense',ko:'속임수, 허위, 핑계, 겉치레'},{en:'preternatural',ko:'초자연적인, 불가사의한'},
    {en:'prevail',ko:'널리 퍼지다, 유행되고 있다, 우세하다'},{en:'prevalent',ko:'널리 퍼진, 유행하는'},{en:'prevaricate',ko:'얼버무리다'},{en:'prickly',ko:'가시가 많은, 따끔따끔 아픈, 쑤시는, 성가신'},{en:'primordial',ko:'최초의, 근본적인'},
    {en:'prim',ko:'꼼꼼한'},{en:'prime',ko:'주요한, 탁월한, 최고의, 최초의, 초기의, 전성기'},{en:'principal',ko:'주요한, 주된'},{en:'prissy',ko:'몹시 깔끔한, 까다로운'},{en:'pristine',ko:'초기의, 원시 상태의, 오염되지 않은, 소박한'},
    {en:'privation',ko:'결여, 궁핍 상실, 박탈, 몰수'},{en:'privilege',ko:'특권'},{en:'probe',ko:'엄밀히 조사하다'},{en:'probity',ko:'청렴, 정직'},{en:'proclivity',ko:'성향'},
    {en:'procrastinate',ko:'늑장부리다, 꾸물거리다'},{en:'procure',ko:'획득하다'},{en:'prod',ko:'쿡쿡 찌르다, 자극하다, 격려하다'},{en:'prodigal',ko:'낭비하는'},{en:'prodigious',ko:'거대한, 막대한(enormous)'},
    {en:'prodigy',ko:'천재, 신동, 경이로운 일/사건'},{en:'profane',ko:'신성 모독하다, 남용/오용하다'},{en:'proffer',ko:'제의하다'},{en:'proficient',ko:'숙련된'},{en:'profligate',ko:'낭비하는, 방탕한'},
    {en:'profundity',ko:'깊음, 깊이, 심오, 난해함, 심연(abyss)'},{en:'profuse',ko:'많은'},{en:'profusion',ko:'풍부, 낭비'},{en:'prohibitive',ko:'금하는, (값이) 터무니없는'},{en:'projection',ko:'투사, 발사, 돌출, 추정, 견적'},
    {en:'proliferate',ko:'증식하다, 만연하다'},{en:'prolific',ko:'다작의, 다산의, 풍부한'},{en:'prolix',ko:'지루하게 긴, 장황한'},{en:'prologue',ko:'서두, 서언, 개시, 발단'},{en:'prolong',ko:'늘이다'},
    {en:'prominent',ko:'튀어나온, 두드러진, 유명한, 탁월한'},{en:'promote',ko:'진척시키다, 승진시키다'},{en:'promulgate',ko:'공표하다'},{en:'proofread',ko:'교정하다'},{en:'propagate',ko:'번식시키다, 전하다, 널리 퍼트리다'},
    {en:'propensity',ko:'경향'},{en:'prophecy',ko:'예언 (능력), (성서) 예언서'},{en:'prophetic',ko:'예언하는, 전조가 되는'},{en:'prophylactic',ko:'예방의'},{en:'propitiate',ko:'달래다, 진정시키다'},
    {en:'propitious',ko:'길조의, 호의적인'},{en:'proponent',ko:'제창자, 발의자, 지지자'},{en:'proposal',ko:'제안, 계획, 기획, 구혼'},{en:'propriety',ko:'예의 바름, 단정, 적당, 타당'},{en:'prosaic',ko:'평범한, 재미없는'},
    {en:'proscribe',ko:'배척하다, 금지하다'},{en:'prose',ko:'산문'},{en:'prosecute',ko:'기소하다'},{en:'prosecution',ko:'기소'},{en:'proselytize',ko:'변절/개종시키다'},
    {en:'prospect',ko:'(광산 등을) 시굴하다'},{en:'prosperous',ko:'번영하는, 형편이 좋은'},{en:'prostrate',ko:'엎드리다, 굴복시키다, 압도하다'},{en:'protagonist',ko:'(극, 소설 속의) 주역, 주인공, 주창자, 지도자'},{en:'protean',ko:'변화무쌍한'},
    {en:'protest',ko:'항의하다, 주장하다'},{en:'protocol',ko:'외교 의례, 조약 원안'},{en:'protract',ko:'연장하다, 오래 끌다'},{en:'protrude',ko:'튀어나오다, 돌출하다'},{en:'protrusion',ko:'돌출'},
    {en:'protuberant',ko:'돌출한, 현저한, 두드러진'},{en:'providence',ko:'섭리, 하느님의 뜻, 선견지명'},{en:'provident',ko:'장래를 대비하는, 검소한'},{en:'providential',ko:'천우신조의, 운 좋은'},{en:'provincial',ko:'지방의, 시골의, 촌스러운, 투박한'},
    {en:'provisional',ko:'임시적인'},{en:'proviso',ko:'단서, 조건'},{en:'provisory',ko:'조건부의'},{en:'provoke',ko:'자극하다'},{en:'prowess',ko:'용기, 탁월한 기량'},
    {en:'prowl',ko:'헤매다, 서성거리다, 배회하다'},{en:'proximal',ko:'기부의, 근칭의'},{en:'proximity',ko:'(장소, 시간 등이) 21가까움'},{en:'prude',ko:'얌전한체하는 사람, 새침데기'},{en:'prudent',ko:'신중한, 빈틈없는'},
    {en:'prudish',ko:'몹시 얌전빼는'},{en:'prune',ko:'말린 자두 v. 잘라내다, 치다, 전지하다, 삭감하다, 줄이다'},{en:'pry',ko:'꼬치꼬치 캐내다'},{en:'pseudonym',ko:'익명, 가명, 필명(pen name)'},{en:'psychology',ko:'심리학'},
    {en:'pucker',ko:'주름지게 하다, 오그라들다'},{en:'puckish',ko:'장난꾸러기의, 멋대로의, 무책임한'},{en:'puerile',ko:'유치한, 미숙한'},{en:'pugnacious',ko:'싸우기 좋아하는'},{en:'puissance',ko:'권력, 세력 POWER, MIGHT'},
    {en:'pulchritude',ko:'미모, 육체미'},{en:'pullet',ko:'어린 암탉'},{en:'pulverize',ko:'가루로 만들다, 크게 상처를 입히다'},{en:'pun',ko:'(동음이의어를 이용한) 말장난, 익살'},{en:'punch',ko:'결정적 말 the climax of a joke or humorous story'},
    {en:'punch line',ko:'결정적 말'},{en:'punctilious',ko:'(규정, 형식에) 꼼꼼한, 딱딱한'},{en:'puncture',ko:'찌르다, 구멍을 뚫다, 무효로 만들다'},{en:'pundit',ko:'대학자'},{en:'pungent',ko:'(맛이) 톡 쏘는, 신랄한'},
    {en:'punitive',ko:'형벌의'},{en:'puny',ko:'왜소한, 하찮은'},{en:'purchase',ko:'구입, 획득, 입수, 지레 장치, 기중 장치, 힘이 되는 것'},{en:'purebred',ko:'순종의'},{en:'purgatory',ko:'영혼의 정화, 연옥'},
    {en:'purist',ko:'관례에 엄격한 사람, 순수주의자'},{en:'purity',ko:'맑음, 청결, 순수'},{en:'purlieu',ko:'변두리, 인근, 주변, 자주 가는 장소'},{en:'purloin',ko:'훔치다'},{en:'purpose',ko:'목적,의지,용도,요점,취지,의미'},
    {en:'purvey',ko:'조달하다, 공급하다'},{en:'pusillanimous',ko:'소심한, 우유부단한 lacking courage, cowardly'},{en:'putative',ko:'소문에 들리는'},{en:'putrefaction',ko:'부패'},{en:'quack',ko:'돌팔이 의사, 허풍선이(charlatan)'},
    {en:'quaff',ko:'단숨에 들이켜다'},{en:'quail',ko:'움츠리다, 겁먹다'},{en:'quaint',ko:'기이한'},{en:'qualified',ko:'자질을 갖춘, 조건부의'},{en:'qualm',ko:'꺼림칙함, 의심, 불안'},
    {en:'quandary',ko:'불확실한 상태, 진퇴양난'},{en:'quarantine',ko:'(질병 예방을 위한) 격리'},{en:'quarry',ko:'채석하다, (지식, 사냥감 등을) 찾다'},{en:'quartet',ko:'4중창단, 4중주단, 4인조, 4개 한'},{en:'quash',ko:'진압하다, 가라앉히다'},
    {en:'quatrain',ko:'4행 연구'},{en:'quaver',ko:'벌벌 떨다, 떨리는 소리로 말하다'},{en:'quell',ko:'진압하다, 가라앉히다, 누그러지게 하다'},{en:'quench',ko:'끄다, 물로 식히다, 억제하다'},{en:'querulous',ko:'불평 많은'},
    {en:'quest',ko:'탐색, 추구'},{en:'questionnaire',ko:'(조사 연구를 위한) 질문 사항, 앙케트'},{en:'queue',ko:'줄'},{en:'quibble',ko:'요점을 얼버무리다, 트집을 잡다'},{en:'quicksand',ko:'헤어나기 힘든 상황, 유동적이고 위험한 상태'},
    {en:'quiescent',ko:'조용한'},{en:'quietude',ko:'평정, 안정, 안식'},{en:'quip',ko:'신랄한 말, 빈정대는 말, 핑계, 기행'},{en:'quisling',ko:'매국노'},{en:'quixotic',ko:'돈키호테식의, 변덕스러운'},
    {en:'quota',ko:'할당량, 정원'},{en:'quotidian',ko:'매일의, 흔해빠진'},{en:'rabble',ko:'폭도, 어중이떠중이, 오합지졸, 하층 계급'},{en:'rabid',ko:'과격한, 미쳐 날뛰는'},{en:'racketeer',ko:'무법자, 협잡꾼'},
    {en:'raconteur',ko:'이야기꾼'},{en:'racy',ko:'독특한 풍미가 있는, 짜릿한, 통쾌한'},{en:'radical',ko:'근본적인, 극단적인, 급진적인, 과격한'},{en:'raffish',ko:'비천한, 저속한'},{en:'raffle',ko:'복권식 판매'},
    {en:'rafter',ko:'서까래, 들보'},{en:'rage',ko:'격노'},{en:'ragged',ko:'너덜너덜한,누더기를 걸친,덥수룩한,울퉁불퉁한'},{en:'rail',ko:'욕하다'},{en:'raisin',ko:'건포도'},
    {en:'rakish',ko:'방탕한, 무절제한'},{en:'rally',ko:'다시 모으다'},{en:'ramble',ko:'어슬렁거리다, 장황하게 이야기하다'},{en:'rambunctious',ko:'미친 듯 날뛰는'},{en:'ramify',ko:'가지 모양으로 갈라지다, 분지하다'},
    {en:'ramification',ko:'결과'},{en:'rampart',ko:'성벽, 방어물'},{en:'ramshackle',ko:'덜커덩거리는'},{en:'rancid',ko:'악취가 나는'},{en:'rancor',ko:'원한'},
    {en:'randomize',ko:'무작위 추출하다'},{en:'range',ko:'한계, 범위, 사정거리, 연속, 산맥'},{en:'ranger',ko:'산림 경비원, 무장 순찰 대원'},{en:'rank',ko:'지나치게 무성한, 역한 냄새/맛이 나는'},{en:'rankle',ko:'안달 나게 괴롭히다'},
    {en:'rant',ko:'호통 치다, 호언장담하다'},{en:'rapacious',ko:'강탈하는, 만족할 줄 모르는'},{en:'rapport',ko:'(조화로운) 관계'},{en:'rapprochement',ko:'국가간의 친선'},{en:'rapscallion',ko:'악한, 깡패'},
    {en:'rapt',ko:'넋을 잃은, 황홀해 하는, 몰두한, 푹 빠진'},{en:'rapture',ko:'기쁜, 환희, 황홀'},{en:'rapturous',ko:'기뻐서 어찌할 바를 모르는, 열광적인'},{en:'rarefied',ko:'(지위 등이) 매우 높은, 가려 뽑은'},{en:'rarefy',ko:'희박하게 하다, 순화/정화하다'},
    {en:'rarity',ko:'진귀함, 희귀한 일'},{en:'rash',ko:'무모한, 신중치 못한'},{en:'raspy',ko:'삐걱거리는, 귀에 거슬리는, 성을 잘 내는'},{en:'ratify',ko:'비준/승인하다'},{en:'ratiocinate',ko:'추리/추론하다'},
    {en:'ratiocination',ko:'추리, 추론'},{en:'ration',ko:'(식품의) 할당량, 배급량'},{en:'rationalize',ko:'합리화하다'},{en:'raucous',ko:'귀에 거슬리는, 삐걱대는'},{en:'raunchy',ko:'난잡한, 싸구려의'},
    {en:'rave',ko:'헛소리하다, 사납게 날뛰다, 노호하다, 열변을 토하다'},{en:'ravel',ko:'(실 등을) 풀다'},{en:'ravenous',ko:'걸신들린, 탐욕스러운'},{en:'ravish',ko:'황홀하게 하다, 몹시 기쁘게 하다'},{en:'raze',ko:'파괴하다, 깎아서 없애다'},
    {en:'reactant',ko:'반응물'},{en:'reactionary',ko:'반동의, 반작용의,역행의'},{en:'ream',ko:'종이 단위 , 많음, 다량'},{en:'reap',ko:'베다, 작물을 거둬들이다, (노력 등의 결과로) 거두다, 획득하다'},{en:'reaper',ko:'수확하는 사람'},
    {en:'reassure',ko:'안심시키다,기운 나게 하다,재보증하다'},{en:'rebuff',ko:'거절하다, 퇴짜 놓다'},{en:'rebus',ko:'수수께끼 그림'},{en:'recalcitrant',ko:'반항하는, 다루기 힘든'},{en:'recant',ko:'(진술, 믿음 등을) 철회하다'},
    {en:'recapitulate',ko:'요약하다, (생물) 발생에서 진화를 재현하다'},{en:'receipt',ko:'영수증, 수령, 인수'},{en:'receptacle',ko:'그릇, 용기, 저장소, 대피소'},{en:'recessive',ko:'후퇴하는, 역행하는, 열성(劣性)의, 잠재성의'},{en:'recidivism',ko:'상습적 범죄'},
    {en:'reciprocal',ko:'상호간의, 보답의, 답례의'},{en:'reciprocate',ko:'보답하다, 교환하다, 주고받다'},{en:'reckless',ko:'앞뒤 안 가리는, 무모한'},{en:'reclaim',ko:'갱생시키다, 개간하다'},{en:'recluse',ko:'은둔자'},
    {en:'recoil',ko:'되 튀다, 반동하다, 후퇴하다, 물러가다'},{en:'reconcile',ko:'화해시키다, 중재하다, 조화시키다'},{en:'recondite',ko:'난해한, 거의 알려지지 않은'},{en:'reconnaissance',ko:'조사, 검사, 답사, 정찰대'},{en:'reconnoiter',ko:'정찰하다, 답사하다'},
    {en:'reconstitute',ko:'원 상태로 돌리다, 재건/복원하다'},{en:'reconvene',ko:'다시 소집하다'},{en:'rectify',ko:'조정하다'},{en:'rectitude',ko:'정직, 공정'},{en:'recumbent',ko:'누워 있는, 활동 없는'},
    {en:'recuperate',ko:'회복하다, 재기하다'},{en:'recuperative',ko:'회복력이 있는'},{en:'recur',ko:'재발하다, 다시 떠오르다, 회상하다'},{en:'redistribute',ko:'재분배하다'},{en:'redolent',ko:'향기 나는, 생각나게 하는, 암시하는'},
    {en:'redoubtable',ko:'가공할, 존경할 만한'},{en:'redress',ko:'고치다, 바로잡다, 경감하다, 누그러뜨리다, 되찾다'},{en:'redundant',ko:'남아도는, 불필요한, 장황한'},{en:'reel',ko:'릴, 감는 틀, 실패, 얼레'},{en:'refectory',ko:'구내식당'},
    {en:'referee',ko:'심판, 중재인, 조정관'},{en:'refinery',ko:'(석유, 설탕을 정제하는) 정유소'},{en:'reflective',ko:'반사에 의한, 투영된, 심사숙고하는'},{en:'refractory',ko:'다루기 힘든, 난치의, 용해하기 어려운'},{en:'refresh',ko:'상쾌하게 하다'},
    {en:'refugee',ko:'난민'},{en:'refulgent',ko:'빛나는, 찬란한 shining radiantly, resplendent'},{en:'refuse',ko:'쓰레기'},{en:'refute',ko:'반박하다, 논파하다'},{en:'regard',ko:'존경'},
    {en:'regenerate',ko:'개심시키다, 재건하다, 재생시키다'},{en:'regimen',ko:'요양법, 섭생법, 지배, 통치, 관리'},{en:'regression',ko:'후퇴, 퇴화, 쇠퇴'},{en:'rehabilitate',ko:'복원하다,회복시키다,복권/복직시키다'},{en:'rehearsal',ko:'예행연습'},
    {en:'reign',ko:'통치, 지배'},{en:'rein',ko:'고삐, 억제, 규제, 제어, 통제력, 지휘권'},{en:'reiterate',ko:'되풀이하다, 반복하다'},{en:'rejoice',ko:'기뻐하다'},{en:'relapse',ko:'다시 타락하다, 재발하다'},
    {en:'release',ko:'풀어주다'},{en:'relegate',ko:'지위를 떨어뜨리다, (종류, 등급 등에) 속하게 하다'},{en:'relentless',ko:'엄격한, 가혹한, 완고한'},{en:'relevant',ko:'관련된, 적절한'},{en:'religion',ko:'종교'},
    {en:'relinquish',ko:'(소유, 권리 등을) 포기하다, 단념하다'},{en:'relish',ko:'즐기다, 음미하다, 좋아하다'},{en:'reluctant',ko:'내키지 않는, 마지못한, 꺼리는'},{en:'remiss',ko:'태만한, 부주의한'},{en:'remnant',ko:'나머지, 파편, 유물'},
    {en:'remodel',ko:'개조하다'},{en:'remonstrance',ko:'항의, 항변'},{en:'remonstrate',ko:'이의를 말하다, 항의하다, 충고하다, 간언하다'},{en:'remorse',ko:'양심의 가책'},{en:'remote',ko:'멀리 떨어진, 외딴, 먼 장래의, 간접적인'},
    {en:'remunerate',ko:'보답하다'},{en:'rend',ko:'찢다, 분열시키다, (마음을) 어지럽히다'},{en:'renegade',ko:'변절자, 배반자'},{en:'renounce',ko:'포기하다, 거부하다, 부인하다'},{en:'renovate',ko:'혁신하다, 기운 나게 하다'},
    {en:'renunciation',ko:'포기, 단념, 부인, 거부, 지제'},{en:'reparation',ko:'보상, 수리, 수선, 회복'},{en:'repartee',ko:'재치 있는 응답'},{en:'repatriate',ko:'본국으로 송환하다'},{en:'repeal',ko:'폐지하다, 철회하다'},
    {en:'repel',ko:'물리치다, 격퇴하다, 몰아내다, 불쾌감을 느끼다'},{en:'repellent',ko:'불쾌한, 쫓아버리는'},{en:'repertoire',ko:'목록, 연주 목록'},{en:'repine',ko:'투덜대다'},{en:'replete',ko:'충분한, 풍부한, 포식한, 배부른'},
    {en:'reportage',ko:'취재 활동, 보도 기사'},{en:'reportorial',ko:'보고서적인, 사실에 입각한'},{en:'repose',ko:'휴식, 휴양, 정적, 평온, 침착, 평정'},{en:'reprehensible',ko:'비난할 만한'},{en:'reprehension',ko:'질책, 비난'},
    {en:'repress',ko:'억누르다, 제지하다, 진압하다'},{en:'reprieve',ko:'형 집행을 연기하다, 일시적으로 (위험 등에서) 구하다'},{en:'reprimand',ko:'비난하다'},{en:'reprisal',ko:'보복, 앙갚음'},{en:'reproach',ko:'비난하다, 질책하다'},
    {en:'reprobate',ko:'난봉꾼'},{en:'reproof',ko:'책망'},{en:'reprove',ko:'책망하다, 질책하다'},{en:'reptile',ko:'파충류의 동물, 비열한 인간'},{en:'repudiate',ko:'거절하다, 부인하다'},
    {en:'repugnant',ko:'싫은, 불쾌한, 혐오하는, 일치하지 않는'},{en:'repulse',ko:'퇴짜 놓다, 거부하다, 불쾌하게 만들다'},{en:'repute',ko:'평가, 세평, 호평, 명성'},{en:'requisite',ko:'필요한, 불가결한'},{en:'requite',ko:'보답하다, 복수하다'},
    {en:'rescind',ko:'폐지하다, 철회하다'},{en:'rescission',ko:'무효, 취소, 폐지'},{en:'resentment',ko:'분개, 적의, 원한'},{en:'reserved',ko:'예비의, 마음을 털어놓지 않는, (언행이) 조심스러운'},{en:'residue',ko:'나머지, 잔여, 찌꺼기'},
    {en:'resign',ko:'(운명 등을) 따르다, 사임하다'},{en:'resilient',ko:'곧 회복하는, 탄력 있는'},{en:'resin',ko:'나무의 진, 송진'},{en:'resolute',ko:'굳게 결심한, 단호한'},{en:'resonant',ko:'울려 퍼지는, 공명하는'},
    {en:'resourceful',ko:'재치 있는, 자원이 풍부한'},{en:'respire',ko:'호흡하다, 숨쉬다, 한숨 돌리다'},{en:'respite',ko:'일시적 중단, 잠깐의 휴식'},{en:'resplendent',ko:'화려한, 눈부신'},{en:'responsive',ko:'응답하는, 민감한, 반응을 보이'},
    {en:'restive',ko:'다루기 힘든, 고집 센, 차분하지 못한, 안절부 절 못하는'},{en:'restless',ko:'침착하지 못한, 불안한, 항상 움직이는, 활동적인'},{en:'restore',ko:'부흥하다, 재건하다'},{en:'restrain',ko:'억누르다, 제약하다, 구속하다'},{en:'resurgence',ko:'소생, 부활'},
    {en:'resuscitate',ko:'소생시키다, 부활시키다'},{en:'retain',ko:'보류하다, 존속시키다, 계속사용하다'},{en:'retainer',ko:'보유자/물, 신하, 종자'},{en:'retaliate',ko:'앙갚음하다, 보복하다'},{en:'retard',ko:'지체 시키다'},
    {en:'reticent',ko:'과묵한, 삼가는, 신중한'},{en:'retinue',ko:'(시종의) 일행, 수행원'},{en:'retort',ko:'재치 있는 응수, 통렬한 반박, 말대꾸, 보복'},{en:'retouch',ko:'손질하다, 수정하다'},{en:'retract',ko:'철회하다, 움츠러들다'},
    {en:'retreat',ko:'철수, 후퇴, 은퇴'},{en:'retrench',ko:'줄이다, 삭감하다, 절약하다'},{en:'retribution',ko:'응보, 앙갚음, 보복'},{en:'retrograde',ko:'역행하는, 퇴보하는'},{en:'retrogress',ko:'뒤로 되돌아가다, 후퇴하다. 쇠퇴하다'},
    {en:'retrospective',ko:'회고의, 추억에 잠기는'},{en:'revamp',ko:'수선하다/개조하다'},{en:'revelation',ko:'폭로, 적발, 계시, 천계(天啓)'},{en:'revelry',ko:'야단 법석, 흥청대는 술잔치'},{en:'revenge',ko:'복수'},
    {en:'revere',ko:'경외하다'},{en:'reverence',ko:'숭배 존경 공손한 태도, 경례'},{en:'revile',ko:'욕하다'},{en:'revise',ko:'교정하다'},{en:'revive',ko:'소생시키다, 기운 나게 하다'},
    {en:'revoke',ko:'무효로 하다, 취소하다'},{en:'revue',ko:'시사 풍자극'},{en:'rewarding',ko:'가치 있는, 보람 있는'},{en:'ribald',ko:'상스러운, 야비한'},{en:'rickety',ko:'삐걱거리는, 허약한'},
    {en:'rider',ko:'추가 조항, 부기'},{en:'ridicule',ko:'비웃음, 조롱, 놀림'},{en:'rife',ko:'유행하는, 가득 찬'},{en:'riffraff',ko:'하층민, 잡동사니, 찌끼'},{en:'rift',ko:'틈, 불화'},
    {en:'rig',ko:'(시세, 가격, 승부 등을) 조작하다'},{en:'rigid',ko:'경직된, 굳은, 완고한, 융통성 없는, 엄한, 엄중한'},{en:'rigmarole',ko:'시시한 이야기,복잡한 과정,까다로운 절차'},{en:'rigorous',ko:'엄격한, 가혹한, 정확한, 엄밀한'},{en:'rile',ko:'화나게 하다, 짜증나게 하다'},
    {en:'rind',ko:'껍질, 외피, 외관, 겉보기'},{en:'riot',ko:'폭동을 일으키다, 야단법석을 떨다'},{en:'ripen',ko:'(곡물 등이) 익다, 여물다, 원숙해지다'},{en:'risible',ko:'웃음을 자아내는, 우스운'},{en:'rite',ko:'엄숙한 의식, 관습, 관례'},
    {en:'rive',ko:'찢다, 쪼개다, (마음을) 갈기갈기 찢다'},{en:'riveting',ko:'매혹적인, 넋을 잃게 하는'},{en:'rivulet',ko:'시내, 개울(brook)'},{en:'robust',ko:'튼튼한, 굳센, 체력/인내심이 필요한, 거친, 세련되지 못한'},{en:'rodent',ko:'(쥐, 다람쥐 등의) 설치류'},
    {en:'rodomontade',ko:'허풍, 호언장담'},{en:'roil',ko:'(포도주 등을) 휘저어 흐리게 만들다, 마음을 휘 젖다, 초조하게 만들다'},{en:'roister',ko:'술 마시며 떠들다, 법석을 떨다'},{en:'rookie',ko:'신인 선수, 풋내기, 초심자'},{en:'roster',ko:'근무 당번표, 명단'},
    {en:'rostrum',ko:'연단, 강단'},{en:'rosy',ko:'장밋빛의, (장래가) 밝은, 유망한, 낙관적인'},{en:'rotundity',ko:'비만'},{en:'roundabout',ko:'우회적인'},{en:'rouse',ko:'자극하다'},
    {en:'rout',ko:'참패, 패주, 혼란한 군중, 오합지졸, 폭도, 사교 모임'},{en:'royalty',ko:'왕, 왕권, 왕도, 특허권 사용료, 인세, 채굴권'},{en:'rubble',ko:'잡석, 깨진 기와조각'},{en:'rubicund',ko:'혈색이 좋은, 홍조를 띤 inclined to a healthy rosiness, ruddy'},{en:'rudder',ko:'방향타, 지침 a controlling agent or influence over direction, a guide'},
    {en:'ruddy',ko:'혈색이 좋은, 홍조를 띤'},{en:'rude',ko:'버릇없는, 무례한(impolite), 교양 없는, 야만의, 미가공의, 조잡한'},{en:'rudiment',ko:'근본, 기초, 초기 상태, 시초'},{en:'rue',ko:'후회하다, 뉘우치다'},{en:'rueful',ko:'안쓰러운, 애처로운, 침울한, 슬퍼 보이는'},
    {en:'ruffian',ko:'악당, 깡패'},{en:'ruffle',ko:'물결이 일게 하다, 성나게/짜증나게 하다, (천에) 주름을 잡다'},{en:'ruminate',ko:'심사숙고하다'},{en:'rumple',ko:'구기다'},{en:'run',ko:'연속 공연'},
    {en:'rupture',ko:'파열, 터짐, 불화, 단절, 다툼'},{en:'ruse',ko:'계략, 음모'},{en:'rustic',ko:'시골의, 전원풍의, 소박한'},{en:'rustle',ko:'(나뭇잎, 종이 등이) 바스락거리다, 활발하게 움직이다, 가축을 훔치다'},{en:'sabbatical',ko:'파괴/방해 행위를 하는 사람'},
    {en:'sabotage',ko:'안식일의, 유급 휴가의'},{en:'saboteur',ko:'파괴 행위를 하다, 방해하다'},{en:'saccharine',ko:'달콤한, 매우 정중한, 지나치게 친절한'},{en:'sacrifice',ko:'산 제물 바치는 일, 희생'},{en:'sacrilege',ko:'신성 모독'},
    {en:'saddle',ko:'(말에) 안장을 놓다'},{en:'safeguard',ko:'보호수단, 안전장치'},{en:'sag',ko:'현명, 기민'},{en:'sagacious',ko:'축 처지다, 내려앉다, 맥이 빠지다, 낙심하다'},{en:'sagacity',ko:'(판단, 통찰력 등) 현명한, 후각이 예민한'},
    {en:'sage',ko:'슬기로운/현명한 사람, 현인, 철인'},{en:'salient',ko:'현저한, 두드러진, 튀어나온, 돌출한'},{en:'sallow',ko:'혈색이 나쁜'},{en:'salmon',ko:'연어'},{en:'salubrious',ko:'건강에 좋은'},
    {en:'salutary',ko:'유익한, 건강에 좋은'},{en:'salutation',ko:'(말, 몸짓에 의한) 인사, 인사말'},{en:'salvage',ko:'해난 구조 v. 구출하다'},{en:'salve',ko:'연고, 고약, 위안, 아첨'},{en:'salvo',ko:'일제 사격, 위안'},
    {en:'sanctify',ko:'신성하게 하다, 깨끗이 하다, 정화하다'},{en:'sanctimonious',ko:'독실한 신자인 체하는'},{en:'sanction',ko:'인가하다, 공인하다, 비준하다'},{en:'sanctuary',ko:'성역, 사원, 교회, 보호 구역, 피난처'},{en:'sand',ko:'사포질 하다'},
    {en:'sanguine',ko:'불그스레한, 자신만만한, 낙천적인'},{en:'sanitation',ko:'공중위생'},{en:'sap',ko:'차차 약화시키다'},{en:'sapient',ko:'지혜로운'}
  ]
};

const REVIEW_DATA = {
  mid: {
    'expect': { example: "I expect to finish the project by Friday.", translation: "나는 금요일까지 그 프로젝트를 끝낼 것으로 기대한다.", mnemonic: "'익스펙토' 패트로눔! 마법 주문을 외우며 수호신이 나오길 '기대하다'." },
    'expense': { example: "We need to reduce our travel expenses.", translation: "우리는 여행 경비를 줄여야 한다.", mnemonic: "'익스펜시브(expensive)'! 비싼 물건을 사서 '경비'가 많이 들다." },
    'expensive': { example: "This car is too expensive for me.", translation: "이 차는 나에게 너무 비싸다.", mnemonic: "'익스펜시브'한 '값비싼' 명품." },
    'experience': { example: "He has a lot of experience in marketing.", translation: "그는 마케팅 분야에 경험이 많다.", mnemonic: "'익스피리언스(experience)'! '경험'이 최고의 재산." },
    'explain': { example: "Can you explain the rules of the game to me?", translation: "게임 규칙을 저에게 설명해 주실 수 있나요?", mnemonic: "'익스(ex-밖으로) 플레인(plain-쉬운)'! 밖으로 쉽게 풀어서 '설명하다'." },
    'express': { example: "She expressed her gratitude in a letter.", translation: "그녀는 편지로 감사를 표현했다.", mnemonic: "'익스프레스(express)' 버스는 감정을 싣고 생각을 '표현한다'." },
    'extra': { example: "Would you like an extra pillow?", translation: "추가 베개가 필요하신가요?", mnemonic: "'엑스트라(extra)'! 영화의 '추가' 인원." },
    'fabric': { example: "This dress is made of a soft fabric.", translation: "이 드레스는 부드러운 천으로 만들어졌다.", mnemonic: "'패브릭(fabric)' 소파는 '천'으로 만든 소파." },
    'fair': { example: "The referee made a fair decision.", translation: "심판은 공평한 판정을 내렸다.", mnemonic: "정정당당 '페어(fair)' 플레이! '공평한' 경기." },
    'faith': { example: "I have great faith in her ability.", translation: "나는 그녀의 능력을 크게 신뢰한다.", mnemonic: "'페이스(face)'! 얼굴에 '신용'이 가득하다." },
    'false': { example: "The information he gave was false.", translation: "그가 준 정보는 거짓이었다.", mnemonic: "'펄스(false)'! 심장이 거짓으로 뛰는 '거짓' 신호." },
    'familiar': { example: "His face looks familiar to me.", translation: "그의 얼굴이 나에게 익숙해 보인다.", mnemonic: "'패밀리(family)'처럼 '익숙한' 사이." },
    'fare': { example: "How much is the bus fare?", translation: "버스 요금이 얼마인가요?", mnemonic: "'페어(fair)'! 공평하게 내야 하는 교통 '요금'." },
    'favor': { example: "Could you do me a favor?", translation: "부탁 하나 들어주시겠어요?", mnemonic: "내가 '가장 좋아하는(favorite)' 사람에게 '호의'를 베풀다." },
    'fear': { example: "She has a fear of heights.", translation: "그녀는 고소공포증이 있다.", mnemonic: "'피어(fear)'! 피를 보면 '두려움'이 생긴다." },
    'fee': { example: "What is the entrance fee for the museum?", translation: "박물관 입장료는 얼마인가요?", mnemonic: "커피(coffee) 값 같은 '요금(fee)'." },
    'feed': { example: "It's time to feed the dog.", translation: "개에게 먹이를 줄 시간이다.", mnemonic: "강아지에게 '피드(feed)'! '먹이를 주다'." },
    'fellow': { example: "He is a fellow student in my class.", translation: "그는 우리 반의 동료 학생이다.", mnemonic: "'팔로(follow)'! 함께 따르는 '동료'." },
    'female': { example: "The survey was conducted on female students.", translation: "그 설문조사는 여학생들을 대상으로 실시되었다.", mnemonic: "'피(fe) 메일(male)'! 남성(male)이 아니니 '여성'." },
    'ferry': { example: "We took a ferry to the island.", translation: "우리는 그 섬으로 가는 연락선을 탔다.", mnemonic: "'페리(ferry)'호! 자동차도 싣는 큰 '배'." },
    'few': { example: "There are few people who can solve this problem.", translation: "이 문제를 풀 수 있는 사람은 거의 없다.", mnemonic: "'퓨(few)'! 한숨 쉬며 '거의 없네'라고 말하다." },
    'figure': { example: "I saw a tall figure in the distance.", translation: "나는 멀리서 키 큰 형체를 보았다.", mnemonic: "피겨(figure) 스케이팅 선수의 아름다운 '모습'." },
    'filter': { example: "You should use a filter to purify the water.", translation: "물을 정화하기 위해 필터를 사용해야 한다.", mnemonic: "정수기 '필터(filter)'는 물을 '여과한다'." },
    'final': { example: "This is the final chapter of the book.", translation: "이것이 그 책의 마지막 장이다.", mnemonic: "'파이널(final)' 시험! '최후의' 시험." },
    'finance': { example: "He works in the finance department.", translation: "그는 재무 부서에서 일한다.", mnemonic: "'파이낸스(finance)'! 회사의 돈을 관리하는 '재정'." },
    'fit': { example: "This shirt doesn't fit me.", translation: "이 셔츠는 나에게 맞지 않는다.", mnemonic: "옷 '핏(fit)'이 좋다! 몸에 잘 '맞는다'." },
    'flash': { example: "A flash of lightning lit up the sky.", translation: "번개가 번쩍이며 하늘을 밝혔다.", mnemonic: "카메라 '플래시(flash)'가 '번쩍' 터지다." },
    'flavor': { example: "This ice cream has a unique flavor.", translation: "이 아이스크림은 독특한 맛이 난다.", mnemonic: "'플레이버(flavor)'! 여러 가지 '맛'." },
    'flexible': { example: "This material is very flexible.", translation: "이 재료는 매우 유연하다.", mnemonic: "'플렉서블(flexible)' 디스플레이는 '구부리기 쉬운' 화면." },
    'flood': { example: "The heavy rain caused a flood in the town.", translation: "폭우로 인해 마을에 홍수가 났다.", mnemonic: "'풀(ful) 로드(load)'! 물이 가득 차서 '홍수'가 나다." },
    'fold': { example: "Please fold the clothes neatly.", translation: "옷을 깔끔하게 접어주세요.", mnemonic: "'폴더(folder)'는 서류를 '접어서' 보관하는 것." },
    'folk': { example: "Folk music is popular in this region.", translation: "이 지역에서는 민속 음악이 인기가 있다.", mnemonic: "'포크(folk)' 댄스는 여러 '사람들'이 함께 추는 춤." },
    'follow': { example: "Please follow me to the office.", translation: "저를 따라 사무실로 오세요.", mnemonic: "SNS에서 친구를 '팔로우(follow)'! '따르다'." },
    'foreign': { example: "He can speak several foreign languages.", translation: "그는 몇 개의 외국어를 할 수 있다.", mnemonic: "'포린(foreign)'! '풀'이 많은 '인(in)'도 같은 '외국의' 나라." },
    'former': { example: "The former president gave a speech.", translation: "전직 대통령이 연설을 했다.", mnemonic: "'포멀(formal)'한 자리에 '이전의' 대통령이 오셨다." },
    'fortunate': { example: "I was fortunate to get a ticket.", translation: "표를 구해서 운이 좋았다.", mnemonic: "'포춘(fortune)' 쿠키! '운 좋은' 메시지." },
    'fortune': { example: "He made a fortune in the stock market.", translation: "그는 주식 시장에서 큰돈을 벌었다.", mnemonic: "'포춘(fortune)'! 행운, 재산." },
    'frankly': { example: "Frankly, I don't think it's a good idea.", translation: "솔직히 말해서, 저는 그것이 좋은 생각이라고 생각하지 않아요.", mnemonic: "'프랭크(frank)'! '솔직한' 사람." },
    'frequent': { example: "He is a frequent visitor to the library.", translation: "그는 도서관의 단골 방문객이다.", mnemonic: "'프리(free)'하게 '퀀트(quent)'! 자유롭게 자주 다니니 '빈번한'." },
    'fuel': { example: "The car is running out of fuel.", translation: "차가 연료가 다 떨어져 간다.", mnemonic: "자동차에 기름(fuel)을 넣다." },
    'function': { example: "What is the function of this button?", translation: "이 버튼의 기능은 무엇인가요?", mnemonic: "수학의 함수(function)는 특별한 '기능'을 한다." },
    'fund': { example: "The organization raises funds for charity.", translation: "그 단체는 자선 기금을 모금한다.", mnemonic: "'펀드(fund)' 매니저는 '기금'을 관리한다." },
    'furniture': { example: "We need to buy some new furniture for our house.", translation: "우리는 집에 놓을 새 가구를 좀 사야 한다.", mnemonic: "'퍼니처(furniture)'! '가구'." },
    'gamble': { example: "He lost all his money in a gamble.", translation: "그는 도박으로 모든 돈을 잃었다.", mnemonic: "'겜블(gamble)'! 게임으로 하는 '도박'." },
    'gang': { example: "A gang of thieves robbed the bank.", translation: "한 무리의 도둑들이 은행을 털었다.", mnemonic: "'갱(gang)'스터! 범죄자 '무리'." },
    'gap': { example: "There is a gap between the two buildings.", translation: "두 건물 사이에 틈이 있다.", mnemonic: "세대 '갭(gap)'! 세대 간의 '차이, 틈'." },
    'garage': { example: "He parked his car in the garage.", translation: "그는 차고에 차를 주차했다.", mnemonic: "'개라지(garage)'! '차고'." },
    'gather': { example: "A crowd gathered to see the accident.", translation: "사고를 보기 위해 군중이 모여들었다.", mnemonic: "'게더(gather)'! '개도' 함께 '모여들다'." },
    'gear': { example: "You need to change gear when you go up a hill.", translation: "언덕을 올라갈 때는 기어를 바꿔야 한다.", mnemonic: "자동차 '기어(gear)'!" },
    'gender': { example: "Discrimination based on gender is illegal.", translation: "성별에 근거한 차별은 불법이다.", mnemonic: "'젠더(gender)'! 사회적인 '성'." },
    'general': { example: "In general, I agree with your opinion.", translation: "일반적으로, 저는 당신의 의견에 동의합니다.", mnemonic: "'제너럴(general)'! '일반적인' 장군." },
    'generation': { example: "There is a big gap between the two generations.", translation: "두 세대 사이에는 큰 차이가 있다.", mnemonic: "X '제너레이션(generation)'! X '세대'." },
    'genius': { example: "Einstein was a scientific genius.", translation: "아인슈타인은 과학 천재였다.", mnemonic: "'지니어스(genius)'! '천재'." },
    'gentle': { example: "He has a gentle and kind personality.", translation: "그는 온화하고 친절한 성격을 가지고 있다.", mnemonic: "'젠틀(gentle)'맨은 '온화하다'." },
    'global': { example: "Global warming is a serious issue.", translation: "지구 온난화는 심각한 문제이다.", mnemonic: "'글로브(globe-지구)'! '세계적인'." },
    'glory': { example: "He fought for the glory of his country.", translation: "그는 조국의 영광을 위해 싸웠다.", mnemonic: "'글로리(glory)'! 빛나는 '영광'." },
    'goat': { example: "The goat was eating grass in the field.", translation: "염소가 들판에서 풀을 뜯어 먹고 있었다.", mnemonic: "'고트(goat)'! '염소'." },
    'goods': { example: "The store sells a variety of goods.", translation: "그 가게는 다양한 상품을 판매한다.", mnemonic: "'굿(good)'! 좋은 '상품'들." },
    'grade': { example: "She got a good grade on the test.", translation: "그녀는 시험에서 좋은 등급을 받았다.", mnemonic: "성적 '그레이드(grade)'! '등급'." },
    'graduate': { example: "She will graduate from university next year.", translation: "그녀는 내년에 대학을 졸업할 것이다.", mnemonic: "'그래, 주 에이트(eight)'! 8년 만에 '졸업하다'." },
    'guest': { example: "We have a guest staying with us.", translation: "우리 집에 손님이 머물고 있다.", mnemonic: "'게스트(guest)' 하우스! '손님'을 위한 집." },
    'gun': { example: "The police officer was carrying a gun.", translation: "경찰관은 총을 휴대하고 있었다.", mnemonic: "빵야! '건(gun)'! '총'." },
    'gymnasium': { example: "The school has a large gymnasium.", translation: "그 학교에는 큰 체육관이 있다.", mnemonic: "'짐(gym)'은 '체육관(gymnasium)'의 줄임말." },
    'half': { example: "I'll be back in half an hour.", translation: "30분 후에 돌아올게요.", mnemonic: "'하프(half)' 타임! 경기의 '절반'." },
    'hammer': { example: "He used a hammer to fix the chair.", translation: "그는 의자를 고치기 위해 망치를 사용했다.", mnemonic: "토르의 '해머(hammer)'! '망치'." },
    'handicap': { example: "His lack of experience is a handicap.", translation: "그의 경험 부족은 불리한 조건이다.", mnemonic: "'핸디캡(handicap)'! 골프에서 '불리한 조건'을 안고 시작." },
    'handle': { example: "Can you handle this situation?", translation: "이 상황을 처리할 수 있겠어요?", mnemonic: "자동차 '핸들(handle)'을 '다루다'." },
    'happen': { example: "What happened to your arm?", translation: "팔에 무슨 일이 있었니?", mnemonic: "해프닝(happening)은 우연히 '일어나는' 사건." },
    'harbor': { example: "The ship is safe in the harbor.", translation: "배는 항구에서 안전하다.", mnemonic: "'하버(harbor)'! 진주만 '항구'." },
    'hardly': { example: "I can hardly believe it.", translation: "나는 그것을 거의 믿을 수 없다.", mnemonic: "'하드(hard)'! 너무 어려워서 '거의 ~할 수 없는'." },
    'harvest': { example: "It's time for the rice harvest.", translation: "쌀 수확 철이다.", mnemonic: "'하, 베스트(harvest)'! 올해 '수확'은 최고야." },
    'heal': { example: "The wound will heal in a few days.", translation: "상처는 며칠 안에 나을 것이다.", mnemonic: "'힐(heal)'! 게임에서 체력을 '치료하다'." },
    'health': { example: "Regular exercise is good for your health.", translation: "규칙적인 운동은 건강에 좋다.", mnemonic: "'헬스(health)' 클럽은 '건강'을 위한 곳." },
    'hear': { example: "Can you hear the music?", translation: "음악 소리 들리니?", mnemonic: "귀(ear)로 '히어(hear)'! '듣다'." },
    'heel': { example: "She was wearing high heels.", translation: "그녀는 하이힐을 신고 있었다.", mnemonic: "하이'힐(heel)'! '발뒤꿈치'가 높은 신발." },
    'height': { example: "What is the height of that building?", translation: "저 건물의 높이는 얼마인가요?", mnemonic: "'하이(high)'! '높이'." },
    'hell': { example: "The opposite of heaven is hell.", translation: "천국의 반대는 지옥이다.", mnemonic: "'헬(hell)'! '지옥'." },
    'hide': { example: "He hid the money under the bed.", translation: "그는 침대 밑에 돈을 숨겼다.", mnemonic: "'하이드(hide)'! '숨다'." },
    'highway': { example: "We took the highway to get there faster.", translation: "우리는 더 빨리 도착하기 위해 고속도로를 탔다.", mnemonic: "'하이(high)'! 높은 속도로 달리는 '고속도로'." },
    'hip': { example: "She broke her hip in the accident.", translation: "그녀는 사고로 엉덩이뼈가 부러졌다.", mnemonic: "'힙(hip)'합 댄스는 '엉덩이'를 흔드는 춤." },
    'hire': { example: "The company plans to hire more employees.", translation: "그 회사는 더 많은 직원을 고용할 계획이다.", mnemonic: "'하이어(hire)'! '하, 이어'서 계속 '고용하다'." },
    'hole': { example: "There is a hole in my sock.", translation: "내 양말에 구멍이 났다.", mnemonic: "블랙'홀(hole)'! 검은 '구멍'." },
    'horror': { example: "She screamed in horror.", translation: "그녀는 공포에 질려 비명을 질렀다.", mnemonic: "'호러(horror)' 영화는 '공포' 영화." },
    'host': { example: "He was a very gracious host.", translation: "그는 매우 친절한 주인이었다.", mnemonic: "파티 '호스트(host)'! '주인'." },
    'hug': { example: "She gave her mother a big hug.", translation: "그녀는 엄마를 힘껏 껴안았다.", mnemonic: "'허그(hug)'! '껴안다'." },
    'huge': { example: "They live in a huge house.", translation: "그들은 거대한 집에 산다.", mnemonic: "'휴, 쥐(huge)'가 이렇게 '거대하다'니!" },
    'ideal': { example: "This is an ideal place for a picnic.", translation: "이곳은 소풍하기에 이상적인 장소이다.", mnemonic: "'아이디어(idea)'가 넘치는 '이상적인' 세상." },
    'ill': { example: "She couldn't come to school because she was ill.", translation: "그녀는 아파서 학교에 올 수 없었다.", mnemonic: "'일(ill)'이 너무 많아서 '병든'." },
    'imagine': { example: "Can you imagine a world without colors?", translation: "색깔 없는 세상을 상상할 수 있니?", mnemonic: "'이미지(image)'를 머릿속에 그리며 '상상하다'." },
    'immediate': { example: "The problem requires immediate action.", translation: "그 문제는 즉각적인 조치가 필요하다.", mnemonic: "'임(im-not) 미디에이트(mediate-중간)'! 중간 과정 없이 '즉각적인'." },
    'include': { example: "The price includes tax and service charge.", translation: "가격에는 세금과 봉사료가 포함되어 있습니다.", mnemonic: "'인(in-안에) 클루드(clude-닫다)'! 안에 넣고 닫으니 '포함하다'." },
    'increase': { example: "The population of the city is increasing.", translation: "그 도시의 인구가 늘고 있다.", mnemonic: "'인(in-안에) 크리즈(crease-자라다)'! 안에서 계속 자라니 '늘다'." },
    'indeed': { example: "It was indeed a very beautiful sight.", translation: "그것은 참으로 매우 아름다운 광경이었다.", mnemonic: "'인디드(indeed)'! '인도'는 '참으로' 신비로운 나라." },
    'individual': { example: "Each individual has a unique talent.", translation: "각 개인은 독특한 재능을 가지고 있다.", mnemonic: "'인(in-not) 디바이드(divide-나누다)'! 더 이상 나눌 수 없는 '개인'." },
    'influence': { example: "He has a strong influence on his friends.", translation: "그는 친구들에게 강한 영향력을 가지고 있다.", mnemonic: "'인플루엔서(influencer)'는 '영향력' 있는 사람." },
    'insect': { example: "An ant is a small insect.", translation: "개미는 작은 곤충이다.", mnemonic: "'인(in) 섹트(sect-자르다)'! 몸이 마디로 잘린 듯한 '곤충'." },
    'insert': { example: "Please insert your card here.", translation: "여기에 카드를 넣어주세요.", mnemonic: "'인(in-안에) 서트(sert-넣다)'! 안에 '끼워넣다'." },
    'inspect': { example: "The mechanic inspected the car's engine.", translation: "정비공이 차의 엔진을 검사했다.", mnemonic: "'인(in-안을) 스펙트(spect-보다)'! 안을 들여다보며 '검사하다'." },
    'install': { example: "We need to install a new air conditioner.", translation: "우리는 새 에어컨을 설치해야 한다.", mnemonic: "프로그램을 '인스톨(install)'! '설치하다'." },
    'instead': { example: "I will have tea instead of coffee.", translation: "나는 커피 대신 차를 마실 것이다.", mnemonic: "'인(in) 스테드(stead-장소)'! 그 장소 안에 '대신' 들어가다." },
    'instruct': { example: "The teacher instructed the students to be quiet.", translation: "선생님은 학생들에게 조용히 하라고 지시했다.", mnemonic: "'인스트럭터(instructor)'는 '가르치고 지시하는' 사람." },
    'intelligent': { example: "Dolphins are highly intelligent animals.", translation: "돌고래는 매우 지적인 동물이다.", mnemonic: "'인텔(Intel)' CPU처럼 '지적인'." },
    'interest': { example: "I have no interest in politics.", translation: "나는 정치에 흥미가 없다.", mnemonic: "'인터레스트(interest)'! '흥미'로운 이야기." },
    'international': { example: "The company has international branches.", translation: "그 회사는 국제적인 지점들을 가지고 있다.", mnemonic: "'인터(inter-사이) 네셔널(national-국가)'! 국가들 사이의, '국제적인'." },
    'invent': { example: "Thomas Edison invented the light bulb.", translation: "토머스 에디슨은 전구를 발명했다.", mnemonic: "'인벤트(invent)'! '이벤트(event)'처럼 새로운 것을 '발명하다'." },
    'invest': { example: "He invested a lot of money in the company.", translation: "그는 그 회사에 많은 돈을 투자했다.", mnemonic: "'인(in-안에) 베스트(vest-조끼)'! 조끼 안주머니에 돈을 넣어 '투자하다'." },
    'iron': { example: "You need to iron your shirt.", translation: "셔츠를 다려야 한다.", mnemonic: "'아이언(iron)'맨! '철'로 된 옷을 입은 영웅." },
    'irony': { example: "The irony is that he, a fire chief, is afraid of fire.", translation: "아이러니한 것은 소방서장인 그가 불을 무서워한다는 것이다.", mnemonic: "'아이러니(irony)'! '역설적인' 상황." },
    'island': { example: "Jeju is a beautiful island in Korea.", translation: "제주는 한국의 아름다운 섬이다.", mnemonic: "'아일랜드(island)'! '섬'." },
    'item': { example: "There are ten items on the shopping list.", translation: "쇼핑 목록에는 열 개의 품목이 있다.", mnemonic: "게임 '아이템(item)'! 여러 '항목, 품목'." },
    'jaw': { example: "The shark has a powerful jaw.", translation: "상어는 강력한 턱을 가지고 있다.", mnemonic: "영화 '죠(jaw)'스! 무서운 '턱'을 가진 상어." },
    'jet': { example: "A jet of water shot out from the pipe.", translation: "파이프에서 물줄기가 뿜어져 나왔다.", mnemonic: "'제트(jet)'기! 강력한 '분출'로 날아간다." },
    'joke': { example: "He told a funny joke.", translation: "그는 재미있는 농담을 했다.", mnemonic: "'조크(joke)'! '농담'." },
    'journal': { example: "She writes in her journal every night.", translation: "그녀는 매일 밤 일기를 쓴다.", mnemonic: "'저널(journal)'리스트는 '일간 신문'에 글을 쓴다." },
    'journey': { example: "They went on a long journey across the desert.", translation: "그들은 사막을 가로지르는 긴 여행을 떠났다.", mnemonic: "'저니(journey)'! 즐거운 '여행'." },
    'junior': { example: "He is my junior by two years.", translation: "그는 나보다 2년 후배이다.", mnemonic: "'주니어(junior)'! '손아래 사람'." },
    'knee': { example: "He fell and hurt his knee.", translation: "그는 넘어져서 무릎을 다쳤다.", mnemonic: "'니(knee)'! '무릎'." },
    'knock': { example: "Someone is knocking on the door.", translation: "누군가 문을 두드리고 있다.", mnemonic: "'노크(knock)'! 문을 '두드리다'." },
    'labor': { example: "Building a house requires a lot of labor.", translation: "집을 짓는 데는 많은 노동이 필요하다.", mnemonic: "'레이버(labor)'! '노동'." },
    'laboratory': { example: "The scientist is working in the laboratory.", translation: "과학자가 실험실에서 일하고 있다.", mnemonic: "'랩(lab)'은 '실험실(laboratory)'의 줄임말." },
    'lamp': { example: "Please turn on the lamp.", translation: "램프를 켜주세요.", mnemonic: "알라딘의 요술 '램프(lamp)'!" },
    'lane': { example: "Stay in your lane when you drive.", translation: "운전할 때는 차선을 지키세요.", mnemonic: "수영장 '레인(lane)'! '차선'." },
    'language': { example: "English is a global language.", translation: "영어는 세계적인 언어이다.", mnemonic: "'랭귀지(language)'! '언어'." },
    'laugh': { example: "His jokes always make me laugh.", translation: "그의 농담은 항상 나를 웃게 만든다.", mnemonic: "'래프(laugh)'! '하하하' 하고 '웃다'." },
    'laundry': { example: "I need to do the laundry.", translation: "나는 빨래를 해야 한다.", mnemonic: "'런드리(laundry)'! '세탁물'." },
    'law': { example: "We must obey the law.", translation: "우리는 법을 지켜야 한다.", mnemonic: "'로(law)'펌! '법률' 회사." },
    'lawyer': { example: "She is a famous lawyer.", translation: "그녀는 유명한 변호사이다.", mnemonic: "'로(law)'를 다루는 사람, '변호사'." },
    'lead': { example: "The captain leads the team.", translation: "주장이 팀을 이끈다.", mnemonic: "'리더(leader)'는 팀을 '이끈다(lead)'." },
    'leave': { example: "The train will leave in 10 minutes.", translation: "기차는 10분 후에 떠날 것이다.", mnemonic: "'리브(leave)'! '떠나다'." },
    'lecture': { example: "The professor gave a lecture on history.", translation: "교수님은 역사에 대한 강의를 했다.", mnemonic: "'렉처(lecture)'! '강의'." },
    'legend': { example: "King Arthur is a famous legend.", translation: "아서 왕은 유명한 전설이다.", mnemonic: "'레전드(legend)'! '전설'적인 인물." },
    'lend': { example: "Can you lend me some money?", translation: "돈 좀 빌려줄 수 있니?", mnemonic: "'랜드(land)'! 땅을 '빌려주다'." },
    'let': { example: "Let me help you with your bag.", translation: "가방 드는 것을 도와줄게요.", mnemonic: "'렛(let)' 잇 고! 그냥 '하게 두다'." },
    'level': { example: "The water level is rising.", translation: "수위가 높아지고 있다.", mnemonic: "게임 '레벨(level)'! '수준, 수평'." },
    'license': { example: "You need a driver's license to drive a car.", translation: "차를 운전하려면 운전 면허증이 필요하다.", mnemonic: "'라이선스(license)'! '면허'." },
    'lift': { example: "Can you help me lift this box?", translation: "이 상자 드는 것 좀 도와줄래요?", mnemonic: "'리프트(lift)'! 스키장에서 '들어올리다'." },
    'limit': { example: "There is a time limit for the test.", translation: "시험에는 시간 제한이 있다.", mnemonic: "속도 '리미트(limit)'! '한계'." },
    'link': { example: "Click on the link to visit the website.", translation: "웹사이트를 방문하려면 링크를 클릭하세요.", mnemonic: "인터넷 '링크(link)'는 페이지를 '연결한다'." },
    'list': { example: "I made a list of things to buy.", translation: "나는 사야 할 것들의 목록을 만들었다.", mnemonic: "쇼핑 '리스트(list)'! '목록'." },
    'load': { example: "The truck is carrying a heavy load.", translation: "트럭이 무거운 짐을 싣고 있다.", mnemonic: "게임 '로딩(loading)'! 데이터를 '싣는 중'." },
    'local': { example: "I prefer to shop at local stores.", translation: "나는 지역 상점에서 쇼핑하는 것을 선호한다.", mnemonic: "'로컬(local)' 푸드! '지역의' 음식." },
    'lock': { example: "Don't forget to lock the door.", translation: "문 잠그는 것을 잊지 마세요.", mnemonic: "'락(lock)'! '자물쇠'로 잠그다." },
    'log': { example: "We used a log for the campfire.", translation: "우리는 캠프파이어를 위해 통나무를 사용했다.", mnemonic: "'로그(log)'인! 게임 기록을 '통나무' 집에 남기다." },
    'lose': { example: "I don't want to lose the game.", translation: "나는 경기에서 지고 싶지 않다.", mnemonic: "'루저(loser)'는 경기에서 '진(lose)' 사람." },
    'loud': { example: "The music is too loud.", translation: "음악 소리가 너무 크다.", mnemonic: "'라우드(loud)'! '시끄러운'." },
    'luxury': { example: "They live in luxury.", translation: "그들은 사치스럽게 산다.", mnemonic: "'럭셔리(luxury)'! '사치스러운'." },
    'machine': { example: "This is a washing machine.", translation: "이것은 세탁기이다.", mnemonic: "'머신(machine)'! '기계'." },
    'magazine': { example: "I read a fashion magazine.", translation: "나는 패션 잡지를 읽는다.", mnemonic: "'매거진(magazine)'! '잡지'." },
    'main': { example: "What is the main reason for your decision?", translation: "당신이 결정한 주된 이유는 무엇인가요?", mnemonic: "'메인(main)' 요리! '주요한' 요리." },
    'major': { example: "What is your major in college?", translation: "대학에서 전공이 무엇인가요?", mnemonic: "'메이저(major)' 리그! '주요한, 다수의' 선수들." },
    'male': { example: "The male lion has a large mane.", translation: "수사자는 큰 갈기를 가지고 있다.", mnemonic: "'메일(male)'! '남성'." },
    'manage': { example: "She manages a team of 20 people.", translation: "그녀는 20명으로 구성된 팀을 관리한다.", mnemonic: "'매니저(manager)'는 '관리하는' 사람." },
    'manner': { example: "He has a very polite manner.", translation: "그는 매우 공손한 태도를 가지고 있다.", mnemonic: "'매너(manner)'가 좋다! '방법, 태도'가 좋다." },
    'marine': { example: "We saw many marine animals at the aquarium.", translation: "우리는 수족관에서 많은 해양 동물들을 보았다.", mnemonic: "'마린(marine)' 보이! '바다의' 소년." },
    'mark': { example: "He made a mark on the paper.", translation: "그는 종이에 표시를 했다.", mnemonic: "책에 '마크(mark)'! '표시'하다." },
    'mate': { example: "Birds choose a mate for life.", translation: "새들은 평생의 짝을 선택한다.", mnemonic: "'메이트(mate)'! 룸'메이트'는 방 '짝꿍'." },
    'maybe': { example: "Maybe we can go to the movies tomorrow.", translation: "아마 우리 내일 영화 보러 갈 수 있을 거야.", mnemonic: "'메이비(maybe)'! '아마도'." },
    'meal': { example: "Breakfast is the most important meal of the day.", translation: "아침은 하루 중 가장 중요한 식사이다.", mnemonic: "해피'밀(meal)'! 즐거운 '식사'." },
    'mean': { example: "What does this word mean?", translation: "이 단어는 무슨 뜻인가요?", mnemonic: "'민(mean)'! 이게 무슨 '의미'야?" },
    'medical': { example: "She needs immediate medical attention.", translation: "그녀는 즉각적인 의학적 치료가 필요하다.", mnemonic: "'메디컬(medical)' 드라마! '의학' 드라마." },
    'medicine': { example: "Have you taken your medicine?", translation: "약 먹었니?", mnemonic: "'메디슨(medicine)'! '약'." },
    'mental': { example: "Mental health is as important as physical health.", translation: "정신 건강은 신체 건강만큼 중요하다.", mnemonic: "'멘탈(mental)'! '정신의'." },
    'mention': { example: "Don't forget to mention my name.", translation: "내 이름을 언급하는 것을 잊지 마.", mnemonic: "'맨션(mention)'! 그 맨션에 대해 '말하다'." },
    'merchant': { example: "He is a wealthy merchant.", translation: "그는 부유한 상인이다.", mnemonic: "'머천트(merchant)'! '상인'." },
    'metal': { example: "The gate is made of metal.", translation: "그 문은 금속으로 만들어졌다.", mnemonic: "헤비'메탈(metal)'! '금속'성의 강한 음악." },
    'microphone': { example: "Please speak into the microphone.", translation: "마이크에 대고 말씀해 주세요.", mnemonic: "'마이크(microphone)'! '확성기'." },
    'mild': { example: "The weather is mild today.", translation: "오늘은 날씨가 온화하다.", mnemonic: "'마일드(mild)'한 커피! '부드럽고 온화한' 맛." },
    'military': { example: "He joined the military after high school.", translation: "그는 고등학교 졸업 후 군에 입대했다.", mnemonic: "'밀리터리(military)' 룩! '군의' 옷 스타일." },
    'million': { example: "The city has a population of over a million.", translation: "그 도시는 인구가 백만이 넘는다.", mnemonic: "'밀리언(million)'셀러! '백만' 부 팔린 책." },
    'minor': { example: "It's just a minor problem.", translation: "그것은 단지 사소한 문제일 뿐이다.", mnemonic: "'마이너(minor)' 리그! '작은 편의' 리그." },
    'minute': { example: "I'll be there in a minute.", translation: "곧 갈게.", mnemonic: "1'분(minute)'만 기다려!" },
    'mistake': { example: "I made a mistake in the calculation.", translation: "나는 계산에서 실수를 했다.", mnemonic: "'미스테이크(mistake)'! '실수'." },
    'mix': { example: "Mix the ingredients together in a bowl.", translation: "그릇에 재료들을 함께 섞으세요.", mnemonic: "음료를 '믹스(mix)'! '섞다'." },
    'mode': { example: "The phone is in silent mode.", translation: "휴대전화가 무음 모드이다.", mnemonic: "비행기 '모드(mode)'! '방식'." },
    'modern': { example: "The museum is full of modern art.", translation: "그 박물관은 현대 미술로 가득하다.", mnemonic: "'모던(modern)'! '현대의'." },
    'monitor': { example: "The nurse is monitoring the patient's heartbeat.", translation: "간호사가 환자의 심장 박동을 관찰하고 있다.", mnemonic: "CCTV '모니터(monitor)'로 감시하다." },
    'monster': { example: "The movie is about a scary monster.", translation: "그 영화는 무서운 괴물에 관한 것이다.", mnemonic: "포켓'몬스터(monster)'! 주머니 '괴물'." },
    'mood': { example: "She is in a good mood today.", translation: "그녀는 오늘 기분이 좋다.", mnemonic: "'무드(mood)' 등! '분위기'를 좋게 하는 등." },
    'mud': { example: "His shoes were covered in mud.", translation: "그의 신발은 진흙으로 덮여 있었다.", mnemonic: "'머드(mud)' 축제! '진흙' 축제." },
    'muscle': { example: "He has strong arm muscles.", translation: "그는 팔 근육이 튼튼하다.", mnemonic: "'머슬(muscle)'! '근육'." },
    'mushroom': { example: "I like mushroom soup.", translation: "나는 버섯 수프를 좋아한다.", mnemonic: "'머쉬룸(mushroom)'! '버섯'." },
    'nail': { example: "She painted her nails red.", translation: "그녀는 손톱을 빨갛게 칠했다.", mnemonic: "'네일(nail)' 아트! '손톱'을 예쁘게 꾸미는 것." },
    'navy': { example: "He is an officer in the navy.", translation: "그는 해군 장교이다.", mnemonic: "'네이비(navy)' 색! '해군' 제복 색깔." },
    'necessary': { example: "Is it necessary to bring a gift?", translation: "선물을 가져가는 것이 필요한가요?", mnemonic: "'네세서리(necessary)'! '내 세'금 '서리'하는 걸 막는 건 '필수적'이야." },
    'needle': { example: "I pricked my finger with a needle.", translation: "나는 바늘에 손가락을 찔렸다.", mnemonic: "'니들(needle)'! '바늘'로 콕 찌르다." },
    'neighbor': { example: "My neighbor is very friendly.", translation: "나의 이웃은 매우 친절하다.", mnemonic: "'네이버(neighbor)'! '이웃'과 함께 쓰는 검색 엔진." },
    'neither': { example: "Neither of them knew the answer.", translation: "그들 중 어느 누구도 답을 몰랐다.", mnemonic: "'니(knee)'도 '더(ther)'러워! '둘 다 아니야'." },
    'nephew': { example: "My nephew is five years old.", translation: "내 남자 조카는 다섯 살이다.", mnemonic: "'내(ne) 퓨(phew)'! 한숨 쉬게 만드는 말썽꾸러기 '조카'." },
    'nervous': { example: "I always get nervous before an exam.", translation: "나는 시험 전에 항상 긴장한다.", mnemonic: "'너 버스(nervous)' 놓칠까 봐 '긴장돼'." },
    'net': { example: "The fisherman cast his net into the sea.", translation: "어부는 바다에 그물을 던졌다.", mnemonic: "인터'넷(net)'은 거미줄 같은 '그물'망." },
    'network': { example: "We have a large network of contacts.", translation: "우리는 넓은 인맥을 가지고 있다.", mnemonic: "'넷(net)'으로 '워크(work)'! 그물처럼 연결되어 일하는 '네트워크'." },
    'nobody': { example: "There was nobody in the room.", translation: "방에는 아무도 없었다.", mnemonic: "'노(no) 바디(body)'! 어떤 몸도 없으니 '아무도 ~않다'." },
    'noise': { example: "Please don't make so much noise.", translation: "너무 시끄럽게 하지 마세요.", mnemonic: "'노이즈(noise)' 마케팅! 시끄러운 '소음'으로 관심을 끌다." },
    'none': { example: "None of the students failed the exam.", translation: "학생들 중 아무도 시험에 떨어지지 않았다.", mnemonic: "'노(no) 원(one)'! 한 명도 없으니 '아무도 ~않다'." },
    'normal': { example: "It's normal to feel nervous before a test.", translation: "시험 전에 긴장하는 것은 정상이다.", mnemonic: "'노멀(normal)'! '보통의, 정상의'." },
    'novel': { example: "Have you read this novel?", translation: "이 소설 읽어봤니?", mnemonic: "'노블(novel)'! 해리포터 '소설'." },
    'nuclear': { example: "Nuclear energy can be dangerous.", translation: "핵에너지는 위험할 수 있다.", mnemonic: "'뉴클리어(nuclear)'! '핵의'." },
    'oak': { example: "The table is made of solid oak.", translation: "그 탁자는 단단한 참나무로 만들어졌다.", mnemonic: "'오크(oak)'! '참나무' 방패를 든 오크 병사." },
    'offend': { example: "I'm sorry if I offended you.", translation: "제가 당신의 기분을 상하게 했다면 죄송합니다.", mnemonic: "'오, 펜 드(offend)'디어! 펜으로 상처를 주며 '기분을 상하게 하다'." },
    'offer': { example: "He offered me a cup of coffee.", translation: "그는 나에게 커피 한 잔을 제공했다.", mnemonic: "'오퍼(offer)'! 좋은 조건을 '제공하다'." },
    'olive': { example: "I like to eat green olives.", translation: "나는 녹색 올리브를 먹는 것을 좋아한다.", mnemonic: "'올리브(olive)'유! '올리브'로 만든 기름." },
    'once': { example: "I have been to Paris only once.", translation: "나는 파리에 한 번만 가봤다.", mnemonic: "'원스(once)' 어폰 어 타임! 옛날 옛적에 '한 번'." },
    'opportunity': { example: "This is a great opportunity for you.", translation: "이것은 당신에게 좋은 기회입니다.", mnemonic: "'오퍼(offer)'가 '튜니티(tunity)'! 좋은 제안이 올 '기회'." },
    'option': { example: "You have several options to choose from.", translation: "당신에게는 선택할 수 있는 몇 가지 선택권이 있습니다.", mnemonic: "자동차 '옵션(option)'! '선택 사항'." },
    'order': { example: "The room is in perfect order.", translation: "방이 완벽하게 정돈되어 있다.", mnemonic: "'오더(order)'! 순서대로 줄을 서시오!" },
    'other': { example: "Do you have any other questions?", translation: "다른 질문 있나요?", mnemonic: "'아더(other)'! '다른'." },
    'ought': { example: "You ought to apologize to her.", translation: "너는 그녀에게 사과해야 한다.", mnemonic: "'오투(O2)'! 산소처럼 우리에게 꼭 '필요한(~해야 하는)' 것." },
    'overnight': { example: "He became a star overnight.", translation: "그는 하룻밤 사이에 스타가 되었다.", mnemonic: "'오버(over) 나이트(night)'! 밤을 넘겨 '밤새도록'." },
    'own': { example: "I have my own room.", translation: "나는 나 자신의 방을 가지고 있다.", mnemonic: "'온(on)' 세상이 '나 자신의(own)' 것!" },
    'pace': { example: "He walked at a slow pace.", translation: "그는 느린 걸음으로 걸었다.", mnemonic: "'페이스(pace)' 메이커! '걸음걸이, 속도'를 조절해주는 사람." },
    'pad': { example: "She wrote the number on a notepad.", translation: "그녀는 메모장에 숫자를 썼다.", mnemonic: "마우스 '패드(pad)'! '덧대는 것'." },
    'pain': { example: "I have a pain in my back.", translation: "나는 등에 통증이 있다.", mnemonic: "No 'pain', no gain! '고통' 없이는 얻는 것도 없다." },
    'pair': { example: "I bought a new pair of shoes.", translation: "나는 새 신발 한 켤레를 샀다.", mnemonic: "'페어(pair)'! '한 쌍'." },
    'pale': { example: "You look pale. Are you okay?", translation: "창백해 보여요. 괜찮아요?", mnemonic: "'페일(pale)'! '파일'처럼 하얗게 '창백한' 얼굴." },
    'palm': { example: "He held the small bird in his palm.", translation: "그는 손바닥에 작은 새를 올려놓았다.", mnemonic: "'팜(palm)'! '손바닥'으로 야자수(palm tree)를 치다." },
    'pardon': { example: "Pardon me, could you repeat that?", translation: "실례합니다만, 다시 한번 말씀해 주시겠어요?", mnemonic: "'파든(pardon)'? '용서'해주세요." },
    'participate': { example: "Everyone is welcome to participate in the event.", translation: "누구나 행사에 참여하는 것을 환영합니다.", mnemonic: "'파티(party)'에 '참가하다(participate)'." },
    'passenger': { example: "The train was full of passengers.", translation: "기차는 승객들로 가득 찼다.", mnemonic: "'패스(pass)'! 통과하는 사람, '승객'." },
    'past': { example: "Don't think about the past.", translation: "과거에 대해 생각하지 마라.", mnemonic: "'패스(pass)'! 지나간 '과거'." },
    'path': { example: "Follow this path to the village.", translation: "이 길을 따라가면 마을이 나온다.", mnemonic: "'패스(pass)'! 지나가는 '작은 길'." },
    'patient': { example: "You need to be patient with children.", translation: "아이들에게는 인내심을 가져야 한다.", mnemonic: "의사 선생님, '환자(patient)'에게 '인내심'을 가지세요." },
    'pause': { example: "Let's take a short pause.", translation: "잠깐 멈춥시다.", mnemonic: "음악을 '포즈(pause)'! '일시 정지'." },
    'pepper': { example: "This soup needs more pepper.", translation: "이 수프에는 후추가 더 필요하다.", mnemonic: "'페퍼(pepper)'! '고추, 후추'." },
    'perfect': { example: "Your answer is perfect.", translation: "너의 답은 완벽해.", mnemonic: "'퍼펙트(perfect)'! '완벽한'." },
    'perhaps': { example: "Perhaps it will rain tomorrow.", translation: "아마 내일 비가 올지도 모른다.", mnemonic: "'퍼(per-완전히) 햅(hap-우연)'! 완전히 우연이니 '아마도'." },
    'period': { example: "The offer is valid for a limited period.", translation: "그 제안은 한정된 기간 동안 유효하다.", mnemonic: "마침표(period)는 문장의 끝, 한 '기간'의 끝." },
    'permit': { example: "Parking is not permitted here.", translation: "이곳은 주차가 허용되지 않습니다.", mnemonic: "'퍼(per-통과) 밑(mit-보내다)'! 통과시켜 보내주니 '허가하다'." },
    'person': { example: "He is a very kind person.", translation: "그는 매우 친절한 사람이다.", mnemonic: "'펄슨(person)'! '사람'." },
    'persuade': { example: "I persuaded him to join our team.", translation: "나는 그가 우리 팀에 합류하도록 설득했다.", mnemonic: "'펄(per-완전히) 스웨이드(suade-권하다)'! 완전히 권해서 '설득하다'." },
    'pet': { example: "Do you have any pets?", translation: "애완동물이 있나요?", mnemonic: "'펫(pet)'! '애완동물'." },
    'photograph': { example: "She took a photograph of her family.", translation: "그녀는 가족사진을 찍었다.", mnemonic: "'포토(photo)'! '사진'." },
    'piece': { example: "Can I have a piece of cake?", translation: "케이크 한 조각 주시겠어요?", mnemonic: "퍼즐 한 '피스(piece)'! '한 조각'." },
    'pile': { example: "There was a pile of books on the desk.", translation: "책상 위에는 책 더미가 있었다.", mnemonic: "'파일(pile)'! 서류 '더미'." },
    'pin': { example: "She used a pin to fasten the notice to the board.", translation: "그녀는 게시판에 공지를 고정하기 위해 핀을 사용했다.", mnemonic: "'핀(pin)'! '핀으로 꽂다'." },
    'plant': { example: "We planted a tree in the garden.", translation: "우리는 정원에 나무를 심었다.", mnemonic: "'플랜트(plant)'! '식물'을 심다." },
    'plate': { example: "Please put your plate in the sink.", translation: "접시를 싱크대에 넣어주세요.", mnemonic: "'플레이트(plate)'! '접시'." },
    'pleasant': { example: "We had a pleasant evening.", translation: "우리는 즐거운 저녁을 보냈다.", mnemonic: "'플리즈(please)'! 제발, '기분 좋은' 하루를!" },
    'pleasure': { example: "It's a pleasure to meet you.", translation: "만나서 반갑습니다.", mnemonic: "'플리즈(please)'! 남을 기쁘게 하는 '즐거움'." },
    'plenty': { example: "We have plenty of time.", translation: "우리는 시간이 많다.", mnemonic: "'플랜(plan) 티(tea)'! 차 마실 계획이 '많다'." },
    'plus': { example: "Two plus two is four.", translation: "2 더하기 2는 4이다.", mnemonic: "원 '플러스(plus)' 원! '더하기'." },
    'poem': { example: "She wrote a beautiful poem.", translation: "그녀는 아름다운 시를 썼다.", mnemonic: "'포엠(poem)'! '시'." },
    'poet': { example: "He is a famous poet.", translation: "그는 유명한 시인이다.", mnemonic: "'포엠(poem)'을 쓰는 사람, '시인'." },
    'poison': { example: "The snake's bite contains a deadly poison.", translation: "그 뱀의 물림에는 치명적인 독이 들어 있다.", mnemonic: "'포이즌(poison)'! '독'." },
    'polite': { example: "It's polite to say 'thank you'.", translation: "'감사합니다'라고 말하는 것은 공손한 것이다.", mnemonic: "'폴리스(police)'에게 '공손하게' 말하다." },
    'poll': { example: "The results of the poll will be announced tomorrow.", translation: "여론조사 결과는 내일 발표될 것이다.", mnemonic: "'폴(poll)'! 투표 용지를 막대기(pole)에 붙여 '투표'하다." },
    'pond': { example: "Ducks were swimming in the pond.", translation: "오리들이 연못에서 헤엄치고 있었다.", mnemonic: "'폰드(pond)'! '연못'." },
    'pool': { example: "Let's go for a swim in the pool.", translation: "수영장에 수영하러 가자.", mnemonic: "수영 '풀(pool)'!" },
    'pork': { example: "I don't eat pork.", translation: "나는 돼지고기를 먹지 않는다.", mnemonic: "'포크(fork)'로 '돼지고기(pork)'를 찍어 먹다." },
    'pose': { example: "She posed for a photograph.", translation: "그녀는 사진을 찍기 위해 자세를 취했다.", mnemonic: "모델이 '포즈(pose)'를 취하다." },
    'position': { example: "What is your position in the company?", translation: "회사에서 당신의 직책은 무엇인가요?", mnemonic: "내 '포지션(position)'은 팀의 공격수 '위치'." },
    'possible': { example: "Is it possible to finish this today?", translation: "오늘 이것을 끝내는 것이 가능한가요?", mnemonic: "미션 임'파서블(impossible)'은 '불가능한' 임무, '파서블'은 '가능한'!" },
    'poster': { example: "There was a poster of my favorite band on the wall.", translation: "벽에는 내가 가장 좋아하는 밴드의 포스터가 붙어 있었다.", mnemonic: "영화 '포스터(poster)'!" },
    'pour': { example: "Could you pour me some water?", translation: "물 좀 따라 주시겠어요?", mnemonic: "'포(four)'! 네 잔에 물을 '따르다'." },
    'powder': { example: "She put some powder on her face.", translation: "그녀는 얼굴에 분을 발랐다.", mnemonic: "밀가루 같은 '파우더(powder)'! '가루'." },
    'practice': { example: "You need more practice to play the piano well.", translation: "피아노를 잘 치려면 더 많은 연습이 필요하다.", mnemonic: "'프랙티스(practice)'! '연습'." },
    'predict': { example: "No one can predict the future.", translation: "아무도 미래를 예측할 수 없다.", mnemonic: "'프리(pre-미리) 딕트(dict-말하다)'! 미리 말하니 '예측하다'." },
    'prepare': { example: "I need to prepare for the exam.", translation: "나는 시험 준비를 해야 한다.", mnemonic: "'프리(pre-미리) 페어(pare-준비)'! 미리 '준비하다'." },
    'president': { example: "He was elected as the new president.", translation: "그는 새로운 대통령으로 선출되었다.", mnemonic: "'프레지던트(president)'! '대통령'." },
    'press': { example: "Press the button to start the machine.", translation: "기계를 시작하려면 버튼을 누르세요.", mnemonic: "'프레스(press)'! '누르다'." },
    'prevent': { example: "The fence is to prevent people from falling.", translation: "그 울타리는 사람들이 떨어지는 것을 막기 위한 것이다.", mnemonic: "'프리(pre-미리) 벤트(vent-오다)'! 미리 와서 못하게 '막다, 예방하다'." },
    'previous': { example: "The previous owner of the house was an artist.", translation: "그 집의 이전 주인은 예술가였다.", mnemonic: "'프리(pre-이전)'! '이전의'." },
    'price': { example: "What is the price of this shirt?", translation: "이 셔츠의 가격은 얼마인가요?", mnemonic: "'프라이스(price)'! '가격'." },
    'pride': { example: "He takes great pride in his work.", translation: "그는 자신의 일에 큰 자부심을 느낀다.", mnemonic: "'프라이드(pride)'! '자존심'." },
    'prison': { example: "He was sent to prison for robbery.", translation: "그는 강도 혐의로 교도소에 보내졌다.", mnemonic: "'프리즌(prison)' 브레이크! '교도소' 탈출." },
    'probably': { example: "It will probably rain later.", translation: "나중에 아마 비가 올 것이다.", mnemonic: "'프로(pro)'는 '아마도' 이길 거야." },
    'professor': { example: "She is a professor of English literature.", translation: "그녀는 영문학 교수이다.", mnemonic: "'프로페서(professor)'! '교수'." },
    'promise': { example: "You must keep your promise.", translation: "너는 약속을 지켜야 한다.", mnemonic: "'프라미스(promise)'! '약속'." },
    'proof': { example: "Do you have any proof that you were there?", translation: "당신이 거기에 있었다는 증거가 있나요?", mnemonic: "'프루프(proof)'! '증거'." },
    'protect': { example: "This cream will protect your skin from the sun.", translation: "이 크림은 태양으로부터 당신의 피부를 보호해 줄 것이다.", mnemonic: "'프로텍트(protect)'! '보호하다'." },
    'proud': { example: "I am very proud of you.", translation: "나는 네가 매우 자랑스럽다.", mnemonic: "'프라이드(pride)'! 자부심을 느끼니 '자랑스러운'." },
    'provide': { example: "The hotel provides free breakfast.", translation: "그 호텔은 무료 아침 식사를 제공한다.", mnemonic: "'프로(pro)'가 '바이드(vide-보다)'! 프로가 미리 보고 필요한 것을 '제공하다'." },
    'public': { example: "The park is open to the public.", translation: "그 공원은 대중에게 개방되어 있다.", mnemonic: "'퍼블릭(public)'! '대중의'." },
    'pull': { example: "Pull the door to open it.", translation: "문을 당겨서 여세요.", mnemonic: "'풀(pull)'! '당기다'." },
    'pump': { example: "We need to pump air into the tire.", translation: "우리는 타이어에 공기를 주입해야 한다.", mnemonic: "'펌프(pump)'질 해서 물을 '퍼올리다'." },
    'punch': { example: "He punched the wall in anger.", translation: "그는 화가 나서 벽을 주먹으로 쳤다.", mnemonic: "원펀치(one punch)! '주먹질하다'." },
    'purchase': { example: "Where did you purchase this bag?", translation: "이 가방을 어디서 구매했나요?", mnemonic: "'펄(per-완전히) 체이스(chase-쫓다)'! 완전히 쫓아서 '구매하다'." },
    'pure': { example: "This is pure gold.", translation: "이것은 순금이다.", mnemonic: "'퓨어(pure)'! '순수한'." },
    'purple': { example: "Purple is my favorite color.", translation: "보라색은 내가 가장 좋아하는 색이다.", mnemonic: "'퍼플(purple)'! '자주색'." },
    'quite': { example: "It's quite cold today.", translation: "오늘 꽤 춥네요.", mnemonic: "'콰이어트(quiet)'! '꽤' 조용하네." },
    'rapid': { example: "The city has seen rapid growth in recent years.", translation: "그 도시는 최근 몇 년간 빠른 성장을 보였다.", mnemonic: "'래피드(rapid)'! '내 피'가 '빠르게' 돈다." },
    'rat': { example: "A rat ran across the floor.", translation: "쥐 한 마리가 바닥을 가로질러 달려갔다.", mnemonic: "'랫(rat)'! '쥐'." },
    'rather': { example: "I would rather stay home than go out.", translation: "나는 밖에 나가는 것보다 차라리 집에 있겠다.", mnemonic: "'래더(ladder)'! 사다리 타기보다는 '오히려' 이게 낫다." },
    'reach': { example: "We finally reached the top of the mountain.", translation: "우리는 마침내 산 정상에 도달했다.", mnemonic: "손을 뻗어 '리치(reach)'! '~에 도달하다'." },
    'react': { example: "How did she react to the news?", translation: "그녀는 그 소식에 어떻게 반응했나요?", mnemonic: "'리(re-다시) 액트(act-행동)'! 자극에 다시 행동하며 '반응하다'." },
    'real': { example: "Is this a real diamond?", translation: "이것은 진짜 다이아몬드인가요?", mnemonic: "'리얼(real)'? 이거 '실제' 상황이야?" },
    'realize': { example: "I didn't realize my mistake until later.", translation: "나는 나중에서야 내 실수를 깨달았다.", mnemonic: "'리얼(real)'! '진짜'임을 '깨닫다'." },
    'reason': { example: "What is the reason for your delay?", translation: "늦은 이유가 무엇인가요?", mnemonic: "'리즈너블(reasonable-합리적인)'! 합리적인 '이유'." },
    'receive': { example: "Did you receive my email?", translation: "제 이메일 받으셨나요?", mnemonic: "'리시브(receive)'! 배구공을 '받다'." },
    'recent': { example: "There have been many changes in recent years.", translation: "최근 몇 년간 많은 변화가 있었다.", mnemonic: "'리센트(recent)'! '니 센트(scent-향기)'는 '최근' 유행하는 향수구나." },
    'recommend': { example: "Can you recommend a good restaurant?", translation: "좋은 식당 좀 추천해 주시겠어요?", mnemonic: "'레코멘드(recommend)'! '내꺼' 맨' 먼저 '추천하다'." },
    'record': { example: "She holds the world record for the marathon.", translation: "그녀는 마라톤 세계 기록을 보유하고 있다.", mnemonic: "LP판에 음악을 '레코드(record)'! '기록하다'." },
    'recycle': { example: "We should recycle paper and plastic.", translation: "우리는 종이와 플라스틱을 재활용해야 한다.", mnemonic: "'리(re-다시) 사이클(cycle-순환)'! '재활용하다'." },
    'refrigerator': { example: "Please put the milk back in the refrigerator.", translation: "우유를 다시 냉장고에 넣어주세요.", mnemonic: "'리프리저레이터(refrigerator)'! '냉장고'." },
    'relax': { example: "I like to relax by listening to music.", translation: "나는 음악을 들으며 휴식을 취하는 것을 좋아한다.", mnemonic: "'릴랙스(relax)'! '휴식을 취하다'." },
    'religion': { example: "Freedom of religion is a basic human right.", translation: "종교의 자유는 기본적인 인권이다.", mnemonic: "'릴리젼(religion)'! '종교'." },
    'remove': { example: "Please remove your hat inside.", translation: "실내에서는 모자를 벗어주세요.", mnemonic: "'리무버(remover)'는 화장을 '제거하는' 것." },
    'rent': { example: "We rent an apartment in the city.", translation: "우리는 도시에서 아파트를 임대한다.", mnemonic: "'렌트(rent)'카! 차를 '빌리다'." },
    'repair': { example: "I need to repair my broken watch.", translation: "나는 고장 난 시계를 수리해야 한다.", mnemonic: "'리(re-다시) 페어(pair)'! 다시 짝을 맞추며 '수리하다'." },
    'repeat': { example: "Could you repeat what you said?", translation: "말씀하신 것을 반복해 주시겠어요?", mnemonic: "'리피트(repeat)'! '반복하다'." },
    'replace': { example: "I need to replace the battery in my phone.", translation: "나는 휴대폰 배터리를 교체해야 한다.", mnemonic: "'리(re-다시) 플레이스(place-놓다)'! 다시 제자리에 놓으며 '교체하다'." },
    'reply': { example: "He didn't reply to my email.", translation: "그는 내 이메일에 답장하지 않았다.", mnemonic: "'리플(reply)'! 댓글로 '대답하다'." },
    'report': { example: "She wrote a report on the meeting.", translation: "그녀는 회의에 대한 보고서를 썼다.", mnemonic: "뉴스 '리포터(reporter)'는 사건을 '보고한다'." },
    'research': { example: "He is doing research on cancer.", translation: "그는 암에 대한 연구를 하고 있다.", mnemonic: "'리(re-다시) 서치(search)'! 다시 찾고 또 찾으며 '연구'하다." },
    'resemble': { example: "She resembles her mother.", translation: "그녀는 어머니를 닮았다.", mnemonic: "'리젬블(resemble)'! '네 샘플'은 너랑 똑같이 '닮았다'." },
    'resort': { example: "We stayed at a beautiful resort by the sea.", translation: "우리는 바닷가의 아름다운 리조트에서 묵었다.", mnemonic: "휴양지 '리조트(resort)'!" },
    'resource': { example: "The country is rich in natural resources.", translation: "그 나라는 천연자원이 풍부하다.", mnemonic: "'리(re-다시) 소스(source)'! 다시 쓸 수 있는 근원, '자원'." },
    'respect': { example: "You should show respect for your elders.", translation: "어른들을 존경해야 한다.", mnemonic: "'리스펙트(respect)'! '존경'합니다." },
    'respond': { example: "He didn't respond to my question.", translation: "그는 내 질문에 대답하지 않았다.", mnemonic: "'리스폰스(response)'! '응답하다'." },
    'responsible': { example: "He is responsible for the marketing department.", translation: "그는 마케팅 부서를 책임지고 있다.", mnemonic: "'리스폰스(response)'! 응답할 수 있으니 '책임감 있는'." },
    'rest': { example: "You look tired. You should get some rest.", translation: "피곤해 보여요. 휴식을 좀 취해야 해요.", mnemonic: "'레스트(rest)'! '휴식'." },
    'result': { example: "What was the result of the game?", translation: "경기 결과가 어땠나요?", mnemonic: "'리절트(result)'! '결과'." },
    'retire': { example: "He will retire from his job next year.", translation: "그는 내년에 직장에서 은퇴할 것이다.", mnemonic: "'리(re-다시) 타이어(tire)'! 다시 피곤해지기 전에 '은퇴하다'." },
    'review': { example: "I need to review my notes before the test.", translation: "시험 전에 노트를 복습해야 한다.", mnemonic: "'리(re-다시) 뷰(view)'! 다시 보니 '검토, 후기'." },
    'rhythm': { example: "I like the rhythm of this song.", translation: "나는 이 노래의 리듬이 좋다.", mnemonic: "'리듬(rhythm)'! '율동'." },
    'rice': { example: "Would you like some more rice?", translation: "밥 좀 더 드시겠어요?", mnemonic: "김이 모락모락 나는 '라이스(rice)'! '쌀, 밥'." },
    'ride': { example: "I learned to ride a bike when I was five.", translation: "나는 다섯 살 때 자전거 타는 법을 배웠다.", mnemonic: "자전거를 '라이드(ride)'! '타다'." },
    'rise': { example: "The price of gas is expected to rise.", translation: "유가가 오를 것으로 예상된다.", mnemonic: "'라이즈(rise)'! 해가 '오르다'." },
    'risk': { example: "There is a high risk of an earthquake in this area.", translation: "이 지역은 지진의 위험이 높다.", mnemonic: "'리스크(risk)'를 감수하다! '위험'." },
    'rival': { example: "They are rivals for the same prize.", translation: "그들은 같은 상을 놓고 경쟁하는 라이벌이다.", mnemonic: "'라이벌(rival)'! '경쟁자'." },
    'role': { example: "She played the leading role in the movie.", translation: "그녀는 그 영화에서 주연을 맡았다.", mnemonic: "게임 속 나의 '롤(role)'! '역할'." },
    'romantic': { example: "He sent her a romantic letter.", translation: "그는 그녀에게 낭만적인 편지를 보냈다.", mnemonic: "'로맨틱(romantic)' 코미디! '낭만적인'." },
    'root': { example: "The tree has deep roots.", translation: "그 나무는 뿌리가 깊다.", mnemonic: "나무의 '루트(root)'! '뿌리'." },
    'rope': { example: "He tied the boat to the dock with a rope.", translation: "그는 밧줄로 배를 부두에 묶었다.", mnemonic: "'로프(rope)'! '밧줄'." },
    'round': { example: "The earth is round.", translation: "지구는 둥글다.", mnemonic: "'라운드(round)' 테이블! '둥근' 탁자." },
    'rude': { example: "It's rude to interrupt someone.", translation: "누군가의 말을 가로채는 것은 무례한 것이다.", mnemonic: "'루드(rude)'! '누드'로 다니는 건 '무례한' 행동." },
    'rule': { example: "You must follow the rules of the game.", translation: "게임의 규칙을 따라야 한다.", mnemonic: "야구 '룰(rule)'! '규칙'." },
    'rumor': { example: "I heard a rumor that she is leaving the company.", translation: "나는 그녀가 회사를 떠난다는 소문을 들었다.", mnemonic: "'루머(rumor)'! '소문'." },
    'rush': { example: "I'm in a rush to catch the train.", translation: "나는 기차를 타기 위해 서두르고 있다.", mnemonic: "'러쉬(rush)' 아워! '돌진'하는 시간." },
    'salary': { example: "He receives a high salary.", translation: "그는 높은 봉급을 받는다.", mnemonic: "'샐러리(salary)'맨! '봉급' 생활자." },
    'satisfy': { example: "The meal was enough to satisfy my hunger.", translation: "그 식사는 나의 배고픔을 만족시키기에 충분했다.", mnemonic: "'새티스파이(satisfy)'! '새'를 '티'나게 '파이'로 만들어주니 '만족하다'." },
    'scan': { example: "Please scan the document and email it to me.", translation: "문서를 스캔해서 저에게 이메일로 보내주세요.", mnemonic: "바코드를 '스캔(scan)'하다." },
    'scene': { example: "The final scene of the movie was very moving.", translation: "그 영화의 마지막 장면은 매우 감동적이었다.", mnemonic: "영화의 한 '씬(scene)'! '장면'." },
    'screen': { example: "The movie was shown on a large screen.", translation: "그 영화는 큰 스크린에서 상영되었다.", mnemonic: "스마트폰 '스크린(screen)'! '화면'." },
    'search': { example: "The police are searching for the missing child.", translation: "경찰이 실종된 아이를 찾고 있다.", mnemonic: "인터넷 '서치(search)'! '찾다'." },
    'seat': { example: "Is this seat taken?", translation: "이 자리 임자 있나요?", mnemonic: "'싯(sit)'! '좌석(seat)'에 앉다." },
    'secret': { example: "Can you keep a secret?", translation: "비밀 지킬 수 있니?", mnemonic: "'시크릿(secret)' 가든! '비밀의' 정원." },
    'seed': { example: "I planted some flower seeds in the garden.", translation: "나는 정원에 꽃씨를 좀 심었다.", mnemonic: "해바라기 '씨(seed)'!" },
    'seek': { example: "They are seeking a solution to the problem.", translation: "그들은 그 문제에 대한 해결책을 찾고 있다.", mnemonic: "'시크(seek)'한 표정으로 일자리를 '찾다'." },
    'self': { example: "You need to have confidence in yourself.", translation: "너는 너 자신에 대한 자신감을 가질 필요가 있다.", mnemonic: "'셀프(self)' 카메라! '자기 자신'을 찍는 카메라." },
    'senior': { example: "He is a senior manager at the company.", translation: "그는 그 회사의 상급 관리자이다.", mnemonic: "'시니어(senior)'! '손윗사람, 상급의'." },
    'sense': { example: "He has a good sense of humor.", translation: "그는 유머 감각이 좋다.", mnemonic: "식스 '센스(sense)'! 여섯 번째 '감각'." },
    'series': { example: "I'm watching a new TV series.", translation: "나는 새로운 TV 시리즈를 보고 있다.", mnemonic: "드라마 '시리즈(series)'! '연속'." },
    'serious': { example: "This is a serious problem.", translation: "이것은 심각한 문제이다.", mnemonic: "'시리어스(serious)'? '진지하게' 말하는 거야?" },
    'serve': { example: "This restaurant serves delicious food.", translation: "이 식당은 맛있는 음식을 제공한다.", mnemonic: "테니스 '서브(serve)'! 공을 '제공하다'." },
    'several': { example: "I have several books to read.", translation: "나는 읽어야 할 책이 몇 권 있다.", mnemonic: "'세(se) 버(ve)럴(ral)'! '세 번'보다 '몇몇의'." },
    'sex': { example: "Please indicate your sex on the form.", translation: "서식에 성별을 표시해 주세요.", mnemonic: "'섹스(sex)'! '성'." },
    'shade': { example: "Let's sit in the shade of the tree.", translation: "나무 그늘에 앉자.", mnemonic: "램프 '셰이드(shade)'! '그늘'을 만들어주는 갓." },
    'shadow': { example: "The tree cast a long shadow.", translation: "그 나무는 긴 그림자를 드리웠다.", mnemonic: "'섀도우(shadow)'! 눈 화장 '그림자'." },
    'shake': { example: "Shake the bottle well before use.", translation: "사용하기 전에 병을 잘 흔드세요.", mnemonic: "밀크'셰이크(shake)'! 우유를 '흔들어' 만들다." },
    'shall': { example: "Shall we dance?", translation: "춤추실까요?", mnemonic: "'쉘(shall)' 위 댄스? '~할까요?'" },
    'sharp': { example: "Be careful with that sharp knife.", translation: "그 날카로운 칼을 조심하세요.", mnemonic: "'샤프(sharp)' 펜슬! '날카로운' 연필심." },
    'sheep': { example: "A flock of sheep was grazing in the field.", translation: "한 무리의 양이 들판에서 풀을 뜯고 있었다.", mnemonic: "'쉽(sheep)'! '양'." },
    'shoot': { example: "He shot an arrow at the target.", translation: "그는 과녁에 화살을 쏘았다.", mnemonic: "사진을 '슛(shoot)'! '쏘다, 촬영하다'." },
    'shoulder': { example: "He tapped me on the shoulder.", translation: "그가 내 어깨를 툭 쳤다.", mnemonic: "'숄더(shoulder)'백! '어깨'에 메는 가방." },
    'shout': { example: "There's no need to shout.", translation: "소리칠 필요 없어요.", mnemonic: "'샤우트(shout)'! '외치다'." },
    'shower': { example: "I take a shower every morning.", translation: "나는 매일 아침 샤워를 한다.", mnemonic: "'샤워(shower)'! '소나기'처럼 쏟아지는 물줄기." },
    'shut': { example: "Please shut the gate.", translation: "문을 닫아주세요.", mnemonic: "'셧(shut)'다운! 문을 '닫다'." },
    'sign': { example: "Look for the sign to the exit.", translation: "출구 표지를 찾으세요.", mnemonic: "유명인에게 '사인(sign)'을 받다! '표시, 서명'." },
    'silent': { example: "The room was completely silent.", translation: "방은 완전히 조용했다.", mnemonic: "'사일런트(silent)' 나잇! '조용한' 밤." },
    'silk': { example: "She was wearing a beautiful silk dress.", translation: "그녀는 아름다운 비단 드레스를 입고 있었다.", mnemonic: "'실크(silk)'! 부드러운 '비단'." },
    'silly': { example: "Don't be silly! Of course I'll help you.", translation: "바보같이 굴지 마! 당연히 내가 도와줄게.", mnemonic: "'실리(silly)'콘 밸리의 '바보들' (영화 제목처럼)." },
    'silver': { example: "She was wearing a silver necklace.", translation: "그녀는 은 목걸이를 하고 있었다.", mnemonic: "'실버(silver)'! '은'." },
    'similar': { example: "The two houses are similar in size.", translation: "그 두 집은 크기가 비슷하다.", mnemonic: "'시밀러(similar)' 룩! '비슷한' 옷차림." },
    'simple': { example: "The instructions are simple and easy to follow.", translation: "설명서는 간단하고 따라 하기 쉽다.", mnemonic: "'심플(simple)'! '단순한'." },
    'since': { example: "I have been waiting here since 10 o'clock.", translation: "나는 10시부터 여기서 기다리고 있다.", mnemonic: "'신스(since)'! '~이후로'." },
    'single': { example: "She is a single mother with two children.", translation: "그녀는 두 아이를 둔 미혼모이다.", mnemonic: "'싱글(single)'! '단 하나의'." },
    'skill': { example: "He has excellent communication skills.", translation: "그는 뛰어난 의사소통 기술을 가지고 있다.", mnemonic: "게임 '스킬(skill)'! '기술'." },
    'slice': { example: "Would you like a slice of pizza?", translation: "피자 한 조각 드시겠어요?", mnemonic: "치즈 '슬라이스(slice)'! '얇은 조각'." },
    'slide': { example: "The children were playing on the slide.", translation: "아이들이 미끄럼틀에서 놀고 있었다.", mnemonic: "워터 '슬라이드(slide)'! '미끄러지다'." },
    'slim': { example: "She has a slim figure.", translation: "그녀는 날씬한 몸매를 가지고 있다.", mnemonic: "'슬림(slim)'! '호리호리한'." },
    'smoke': { example: "Smoke was coming out of the chimney.", translation: "굴뚝에서 연기가 나오고 있었다.", mnemonic: "'스모크(smoke)'! '연기'." },
    'smooth': { example: "The road is smooth and easy to drive on.", translation: "그 길은 매끄럽고 운전하기 쉽다.", mnemonic: "'스무디(smoothie)'! '부드럽고 매끄러운' 음료." },
    'snake': { example: "He is afraid of snakes.", translation: "그는 뱀을 무서워한다.", mnemonic: "'스네이크(snake)'! '뱀'." },
    'soap': { example: "Wash your hands with soap and water.", translation: "손을 비누와 물로 씻으세요.", mnemonic: "'솝(soap)'! '비누'." },
    'social': { example: "Humans are social animals.", translation: "인간은 사회적 동물이다.", mnemonic: "'소셜(social)' 미디어! '사회의'." },
    'society': { example: "We live in a modern society.", translation: "우리는 현대 사회에 살고 있다.", mnemonic: "'소사이어티(society)'! '사회'." },
    'software': { example: "You need to install the software on your computer.", translation: "컴퓨터에 소프트웨어를 설치해야 한다.", mnemonic: "'소프트웨어(software)'!" },
    'soil': { example: "The soil in this area is very fertile.", translation: "이 지역의 흙은 매우 비옥하다.", mnemonic: "'소일(soil)'! '소'가 '일'하는 '흙'." },
    'soldier': { example: "He is a brave soldier.", translation: "그는 용감한 군인이다.", mnemonic: "'솔저(soldier)'! '군인'." },
    'solve': { example: "I can't solve this math problem.", translation: "나는 이 수학 문제를 풀 수 없다.", mnemonic: "'솔브(solve)'! '해결하다'." },
    'soon': { example: "I'll be back soon.", translation: "곧 돌아올게.", mnemonic: "'순(soon)'식간에! '곧'." },
    'soul': { example: "Music is good for the soul.", translation: "음악은 영혼에 좋다.", mnemonic: "'소울(soul)' 메이트! '영혼'의 단짝." },
    'spark': { example: "A spark from the fire set the rug on fire.", translation: "불에서 튄 불꽃이 양탄자에 불을 붙였다.", mnemonic: "'스파크(spark)'! '불꽃'." },
    'special': { example: "Today is a special day.", translation: "오늘은 특별한 날이다.", mnemonic: "'스페셜(special)'! '특별한'." },
    'speech': { example: "He gave a long speech.", translation: "그는 긴 연설을 했다.", mnemonic: "'스피치(speech)'! '연설'." },
    'spend': { example: "How much money did you spend?", translation: "돈을 얼마나 썼니?", mnemonic: "'스펜드(spend)'! 돈을 '쓰다'." },
    'spot': { example: "This is a good spot for a picnic.", translation: "여기는 소풍하기 좋은 장소이다.", mnemonic: "핫 '스팟(spot)'! 인기 있는 '장소'." },
    'stage': { example: "The actors are on the stage.", translation: "배우들이 무대 위에 있다.", mnemonic: "콘서트 '스테이지(stage)'! '무대'." },
    'stairs': { example: "Be careful on the stairs.", translation: "계단을 조심하세요.", mnemonic: "'스테어(stair)'! '계단'." },
    'stamp': { example: "You need to put a stamp on the envelope.", translation: "봉투에 우표를 붙여야 한다.", mnemonic: "'스탬프(stamp)'! '도장, 우표'." },
    'standard': { example: "The company has high safety standards.", translation: "그 회사는 높은 안전 기준을 가지고 있다.", mnemonic: "'스탠다드(standard)'! '기준, 표준'." },
    'station': { example: "I'll meet you at the train station.", translation: "기차역에서 만나요.", mnemonic: "지하철 '스테이션(station)'! '역'." },
    'steal': { example: "Someone stole my wallet.", translation: "누군가 내 지갑을 훔쳐갔다.", mnemonic: "'스틸(steal)'! '훔치다'." },
    'steam': { example: "Steam was rising from the hot coffee.", translation: "뜨거운 커피에서 김이 피어오르고 있었다.", mnemonic: "'스팀(steam)'! '증기'." },
    'steel': { example: "The bridge is made of steel.", translation: "그 다리는 강철로 만들어졌다.", mnemonic: "'스틸(steel)'! '강철'." },
    'step': { example: "Take one step forward.", translation: "한 걸음 앞으로 나오세요.", mnemonic: "원 '스텝(step)', 투 '스텝'! '걸음'." },
    'still': { example: "He is still waiting for her.", translation: "그는 여전히 그녀를 기다리고 있다.", mnemonic: "'스틸(steel)'! 강철처럼 변함없이 '여전히'." },
    'storm': { example: "A heavy storm is coming.", translation: "강한 폭풍이 오고 있다.", mnemonic: "'스톰(storm)'! '폭풍'." },
    'strange': { example: "I heard a strange noise outside.", translation: "나는 밖에서 이상한 소리를 들었다.", mnemonic: "'스트레인저(stranger)'는 '이상한' 사람." },
    'succeed': { example: "I hope you succeed in your new job.", translation: "새로운 직장에서 성공하기를 바란다.", mnemonic: "'석세스(success)'! '성공하다'." },
    'such': { example: "I have never seen such a beautiful view.", translation: "나는 그렇게 아름다운 경치를 본 적이 없다.", mnemonic: "'서치(search)'! 검색하면 '그러한' 결과가 나온다." },
    'sudden': { example: "He made a sudden decision to leave.", translation: "그는 떠나기로 갑작스러운 결정을 내렸다.", mnemonic: "'서든(sudden)' 어택! '갑작스러운' 공격." },
    'suggest': { example: "I suggest that we take a break.", translation: "우리가 휴식을 취할 것을 제안합니다.", mnemonic: "'서제스트(suggest)'! '제안하다'." },
    'super': { example: "That was a super performance!", translation: "그것은 아주 훌륭한 공연이었어!", mnemonic: "'슈퍼(super)'맨! '우수한' 영웅." },
    'sure': { example: "Are you sure about that?", translation: "그것에 대해 확신하나요?", mnemonic: "'슈어(sure)'! '확실한'." },
    'surprise': { example: "He planned a surprise party for her.", translation: "그는 그녀를 위해 깜짝 파티를 계획했다.", mnemonic: "'서프라이즈(surprise)'! '놀람'." },
    'surround': { example: "The house is surrounded by trees.", translation: "그 집은 나무로 둘러싸여 있다.", mnemonic: "'서(sur-위) 라운드(round-둥근)'! 위에서 보니 둥글게 '에워싸다'." },
    'survive': { example: "He was lucky to survive the accident.", translation: "그는 그 사고에서 살아남은 것이 운이 좋았다.", mnemonic: "'서바이브(survive)'! '살아남다'." },
    'sweet': { example: "This cake is too sweet for me.", translation: "이 케이크는 나에게 너무 달다.", mnemonic: "'스위트(sweet)'! '달콤한'." },
    'symbol': { example: "The dove is a symbol of peace.", translation: "비둘기는 평화의 상징이다.", mnemonic: "'심벌(symbol)' 마크! '상징'." },
    'system': { example: "The company has a new computer system.", translation: "그 회사는 새로운 컴퓨터 시스템을 갖추고 있다.", mnemonic: "소화 '시스템(system)'! '체계, 조직'." },
    'tag': { example: "The price tag is on the back.", translation: "가격표는 뒤에 붙어 있다.", mnemonic: "옷에 붙은 '태그(tag)'! '꼬리표'." },
    'tap': { example: "He tapped me on the shoulder.", translation: "그가 내 어깨를 가볍게 툭 쳤다.", mnemonic: "'탭(tap)' 댄스! 발로 바닥을 '가볍게 치다'." },
    'target': { example: "The arrow hit the target.", translation: "화살이 과녁을 맞혔다.", mnemonic: "'타겟(target)'! '과녁'." },
    'task': { example: "I have a lot of tasks to do today.", translation: "나는 오늘 해야 할 일이 많다.", mnemonic: "멀티'태스킹(tasking)'은 여러 '일'을 동시에 하는 것." },
    'tea': { example: "Would you like a cup of tea?", translation: "차 한잔 하시겠어요?", mnemonic: "녹차, 홍'차(tea)'." },
    'tear': { example: "A tear ran down her cheek.", translation: "눈물 한 방울이 그녀의 뺨을 타고 흘러내렸다.", mnemonic: "'티어(tear)'! '눈물'." },
    'teenage': { example: "He is in his teenage years.", translation: "그는 십대 시절을 보내고 있다.", mnemonic: "'틴(teen)'! '십대'." },
    'temperature': { example: "The temperature is dropping.", translation: "온도가 떨어지고 있다.", mnemonic: "'템퍼러처(temperature)'! '온도'." },
    'term': { example: "The school term starts in March.", translation: "학기는 3월에 시작된다.", mnemonic: "계약 '텀(term)'! '기간'." },
    'terminal': { example: "We need to go to Terminal 2.", translation: "우리는 2번 터미널로 가야 한다.", mnemonic: "버스 '터미널(terminal)'!" },
    'theater': { example: "Let's go to the theater to see a play.", translation: "연극 보러 극장에 가자.", mnemonic: "'시어터(theater)'! '극장'." },
    'then': { example: "I'll finish my work and then go home.", translation: "나는 일을 끝내고 나서 집에 갈 것이다.", mnemonic: "'덴(then)'! '그때, 그러고 나서'." },
    'thick': { example: "He was wearing a thick coat.", translation: "그는 두꺼운 코트를 입고 있었다.", mnemonic: "'씩(sick)'! 아플 땐 '두꺼운(thick)' 이불을 덮어야 해." },
    'thief': { example: "The thief stole her purse.", translation: "도둑이 그녀의 지갑을 훔쳤다.", mnemonic: "'씨프(thief)'! '도둑'." },
    'thin': { example: "The book is very thin.", translation: "그 책은 매우 얇다.", mnemonic: "'씬(thin)'! '얇은'." },
    'though': { example: "Though it was raining, we went for a walk.", translation: "비가 오고 있었지만, 우리는 산책하러 갔다.", mnemonic: "'도우(though)'! '비록 ~일지라도'." },
    'thousand': { example: "There are a thousand students in this school.", translation: "이 학교에는 천 명의 학생이 있다.", mnemonic: "'사우전드(thousand)'! '천'." },
    'through': { example: "We walked through the forest.", translation: "우리는 숲을 통과하여 걸었다.", mnemonic: "드라이브 '스루(through)'! 차를 탄 채로 '~을 통하여'." },
    'throw': { example: "Don't throw stones.", translation: "돌을 던지지 마세요.", mnemonic: "'드로우(throw)'! 공을 '던지다'." },
    'thumb': { example: "He hurt his thumb.", translation: "그는 엄지손가락을 다쳤다.", mnemonic: "'썸(thumb)'네일! '엄지'손톱만 한 작은 그림." },
    'thus': { example: "He didn't study, and thus he failed the exam.", translation: "그는 공부하지 않았고, 그러므로 시험에 떨어졌다.", mnemonic: "'더스(thus)'! '따라서, 그러므로'." },
    'tie': { example: "He is wearing a shirt and tie.", translation: "그는 셔츠와 넥타이를 매고 있다.", mnemonic: "넥'타이(tie)'! '매다'." },
    'tight': { example: "These shoes are too tight.", translation: "이 신발은 너무 꽉 낀다.", mnemonic: "'타이트(tight)'! '꽉 끼는'." },
    'till': { example: "I will wait till you come back.", translation: "네가 돌아올 때까지 기다릴게.", mnemonic: "'틸(till)'! '~까지'." },
    'tiny': { example: "An ant is a tiny insect.", translation: "개미는 아주 작은 곤충이다.", mnemonic: "'타이니(tiny)'! '아주 작은'." },
    'tire': { example: "The long walk tired me out.", translation: "오랜 걷기는 나를 피곤하게 했다.", mnemonic: "자동차 '타이어(tire)'처럼 닳아서 '피곤하다'." },
    'title': { example: "What is the title of the book?", translation: "그 책의 제목이 무엇인가요?", mnemonic: "책 '타이틀(title)'! '표제'." },
    'tobacco': { example: "Smoking tobacco is bad for your health.", translation: "담배를 피우는 것은 건강에 나쁘다.", mnemonic: "'토바코(tobacco)'! '담배'." },
    'toilet': { example: "Where is the toilet?", translation: "화장실이 어디인가요?", mnemonic: "'토일렛(toilet)'! '화장실'." },
    'tone': { example: "I don't like his tone of voice.", translation: "나는 그의 목소리 톤이 마음에 들지 않는다.", mnemonic: "목소리 '톤(tone)'! '음조'." },
    'tongue': { example: "He burned his tongue on the hot soup.", translation: "그는 뜨거운 수프에 혀를 데었다.", mnemonic: "'텅(tongue)'! '혀'를 차다." },
    'tool': { example: "A hammer is a useful tool.", translation: "망치는 유용한 도구이다.", mnemonic: "'툴(tool)'! '도구'." },
    'tough': { example: "This meat is too tough to eat.", translation: "이 고기는 너무 질겨서 먹을 수 없다.", mnemonic: "'터프(tough)'가이! '거친' 남자." },
    'tradition': { example: "It's a family tradition to eat together on holidays.", translation: "명절에 함께 식사하는 것은 우리 가족의 전통이다.", mnemonic: "'트래디션(tradition)'! '전통'." },
    'traffic': { example: "The traffic is heavy this morning.", translation: "오늘 아침은 교통이 혼잡하다.", mnemonic: "'트래픽(traffic)' 잼! '교통' 체증." },
    'tray': { example: "She carried the drinks on a tray.", translation: "그녀는 쟁반에 음료를 날랐다.", mnemonic: "'트레이(tray)'! '쟁반'." },
    'treasure': { example: "The pirates buried the treasure on the island.", translation: "해적들은 그 섬에 보물을 묻었다.", mnemonic: "'트레저(treasure)'! '보물'." },
    'trend': { example: "The current trend is to wear loose-fitting clothes.", translation: "현재의 유행은 헐렁한 옷을 입는 것이다.", mnemonic: "패션 '트렌드(trend)'! '추세'." },
    'trophy': { example: "He won a trophy for being the best player.", translation: "그는 최고의 선수로서 트로피를 받았다.", mnemonic: "우승 '트로피(trophy)'!" },
    'trouble': { example: "I'm having trouble with my computer.", translation: "나는 컴퓨터에 문제가 있다.", mnemonic: "'트러블(trouble)'! '고생, 문제'." },
    'trouser': { example: "He was wearing a pair of black trousers.", translation: "그는 검은 바지를 입고 있었다.", mnemonic: "'트라우저(trouser)'! '바지'." },
    'trust': { example: "I trust him completely.", translation: "나는 그를 완전히 신뢰한다.", mnemonic: "'트러스트(trust)'! '신뢰'." },
    'truth': { example: "Tell me the truth.", translation: "진실을 말해줘.", mnemonic: "'트루(true)'! '진실'." },
    'tunnel': { example: "The train went through a long tunnel.", translation: "기차는 긴 터널을 통과했다.", mnemonic: "'터널(tunnel)'!" },
    'twin': { example: "She has a twin sister.", translation: "그녀는 쌍둥이 자매가 있다.", mnemonic: "'트윈(twin)' 타워! '쌍둥이' 빌딩." },
    'unit': { example: "A meter is a unit of length.", translation: "미터는 길이의 단위이다.", mnemonic: "아파트 101동 101호, 한 '유닛(unit)'! '단위'." },
    'universe': { example: "The universe is vast and mysterious.", translation: "우주는 광대하고 신비롭다.", mnemonic: "'유니버스(universe)'! '우주'." },
    'university': { example: "She is a student at a famous university.", translation: "그녀는 유명한 대학교의 학생이다.", mnemonic: "'유니버시티(university)'! '대학교'." },
    'unless': { example: "You will fail unless you study.", translation: "공부하지 않으면 너는 실패할 것이다.", mnemonic: "'언(un-not) 레스(less)'! '~하지 않으면'." },
    'until': { example: "I will wait here until you get back.", translation: "네가 돌아올 때까지 여기서 기다릴게.", mnemonic: "'언틸(until)'! '~까지'." },
    'update': { example: "You need to update the software.", translation: "소프트웨어를 업데이트해야 합니다.", mnemonic: "프로그램 '업데이트(update)'! '갱신하다'." },
    'upon': { example: "Once upon a time, there lived a king.", translation: "옛날 옛적에 한 왕이 살았다.", mnemonic: "'~의 위에(on)'과 같은 뜻." },
    'upward': { example: "The smoke rose upward.", translation: "연기가 위쪽으로 피어올랐다.", mnemonic: "'업(up)'! '위로 향한'." },
    'usual': { example: "I got up at my usual time.", translation: "나는 평소 시간에 일어났다.", mnemonic: "'유주얼(usual)'! '평소의'." },
    'vacation': { example: "We are going on vacation to Hawaii.", translation: "우리는 하와이로 휴가를 갈 것이다.", mnemonic: "'베케이션(vacation)'! '휴가'." },
    'value': { example: "Health is a great value.", translation: "건강은 큰 가치이다.", mnemonic: "'밸류(value)'! '가치'." },
    'vehicle': { example: "A car is a type of vehicle.", translation: "자동차는 차량의 한 종류이다.", mnemonic: "'비클(vehicle)'! '차량'." },
    'venture': { example: "Starting a new business is a big venture.", translation: "새로운 사업을 시작하는 것은 큰 모험이다.", mnemonic: "'벤처(venture)' 기업! '모험'적인 기업." },
    'victory': { example: "The team celebrated their victory.", translation: "그 팀은 그들의 승리를 축하했다.", mnemonic: "'빅토리(victory)'! '승리'." },
    'view': { example: "The view from the top of the mountain is amazing.", translation: "산 정상에서 보는 경치는 놀랍다.", mnemonic: "오션 '뷰(view)'! 바다 '전망'." },
    'village': { example: "She lives in a small village.", translation: "그녀는 작은 마을에 산다.", mnemonic: "'빌리지(village)'! '마을'." },
    'vocabulary': { example: "I need to improve my English vocabulary.", translation: "나는 영어 어휘력을 향상시켜야 한다.", mnemonic: "'보카(voca)'! '어휘'." },
    'volume': { example: "Please turn down the volume.", translation: "볼륨 좀 줄여주세요.", mnemonic: "TV '볼륨(volume)'! '양'." },
    'vote': { example: "Did you vote in the election?", translation: "선거에서 투표했나요?", mnemonic: "'보트(vote)'! '투표하다'." },
    'warn': { example: "I warned him not to be late.", translation: "나는 그에게 늦지 말라고 경고했다.", mnemonic: "'워닝(warning)'! '경고'." },
    'waste': { example: "Don't waste your money on useless things.", translation: "쓸데없는 것에 돈을 낭비하지 마라.", mnemonic: "'웨이스트(waste)'! '낭비하다'." },
    'wave': { example: "She waved goodbye to her friends.", translation: "그녀는 친구들에게 손을 흔들어 작별 인사를 했다.", mnemonic: "'웨이브(wave)'! '물결'처럼 손을 흔들다." },
    'weak': { example: "He is still weak after the illness.", translation: "그는 병을 앓은 후 아직 약하다.", mnemonic: "'위크(weak)'! 일주일(week) 내내 아파서 '약해지다'." },
    'wealth': { example: "He has great wealth.", translation: "그는 많은 재산을 가지고 있다.", mnemonic: "'웰스(wealth)' 파고! '부, 재산'을 파고들다." },
    'weapon': { example: "A knife can be a dangerous weapon.", translation: "칼은 위험한 무기가 될 수 있다.", mnemonic: "'웨폰(weapon)'! '무기'." },
    'whale': { example: "The blue whale is the largest animal on Earth.", translation: "흰긴수염고래는 지구상에서 가장 큰 동물이다.", mnemonic: "'웨일(whale)'! '고래'." },
    'wheat': { example: "Bread is made from wheat.", translation: "빵은 밀로 만들어진다.", mnemonic: "'휘트(wheat)'! '밀'." },
    'wheel': { example: "The car has four wheels.", translation: "자동차는 바퀴가 네 개 있다.", mnemonic: "'휠(wheel)'! '바퀴'." },
    'whether': { example: "I don't know whether he will come or not.", translation: "나는 그가 올지 안 올지 모르겠다.", mnemonic: "'웨더(weather)'! 날씨가 좋을지 아닐지, '~인지 아닌지'." },
    'which': { example: "Which color do you prefer?", translation: "어떤 색을 더 선호하세요?", mnemonic: "'위치(which)'? '어느 것'." },
    'while': { example: "I read a book while I was waiting.", translation: "나는 기다리는 동안 책을 읽었다.", mnemonic: "'와일(while)'! '~하는 동안'." },
    'whistle': { example: "He whistled a happy tune.", translation: "그는 행복한 곡조를 휘파람으로 불었다.", mnemonic: "'휘슬(whistle)'! '휘파람'." },
    'wide': { example: "The river is very wide.", translation: "그 강은 매우 넓다.", mnemonic: "'와이드(wide)' 스크린! '넓은' 화면." },
    'wild': { example: "There are many wild animals in the jungle.", translation: "정글에는 많은 야생 동물들이 있다.", mnemonic: "'와일드(wild)'! '야생의'." },
    'wing': { example: "The bird has a broken wing.", translation: "그 새는 날개가 부러졌다.", mnemonic: "치킨 '윙(wing)'! 닭 '날개'." },
    'wise': { example: "He is a wise old man.", translation: "그는 현명한 노인이다.", mnemonic: "'와이즈(wise)'! '현명한'." },
    'within': { example: "Please reply within three days.", translation: "3일 이내에 회신해 주세요.", mnemonic: "'위드(with) 인(in)'! '~이내에'." },
    'without': { example: "I can't live without you.", translation: "나는 너 없이 살 수 없어.", mnemonic: "'위드(with) 아웃(out)'! '~없이'." },
    'wool': { example: "This sweater is made of wool.", translation: "이 스웨터는 양모로 만들어졌다.", mnemonic: "'울(wool)'! '양모'." },
    'would': { example: "Would you like some coffee?", translation: "커피 좀 드시겠어요?", mnemonic: "'우드(wood)'! 나무처럼 부드럽게 '~하겠다'고 제안." },
    'wrap': { example: "She wrapped the gift in beautiful paper.", translation: "그녀는 선물을 아름다운 종이로 포장했다.", mnemonic: "비닐 '랩(wrap)'! 음식을 '싸다'." },
    'yet': { example: "Have you finished your homework yet?", translation: "숙제 아직 다 안 끝냈니?", mnemonic: "'예(ye)!' 하고 대답하기엔 '아직'." },
  },
  
  toeic: {
  'performance': { example: "The employee's performance will be reviewed next month.", translation: "그 직원의 실적은 다음 달에 검토될 것입니다.", mnemonic: "'퍼포먼스'가 좋은 가수는 '공연'을 잘하고, 직원은 '실적'이 좋다." },
  'given': { example: "Given the tight deadline, we need to work efficiently.", translation: "빡빡한 마감 기한을 고려하면, 우리는 효율적으로 일해야 합니다.", mnemonic: "이런 조건이 '주어진(given)' 상황을 '고려하면'..." },
  'carefully': { example: "Please read the contract carefully before signing.", translation: "서명하기 전에 계약서를 주의 깊게 읽어주세요.", mnemonic: "'케어(care)'를 '풀리(fully)'! 완전히 신경 써서 '주의 깊게'." },
  'supply': { example: "The company will supply all necessary equipment.", translation: "회사가 모든 필요한 장비를 공급할 것입니다.", mnemonic: "사무용품 '서플라이(supply)'! '공급'을 책임진다." },
  'support': { example: "We are here to support your new business venture.", translation: "저희는 당신의 새로운 사업 벤처를 지원하기 위해 여기 있습니다.", mnemonic: "축구팀 '서포터(supporter)'는 팀을 '후원하고 지원한다'." },
  'adequate': { example: "Is your salary adequate to support your family?", translation: "당신의 월급은 가족을 부양하기에 충분한가요?", mnemonic: "'애들 컷(adequate)'! 애들이 이만큼 컸으니 '충분한' 용돈을 줘야지." },
  'possible': { example: "We need to find the best possible solution.", translation: "우리는 가능한 최상의 해결책을 찾아야 합니다.", mnemonic: "'파서블(possible)'! 미션 임'파서블'은 '불가능한' 임무, 그냥 '파서블'은 '가능한'!" },
  'popular': { example: "This restaurant is very popular among tourists.", translation: "이 식당은 관광객들 사이에서 매우 인기가 있습니다.", mnemonic: "'팝(pop)' 음악은 대중적으로 '인기 있는(popular)' 음악." },
  'substantially': { example: "Our profits have increased substantially this year.", translation: "올해 우리의 수익이 상당히 증가했습니다.", mnemonic: "'sub(아래)'에 '스탠드(stand)'! 아래 기초가 탄탄하니 '상당히' 발전한다." },
  'undergo': { example: "The building will undergo extensive renovations.", translation: "그 건물은 대대적인 보수 공사를 겪게 될 것입니다.", mnemonic: "'언더(under)'로 '고(go)'! 힘든 터널 아래로 가며 시련을 '겪다'." },
  'suspend': { example: "The ferry service has been suspended due to bad weather.", translation: "악천후로 인해 여객선 운행이 중단되었습니다.", mnemonic: "'서스펜드(suspend)'! '서스펜스(suspense)' 넘치는 영화처럼 심장이 '중단'될 뻔!" },
  'rental': { example: "We need to book a car rental for our trip.", translation: "우리는 여행을 위해 렌터카를 예약해야 합니다.", mnemonic: "'렌탈(rental)' 서비스는 '임대용의' 물건을 빌려주는 것." },
  'question': { example: "If you have any questions, please feel free to ask.", translation: "질문이 있으시면 언제든지 편하게 물어보세요.", mnemonic: "물음표(?)는 '질문(question)'!" },
  'collection': { example: "The museum has a fine collection of modern art.", translation: "그 박물관은 훌륭한 현대 미술 소장품을 보유하고 있습니다.", mnemonic: "우표 '컬렉션(collection)'은 우표 '소장품'." },
  'inquiry': { example: "We have received an inquiry about our new product.", translation: "저희 신제품에 대한 문의를 받았습니다.", mnemonic: "'인(in), 콰이어(choir)'? 합창단에 들어가려면 '문의'부터 해야지." },
  'originally': { example: "The company was originally based in Boston.", translation: "그 회사는 원래 보스턴에 기반을 두고 있었다.", mnemonic: "'오리지널(original)'이 '원래의' 것이니, 'originally'는 '원래'." },
  'effective': { example: "The new marketing strategy was very effective.", translation: "새로운 마케팅 전략은 매우 효과적이었다.", mnemonic: "'이펙트(effect-효과)'가 있으니 '효과적인(effective)'." },
  'thoroughly': { example: "The room was thoroughly cleaned.", translation: "그 방은 철저하게 청소되었다.", mnemonic: "'서류(thoroughly)'를 검토할 땐 '철저하게' 해야 해." },
  'initiative': { example: "The government launched a new initiative to promote recycling.", translation: "정부는 재활용을 장려하기 위한 새로운 캠페인을 시작했다.", mnemonic: "'이니시에이티브(initiative)'! 게임에서 먼저 공격하는 '솔선수범'!" },
  'applicant': { example: "There are over 100 applicants for the job.", translation: "그 일자리에 100명이 넘는 지원자가 있다.", mnemonic: "'apply(지원하다)'하는 사람이 바로 '지원자(applicant)'." },
  'recent': { example: "Have you seen any recent movies?", translation: "최근에 나온 영화 본 거 있어요?", mnemonic: "'리센트(recent)'! '니 센트(scent-향기)'는 '최근' 유행하는 향수구나." },
  'several': { example: "I have visited Paris several times.", translation: "나는 파리를 여러 번 방문했다.", mnemonic: "'세(se) 버(ve)럴(ral)'! '세 번'보다 '여러 번'." },
  'successful': { example: "She is a successful businesswoman.", translation: "그녀는 성공적인 사업가이다.", mnemonic: "'success(성공)'했으니 '성공적인(successful)'." },
  'intention': { example: "It was not my intention to upset you.", translation: "당신을 속상하게 할 의도는 아니었어요.", mnemonic: "'인(in) 텐션(tension)'! 긴장 속에 숨겨진 진짜 '의도'." },
  'report': { example: "You need to submit your report by Friday.", translation: "금요일까지 보고서를 제출해야 합니다.", mnemonic: "뉴스 '리포터(reporter)'는 사건을 '보고한다'." },
  'requirement': { example: "Experience is a key requirement for this job.", translation: "경험은 이 직업의 핵심 요구 사항입니다.", mnemonic: "'require(요구하다)'하는 것이 '요구사항(requirement)'." },
  'shortly': { example: "The manager will be with you shortly.", translation: "매니저님이 곧 오실 겁니다.", mnemonic: "'쇼트(short)'! 짧은 시간 안에, '곧, 신속히'." },
  'consider': { example: "We will consider your suggestion.", translation: "저희가 당신의 제안을 고려해 보겠습니다.", mnemonic: "'컨(con-함께) 시더(consider)'! 함께 보면서 '고려하다'." },
  'everyone': { example: "Everyone is welcome to join the party.", translation: "모든 분들을 파티에 환영합니다.", mnemonic: "'에브리(every)' '원(one)'! 한 명 한 명 '모든 사람'." },
  'remain': { example: "Please remain seated until the plane has stopped.", translation: "비행기가 멈출 때까지 자리에 앉은 채로 있어 주세요.", mnemonic: "'리(re-뒤에) 메인(main)'! 주인공은 뒤에 '남아있다'." },
  'join': { example: "Would you like to join us for dinner?", translation: "저희와 저녁 식사에 합류하시겠어요?", mnemonic: "회사에 '조인(join)'해서 '합류하다'." },
  'upcoming': { example: "We are excited about the upcoming event.", translation: "우리는 다가오는 행사에 대해 기대가 큽니다.", mnemonic: "'업(up) 커밍(coming)'! 위로 '다가오고 있는'." },
  'actively': { example: "She is actively involved in the community.", translation: "그녀는 지역 사회에 적극적으로 참여하고 있다.", mnemonic: "'액티브(active)'하게, '적극적으로'." },
  'additionally': { example: "Additionally, we offer a 10% discount for new customers.", translation: "추가적으로, 신규 고객에게는 10% 할인을 제공합니다.", mnemonic: "'add(더하다)'! '추가적으로'." },
  'eligible': { example: "You are eligible for a scholarship.", translation: "당신은 장학금을 받을 자격이 있습니다.", mnemonic: "'일리(eli) 저블(gible)'! 일리가 있어, 넌 '자격이 돼'." },
  'instead': { example: "I'll have tea instead of coffee.", translation: "커피 대신 차를 마실게요.", mnemonic: "'인(in) 스테드(stead-장소)'! 그 장소 안에 '대신' 들어가다." },
  'steadily': { example: "The company has been growing steadily.", translation: "그 회사는 꾸준히 성장해왔다.", mnemonic: "'스테디(steady)'셀러는 '꾸준히' 잘 팔리는 책." },
  'strategically': { example: "The new store is strategically located near the subway station.", translation: "새로운 상점은 지하철역 근처에 전략적으로 위치해 있다.", mnemonic: "'strategy(전략)'를 가지고 '전략적으로'." },
  'advice': { example: "He gave me some good advice.", translation: "그는 나에게 좋은 조언을 해주었다.", mnemonic: "'어드바이스(advice)'! '어두운 바이스(vice-악)'를 피하라는 '조언'." },
  'growth': { example: "The company has experienced rapid growth.", translation: "그 회사는 급속한 성장을 경험했다.", mnemonic: "나무가 '그로우(grow)'해서 '성장(growth)'한다." },
  'inspect': { example: "An engineer will inspect the equipment.", translation: "엔지니어가 장비를 점검할 것입니다.", mnemonic: "'인(in-안을) 스펙트(spect-보다)'! 안을 들여다보며 '점검하다'." },
  'productivity': { example: "The new system has increased productivity.", translation: "새로운 시스템은 생산성을 증가시켰다.", mnemonic: "'프로덕트(product-제품)'를 만드는 능력, '생산성'." },
  'approach': { example: "We need a new approach to this problem.", translation: "우리는 이 문제에 대한 새로운 접근 방식이 필요하다.", mnemonic: "코치가 선수에게 '어프로치(approach)'하며 '접근하다'." },
  'few': { example: "Very few people attended the meeting.", translation: "회의에 참석한 사람이 거의 없었다.", mnemonic: "'퓨(few)'! 한숨 쉬며 '거의 없네'라고 말하다." },
  'commence': { example: "The meeting will commence at 10 AM.", translation: "회의는 오전 10시에 시작될 것입니다.", mnemonic: "'커, 맨스(commence)'! 자, 남자들이여 '시작하자'!" },
  'supplier': { example: "We need to find a reliable supplier.", translation: "우리는 믿을 만한 공급업체를 찾아야 합니다.", mnemonic: "'supply(공급하다)'하는 사람이 '공급업체(supplier)'." },
  'enclosed': { example: "Please find the receipt enclosed with this letter.", translation: "이 편지에 동봉된 영수증을 확인해 주세요.", mnemonic: "'인(in-안에) 클로즈(close-닫다)'! 안에 넣고 닫았으니 '동봉된'." },
  'find': { example: "I find his explanation hard to believe.", translation: "나는 그의 설명이 믿기 어렵다는 것을 알게 되었다.", mnemonic: "보물을 '파인드(find)'! '찾다'." },
  'resolve': { example: "We need to resolve this issue as soon as possible.", translation: "우리는 이 문제를 가능한 한 빨리 해결해야 합니다.", mnemonic: "'리(re-다시) 솔브(solve-풀다)'! 다시 풀어서 문제를 '해결하다'." },
  'prevent': { example: "The new measures are intended to prevent accidents.", translation: "새로운 조치들은 사고를 예방하기 위한 것이다.", mnemonic: "'프리(pre-미리) 벤트(vent-오다)'! 미리 와서 못하게 '막다, 예방하다'." },
  'register for': { example: "Did you register for the conference?", translation: "컨퍼런스에 등록했나요?", mnemonic: "계산대 '레지스터(register)'에 이름을 '등록하다'." },
  'send': { example: "I will send you an email with the details.", translation: "자세한 내용이 담긴 이메일을 보내드리겠습니다.", mnemonic: "메시지를 '센드(send)'! '보내다'." },
  'another': { example: "Can I have another cup of coffee?", translation: "커피 한 잔 더 주시겠어요?", mnemonic: "'an(하나) + other(다른)'! 다른 거 하나 더, '또 다른'." },
  'so that': { example: "I studied hard so that I could pass the exam.", translation: "나는 시험에 합격하기 위해서 열심히 공부했다.", mnemonic: "'그래서(so) 그것(that)'! '그래서 ~하기 위해서'." },
  'free': { example: "The museum offers free admission on Sundays.", translation: "그 박물관은 일요일에 무료 입장을 제공한다.", mnemonic: "'프리(free)'! '자유로운', '무료의'." },
  'conduct': { example: "The company will conduct a survey.", translation: "회사는 설문조사를 수행할 것입니다.", mnemonic: "오케스트라 지휘자가 '컨덕트(conduct)'하며 공연을 '수행하다'." },
  'whereas': { example: "He is very talkative, whereas his sister is shy.", translation: "그는 말이 매우 많은 반면에, 그의 여동생은 수줍음이 많다.", mnemonic: "'웨어(where) 애즈(as)'? 어디는 이런 '반면에' 저기는 저렇다." },
  'cancel': { example: "I need to cancel my flight reservation.", translation: "비행기 예약을 취소해야 합니다.", mnemonic: "약속을 '캔슬(cancel)'하다." },
  'present': { example: "She will present the new project to the board.", translation: "그녀는 이사회에 새로운 프로젝트를 발표할 것입니다.", mnemonic: "'프레젠테이션(presentation)'은 '발표'하는 것." },
  'likely': { example: "It is likely to rain this afternoon.", translation: "오늘 오후에는 비가 올 가능성이 있다.", mnemonic: "'라이크(like)'! 좋아할 '가능성이 있는'." },
  'substantial': { example: "The company made a substantial profit.", translation: "그 회사는 상당한 이익을 냈다.", mnemonic: "'sub(아래)'에 '스탠드(stand)'! 기초가 튼튼하니 '상당한' 성과." },
  'valid': { example: "This ticket is valid for one month.", translation: "이 티켓은 한 달간 유효합니다.", mnemonic: "'밸리드(valid)'! '빨리' 안 쓰면 '유효'기간 지나." },
  'wide': { example: "The company offers a wide range of services.", translation: "그 회사는 넓은 범위의 서비스를 제공한다.", mnemonic: "'와이드(wide)' 스크린은 '넓은' 화면." },
  'previously': { example: "He was previously the CEO of another company.", translation: "그는 이전에 다른 회사의 CEO였다.", mnemonic: "'프리(pre-이전)'! '이전에'." },
  'specially': { example: "This cake was specially made for you.", translation: "이 케이크는 당신을 위해 특별히 만들어졌습니다.", mnemonic: "'스페셜(special)'하게, '특별히'." },
  'repeatedly': { example: "He repeatedly denied the accusation.", translation: "그는 그 혐의를 반복해서 부인했다.", mnemonic: "'리피트(repeat-반복하다)'! '반복해서'." },
  'cleaning': { example: "The hotel offers a daily cleaning service.", translation: "그 호텔은 매일 청소 서비스를 제공합니다.", mnemonic: "'클린(clean)'하게 만드는 것, '청소'." },
  'demand': { example: "The demand for electric cars is increasing.", translation: "전기차에 대한 수요가 증가하고 있다.", mnemonic: "'디맨드(demand)'! '뒤'에 '맨'들이 많아지니 '수요'가 늘다." },
  'enthusiasm': { example: "She showed great enthusiasm for the project.", translation: "그녀는 그 프로젝트에 큰 열정을 보였다.", mnemonic: "'인(in) 수지(susi)애즘(asm)'! 수지에 대한 팬들의 '열정'." },
  'need': { example: "We need more time to finish the work.", translation: "우리는 그 일을 끝내기 위해 더 많은 시간이 필요하다.", mnemonic: "'니드(need)'! '니'가 '드'디어 '필요하다'." },
  'notice': { example: "Did you see the notice on the board?", translation: "게시판에 있는 공지 봤어요?", mnemonic: "'노티스(notice)'! '노트'에 써서 '알아차리게' 하다." },
  'excellent': { example: "The food at that restaurant is excellent.", translation: "그 식당 음식은 훌륭하다.", mnemonic: "'엑설런트(excellent)'! 점수가 '훌륭하다'." },
  'comply with': { example: "All employees must comply with the safety regulations.", translation: "모든 직원은 안전 규정을 준수해야 합니다.", mnemonic: "'컴(come), 플라이(ply)'! 이리 와서 함께 규칙을 '준수하자'." },
  'effort': { example: "It takes a lot of effort to learn a new language.", translation: "새로운 언어를 배우는 데는 많은 노력이 든다.", mnemonic: "'에, 포트(effort)'! '에'이스가 되려는 '노력'." },
  'maintain': { example: "It's important to maintain a healthy diet.", translation: "건강한 식단을 유지하는 것이 중요하다.", mnemonic: "'메인(main)' 테마를 '테인(tain-잡다)'! 중심을 잡고 '유지하다'." },
  'in addition to': { example: "In addition to his salary, he receives a bonus.", translation: "그는 월급 외에 보너스도 받는다.", mnemonic: "'add(더하다)'! 더해서, '게다가'." },
  'permit': { example: "You need a permit to park here.", translation: "여기에 주차하려면 허가증이 필요합니다.", mnemonic: "'퍼(per-통과) 밑(mit-보내다)'! 통과시켜 보내주니 '허가하다'." },
  'whatever': { example: "Choose whatever you like.", translation: "무엇이든지 좋아하는 것을 고르세요.", mnemonic: "'what(무엇)' + 'ever(든지)'!" },
  'whoever': { example: "Whoever finishes first will win a prize.", translation: "누구든지 가장 먼저 끝내는 사람이 상을 받을 것이다.", mnemonic: "'who(누구)' + 'ever(든지)'!" },
  'inspection': { example: "The factory undergoes a safety inspection every year.", translation: "그 공장은 매년 안전 점검을 받는다.", mnemonic: "'inspect(점검하다)'의 명사형, '점검'." },
  'launch': { example: "The company will launch a new product next month.", translation: "그 회사는 다음 달에 신제품을 출시할 것입니다.", mnemonic: "'런치(launch)'! 점심(lunch) 먹고 신제품 '출시'!" },
  'highly': { example: "She is a highly respected doctor.", translation: "그녀는 매우 존경받는 의사이다.", mnemonic: "'하이(high)'! '높게' 평가받는." },
  'enough': { example: "Do we have enough time?", translation: "우리에게 충분한 시간이 있나요?", mnemonic: "'이너프(enough)'! '이 너'른 '프'랑스 땅이면 '충분해'." },
  'work': { example: "I have a lot of work to do.", translation: "나는 할 일이 많다.", mnemonic: "회사에서 하는 '워크(work)', '업무'." },
  'such as': { example: "I like fruits, such as apples and bananas.", translation: "나는 사과나 바나나와 같은 과일을 좋아한다.", mnemonic: "'서치(search)'! 검색하면 '그런 것과 같은' 예시가 나온다." },
  'besides': { example: "Besides English, he can speak French.", translation: "영어 외에도 그는 프랑스어를 할 수 있다.", mnemonic: "'비(be) 사이드(side)'! 옆에 또 있으니 '~외에, 게다가'." },
  'precisely': { example: "The meeting starts at 2 PM precisely.", translation: "회의는 정확히 오후 2시에 시작합니다.", mnemonic: "'프리(pre-미리) 사이즈(size)'! 미리 사이즈를 재서 '정확하게' 맞추다." },
  'confirmation': { example: "You will receive a confirmation email shortly.", translation: "곧 확인 이메일을 받으실 겁니다.", mnemonic: "'confirm(확인하다)'의 명사형, '확인'." },
  'emphasize': { example: "I want to emphasize the importance of this issue.", translation: "저는 이 문제의 중요성을 강조하고 싶습니다.", mnemonic: "'엠퍼(em) 사이즈(size)'! 사이즈를 크게 만들어서 '강조하다'." },
  'last': { example: "The meeting will last for two hours.", translation: "회의는 2시간 동안 지속될 것입니다.", mnemonic: "'라스트(last)'! '마지막'까지 '지속하다'." },
  'completely': { example: "The building was completely destroyed by the fire.", translation: "그 건물은 화재로 완전히 파괴되었다.", mnemonic: "'complete(완전한)'! '완전히'." },
  'correctly': { example: "Did I pronounce your name correctly?", translation: "제가 당신의 이름을 정확하게 발음했나요?", mnemonic: "'correct(정확한)'! '정확하게'." },
  'enable': { example: "This software will enable you to work more efficiently.", translation: "이 소프트웨어는 당신이 더 효율적으로 일할 수 있게 해줄 것입니다.", mnemonic: "'en(만들다) + able(할 수 있는)'! '가능하게 만들다'." },
  'replacement': { example: "We need to find a replacement for the broken part.", translation: "우리는 고장 난 부품의 교체품을 찾아야 합니다.", mnemonic: "'replace(교체하다)'! '교체품'." },
  'cause': { example: "The heavy rain was the cause of the flood.", translation: "폭우가 홍수의 원인이었다.", mnemonic: "'코즈(cause)'! '코'가 간지러운 게 재채기의 '원인'." },
  'profitable': { example: "The new business is very profitable.", translation: "새로운 사업은 매우 수익성이 좋다.", mnemonic: "'profit(수익)'이 있으니 '수익성 있는'." },
  'surround': { example: "The house is surrounded by a beautiful garden.", translation: "그 집은 아름다운 정원으로 둘러싸여 있다.", mnemonic: "'서(sur-위) 라운드(round-둥근)'! 위에서 보니 둥글게 '에워싸다'." },
  'effect': { example: "The new law will have a significant effect on the economy.", translation: "새로운 법은 경제에 상당한 영향을 미칠 것이다.", mnemonic: "특수효과(special effect)는 영화에 큰 '효과'를 준다." },
  'employee': { example: "The company has over 500 employees.", translation: "그 회사는 500명 이상의 직원을 두고 있다.", mnemonic: "'employ(고용하다)' 당한 사람이 '직원(employee)'." },
  'error': { example: "There seems to be an error in the calculation.", translation: "계산에 오류가 있는 것 같습니다.", mnemonic: "'에러(error)'! 컴퓨터에 '오류'가 발생했다." },
  'event': { example: "The hotel is a popular venue for corporate events.", translation: "그 호텔은 기업 행사를 위한 인기 있는 장소이다.", mnemonic: "크리스마스 '이벤트(event)'! 특별한 '행사'." },
  'part': { example: "This is the most important part of the plan.", translation: "이것이 그 계획의 가장 중요한 부분이다.", mnemonic: "자동차 '파트(part)'! 자동차의 '부품, 부분'." },
  'promotional': { example: "They are offering a promotional discount for a limited time.", translation: "그들은 한정된 기간 동안 홍보 할인을 제공하고 있다.", mnemonic: "'프로모션(promotion)'은 '홍보용' 활동." },
  'phase': { example: "The project is in its final phase.", translation: "그 프로젝트는 마지막 단계에 있다.", mnemonic: "'페이스(pace)' 조절하며 각 '단계(phase)'를 통과하다." },
  'response': { example: "We have not yet received a response to our inquiry.", translation: "저희는 아직 문의에 대한 응답을 받지 못했습니다.", mnemonic: "'respond(응답하다)'의 명사형, '응답'." },
  'address': { example: "The CEO will address the employees at the meeting.", translation: "CEO가 회의에서 직원들에게 연설할 것이다.", mnemonic: "'주소(address)'를 부르며 문제를 '처리하고 연설하다'." },
  'ensure': { example: "Please ensure that all doors are locked.", translation: "모든 문이 잠겼는지 확실히 해두세요.", mnemonic: "'en(만들다) + sure(확실한)'! '확실하게 해두다'." },
  'market': { example: "They are planning to enter the Asian market.", translation: "그들은 아시아 시장에 진출할 계획이다.", mnemonic: "마트(mart)는 물건을 파는 '시장(market)'." },
  'none': { example: "None of the applicants were qualified for the position.", translation: "지원자 중 아무도 그 직책에 자격이 없었다.", mnemonic: "'노(no) 원(one)'! 한 명도 없으니 '아무도 ~않다'." },
  'specialize in': { example: "This law firm specializes in corporate law.", translation: "이 법무법인은 기업법을 전문으로 합니다.", mnemonic: "'스페셜(special)'하게 한 분야만 파니 '~을 전문화하다'." },
  'strong': { example: "The company has a strong reputation for quality.", translation: "그 회사는 품질에 대해 강력한 명성을 가지고 있다.", mnemonic: "'스트롱(strong)'맨! 힘이 센 '강력한' 남자." },
  'generously': { example: "He generously donated a large sum of money to the charity.", translation: "그는 자선단체에 많은 돈을 관대하게 기부했다.", mnemonic: "'제너럴(general-장군)'은 부하에게 '관대하게' 대한다." },
  'replace': { example: "We need to replace the old printer.", translation: "우리는 낡은 프린터를 교체해야 합니다.", mnemonic: "'리(re-다시) 플레이스(place-놓다)'! 다시 제자리에 놓으며 '교체하다'." },
  'negotiation': { example: "The negotiations between the two companies are still ongoing.", translation: "두 회사 간의 협상은 아직 진행 중이다.", mnemonic: "'내고(nego)'! 가격을 '내고'하며 '협상'하다." },
  'many': { example: "Many people believe that he is innocent.", translation: "많은 사람들이 그가 무죄라고 믿는다.", mnemonic: "'매니(many)'큐어! '수많은' 색깔이 있다." },
  'exceptional': { example: "She has an exceptional talent for music.", translation: "그녀는 음악에 탁월한 재능을 가지고 있다.", mnemonic: "'exception(예외)'적인 존재! 예외일 만큼 '탁월한'." },
  'book': { example: "I would like to book a table for two.", translation: "2인용 테이블을 예약하고 싶습니다.", mnemonic: "책(book)을 읽으려고 도서관 자리를 '예약하다'." },
  'provided that': { example: "You can go out, provided that you finish your homework.", translation: "숙제를 끝내는 것을 조건으로 너는 외출할 수 있다.", mnemonic: "이것이 '제공된다면(provided that)'... 이라는 '조건으로'." },
  'recognize': { example: "I didn't recognize you with your new haircut.", translation: "새로운 머리 스타일 때문에 당신을 알아보지 못했어요.", mnemonic: "'리(re-다시) 코그(cog-알다)'! 다시 보고 '알아보다, 인정하다'." },
  'appropriate': { example: "This movie is not appropriate for children.", translation: "이 영화는 어린이들에게 적절하지 않다.", mnemonic: "'어, 프로 프리 에이트(appropriate)'! 프로는 때와 장소에 '적절한' 행동을 해." },
  'assemble': { example: "We need to assemble the furniture.", translation: "우리는 가구를 조립해야 합니다.", mnemonic: "'어셈블(assemble)'! 어벤져스 멤버들을 '모으다'." },
  'defective': { example: "The customer returned the defective product.", translation: "고객이 불량인 제품을 반품했다.", mnemonic: "'디펙티브(defective)'! '뒤'에 있는 '팩'은 '불량품'이야." },
  'diverse': { example: "The conference attracted a diverse group of people.", translation: "그 컨퍼런스는 다양한 그룹의 사람들을 끌어모았다.", mnemonic: "'다이버(diver)'들은 '다양한' 바다 생물을 만난다." },
  'compliance': { example: "The company is in full compliance with the law.", translation: "그 회사는 법을 완전히 준수하고 있다.", mnemonic: "'comply with(준수하다)'의 명사형, '준수'." },
  'efficient': { example: "The new machine is more efficient than the old one.", translation: "새 기계는 옛날 것보다 더 효율적이다.", mnemonic: "'이피션트(efficient)'! '이' '피'나는 '션'한 노력은 '효율적'이야." },
  'functional': { example: "The website is functional but needs a better design.", translation: "웹사이트는 작동하지만 더 나은 디자인이 필요하다.", mnemonic: "'펑션(function-기능)'이 있으니 '기능적인, 작동하는'." },
  'heavy': { example: "Due to heavy traffic, we were late for the meeting.", translation: "심한 교통 체증 때문에 우리는 회의에 늦었다.", mnemonic: "'헤비(heavy)'급 선수는 몸무게가 '무거운' 선수." },
  'local': { example: "We buy fresh vegetables from local farmers.", translation: "우리는 지역 농부들로부터 신선한 채소를 산다.", mnemonic: "'로컬(local)' 푸드는 '지역의' 음식." },
  'achievement': { example: "Winning the award was a great achievement.", translation: "그 상을 받은 것은 위대한 성과였다.", mnemonic: "'achieve(성취하다)'의 명사형, '성과'." },
  'specific': { example: "Could you be more specific about what you mean?", translation: "무슨 뜻인지 좀 더 구체적으로 말씀해 주시겠어요?", mnemonic: "'스페셜(special)'하고 '픽(pick)'! 특별히 콕 집어서 '구체적인'." },
  'recommendation': { example: "I bought this book on his recommendation.", translation: "나는 그의 추천으로 이 책을 샀다.", mnemonic: "'recommend(추천하다)'의 명사형, '추천'." },
  'personnel': { example: "All personnel are required to attend the training.", translation: "모든 직원은 교육에 참석해야 합니다.", mnemonic: "'person(사람)'! 회사에 있는 사람들, 즉 '직원, 인력'." },
  'regulations': { example: "You must follow the safety regulations.", translation: "안전 규정을 따라야 합니다.", mnemonic: "'레귤러(regular)'하게 지켜야 하는 '규정'." },
  'entrance': { example: "The entrance to the museum is on the main street.", translation: "박물관 입구는 대로변에 있다.", mnemonic: "'엔터(enter-들어가다)'! 들어가는 곳이 '입구(entrance)'." },
  'expansion': { example: "The company is planning an expansion into Europe.", translation: "그 회사는 유럽으로의 확장을 계획하고 있다.", mnemonic: "'expand(확장하다)'의 명사형, '확장'." },
  'construction': { example: "The construction of the new bridge will take two years.", translation: "새 다리 공사는 2년이 걸릴 것이다.", mnemonic: "'construct(건설하다)'의 명사형, '공사'." },
  'assist': { example: "Can I assist you with your bags?", translation: "가방 드는 것을 도와드릴까요?", mnemonic: "농구에서 '어시스트(assist)'는 득점을 '돕는' 패스." },
  'identification': { example: "Please show me some form of identification.", translation: "신분증명서 좀 보여주세요.", mnemonic: "ID 카드는 '신분증명(identification)' 카드." },
  'depend on': { example: "The success of the project will depend on teamwork.", translation: "프로젝트의 성공은 팀워크에 달려 있을 것이다.", mnemonic: "'디펜드(depend)'! '뒤'에 '팬'들이 있으니 그들에게 '의지하다'." },
  'measure': { example: "The government has taken measures to reduce unemployment.", translation: "정부는 실업률을 줄이기 위한 조치를 취했다.", mnemonic: "줄자로 길이를 '측정하는(measure)' '조치'." },
  'under': { example: "The new library is currently under construction.", translation: "새로운 도서관은 현재 공사 중이다.", mnemonic: "책상 '언더(under)'! 책상 '아래에'." },
  'reasonably': { example: "The hotel is reasonably priced.", translation: "그 호텔은 합리적으로 가격이 책정되어 있다.", mnemonic: "'reason(이성)'! 이성적으로 생각하니 '합리적으로'." },
  'completion': { example: "The completion of the project is scheduled for next month.", translation: "프로젝트의 완성은 다음 달로 예정되어 있다.", mnemonic: "'complete(완성하다)'의 명사형, '완성'." },
  'remarkably': { example: "She is remarkably talented for her age.", translation: "그녀는 나이에 비해 현저히 재능이 있다.", mnemonic: "'리마크(remark-주목)'! 주목할 만큼 '현저히'." },
  'unfortunately': { example: "Unfortunately, we have to cancel the event.", translation: "불행히도, 우리는 행사를 취소해야 합니다.", mnemonic: "'fortune(행운)'의 반대! '불행히도'." },
  'seldom': { example: "He seldom goes out in the evening.", translation: "그는 저녁에 좀처럼 외출하지 않는다.", mnemonic: "'셀(sell) 덤(dom)'! 덤으로 파는 일은 '좀처럼 없다'." },
  'acquisition': { example: "The company announced the acquisition of its main rival.", translation: "그 회사는 주요 경쟁사의 인수를 발표했다.", mnemonic: "'acquire(얻다)'의 명사형, '인수, 획득'." },
  'approve': { example: "The manager needs to approve the expense report.", translation: "관리자가 경비 보고서를 승인해야 한다.", mnemonic: "'ap(향하여) + prove(증명)'! 좋다고 증명되었으니 '승인하다'." },
  'transaction': { example: "All transactions are processed securely.", translation: "모든 거래는 안전하게 처리됩니다.", mnemonic: "'트랜스(trans-가로질러) 액션(action-행동)'! 돈이 오가는 행동, '거래'." },
  'reminder': { example: "This email is a reminder about the upcoming meeting.", translation: "이 이메일은 다가오는 회의에 대한 알림입니다.", mnemonic: "'remind(상기시키다)'! 기억나게 해주는 '알림'." },
  'decide': { example: "We need to decide on a date for the party.", translation: "우리는 파티 날짜를 결정해야 한다.", mnemonic: "'디사이드(decide)'! '뒤 사이드'로 갈지 '결정해'." },
  'arrange': { example: "Can you arrange a meeting for next week?", translation: "다음 주 회의를 준비해 주시겠어요?", mnemonic: "'어, 레인지(range)'! 정해진 범위에 맞게 '정리하고 준비하다'." },
  'evolve': { example: "The company has evolved into a major international organization.", translation: "그 회사는 주요 국제기구로 발전했다.", mnemonic: "포켓몬이 '이볼브(evolve)'해서 '진화하다'." },
  'exceed': { example: "The final cost should not exceed $500.", translation: "최종 비용은 500달러를 초과해서는 안 됩니다.", mnemonic: "'엑시드(exceed)'! '엑셀(excel)' 밟아서 제한 속도를 '초과하다'." },
  'focus on': { example: "Let's focus on the main problem.", translation: "주요 문제에 집중합시다.", mnemonic: "카메라 '포커스(focus)'를 '~에 맞추다'." },
  'reach': { example: "We hope to reach an agreement soon.", translation: "우리는 곧 합의에 도달하기를 희망한다.", mnemonic: "손을 뻗어 '리치(reach)'! '~에 도달하다'." },
  'release': { example: "The company will release its new software next month.", translation: "그 회사는 다음 달에 새로운 소프트웨어를 출시할 것입니다.", mnemonic: "'릴리즈(release)'! 앨범을 '발표하고 출시하다'." },
  'furthermore': { example: "The house is beautiful. Furthermore, it's in a great location.", translation: "그 집은 아름답다. 게다가, 위치도 아주 좋다.", mnemonic: "'더(further) 나아가(more)', '게다가'." },
  'residential': { example: "This is a quiet residential area.", translation: "이곳은 조용한 주거 지역입니다.", mnemonic: "'레지던트(resident-거주자)' 이블! 거주자들이 사는 '거주용의'." },
  'in advance of': { example: "Please book your tickets in advance of the travel date.", translation: "여행 날짜 이전에 티켓을 예약하세요.", mnemonic: "'어드밴스(advance-미리)'! '~이전에'." },
  'typically': { example: "The restaurant is typically very busy on weekends.", translation: "그 식당은 일반적으로 주말에 매우 붐빈다.", mnemonic: "'타입(type)'! 전형적인 타입, '일반적으로'." },
  'obtain': { example: "You need to obtain a visa to visit that country.", translation: "그 나라를 방문하려면 비자를 획득해야 합니다.", mnemonic: "'업(ob) 테인(tain-잡다)'! 노력해서 '획득하다'." },
  'entirely': { example: "I am not entirely sure about that.", translation: "저는 그것에 대해 전적으로 확신하지는 않습니다.", mnemonic: "'entire(전체의)'! '전체적으로'." },
  'even': { example: "He can't even write his own name.", translation: "그는 심지어 자기 이름도 쓸 줄 모른다.", mnemonic: "'이븐(even)'! '이' '분'은 '심지어' 천재야." },
  'closely': { example: "We are working closely with the police.", translation: "우리는 경찰과 긴밀하게 협력하고 있습니다.", mnemonic: "'클로즈(close-가까운)'! '가까이, 긴밀히'." },
  'safety': { example: "Safety is our top priority.", translation: "안전이 우리의 최우선 과제입니다.", mnemonic: "'safe(안전한)'의 명사형, '안전'." },
  'currently': { example: "The product is currently unavailable.", translation: "그 제품은 현재 구매할 수 없습니다.", mnemonic: "'커런트(current-현재의)'! '현재'." },
  'vacant': { example: "There are several vacant seats at the front.", translation: "앞쪽에 비어있는 좌석이 몇 개 있습니다.", mnemonic: "'베이컨(bacon)'트럭이 떠나 자리가 '비어있다'." },
  'accuretely': { example: "The report accurately reflects the situation.", translation: "그 보고서는 상황을 정확하게 반영한다.", mnemonic: "'accurate(정확한)'! '정확하게'." },
  'routine': { example: "My morning routine includes exercise and breakfast.", translation: "나의 아침 일과는 운동과 아침 식사를 포함한다.", mnemonic: "매일 반복하는 '루틴(routine)', '일상'." },
  'seasonal': { example: "The hotel offers seasonal discounts.", translation: "그 호텔은 계절 할인을 제공한다.", mnemonic: "'시즌(season-계절)'! '계절적인'." },
  'meet': { example: "The product did not meet our expectations.", translation: "그 제품은 우리의 기대를 충족시키지 못했다.", mnemonic: "사람을 '만나서(meet)' 요구사항을 '충족시키다'." },
  'valuable': { example: "Your advice has been very valuable to me.", translation: "당신의 조언은 저에게 매우 소중했습니다.", mnemonic: "'밸류(value-가치)'가 있으니 '가치 있는, 소중한'." },
  'as well': { example: "He speaks French and German as well.", translation: "그는 프랑스어와 독일어 또한 할 줄 안다.", mnemonic: "'~도 잘(well)' 하니, '게다가'." },
  'effectively': { example: "We need to use our resources more effectively.", translation: "우리는 자원을 더 효과적으로 사용해야 합니다.", mnemonic: "'effective(효과적인)'! '효과적으로'." },
  'elsewhere': { example: "If you can't find it here, try looking elsewhere.", translation: "여기서 찾을 수 없다면, 다른 곳에서 찾아보세요.", mnemonic: "'엘스(else-다른) 웨어(where-곳)'! '다른 어디선가'." },
  'close': { example: "Please pay close attention to the instructions.", translation: "지시사항에 세심한 주의를 기울여 주십시오.", mnemonic: "'클로즈(close)'업! '가까이, 세밀하게'." },
  'formally': { example: "The new CEO will be formally announced tomorrow.", translation: "새로운 CEO는 내일 공식적으로 발표될 것입니다.", mnemonic: "'포멀(formal-공식적인)'하게, '공식적으로'." },
  'how': { example: "I don't know how to solve this problem.", translation: "이 문제를 어떻게 풀어야 할지 모르겠다.", mnemonic: "'하우(how)'? '어떻게'?" },
  'firmly': { example: "She firmly believes in her principles.", translation: "그녀는 자신의 원칙을 확고히 믿는다.", mnemonic: "'펌(firm)'한 머리처럼 '확고하게'." },
  'largely': { example: "The success was largely due to her efforts.", translation: "그 성공은 주로 그녀의 노력 덕분이었다.", mnemonic: "'라지(large)'! 큰 부분, '주로'." },
  'lately': { example: "Have you seen him lately?", translation: "최근에 그를 본 적 있나요?", mnemonic: "'레이트(late)'! 늦게까지 일했더니 '최근에' 피곤해." },
  'perfectly': { example: "The dress fits you perfectly.", translation: "그 드레스는 당신에게 완벽하게 맞는다.", mnemonic: "'퍼펙트(perfect)'! '완벽하게'." },
  'surprisingly': { example: "Surprisingly, he passed the exam.", translation: "놀랍게도, 그는 시험에 합격했다.", mnemonic: "'서프라이즈(surprise)'! '놀랍게도'." },
  'take': { example: "It will take about an hour to get there.", translation: "거기까지 가는 데 약 한 시간이 걸릴 것이다.", mnemonic: "사진을 '테이크(take)'! '찍다, 취하다'." },
  'usually': { example: "I usually get up at 7 AM.", translation: "나는 보통 아침 7시에 일어난다.", mnemonic: "'유주얼(usual-보통의)'! '보통'." },
  'appreciation': { example: "Please accept this gift as a token of our appreciation.", translation: "저희의 감사의 표시로 이 선물을 받아주세요.", mnemonic: "'appreciate(감사하다)'의 명사형, '감사'." },
  'concern': { example: "The main concern is the lack of funding.", translation: "주된 우려 사항은 자금 부족이다.", mnemonic: "'컨선(concern)'! '큰 선'을 넘을까 봐 '우려'되다." },
  'contract': { example: "You should read the contract carefully.", translation: "계약서를 주의 깊게 읽어야 합니다.", mnemonic: "'컨(con-함께) 트랙트(tract-끌다)'! 서로를 끌어당겨 묶는 '계약'." },
  'occasionally': { example: "We occasionally go out for dinner.", translation: "우리는 때때로 외식을 한다.", mnemonic: "'오, 케이(OK)'! '가끔, 때때로'는 괜찮아." },
  'like': { example: "He looks like his father.", translation: "그는 그의 아버지를 닮았다.", mnemonic: "'라이크(like)'! '~처럼, ~와 같이'." },
  'day': { example: "I will finish it by the end of the day.", translation: "오늘 중으로 그것을 끝낼게요.", mnemonic: "해피 버스'데이(day)'! '날, 하루'." },
  'delay': { example: "The flight was delayed due to bad weather.", translation: "악천후로 인해 비행기가 지연되었다.", mnemonic: "'딜레이(delay)'! 약속이 '지연'되다." },
  'development': { example: "The company is focused on product development.", translation: "그 회사는 제품 개발에 집중하고 있다.", mnemonic: "'develop(개발하다)'의 명사형, '개발'." },
  'consideration': { example: "After careful consideration, we have made a decision.", translation: "신중한 고려 끝에, 저희는 결정을 내렸습니다.", mnemonic: "'consider(고려하다)'의 명사형, '고려'." },
  'presentation': { example: "She gave an excellent presentation.", translation: "그녀는 훌륭한 발표를 했다.", mnemonic: "'present(발표하다)'의 명사형, '발표'." },
  'opening': { example: "There is a job opening in the sales department.", translation: "영업부에 공석이 하나 있습니다.", mnemonic: "가게 문을 '오픈(open)'! '개업, 공석'." },
  'industry': { example: "He works in the tourism industry.", translation: "그는 관광 산업에 종사한다.", mnemonic: "'인(in) 더 스트리트(street)'! 거리에서 시작된 '산업'." },
  'employ': { example: "The company plans to employ more staff.", translation: "그 회사는 더 많은 직원을 고용할 계획이다.", mnemonic: "'employee(직원)'를 '고용하다(employ)'." },
  'order': { example: "I would like to place an order for two pizzas.", translation: "피자 두 판을 주문하고 싶습니다.", mnemonic: "'오더(order)'! 식당에서 음식을 '주문하다'." },
  'position': { example: "She applied for a marketing position at the company.", translation: "그녀는 그 회사의 마케팅 직위에 지원했다.", mnemonic: "내 '포지션(position)'은 팀의 공격수 '직위'." },
  'preparation': { example: "Proper preparation is the key to success.", translation: "적절한 준비가 성공의 열쇠이다.", mnemonic: "'prepare(준비하다)'의 명사형, '준비'." },
  'recognition': { example: "He received an award in recognition of his achievements.", translation: "그는 그의 업적을 인정받아 상을 받았다.", mnemonic: "'recognize(인정하다)'의 명사형, '인정'." },
  'recruit': { example: "The company is trying to recruit new engineers.", translation: "그 회사는 새로운 엔지니어들을 모집하려고 노력하고 있다.", mnemonic: "'리크루트(recruit)'! 회사에서 '신입사원'을 '모집하다'." },
  'attract': { example: "The museum attracts visitors from all over the world.", translation: "그 박물관은 전 세계의 방문객들을 끌어모은다.", mnemonic: "'어, 트랙(track)'! 멋진 트랙이 관중을 '끌어들이다, 매료시키다'." },
  'representative': { example: "A sales representative will contact you shortly.", translation: "영업 담당자가 곧 연락드릴 겁니다.", mnemonic: "반장(representative)은 반을 '대표'하는 사람." },
  'request': { example: "I would like to make a request for a day off.", translation: "하루 휴가를 요청하고 싶습니다.", mnemonic: "'리퀘스트(request)'! 노래를 '요청하다'." },
  'restoration': { example: "The restoration of the old painting took months.", translation: "그 오래된 그림의 복원 작업은 몇 달이 걸렸다.", mnemonic: "'리(re-다시) 스토어(store)'! 다시 가게를 열기 위해 '복구'하다." },
  'delegate': { example: "The manager delegated the task to his assistant.", translation: "관리자는 그 업무를 그의 조수에게 위임했다.", mnemonic: "'델리(deli) 게이트(gate)'! 델리 게이트를 지키는 임무를 '위임하다'." },
  'terms': { example: "Please read the terms and conditions carefully.", translation: "이용 약관을 주의 깊게 읽어주세요.", mnemonic: "계약 '텀(term)'! 계약 '기간'과 '조건'." },
  'earnings': { example: "The company's earnings have increased this quarter.", translation: "그 회사의 수익은 이번 분기에 증가했다.", mnemonic: "'earn(벌다)'! 벌어들인 돈, '수익금'." },
  'at least': { example: "You should study at least two hours a day.", translation: "하루에 최소 두 시간은 공부해야 한다.", mnemonic: "'적어도, 최소한' 이 정도는 해야지!" },
  'considerable': { example: "The project requires a considerable amount of money.", translation: "그 프로젝트는 상당한 양의 돈을 필요로 한다.", mnemonic: "'consider(고려하다)'할 만큼 '상당한'." },
  'appear': { example: "She will appear in court as a witness.", translation: "그녀는 증인으로 법정에 출두할 것이다.", mnemonic: "'어, 피어(appear)'난다! 꽃이 피어나듯 '나타나다'." },
  'apply for': { example: "I'm going to apply for that job.", translation: "나는 그 일자리에 지원할 것이다.", mnemonic: "'애플(Apple)'에 입사 '신청하다'." },
  'begin': { example: "Let's begin the meeting.", translation: "회의를 시작합시다.", mnemonic: "'비긴(begin)' 어게인! 다시 '시작하다'." },
  'assure': { example: "I can assure you that everything will be fine.", translation: "모든 것이 괜찮을 것이라고 당신에게 확신시킬 수 있습니다.", mnemonic: "'as(향하여) + sure(확실한)'! '확신하게 만들다'." },
  'apologize for': { example: "I must apologize for my mistake.", translation: "제 실수에 대해 사과해야 합니다.", mnemonic: "'아폴로(Apollo)' 신에게 잘못에 대해 '사과하다'." },
  'claim': { example: "You can claim your expenses from the company.", translation: "회사에 경비를 청구할 수 있습니다.", mnemonic: "보험금을 '클레임(claim)' 걸어 '청구하다'." },
  'promise': { example: "He promised to help me.", translation: "그는 나를 돕겠다고 약속했다.", mnemonic: "'프라미스(promise)'! 새끼손가락 걸고 '약속'해." },
  'rate': { example: "What is the interest rate for this loan?", translation: "이 대출의 이자율은 얼마인가요?", mnemonic: "호텔 '레이트(rate)'! 호텔 '요금, 비율'." },
  'rise': { example: "The sun rises in the east.", translation: "해는 동쪽에서 뜬다.", mnemonic: "'라이즈(rise)'! 주가가 '상승하다'." },
  'predict': { example: "It's difficult to predict the future.", translation: "미래를 예측하는 것은 어렵다.", mnemonic: "'프리(pre-미리) 딕트(dict-말하다)'! 미리 말하니 '예측하다'." },
  'direct': { example: "This is a direct flight to New York.", translation: "이것은 뉴욕행 직항편입니다.", mnemonic: "'다이렉트(direct)'! '직접적인'." },
  'face': { example: "We must face the reality of the situation.", translation: "우리는 그 상황의 현실에 직면해야 한다.", mnemonic: "얼굴(face)을 마주하고 문제에 '직면하다'." },
  'open': { example: "The new store will open next week.", translation: "새로운 가게는 다음 주에 문을 열 것이다.", mnemonic: "문을 '오픈(open)'!" },
  'inform': { example: "Please inform us of any changes.", translation: "변경 사항이 있으면 저희에게 알려주세요.", mnemonic: "'인폼(inform)'! '인포메이션(information)'을 주며 '알리다'." },
  'note': { example: "Please note that the schedule has changed.", translation: "일정이 변경되었음을 유념해 주십시오.", mnemonic: "'노트(note)'에 '기록하고 명시하다'." },
  'award': { example: "She won an award for her performance.", translation: "그녀는 연기로 상을 받았다.", mnemonic: "아카데미 '어워드(award)'! '상'을 '시상하다'." },
  'clear': { example: "The instructions were clear and easy to follow.", translation: "지시사항은 명확하고 따르기 쉬웠다.", mnemonic: "하늘이 '클리어(clear)'! '확실하고 깨끗한'." },
  'become': { example: "He wants to become a doctor.", translation: "그는 의사가 되기를 원한다.", mnemonic: "'비컴(become)'! '빛'이 '컴(come)'! 어둠이 빛으로 '되다'." },
  'accommodate': { example: "The hotel can accommodate up to 200 guests.", translation: "그 호텔은 최대 200명의 손님을 수용할 수 있다.", mnemonic: "'어, 카(car) 뭐 데이트(accommodate)'! 차까지 데이트에 제공하며 '편의를 제공하고 수용하다'." },
  'assume': { example: "I assume you have finished the report.", translation: "당신이 보고서를 끝냈다고 추정합니다.", mnemonic: "'어, 숨(assume)' 쉬는 걸 보니 살아있다고 '추정하다'." },
  'value': { example: "The value of the house has increased.", translation: "그 집의 가치가 상승했다.", mnemonic: "'밸류(value)'! '가치'를 높게 평가하다." },
  'refer to': { example: "Please refer to the manual for more information.", translation: "더 많은 정보를 원하시면 설명서를 참조하세요.", mnemonic: "'리퍼(refer)'! 심판에게 '언급하며' 항의하다." },
  'certified': { example: "He is a certified public accountant.", translation: "그는 공인회계사이다.", mnemonic: "'서티피케이트(certificate-증명서)'! 증명서가 있으니 '검증된'." },
  'seek': { example: "We are seeking a qualified candidate for this position.", translation: "우리는 이 직책에 적합한 자격을 갖춘 후보자를 찾고 있습니다.", mnemonic: "'시크(seek)'한 표정으로 일자리를 '찾다'." },
  'normally': { example: "The store is normally open until 9 PM.", translation: "그 가게는 보통 오후 9시까지 영업한다.", mnemonic: "'노멀(normal-보통의)'! '보통'." },
  'commit': { example: "The company is committed to customer satisfaction.", translation: "그 회사는 고객 만족에 헌신하고 있다.", mnemonic: "'컴(come) 잇(it)'! 이리 와서 이 일에 '헌신하고 위임받다'." },
  'impressed': { example: "I was very impressed with your work.", translation: "저는 당신의 작업에 매우 감명받았습니다.", mnemonic: "'인(in-안에) 프레스(press-누르다)'! 마음에 도장을 찍듯 '감명받은'." },
  'affect': { example: "The new policy will affect all employees.", translation: "새로운 정책은 모든 직원에게 영향을 미칠 것이다.", mnemonic: "'어, 팩트(fact)'! 그 사실이 나에게 '영향을 끼치다'." },
  'organizational': { example: "Good organizational skills are essential for this job.", translation: "좋은 조직 기술은 이 직업에 필수적이다.", mnemonic: "'organization(조직)'의 형용사형, '조직상의'." },
  'existing': { example: "We need to improve the existing system.", translation: "우리는 기존 시스템을 개선해야 합니다.", mnemonic: "'이그지스트(exist-존재하다)'! '기존에' 존재하는." },
  'produce': { example: "The factory produces electronic goods.", translation: "그 공장은 전자 제품을 생산한다.", mnemonic: "PD는 방송 프로그램을 '프로듀스(produce)'! '제작하다'." },
  'distribution': { example: "The company handles the distribution of the products.", translation: "그 회사는 제품의 유통을 담당한다.", mnemonic: "'distribute(유통하다)'의 명사형, '유통'." },
  'more than': { example: "The project will cost more than we expected.", translation: "그 프로젝트는 우리가 예상했던 것보다 비용이 더 많이 들 것이다.", mnemonic: "'~보다(than) 더(more)'! '~이상'." },
  'desired': { example: "The product did not have the desired effect.", translation: "그 제품은 원하는 효과를 내지 못했다.", mnemonic: "'desire(바라다)'! 바라던, '원하는'." },
  'ease': { example: "The new system was designed for ease of use.", translation: "새로운 시스템은 사용의 편의를 위해 설계되었다.", mnemonic: "'이지(easy)'! 쉬우니 '편안함, 편의'." },
  'current': { example: "What is the current status of the project?", translation: "프로젝트의 현재 상태는 어떻습니까?", mnemonic: "'커런트(current)'! '현재의' 흐름." },
  'come': { example: "The new model will come out next month.", translation: "새로운 모델은 다음 달에 나올 것이다.", mnemonic: "'컴(come)'! 이리 '오다'." },
  'retrieve': { example: "I need to retrieve the file from the archive.", translation: "나는 보관소에서 그 파일을 회수해야 한다.", mnemonic: "'리트리버(retriever)'! 물건을 '회수해' 오는 똑똑한 개." },
  'brief': { example: "The manager gave a brief summary of the report.", translation: "관리자는 보고서에 대해 간략하게 요약했다.", mnemonic: "회의 전 '브리핑(briefing)'은 '간략한' 설명." },
  'shift': { example: "I work the night shift.", translation: "나는 야간 근무조에서 일한다.", mnemonic: "기어를 '시프트(shift)'! '전환'하다." },
  'poor': { example: "The company had poor sales last year.", translation: "그 회사는 작년에 저조한 판매 실적을 보였다.", mnemonic: "'푸어(poor)'! '가난한, 저조한'." },
  'attempt': { example: "This is his second attempt to pass the exam.", translation: "이것은 그의 두 번째 시험 합격 시도이다.", mnemonic: "'어, 템트(tempt-유혹)'! 유혹에 넘어가 '시도하다'." },
  'addition': { example: "The new wing is a beautiful addition to the building.", translation: "새로운 별관은 그 건물에 아름답게 추가된 것이다.", mnemonic: "'add(더하다)'의 명사형, '추가'." },
  'challenging': { example: "This is a challenging task.", translation: "이것은 힘든 과제이다.", mnemonic: "'챌린지(challenge-도전)'! 도전할 만한, '힘든, 까다로운'." },
  'generous': { example: "Thank you for your generous donation.", translation: "당신의 관대한 기부에 감사드립니다.", mnemonic: "'제너럴(general-장군)'은 '관대하다'." },
  'repeat': { example: "Could you repeat the question, please?", translation: "질문을 반복해 주시겠어요?", mnemonic: "'리피트(repeat)'! '반복하다'." },
  'information': { example: "For more information, please visit our website.", translation: "더 많은 정보를 원하시면 저희 웹사이트를 방문해 주세요.", mnemonic: "'인포메이션(information)' 데스크는 '정보'를 제공한다." },
  'reflect': { example: "The results reflect the opinions of the public.", translation: "그 결과는 대중의 의견을 반영한다.", mnemonic: "'리(re-다시) 플렉트(flect-구부리다)'! 빛을 다시 구부려 '반사하고 반영하다'." },
  'immediate': { example: "The problem requires immediate attention.", translation: "그 문제는 즉각적인 주의를 요한다.", mnemonic: "'임(im-not) 미디에이트(mediate-중간)'! 중간 과정 없이 '즉각적인'." },
  'important': { example: "It is important to follow the instructions.", translation: "지시사항을 따르는 것이 중요하다.", mnemonic: "'임포턴트(important)'! '중요한' 약속." },
  'late': { example: "He was late for the meeting.", translation: "그는 회의에 늦었다.", mnemonic: "'레이트(late)'! '늦은'." },
  'inviting': { example: "The restaurant has an inviting atmosphere.", translation: "그 식당은 매력적인 분위기를 가지고 있다.", mnemonic: "'인바이트(invite-초대)'! 초대하고 싶을 만큼 '매력적인'." },
  'less': { example: "We need to spend less money on entertainment.", translation: "우리는 오락에 돈을 덜 써야 한다.", mnemonic: "'레스(less)'! '더 적은'." },
  'promising': { example: "She is a promising young artist.", translation: "그녀는 장래가 유망한 젊은 예술가이다.", mnemonic: "'프라미스(promise-약속)'! 성공을 약속하는 듯 '유망한'." },
  'necessary': { example: "Is it necessary to attend the meeting?", translation: "회의에 참석하는 것이 필수적인가요?", mnemonic: "'네세서리(necessary)'! '내 세'금 '서리'하는 건 안 되니 '필수적인' 감시." },
  'objective': { example: "The main objective of this project is to increase sales.", translation: "이 프로젝트의 주요 목적은 매출을 늘리는 것이다.", mnemonic: "'오브젝트(object-물체)'! 물체를 향해 나아가는 '목표, 목적'." },
  'official': { example: "The official announcement will be made tomorrow.", translation: "공식 발표는 내일 있을 것이다.", mnemonic: "'오피스(office)'에서 발표하는 '공식적인' 소식." },
  'noticeable': { example: "There has been a noticeable improvement in his work.", translation: "그의 업무에 눈에 띄는 개선이 있었다.", mnemonic: "'notice(알아차리다)' + 'able(할 수 있는)'! '눈에 띄는'." },
  'powerful': { example: "This is a very powerful computer.", translation: "이것은 매우 강력한 컴퓨터이다.", mnemonic: "'파워(power)'! 힘이 넘치니 '강력한'." },
  'familiar': { example: "Are you familiar with this software?", translation: "이 소프트웨어에 익숙하신가요?", mnemonic: "'패밀리(family)'처럼 '친숙한'." },
  'faster': { example: "We need a faster way to process the data.", translation: "우리는 데이터를 처리할 더 빠른 방법이 필요하다.", mnemonic: "'패스트(fast)'! '더 빠른'." },
  'enthusiastic': { example: "The team received an enthusiastic welcome.", translation: "그 팀은 열광적인 환영을 받았다.", mnemonic: "'enthusiasm(열정)'! '열정적인'." },
  'further': { example: "For further details, please contact us.", translation: "추가적인 세부사항은 저희에게 연락주세요.", mnemonic: "'더(further)'! '추가적인'." },
  'optional': { example: "Wearing a tie is optional.", translation: "넥타이를 매는 것은 선택 사항입니다.", mnemonic: "'옵션(option-선택)'! '선택 가능한'." },
  'delivery': { example: "We offer free delivery on all orders.", translation: "저희는 모든 주문에 대해 무료 배송을 제공합니다.", mnemonic: "'deliver(배달하다)'의 명사형, '배송'." },
  'quietly': { example: "He quietly closed the door.", translation: "그는 조용히 문을 닫았다.", mnemonic: "'콰이어트(quiet)'! '조용하게'." },
  'correspondence': { example: "I have a lot of correspondence to deal with.", translation: "나는 처리해야 할 서신이 많다.", mnemonic: "'correspond(서신을 주고받다)'! '서신 왕래'." },
  'elect': { example: "They will elect a new president next year.", translation: "그들은 내년에 새로운 대통령을 선출할 것이다.", mnemonic: "'일렉션(election-선거)'에서 '선출하다'." },
  'exhibit': { example: "The museum will exhibit paintings by local artists.", translation: "그 박물관은 지역 화가들의 그림을 전시할 것이다.", mnemonic: "'엑시비션(exhibition-전시회)'! '전시하다'." },
  'finish': { example: "Have you finished your homework?", translation: "숙제 다 끝냈니?", mnemonic: "'피니쉬(finish)' 라인! 경주를 '끝내다'." },
  'merge with': { example: "The two companies will merge with each other.", translation: "그 두 회사는 서로 합병할 것이다.", mnemonic: "도로가 '머지(merge)'! 차선이 '합쳐지다'." },
  'relatively': { example: "The test was relatively easy.", translation: "그 시험은 비교적 쉬웠다.", mnemonic: "'릴레이티브(relative-상대적인)'! '비교적으로, 상대적으로'." },
  'routinely': { example: "The equipment is routinely checked for safety.", translation: "그 장비는 안전을 위해 정기적으로 점검받는다.", mnemonic: "'루틴(routine-일상)'! '일상적으로'." },
  'there': { example: "I will be there in five minutes.", translation: "5분 안에 거기에 도착할게요.", mnemonic: "'데어(there)'! '거기에서'." },
  'affordably': { example: "The furniture is affordably priced.", translation: "그 가구는 합리적인 가격에 책정되어 있다.", mnemonic: "'afford(여유가 있다)'! 살 만한 여유가 있게, '합리적으로'." },
  'preferred': { example: "What is your preferred method of payment?", translation: "선호하는 결제 방법이 무엇인가요?", mnemonic: "'prefer(선호하다)'! '선호되는'." },
  'urgently': { example: "We need to deal with this matter urgently.", translation: "우리는 이 문제를 긴급하게 처리해야 합니다.", mnemonic: "'어전트(urgent-긴급한)'! '긴급하게'." },
  'probable': { example: "It is probable that he will win the election.", translation: "그가 선거에서 이길 가능성이 있다.", mnemonic: "'아마도(probably)'! '가능성 있는'." },
  'accomplishments': { example: "She is proud of her accomplishments.", translation: "그녀는 자신의 성과를 자랑스러워한다.", mnemonic: "'accomplish(성취하다)'! '성과, 업적'." },
  'article': { example: "She wrote an article about her travels in Asia.", translation: "그녀는 아시아에서의 여행에 대한 기사를 썼다.", mnemonic: "'아, 티끌(article)' 모아 태산! 신문 '기사' 하나하나가 소중해." },
  'attendance': { example: "Attendance at the workshop is mandatory for all employees.", translation: "워크숍 참석은 모든 직원에게 의무입니다.", mnemonic: "'attend(참석하다)'의 명사형, '참석'." },
  'benefit': { example: "The company offers great benefits, including health insurance.", translation: "그 회사는 건강 보험을 포함한 훌륭한 복지 혜택을 제공한다.", mnemonic: "'베네핏(benefit)'! 좋은 '혜택'." },
  'career': { example: "He has a successful career in finance.", translation: "그는 금융 분야에서 성공적인 경력을 쌓았다.", mnemonic: "'커리어(career)' 우먼! 멋진 '경력'을 가진 여성." },
  'celebration': { example: "We are planning a celebration for her birthday.", translation: "우리는 그녀의 생일 축하 파티를 계획하고 있다.", mnemonic: "'celebrate(축하하다)'의 명사형, '축하'." },
  'collaboration': { example: "The project was a successful collaboration between the two departments.", translation: "그 프로젝트는 두 부서 간의 성공적인 협력이었다.", mnemonic: "'콜라보(collabo)'! 가수들의 '협력' 작업." },
  'host': { example: "Our company will host the annual conference this year.", translation: "우리 회사가 올해 연례 콘퍼런스를 주최할 것이다.", mnemonic: "파티 '호스트(host)'는 손님을 맞이하고 파티를 '주최한다'." },
  'no': { example: "There is no reason to be angry.", translation: "화낼 이유가 없다.", mnemonic: "'노(No)'! 하나도 '없는'." },
  'more': { example: "Would you like some more coffee?", translation: "커피 좀 더 드릴까요?", mnemonic: "'모어(more)'! '더 많은'." },
  'investment': { example: "Real estate is a good long-term investment.", translation: "부동산은 좋은 장기 투자이다.", mnemonic: "'invest(투자하다)'의 명사형, '투자'." },
  'quite': { example: "The movie was quite interesting.", translation: "그 영화는 꽤 재미있었다.", mnemonic: "'콰이어트(quiet)'! '꽤' 조용하네." },
  'donate': { example: "She donated a large sum of money to charity.", translation: "그녀는 자선단체에 많은 돈을 기부했다.", mnemonic: "'도네이션(donation)'! '기부하다'." },
  'style': { example: "I like her sense of style.", translation: "나는 그녀의 스타일 감각을 좋아한다.", mnemonic: "패션 '스타일(style)'!" },
  'remarkable': { example: "He has made remarkable progress in his studies.", translation: "그는 학업에서 현저한 진전을 이루었다.", mnemonic: "'리마크(remark-주목)'! 주목할 만큼 '현저한'." },
  'task': { example: "Completing this task will be difficult.", translation: "이 업무를 완수하는 것은 어려울 것이다.", mnemonic: "멀티'태스킹(tasking)'은 여러 '업무'를 동시에 하는 것." },
  'preside over': { example: "The judge will preside over the trial.", translation: "판사가 그 재판을 주재할 것이다.", mnemonic: "'프레지던트(president)'가 회의를 '주재하다'." },
  'indicate': { example: "The survey results indicate a change in public opinion.", translation: "설문조사 결과는 여론의 변화를 나타낸다.", mnemonic: "'인디케이터(indicator)'는 방향을 '나타내는' 지시등." },
  'pickup': { example: "You can pick up your order at the customer service desk.", translation: "고객 서비스 데스크에서 주문하신 물품을 찾아가실 수 있습니다.", mnemonic: "물건을 '픽업(pickup)'해서 '가져가다'." },
  'post': { example: "The results will be posted on the website.", translation: "결과는 웹사이트에 게시될 것입니다.", mnemonic: "블로그에 글을 '포스트(post)'! '게시하다'." },
  'ship': { example: "We can ship the product directly to your home.", translation: "저희는 제품을 당신의 집으로 직접 배송할 수 있습니다.", mnemonic: "배(ship)에 실어 '배송하다'." },
  'sell': { example: "They sell high-quality leather goods.", translation: "그들은 고품질의 가죽 제품을 판다.", mnemonic: "'세일(sale)'은 물건을 싸게 '파는' 것." },
  'remove': { example: "Please remove your shoes before entering.", translation: "들어가기 전에 신발을 벗어주세요.", mnemonic: "'리무버(remover)'는 화장을 '제거하는' 것." },
  'verify': { example: "We need to verify your identity.", translation: "저희는 당신의 신원을 확인할 필요가 있습니다.", mnemonic: "'베리(very) 파이(fy)'! '매우' 확실하게 '확인하다'." },
  'except for': { example: "The office is open every day except for Sundays.", translation: "그 사무실은 일요일을 제외하고 매일 엽니다.", mnemonic: "'익셉트(except)'! '엑셉'하고 뱉어내며 '~을 제외하고'." },
  'rewarding': { example: "Teaching can be a very rewarding job.", translation: "가르치는 것은 매우 보람 있는 일일 수 있다.", mnemonic: "'리워드(reward-보상)'! 보상을 받을 만큼 '보람된'." },
  'variation': { example: "There is a wide variation in prices.", translation: "가격에 큰 차이가 있다.", mnemonic: "'베리에이션(variation)'! 여러 '변형, 변수'." },
  'instead of': { example: "I'll have tea instead of coffee.", translation: "커피 대신 차를 마실게요.", mnemonic: "'~대신에'." },
  'someone': { example: "Someone is waiting for you outside.", translation: "누군가 밖에서 당신을 기다리고 있습니다.", mnemonic: "'썸(some) 원(one)'! 어떤 한 사람, '누군가'." },
  'registration': { example: "Registration for the event is now open.", translation: "그 행사 등록이 지금 시작되었습니다.", mnemonic: "'register(등록하다)'의 명사형, '등록'." },
  'attractive': { example: "The city is an attractive destination for tourists.", translation: "그 도시는 관광객들에게 매력적인 목적지이다.", mnemonic: "'attract(끌다)'! 마음을 끄니 '매력적인'." },
  'comfortable': { example: "This sofa is very comfortable.", translation: "이 소파는 매우 편안하다.", mnemonic: "'컴포터블(comfortable)'! '편안한' 잠자리." },
  'competent': { example: "She is a highly competent lawyer.", translation: "그녀는 매우 유능한 변호사이다.", mnemonic: "'컴퓨터(computer)'처럼 일을 잘하니 '유능한'." },
  'correct': { example: "Please make sure your information is correct.", translation: "당신의 정보가 정확한지 확인해 주세요.", mnemonic: "'코렉트(correct)'! 정답, '정확한'." },
  'creative': { example: "She has a very creative imagination.", translation: "그녀는 매우 창의적인 상상력을 가지고 있다.", mnemonic: "'create(창조하다)'! '창의적인'." },
  'different': { example: "We have very different opinions on this matter.", translation: "우리는 이 문제에 대해 매우 다른 의견을 가지고 있다.", mnemonic: "'디퍼런트(different)'! '다른'." },
  'distinctive': { example: "The car has a very distinctive design.", translation: "그 차는 매우 독특한 디자인을 가지고 있다.", mnemonic: "'디스팅트(distinct-뚜렷한)'! 뚜렷하게 구별되니 '독특한'." },
  'educational': { example: "The museum offers many educational programs.", translation: "그 박물관은 많은 교육 프로그램을 제공한다.", mnemonic: "'에듀케이션(education-교육)'! '교육의'." },
  'excited': { example: "I'm so excited about the trip.", translation: "나는 그 여행에 대해 매우 신이 난다.", mnemonic: "'익사이팅(exciting)'! '신나는'." },
  'expensive': { example: "This watch is too expensive for me.", translation: "이 시계는 나에게 너무 비싸다.", mnemonic: "'익스펜시브(expensive)'! '비싼'." },
  'next': { example: "The next train will arrive in 10 minutes.", translation: "다음 기차는 10분 후에 도착할 것입니다.", mnemonic: "'넥스트(next)'! '다음의'." },
  'optimal': { example: "We need to find the optimal solution to this problem.", translation: "우리는 이 문제에 대한 최적의 해결책을 찾아야 한다.", mnemonic: "'옵티머스(Optimus)' 프라임은 '최적의' 리더." },
  'high': { example: "The company maintains high standards of quality.", translation: "그 회사는 높은 수준의 품질을 유지한다.", mnemonic: "'하이(high)'! '높은'." },
  'acquire': { example: "The company plans to acquire several smaller firms.", translation: "그 회사는 몇 개의 소규모 회사들을 인수할 계획이다.", mnemonic: "'어, 콰이어(choir)'! 합창단을 '얻기' 위해 '인수하다'." },
  'rare': { example: "It is very rare to see that kind of bird here.", translation: "여기서 그런 종류의 새를 보는 것은 매우 드물다.", mnemonic: "'레어(rare)' 아이템은 '희귀한' 아이템." },
  'practical': { example: "He gave me some practical advice.", translation: "그는 나에게 몇 가지 실용적인 조언을 해주었다.", mnemonic: "'프랙티스(practice-연습)'! 연습에 도움이 되는 '실용적인' 조언." },
  'relaxing': { example: "I had a relaxing vacation by the beach.", translation: "나는 해변에서 편안한 휴가를 보냈다.", mnemonic: "'릴랙스(relax)'! '편안한'." },
  'subject': { example: "Prices are subject to change without notice.", translation: "가격은 공지 없이 변경될 수 있습니다.", mnemonic: "실험 '서브젝트(subject)'! 실험의 '영향을 받는' 대상." },
  'total': { example: "What is the total cost?", translation: "총비용은 얼마인가요?", mnemonic: "'토탈(total)'! '총, 전체의'." },
  'unable': { example: "I am unable to attend the meeting tomorrow.", translation: "저는 내일 회의에 참석할 수 없습니다.", mnemonic: "'un(not) + able(할 수 있는)'! '할 수 없는'." },
  'ask': { example: "Don't hesitate to ask for help.", translation: "도움을 요청하는 것을 망설이지 마세요.", mnemonic: "'애스크(ask)'! '물어보다, 요청하다'." },
  'even so': { example: "The weather was bad, but even so, we enjoyed the trip.", translation: "날씨가 나빴지만, 그렇다 하더라도 우리는 여행을 즐겼다.", mnemonic: "'심지어(even) 그래도(so)'! '그렇다 하더라도'." },
  'far': { example: "The new model is far better than the old one.", translation: "새로운 모델은 옛날 것보다 훨씬 더 좋다.", mnemonic: "'파(far)'! '훨씬' 멀리." },
  'unforeseen': { example: "Due to unforeseen circumstances, the event was cancelled.", translation: "예기치 않은 상황으로 인해 행사가 취소되었습니다.", mnemonic: "'un(not) + fore(미리) + seen(보다)'! 미리 보지 못한, '예기치 않은'." },
  'gently': { example: "Please handle the package gently.", translation: "소포를 부드럽게 다뤄주세요.", mnemonic: "'젠틀(gentle)'맨은 '부드럽게' 행동한다." },
  'hardly': { example: "I can hardly hear what you're saying.", translation: "나는 당신이 무슨 말을 하는지 거의 들을 수 없다.", mnemonic: "'하드(hard)'! 너무 어려워서 '거의 ~할 수 없는'." },
  'eagerly': { example: "They are eagerly awaiting the results.", translation: "그들은 그 결과를 간절히 기다리고 있다.", mnemonic: "'이글(eagle)'! 독수리처럼 '열렬히' 목표를 노리다." },
  'in particular': { example: "I liked the whole movie, but I enjoyed the ending in particular.", translation: "나는 영화 전체가 좋았지만, 특히 결말이 즐거웠다.", mnemonic: "'파티큘러(particular-특별한)'! '특히'." },
  'durable': { example: "This material is very durable.", translation: "이 재료는 내구성이 매우 강하다.", mnemonic: "'듀라셀(Duracell)' 건전지는 '오래가고 내구성이 강하다'." },
  'earlier': { example: "I should have left earlier.", translation: "나는 더 일찍 떠났어야 했다.", mnemonic: "'얼리(early)' 버드! '더 일찍'." },
  'notwithstanding': { example: "Notwithstanding the bad weather, the game will be played.", translation: "악천후에도 불구하고, 경기는 진행될 것입니다.", mnemonic: "'낫(not) 위드(with) 스탠딩(standing)'! 함께 서 있지 않음에도 '불구하고'." },
  'monitor': { example: "We need to monitor the situation closely.", translation: "우리는 상황을 면밀히 감시해야 합니다.", mnemonic: "CCTV '모니터(monitor)'로 '감시하다'." },
  'where': { example: "This is the place where I was born.", translation: "이곳이 내가 태어난 곳이다.", mnemonic: "'웨어(where)'? '어디, ~하는 곳'." },
  'owing to': { example: "The game was cancelled owing to the rain.", translation: "비 때문에 경기가 취소되었다.", mnemonic: "'오잉(owing)'? 비 '때문에' 취소라고?" },
  'courtesy': { example: "He treated everyone with courtesy and respect.", translation: "그는 모든 사람을 예의와 존중으로 대했다.", mnemonic: "'코트(court)'에서는 '예의, 호의'를 갖춰야 한다." },
  'proceed with': { example: "We will proceed with the original plan.", translation: "우리는 원래 계획대로 진행할 것입니다.", mnemonic: "'프로(pro-앞으로) 시드(ceed-가다)'! 앞으로 '나아가다'." },
  'quick': { example: "We need to make a quick decision.", translation: "우리는 빠른 결정을 내려야 한다.", mnemonic: "'퀵(quick)' 서비스는 '빠른' 배송." },
  'instructional': { example: "The video provides instructional guidance on how to use the software.", translation: "그 비디오는 소프트웨어 사용 방법에 대한 지침용 안내를 제공한다.", mnemonic: "'instruction(지시)'! '지침용의'." },
  'technical': { example: "The project requires a high level of technical skill.", translation: "그 프로젝트는 높은 수준의 기술적인 능력을 요구한다.", mnemonic: "'테크닉(technic)'! '기술적인'." },
  'hold': { example: "The company will hold a meeting tomorrow.", translation: "회사는 내일 회의를 개최할 것이다.", mnemonic: "손에 '홀드(hold)'! '잡다, 개최하다'." },
  'active': { example: "She leads a very active life.", translation: "그녀는 매우 활동적인 삶을 산다.", mnemonic: "'액티브(active)'! '활동적인'." },
  'aspire': { example: "He aspires to become a successful writer.", translation: "그는 성공적인 작가가 되기를 열망한다.", mnemonic: "'아, 스파이어(aspire)'! 스파이가 되기를 '열망하다'." },
  'alternative': { example: "Is there an alternative to surgery?", translation: "수술의 대안이 있나요?", mnemonic: "'알터(alter-바꾸다)'! 바꿀 수 있는 '대안'." },
  'clean': { example: "Please keep your room clean.", translation: "방을 깨끗하게 유지해 주세요.", mnemonic: "'클린(clean)'! '깨끗한'." },
  'collaborative': { example: "The project was a collaborative effort.", translation: "그 프로젝트는 협력적인 노력이었다.", mnemonic: "'collaboration(협력)'! '협력적인'." },
  'commendable': { example: "Your efforts are commendable.", translation: "당신의 노력은 칭찬할 만하다.", mnemonic: "'코멘트(comment)'! 칭찬하는 코멘트를 달 만큼 '칭찬할 만한'." },
  'confidential': { example: "This information is strictly confidential.", translation: "이 정보는 엄격히 기밀입니다.", mnemonic: "'컨피덴셜(confidential)'! '콘'서트 '피'날레는 '비밀'이야." },
  'critical': { example: "Your feedback is critical to our success.", translation: "당신의 피드백은 우리의 성공에 매우 중요하다.", mnemonic: "'크리티컬(critical)' 히트! 게임에서 '치명적이고 중요한' 공격." },
  'comprehensive': { example: "We offer a comprehensive range of services.", translation: "저희는 종합적인 범위의 서비스를 제공합니다.", mnemonic: "'컴(com-함께) 프리헨드(prehend-잡다)'! 모든 것을 함께 잡고 있으니 '종합적인'." },
  'distinct': { example: "There is a distinct difference between the two.", translation: "그 둘 사이에는 뚜렷한 차이가 있다.", mnemonic: "'디스 팅트(this tint)'! 이 틴트 색깔은 다른 것과 '뚜렷하게' 달라." },
  'cooperation': { example: "This project requires close cooperation between all departments.", translation: "이 프로젝트는 모든 부서 간의 긴밀한 협력을 필요로 한다.", mnemonic: "'cooperate(협력하다)'의 명사형, '협력'." },
  'consequence': { example: "He must face the consequences of his actions.", translation: "그는 자신의 행동의 결과를 감수해야 한다.", mnemonic: "'con(함께) + sequence(순서)' -> 행동과 함께 순서대로 따라오는 것, '결과'." },
  'decision': { example: "We need to make a decision by the end of the day.", translation: "우리는 오늘 중으로 결정을 내려야 한다.", mnemonic: "'decide(결정하다)'의 명사형, '결정'." },
  'dedication': { example: "Her dedication to her work is admirable.", translation: "그녀의 일에 대한 헌신은 존경스럽다.", mnemonic: "'dedicate(헌신하다)'의 명사형, '헌신'." },
  'feasibility': { example: "We are studying the feasibility of the project.", translation: "우리는 그 프로젝트의 실행 가능성을 연구하고 있다.", mnemonic: "'피저빌리티(feasibility)'! '피'할 수 없는 '실행 가능성' 테스트." },
  'determine': { example: "The test results will determine your final grade.", translation: "시험 결과가 당신의 최종 성적을 결정할 것이다.", mnemonic: "'디, 터민(determine)'! '뒤'에 있는 '터'미널로 갈지 '결정하다'." },
  'opportunity': { example: "This is a great opportunity to learn new skills.", translation: "이것은 새로운 기술을 배울 좋은 기회이다.", mnemonic: "'오퍼(offer)'가 '튜니티(tunity)'! 좋은 제안이 올 '기회'." },
  'instructions': { example: "Please follow the instructions carefully.", translation: "지시사항을 주의 깊게 따라주세요.", mnemonic: "'인스트럭터(instructor)'는 '지시사항'을 알려주는 사람." },
  'lengthy': { example: "The lengthy negotiations finally came to an end.", translation: "길고 긴 협상이 마침내 끝났다.", mnemonic: "'렝스(length-길이)'! 길이가 기니 '장황한, 기나긴'." },
  'location': { example: "What is the location of the new office?", translation: "새 사무실의 위치는 어디인가요?", mnemonic: "'로케이션(location)'! 영화 촬영 '장소, 위치'." },
  'loyalty': { example: "The company values customer loyalty.", translation: "그 회사는 고객 충성도를 중요하게 생각한다.", mnemonic: "'로열(loyal-충성스러운)'! '충성도'." },
  'maintenance': { example: "The building is in need of regular maintenance.", translation: "그 건물은 정기적인 유지 보수가 필요하다.", mnemonic: "'메인테인(maintain-유지하다)'! '유지 보수'." },
  'merchandise': { example: "The store sells a variety of merchandise.", translation: "그 가게는 다양한 상품을 판매한다.", mnemonic: "'머천다이즈(merchandise)'! 아이돌 굿즈 '상품'." },
  'option': { example: "You have two options: stay or leave.", translation: "당신에게는 머물거나 떠나는 두 가지 선택 사항이 있다.", mnemonic: "자동차 '옵션(option)'! '선택 사항'." },
  'designate': { example: "This area has been designated as a national park.", translation: "이 지역은 국립공원으로 지정되었다.", mnemonic: "'디자인(design)'해서 특별 구역으로 '지정하다'." },
  'performer': { example: "She is a talented performer.", translation: "그녀는 재능 있는 공연자이다.", mnemonic: "'perform(공연하다)'하는 사람, '공연자'." },
  'period': { example: "The offer is valid for a limited period.", translation: "그 제안은 한정된 기간 동안 유효하다.", mnemonic: "마침표(period)는 문장의 끝, 한 '기간'의 끝." },
  'photograph': { example: "He took a photograph of the beautiful sunset.", translation: "그는 아름다운 일몰 사진을 찍었다.", mnemonic: "'포토(photo)'! '사진'." },
  'renowned': { example: "He is a renowned expert in his field.", translation: "그는 자신의 분야에서 저명한 전문가이다.", mnemonic: "'리(re-다시) 나운(noun-이름)'! 이름이 다시 불릴 만큼 '저명한'." },
  'procedure': { example: "You must follow the correct procedure.", translation: "올바른 절차를 따라야 합니다.", mnemonic: "'프로(pro-앞으로) 시저(cedure)'! 앞으로 나아가는 '절차'." },
  'progress': { example: "We have made a lot of progress on the project.", translation: "우리는 프로젝트에서 많은 진전을 이루었다.", mnemonic: "'프로(pro-앞으로) 그레스(gress-가다)'! 앞으로 나아가니 '진행, 성과'." },
  'publication': { example: "The book is scheduled for publication in May.", translation: "그 책은 5월에 출판될 예정이다.", mnemonic: "'퍼블릭(public-대중)'에게 알리는 '발행물'." },
  'reason': { example: "What is the reason for your decision?", translation: "당신이 결정한 이유는 무엇인가요?", mnemonic: "'리즈너블(reasonable-합리적인)'! 합리적인 '이유'." },
  'decline': { example: "I had to decline his invitation.", translation: "나는 그의 초대를 거절해야만 했다.", mnemonic: "'디(de-아래로) 클라인(cline-기울다)'! 아래로 기우니 '감소하고, 거절하다'." },
  'sizable': { example: "The company made a sizable profit.", translation: "그 회사는 꽤 큰 이익을 냈다.", mnemonic: "'사이즈(size)'가 있으니 '큰'." },
  'impact': { example: "The new policy will have a significant impact on the environment.", translation: "새로운 정책은 환경에 상당한 영향을 미칠 것이다.", mnemonic: "치과 '임팩트(impact)'! 충격과 '영향'이 크다." },
  'stable': { example: "The patient's condition is stable.", translation: "환자의 상태는 안정적이다.", mnemonic: "'스테이(stay) 블(ble)'! 머물 수 있을 만큼 '안정적인'." },
  'thorough': { example: "The police conducted a thorough investigation.", translation: "경찰은 철저한 조사를 수행했다.", mnemonic: "'서류(thorough)'를 검토할 땐 '철저하게' 해야 해." },
  'unwanted': { example: "Please dispose of any unwanted items.", translation: "원치 않는 물건은 모두 처리해 주세요.", mnemonic: "'un(not) + wanted(원하는)'! '원치 않는'." },
  'vulnerable to': { example: "Old people are more vulnerable to the flu.", translation: "노인들은 독감에 더 취약하다.", mnemonic: "'벌 너러블(vulnerable)'! 벌에 너덜너덜해질 만큼 '~에 취약한'." },
  'accidently': { example: "I accidentally deleted the file.", translation: "나는 실수로 그 파일을 삭제했다.", mnemonic: "'accident(사고)'처럼 '우연히, 실수로'." },
  'accordingly': { example: "The weather is cold, so you should dress accordingly.", translation: "날씨가 추우니, 그에 맞춰 옷을 입어야 한다.", mnemonic: "'어코딩(according-~에 따라)'! 그에 '따라서, 걸맞게'." },
  'willing': { example: "She is willing to help with the project.", translation: "그녀는 기꺼이 그 프로젝트를 도울 것이다.", mnemonic: "'윌(will-의지)'! 의지가 있으니 '기꺼이 ~하는'." },
  'alternatively': { example: "You can pay by cash. Alternatively, you can use a credit card.", translation: "현금으로 지불하실 수 있습니다. 그렇지 않으면 신용카드를 사용하셔도 됩니다.", mnemonic: "'alternative(대안)'! '대안으로'." },
  'always': { example: "He always arrives on time.", translation: "그는 항상 정시에 도착한다.", mnemonic: "'올웨이즈(always)'! '항상'." },
  'barely': { example: "I could barely see him in the dark.", translation: "나는 어둠 속에서 그를 가까스로 볼 수 있었다.", mnemonic: "'베어(bare-맨몸)'! 맨몸으로 추위를 '가까스로' 견디다." },
  'briefly': { example: "Let me briefly explain the main points.", translation: "요점을 간략하게 설명해 드릴게요.", mnemonic: "'브리프(brief-간단한)'! '간략하게'." },
  'relocation': { example: "The company announced its relocation to a new city.", translation: "그 회사는 새로운 도시로의 이전을 발표했다.", mnemonic: "'re(다시) + location(위치)'! 위치를 다시 잡으니 '이주, 이전'." },
  'leading': { example: "She is a leading expert in her field.", translation: "그녀는 자기 분야에서 선도적인 전문가이다.", mnemonic: "'리더(leader)'! 팀을 이끄는 '선도하는'." },
  'damage': { example: "The storm caused serious damage to the building.", translation: "폭풍은 그 건물에 심각한 손상을 입혔다.", mnemonic: "'대미지(damage)'! 게임에서 '손실'을 입다." },
  'near': { example: "The hotel is near the airport.", translation: "그 호텔은 공항 근처에 있다.", mnemonic: "'니어(near)'! '가까이에'." },
  'resolution': { example: "The UN passed a resolution to end the conflict.", translation: "유엔은 분쟁을 끝내기 위한 결의안을 통과시켰다.", mnemonic: "'리(re-다시) 솔루션(solution-해결책)'! 다시 해결책을 찾겠다는 '결의'." },
  'two': { example: "I have two brothers.", translation: "나는 형제가 둘 있다.", mnemonic: "원, '투(two)'! '둘'." },
  'selection': { example: "The store has a wide selection of shoes.", translation: "그 가게는 다양한 종류의 신발을 갖추고 있다.", mnemonic: "'셀렉트(select-선택하다)'! 선택된 것들의 모음, '소장품'." },
  'service': { example: "The hotel provides excellent service.", translation: "그 호텔은 훌륭한 서비스를 제공한다.", mnemonic: "고객 '서비스(service)'!" },
  'show': { example: "Can you show me how to use this machine?", translation: "이 기계를 어떻게 사용하는지 보여줄 수 있나요?", mnemonic: "패션 '쇼(show)'! 옷을 '보여주다'." },
  'accelerate': { example: "The car accelerated to overtake the truck.", translation: "그 차는 트럭을 추월하기 위해 속도를 높였다.", mnemonic: "'악셀(accel)'을 밟아 '가속하다'." },
  'space': { example: "Is there enough space for my luggage?", translation: "제 짐을 놓을 충분한 공간이 있나요?", mnemonic: "우주(space)는 넓은 '공간'." },
  'submission': { example: "The deadline for submission is Friday.", translation: "제출 마감일은 금요일입니다.", mnemonic: "'submit(제출하다)'의 명사형, '제출'." },
  'distributor': { example: "He works as a distributor for a major food company.", translation: "그는 주요 식품 회사의 유통업자로 일한다.", mnemonic: "'distribute(유통하다)'하는 사람, '유통업자'." },
  'consequently': { example: "He missed the train and consequently was late for the meeting.", translation: "그는 기차를 놓쳤고, 그 결과로 회의에 늦었다.", mnemonic: "'consequence(결과)'! '그 결과로'." },
  'continuously': { example: "The machine can operate continuously for 24 hours.", translation: "그 기계는 24시간 동안 계속해서 작동할 수 있다.", mnemonic: "'continue(계속하다)'! '계속해서'." },
  'diligently': { example: "She worked diligently to finish the project on time.", translation: "그녀는 프로젝트를 제시간에 끝내기 위해 부지런하게 일했다.", mnemonic: "'딜리(dili) 전(gent)'! '딜리버리' '전'에 '부지런하게' 포장하다." },
  'dramatically': { example: "Prices have increased dramatically in recent years.", translation: "최근 몇 년간 물가가 극적으로 상승했다.", mnemonic: "'드라마(drama)'처럼 '극적으로, 엄청나게'." },
  'exactly': { example: "That's exactly what I was thinking.", translation: "그게 바로 제가 생각하던 것입니다.", mnemonic: "'이그잭틀리(exactly)'! '정확하게'." },
  'very': { example: "This is a very important issue.", translation: "이것은 매우 중요한 문제이다.", mnemonic: "'베리(very)' 굿! '매우' 좋아." },
  'inside': { example: "What's inside the box?", translation: "상자 안에는 무엇이 있나요?", mnemonic: "'인(in) 사이드(side)'! '안쪽에'." },
  'if so': { example: "Are you free this evening? If so, let's have dinner.", translation: "오늘 저녁에 시간 괜찮으세요? 만약 그렇다면, 저녁 같이 먹어요.", mnemonic: "'만약(if) 그렇다면(so)'!" },
  'mistakenly': { example: "I mistakenly took the wrong bus.", translation: "나는 실수로 다른 버스를 탔다.", mnemonic: "'미스테이크(mistake-실수)'! '실수로'." },
  'surpass': { example: "His performance surpassed all expectations.", translation: "그의 성과는 모든 기대를 뛰어넘었다.", mnemonic: "'슈퍼(sur) 패스(pass)'! 슈퍼하게 통과하니 '초과하다'." },
  'much': { example: "(양이)많은, 훨씬", mnemonic: "'머치(much)'! '많이'." },
  'newly': { example: "They are a newly married couple.", translation: "그들은 신혼부부이다.", mnemonic: "'뉴(new)'! '새롭게'." },
  'favorably': { example: "The new policy was favorably received by the public.", translation: "새로운 정책은 대중들에게 호의적으로 받아들여졌다.", mnemonic: "'페이버(favor-호의)'! '호의적으로'." },
  'first': { example: "He was the first person to arrive.", translation: "그는 가장 먼저 도착한 사람이었다.", mnemonic: "'퍼스트(first)'! '첫 번째'." },
  'primarily': { example: "The book is primarily intended for beginners.", translation: "그 책은 주로 초보자들을 위한 것이다.", mnemonic: "'프라임(prime-주요한)'! '주로'." },
  'probably': { example: "It will probably rain tomorrow.", translation: "내일은 아마 비가 올 것이다.", mnemonic: "'프로(pro)'는 '아마도' 이길 거야." },
  'regretfully': { example: "Regretfully, we must decline your offer.", translation: "유감스럽게도, 저희는 당신의 제안을 거절해야 합니다.", mnemonic: "'리그렛(regret-후회)'! '유감스럽게도'." },
  'readily': { example: "Information is readily available on the internet.", translation: "정보는 인터넷에서 쉽게 이용할 수 있다.", mnemonic: "'레디(ready)'! 준비가 되어 있으니 '쉽게'." },
  'inaccessible': { example: "The village is inaccessible by car.", translation: "그 마을은 차로 접근할 수 없다.", mnemonic: "'in(not) + accessible(접근 가능한)'! '이용 불가한'." },
  'strictly': { example: "Smoking is strictly forbidden here.", translation: "이곳에서는 흡연이 엄격히 금지됩니다.", mnemonic: "'스트리트(street)' 파이터는 규칙이 '엄격하다'." },
  'strongly': { example: "I strongly recommend this restaurant.", translation: "나는 이 식당을 강력히 추천한다.", mnemonic: "'스트롱(strong)'! '강력히'." },
  'then': { example: "First, mix the flour and sugar, then add the eggs.", translation: "먼저, 밀가루와 설탕을 섞고, 그러고 나서 달걀을 더하세요.", mnemonic: "'덴(then)'! '그때, 그러고 나서'." },
  'next to': { example: "The bank is next to the post office.", translation: "은행은 우체국 옆에 있다.", mnemonic: "'넥스트(next)'! 바로 '옆에'." },
  'widely': { example: "English is widely spoken around the world.", translation: "영어는 전 세계적으로 널리 사용된다.", mnemonic: "'와이드(wide)'! '넓게, 널리'." },
  'coverage': { example: "The insurance provides coverage for fire and theft.", translation: "그 보험은 화재와 도난에 대한 보장을 제공한다.", mnemonic: "'커버(cover)'하는 범위, '보상, 취재'." },
  'administrator': { example: "She works as a hospital administrator.", translation: "그녀는 병원 관리자로 일한다.", mnemonic: "'어드민(admin)'! 시스템 '관리자'." },
  'admiration': { example: "I have great admiration for her courage.", translation: "나는 그녀의 용기에 큰 감탄을 표한다.", mnemonic: "'admire(감탄하다)'의 명사형, '감탄'." },
  'admission': { example: "Admission to the museum is free.", translation: "박물관 입장은 무료입니다.", mnemonic: "'어드밋(admit-인정하다)'! 입장을 인정해주니 '입장'." },
  'on behalf of': { example: "I am speaking on behalf of my colleagues.", translation: "저는 제 동료들을 대표하여 말씀드립니다.", mnemonic: "'~을 대표하여'." },
  'arrangements': { example: "Have you made your travel arrangements?", translation: "여행 준비는 다 하셨나요?", mnemonic: "'arrange(준비하다)'! '준비, 예약'." },
  'authority': { example: "You need to get permission from the proper authority.", translation: "당신은 적절한 권위 기관으로부터 허가를 받아야 합니다.", mnemonic: "'오서(author-저자)'는 글에 대한 '권한'이 있다." },
  'break': { example: "Let's take a short break.", translation: "잠깐 휴식을 취합시다.", mnemonic: "'브레이크(break)' 타임! '휴식 시간'." },
  'candidate': { example: "He is a candidate for the presidential election.", translation: "그는 대통령 선거의 후보자이다.", mnemonic: "'캔디 데이트(candidate)'! 달콤한 데이트를 약속하는 선거 '후보자'." },
  'challenge': { example: "The new job presents a big challenge.", translation: "새로운 직업은 큰 도전 과제를 제시한다.", mnemonic: "'챌린지(challenge)'! '도전'." },
  'comments': { example: "Do you have any comments on the proposal?", translation: "그 제안에 대해 어떤 의견이라도 있으신가요?", mnemonic: "인터넷 '코멘트(comment)'! '이야기, 피드백'." },
  'why': { example: "I don't know why he is angry.", translation: "나는 그가 왜 화났는지 모르겠다.", mnemonic: "'와이(why)'? '왜'." },
  'competition': { example: "She won first prize in the competition.", translation: "그녀는 그 대회에서 1등 상을 받았다.", mnemonic: "'컴피티션(competition)'! 치열한 '경쟁'." },
  'temporary': { example: "This is just a temporary solution.", translation: "이것은 단지 일시적인 해결책일 뿐이다.", mnemonic: "'템포러리(temporary)'! '템포'가 빨라 '일시적인' 현상이야." },
  'convenience': { example: "For your convenience, the store is open 24 hours.", translation: "당신의 편의를 위해, 그 가게는 24시간 영업합니다.", mnemonic: "'convenient(편리한)'의 명사형, '편의'." },
  'destination': { example: "Our final destination is Paris.", translation: "우리의 최종 목적지는 파리입니다.", mnemonic: "'데스티니(destiny-운명)'! 운명의 '목적지'." },
  'description': { example: "Can you give me a description of the suspect?", translation: "용의자에 대한 설명을 해줄 수 있나요?", mnemonic: "'describe(묘사하다)'의 명사형, '설명'." },
  'sufficient': { example: "We have sufficient food for the trip.", translation: "우리는 여행을 위한 충분한 식량을 가지고 있다.", mnemonic: "'서피스(surface)'에 '션'하게 깔릴 만큼 '충분한'." },
  'employment': { example: "The company announced an increase in employment.", translation: "그 회사는 고용 증가를 발표했다.", mnemonic: "'employ(고용하다)'의 명사형, '고용'." },
  'delight': { example: "The news delighted everyone.", translation: "그 소식은 모두를 기쁘게 했다.", mnemonic: "'딜라이트(delight)'! '뒤'에 '라이트'가 켜지니 '기쁘다'." },
  'equipment': { example: "The gym has a lot of modern equipment.", translation: "그 체육관에는 많은 현대적인 장비가 있다.", mnemonic: "'이큅(equip-갖추다)'! 갖춰진 '장비, 설비'." },
  'site': { example: "This is the construction site for the new hospital.", translation: "이곳이 새 병원의 공사 현장입니다.", mnemonic: "웹'사이트(site)'! 인터넷 '장소'." },
  'past': { example: "He walked past the library without noticing it.", translation: "그는 도서관을 알아보지 못하고 지나쳐 걸어갔다.", mnemonic: "'패스(pass)'! '지나쳐서'." },
  'firm': { example: "He works for a law firm.", translation: "그는 법률 회사에서 일한다.", mnemonic: "'펌(firm)'처럼 단단하게 뭉친 '회사'." },
  'founding': { example: "She was involved in the founding of the company.", translation: "그녀는 그 회사의 설립에 관여했다.", mnemonic: "'파운드(found-설립하다)'! '설립'." },
  'help': { example: "Can you help me with this problem?", translation: "이 문제 좀 도와줄 수 있나요?", mnemonic: "'헬프(help)' 미! '도와주세요'." },
  'anticipate': { example: "We anticipate a large crowd at the concert.", translation: "우리는 그 콘서트에 많은 관중이 모일 것으로 예상한다.", mnemonic: "'안티(anti-미리) 시페이트(cipate-잡다)'! 미리 상황을 잡으니 '예상하다, 기대하다'." },
  'economical': { example: "This car is very economical on fuel.", translation: "이 차는 연료가 매우 적게 든다.", mnemonic: "'이코노미(economy-경제)'! 경제적이니 '저렴한'." },
  'assurance': { example: "He gave me his assurance that he would help.", translation: "그는 돕겠다는 확신을 나에게 주었다.", mnemonic: "'assure(확신시키다)'의 명사형, '확신'." },
  'create': { example: "We need to create a new marketing plan.", translation: "우리는 새로운 마케팅 계획을 만들어야 한다.", mnemonic: "'크리에이터(creator)'는 '만드는' 사람." },
  'full': { example: "The theater was full of people.", translation: "극장은 사람들로 가득 찼다.", mnemonic: "배가 '풀(full)'! '가득 찬'." },
  'contribution': { example: "He made a significant contribution to the project.", translation: "그는 그 프로젝트에 상당한 기여를 했다.", mnemonic: "'contribute(기여하다)'의 명사형, '기여, 기부'." },
  'emerge as': { example: "She emerged as a leader in the group.", translation: "그녀는 그룹에서 리더로 부상했다.", mnemonic: "'이머전시(emergency)'에 '나타나서(emerge)' 리더'로서 부상하다'." },
  'rapid': { example: "The city has experienced rapid growth.", translation: "그 도시는 급속한 성장을 경험했다.", mnemonic: "'래피드(rapid)'! '내 피'가 '급속하게' 돈다." },
  'pending': { example: "The decision is pending approval from the board.", translation: "그 결정은 이사회의 승인을 기다리고 있다.", mnemonic: "'펜'을 '들고' 사인만 하면 되는데... '미정의, 임박한'." },
  'comparatively': { example: "The test was comparatively easy.", translation: "그 시험은 비교적 쉬웠다.", mnemonic: "'compare(비교하다)'! '비교적'." },
  'application': { example: "The deadline for the application is tomorrow.", translation: "지원서 마감일은 내일입니다.", mnemonic: "어플(application)을 깔고 입사 '지원'하다." },
  'roughly': { example: "The project will take roughly six months.", translation: "그 프로젝트는 대략 6개월이 걸릴 것이다.", mnemonic: "'러프(rough)'하게, '대략'." },
  'perform': { example: "The band will perform live tonight.", translation: "그 밴드는 오늘 밤 라이브로 공연할 것이다.", mnemonic: "'퍼포먼스(performance)'! '공연하다'." },
  'a series of': { example: "We faced a series of challenges.", translation: "우리는 일련의 도전에 직면했다.", mnemonic: "드라마 '시리즈(series)'! '다양한, 일련의'." },
  'as a result of': { example: "He was late as a result of the traffic jam.", translation: "그는 교통 체증의 결과로 늦었다.", mnemonic: "'~의 결과로'." },
  'make up for': { example: "I'll work extra hours to make up for the lost time.", translation: "나는 손실된 시간을 만회하기 위해 추가 근무를 할 것이다.", mnemonic: "화장(makeup)으로 단점을 '보충하다'." },
  'lower': { example: "The company decided to lower its prices.", translation: "그 회사는 가격을 낮추기로 결정했다.", mnemonic: "'로우(low)'! '더 낮은'." },
  'contact': { example: "Please contact us if you have any questions.", translation: "질문이 있으시면 저희에게 연락 주세요.", mnemonic: "'콘택트(contact)' 렌즈! 눈에 '접촉하다, 연락하다'." },
  'build': { example: "They are building a new house.", translation: "그들은 새 집을 짓고 있다.", mnemonic: "'빌딩(building)'을 '짓다(build)'." },
  'basic': { example: "You need to learn the basic rules of the game.", translation: "너는 그 게임의 기본적인 규칙을 배워야 한다.", mnemonic: "'베이직(basic)'! '기본적인'." },
  'consult': { example: "You should consult a lawyer.", translation: "변호사와 상담해야 합니다.", mnemonic: "'컨설턴트(consultant)'에게 '상담하다'." },
  'neither': { example: "Neither of them is correct.", translation: "그들 둘 다 맞지 않다.", mnemonic: "'니(knee)'도 '더(ther)'러워! '둘 다 아니야'." },
  'separate': { example: "Please keep the two items separate.", translation: "두 물품을 분리해서 보관해 주세요.", mnemonic: "'세(se-떨어져) 퍼레이트(parate)'! 퍼레이드를 '분리해서' 하다." },
  'recipient': { example: "She was the recipient of the award.", translation: "그녀는 그 상의 수상자였다.", mnemonic: "'리시브(receive-받다)'! 받는 사람이 '수령인'." },
  'beyond': { example: "The town is just beyond those hills.", translation: "그 마을은 저 언덕 바로 너머에 있다.", mnemonic: "'비욘드(beyond)'! '저 너머에'." },
  'expense': { example: "The company covers all travel expenses.", translation: "회사는 모든 여행 비용을 부담한다.", mnemonic: "'익스펜시브(expensive)'! 비싼 물건을 사서 '비용'이 많이 들다." },
  'exceptionally': { example: "She is an exceptionally talented musician.", translation: "그녀는 특출나게 재능 있는 음악가이다.", mnemonic: "'exception(예외)'! 예외일 만큼 '특출나게'." },
  'reliably': { example: "The machine works reliably.", translation: "그 기계는 믿을 만하게 작동한다.", mnemonic: "'reliable(믿을 수 있는)'! '믿을 만하게'." },
  'eventually': { example: "He eventually succeeded in his goal.", translation: "그는 결국 목표를 달성했다.", mnemonic: "'이벤트(event)'의 '끝(ually)'! 이벤트가 끝나고 '결국에'." }
},
  
  gre: {
    'porcelain': {
      example: "The antique shop had a beautiful collection of porcelain vases.",
      translation: "그 골동품 가게에는 아름다운 자기 화병 컬렉션이 있었다.",
      mnemonic: "'포르쉐(Porsche)'를 '린(rin)'스! 포르쉐처럼 매끈한 '자기'."
    },
    'pore': {
      example: "She examined every pore of the document for errors.",
      translation: "그녀는 오류를 찾기 위해 문서의 모든 구멍(세세한 부분)을 조사했다.",
      mnemonic: "'포(four)'! 네 개의 '구멍'이 있다."
    },
    'porous': {
      example: "The porous soil quickly absorbed the rainwater.",
      translation: "다공성 토양은 빗물을 빠르게 흡수했다.",
      mnemonic: "'포(pore-구멍)'가 '어스(us)'! 우리에게 구멍이 많으니 '다공성의'."
    },
    'portent': {
      example: "The dark clouds were a portent of the coming storm.",
      translation: "검은 구름은 다가오는 폭풍의 전조였다.",
      mnemonic: "'포(for-미리) 텐트(tent)'! 폭풍의 '전조'가 보이니 미리 텐트를 쳐라."
    },
    'portentous': {
      example: "The portentous silence in the room suggested something bad was about to happen.",
      translation: "방 안의 불길한 침묵은 무언가 나쁜 일이 일어날 것임을 암시했다.",
      mnemonic: "'portent(전조)'! '불길한' 징조."
    },
    'portfolio': {
      example: "An artist's portfolio should showcase their best work.",
      translation: "예술가의 포트폴리오는 그들의 최고의 작품을 보여주어야 한다.",
      mnemonic: "디자이너의 '포트폴리오(portfolio)'! '작품집, 서류 가방'."
    },
    'portrait': {
      example: "The museum has a famous portrait of the queen.",
      translation: "그 박물관에는 여왕의 유명한 초상화가 있다.",
      mnemonic: "'포트레이트(portrait)'! '초상화'."
    },
    'poseur': {
      example: "He's a poseur who pretends to know a lot about art.",
      translation: "그는 예술에 대해 많이 아는 척하는 젠체하는 사람이다.",
      mnemonic: "'포즈(pose)'! 멋진 포즈만 취하며 '젠체하는 사람'."
    },
    'posit': {
      example: "The theory posits that the universe is expanding.",
      translation: "그 이론은 우주가 팽창하고 있다고 가정한다.",
      mnemonic: "'포지션(position)'! 그 위치에 있다고 '가정하다'."
    },
    'posterity': {
      example: "These records will be preserved for posterity.",
      translation: "이 기록들은 후대를 위해 보존될 것이다.",
      mnemonic: "'포스트(post-후)'! 우리 '후'의 세대, '자손, 후대'."
    },
    'postulate': {
      example: "Scientists postulate the existence of dark matter.",
      translation: "과학자들은 암흑 물질의 존재를 사실로 가정한다.",
      mnemonic: "'포스트(post)'잇에 써서 '사실로 가정하고 요구하다'."
    },
    'posture': {
      example: "He adopted a confident posture before the interview.",
      translation: "그는 면접 전에 자신감 있는 자세를 취했다.",
      mnemonic: "'포스터(poster)' 속 모델의 멋진 '자세(posture)'."
    },
    'pot': {
      example: "She cooked the soup in a large pot.",
      translation: "그녀는 큰 냄비에 수프를 요리했다.",
      mnemonic: "해리'포터(potter)'는 '단지'를 만드는 사람."
    },
    'potable': {
      example: "Is the tap water here potable?",
      translation: "여기 수돗물은 마시기에 적합한가요?",
      mnemonic: "'포트(pot)'에 '에이블(able)'! 단지에 담을 수 있으니 '마시기에 적합한'."
    },
    'potboiler': {
      example: "The author wrote a potboiler just to make some quick money.",
      translation: "그 작가는 빨리 돈을 벌기 위해 돈벌이용 작품을 썼다.",
      mnemonic: "'팟(pot)을 보일(boil)'! 냄비를 끓일(먹고 살) 돈을 벌기 위한 '돈벌이용 작품'."
    },
    'potentate': {
      example: "The potentate ruled the country with an iron fist.",
      translation: "그 군주는 철권으로 나라를 다스렸다.",
      mnemonic: "'포텐(potent)'이 터지는 '세력가, 군주'."
    },
    'potentiate': {
      example: "The drug potentiates the effects of alcohol.",
      translation: "그 약은 알코올의 효과를 높인다.",
      mnemonic: "'포텐(potent)'! 잠재력을 터뜨려 '효과를 높이다'."
    },
    'pout': {
      example: "The child pouted because he couldn't get the toy.",
      translation: "그 아이는 장난감을 가질 수 없어서 입을 삐죽거렸다.",
      mnemonic: "'파우트(pout)'! '파'하고 입술을 내밀며 '삐죽거리다'."
    },
    'prairie': {
      example: "Buffalo once roamed the vast American prairie.",
      translation: "들소들이 한때 광활한 미국의 대초원을 배회했다.",
      mnemonic: "'프레리(prairie)'! '대평원'."
    },
    'prate': {
      example: "He prated on for hours about his boring vacation.",
      translation: "그는 자신의 지루한 휴가에 대해 몇 시간 동안 재잘거렸다.",
      mnemonic: "'프레이(pray)'! 기도하듯이 끝없이 '재잘대다'."
    },
    'preach': {
      example: "The priest preached a sermon about forgiveness.",
      translation: "신부님은 용서에 대한 설교를 했다.",
      mnemonic: "'프리치(preach)'! '설교하다'."
    },
    'preamble': {
      example: "The preamble to the constitution outlines its main goals.",
      translation: "헌법 전문은 그것의 주요 목표를 요약한다.",
      mnemonic: "'프리(pre-미리) 앰블(amble-걷다)'! 본론에 앞서 미리 걸어가는 '서문'."
    },
    'precarious': {
      example: "The climber was in a precarious position on the cliff.",
      translation: "그 등반가는 절벽에서 불안정한 위치에 있었다.",
      mnemonic: "'프리(pre), 카(car) 리어스(rious)'! 차 앞에 서 있으니 '위험한'."
    },
    'precaution': {
      example: "They took precautions to prevent the spread of the disease.",
      translation: "그들은 질병의 확산을 막기 위해 예방 조치를 취했다.",
      mnemonic: "'프리(pre-미리) 코션(caution-주의)'! 미리 주의하니 '예방책'."
    },
    'precedent': {
      example: "This decision sets a new precedent for future cases.",
      translation: "이 결정은 미래의 사건들에 대한 새로운 전례를 세운다.",
      mnemonic: "'프리(pre-이전)'에 갔던(cedent) 길, '전례'."
    },
    'precipice': {
      example: "The car skidded and stopped at the edge of the precipice.",
      translation: "차는 미끄러져 절벽 가장자리에서 멈췄다.",
      mnemonic: "'프리(pre) 시피스(cipice)'! '미리' '시'야를 확보하지 않으면 '절벽'으로 떨어진다."
    },
    'precipitant': {
      example: "His precipitant decision led to disastrous results.",
      translation: "그의 성급한 결정은 비참한 결과를 낳았다.",
      mnemonic: "'프리(pre) 시피(cipi)'! 미리 '시비'를 거는 '경솔한' 행동."
    },
    'precipitate': {
      example: "The news precipitated a crisis in the stock market.",
      translation: "그 소식은 주식 시장에 위기를 재촉했다.",
      mnemonic: "비(precipitation)가 '곤두박질치다'."
    },
    'precipitation': {
      example: "The annual precipitation in this region is very low.",
      translation: "이 지역의 연간 강수량은 매우 낮다.",
      mnemonic: "비가 내리는 것, '강수량'."
    },
    'precipitous': {
      example: "The path down the mountain was steep and precipitous.",
      translation: "산을 내려가는 길은 가파르고 깎아지른 듯했다.",
      mnemonic: "'precipice(절벽)'처럼 '깎아지른 듯한'."
    },
    'precis': {
      example: "She wrote a one-page precis of the long report.",
      translation: "그녀는 그 긴 보고서의 한 페이지짜리 요약을 썼다.",
      mnemonic: "'프리(pre) 사이즈(size)'! 미리 사이즈를 줄여놓은 '요약'."
    },
    'preclude': {
      example: "His criminal record precludes him from getting a job.",
      translation: "그의 전과는 그가 직업을 얻는 것을 불가능하게 한다.",
      mnemonic: "'프리(pre-미리) 클루드(clude-닫다)'! 미리 문을 닫아 '가로막다'."
    },
    'precocity': {
      example: "The child's precocity was evident in her advanced vocabulary.",
      translation: "그 아이의 조숙함은 그녀의 높은 어휘 수준에서 명백했다.",
      mnemonic: "'프리(pre-미리) 콕(coc-cook)'! 미리 요리할 줄 알 만큼 '조숙함'."
    },
    'precursor': {
      example: "The harsh words were a precursor to a bigger fight.",
      translation: "그 거친 말들은 더 큰 싸움의 전조였다.",
      mnemonic: "'프리(pre-이전) 커서(cursor)'! 이전의 커서는 '선구자'였다."
    },
    'predecessor': {
      example: "The new CEO is trying to undo the mistakes of his predecessor.",
      translation: "새로운 CEO는 그의 전임자의 실수를 만회하려고 노력하고 있다.",
      mnemonic: "'프리(pre-이전)'에 갔던(decessor) 사람, '전임자'."
    },
    'predestine': {
      example: "He felt that he was predestined to be a great musician.",
      translation: "그는 위대한 음악가가 될 운명이라고 느꼈다.",
      mnemonic: "'프리(pre-미리) 데스티니(destiny-운명)'! '운명을 미리 정하다'."
    },
    'predilection': {
      example: "She has a predilection for spicy food.",
      translation: "그녀는 매운 음식에 대한 편애가 있다.",
      mnemonic: "'프리(pre-미리) 다이렉션(direction)'! 미리 방향이 정해진 '편애'."
    },
    'preeminent': {
      example: "She is the preeminent expert in her field.",
      translation: "그녀는 자기 분야에서 탁월한 전문가이다.",
      mnemonic: "'프리(pre-앞) 에미넌트(eminent-저명한)'! 저명한 사람들 중에서도 앞에 있으니 '탁월한'."
    },
    'preempt': {
      example: "The government preempted the land for a new highway.",
      translation: "정부는 새로운 고속도로를 위해 그 땅을 선점했다.",
      mnemonic: "'프리(pre-미리) 엠티(empty)'! 미리 비워서 '선점하다'."
    },
    'preen': {
      example: "The peacock preened its beautiful feathers.",
      translation: "공작은 자신의 아름다운 깃털을 다듬었다.",
      mnemonic: "'프린(preen)'세스처럼 거울 보며 '멋 부리다'."
    },
    'preface': {
      example: "The book has a preface written by a famous critic.",
      translation: "그 책에는 유명한 비평가가 쓴 서문이 있다.",
      mnemonic: "'프리(pre-앞) 페이스(face)'! 책의 얼굴, '서문'."
    },
    'prefigure': {
      example: "The early protests prefigured the revolution that followed.",
      translation: "초기의 시위들은 뒤따른 혁명을 예고했다.",
      mnemonic: "'프리(pre-미리) 피규어(figure)'! 미리 모습을 그려보니 '예상하다'."
    },
    'pregnant': {
      example: "Her silence was pregnant with meaning.",
      translation: "그녀의 침묵은 의미심장했다.",
      mnemonic: "아기를 '임신한(pregnant)' 것처럼 의미로 '가득 찬'."
    },
    'prehensile': {
      example: "Monkeys have prehensile tails.",
      translation: "원숭이는 무엇을 잡는 데 적합한 꼬리를 가지고 있다.",
      mnemonic: "'프리(pre) 핸(hen) 슬(sile)'! 미리 암탉을 '잡기에 적당한'."
    },
    'prejudice': {
      example: "We must fight against racial prejudice.",
      translation: "우리는 인종적 편견에 맞서 싸워야 한다.",
      mnemonic: "'프리(pre-미리) 저지(judge-판단)'! 미리 판단하는 '편견'."
    },
    'preliminary': {
      example: "This is just a preliminary report.",
      translation: "이것은 단지 예비 보고서일 뿐이다.",
      mnemonic: "'프리(pre-미리) 리미너리(liminary-문턱)'! 문턱을 넘기 전 '예비의'."
    },
    'premeditated': {
      example: "The police believe it was a premeditated murder.",
      translation: "경찰은 그것이 계획적인 살인이었다고 믿는다.",
      mnemonic: "'프리(pre-미리) 메디테이트(meditate-명상하다)'! 미리 명상하며 '계획된'."
    },
    'premonition': {
      example: "He had a premonition that something bad would happen.",
      translation: "그는 나쁜 일이 일어날 것이라는 예감이 들었다.",
      mnemonic: "'프리(pre-미리) 모니션(monition-경고)'! 미리 오는 경고, '예감'."
    },
    'preoccupation': {
      example: "His preoccupation with work is affecting his health.",
      translation: "그의 일에 대한 몰두가 그의 건강에 영향을 미치고 있다.",
      mnemonic: "'프리(pre-미리) 아큐페이션(occupation-직업)'! 직업을 갖기 전부터 '몰두'하다."
    },
    'preordain': {
      example: "Their tragic fate seemed preordained.",
      translation: "그들의 비극적인 운명은 예정된 것처럼 보였다.",
      mnemonic: "'프리(pre-미리) 오더(order-명령)'! 신이 미리 명령한 '운명'."
    },
    'preponderant': {
      example: "The preponderant opinion was in favor of the new law.",
      translation: "우세한 의견은 새 법안에 찬성하는 것이었다.",
      mnemonic: "'프리(pre-앞) 폰더(ponder-무게)'! 무게가 앞에 있으니 '우세한'."
    },
    'prepossessing': {
      example: "He was not a prepossessing man at first sight.",
      translation: "그는 첫인상에 매력적인 남자는 아니었다.",
      mnemonic: "'프리(pre-미리) 포제션(possessing-소유)'! 미리 마음을 소유할 만큼 '매력적인'."
    },
    'preposterous': {
      example: "The idea that the earth is flat is preposterous.",
      translation: "지구가 평평하다는 생각은 터무니없다.",
      mnemonic: "'프리(pre-앞) 포스트(post-뒤)'! 앞뒤가 바뀐 '상식을 벗어난'."
    },
    'prerogative': {
      example: "It's the manager's prerogative to hire new staff.",
      translation: "새로운 직원을 고용하는 것은 관리자의 특권이다.",
      mnemonic: "'프리(pre-먼저) 로게이티브(rogative-요구)'! 먼저 요구할 수 있는 '특권'."
    },
    'presage': {
      example: "The sudden drop in temperature could presage a storm.",
      translation: "갑작스러운 기온 하강은 폭풍의 전조일 수 있다.",
      mnemonic: "'프리(pre-미리) 세이지(sage-현자)'! 현자가 미리 알려주는 '전조'."
    },
    'prescience': {
      example: "Her prescience about the market crash saved her a lot of money.",
      translation: "시장 붕괴에 대한 그녀의 예지력은 그녀에게 많은 돈을 절약하게 해주었다.",
      mnemonic: "'프리(pre-미리) 사이언스(science-앎)'! 미리 아는 것, '예지'."
    },
    'prescription': {
      example: "You need a doctor's prescription to buy this medicine.",
      translation: "이 약을 사려면 의사의 처방전이 필요합니다.",
      mnemonic: "'프리(pre-미리) 스크립트(script-쓰다)'! 약을 받기 전 미리 써주는 '처방전'."
    },
    'presentiment': {
      example: "She had a presentiment of danger.",
      translation: "그녀는 위험에 대한 예감이 들었다.",
      mnemonic: "'프리(pre-미리) 센티먼트(sentiment-감정)'! 미리 느끼는 감정, '예감'."
    },
    'preservative': {
      example: "This juice contains no artificial preservatives.",
      translation: "이 주스에는 인공 방부제가 들어있지 않습니다.",
      mnemonic: "'프리저브(preserve-보존하다)'! 보존하게 해주는 '방부제'."
    },
    'press': {
      example: "The press reported on the scandal.",
      translation: "언론은 그 스캔들에 대해 보도했다.",
      mnemonic: "인쇄기(press)로 찍어내는 '언론'."
    },
    'prestige': {
      example: "The company has gained a lot of prestige in recent years.",
      translation: "그 회사는 최근 몇 년간 많은 명성을 얻었다.",
      mnemonic: "'프레스티지(prestige)'! '명성'."
    },
    'presumptuous': {
      example: "It was presumptuous of him to ask for a loan.",
      translation: "그가 대출을 요구한 것은 뻔뻔스러운 짓이었다.",
      mnemonic: "'프리(pre-미리) 섬(sume-취하다)'! 미리 자기 것이라고 취하니 '뻔뻔스러운'."
    },
    'pretend': {
      example: "He pretended to be asleep.",
      translation: "그는 잠든 척했다.",
      mnemonic: "'프리텐드(pretend)'! '~인 척하다'."
    },
    'pretense': {
      example: "He made a pretense of being busy.",
      translation: "그는 바쁜 척했다.",
      mnemonic: "'프리텐드(pretend)'의 명사형, '겉치레, 속임수'."
    },
    'preternatural': {
      example: "She has a preternatural ability to predict the future.",
      translation: "그녀는 미래를 예측하는 초자연적인 능력을 가지고 있다.",
      mnemonic: "'프리터(preter-넘어) 내추럴(natural-자연)'! 자연을 넘어선, '초자연적인'."
    },
    'prevail': {
      example: "Justice will prevail in the end.",
      translation: "정의는 결국 승리할 것이다.",
      mnemonic: "'프리(pre-앞) 베일(vail-가치)'! 가치가 앞에 있으니 '우세하다, 널리 퍼지다'."
    },
    'prevalent': {
      example: "That belief is prevalent among young people.",
      translation: "그 믿음은 젊은이들 사이에 널리 퍼져 있다.",
      mnemonic: "'prevail'의 형용사형, '널리 퍼진'."
    },
    'prevaricate': {
      example: "He seemed to prevaricate when asked about his past.",
      translation: "그는 자신의 과거에 대해 질문을 받았을 때 얼버무리는 것 같았다.",
      mnemonic: "'프리(pre-미리) 바리케이트(varicate)'! 미리 바리케이드를 치며 '얼버무리다'."
    },
    'prickly': {
      example: "The cactus has a prickly surface.",
      translation: "선인장은 가시가 많은 표면을 가지고 있다.",
      mnemonic: "'프리클리(prickly)'! '프리'하게 '클' 수 없는 '가시 많은' 환경."
    },
    'primordial': {
      example: "Life began in the primordial soup of the ancient oceans.",
      translation: "생명은 고대 바다의 원시 수프에서 시작되었다.",
      mnemonic: "'프라임(prime-최초) 오더(order)'! '최초의' 질서."
    },
    'prim': {
      example: "She is a very prim and proper lady.",
      translation: "그녀는 매우 꼼꼼하고 단정한 숙녀이다.",
      mnemonic: "'프림(prim)'! 커피 프림처럼 '꼼꼼하게' 양을 조절하다."
    },
    'prime': {
      example: "This is a prime example of his work.",
      translation: "이것은 그의 작품의 주요한 예이다.",
      mnemonic: "아마존 '프라임(prime)'! '최고의' 서비스."
    },
    'principal': {
      example: "The principal reason for the delay was bad weather.",
      translation: "지연의 주된 이유는 악천후였다.",
      mnemonic: "'프린서플(principal)'! 학교의 '주요한' 인물, 교장."
    },
    'prissy': {
      example: "He is too prissy to enjoy camping.",
      translation: "그는 너무 까다로워서 캠핑을 즐기지 못한다.",
      mnemonic: "'프린세스(princess)'처럼 '까다로운'."
    },
    'pristine': {
      example: "The beach was pristine and beautiful.",
      translation: "그 해변은 오염되지 않고 아름다웠다.",
      mnemonic: "'프리스틴(pristine)'! '프리'하게 '스틴(stain-얼룩)'! 얼룩이 없으니 '오염되지 않은'."
    },
    'privation': {
      example: "They suffered years of privation during the war.",
      translation: "그들은 전쟁 동안 수년간의 궁핍을 겪었다.",
      mnemonic: "'프라이빗(private)'! 사적인 것마저 빼앗긴 '궁핍'."
    },
    'privilege': {
      example: "Education should be a right, not a privilege.",
      translation: "교육은 특권이 아니라 권리여야 한다.",
      mnemonic: "'프리빌리지(privilege)'! '특권'."
    },
    'probe': {
      example: "The investigators will probe into the cause of the accident.",
      translation: "조사관들은 사고의 원인을 철저히 조사할 것이다.",
      mnemonic: "'프로브(probe)'! 스타크래프트의 정찰 유닛, '조사하다'."
    },
    'probity': {
      example: "He is a man of great probity.",
      translation: "그는 매우 청렴한 사람이다.",
      mnemonic: "'프로 비티(probity)'! 프로는 '정직'과 '청렴'을 보여줘야 해."
    },
    'proclivity': {
      example: "He has a proclivity for making friends easily.",
      translation: "그는 쉽게 친구를 사귀는 경향이 있다.",
      mnemonic: "'프로(pro-앞으로) 클리비티(clivity-기울다)'! 앞으로 기우는 '성향'."
    },
    'procrastinate': {
      example: "Stop procrastinating and do your homework.",
      translation: "꾸물거리지 말고 숙제해라.",
      mnemonic: "'프로(pro) 크래스(cras-내일)'! 프로는 일을 내일로 미루며 '꾸물거리다'."
    },
    'procure': {
      example: "She managed to procure a ticket for the concert.",
      translation: "그녀는 그 콘서트 티켓을 간신히 구했다.",
      mnemonic: "'프로 큐어(procure)'! 프로답게 치료제를 '획득하다'."
    },
    'prod': {
      example: "She prodded him in the ribs to wake him up.",
      translation: "그녀는 그를 깨우기 위해 그의 옆구리를 쿡 찔렀다.",
      mnemonic: "'프로듀서(producer)'가 가수를 '자극하고 격려하다'."
    },
    'prodigal': {
      example: "The prodigal son wasted all his money.",
      translation: "그 탕자는 모든 돈을 낭비했다.",
      mnemonic: "'프로(pro) 뒤 갈(gal)'! 프로는 뒤로 돈을 '낭비하는'."
    },
    'prodigious': {
      example: "He has a prodigious memory.",
      translation: "그는 거대한 기억력을 가지고 있다.",
      mnemonic: "'프로 뒤졌으(prodigious)'! 프로가 뒤져보니 '거대한' 보물이 나왔다."
    },
    'prodigy': {
      example: "Mozart was a musical prodigy.",
      translation: "모차르트는 음악 신동이었다.",
      mnemonic: "'프로디지(prodigy)'! '천재, 신동'."
    },
    'profane': {
      example: "It is a profane act to vandalize a church.",
      translation: "교회를 파손하는 것은 신성 모독 행위이다.",
      mnemonic: "'프로(pro) 페인(fane-신전)'! 신전 앞에서 프로답지 못하게 '신성 모독하다'."
    },
    'proffer': {
      example: "He proffered his hand in friendship.",
      translation: "그는 우정의 표시로 손을 내밀었다.",
      mnemonic: "'프로(pro)'가 '오퍼(offer)'! 프로답게 '제의하다'."
    },
    'proficient': {
      example: "She is proficient in several languages.",
      translation: "그녀는 여러 언어에 능숙하다.",
      mnemonic: "'프로(pro) 피션트(ficient-만들다)'! 프로처럼 만드니 '숙련된'."
    },
    'profligate': {
      example: "He led a profligate lifestyle.",
      translation: "그는 방탕한 생활을 했다.",
      mnemonic: "'프로(pro) 풀리 게이트(gate)'! 프로가 돈을 풀어서 게이트를 여니 '낭비하는'."
    },
    'profundity': {
      example: "The book is full of profundity and wisdom.",
      translation: "그 책은 심오함과 지혜로 가득 차 있다.",
      mnemonic: "'프로(pro) 파운드(found)'! 프로가 발견한 '심오함'."
    },
    'profuse': {
      example: "He offered profuse apologies for his mistake.",
      translation: "그는 자신의 실수에 대해 많은 사과를 했다.",
      mnemonic: "'프로(pro) 퓨즈(fuse)'! 프로가 퓨즈를 많이 쓰니 '풍부한'."
    },
    'profusion': {
      example: "The garden was a profusion of color.",
      translation: "그 정원은 색깔이 풍부했다.",
      mnemonic: "'profuse(풍부한)'의 명사형, '풍부'."
    },
    'prohibitive': {
      example: "The cost of the new drug is prohibitive for many people.",
      translation: "그 신약의 가격은 많은 사람들에게 터무니없이 비싸다.",
      mnemonic: "'prohibit(금지하다)'! 금지할 만큼 '터무니없는' 가격."
    },
    'projection': {
      example: "The sales projection for next year is very optimistic.",
      translation: "내년도 매출 추정치는 매우 낙관적이다.",
      mnemonic: "빔 '프로젝터(projector)'는 '투사'하는 기계."
    },
    'proliferate': {
      example: "Rumors about the scandal began to proliferate.",
      translation: "그 스캔들에 대한 소문이 급증하기 시작했다.",
      mnemonic: "'프로(pro) 라이프(life)'! 생명이 앞으로 나아가니 '증식하다'."
    },
    'prolific': {
      example: "She is a prolific writer, with over 50 novels.",
      translation: "그녀는 50편이 넘는 소설을 쓴 다작 작가이다.",
      mnemonic: "'프로(pro) 라이프(life)'! 생명을 많이 낳으니 '다산의, 다작의'."
    },
    'prologue': {
      example: "The prologue of the play sets the scene for the story.",
      translation: "그 연극의 서두는 이야기의 배경을 설정한다.",
      mnemonic: "'프로(pro-앞) 로그(logue-말)'! 앞에서 먼저 하는 말, '서두'."
    },
    'prolong': {
      example: "They decided to prolong their stay by another week.",
      translation: "그들은 체류를 일주일 더 연장하기로 결정했다.",
      mnemonic: "'프로(pro) 롱(long)'! 앞으로 '길게' 만드니 '연장하다'."
    },
    'prominent': {
      example: "She is a prominent figure in the fashion industry.",
      translation: "그녀는 패션 업계에서 저명한 인물이다.",
      mnemonic: "'프로(pro) 미는(minent)'! 앞으로 밀어줄 만큼 '두드러진, 유명한'."
    },
    'promote': {
      example: "The company is promoting its new product.",
      translation: "그 회사는 신제품을 홍보하고 있다.",
      mnemonic: "'프로(pro-앞으로) 모트(mote-움직이다)'! 앞으로 움직이게 하니 '진척시키다, 승진시키다'."
    },
    'promulgate': {
      example: "The new law was promulgated in January.",
      translation: "새로운 법은 1월에 공표되었다.",
      mnemonic: "'프로(pro) 멀게'이트! 프로가 멀리까지 알리도록 '공표하다'."
    },
    'proofread': {
      example: "Please proofread your essay for any spelling mistakes.",
      translation: "철자 오류가 있는지 에세이를 교정하세요.",
      mnemonic: "'프루프(proof-증거)'를 '리드(read)'! 증거를 읽듯이 꼼꼼하게 '교정하다'."
    },
    'propagate': {
      example: "The organization tries to propagate its ideas.",
      translation: "그 단체는 자신들의 사상을 전파하려고 노력한다.",
      mnemonic: "'프로(pro) 파게이트(gate)'! 프로가 문을 열어 지식을 '널리 퍼뜨리다'."
    },
    'propensity': {
      example: "He has a propensity to exaggerate.",
      translation: "그는 과장하는 경향이 있다.",
      mnemonic: "'프로(pro) 펜 시티(city)'! 프로는 펜으로 도시를 그리는 '경향'이 있다."
    },
    'prophecy': {
      example: "His prophecy of a great disaster came true.",
      translation: "큰 재앙에 대한 그의 예언은 실현되었다.",
      mnemonic: "'프로(pro) 페시(phesy)'! 프로가 미리 말하는 '예언'."
    },
    'prophetic': {
      example: "Her words proved to be prophetic.",
      translation: "그녀의 말은 예언적인 것으로 증명되었다.",
      mnemonic: "'prophecy(예언)'의 형용사형, '예언하는'."
    },
    'prophylactic': {
      example: "Vaccines are a prophylactic measure against diseases.",
      translation: "백신은 질병에 대한 예방 조치이다.",
      mnemonic: "'프로(pro) 파일(phylac) 틱(tic)'! 프로는 파일을 미리 막는 '예방의' 조치를 취한다."
    },
    'propitiate': {
      example: "They made a sacrifice to propitiate the gods.",
      translation: "그들은 신들을 달래기 위해 제물을 바쳤다.",
      mnemonic: "'프로(pro) 피씨(piti) 에이트(ate)'! 프로가 PC를 먹여 신을 '달래다'."
    },
    'propitious': {
      example: "It was a propitious time to start a new business.",
      translation: "새로운 사업을 시작하기에 길조의 시기였다.",
      mnemonic: "'프로(pro) 피셔스(pitious)'! 프로 낚시꾼에게는 '길조의' 날씨."
    },
    'proponent': {
      example: "He is a leading proponent of free trade.",
      translation: "그는 자유 무역의 선도적인 지지자이다.",
      mnemonic: "'프로(pro-앞) 포넌트(ponent-놓다)'! 앞에 나서서 의견을 놓는 '지지자'."
    },
    'proposal': {
      example: "The committee is considering the proposal.",
      translation: "위원회는 그 제안을 고려하고 있다.",
      mnemonic: "'propose(제안하다)'의 명사형, '제안'."
    },
    'propriety': {
      example: "She behaved with the utmost propriety.",
      translation: "그녀는 최대한의 예의 바름으로 행동했다.",
      mnemonic: "'프로퍼(proper-적절한)'! 적절한 행동, '예의 바름'."
    },
    'prosaic': {
      example: "His speech was long and prosaic.",
      translation: "그의 연설은 길고 평범했다.",
      mnemonic: "'프로(pro) 작(saic)'가! 프로 작가도 때로는 '평범하고 재미없는' 글을 쓴다."
    },
    'proscribe': {
      example: "The new law proscribes the use of certain chemicals.",
      translation: "새 법은 특정 화학 물질의 사용을 금지한다.",
      mnemonic: "'프로(pro-앞) 스크라이브(scribe-쓰다)'! 앞에 '금지'라고 써놓다."
    },
    'prose': {
      example: "She writes beautiful prose.",
      translation: "그녀는 아름다운 산문을 쓴다.",
      mnemonic: "'프로(pro)' 작가가 쓰는 '산문(prose)'."
    },
    'prosecute': {
      example: "The company was prosecuted for violating environmental laws.",
      translation: "그 회사는 환경법 위반으로 기소되었다.",
      mnemonic: "'프로(pro) 시큐트(secute-따르다)'! 법을 따라 끝까지 추적하여 '기소하다'."
    },
    'prosecution': {
      example: "The prosecution presented strong evidence against him.",
      translation: "검찰은 그에 대한 강력한 증거를 제시했다.",
      mnemonic: "'prosecute(기소하다)'의 명사형, '기소'."
    },
    'proselytize': {
      example: "He was trying to proselytize his friends to his new religion.",
      translation: "그는 친구들을 자신의 새로운 종교로 개종시키려고 노력했다.",
      mnemonic: "'프로(pro) 셀(sell) 라이트(light)'! 프로가 빛을 팔며 '개종시키다'."
    },
    'prospect': {
      example: "The prospect of a long journey did not excite her.",
      translation: "장거리 여행에 대한 전망이 그녀를 들뜨게 하지 않았다.",
      mnemonic: "'프로(pro-앞) 스펙트(spect-보다)'! 앞을 내다보는 '전망, 가능성'."
    },
    'prosperous': {
      example: "The country has become very prosperous.",
      translation: "그 나라는 매우 번영하게 되었다.",
      mnemonic: "'프로(pro) 스포츠(sports)'는 '번영하는' 산업."
    },
    'prostrate': {
      example: "He was prostrate with grief.",
      translation: "그는 슬픔으로 몸을 가누지 못했다.",
      mnemonic: "'프로(pro) 스트레이트(strate)'! 프로 선수가 스트레이트로 맞아 '엎드리다'."
    },
    'protagonist': {
      example: "The protagonist of the novel is a young detective.",
      translation: "그 소설의 주인공은 젊은 탐정이다.",
      mnemonic: "'프로(pro-앞) 아고니스트(agonist-싸우는 사람)'! 앞에서 싸우는 '주인공'."
    },
    'protean': {
      example: "He is a protean actor who can play any role.",
      translation: "그는 어떤 역할이든 소화할 수 있는 변화무쌍한 배우이다.",
      mnemonic: "'프로틴(protein)'! 단백질처럼 형태가 '변화무쌍한'."
    },
    'protest': {
      example: "They held a protest against the new law.",
      translation: "그들은 새 법에 반대하는 시위를 벌였다.",
      mnemonic: "'프로(pro) 테스트(test)'! 프로 선수들이 약물 테스트에 '항의하다'."
    },
    'protocol': {
      example: "Diplomatic protocol must be followed strictly.",
      translation: "외교 의례는 엄격히 지켜져야 한다.",
      mnemonic: "'프로토콜(protocol)'! 컴퓨터 통신 '규약, 의례'."
    },
    'protract': {
      example: "The negotiations were protracted for weeks.",
      translation: "그 협상은 몇 주 동안 오래 끌었다.",
      mnemonic: "'프로(pro-앞으로) 트랙트(tract-끌다)'! 앞으로 쭉 끄니 '연장하다'."
    },
    'protrude': {
      example: "A nail was protruding from the wall.",
      translation: "못이 벽에서 튀어나와 있었다.",
      mnemonic: "'프로(pro-앞으로) 트루드(trude-밀다)'! 앞으로 밀려나와 '튀어나오다'."
    },
    'protrusion': {
      example: "There was a small protrusion on the surface.",
      translation: "표면에 작은 돌출부가 있었다.",
      mnemonic: "'protrude(튀어나오다)'의 명사형, '돌출'."
    },
    'protuberant': {
      example: "He had a protuberant belly.",
      translation: "그는 배가 툭 튀어나왔다.",
      mnemonic: "'프로(pro) 튜버(tuber-혹)'! 혹처럼 앞으로 '돌출한'."
    },
    'providence': {
      example: "They believe that their survival was an act of providence.",
      translation: "그들은 자신들의 생존이 신의 섭리였다고 믿는다.",
      mnemonic: "'프로바이드(provide)'! 신이 미리 보고 제공하는 '섭리'."
    },
    'provident': {
      example: "She is a provident planner, always saving for the future.",
      translation: "그녀는 항상 미래를 위해 저축하는 장래를 대비하는 계획가이다.",
      mnemonic: "'providence(선견지명)'! 선견지명이 있으니 '장래를 대비하는'."
    },
    'providential': {
      example: "His arrival at that moment was providential.",
      translation: "그 순간 그의 도착은 천우신조였다.",
      mnemonic: "'providence(섭리)'! 신의 섭리 같은 '운 좋은'."
    },
    'provincial': {
      example: "He has a very provincial attitude.",
      translation: "그는 매우 촌스러운 태도를 가지고 있다.",
      mnemonic: "'프로방스(Provence)'! 프랑스 '시골'의 '지방적인' 풍경."
    },
    'provisional': {
      example: "The government is a provisional one.",
      translation: "그 정부는 임시 정부이다.",
      mnemonic: "'프로(pro) 비전(vision)'! 정식 비전이 나오기 전의 '임시적인' 계획."
    },
    'proviso': {
      example: "He agreed to the contract with the proviso that he could work from home.",
      translation: "그는 재택근무를 할 수 있다는 조건으로 계약에 동의했다.",
      mnemonic: "'프로(pro) 바이 조(by zo)'! 프로가 되려면 이 '단서, 조건'을 지켜야 해."
    },
    'provisory': {
      example: "The agreement is provisory and depends on the final vote.",
      translation: "그 합의는 조건부이며 최종 투표에 달려 있다.",
      mnemonic: "'proviso(단서)'! '조건부의'."
    },
    'provoke': {
      example: "His comments provoked a lot of anger.",
      translation: "그의 발언은 많은 분노를 유발했다.",
      mnemonic: "'프로(pro) 보크(voke-부르다)'! 앞으로 불러내 '자극하다, 화나게 하다'."
    },
    'prowess': {
      example: "He is famous for his prowess in battle.",
      translation: "그는 전투에서의 용맹함으로 유명하다.",
      mnemonic: "'프로(pro) 왜' 쓰겠어? '탁월한 기량'이 있으니까."
    },
    'prowl': {
      example: "The tiger was prowling in the jungle.",
      translation: "호랑이가 정글을 헤매고 있었다.",
      mnemonic: "'프라울(prowl)'! '풀' 속을 '헤매다'."
    },
    'proximal': {
      example: "The injury was to the proximal part of the bone.",
      translation: "부상은 뼈의 몸 중심에 가까운 부분에 있었다.",
      mnemonic: "'approximate(가까운)'! '가까운'."
    },
    'proximity': {
      example: "The proximity of the hotel to the beach is a great advantage.",
      translation: "호텔이 해변과 가깝다는 것은 큰 장점이다.",
      mnemonic: "'approximate(가까운)'! '가까움'."
    },
    'prude': {
      example: "She was considered a prude by her more adventurous friends.",
      translation: "그녀는 더 모험적인 친구들에게 얌전한 체하는 사람으로 여겨졌다.",
      mnemonic: "'프루드(prude)'! '푸'하고 웃지도 않는 '얌전한 체하는 사람'."
    },
    'prudent': {
      example: "It is prudent to save money for the future.",
      translation: "미래를 위해 돈을 저축하는 것은 신중한 일이다.",
      mnemonic: "'프루(pru)던트(dent)'! '풀'어 '던'지기 전에 '신중한' 생각."
    },
    'prudish': {
      example: "She has very prudish views on relationships.",
      translation: "그녀는 관계에 대해 매우 얌전빼는 견해를 가지고 있다.",
      mnemonic: "'prude(얌전한 체하는 사람)'! '몹시 얌전빼는'."
    },
    'prune': {
      example: "You should prune the dead branches from the tree.",
      translation: "나무에서 죽은 가지들을 잘라내야 한다.",
      mnemonic: "'프룬(prune)'! '말린 자두'를 만들기 위해 가지를 '잘라내다'."
    },
    'pry': {
      example: "I don't want to pry, but are you okay?",
      translation: "꼬치꼬치 캐묻고 싶지는 않지만, 괜찮으세요?",
      mnemonic: "'프라이(fry)'! 프라이팬에 기름 튀듯 '꼬치꼬치 캐묻다'."
    },
    'pseudonym': {
      example: "The author wrote under a pseudonym.",
      translation: "그 작가는 필명으로 글을 썼다.",
      mnemonic: "'수도(pseudo-가짜) 님(nym-이름)'! '가짜 이름, 가명'."
    },
    'psychology': {
      example: "She is studying psychology at university.",
      translation: "그녀는 대학에서 심리학을 공부하고 있다.",
      mnemonic: "'사이코(psycho)'! '심리학'."
    },
    'pucker': {
      example: "He puckered his lips for a kiss.",
      translation: "그는 키스를 하려고 입술을 오므렸다.",
      mnemonic: "'퍽'하고 '커'지면서 '주름지게 하다'."
    },
    'puckish': {
      example: "He had a puckish sense of humor.",
      translation: "그는 장난기 있는 유머 감각을 가지고 있었다.",
      mnemonic: "'퍽' 치는 '장난꾸러기'."
    },
    'puerile': {
      example: "I find his jokes puerile and offensive.",
      translation: "나는 그의 농담이 유치하고 불쾌하다고 생각한다.",
      mnemonic: "'퓨어(pure)'! 너무 순수해서 '유치한'."
    },
    'pugnacious': {
      example: "The pugnacious dog was always starting fights.",
      translation: "그 싸우기 좋아하는 개는 항상 싸움을 시작했다.",
      mnemonic: "'퍽' 내셨으! 퍽하고 때리며 '싸우기 좋아하는'."
    },
    'puissance': {
      example: "The king demonstrated his puissance in battle.",
      translation: "왕은 전투에서 자신의 권력을 과시했다.",
      mnemonic: "'푸'와 '상'스! 푸와 친구들은 '권력'이 세다."
    },
    'pulchritude': {
      example: "The judges were captivated by her pulchritude.",
      translation: "심사위원들은 그녀의 미모에 사로잡혔다.",
      mnemonic: "'풀' 크리 튜드! '풀' 메이크업한 아름다운 '미모'."
    },
    'pullet': {
      example: "The farmer raised pullets for their eggs.",
      translation: "그 농부는 달걀을 얻기 위해 어린 암탉을 길렀다.",
      mnemonic: "'풀'을 '렛(let)'! 풀을 뜯게 놔두는 '어린 암탉'."
    },
    'pulverize': {
      example: "The machine pulverizes rocks into fine powder.",
      translation: "그 기계는 바위를 고운 가루로 만든다.",
      mnemonic: "'풀' 버라이어티! 풀을 '가루로 만들다'."
    },
    'pun': {
      example: "He loves making terrible puns.",
      translation: "그는 끔찍한 말장난하는 것을 좋아한다.",
      mnemonic: "'펀(fun)'! 재미있는 '말장난'."
    },
    'punch': {
      example: "The comedian's punch line made everyone laugh.",
      translation: "그 코미디언의 결정적인 말이 모두를 웃게 했다.",
      mnemonic: "'펀치(punch)'! '결정적인 한 방'."
    },
    'punch line': {
      example: "The punch line of the joke was unexpected.",
      translation: "그 농담의 결정적인 말은 예상치 못했다.",
      mnemonic: "'펀치'를 날리는 '라인'! '결정적인 말'."
    },
    'punctilious': {
      example: "He is very punctilious about his work.",
      translation: "그는 자신의 일에 대해 매우 꼼꼼하다.",
      mnemonic: "'펑크(punc)'가 '틸리'만큼도 없도록 '꼼꼼한'."
    },
    'puncture': {
      example: "A nail punctured the tire.",
      translation: "못이 타이어에 구멍을 냈다.",
      mnemonic: "'펑크(punc)'! '구멍을 뚫다'."
    },
    'pundit': {
      example: "A political pundit commented on the election results.",
      translation: "한 정치 전문가가 선거 결과에 대해 논평했다.",
      mnemonic: "'펀(fun)'하고 '디테일'하게 설명하는 '대학자'."
    },
    'pungent': {
      example: "The pungent smell of onions made my eyes water.",
      translation: "양파의 톡 쏘는 냄새 때문에 눈물이 났다.",
      mnemonic: "'펑'하고 '전'기가 튀는 '톡 쏘는' 맛."
    },
    'punitive': {
      example: "The government imposed punitive measures against the company.",
      translation: "정부는 그 회사에 징벌적 조치를 부과했다.",
      mnemonic: "'퍼니쉬(punish-벌하다)'! '형벌의'."
    },
    'puny': {
      example: "He felt puny compared to the huge bodyguard.",
      translation: "그는 거대한 경호원에 비해 자신이 왜소하다고 느꼈다.",
      mnemonic: "'퓨'하고 바람 빠지는 '왜소한' 몸."
    },
    'purchase': {
      example: "This machine provides extra purchase for lifting heavy objects.",
      translation: "이 기계는 무거운 물건을 들어 올리는 데 추가적인 힘이 되는 것을 제공한다.",
      mnemonic: "물건을 '구매(purchase)'할 때 '힘이 되는 것'은 돈이다."
    },
    'purebred': {
      example: "She owns a purebred poodle.",
      translation: "그녀는 순종 푸들을 소유하고 있다.",
      mnemonic: "'퓨어(pure-순수한) 브레드(bred-혈통)'! '순종의'."
    },
    'purgatory': {
      example: "According to the belief, souls stay in purgatory before entering heaven.",
      translation: "그 믿음에 따르면, 영혼들은 천국에 들어가기 전에 연옥에 머문다.",
      mnemonic: "'펄(purge-정화하다)' 게이트! 정화의 문, '연옥'."
    },
    'purist': {
      example: "As a purist, he only listens to classical music.",
      translation: "순수주의자로서, 그는 클래식 음악만 듣는다.",
      mnemonic: "'퓨어(pure)'! '순수주의자'."
    },
    'purity': {
      example: "The purity of the water is tested regularly.",
      translation: "물의 순도는 정기적으로 검사된다.",
      mnemonic: "'pure(순수한)'의 명사형, '순수'."
    },
    'purlieu': {
      example: "They lived in the purlieus of the city.",
      translation: "그들은 도시의 변두리에 살았다.",
      mnemonic: "'펄(pur) 류(lieu-장소)'! 펄펄 나는 새들이 사는 '변두리'."
    },
    'purloin': {
      example: "He was caught purloining office supplies.",
      translation: "그는 사무용품을 훔치다 걸렸다.",
      mnemonic: "'펄(purr)' 소리 내는 고양이처럼 살금살금 '훔치다'."
    },
    'purpose': {
      example: "What is the purpose of your visit?",
      translation: "방문 목적이 무엇인가요?",
      mnemonic: "'퍼포즈(purpose)'! '목적'."
    },
    'purvey': {
      example: "The company purveys food to the army.",
      translation: "그 회사는 군대에 식량을 공급한다.",
      mnemonic: "'퍼(per-완전히) 베이(vey-나르다)'! 완벽하게 날라서 '공급하다'."
    },
    'pusillanimous': {
      example: "The pusillanimous soldier ran away from the battle.",
      translation: "그 소심한 군인은 전투에서 도망쳤다.",
      mnemonic: "'푸시(push)'하면 '일' 낼 것 같은 '소심한'."
    },
    'putative': {
      example: "He is the putative leader of the group.",
      translation: "그는 그 그룹의 추정상의 리더이다.",
      mnemonic: "'풋(put)'! 그냥 그렇게 놓여진, '소문에 들리는'."
    },
    'putrefaction': {
      example: "The smell of putrefaction was overwhelming.",
      translation: "부패하는 냄새가 압도적이었다.",
      mnemonic: "'퓨트리드(putrid-썩은)'! '부패'."
    },
    'quack': {
      example: "The quack sold fake medicines to sick people.",
      translation: "그 돌팔이 의사는 아픈 사람들에게 가짜 약을 팔았다.",
      mnemonic: "'꽥(quack)'! 오리처럼 꽥꽥대기만 하는 '돌팔이 의사'."
    },
    'quaff': {
      example: "He quaffed the entire mug of beer in one gulp.",
      translation: "그는 맥주 한 잔을 단숨에 들이켰다.",
      mnemonic: "'콸콸(quaff)'! '단숨에 들이켜다'."
    },
    'quail': {
      example: "The young boy quailed at the sight of the angry dog.",
      translation: "그 어린 소년은 화난 개를 보고 움츠렸다.",
      mnemonic: "'퀘일(quail)'! '깨'갱하며 '움츠리다'."
    },
    'quaint': {
      example: "We stayed in a quaint little cottage in the countryside.",
      translation: "우리는 시골의 기이하고 예스러운 작은 오두막에 머물렀다.",
      mnemonic: "'크, 인트(quaint)'레스팅! '기이하고' 흥미롭네."
    },
    'qualified': {
      example: "The offer is qualified and depends on the final inspection.",
      translation: "그 제안은 조건부이며 최종 검사에 달려 있다.",
      mnemonic: "'퀄리파이(qualify-자격을 주다)'! 자격이 있지만 '조건부의'."
    },
    'qualm': {
      example: "He had no qualms about lying to the police.",
      translation: "그는 경찰에게 거짓말하는 것에 대해 아무런 거리낌이 없었다.",
      mnemonic: "'쾀(qualm)'! '코'에 '암'이 생길까 봐 '꺼림칙함'."
    },
    'quandary': {
      example: "I'm in a quandary about whether to accept the job offer.",
      translation: "나는 그 일자리 제안을 수락해야 할지 진퇴양난에 빠져 있다.",
      mnemonic: "'퀀(quan) 더리(dary)'! '관' 둘까 '더' 할까 '진퇴양난'."
    },
    'quarantine': {
      example: "The ship was put in quarantine for two weeks.",
      translation: "그 배는 2주 동안 격리되었다.",
      mnemonic: "'쿼런틴(quarantine)'! '격리'."
    },
    'quarry': {
      example: "The police are looking for their quarry.",
      translation: "경찰은 그들의 추적 대상(사냥감)을 찾고 있다.",
      mnemonic: "'쿼리(query)'! 질문을 던지며 지식을 '찾다'."
    },
    'quartet': {
      example: "A string quartet was playing at the wedding.",
      translation: "결혼식에서 현악 4중주단이 연주하고 있었다.",
      mnemonic: "'쿼터(quarter-4분의 1)'! '4중주단'."
    },
    'quash': {
      example: "The rebellion was quickly quashed by the army.",
      translation: "반란은 군대에 의해 신속하게 진압되었다.",
      mnemonic: "'꽉' 눌러 '진압하다'."
    },
    'quatrain': {
      example: "The poem consists of four quatrains.",
      translation: "그 시는 4개의 4행 연구로 구성되어 있다.",
      mnemonic: "'쿼터(quarter-4)' + '레인(rain)'! 4줄의 비, '4행 연구'."
    },
    'quaver': {
      example: "His voice quavered with emotion.",
      translation: "그의 목소리는 감정으로 떨렸다.",
      mnemonic: "'퀘이크(quake-떨다)'! 지진처럼 '벌벌 떨다'."
    },
    'quell': {
      example: "The police used tear gas to quell the riot.",
      translation: "경찰은 폭동을 진압하기 위해 최루가스를 사용했다.",
      mnemonic: "'퀠(quell)'! '칼'로 '진압하다'."
    },
    'quench': {
      example: "I quenched my thirst with a glass of cold water.",
      translation: "나는 차가운 물 한 잔으로 갈증을 해소했다.",
      mnemonic: "'퀸(queen)'이 '치'즈로 갈증을 '끄다'."
    },
    'querulous': {
      example: "He is always querulous and complaining about something.",
      translation: "그는 항상 불평이 많고 무언가에 대해 투덜거린다.",
      mnemonic: "'쿼럴(quarrel-싸움)'! 늘 싸우려고 드는 '불평 많은'."
    },
    'quest': {
      example: "They went on a quest for the Holy Grail.",
      translation: "그들은 성배를 찾아 탐색을 떠났다.",
      mnemonic: "'퀘스트(quest)'! 게임 속 '탐색' 임무."
    },
    'questionnaire': {
      example: "Please fill out this questionnaire.",
      translation: "이 설문지를 작성해 주세요.",
      mnemonic: "'question(질문)'! 질문지, '앙케트'."
    },
    'queue': {
      example: "We had to wait in a long queue to get tickets.",
      translation: "우리는 표를 사기 위해 긴 줄을 서서 기다려야 했다.",
      mnemonic: "'큐(Q)'! 알파벳 Q처럼 생긴 '줄'."
    },
    'quibble': {
      example: "Let's not quibble over minor details.",
      translation: "사소한 세부 사항에 대해 옥신각신하지 맙시다.",
      mnemonic: "'퀴'즈 '불'만! 퀴즈에 불만을 가지며 '트집을 잡다'."
    },
    'quicksand': {
      example: "He found himself in political quicksand.",
      translation: "그는 정치적으로 헤어나기 힘든 상황에 처한 자신을 발견했다.",
      mnemonic: "'퀵(quick)'! 빠르게 빠져드는 '유사(流沙), 헤어나기 힘든 상황'."
    },
    'quiescent': {
      example: "The volcano has been quiescent for many years.",
      translation: "그 화산은 수년 동안 조용했다.",
      mnemonic: "'콰이어트(quiet)'! '조용한'."
    },
    'quietude': {
      example: "She enjoys the quietude of the countryside.",
      translation: "그녀는 시골의 평온함을 즐긴다.",
      mnemonic: "'quiet(조용한)' + 'tude(상태)'! '평정, 안정'."
    },
    'quip': {
      example: "He made a witty quip about the situation.",
      translation: "그는 그 상황에 대해 재치 있는 농담을 했다.",
      mnemonic: "'퀵(quick)'! 빠르게 받아치는 '신랄한 말'."
    },
    'quisling': {
      example: "He was branded a quisling for collaborating with the enemy.",
      translation: "그는 적과 협력했다는 이유로 매국노라는 낙인이 찍혔다.",
      mnemonic: "'퀴즈(quiz)'를 '슬링(sling-던지다)'! 동료를 팔아넘기는 '매국노'."
    },
    'quixotic': {
      example: "It's a quixotic plan that will never work.",
      translation: "그것은 결코 성공하지 못할 돈키호테식의 계획이다.",
      mnemonic: "'돈키호테(Quixote)'! '돈키호테식의'."
    },
    'quota': {
      example: "The company has a quota for hiring women.",
      translation: "그 회사는 여성 고용 할당량을 가지고 있다.",
      mnemonic: "'쿼터(quarter-4분의 1)'! 정해진 '할당량'."
    },
    'quotidian': {
      example: "She was tired of her quotidian routine.",
      translation: "그녀는 자신의 매일의 일상에 싫증이 났다.",
      mnemonic: "'쿼트(quot-얼마나) 데일리(daily)'! 얼마나 매일 반복되는지, '매일의, 흔해빠진'."
    },
    'rabble': {
      example: "The police tried to control the angry rabble.",
      translation: "경찰은 성난 폭도를 통제하려고 노력했다.",
      mnemonic: "'래블(rabble)'! '내 불'을 받아라! 외치는 '폭도'."
    },
    'rabid': {
      example: "He is a rabid supporter of the team.",
      translation: "그는 그 팀의 광적인 지지자이다.",
      mnemonic: "'래빗(rabbit)'! 토끼처럼 미쳐 날뛰는 '과격한'."
    },
    'racketeer': {
      example: "The racketeer extorted money from local businesses.",
      translation: "그 협잡꾼은 지역 사업체로부터 돈을 갈취했다.",
      mnemonic: "'라켓(racket)'으로 위협하는 '무법자'."
    },
    'raconteur': {
      example: "He was a brilliant raconteur.",
      translation: "그는 뛰어난 이야기꾼이었다.",
      mnemonic: "'라쿤(raccoon)'처럼 재미있는 '이야기꾼'."
    },
    'racy': {
      example: "She told a few racy jokes.",
      translation: "그녀는 몇 가지 짜릿한 농담을 했다.",
      mnemonic: "'레이싱(racing)'처럼 '짜릿한'."
    },
    'radical': {
      example: "The political party has radical ideas.",
      translation: "그 정당은 급진적인 사상을 가지고 있다.",
      mnemonic: "'래디쉬(radish-무)'! 뿌리(radical) 채소처럼 '근본적인, 급진적인'."
    },
    'raffish': {
      example: "He had a raffish charm that many found attractive.",
      translation: "그는 많은 사람들이 매력적으로 느끼는 저속한 매력을 가지고 있었다.",
      mnemonic: "'래(ra) 피쉬(fish)'! '날'생선처럼 비린내 나는 '저속한'."
    },
    'raffle': {
      example: "I won a prize in the charity raffle.",
      translation: "나는 자선 복권 판매에서 상을 받았다.",
      mnemonic: "'래플(raffle)'! '복권'."
    },
    'rafter': {
      example: "The birds built a nest in the rafters of the barn.",
      translation: "새들은 헛간의 서까래에 둥지를 틀었다.",
      mnemonic: "'래프터(rafter)'! '서까래'."
    },
    'rage': {
      example: "He flew into a rage when he heard the news.",
      translation: "그는 그 소식을 듣고 격노했다.",
      mnemonic: "'레이지(rage)'! '격노'."
    },
    'ragged': {
      example: "The beggar was wearing ragged clothes.",
      translation: "그 거지는 너덜너덜한 옷을 입고 있었다.",
      mnemonic: "'래그(rag-누더기)'! '누더기를 걸친'."
    },
    'rail': {
      example: "She railed against the injustice of the system.",
      translation: "그녀는 그 제도의 불의에 대해 맹렬히 비난했다.",
      mnemonic: "'레일(rail)' 위에서 벗어났다고 '욕하다'."
    },
    'raisin': {
      example: "I like raisins in my bread.",
      translation: "나는 빵에 든 건포도를 좋아한다.",
      mnemonic: "'레이즌(raisin)'! '건포도'."
    },
    'rakish': {
      example: "He had a rakish smile and a confident manner.",
      translation: "그는 방탕한 미소와 자신감 있는 태도를 가지고 있었다.",
      mnemonic: "'레이크(rake-난봉꾼)'! 난봉꾼처럼 '방탕한'."
    },
    'rally': {
      example: "The team rallied in the second half to win the game.",
      translation: "그 팀은 후반전에 다시 힘을 모아 경기에서 이겼다.",
      mnemonic: "'랠리(rally)'! 흩어졌다가 '다시 모으다'."
    },
    'ramble': {
      example: "He rambled on for hours about his travels.",
      translation: "그는 자신의 여행에 대해 몇 시간 동안 장황하게 이야기했다.",
      mnemonic: "'램(ram-숫양)'이 '불(ble)'평하며 '어슬렁거리다'."
    },
    'rambunctious': {
      example: "The rambunctious children were running and shouting.",
      translation: "미친 듯 날뛰는 아이들이 달리고 소리치고 있었다.",
      mnemonic: "'램(ram)'이 '벙' 쪘으! 숫양이 벙쪄서 '미친 듯 날뛰는'."
    },
    'ramify': {
      example: "The problem ramified into several smaller issues.",
      translation: "그 문제는 여러 개의 더 작은 문제들로 갈라졌다.",
      mnemonic: "'램(ram)'이 '파이(fy)'! 숫양이 파이를 여러 조각으로 '가지처럼 가르다'."
    },
    'ramification': {
      example: "The decision had serious ramifications for the company.",
      translation: "그 결정은 회사에 심각한 결과를 가져왔다.",
      mnemonic: "'ramify(갈라지다)'! 갈라져 나온 '결과'."
    },
    'rampart': {
      example: "The city was protected by a high rampart.",
      translation: "그 도시는 높은 성벽으로 보호되었다.",
      mnemonic: "'램(ram)'이 '파트(part)'! 숫양이 지키는 부분, '성벽'."
    },
    'ramshackle': {
      example: "They lived in a ramshackle old house.",
      translation: "그들은 금방이라도 무너질 듯한 낡은 집에 살았다.",
      mnemonic: "'램(ram)'이 '새'를 '클(kle)'! 숫양이 새를 잡으려다 집이 '덜커덩거리다'."
    },
    'rancid': {
      example: "The butter smelled rancid.",
      translation: "버터에서 썩은 냄새가 났다.",
      mnemonic: "'랜(ran) 시드(cid)'! 오래 달려 '쉰'내가 나는."
    },
    'rancor': {
      example: "He felt a deep rancor towards his enemies.",
      translation: "그는 적들에게 깊은 원한을 느꼈다.",
      mnemonic: "'랭커(ranker)'가 되지 못해 생긴 '원한'."
    },
    'randomize': {
      example: "The subjects were randomized into two groups.",
      translation: "피험자들은 두 그룹으로 무작위 배정되었다.",
      mnemonic: "'랜덤(random)'! '무작위로 하다'."
    },
    'range': {
      example: "The store offers a wide range of products.",
      translation: "그 가게는 다양한 범위의 제품을 제공한다.",
      mnemonic: "산맥(mountain range)처럼 넓은 '범위'."
    },
    'ranger': {
      example: "A park ranger warned us about the bears.",
      translation: "공원 경비원이 우리에게 곰에 대해 경고했다.",
      mnemonic: "파워'레인저(ranger)'! '산림 경비원'."
    },
    'rank': {
      example: "The rank smell of garbage filled the air.",
      translation: "쓰레기의 역한 냄새가 공기를 가득 채웠다.",
      mnemonic: "군대 '랭크(rank-계급)'가 낮아 '역한' 냄새가 나는 곳에서 일하다."
    },
    'rankle': {
      example: "His unfair criticism still rankled her.",
      translation: "그의 불공평한 비판은 여전히 그녀를 안달 나게 괴롭혔다.",
      mnemonic: "'랭클(rankle)'! '앵클(ankle)'을 삐어서 '안달 나게 괴롭다'."
    },
    'rant': {
      example: "He went on a long rant about the government.",
      translation: "그는 정부에 대해 길게 호통을 쳤다.",
      mnemonic: "'랜트(rent)'! 집세를 못 내서 주인이 '호통 치다'."
    },
    'rapacious': {
      example: "The rapacious landlord charged exorbitant rents.",
      translation: "그 탐욕스러운 집주인은 터무니없는 임대료를 청구했다.",
      mnemonic: "'내(ra) 패셨으(pacious)'! 나를 패서 '강탈하는' '탐욕스러운'."
    },
    'rapport': {
      example: "She has a good rapport with her students.",
      translation: "그녀는 학생들과 좋은 관계를 맺고 있다.",
      mnemonic: "'랩(rap)'으로 '포트(port)'를 설명하며 '조화로운 관계'를 만들다."
    },
    'rapprochement': {
      example: "There are signs of a rapprochement between the two countries.",
      translation: "두 나라 사이에 국교 정상화의 조짐이 있다.",
      mnemonic: "'랩(rap)으로 접근'하며 '국가 간의 친선'을 도모하다."
    },
    'rapscallion': {
      example: "The young rapscallion was always getting into trouble.",
      translation: "그 어린 악한은 항상 말썽을 피웠다.",
      mnemonic: "'랩(rap)' 스케일이 '라이언(lion)'! 랩으로 사자후를 내뿜는 '악당'."
    },
    'rapt': {
      example: "The audience was rapt with attention.",
      translation: "청중은 넋을 잃고 주의를 기울였다.",
      mnemonic: "'랩(rap)'에 '푹 빠진'."
    },
    'rapture': {
      example: "She was in a state of rapture after hearing the good news.",
      translation: "그녀는 좋은 소식을 듣고 황홀경에 빠졌다.",
      mnemonic: "'랩(rap)'으로 '쳐(ture)'! 랩으로 상대를 치며 '환희'를 느끼다."
    },
    'rapturous': {
      example: "The performance received rapturous applause.",
      translation: "그 공연은 열광적인 박수를 받았다.",
      mnemonic: "'rapture(환희)'! '기뻐서 어쩔 줄 모르는'."
    },
    'rarefied': {
      example: "They live in the rarefied world of the super-rich.",
      translation: "그들은 초부유층의 매우 높은 세계에 산다.",
      mnemonic: "'레어(rare)'! 희귀할 만큼 '매우 높은'."
    },
    'rarefy': {
      example: "The air becomes rarefied at high altitudes.",
      translation: "고도가 높아지면 공기가 희박해진다.",
      mnemonic: "'레어(rare)'하게 만드니 '희박하게 하다'."
    },
    'rarity': {
      example: "Snow is a rarity in this part of the country.",
      translation: "이 나라의 이 지역에서 눈은 희귀한 것이다.",
      mnemonic: "'rare(희귀한)'! '진귀함'."
    },
    'rash': {
      example: "It was rash of you to quit your job.",
      translation: "네가 직장을 그만둔 것은 무모했다.",
      mnemonic: "'러쉬(rush)'! 서두르니 '무모한'."
    },
    'raspy': {
      example: "He had a raspy voice from a cold.",
      translation: "그는 감기로 목이 쉰 소리를 냈다.",
      mnemonic: "'내(ra) 스피(spy)'! 내 스파이는 '목이 쉰' 소리를 낸다."
    },
    'ratify': {
      example: "The treaty was ratified by both countries.",
      translation: "그 조약은 양국에 의해 비준되었다.",
      mnemonic: "'래티파이(ratify)'! '내 티'를 '파'서 도장을 찍으며 '승인하다'."
    },
    'ratiocinate': {
      example: "The detective ratiocinated to solve the complex case.",
      translation: "그 탐정은 복잡한 사건을 해결하기 위해 추리했다.",
      mnemonic: "'레이쇼(ratio-비율)'! 비율을 따져가며 '추리하다'."
    },
    'ratiocination': {
      example: "Sherlock Holmes was a master of ratiocination.",
      translation: "셜록 홈즈는 추리의 대가였다.",
      mnemonic: "'ratiocinate(추리하다)'의 명사형, '추리'."
    },
    'ration': {
      example: "During the war, food was rationed.",
      translation: "전쟁 동안 식량은 배급되었다.",
      mnemonic: "'레이션(ration)'! 군대 '배급량'."
    },
    'rationalize': {
      example: "He tried to rationalize his selfish behavior.",
      translation: "그는 자신의 이기적인 행동을 합리화하려고 노력했다.",
      mnemonic: "'rational(합리적인)'! 합리적인 것처럼 만드니 '합리화하다'."
    },
    'raucous': {
      example: "The party was loud and raucous.",
      translation: "그 파티는 시끄럽고 소란스러웠다.",
      mnemonic: "'로커스(rockers)'! 록 가수들은 '귀에 거슬리는' 소리를 낸다."
    },
    'raunchy': {
      example: "The movie was criticized for its raunchy humor.",
      translation: "그 영화는 난잡한 유머로 비판받았다.",
      mnemonic: "'런치(lunch)' 때 '난잡한' 이야기를 하다."
    },
    'rave': {
      example: "She raved about the new restaurant.",
      translation: "그녀는 새 식당에 대해 열변을 토했다.",
      mnemonic: "'레이브(rave)' 파티! '열광하며' 춤추다."
    },
    'ravel': {
      example: "The mystery began to ravel as new clues were found.",
      translation: "새로운 단서가 발견되면서 미스터리가 풀리기 시작했다.",
      mnemonic: "'내(ra) 벨(vel)'! 내 벨트가 '풀리다'."
    },
    'ravenous': {
      example: "After the long hike, I was ravenous.",
      translation: "긴 하이킹 후에, 나는 몹시 배가 고팠다.",
      mnemonic: "'레이븐(raven-갈까마귀)'! 갈까마귀처럼 '걸신들린'."
    },
    'ravish': {
      example: "She was ravished by the beauty of the landscape.",
      translation: "그녀는 그 풍경의 아름다움에 황홀해했다.",
      mnemonic: "'내(ra) 비쉬(vish)'! 내 소원을 들어주니 '몹시 기쁘다'."
    },
    'raze': {
      example: "The old buildings were razed to make way for a new park.",
      translation: "낡은 건물들은 새 공원을 만들기 위해 철거되었다.",
      mnemonic: "'레이저(laser)'로 건물을 '파괴하다'."
    },
    'reactant': {
      example: "The two reactants were mixed to start the chemical reaction.",
      translation: "화학 반응을 시작하기 위해 두 반응물이 혼합되었다.",
      mnemonic: "'react(반응하다)'! '반응물'."
    },
    'reactionary': {
      example: "His reactionary views were unpopular with the younger generation.",
      translation: "그의 보수 반동적인 견해는 젊은 세대에게 인기가 없었다.",
      mnemonic: "'reaction(반동)'! '반동의'."
    },
    'ream': {
      example: "I need to buy a ream of paper.",
      translation: "나는 종이 한 묶음(연)을 사야 한다.",
      mnemonic: "'림(ream)'! 종이 '한 묶음'."
    },
    'reap': {
      example: "You reap what you sow.",
      translation: "뿌린 대로 거둔다.",
      mnemonic: "'립(reap)'! 익은 벼를 입으로 '베다, 수확하다'."
    },
    'reaper': {
      example: "The reaper harvested the wheat.",
      translation: "수확하는 사람이 밀을 수확했다.",
      mnemonic: "'reap(수확하다)'하는 사람, '수확하는 사람'."
    },
    'reassure': {
      example: "He reassured me that everything would be okay.",
      translation: "그는 모든 것이 괜찮을 것이라고 나를 안심시켰다.",
      mnemonic: "'리(re-다시) 어슈어(assure-확신시키다)'! '다시 안심시키다'."
    },
    'rebuff': {
      example: "She rebuffed his offer of help.",
      translation: "그녀는 그의 도움 제안을 거절했다.",
      mnemonic: "'니(re) 버프(buff)'는 '거절한다'!"
    },
    'rebus': {
      example: "The message was written in the form of a rebus.",
      translation: "그 메시지는 수수께끼 그림 형태로 쓰여 있었다.",
      mnemonic: "'리(re) 버스(bus)'! 버스를 다시 타는 '수수께끼'."
    },
    'recalcitrant': {
      example: "The recalcitrant child refused to listen to his parents.",
      translation: "그 다루기 힘든 아이는 부모님 말씀을 듣기를 거부했다.",
      mnemonic: "'리(re-뒤로) 칼씨(calci-발꿈치)'! 뒤로 발꿈치를 들며 '반항하는'."
    },
    'recant': {
      example: "He was forced to recant his statement.",
      translation: "그는 자신의 진술을 철회하도록 강요받았다.",
      mnemonic: "'리(re-다시) 캔트(can't)'! 다시는 못하겠다고 '철회하다'."
    },
    'recapitulate': {
      example: "Let me recapitulate the main points of the lecture.",
      translation: "강의의 요점을 요약해 보겠습니다.",
      mnemonic: "'리(re-다시) 캐피탈(capital-머리)'! 머리글자만 따서 '요약하다'."
    },
    'receipt': {
      example: "Please keep your receipt as proof of purchase.",
      translation: "구매 증거로 영수증을 보관해 주세요.",
      mnemonic: "'리시트(receipt)'! '영수증'."
    },
    'receptacle': {
      example: "A trash can is a receptacle for waste.",
      translation: "쓰레기통은 쓰레기를 담는 용기이다.",
      mnemonic: "'리셉션(reception)'에 있는 '그릇, 용기'."
    },
    'recessive': {
      example: "Blue eyes are a recessive trait.",
      translation: "파란 눈은 열성 형질이다.",
      mnemonic: "'리세스(recess-휴식)'! 뒤로 물러나 쉬니 '후퇴하는, 열성의'."
    },
    'recidivism': {
      example: "The rate of recidivism among former prisoners is high.",
      translation: "전과자들 사이의 상습적 범죄율이 높다.",
      mnemonic: "'리(re-다시) 시디(cidi-떨어지다)'! 다시 범죄로 떨어지는 '상습적 범죄'."
    },
    'reciprocal': {
      example: "The two countries have a reciprocal trade agreement.",
      translation: "두 나라는 상호 무역 협정을 맺고 있다.",
      mnemonic: "'내(re) 시(ci) 프로(pro)'! 내 시를 프로가 낭송해주니 '보답으로' 나도 해주다."
    },
    'reciprocate': {
      example: "She did not reciprocate his love.",
      translation: "그녀는 그의 사랑에 보답하지 않았다.",
      mnemonic: "'내(re) 시(ci) 프로(pro) 케이트(cate)'! 내 시를 프로가 케이크로 '보답하다'."
    },
    'reckless': {
      example: "He is a reckless driver.",
      translation: "그는 난폭한 운전자이다.",
      mnemonic: "'렉(reck)'도 없이 '무모하게' 운전하다."
    },
    'reclaim': {
      example: "The government plans to reclaim the land from the sea.",
      translation: "정부는 바다를 메워 땅을 개간할 계획이다.",
      mnemonic: "'리(re-다시) 클레임(claim-주장하다)'! 다시 내 것이라고 주장하며 '되찾다, 개간하다'."
    },
    'recluse': {
      example: "He lives as a recluse in a remote cabin.",
      translation: "그는 외딴 오두막에서 은둔자로 산다.",
      mnemonic: "'리(re-뒤) 클루즈(close-닫다)'! 문을 닫고 뒤에 숨은 '은둔자'."
    },
    'recoil': {
      example: "She recoiled in horror at the sight of the snake.",
      translation: "그녀는 뱀을 보고 공포에 질려 움찔했다.",
      mnemonic: "'리(re-뒤) 코일(coil)'! 코일처럼 뒤로 '움찔하다'."
    },
    'reconcile': {
      example: "It's difficult to reconcile these two opposing viewpoints.",
      translation: "이 두 상반된 관점을 조화시키기는 어렵다.",
      mnemonic: "'리(re-다시) 컨실(council-회의)'! 다시 회의를 열어 '화해시키다'."
    },
    'recondite': {
      example: "The book is full of recondite information.",
      translation: "그 책은 난해한 정보로 가득하다.",
      mnemonic: "'리(re-뒤) 컨(con) 다이트(dite)'! 뒤에 숨겨져 있어 '난해한'."
    },
    'reconnaissance': {
      example: "The army sent out a reconnaissance team.",
      translation: "군대는 정찰대를 파견했다.",
      mnemonic: "'리커(reco) 너(nnais) 상스(sance)'! 네가 아는 상인지 '조사, 정찰'해봐."
    },
    'reconnoiter': {
      example: "They reconnoitered the enemy's position.",
      translation: "그들은 적의 위치를 정찰했다.",
      mnemonic: "'reconnaissance(정찰)'! '정찰하다'."
    },
    'reconstitute': {
      example: "You need to add water to reconstitute the dried milk.",
      translation: "분유를 원 상태로 되돌리려면 물을 넣어야 한다.",
      mnemonic: "'리(re-다시) 컨스티튜트(constitute-구성하다)'! '다시 구성하다, 복원하다'."
    },
    'reconvene': {
      example: "The committee will reconvene after lunch.",
      translation: "위원회는 점심 식사 후에 다시 소집될 것이다.",
      mnemonic: "'리(re-다시) 컨빈(convene-소집하다)'! '다시 소집하다'."
    },
    'rectify': {
      example: "Please rectify the mistake in the report.",
      translation: "보고서의 실수를 바로잡아 주세요.",
      mnemonic: "'렉트(rect-곧은)'! 곧게 만드니 '바로잡다, 조정하다'."
    },
    'rectitude': {
      example: "He is a man of great rectitude.",
      translation: "그는 매우 정직한 사람이다.",
      mnemonic: "'렉트(rect-곧은)'! 곧은 마음, '정직'."
    },
    'recumbent': {
      example: "He was in a recumbent position on the sofa.",
      translation: "그는 소파에 누워 있었다.",
      mnemonic: "'리(re) 컴(come) 번트(bent)'! 다시 와서 구부리고 '누워 있는'."
    },
    'recuperate': {
      example: "She is recuperating from a long illness.",
      translation: "그녀는 오랜 병에서 회복 중이다.",
      mnemonic: "'리(re-다시) 쿠퍼(cooper)'! 다시 쿠퍼액이 나올 만큼 '회복하다'."
    },
    'recuperative': {
      example: "A vacation can have recuperative effects.",
      translation: "휴가는 회복 효과가 있을 수 있다.",
      mnemonic: "'recuperate(회복하다)'! '회복력이 있는'."
    },
    'recur': {
      example: "The same problem keeps recurring.",
      translation: "같은 문제가 계속 재발한다.",
      mnemonic: "'리(re-다시) 커(cur-달리다)'! 다시 달려오니 '재발하다'."
    },
    'redistribute': {
      example: "The government plans to redistribute wealth.",
      translation: "정부는 부를 재분배할 계획이다.",
      mnemonic: "'리(re-다시) 디스트리뷰트(distribute-분배하다)'! '재분배하다'."
    },
    'redolent': {
      example: "The air was redolent of spring flowers.",
      translation: "공기는 봄꽃 향기로 가득했다.",
      mnemonic: "'레드(red)'! 빨간 장미 '향기가 나는'."
    },
    'redoubtable': {
      example: "He is a redoubtable opponent.",
      translation: "그는 가공할 만한 상대이다.",
      mnemonic: "'리(re-다시) 다우트(doubt-의심)'! 다시 의심할 필요 없이 '가공할, 존경할 만한'."
    },
    'redress': {
      example: "He is seeking redress for the injustice.",
      translation: "그는 그 불의에 대한 바로잡음을 구하고 있다.",
      mnemonic: "'리(re-다시) 드레스(dress)'! 드레스를 다시 입혀 '바로잡다'."
    },
    'redundant': {
      example: "The new system made many jobs redundant.",
      translation: "새로운 시스템은 많은 일자리를 남아돌게 만들었다.",
      mnemonic: "'리(re-다시) 던던트(dundant)'! '다시' '돈'을 '던'져줄 만큼 '남아도는'."
    },
    'reel': {
      example: "The fisherman reeled in a big fish.",
      translation: "그 어부는 큰 물고기를 릴로 감아올렸다.",
      mnemonic: "낚시 '릴(reel)'! '감는 틀'."
    },
    'refectory': {
      example: "The students have lunch in the refectory.",
      translation: "학생들은 구내식당에서 점심을 먹는다.",
      mnemonic: "'리(re) 팩토리(factory)'! 공장 옆 '구내식당'."
    },
    'referee': {
      example: "The referee blew the whistle to end the game.",
      translation: "심판은 경기를 끝내기 위해 호루라기를 불었다.",
      mnemonic: "'레프리(referee)'! '심판'."
    },
    'refinery': {
      example: "The oil is processed at a refinery.",
      translation: "석유는 정유소에서 처리된다.",
      mnemonic: "'리파인(refine-정제하다)'! 정제하는 곳, '정유소'."
    },
    'reflective': {
      example: "He was in a reflective mood.",
      translation: "그는 사색에 잠긴 분위기였다.",
      mnemonic: "'리플렉트(reflect-반사하다)'! 자신을 반사하며 '심사숙고하는'."
    },
    'refractory': {
      example: "The refractory child refused to cooperate.",
      translation: "그 다루기 힘든 아이는 협조하기를 거부했다.",
      mnemonic: "'리(re-뒤로) 팩토리(factory)'! 공장 뒤로 도망가는 '다루기 힘든' 아이."
    },
    'refresh': {
      example: "A cool drink will refresh you.",
      translation: "시원한 음료가 당신을 상쾌하게 해줄 것이다.",
      mnemonic: "'리(re-다시) 프레쉬(fresh)'! '다시 상쾌하게 하다'."
    },
    'refugee': {
      example: "Many refugees have fled the war-torn country.",
      translation: "많은 난민들이 전쟁으로 폐허가 된 나라를 탈출했다.",
      mnemonic: "'레퓨지(refuge-피난처)'! 피난처를 찾는 사람, '난민'."
    },
    'refulgent': {
      example: "The refulgent diamond sparkled in the light.",
      translation: "찬란한 다이아몬드가 빛 속에서 반짝였다.",
      mnemonic: "'리(re) 풀(ful) 젠틀(gentle)'! 다시 봐도 꽉 차게 젠틀하게 '빛나는'."
    },
    'refuse': {
      example: "Please put your refuse in the bin.",
      translation: "쓰레기는 쓰레기통에 넣어주세요.",
      mnemonic: "'리퓨즈(refuse-거절하다)'! 거절당한 '쓰레기'."
    },
    'refute': {
      example: "He refuted the accusations against him.",
      translation: "그는 자신에 대한 비난을 반박했다.",
      mnemonic: "'리(re) 퓨트(fute-치다)'! 다시 치고 나가며 '반박하다'."
    },
    'regard': {
      example: "He has high regard for his teacher.",
      translation: "그는 선생님을 매우 존경한다.",
      mnemonic: "'리(re) 가드(guard)'! 다시 지켜봐 줄 만큼 '존경'하다."
    },
    'regenerate': {
      example: "The lizard can regenerate its tail.",
      translation: "도마뱀은 꼬리를 재생시킬 수 있다.",
      mnemonic: "'리(re-다시) 제너레이트(generate-생성하다)'! '재생시키다'."
    },
    'regimen': {
      example: "He follows a strict daily regimen of diet and exercise.",
      translation: "그는 엄격한 일일 식이요법과 운동 요법을 따른다.",
      mnemonic: "'레짐(regime-정권)'! 정권이 국민을 '관리, 통치'하다."
    },
    'regression': {
      example: "The patient showed signs of regression to a childlike state.",
      translation: "그 환자는 어린애 같은 상태로 퇴행하는 징후를 보였다.",
      mnemonic: "'리(re-뒤로) 그레스(gress-가다)'! 뒤로 가니 '후퇴, 퇴화'."
    },
    'rehabilitate': {
      example: "The program helps to rehabilitate former prisoners.",
      translation: "그 프로그램은 전과자들을 사회 복귀시키는 것을 돕는다.",
      mnemonic: "'리(re-다시) 해빌리테이트(habilitate-살게하다)'! 다시 살게 하니 '회복시키다'."
    },
    'rehearsal': {
      example: "The actors are in rehearsal for the new play.",
      translation: "배우들은 새 연극을 위해 예행연습 중이다.",
      mnemonic: "'리허설(rehearsal)'! '예행연습'."
    },
    'reign': {
      example: "Queen Victoria's reign was very long.",
      translation: "빅토리아 여왕의 통치는 매우 길었다.",
      mnemonic: "'레인(rain)'! 비가 내리듯 온 땅을 '통치'하다."
    },
    'rein': {
      example: "He pulled on the reins to stop the horse.",
      translation: "그는 말을 멈추기 위해 고삐를 당겼다.",
      mnemonic: "'레인(rein)'! '고삐'."
    },
    'reiterate': {
      example: "Let me reiterate the main points.",
      translation: "요점을 반복해서 말씀드리겠습니다.",
      mnemonic: "'리(re-다시) 이터레이트(iterate-반복하다)'! '되풀이하다'."
    },
    'rejoice': {
      example: "They rejoiced at the news of their victory.",
      translation: "그들은 승리 소식에 기뻐했다.",
      mnemonic: "'리(re) 조이스(choice)'! 다시 선택받으니 '기뻐하다'."
    },
    'relapse': {
      example: "He relapsed into his old bad habits.",
      translation: "그는 옛날의 나쁜 습관으로 다시 돌아갔다.",
      mnemonic: "'리(re-다시) 랩스(lapse-실수)'! 다시 실수하니 '재발하다'."
    },
    'release': {
      example: "The band will release their new album next month.",
      translation: "그 밴드는 다음 달에 새 앨범을 발매할 것이다.",
      mnemonic: "'릴리즈(release)'! '풀어주다, 발매하다'."
    },
    'relegate': {
      example: "He was relegated to a minor role in the company.",
      translation: "그는 회사에서 중요하지 않은 역할로 좌천되었다.",
      mnemonic: "'리(re-뒤) + 레그(leg) + 게이트(gate)'! 뒷다리로 문밖으로 차서 '지위를 떨어뜨리다'."
    },
    'relentless': {
      example: "The relentless heat of the desert was unbearable.",
      translation: "사막의 가차 없는 더위는 견딜 수 없었다.",
      mnemonic: "'리(re) 렌트(lent) 리스(less)'! 다시 빌려주는 것 없는 '가혹한'."
    },
    'relevant': {
      example: "Please provide only the relevant information.",
      translation: "관련된 정보만 제공해 주세요.",
      mnemonic: "'렐러번트(relevant)'! '내일'의 '이벤트'와 '관련된'."
    },
    'relinquish': {
      example: "He was forced to relinquish control of the company.",
      translation: "그는 회사에 대한 통제권을 포기해야만 했다.",
      mnemonic: "'리(re) 린(lin) 귀신(quish)'! 다시 나타난 귀신에게 모든 것을 '포기하다'."
    },
    'relish': {
      example: "I don't relish the thought of a long journey.",
      translation: "나는 긴 여행을 생각하는 것을 즐기지 않는다.",
      mnemonic: "'낼름(relish)'! 맛있어서 혀를 내밀며 '즐기다, 음미하다'."
    },
    'reluctant': {
      example: "She was reluctant to admit her mistake.",
      translation: "그녀는 자신의 실수를 인정하기를 꺼렸다.",
      mnemonic: "'리(re) 럭(luck) 턴트(tant)'! 다시 행운이 올 때까지 '마지못해' 기다리다."
    },
    'remiss': {
      example: "He was remiss in his duties.",
      translation: "그는 자신의 직무에 태만했다.",
      mnemonic: "'리(re) 미스(miss)'! 다시 실수하는 '태만한'."
    },
    'remnant': {
      example: "The remnants of the ancient city can still be seen.",
      translation: "고대 도시의 유물은 여전히 볼 수 있다.",
      mnemonic: "'램(ram) 넌트(nant)'! 양이 남긴 '나머지'."
    },
    'remodel': {
      example: "They decided to remodel their kitchen.",
      translation: "그들은 부엌을 개조하기로 결정했다.",
      mnemonic: "'리(re-다시) 모델(model)'! '다시 모델링하다, 개조하다'."
    },
    'remonstrance': {
      example: "The workers made a remonstrance against the pay cut.",
      translation: "노동자들은 임금 삭감에 대해 항의했다.",
      mnemonic: "'리(re) 몬스터(monster)'! 다시 나타난 괴물에게 '항의'하다."
    },
    'remonstrate': {
      example: "He remonstrated with the referee about the decision.",
      translation: "그는 그 결정에 대해 심판에게 항의했다.",
      mnemonic: "'remonstrance(항의)'! '항의하다'."
    },
    'remorse': {
      example: "He felt a deep remorse for his actions.",
      translation: "그는 자신의 행동에 대해 깊은 양심의 가책을 느꼈다.",
      mnemonic: "'리(re) 모스(Morse)'! 모스 부호를 다시 보내며 '양심의 가책'을 느끼다."
    },
    'remote': {
      example: "They live in a remote village.",
      translation: "그들은 외딴 마을에 산다.",
      mnemonic: "'리모트(remote)' 컨트롤! '멀리 떨어진' 곳에서 조종."
    },
    'remunerate': {
      example: "The company will remunerate you for your extra work.",
      translation: "회사는 당신의 추가 근무에 대해 보상할 것입니다.",
      mnemonic: "'리(re) 머니(money)'! 다시 돈으로 '보답하다'."
    },
    'rend': {
      example: "The sound of the explosion rent the air.",
      translation: "폭발음이 공기를 찢었다.",
      mnemonic: "'랜드(land)'! 땅을 '찢다'."
    },
    'renegade': {
      example: "He was a renegade who betrayed his country.",
      translation: "그는 조국을 배신한 변절자였다.",
      mnemonic: "'러너(runner) 게이드(gade)'! 도망간 놈, '변절자'."
    },
    'renounce': {
      example: "He renounced his claim to the throne.",
      translation: "그는 왕위에 대한 자신의 주장을 포기했다.",
      mnemonic: "'리(re) 나운스(nounce-발표)'! 다시는 안 하겠다고 발표하며 '포기하다'."
    },
    'renovate': {
      example: "They are renovating the old house.",
      translation: "그들은 낡은 집을 혁신하고 있다.",
      mnemonic: "'리(re-다시) 노바(nova-새로운)'! '다시 새롭게 하다'."
    },
    'renunciation': {
      example: "His renunciation of violence was welcomed by all.",
      translation: "그의 폭력 포기는 모두에게 환영받았다.",
      mnemonic: "'renounce(포기하다)'의 명사형, '포기'."
    },
    'reparation': {
      example: "The country had to pay reparations after the war.",
      translation: "그 나라는 전쟁 후 배상금을 지불해야 했다.",
      mnemonic: "'리페어(repair)'! 수리비로 '보상'하다."
    },
    'repartee': {
      example: "He was known for his witty repartee.",
      translation: "그는 재치 있는 응답으로 유명했다.",
      mnemonic: "'리(re) 파티(party)'! 파티에서 다시 받아치는 '재치 있는 응답'."
    },
    'repatriate': {
      example: "The government will repatriate the refugees.",
      translation: "정부는 난민들을 본국으로 송환할 것이다.",
      mnemonic: "'리(re-다시) 패트리어트(patriot-애국자)'! 다시 애국자로 만들어 '본국으로 송환하다'."
    },
    'repeal': {
      example: "The government decided to repeal the unpopular law.",
      translation: "정부는 그 인기 없는 법을 폐지하기로 결정했다.",
      mnemonic: "'리필(refill)'을 '폐지하다'."
    },
    'repel': {
      example: "The smell of garlic repels vampires.",
      translation: "마늘 냄새는 뱀파이어를 물리친다.",
      mnemonic: "'리펠(repel)'! '네' '팔'을 밀어내며 '물리치다'."
    },
    'repellent': {
      example: "This spray is an effective insect repellent.",
      translation: "이 스프레이는 효과적인 벌레 퇴치제이다.",
      mnemonic: "'repel(물리치다)'! '쫓아버리는, 불쾌한'."
    },
    'repertoire': {
      example: "The pianist has a wide repertoire of classical music.",
      translation: "그 피아니스트는 폭넓은 클래식 음악 연주 목록을 가지고 있다.",
      mnemonic: "'레퍼토리(repertoire)'! '연주 목록'."
    },
    'repine': {
      example: "She repined at her bad luck.",
      translation: "그녀는 자신의 불운에 대해 투덜거렸다.",
      mnemonic: "'리(re) 파인(pine-슬퍼하다)'! 다시 슬퍼하며 '투덜대다'."
    },
    'replete': {
      example: "The book is replete with interesting facts.",
      translation: "그 책은 흥미로운 사실들로 가득 차 있다.",
      mnemonic: "'리(re) 플리트(plete-채우다)'! 다시 채워서 '가득한, 풍부한'."
    },
    'reportage': {
      example: "The book is a brilliant piece of reportage.",
      translation: "그 책은 훌륭한 보도 기사 작품이다.",
      mnemonic: "'리포트(report)'! '보도 기사'."
    },
    'reportorial': {
      example: "He has a reportorial style of writing.",
      translation: "그는 사실에 입각한 글쓰기 스타일을 가지고 있다.",
      mnemonic: "'리포트(report)'! '보고서적인'."
    },
    'repose': {
      example: "She went to her room for a little repose.",
      translation: "그녀는 약간의 휴식을 위해 자기 방으로 갔다.",
      mnemonic: "'리(re) 포즈(pose)'! 다시 포즈를 취하기 전 '휴식'."
    },
    'reprehensible': {
      example: "His behavior was reprehensible.",
      translation: "그의 행동은 비난받을 만했다.",
      mnemonic: "'리(re) 프리(pre) 핸드(hend)'! 뒤에서 손을 잡는 '비난할 만한' 행동."
    },
    'reprehension': {
      example: "He received a severe reprehension from his boss.",
      translation: "그는 상사로부터 심한 질책을 받았다.",
      mnemonic: "'reprehend(비난하다)'의 명사형, '질책'."
    },
    'repress': {
      example: "He repressed a smile.",
      translation: "그는 미소를 억눌렀다.",
      mnemonic: "'리(re-뒤로) 프레스(press-누르다)'! 뒤로 '억누르다'."
    },
    'reprieve': {
      example: "The prisoner was granted a last-minute reprieve.",
      translation: "그 죄수는 마지막 순간에 형 집행 유예를 받았다.",
      mnemonic: "'리(re) 프리(prie) 브(ve)'! 다시 자유를 주며 '형 집행을 연기하다'."
    },
    'reprimand': {
      example: "He was reprimanded for being late.",
      translation: "그는 지각으로 견책을 받았다.",
      mnemonic: "'리(re) 프리'마인드! 다시 자유로운 마음이 되라고 '비난하다'."
    },
    'reprisal': {
      example: "They feared a military reprisal.",
      translation: "그들은 군사적 보복을 두려워했다.",
      mnemonic: "'리(re) 프라이즈(prize)'! 상을 다시 뺏는 '보복'."
    },
    'reproach': {
      example: "She reproached him for his selfishness.",
      translation: "그녀는 그의 이기심을 비난했다.",
      mnemonic: "'리(re) 어프로치(approach)'! 다시 접근하며 '비난하다'."
    },
    'reprobate': {
      example: "He is a reprobate who has been in and out of prison.",
      translation: "그는 감옥을 들락날락한 난봉꾼이다.",
      mnemonic: "'리(re) 프로브(probe)'! 다시 조사해야 할 '타락한, 난봉꾼'."
    },
    'reproof': {
      example: "She gave him a look of reproof.",
      translation: "그녀는 그에게 책망의 눈초리를 보냈다.",
      mnemonic: "'리(re) 프루프(proof)'! 다시 증거를 대라며 '책망'하다."
    },
    'reprove': {
      example: "The teacher reproved the student for cheating.",
      translation: "선생님은 부정행위를 한 학생을 꾸짖었다.",
      mnemonic: "'리(re) 프루브(prove)'! 다시 증명하라며 '책망하다'."
    },
    'reptile': {
      example: "Snakes and lizards are reptiles.",
      translation: "뱀과 도마뱀은 파충류이다.",
      mnemonic: "'렙타일(reptile)'! '파충류'."
    },
    'repudiate': {
      example: "He repudiated the accusations.",
      translation: "그는 그 비난을 부인했다.",
      mnemonic: "'리(re) 퓨(fu) 디에이트(diate)'! '네' '피'가 아니라고 '부인하다'."
    },
    'repugnant': {
      example: "The idea of eating insects is repugnant to many people.",
      translation: "곤충을 먹는다는 생각은 많은 사람들에게 혐오감을 준다.",
      mnemonic: "'리(re) 퍼그(pug)'! 퍼그가 다시 봐도 '싫은, 불쾌한'."
    },
    'repulse': {
      example: "She repulsed his advances.",
      translation: "그녀는 그의 접근을 거부했다.",
      mnemonic: "'리(re) 펄스(pulse)'! 맥박이 뒤로 뛸 만큼 '거부하다, 불쾌하게 만들다'."
    },
    'repute': {
      example: "He is a man of good repute.",
      translation: "그는 평판이 좋은 사람이다.",
      mnemonic: "'리퓨테이션(reputation)'! '평판, 명성'."
    },
    'requisite': {
      example: "A university degree is a requisite for this job.",
      translation: "대학 학위는 이 직업에 필수적인 것이다.",
      mnemonic: "'리콰이어(require)'! 요구되는 '필수적인'."
    },
    'requite': {
      example: "He requited her love with kindness.",
      translation: "그는 그녀의 사랑에 친절로 보답했다.",
      mnemonic: "'리(re) 콰이어트(quiet)'! 다시 조용하게 만들어주며 '보답하다'."
    },
    'rescind': {
      example: "The company decided to rescind the job offer.",
      translation: "회사는 채용 제안을 철회하기로 결정했다.",
      mnemonic: "'리(re) 신드(scind-자르다)'! 다시 잘라내니 '폐지하다, 철회하다'."
    },
    'rescission': {
      example: "The rescission of the contract caused a lot of problems.",
      translation: "계약 취소는 많은 문제를 야기했다.",
      mnemonic: "'rescind(철회하다)'의 명사형, '취소'."
    },
    'resentment': {
      example: "She felt a deep resentment towards her boss.",
      translation: "그녀는 상사에게 깊은 분노를 느꼈다.",
      mnemonic: "'리(re) 센트(sent)'! 다시 보낸 편지에 답이 없어 '분개'하다."
    },
    'reserved': {
      example: "She is a very reserved person.",
      translation: "그녀는 매우 내성적인 사람이다.",
      mnemonic: "'리저브(reserve-예약하다)'! 자리를 예약해두듯 '마음을 털어놓지 않는'."
    },
    'residue': {
      example: "There was a sticky residue at the bottom of the cup.",
      translation: "컵 바닥에 끈적끈적한 잔여물이 있었다.",
      mnemonic: "'내(re) 시듀(sidue)'! 내 시든 풀 같은 '나머지, 찌꺼기'."
    },
    'resign': {
      example: "He resigned from his position as CEO.",
      translation: "그는 CEO 자리에서 사임했다.",
      mnemonic: "'리(re) 사인(sign)'! 다시 사인하고 '사임하다'."
    },
    'resilient': {
      example: "Children are often very resilient.",
      translation: "아이들은 종종 회복력이 매우 강하다.",
      mnemonic: "'리(re) 실리콘(silicon)'! 다시 실리콘처럼 돌아오는 '탄력 있는, 회복력 있는'."
    },
    'resin': {
      example: "The artist used resin to create the sculpture.",
      translation: "그 예술가는 조각품을 만들기 위해 수지를 사용했다.",
      mnemonic: "'레진(resin)'! '송진, 수지'."
    },
    'resolute': {
      example: "She is a resolute opponent of the new policy.",
      translation: "그녀는 새 정책에 대한 단호한 반대자이다.",
      mnemonic: "'리(re) 솔루트(solute)'! 다시 해결할 만큼 '단호한'."
    },
    'resonant': {
      example: "He has a deep, resonant voice.",
      translation: "그는 깊고 울려 퍼지는 목소리를 가지고 있다.",
      mnemonic: "'레조넌스(resonance-공명)'! '울려 퍼지는'."
    },
    'resourceful': {
      example: "She is a resourceful manager.",
      translation: "그녀는 재치 있는 관리자이다.",
      mnemonic: "'리소스(resource-자원)'가 '풀(full)'! '자원이 풍부한, 재치 있는'."
    },
    'respire': {
      example: "All living things respire.",
      translation: "모든 생물은 호흡한다.",
      mnemonic: "'리(re) 스파이어(spire-숨쉬다)'! '다시 숨쉬다, 호흡하다'."
    },
    'respite': {
      example: "The rain brought a brief respite from the heat.",
      translation: "비는 더위로부터 잠깐의 휴식을 가져다주었다.",
      mnemonic: "'리(re) 스파이트(spite)'! 다시 앙심을 품기 전 '잠깐의 휴식'."
    },
    'resplendent': {
      example: "She looked resplendent in her evening gown.",
      translation: "그녀는 이브닝드레스를 입고 눈부시게 아름다웠다.",
      mnemonic: "'리(re) 스플렌디드(splendid)'! 다시 봐도 멋지게 '화려한, 눈부신'."
    },
    'responsive': {
      example: "The company is very responsive to customer complaints.",
      translation: "그 회사는 고객 불만에 매우 민감하게 반응한다.",
      mnemonic: "'리스폰스(response-응답)'! '응답하는, 민감한'."
    },
    'restive': {
      example: "The crowd became restive as they waited for the concert to start.",
      translation: "관중들은 콘서트가 시작되기를 기다리면서 안절부절못했다.",
      mnemonic: "'레스트(rest)'를 '티브(tive)'! 휴식을 거부하며 '안절부절못하는'."
    },
    'restless': {
      example: "He had a restless night, tossing and turning in bed.",
      translation: "그는 침대에서 뒤척이며 불안한 밤을 보냈다.",
      mnemonic: "'레스트(rest-휴식) 리스(less)'! 휴식이 없으니 '불안한'."
    },
    'restore': {
      example: "They are trying to restore the old building to its original condition.",
      translation: "그들은 낡은 건물을 원래 상태로 복원하려고 노력하고 있다.",
      mnemonic: "'리(re-다시) 스토어(store)'! 다시 가게를 열며 '복원하다'."
    },
    'restrain': {
      example: "He had to be restrained from attacking the man.",
      translation: "그가 그 남자를 공격하지 못하도록 제지해야 했다.",
      mnemonic: "'리(re) 스트레인(strain-긴장)'! 다시 긴장시키며 '억누르다'."
    },
    'resurgence': {
      example: "There has been a resurgence of interest in old movies.",
      translation: "옛날 영화에 대한 관심이 다시 부활했다.",
      mnemonic: "'리(re-다시) 서전스(surgence-솟아오름)'! '다시 솟아오름, 부활'."
    },
    'resuscitate': {
      example: "The paramedics tried to resuscitate the victim.",
      translation: "구급대원들은 희생자를 소생시키려고 노력했다.",
      mnemonic: "'리(re) 서씨(susci) 테이트(tate)'! 다시 서씨를 깨우며 '소생시키다'."
    },
    'retain': {
      example: "This fabric retains its shape even after washing.",
      translation: "이 천은 세탁 후에도 모양을 유지한다.",
      mnemonic: "'리(re) 테인(tain-잡다)'! 다시 꽉 잡고 '유지하다, 보유하다'."
    },
    'retainer': {
      example: "The lawyer charges a monthly retainer.",
      translation: "그 변호사는 매달 고문료를 청구한다.",
      mnemonic: "'retain(보유하다)'! 나를 보유해주는 '신하, 고문료'."
    },
    'retaliate': {
      example: "If you insult him, he will retaliate.",
      translation: "만약 네가 그를 모욕하면, 그는 보복할 것이다.",
      mnemonic: "'리(re) 탤리(tally)'! 다시 계산하며 '보복하다'."
    },
    'retard': {
      example: "The lack of rain retarded the growth of the crops.",
      translation: "비 부족은 농작물의 성장을 지연시켰다.",
      mnemonic: "'리타더(retarder)'! 속도를 '지연시키는' 장치."
    },
    'reticent': {
      example: "He is very reticent about his personal life.",
      translation: "그는 자신의 사생활에 대해 매우 과묵하다.",
      mnemonic: "'내(re) 티 센트(ticent)'! 내 티셔츠 냄새날까 봐 '과묵한'."
    },
    'retinue': {
      example: "The queen arrived with a large retinue.",
      translation: "여왕은 많은 수행원을 거느리고 도착했다.",
      mnemonic: "'레티(reti) 누(nue)'? '네티'즌 '누'구? 대통령 '수행원'이야."
    },
    'retort': {
      example: "She made a witty retort to his question.",
      translation: "그녀는 그의 질문에 재치 있게 응수했다.",
      mnemonic: "'리(re) 토트(tort-비틀다)'! 말을 비틀어 '말대꾸하다'."
    },
    'retouch': {
      example: "She retouched the photograph to remove the wrinkles.",
      translation: "그녀는 주름을 없애기 위해 사진을 수정했다.",
      mnemonic: "'리(re-다시) 터치(touch)'! '다시 손질하다, 수정하다'."
    },
    'retract': {
      example: "The newspaper retracted the false story.",
      translation: "그 신문은 그 거짓 기사를 철회했다.",
      mnemonic: "'리(re-뒤로) 트랙트(tract-끌다)'! 뒤로 끌어당기니 '철회하다'."
    },
    'retreat': {
      example: "The army was forced to retreat.",
      translation: "군대는 후퇴해야만 했다.",
      mnemonic: "'리(re-뒤로) 트리트(treat)'! 뒤로 가서 치료받으려고 '후퇴'하다."
    },
    'retrench': {
      example: "The company had to retrench its operations.",
      translation: "그 회사는 운영을 긴축해야 했다.",
      mnemonic: "'리(re) 트렌치(trench)'! 다시 참호를 파며 '삭감하다, 절약하다'."
    },
    'retribution': {
      example: "He saw his failure as a just retribution for his laziness.",
      translation: "그는 자신의 실패를 게으름에 대한 당연한 응보로 여겼다.",
      mnemonic: "'리(re) 트리뷰션(tribution-주다)'! 다시 되돌려주는 '응보'."
    },
    'retrograde': {
      example: "The company's policies seem retrograde.",
      translation: "그 회사의 정책은 퇴보하는 것처럼 보인다.",
      mnemonic: "'레트로(retro-뒤로) 그레이드(grade-가다)'! 뒤로 가니 '역행하는'."
    },
    'retrogress': {
      example: "The patient's condition began to retrogress.",
      translation: "그 환자의 상태가 퇴보하기 시작했다.",
      mnemonic: "'레트로(retro-뒤로) 그레스(gress-가다)'! 뒤로 가니 '후퇴하다'."
    },
    'retrospective': {
      example: "The museum is holding a retrospective of the artist's work.",
      translation: "그 박물관은 그 예술가의 회고전을 열고 있다.",
      mnemonic: "'레트로(retro-뒤) 스펙티브(spective-보다)'! 뒤를 돌아보니 '회고의'."
    },
    'revamp': {
      example: "They revamped the old website.",
      translation: "그들은 낡은 웹사이트를 개조했다.",
      mnemonic: "'리(re-다시) 뱀프(vamp)'! 뱀파이어처럼 다시 젊게 '개조하다'."
    },
    'revelation': {
      example: "The book was a revelation of the government's secrets.",
      translation: "그 책은 정부 비밀의 폭로였다.",
      mnemonic: "'리(re) 벨(vel) 레이션(lation)'! 베일을 다시 벗기니 '폭로'."
    },
    'revelry': {
      example: "The sounds of revelry could be heard from next door.",
      translation: "옆집에서 흥청대는 술잔치 소리가 들려왔다.",
      mnemonic: "'레벨(level)'이 다른 '흥청대는 술잔치'."
    },
    'revenge': {
      example: "He swore revenge on his enemies.",
      translation: "그는 적들에게 복수를 맹세했다.",
      mnemonic: "'리벤지(revenge)'! '복수'."
    },
    'revere': {
      example: "He is revered as a national hero.",
      translation: "그는 국가적 영웅으로 존경받는다.",
      mnemonic: "'리(re) 비어(vere)'! 다시 봐도 '존경하다'."
    },
    'reverence': {
      example: "They showed great reverence for the ancient traditions.",
      translation: "그들은 고대 전통에 대해 큰 존경심을 보였다.",
      mnemonic: "'revere(존경하다)'의 명사형, '존경'."
    },
    'revile': {
      example: "He was reviled by the press for his controversial views.",
      translation: "그는 논란이 많은 견해 때문에 언론의 욕을 먹었다.",
      mnemonic: "'리(re) 바일(vile-비열한)'! 다시 비열하게 '욕하다'."
    },
    'revise': {
      example: "You should revise your essay before submitting it.",
      translation: "제출하기 전에 에세이를 수정해야 합니다.",
      mnemonic: "'리(re-다시) 바이즈(vise-보다)'! '다시 보다, 교정하다'."
    },
    'revive': {
      example: "The flowers revived after I watered them.",
      translation: "꽃들은 내가 물을 주자 다시 살아났다.",
      mnemonic: "'리(re-다시) 바이브(vive-살다)'! '소생시키다'."
    },
    'revoke': {
      example: "His driver's license was revoked.",
      translation: "그의 운전 면허가 취소되었다.",
      mnemonic: "'리(re) 보크(voke-부르다)'! 다시 불러들여 '취소하다'."
    },
    'revue': {
      example: "We saw a musical revue last night.",
      translation: "우리는 어젯밤에 뮤지컬 시사 풍자극을 보았다.",
      mnemonic: "'리뷰(review)'! 사회를 리뷰하는 '시사 풍자극'."
    },
    'rewarding': {
      example: "Nursing is a very rewarding career.",
      translation: "간호는 매우 보람 있는 직업이다.",
      mnemonic: "'리워드(reward-보상)'! 보상을 받을 만큼 '보람 있는'."
    },
    'ribald': {
      example: "The comedian was known for his ribald jokes.",
      translation: "그 코미디언은 상스러운 농담으로 유명했다.",
      mnemonic: "'니(ri) 발(bald)'! 네 대머리를 가지고 '상스러운' 농담을 하다니."
    },
    'rickety': {
      example: "We crossed the rickety wooden bridge.",
      translation: "우리는 삐걱거리는 나무다리를 건넜다.",
      mnemonic: "'니(ri) 캐티(kety)'! 네 고양이가 올라가도 '삐걱거리는'."
    },
    'rider': {
      example: "A rider was added to the contract at the last minute.",
      translation: "마지막 순간에 계약서에 추가 조항이 붙었다.",
      mnemonic: "계약서에 올라'타는(ride)' '추가 조항'."
    },
    'ridicule': {
      example: "He was subjected to ridicule for his strange ideas.",
      translation: "그는 그의 이상한 아이디어 때문에 비웃음을 당했다.",
      mnemonic: "'리디큘러스(ridiculous-우스꽝스러운)'! 우스꽝스럽게 '비웃다'."
    },
    'rife': {
      example: "The city was rife with rumors.",
      translation: "그 도시는 소문으로 가득 찼다.",
      mnemonic: "'라이플(rifle)' 총알처럼 소문이 '가득 찬'."
    },
    'riffraff': {
      example: "The exclusive club did not admit riffraff.",
      translation: "그 고급 클럽은 하층민을 받지 않았다.",
      mnemonic: "'리프(reef)'에 사는 '래프(raff)'! 산호초에 사는 '하층민'."
    },
    'rift': {
      example: "The argument caused a rift between the two friends.",
      translation: "그 말다툼은 두 친구 사이에 균열을 일으켰다.",
      mnemonic: "'리프트(lift)'! 땅이 들어 올려져 생긴 '틈, 불화'."
    },
    'rig': {
      example: "He claimed that the election had been rigged.",
      translation: "그는 선거가 조작되었다고 주장했다.",
      mnemonic: "'리그(league)'! 리그 경기를 '조작하다'."
    },
    'rigid': {
      example: "He is very rigid in his views.",
      translation: "그는 자신의 견해에 대해 매우 완고하다.",
      mnemonic: "'니(ri) 쥐(gid)'! 네 쥐는 '경직된' 자세로 죽어있다."
    },
    'rigmarole': {
      example: "I had to go through a long rigmarole to get a visa.",
      translation: "나는 비자를 받기 위해 길고 복잡한 절차를 거쳐야 했다.",
      mnemonic: "'리그(league) 마 롤(role)'! 리그에서 내 역할을 맡는 '복잡한 과정'."
    },
    'rigorous': {
      example: "The training program is very rigorous.",
      translation: "그 훈련 프로그램은 매우 엄격하다.",
      mnemonic: "'니(ri) 거(gor) 어스(ous)'! 네 거는 우리에게 '엄격한' 규칙을 적용한다."
    },
    'rile': {
      example: "His constant complaints riled his coworkers.",
      translation: "그의 끊임없는 불평은 동료들을 짜증 나게 했다.",
      mnemonic: "'라일(rile)'락 향기가 너무 강해 '짜증나게 하다'."
    },
    'rind': {
      example: "Don't eat the rind of the watermelon.",
      translation: "수박 껍질은 먹지 마세요.",
      mnemonic: "'라인(line)'을 '드(d)'! 선을 그어 '껍질'을 구분하다."
    },
    'riot': {
      example: "A riot broke out after the football match.",
      translation: "축구 경기 후에 폭동이 일어났다.",
      mnemonic: "'라이엇(riot)' 게임즈! '폭동'처럼 열광적인 게임."
    },
    'ripen': {
      example: "The bananas will ripen in a few days.",
      translation: "바나나는 며칠 안에 익을 것이다.",
      mnemonic: "'라이프(ripe-익은)'! '익다'."
    },
    'risible': {
      example: "He made a risible attempt to sing.",
      translation: "그는 노래를 부르려는 우스꽝스러운 시도를 했다.",
      mnemonic: "'라이즈(rise)'! 웃음이 솟아오르는 '우스운'."
    },
    'rite': {
      example: "The funeral rite was performed by a priest.",
      translation: "장례 의식은 신부에 의해 거행되었다.",
      mnemonic: "'라이트(right)'! '올바른' '의식'."
    },
    'rive': {
      example: "The community was riven by conflict.",
      translation: "그 공동체는 갈등으로 분열되었다.",
      mnemonic: "'리버(river)'! 강이 땅을 '찢다, 쪼개다'."
    },
    'riveting': {
      example: "The movie was absolutely riveting.",
      translation: "그 영화는 정말 매혹적이었다.",
      mnemonic: "'리벳(rivet)'! 리벳으로 고정하듯 시선을 고정시키는 '매혹적인'."
    },
    'rivulet': {
      example: "A small rivulet ran through the forest.",
      translation: "작은 시내가 숲을 가로질러 흘렀다.",
      mnemonic: "'리버(river)'의 '렛(let-작은)'! 작은 강, '시내'."
    },
    'robust': {
      example: "He is a robust and healthy man.",
      translation: "그는 튼튼하고 건강한 남자이다.",
      mnemonic: "'로보트(robot)'처럼 '튼튼한'."
    },
    'rodent': {
      example: "Rats and mice are rodents.",
      translation: "쥐와 생쥐는 설치류이다.",
      mnemonic: "'로(ro) 덴트(dent-이빨)'! 이빨로 갉아먹는 '설치류'."
    },
    'rodomontade': {
      example: "His speech was full of rodomontade and empty promises.",
      translation: "그의 연설은 허풍과 공허한 약속으로 가득했다.",
      mnemonic: "'로도(rodo) 몬(mon) 타드(tade)'! '로드(road)' 위에서 '몬스터'를 '탔다'는 '허풍'."
    },
    'roil': {
      example: "The political scandal roiled the country.",
      translation: "그 정치 스캔들은 나라를 휘저었다.",
      mnemonic: "'로얄(royal)'! 왕실을 '휘저어' 어지럽히다."
    },
    'roister': {
      example: "They roistered all night at the pub.",
      translation: "그들은 선술집에서 밤새 술 마시며 떠들었다.",
      mnemonic: "'로이스(royce)'! 롤스로이스 타고 '술 마시며 떠들다'."
    },
    'rookie': {
      example: "The rookie player made a great debut.",
      translation: "그 신인 선수는 멋진 데뷔를 했다.",
      mnemonic: "'루키(rookie)'! '신인'."
    },
    'roster': {
      example: "The coach posted the team roster on the wall.",
      translation: "코치는 팀 명단을 벽에 게시했다.",
      mnemonic: "'로스터(roaster)'! 커피 볶는 '근무 당번표'."
    },
    'rostrum': {
      example: "The politician stood on the rostrum to give his speech.",
      translation: "그 정치가는 연설을 하기 위해 연단에 섰다.",
      mnemonic: "'로스트(lost)' 룸! 길 잃은 방에서 '연단'을 발견하다."
    },
    'rosy': {
      example: "She has a rosy outlook on life.",
      translation: "그녀는 인생에 대해 낙관적인 전망을 가지고 있다.",
      mnemonic: "'로즈(rose)'! 장미처럼 '장밋빛의, 낙관적인'."
    },
    'rotundity': {
      example: "His rotundity was the result of his love for food.",
      translation: "그의 비만은 음식에 대한 그의 사랑의 결과였다.",
      mnemonic: "'로테이션(rotation)'도 힘든 '비만'."
    },
    'roundabout': {
      example: "He gave a roundabout answer to the question.",
      translation: "그는 그 질문에 우회적인 대답을 했다.",
      mnemonic: "'라운드(round) 어바웃(about)'! 빙빙 도는 '우회적인'."
    },
    'rouse': {
      example: "The noise roused him from his sleep.",
      translation: "그 소음은 그를 잠에서 깨웠다.",
      mnemonic: "'라우스(rouse)'! '나'를 '우스'꽝스럽게 만들어 '자극하다'."
    },
    'rout': {
      example: "The army suffered a complete rout.",
      translation: "그 군대는 완벽한 참패를 당했다.",
      mnemonic: "적의 루트(route)를 몰라 '참패'하다."
    },
    'royalty': {
      example: "The author receives a royalty for every book sold.",
      translation: "그 작가는 팔리는 책마다 인세를 받는다.",
      mnemonic: "'로열(royal)'! 왕족처럼 받는 '인세'."
    },
    'rubble': {
      example: "The building was reduced to rubble by the earthquake.",
      translation: "그 건물은 지진으로 인해 잔해 더미가 되었다.",
      mnemonic: "'러블(rubble)'리! 사랑스럽던 건물이 '잔해'가 되다."
    },
    'rubicund': {
      example: "He had a rubicund complexion.",
      translation: "그는 혈색 좋은 안색을 가졌다.",
      mnemonic: "'루비(ruby)'처럼 '혈색이 좋은'."
    },
    'rudder': {
      example: "The rudder of the ship was damaged.",
      translation: "그 배의 방향타가 손상되었다.",
      mnemonic: "'러더(rudder)'! '너 더' 똑바로 가도록 '방향타'를 잡아."
    },
    'ruddy': {
      example: "She has a ruddy and healthy face.",
      translation: "그녀는 혈색이 좋고 건강한 얼굴을 가지고 있다.",
      mnemonic: "'러디(ruddy)'! '너 뒤'에 '혈색 좋은' 사람이 있다."
    },
    'rudiment': {
      example: "He is learning the rudiments of chemistry.",
      translation: "그는 화학의 기초를 배우고 있다.",
      mnemonic: "'루디(rudi) 먼트(ment)'! '누디'한 상태, 즉 '기초' 상태."
    },
    'rue': {
      example: "He will rue the day he met her.",
      translation: "그는 그녀를 만난 날을 후회할 것이다.",
      mnemonic: "'루(rue)'! 눈물을 '루'비처럼 흘리며 '후회하다'."
    },
    'rueful': {
      example: "He gave a rueful smile.",
      translation: "그는 애처로운 미소를 지었다.",
      mnemonic: "'rue(후회하다)'! 후회가 가득하니 '애처로운'."
    },
    'ruffian': {
      example: "A group of ruffians attacked the man.",
      translation: "한 무리의 악당들이 그 남자를 공격했다.",
      mnemonic: "'러피(rough)'! 거친 '악당'."
    },
    'ruffle': {
      example: "The wind ruffled the surface of the water.",
      translation: "바람이 수면을 물결치게 했다.",
      mnemonic: "'러플(ruffle)' 달린 옷처럼 '주름지게 하다'."
    },
    'ruminate': {
      example: "She ruminated for weeks about whether to take the job.",
      translation: "그녀는 그 일자리를 수락할지에 대해 몇 주 동안 심사숙고했다.",
      mnemonic: "'룸(room)'에 '네이트(nate)'! 방에서 밤새도록 '심사숙고하다'."
    },
    'rumple': {
      example: "Don't rumple your new shirt.",
      translation: "새 셔츠를 구기지 마라.",
      mnemonic: "'럼(rum)'을 '플(ple)'! 럼주를 옷에 흘려 '구기다'."
    },
    'run': {
      example: "The play had a successful run on Broadway.",
      translation: "그 연극은 브로드웨이에서 성공적인 연속 공연을 했다.",
      mnemonic: "계속 '달리는(run)' '연속 공연'."
    },
    'rupture': {
      example: "The incident led to a rupture in their friendship.",
      translation: "그 사건은 그들의 우정에 파열을 가져왔다.",
      mnemonic: "'랩처(rapture)'! 황홀경에 빠져 배가 '터지다(rupture)'."
    },
    'ruse': {
      example: "It was all a clever ruse to get the money.",
      translation: "그것은 모두 돈을 얻기 위한 교묘한 계략이었다.",
      mnemonic: "'루즈(ruse)'! 루즈를 바르며 '계략'을 꾸미다."
    },
    'rustic': {
      example: "The cottage has a rustic charm.",
      translation: "그 오두막은 소박한 매력이 있다.",
      mnemonic: "'러스틱(rustic)'! '녹'이 슨 '스틱', '시골풍의'."
    },
    'rustle': {
      example: "The leaves rustled in the wind.",
      translation: "나뭇잎들이 바람에 바스락거렸다.",
      mnemonic: "'러슬(rustle)'! '너 슬'쩍 '가축을 훔치다'니!"
    },
    'sabbatical': {
      example: "The professor is on sabbatical for a year.",
      translation: "그 교수는 1년간 안식년이다.",
      mnemonic: "'사바티칼(sabbatical)'! '사'막에서 '밭'을 가는 '안식년'."
    },
    'sabotage': {
      example: "The factory was damaged by an act of sabotage.",
      translation: "그 공장은 파괴 행위로 손상되었다.",
      mnemonic: "'사보타주(sabotage)'! '파괴 행위'."
    },
    'saboteur': {
      example: "The saboteur was caught trying to plant a bomb.",
      translation: "그 파괴 공작원은 폭탄을 설치하려다 잡혔다.",
      mnemonic: "'sabotage(파괴 행위)'를 하는 사람."
    },
    'saccharine': {
      example: "The movie was too saccharine for my taste.",
      translation: "그 영화는 내 취향에는 너무 달콤했다.",
      mnemonic: "'사카린(saccharin)'! 설탕처럼 '지나치게 달콤한'."
    },
    'sacrifice': {
      example: "She made a great sacrifice for her children.",
      translation: "그녀는 자녀들을 위해 큰 희생을 했다.",
      mnemonic: "'새크리파이스(sacrifice)'! '희생'."
    },
    'sacrilege': {
      example: "It is considered a sacrilege to deface a holy book.",
      translation: "성스러운 책을 훼손하는 것은 신성 모독으로 간주된다.",
      mnemonic: "'새크리드(sacred-신성한)'! 신성한 것을 '리지(lege-어기다)'! '신성 모독'."
    },
    'saddle': {
      example: "He saddled the horse and rode away.",
      translation: "그는 말에 안장을 얹고 떠났다.",
      mnemonic: "'새들(saddle)'! '안장'."
    },
    'safeguard': {
      example: "The new law is designed to safeguard the environment.",
      translation: "새 법은 환경을 보호하기 위해 고안되었다.",
      mnemonic: "'세이프(safe) 가드(guard)'! '안전장치'."
    },
    'sag': {
      example: "The old mattress sagged in the middle.",
      translation: "낡은 매트리스는 가운데가 축 처졌다.",
      mnemonic: "'삭(sag)'! 삭신이 쑤셔서 '축 처지다'."
    },
    'sagacious': {
      example: "He was a sagacious leader.",
      translation: "그는 현명한 지도자였다.",
      mnemonic: "'세이지(sage-현자)'! 현자처럼 '현명한'."
    },
    'sagacity': {
      example: "She is known for her sagacity and good judgment.",
      translation: "그녀는 현명함과 훌륭한 판단력으로 알려져 있다.",
      mnemonic: "'sagacious(현명한)'의 명사형, '현명'."
    },
    'sage': {
      example: "The old man was a sage who gave wise advice.",
      translation: "그 노인은 현명한 조언을 해주는 현인이었다.",
      mnemonic: "'세이지(sage)'! '현인'."
    },
    'salient': {
      example: "He summarized the salient points of the report.",
      translation: "그는 보고서의 현저한 요점들을 요약했다.",
      mnemonic: "'세일(sale)'! 세일 상품은 '두드러진'다."
    },
    'sallow': {
      example: "Her face was sallow after the long illness.",
      translation: "오랜 병을 앓고 난 후 그녀의 얼굴은 혈색이 나빴다.",
      mnemonic: "'샐로우(sallow)'! '살'이 '로우(low)'! 살이 빠져 '혈색이 나쁜'."
    },
    'salmon': {
      example: "I had grilled salmon for dinner.",
      translation: "나는 저녁으로 구운 연어를 먹었다.",
      mnemonic: "'샐몬(salmon)'! '연어'."
    },
    'salubrious': {
      example: "The salubrious mountain air was refreshing.",
      translation: "건강에 좋은 산 공기는 상쾌했다.",
      mnemonic: "'살루(salu-건강)'! '건강에 좋은'."
    },
    'salutary': {
      example: "The experience was a salutary lesson for him.",
      translation: "그 경험은 그에게 유익한 교훈이었다.",
      mnemonic: "'살루(salu-건강)'! '건강에 좋은, 유익한'."
    },
    'salutation': {
      example: "The letter began with a formal salutation.",
      translation: "그 편지는 격식 있는 인사말로 시작되었다.",
      mnemonic: "'살루트(salute-경례)'! '인사'."
    },
    'salvage': {
      example: "They managed to salvage some of their belongings from the fire.",
      translation: "그들은 화재 속에서 소지품 일부를 간신히 구조했다.",
      mnemonic: "'살(sal) 베지(vage)'! 살을 베어서라도 '구출하다'."
    },
    'salve': {
      example: "She applied a salve to the burn.",
      translation: "그녀는 화상에 연고를 발랐다.",
      mnemonic: "'살브(salve)'! '살'을 '브'이! 살을 낫게 하는 '연고'."
    },
    'salvo': {
      example: "The attack began with a salvo of missiles.",
      translation: "공격은 미사일 일제 사격으로 시작되었다.",
      mnemonic: "'살(sal) 보(vo)'! 살을 보이며 유혹하는 말의 '일제 사격'."
    },
    'sanctify': {
      example: "The church was sanctified by a bishop.",
      translation: "그 교회는 주교에 의해 신성하게 되었다.",
      mnemonic: "'생텀(sanctum-성소)'! 성소처럼 '신성하게 하다'."
    },
    'sanctimonious': {
      example: "He gave a sanctimonious speech about morality.",
      translation: "그는 도덕에 대해 독실한 신자인 체하는 연설을 했다.",
      mnemonic: "'생텀(sanctum-성소)'에서 '머니(mony)'만 밝히는 '독실한 체하는'."
    },
    'sanction': {
      example: "The government imposed sanctions on the country.",
      translation: "정부는 그 나라에 제재를 가했다.",
      mnemonic: "'생션(sanction)'! '제재, 인가'."
    },
    'sanctuary': {
      example: "The church provided sanctuary for the refugees.",
      translation: "그 교회는 난민들에게 피난처를 제공했다.",
      mnemonic: "'생텀(sanctum-성소)'! '성역, 피난처'."
    },
    'sand': {
      example: "He sanded the rough surface of the wood.",
      translation: "그는 나무의 거친 표면을 사포질했다.",
      mnemonic: "'샌드(sand)' 페이퍼! '모래'로 '사포질하다'."
    },
    'sanguine': {
      example: "He is sanguine about the company's future.",
      translation: "그는 회사의 미래에 대해 낙관적이다.",
      mnemonic: "'생귄(sanguine)'! '생기' 넘치고 '낙천적인'."
    },
    'sanitation': {
      example: "Poor sanitation can cause the spread of diseases.",
      translation: "열악한 위생은 질병의 확산을 유발할 수 있다.",
      mnemonic: "'새니타이저(sanitizer)'! '위생'을 위한 소독제."
    },
    'sap': {
      example: "The long illness sapped his strength.",
      translation: "오랜 병은 그의 힘을 약화시켰다.",
      mnemonic: "'삽(sap)'질로 기운을 '약화시키다'."
    },
    'sapient': {
      example: "The sapient old man gave me some good advice.",
      translation: "그 지혜로운 노인은 나에게 좋은 조언을 해주었다.",
      mnemonic: "호모 '사피엔스(sapiens)'! '지혜로운' 인간."
    }
  }
};
