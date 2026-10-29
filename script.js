// ------------------------------------------
//  ANA MOTOR & DİL TESPİTİ
// ------------------------------------------

// Eski Service Worker ve önbellekleri temizle (Yeni güncellemelerin anında görünmesini garanti eder)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const reg of registrations) reg.unregister();
    }).catch(() => {});
    if (window.caches) {
        caches.keys().then(keys => {
            for (const key of keys) caches.delete(key);
        }).catch(() => {});
    }
}

let savedLang = null;
try {
    savedLang = localStorage.getItem('atmos-user-lang');
} catch (e) {}

let userBrowserLang = navigator.language || navigator.userLanguage || 'en';
let currentLang = (savedLang === 'tr' || savedLang === 'en')
    ? savedLang
    : (userBrowserLang.toLowerCase().startsWith('tr') ? 'tr' : 'en');

// ------------------------------------------
//  DİL SÖZLÜĞÜ VE YERELLEŞTİRME (TR / EN)
// ------------------------------------------
document.documentElement.lang = currentLang;

function normalizeTheme(themeName) {
    if (!themeName) return 'cyber-world';
    if (themeName === 'welcome-to-oregon') return 'the-pasific-crest';
    if (themeName === 'kawaii-space') return 'milky-way';
    return themeName;
}

const translations = {
    'en': {
        fullscreen: "⛶ Fullscreen", minimize: "⛶ Minimize",
        home: "Home", stopwatch: "Stopwatch", timer: "Timer", pomodoro: "Pomodoro", todo: "To-Do", alarm: "Alarm Clock", worldclock: "World Clock", birthchart: "Birth Chart",
        start: "Start", stop: "Stop", lap: "Lap", reset: "Reset", pause: "Pause / Stop", set: "Set", cancel: "Cancel", add: "+ Add", load: "Load Player",
        noAlarm: "No Alarm Set", snooze: "Snooze (5 min)", dismiss: "Dismiss", calc: "Calculate",
        timeIsUp: "Time is up!", alarmRinging: "Alarm Ringing!", alarmSet: "Alarm set",
        supportTitle: "Support Me!", buyCoffee: "Buy Me a Coffee",
        
        bcSun: "Sun Sign: ", bcElement: "Element: ", bcChinese: "Chinese Zodiac: ", bcLifePath: "Life Path Number: ", bcMoon: "Moon Phase: ",
        sndWinter: "Winter Wind", sndRain: "Rain", sndBirds: "Birds", sndBirdsRain: "Birds in the Rain", sndWaves: "Waves & Seagulls", sndFire: "Fireplace", sndCafe: "Cafe Ambience", sndTrain: "Train Journey", sndKoto: "Koto (Japanese Zither)",
        quickNote: "<strong>Quick Note:</strong> High data usage. Wi-Fi recommended.",

        features: "FEATURES", visualThemes: "VISUAL THEMES", audios: "MUSICS",
        sounds: "AMBIENT SOUNDS", lobbyMusic: "LOBBY MUSIC", musicPlayer: "MUSIC PLAYER",
        subtabFreq: "Frequencies", subtabRadio: "Live Radio", subtabEmbed: "Custom Embed",
        tabRadio: "Radio", tabFreq: "Freq", tabAmbient: "Ambient", tabPlaylist: "Playlist", tabLobby: "Lobby", tabEmbed: "Custom",
        ttHome: "Home", ttFeatures: "Features", ttMusic: "Music", ttVisual: "Visual", ttCoffee: "Support Me", ttMap: "MAP",
        timerHr: "Hr", timerMin: "Min", timerSec: "Sec",
        pomoFocus: "Focus Time", pomoBreak: "Break Time", pomoSession: "Session",
        featuresTitle: "FEATURES", preferencesTitle: "PREFERENCES", langLabel: "Language",
        themeScenes: "THEME SCENES", sceneWord: "Scene", customVisual: "CUSTOM VISUAL",
        dragDrop: "Drag & Drop", fileHere: "your file here", dropSupports: "Supports Image, GIF, MP4",
        
        freq432: "432Hz Miracle Tone", freq528: "528Hz Solfeggio Love", freqAlpha: "Alpha Waves (10Hz Focus)",
        freqTheta: "Theta Waves (6Hz Flow)", freqDelta: "Delta Waves (2Hz Sleep)", freqSchumann: "7.83Hz Earth Resonance",

        themeCowboy: "Cowboy Era", themeCyber: "Cyber World", themeDarkFan: "Dark Fantasy",
        themeLightFan: "Light Fantasy", themeJazz: "Jazz & Romance", themeRock: "Rock n' Roll",
        themeOregon: "The Pasific Crest", themeKawaii: "Milky Way",

        bldCowboy: "Wild West Saloon", bldCyber: "Cyberpunk Skyscraper", bldDark: "Cursed Cathedral",
        bldLight: "Dragon's Sanctuary", bldJazz: "New York Velvet Jazz", bldRock: "Children of Democracy Motor Club",
        bldOregon: "Welcome to Oregon", bldKawaii: "Kawaii Space",
        
        radioLos40: "LOS40",
        radioTrtRadyo3: "TRT Radyo 3",
        radioChanteFrance: "Chante France",
        radioFlashFm: "Flash FM",
        radioLagosJump: "LagosJump Radio",
        radioRadioX: "Radio X",
        radioCapitalFm: "Capital FM",
        radioAsiaDream: "Asia DREAM Radio",
        radioKexp: "KEXP 90.3 FM",
        radioRadioParadise: "Radio Paradise",
        radioFipParis: "FIP",
        radioPowerFm: "Power FM",
        radioClassicFm: "Classic FM",
        radioBbcWorld: "Radio X", radioNtsRadio: "Asia DREAM Radio",
        radioCowboy: "Radio X", radioCyber: "Flash FM", radioDark: "Radio Paradise",
        radioLight: "Chante France", radioJazz: "TRT Radyo 3", radioRock: "Radio X",
        radioOregon: "Classic FM", radioKawaii: "Asia DREAM Radio",
        radioLofi: "Chante France", radioSynth: "Flash FM", radioSpace: "Radio Paradise", radioPiano: "FIP Paris",
        radioConnecting: "Connecting to station...", radioErrorFallback: "Stream unavailable",
        
        mapSubtitle: "CHOOSE YOUR VIBE", mapExplore: "EXPLORE", hudEnter: "Enter", hudTapEnter: "Tap to Enter",
        
        loadVisual: "LOAD VISUAL / GIF", myMusic: "LOAD MUSIC",
        chooseFile: "Choose Image / GIF / Video", orWord: "— OR —", placeholderVisual: "Paste Image/GIF/Video URL...", apply: "Apply", resetVis: "Reset",
        placeholderTodo: "Add a task...", placeholderEmbed: "Paste Spotify/YouTube URL...",
        
        localTime: "Local Time", cityIst: "Istanbul", cityNy: "New York", cityLon: "London", cityTok: "Tokyo",
        awaitingAudio: "Awaiting audio...", timerAlarmSound: "Sound by: Nickpanekaiassets from Pixabay",
        musicBy: "Music by:", soundBy: "Sound by:", playPauseAudio: "Play / Pause Active Audio", soundPlaying: "Sound is Playing...",
        specialMix: "Special mix:", soundsActive: "sounds active", trackWord: "Track", noCopyright: "Copyright Information Not Found",
        vibeHint: 'Set your vibe, then <strong>rotate your device</strong> for the ultimate fullscreen experience.',
        extAtmosphere: "DRUNKEN SEMAPHORE",
        shuffle: "SHUFFLE",
        guideA: "Enter", guideB: "Reset", guideX: "Random", guideY: "Lobby Audio",
        orientExtTitle: "PORTRAIT MODE",
        orientExtDesc: "This screen is designed for portrait. Please rotate your device to portrait.",
        orientMapTitle: "LANDSCAPE CONSOLE",
        orientMapDesc: "The map console is designed for landscape. Please rotate your device to landscape.",
        orientRoomTitle: "PORTRAIT CONSOLE",
        orientRoomDesc: "The console is designed for portrait. Please rotate your device to portrait or enter fullscreen mode.",
        orientCinemaTitle: "CINEMATIC MODE",
        orientCinemaDesc: "Cinematic mode is designed for landscape. Please rotate your device to landscape.",
        rotateForConsole: "Rotate to portrait for console",
    },
    'tr': {
        fullscreen: "⛶ Tam Ekran", minimize: "⛶ Küçült",
        home: "Ana Sayfa", stopwatch: "Kronometre", timer: "Sayaç", pomodoro: "Pomodoro", todo: "Yapılacaklar", alarm: "Alarm", worldclock: "Dünya Saati", birthchart: "Doğum Haritası",
        start: "Başlat", stop: "Durdur", lap: "Tur", reset: "Sıfırla", pause: "Duraklat / Bitir", set: "Kur", cancel: "İptal", add: "+ Ekle", load: "Oynatıcıyı Yükle",
        noAlarm: "Alarm Kurulmadı", snooze: "Ertele (5 dk)", dismiss: "Kapat", calc: "Hesapla",
        timeIsUp: "Süre doldu!", alarmRinging: "Alarm Çalıyor!", alarmSet: "Alarm kuruldu",
        supportTitle: "Destek Ol!", buyCoffee: "Kahve Ismarla",
        
        bcSun: "Güneş Burcu: ", bcElement: "Element: ", bcChinese: "Çin Burcu: ", bcLifePath: "Yaşam Yolu Sayısı: ", bcMoon: "Ay Evresi: ",
        sndWinter: "Kış Rüzgarı", sndRain: "Yağmur", sndBirds: "Kuş Sesleri", sndBirdsRain: "Yağmurda Kuşlar", sndWaves: "Dalga & Martı", sndFire: "Şömine", sndCafe: "Kafeterya", sndTrain: "Tren Yolculuğu", sndKoto: "Koto (Japon Çengi)",
        quickNote: "<strong>Kısa Not:</strong> Yüksek veri kullanımı. Wi-Fi önerilir.",

        features: "ÖZELLİKLER", visualThemes: "GÖRSEL TEMALAR", audios: "MÜZİKLER",
        sounds: "AMBİYANS SESLERİ", lobbyMusic: "LOBİ MÜZİĞİ", musicPlayer: "MÜZİK ÇALAR",
        subtabFreq: "Frekanslar", subtabRadio: "Canlı Radyo", subtabEmbed: "Özel Bağlantı",
        tabRadio: "Radyo", tabFreq: "Frekans", tabAmbient: "Ambiyans", tabPlaylist: "Liste", tabLobby: "Lobi", tabEmbed: "Serbest",
        ttHome: "Ana Sayfa", ttFeatures: "Özellikler", ttMusic: "Müzik", ttVisual: "Görsel", ttCoffee: "Destek Ol", ttMap: "Harita",
        timerHr: "Sa", timerMin: "Dk", timerSec: "Sn",
        pomoFocus: "Odak Zamanı", pomoBreak: "Mola Zamanı", pomoSession: "Oturum",
        featuresTitle: "ÖZELLİKLER", preferencesTitle: "TERCİHLER", langLabel: "Dil",
        themeScenes: "TEMA SAHNELERİ", sceneWord: "Sahne", customVisual: "ÖZEL GÖRSEL",
        dragDrop: "Sürükle & Bırak", fileHere: "dosyanı buraya bırak", dropSupports: "Resim, GIF, MP4 Destekler",
        
        freq432: "432Hz Mucize Tonu", freq528: "528Hz Sevgi & DNA", freqAlpha: "Alfa Dalgaları (10Hz Odak)",
        freqTheta: "Teta Dalgaları (6Hz Akış)", freqDelta: "Delta Dalgaları (2Hz Uyku)", freqSchumann: "7.83Hz Yeryüzü Rezonansı",

        themeCowboy: "Cowboy Era", themeCyber: "Cyber World", themeDarkFan: "Dark Fantasy",
        themeLightFan: "Light Fantasy", themeJazz: "Jazz & Dine", themeRock: "Rock n' Roll",
        themeOregon: "The Pasific Crest", themeKawaii: "Milky Way",

        bldCowboy: "Vahşi Batı Salon", bldCyber: "Cyberpunk Gökdelen", bldDark: "Lanetli Katedral",
        bldLight: "Ejderhanın Sığınağı", bldJazz: "New York Kadife Caz", bldRock: "Demokrasinin Çocukları Motor Kulübü",
        bldOregon: "Oregon'a Hoşgeldiniz", bldKawaii: "Tatlış Uzay",
        
        radioLos40: "LOS40",
        radioTrtRadyo3: "TRT Radyo 3",
        radioChanteFrance: "Chante France",
        radioFlashFm: "Flash FM",
        radioLagosJump: "LagosJump Radio",
        radioRadioX: "Radio X",
        radioCapitalFm: "Capital FM",
        radioAsiaDream: "Asia DREAM Radio",
        radioKexp: "KEXP 90.3 FM",
        radioRadioParadise: "Radio Paradise",
        radioFipParis: "FIP",
        radioPowerFm: "Power FM",
        radioClassicFm: "Classic FM",
        radioBbcWorld: "Radio X", radioNtsRadio: "Asia DREAM Radio",
        radioCowboy: "Radio X", radioCyber: "Flash FM", radioDark: "Radio Paradise",
        radioLight: "Chante France", radioJazz: "TRT Radyo 3", radioRock: "Radio X",
        radioOregon: "Classic FM", radioKawaii: "Asia DREAM Radio",
        radioLofi: "Chante France", radioSynth: "Flash FM", radioSpace: "Radio Paradise", radioPiano: "FIP Paris",
        radioConnecting: "İstasyona bağlanıyor...", radioErrorFallback: "Yayın açılamadı",

        mapSubtitle: "MEKANINI SEÇ", mapExplore: "KEŞFET", hudEnter: "Giriş Yap", hudTapEnter: "Giriş İçin Dokun",

        loadVisual: "GÖRSEL / GIF YÜKLE", myMusic: "MÜZİK YÜKLE",
        chooseFile: "Görsel / GIF / Video Seç", orWord: "— VEYA —", placeholderVisual: "Görsel/GIF/Video Bağlantısı Yapıştırın...", apply: "Uygula", resetVis: "Sıfırla",
        placeholderTodo: "Görev ekle...", placeholderEmbed: "Spotify veya YouTube bağlantısı yapıştırın...",
        
        localTime: "Yerel Saat", cityIst: "İstanbul", cityNy: "New York", cityLon: "Londra", cityTok: "Tokyo",
        awaitingAudio: "Ses bekleniyor...", timerAlarmSound: "Ses: Nickpanekaiassets (Pixabay)",
        musicBy: "Müzik:", soundBy: "Ses:", playPauseAudio: "Aktif Sesi Başlat / Duraklat", soundPlaying: "Ses Çalıyor...",
        specialMix: "Özel Karışım:", soundsActive: "ses aktif", trackWord: "Parça", noCopyright: "Telif Bilgisi Bulunamadı",
        vibeHint: 'Havanı kur, ardından tam ekran deneyimi için <strong>cihazını yan çevir</strong>.',
        extAtmosphere: "DRUNKEN SEMAPHORE",
        shuffle: "KARIŞIK",
        guideA: "Giriş Yap", guideB: "Sıfırla", guideX: "Rastgele", guideY: "Lobi Müziği",
        orientExtTitle: "DİKEY KULLANIM",
        orientExtDesc: "Bu ekran dikey kullanım için tasarlanmıştır. Lütfen cihazınızı dikey konuma getirin.",
        orientMapTitle: "YATAY KONSOL",
        orientMapDesc: "Harita konsolu yatay kullanım için tasarlanmıştır. Lütfen cihazınızı yatay konuma getirin.",
        orientRoomTitle: "DİKEY KONSOL",
        orientRoomDesc: "Konsol görünümü dikey kullanım için tasarlanmıştır. Lütfen cihazınızı dikey konuma getirin veya tam ekran moduna geçin.",
        orientCinemaTitle: "SİNEMATİK MOD",
        orientCinemaDesc: "Sinematik tam ekran modu yatay kullanım için tasarlanmıştır. Lütfen cihazınızı yatay konuma getirin.",
        rotateForConsole: "Konsol için dikey çevirin",
    }
};

function applyTranslations() {
    const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;
    if (!t) return;

    const oExtT = document.querySelector('.txt-orient-ext-title'); if (oExtT && t.orientExtTitle) oExtT.innerText = t.orientExtTitle;
    const oExtD = document.querySelector('.txt-orient-ext-desc'); if (oExtD && t.orientExtDesc) oExtD.innerText = t.orientExtDesc;
    const oMapT = document.querySelector('.txt-orient-map-title'); if (oMapT && t.orientMapTitle) oMapT.innerText = t.orientMapTitle;
    const oMapD = document.querySelector('.txt-orient-map-desc'); if (oMapD && t.orientMapDesc) oMapD.innerText = t.orientMapDesc;
    const oRoomT = document.querySelector('.txt-orient-room-title'); if (oRoomT && t.orientRoomTitle) oRoomT.innerText = t.orientRoomTitle;
    const oRoomD = document.querySelector('.txt-orient-room-desc'); if (oRoomD && t.orientRoomDesc) oRoomD.innerText = t.orientRoomDesc;
    const oCinT = document.querySelector('.txt-orient-cinema-title'); if (oCinT && t.orientCinemaTitle) oCinT.innerText = t.orientCinemaTitle;
    const oCinD = document.querySelector('.txt-orient-cinema-desc'); if (oCinD && t.orientCinemaDesc) oCinD.innerText = t.orientCinemaDesc;
    const rHint = document.querySelector('.txt-rotate-for-console'); if (rHint && t.rotateForConsole) rHint.innerText = t.rotateForConsole;

    const gA = document.querySelector('.txt-guide-a'); if (gA && t.guideA) gA.innerText = t.guideA;
    const gB = document.querySelector('.txt-guide-b'); if (gB && t.guideB) gB.innerText = t.guideB;
    const gX = document.querySelector('.txt-guide-x'); if (gX && t.guideX) gX.innerText = t.guideX;
    const gY = document.querySelector('.txt-guide-y'); if (gY && t.guideY) gY.innerText = t.guideY;

    const shuffleLabel = document.querySelector('.txt-shuffle-label'); if (shuffleLabel && t.shuffle) shuffleLabel.innerText = t.shuffle;

    const tabHome = document.querySelector('.tab-txt-home'); if (tabHome) tabHome.innerText = t.home;
    const tabSw = document.querySelector('.tab-txt-stopwatch'); if (tabSw) tabSw.innerText = t.stopwatch;
    const tabTimer = document.querySelector('.tab-txt-timer'); if (tabTimer) tabTimer.innerText = t.timer;
    const tabPomo = document.querySelector('.tab-txt-pomodoro'); if (tabPomo) tabPomo.innerText = t.pomodoro;
    const tabTodo = document.querySelector('.tab-txt-todo'); if (tabTodo) tabTodo.innerText = t.todo;
    const tabAlarm = document.querySelector('.tab-txt-alarm'); if (tabAlarm) tabAlarm.innerText = t.alarm;
    const tabWc = document.querySelector('.tab-txt-worldclock'); if (tabWc) tabWc.innerText = t.worldclock;
    const tabBc = document.querySelector('.tab-txt-birthchart'); if (tabBc) tabBc.innerText = t.birthchart;

    const h2Sw = document.querySelector('.view-h2-stopwatch'); if (h2Sw) h2Sw.innerText = t.stopwatch;
    const h2Timer = document.querySelector('.view-h2-timer'); if (h2Timer) h2Timer.innerText = t.timer;
    const h2Pomo = document.querySelector('.view-h2-pomodoro'); if (h2Pomo) h2Pomo.innerText = t.pomodoro;
    const h2Todo = document.querySelector('.view-h2-todo'); if (h2Todo) h2Todo.innerText = t.todo;
    const h2Alarm = document.querySelector('.view-h2-alarm'); if (h2Alarm) h2Alarm.innerText = t.alarm;
    const h2Wc = document.querySelector('.view-h2-worldclock'); if (h2Wc) h2Wc.innerText = t.worldclock;
    const h2Bc = document.querySelector('.view-h2-birthchart'); if (h2Bc) h2Bc.innerText = t.birthchart;

    const txtFeat = document.querySelector('.txt-features'); if (txtFeat) txtFeat.innerText = t.features;
    const txtVis = document.querySelector('.txt-visual-themes'); if (txtVis) txtVis.innerText = t.visualThemes;
    const txtAud = document.querySelector('.txt-audios'); if (txtAud) txtAud.innerText = t.audios;
    const txtAmb = document.querySelector('.txt-ambient-sounds'); if (txtAmb) txtAmb.innerText = t.sounds;
    const txtLobby = document.querySelector('.txt-lobby-music'); if (txtLobby) txtLobby.innerText = t.lobbyMusic;
    const txtMusPlayer = document.querySelector('.txt-music-player'); if (txtMusPlayer) txtMusPlayer.innerText = t.musicPlayer;

    const txtSubFreq = document.querySelector('.txt-subtab-freq'); if (txtSubFreq) txtSubFreq.innerText = t.subtabFreq;
    const txtSubRadio = document.querySelector('.txt-subtab-radio'); if (txtSubRadio) txtSubRadio.innerText = t.subtabRadio;
    const txtSubEmbed = document.querySelector('.txt-subtab-embed'); if (txtSubEmbed) txtSubEmbed.innerText = t.subtabEmbed;

    const tabRad = document.querySelector('.tab-lbl-radio'); if (tabRad) tabRad.innerText = t.tabRadio;
    const tabFrq = document.querySelector('.tab-lbl-freq'); if (tabFrq) tabFrq.innerText = t.tabFreq;
    const tabAmb = document.querySelector('.tab-lbl-ambient'); if (tabAmb) tabAmb.innerText = t.tabAmbient;
    const tabPly = document.querySelector('.tab-lbl-playlist'); if (tabPly) tabPly.innerText = t.tabPlaylist;
    const tabLob = document.querySelector('.tab-lbl-lobby'); if (tabLob) tabLob.innerText = t.tabLobby;
    const tabEmb = document.querySelector('.tab-lbl-embed'); if (tabEmb) tabEmb.innerText = t.tabEmbed;

    const ttH = document.querySelector('.dock-tt-home'); if (ttH) ttH.innerText = t.ttHome;
    const ttF = document.querySelector('.dock-tt-features'); if (ttF) ttF.innerText = t.ttFeatures;
    const ttM = document.querySelector('.dock-tt-music'); if (ttM) ttM.innerText = t.ttMusic;
    const ttV = document.querySelector('.dock-tt-visual'); if (ttV) ttV.innerText = t.ttVisual;

    const f432 = document.querySelector('.freq-txt-432'); if (f432) f432.innerText = t.freq432;
    const f528 = document.querySelector('.freq-txt-528'); if (f528) f528.innerText = t.freq528;
    const fAlpha = document.querySelector('.freq-txt-alpha'); if (fAlpha) fAlpha.innerText = t.freqAlpha;
    const fTheta = document.querySelector('.freq-txt-theta'); if (fTheta) fTheta.innerText = t.freqTheta;
    const fDelta = document.querySelector('.freq-txt-delta'); if (fDelta) fDelta.innerText = t.freqDelta;
    const fSchumann = document.querySelector('.freq-txt-schumann'); if (fSchumann) fSchumann.innerText = t.freqSchumann;

    const tCow = document.querySelector('.theme-txt-cowboy'); if (tCow) tCow.innerText = t.themeCowboy;
    const tCyb = document.querySelector('.theme-txt-cyber'); if (tCyb) tCyb.innerText = t.themeCyber;
    const tDfa = document.querySelector('.theme-txt-dark-fan'); if (tDfa) tDfa.innerText = t.themeDarkFan;
    const tLfa = document.querySelector('.theme-txt-light-fan'); if (tLfa) tLfa.innerText = t.themeLightFan;
    const tJaz = document.querySelector('.theme-txt-jazz'); if (tJaz) tJaz.innerText = t.themeJazz;
    const tRck = document.querySelector('.theme-txt-rock'); if (tRck) tRck.innerText = t.themeRock;
    const tOre = document.querySelector('.theme-txt-oregon'); if (tOre) tOre.innerText = t.themeOregon;
    const tKaw = document.querySelector('.theme-txt-kawaii'); if (tKaw) tKaw.innerText = t.themeKawaii;

    const lCow = document.querySelector('.lobby-txt-cowboy'); if (lCow) lCow.innerText = t.bldCowboy;
    const lCyb = document.querySelector('.lobby-txt-cyber'); if (lCyb) lCyb.innerText = t.bldCyber;
    const lDar = document.querySelector('.lobby-txt-dark-fan'); if (lDar) lDar.innerText = t.bldDark;
    const lLig = document.querySelector('.lobby-txt-light-fan'); if (lLig) lLig.innerText = t.bldLight;
    const lJaz = document.querySelector('.lobby-txt-jazz'); if (lJaz) lJaz.innerText = t.bldJazz;
    const lRck = document.querySelector('.lobby-txt-rock'); if (lRck) lRck.innerText = t.bldRock;
    const lOre = document.querySelector('.lobby-txt-oregon'); if (lOre) lOre.innerText = t.bldOregon;
    const lKaw = document.querySelector('.lobby-txt-kawaii'); if (lKaw) lKaw.innerText = t.bldKawaii;

    const rLos = document.querySelector('.radio-txt-los40'); if (rLos) rLos.innerText = t.radioLos40 || 'LOS40';
    const rTrt = document.querySelector('.radio-txt-trt-radyo-3'); if (rTrt) rTrt.innerText = t.radioTrtRadyo3 || 'TRT Radyo 3';
    const rChante = document.querySelector('.radio-txt-chante-france'); if (rChante) rChante.innerText = t.radioChanteFrance || 'Chante France';
    const rFlash = document.querySelector('.radio-txt-flash-fm'); if (rFlash) rFlash.innerText = t.radioFlashFm || 'Flash FM';
    const rLagos = document.querySelector('.radio-txt-lagos-jump'); if (rLagos) rLagos.innerText = t.radioLagosJump || 'LagosJump Radio';
    const rRadX = document.querySelector('.radio-txt-radio-x'); if (rRadX) rRadX.innerText = t.radioRadioX || 'Radio X';
    const rCap = document.querySelector('.radio-txt-capital-fm'); if (rCap) rCap.innerText = t.radioCapitalFm || 'Capital FM';
    const rAsia = document.querySelector('.radio-txt-asia-dream'); if (rAsia) rAsia.innerText = t.radioAsiaDream || 'Asia DREAM Radio';
    const rKex = document.querySelector('.radio-txt-kexp'); if (rKex) rKex.innerText = t.radioKexp || 'KEXP 90.3 FM';
    const rPar = document.querySelector('.radio-txt-radio-paradise'); if (rPar) rPar.innerText = t.radioRadioParadise || 'Radio Paradise';
    const rFip = document.querySelector('.radio-txt-fip-paris'); if (rFip) rFip.innerText = t.radioFipParis || 'FIP Paris';
    const rPow = document.querySelector('.radio-txt-power-fm'); if (rPow) rPow.innerText = t.radioPowerFm || 'Power FM';
    const rCls = document.querySelector('.radio-txt-classic-fm'); if (rCls) rCls.innerText = t.radioClassicFm || 'Classic FM';

    document.querySelectorAll('.txt-awaiting-audio').forEach(el => {
        el.innerText = t.awaitingAudio || 'Awaiting audio...';
    });

    const txtLoadVis = document.querySelector('.txt-load-visual'); if (txtLoadVis) txtLoadVis.innerText = t.loadVisual;
    const txtMyM = document.querySelector('.txt-my-music'); if (txtMyM) txtMyM.innerText = t.myMusic;

    const txtChooseFile = document.querySelector('.txt-choose-file'); if (txtChooseFile) txtChooseFile.innerText = t.chooseFile;
    const txtOrWord = document.querySelector('.txt-or-word'); if (txtOrWord) txtOrWord.innerText = t.orWord;
    const visInp = document.getElementById('visual-url'); if (visInp) visInp.placeholder = t.placeholderVisual;
    const btnApply = document.querySelector('.btn-txt-apply'); if (btnApply) btnApply.innerText = t.apply;
    const btnResetVis = document.querySelector('.btn-txt-reset-vis'); if (btnResetVis) btnResetVis.innerText = t.resetVis;

    const sndWinter = document.querySelector('.snd-txt-winter'); if (sndWinter) sndWinter.innerText = t.sndWinter;
    const sndRain = document.querySelector('.snd-txt-rain'); if (sndRain) sndRain.innerText = t.sndRain;
    const sndBirds = document.querySelector('.snd-txt-birds'); if (sndBirds) sndBirds.innerText = t.sndBirds;
    const sndBirdsRain = document.querySelector('.snd-txt-birds-rain'); if (sndBirdsRain) sndBirdsRain.innerText = t.sndBirdsRain;
    const sndWaves = document.querySelector('.snd-txt-waves'); if (sndWaves) sndWaves.innerText = t.sndWaves;
    const sndFire = document.querySelector('.snd-txt-fire'); if (sndFire) sndFire.innerText = t.sndFire;
    const sndCafe = document.querySelector('.snd-txt-cafe'); if (sndCafe) sndCafe.innerText = t.sndCafe;
    const sndTrain = document.querySelector('.snd-txt-train'); if (sndTrain) sndTrain.innerText = t.sndTrain;
    const sndKoto = document.querySelector('.snd-txt-koto'); if (sndKoto) sndKoto.innerText = t.sndKoto;

    const todoInp = document.getElementById('todo-input'); if (todoInp) todoInp.placeholder = t.placeholderTodo;
    const embedInp = document.getElementById('embed-url'); if (embedInp) embedInp.placeholder = t.placeholderEmbed;

    const btnLoad = document.querySelector('.btn-txt-load'); if (btnLoad) btnLoad.innerText = t.load;

    const qn = document.querySelector('.txt-quick-note'); if (qn) qn.innerHTML = t.quickNote;
    const st = document.querySelector('.txt-support-title'); if (st) st.innerText = t.supportTitle;
    const bc = document.querySelector('.txt-buy-coffee'); if (bc) bc.innerText = t.buyCoffee;

    document.querySelectorAll('.btn-txt-start').forEach(b => b.innerText = t.start);
    document.querySelectorAll('.btn-txt-stop').forEach(b => b.innerText = t.stop);
    document.querySelectorAll('.btn-txt-pause').forEach(b => b.innerText = t.pause);
    document.querySelectorAll('.btn-txt-reset').forEach(b => b.innerText = t.reset);
    document.querySelectorAll('.btn-txt-lap').forEach(b => b.innerText = t.lap);
    document.querySelectorAll('.btn-txt-set').forEach(b => b.innerText = t.set);
    document.querySelectorAll('.btn-txt-cancel').forEach(b => b.innerText = t.cancel);
    document.querySelectorAll('.btn-txt-snooze').forEach(b => b.innerText = t.snooze);
    document.querySelectorAll('.btn-txt-dismiss').forEach(b => b.innerText = t.dismiss);
    document.querySelectorAll('.btn-txt-calc').forEach(b => b.innerText = t.calc);

    // Timer input placeholders
    const inHr = document.getElementById('timer-input-hour'); if (inHr) inHr.placeholder = t.timerHr;
    const inMin = document.getElementById('timer-input-min'); if (inMin) inMin.placeholder = t.timerMin;
    const inSec = document.getElementById('timer-input-sec'); if (inSec) inSec.placeholder = t.timerSec;

    // Pomodoro dil güncellemesi
    if (window.pomodoro) {
        window.pomodoro.updateLanguage();
    }

    // Features & Preferences başlıkları ve Dil etiketi
    const featTitle = document.querySelector('.txt-features-title'); if (featTitle) featTitle.innerText = t.featuresTitle;
    const prefTitle = document.querySelector('.txt-preferences-title'); if (prefTitle) prefTitle.innerText = t.preferencesTitle;
    const lblLang = document.querySelector('.txt-lang-label'); if (lblLang) lblLang.innerText = t.langLabel;

    // Görsel Paneli metinleri
    const thmScn = document.querySelector('.txt-theme-scenes'); if (thmScn) thmScn.innerText = t.themeScenes;
    const custVis = document.querySelector('.txt-custom-visual'); if (custVis) custVis.innerText = t.customVisual;
    const ddTxt = document.querySelector('.txt-drag-drop'); if (ddTxt) ddTxt.innerText = t.dragDrop;
    const fhTxt = document.querySelector('.txt-file-here'); if (fhTxt) fhTxt.innerText = t.fileHere;
    const supTxt = document.querySelector('.txt-drop-supports'); if (supTxt) supTxt.innerText = t.dropSupports;

    // Map butonu ve tooltipleri
    const btnMap = document.getElementById('btn-return-map'); if (btnMap) btnMap.title = t.ttMap;
    const ttMap = document.querySelector('.dock-tt-map'); if (ttMap) ttMap.innerText = t.ttMap;
    const ttCoffee = document.querySelector('.dock-tt-coffee'); if (ttCoffee) ttCoffee.innerText = t.ttCoffee;

    // Açık olan slide panelin başlığını güncelle
    if (window.uiManager && window.uiManager.slidePanel && window.uiManager.panelTitle) {
        const activeView = window.uiManager.slidePanel.querySelector('.panel-view.active');
        if (activeView) {
            const panelName = activeView.getAttribute('data-panel');
            const isTr = currentLang === 'tr';
            const titles = {
                'music': isTr ? 'MÜZİK VE SESLER' : 'MUSICS & AUDIO',
                'visual': isTr ? 'GÖRSEL YÖNETİMİ' : 'VISUAL / BACKGROUND',
                'features': isTr ? 'ÖZELLİKLER' : 'FEATURES'
            };
            if (titles[panelName]) window.uiManager.panelTitle.textContent = titles[panelName];
        }
    }

    // Birth Chart label'ları
    const bcSun = document.querySelector('.bc-label-sun'); if (bcSun) bcSun.innerHTML = t.bcSun;
    const bcElement = document.querySelector('.bc-label-element'); if (bcElement) bcElement.innerHTML = t.bcElement;
    const bcChinese = document.querySelector('.bc-label-chinese'); if (bcChinese) bcChinese.innerHTML = t.bcChinese;
    const bcLifePath = document.querySelector('.bc-label-lifepath'); if (bcLifePath) bcLifePath.innerHTML = t.bcLifePath;
    const bcMoon = document.querySelector('.bc-label-moon'); if (bcMoon) bcMoon.innerHTML = t.bcMoon;

    // World Clock label'ları
    const wcLocal = document.querySelector('.wc-label-local'); if (wcLocal) wcLocal.innerText = t.localTime + ':';
    const wcIst = document.querySelector('.wc-label-ist'); if (wcIst) wcIst.innerText = t.cityIst + ':';
    const wcNy = document.querySelector('.wc-label-ny'); if (wcNy) wcNy.innerText = t.cityNy + ':';
    const wcLon = document.querySelector('.wc-label-lon'); if (wcLon) wcLon.innerText = t.cityLon + ':';
    const wcTok = document.querySelector('.wc-label-tok'); if (wcTok) wcTok.innerText = t.cityTok + ':';

    // Fullscreen butonları
    document.querySelectorAll('.txt-fullscreen').forEach(fs => fs.innerText = t.fullscreen);

    // Alarm durumu (alarm aktif değilse)
    const alarmSt = document.getElementById('alarm-status');
    if (alarmSt && !alarmSt.style.color.includes('00ff88') && !alarmSt.style.color.includes('ff4444')) {
        alarmSt.innerText = t.noAlarm;
    }

    // Alarm credit
    const alarmCredit = document.querySelector('.txt-alarm-credit'); if (alarmCredit) alarmCredit.innerText = t.timerAlarmSound;

    // Audio managers UI update
    if (window.audioManager) {
        window.audioManager.updateLobbyUI();
        if (typeof window.audioManager.updatePlaylistUI === 'function') {
            window.audioManager.updatePlaylistUI();
        }
        window.audioManager.updateMusicPlayerUI();
        window.audioManager.updateSoundCreditText();
    }

    // Mobil vibe hint
    const vibeHint = document.querySelector('.txt-vibe-hint'); if (vibeHint) vibeHint.innerHTML = t.vibeHint;

    // Harita ekranı metinlerini güncelle
    if (window.mapManager && typeof window.mapManager.updateLanguage === 'function') {
        window.mapManager.updateLanguage();
    }

    // Dil butonlarını güncelle
    if (window.uiManager) {
        window.uiManager.updateLangPills();
    }

    // Faz 2: New Tab & Drunken Semaphore çevirileri
    const extAtm = document.querySelector('.txt-enter-atmosphere, .neon-title'); if (extAtm) extAtm.innerText = t.extAtmosphere;
    document.querySelectorAll('.ext-lang-text').forEach(el => { el.innerText = currentLang.toUpperCase(); });
    if (window.extensionManager && typeof window.extensionManager.updateDate === 'function') {
        window.extensionManager.updateDate();
    }

    document.documentElement.lang = currentLang;
}

// ------------------------------------------
//  UI (ARAYÜZ) YÖNETİCİSİ
// ------------------------------------------
class UIManager {
    constructor() {
        this.menuItems = document.querySelectorAll('.sidebar li[data-tab]');
        this.views = {
            'clock-view': document.getElementById('clock-view'),
            'stopwatch-view': document.getElementById('stopwatch-view'),
            'timer-view': document.getElementById('timer-view'),
            'pomodoro-view': document.getElementById('pomodoro-view'),
            'todo-view': document.getElementById('todo-view'),
            'alarm-view': document.getElementById('alarm-view'),
            'world-clock-view': document.getElementById('world-clock-view'),
            'birth-chart-view': document.getElementById('birth-chart-view')
        };
        this.mainClockView = document.getElementById('clock-view');
        
        this.initNavigation();
        this.initAccordion();
        this.initFullscreen(); 
        this.initDock();
    }

    initDock() {
        this.slidePanel = document.getElementById('slide-panel');
        this.panelTitle = document.getElementById('slide-panel-title');
        this.closePanelBtn = document.getElementById('btn-close-panel');
        this.dockBtns = document.querySelectorAll('.dock-btn[data-dock]');

        if (this.closePanelBtn) {
            this.closePanelBtn.addEventListener('click', () => this.closePanel());
        }

        this.dockBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const dockType = btn.getAttribute('data-dock');
                if (dockType === 'home') {
                    this.closePanel();
                    this.dockBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    UIManager.openTab(e, 'clock-view');
                } else if (dockType === 'music' || dockType === 'visual' || dockType === 'features') {
                    this.togglePanel(dockType);
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.slidePanel?.classList.contains('open')) {
                this.closePanel();
            }
        });
    }

    togglePanel(panelName) {
        if (!this.slidePanel) return;

        const isAlreadyOpen = this.slidePanel.classList.contains('open');
        const activeView = this.slidePanel.querySelector('.panel-view.active');
        const targetView = this.slidePanel.querySelector(`.panel-view[data-panel="${panelName}"]`);

        if (isAlreadyOpen && activeView === targetView) {
            this.closePanel();
        } else {
            this.dockBtns.forEach(b => b.classList.remove('active'));
            if (activeView) activeView.classList.remove('active');
            if (targetView) targetView.classList.add('active');

            if (this.panelTitle) {
                const isTr = currentLang === 'tr';
                const titles = {
                    'music': isTr ? 'MÜZİK VE SESLER' : 'MUSICS & AUDIO',
                    'visual': isTr ? 'GÖRSEL YÖNETİMİ' : 'VISUAL / BACKGROUND',
                    'features': isTr ? 'ÖZELLİKLER' : 'FEATURES'
                };
                this.panelTitle.textContent = titles[panelName] || panelName.toUpperCase();
            }

            this.slidePanel.classList.add('open');
            document.body.classList.add('panel-open');

            const currentDockBtn = document.querySelector(`.dock-btn[data-dock="${panelName}"]`);
            if (currentDockBtn) currentDockBtn.classList.add('active');
        }
    }

    closePanel() {
        if (!this.slidePanel) return;
        this.slidePanel.classList.remove('open');
        document.body.classList.remove('panel-open');
        const activeView = this.slidePanel.querySelector('.panel-view.active');
        if (activeView) activeView.classList.remove('active');

        this.dockBtns.forEach(b => b.classList.remove('active'));
        const homeBtn = document.querySelector('.dock-btn[data-dock="home"]');
        if (homeBtn) homeBtn.classList.add('active');
    }

    initAccordion() {
        const accBtns = document.querySelectorAll('.accordion-btn');
        accBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetBtn = e.currentTarget;
                const content = targetBtn.nextElementSibling; 
                const parentContent = targetBtn.closest('.accordion-content');

                accBtns.forEach(otherBtn => {
                    if (otherBtn !== targetBtn && otherBtn.classList.contains('open')) {
                        if (parentContent && otherBtn.nextElementSibling === parentContent) {
                            return; 
                        }
                        otherBtn.classList.remove('open');
                        if (otherBtn.nextElementSibling) otherBtn.nextElementSibling.classList.remove('show');
                    }
                });

                targetBtn.classList.toggle('open');
                if (content) content.classList.toggle('show');
            });
        });
    }

    initFullscreen() {
        const fsBtn = document.getElementById('btn-fullscreen');
        if (!fsBtn) return;

        const updateFsButtonText = (isFs) => {
            const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;
            const fsTxt = fsBtn.querySelector('.txt-fullscreen');
            if (fsTxt && t) {
                fsTxt.innerText = isFs ? t.minimize : t.fullscreen;
            }
        };

        const toggleManualFullscreen = (enable) => {
            if (enable) {
                if (window.uiManager) window.uiManager.closePanel();
                document.body.classList.add('fullscreen-mode', 'cinematic-mode');
                updateFsButtonText(true);
            } else {
                document.body.classList.remove('fullscreen-mode', 'cinematic-mode');
                updateFsButtonText(false);
            }
            if (typeof enforceLandscapeProtection === 'function') {
                enforceLandscapeProtection();
            }
        };

        fsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isFs = document.body.classList.contains('fullscreen-mode');

            if (!isFs) {
                toggleManualFullscreen(true);
                // Masaüstünde yerel tam ekranı tetikle; mobilde CSS 90 derece yatay döndürme güvenle çalışır
                if (window.innerWidth > 950) {
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen().catch(() => {});
                    } else if (document.documentElement.webkitRequestFullscreen) { 
                        try { document.documentElement.webkitRequestFullscreen(); } catch (err) {}
                    }
                }
            } else {
                toggleManualFullscreen(false);
                if (document.fullscreenElement || document.webkitFullscreenElement) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen().catch(() => {});
                    } else if (document.webkitExitFullscreen) { 
                        try { document.webkitExitFullscreen(); } catch (err) {}
                    }
                }
            }
        });

        const toggleFullscreenClasses = () => {
            // Sadece 3. sayfadayken (oda arayüzü) global tam ekran geçişini senkronize et
            const isExtVisible = window.extensionManager && window.extensionManager.screen && !window.extensionManager.screen.classList.contains('ext-hidden');
            const isMapVisible = window.mapManager && window.mapManager.screen && !window.mapManager.screen.classList.contains('map-hidden');
            if (isExtVisible || isMapVisible) return;

            if (document.fullscreenElement || document.webkitFullscreenElement) {
                if (window.uiManager) {
                    window.uiManager.closePanel();
                }
                document.body.classList.add('fullscreen-mode', 'cinematic-mode');
                updateFsButtonText(true);
            } else {
                document.body.classList.remove('fullscreen-mode', 'cinematic-mode');
                updateFsButtonText(false);
            }
            if (typeof enforceLandscapeProtection === 'function') {
                enforceLandscapeProtection();
            }
        };

        document.addEventListener('fullscreenchange', toggleFullscreenClasses);
        document.addEventListener('webkitfullscreenchange', toggleFullscreenClasses);
    }

    initNavigation() {
        this.menuItems = document.querySelectorAll('.feature-tab-link, .sidebar li[data-tab]');
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const tabId = item.getAttribute('data-tab');
                if (tabId) {
                    UIManager.openTab(e, tabId);
                    if (window.innerWidth <= 768) {
                        this.closePanel();
                    }
                }
            });
        });

        const btnLangTr = document.getElementById('btn-lang-tr');
        const btnLangEn = document.getElementById('btn-lang-en');
        const btnPanelFs = document.getElementById('btn-panel-fullscreen');

        btnLangTr?.addEventListener('click', () => this.setLanguage('tr'));
        btnLangEn?.addEventListener('click', () => this.setLanguage('en'));

        btnPanelFs?.addEventListener('click', () => {
            const mainFsBtn = document.getElementById('btn-fullscreen');
            if (mainFsBtn) mainFsBtn.click();
        });

        this.updateLangPills();
    }

    setLanguage(lang) {
        currentLang = lang;
        try {
            localStorage.setItem('atmos-user-lang', lang);
        } catch (e) {}
        document.documentElement.lang = currentLang;
        applyTranslations();
        this.updateLangPills();
    }

    updateLangPills() {
        const btnLangTr = document.getElementById('btn-lang-tr');
        const btnLangEn = document.getElementById('btn-lang-en');
        if (btnLangTr && btnLangEn) {
            btnLangTr.classList.toggle('active', currentLang === 'tr');
            btnLangEn.classList.toggle('active', currentLang === 'en');
        }
    }

    static openTab(evt, tabId) {
        const isMobileLandscape = (window.innerWidth > window.innerHeight) && (window.innerWidth <= 950);
        
        if (isMobileLandscape) {
            if (tabId === 'world-clock-view' || tabId === 'birth-chart-view' || tabId === 'todo-view' || tabId === 'alarm-view') {
                tabId = 'clock-view'; 
                evt = null; 
            }
        }

        let tabcontent = document.getElementsByClassName("tab-content");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            tabcontent[i].classList.remove("hidden"); 
        }
        
        let tablinks = document.querySelectorAll('.static-menu-list .tab-link, .feature-tab-link');
        tablinks.forEach(link => link.classList.remove("active"));
        
        const targetView = document.getElementById(tabId);
        if (targetView) {
            targetView.style.display = "block";
            targetView.classList.remove("hidden");
        }

        const activeLinks = document.querySelectorAll(`.static-menu-list li[data-tab="${tabId}"], .feature-tab-link[data-tab="${tabId}"]`);
        activeLinks.forEach(link => link.classList.add("active"));
    }
}

// ------------------------------------------
//  SAAT VE DÜNYA SAATLERİ YÖNETİCİSİ
// ------------------------------------------
class ClockManager {
    constructor() {
        this.timeDisplay = document.getElementById('time-display');
        this.dateDisplay = document.getElementById('date-display');
        this.startClock();
        this.startWorldClock();
    }

    startClock() {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            if (this.timeDisplay) this.timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;

            if (this.dateDisplay) {
                if (currentLang === 'tr') {
                    const day = now.getDate();
                    const month = now.toLocaleDateString('tr-TR', { month: 'long' });
                    const year = now.getFullYear();
                    const weekday = now.toLocaleDateString('tr-TR', { weekday: 'long' });
                    this.dateDisplay.innerText = `${day} ${month} ${year}, ${weekday}`;
                } else {
                    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
                    this.dateDisplay.innerText = now.toLocaleDateString('en-GB', options);
                }
            }
        };
        setInterval(updateClock, 1000);
        updateClock();
    }

    startWorldClock() {
        const updateWorldClock = () => {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

            const setTime = (id, locale, timeZone) => {
                const el = document.getElementById(id);
                if (el) el.innerText = now.toLocaleTimeString(locale, { timeZone, ...options });
            };

            const wcLocal = document.getElementById('wc-local');
            if (wcLocal) wcLocal.innerText = now.toLocaleTimeString([], options);

            setTime('wc-istanbul', 'tr-TR', 'Europe/Istanbul');
            setTime('wc-newyork', 'en-US', 'America/New_York');
            setTime('wc-london', 'en-GB', 'Europe/London');
            setTime('wc-tokyo', 'ja-JP', 'Asia/Tokyo'); 
        };
        setInterval(updateWorldClock, 1000);
        updateWorldClock();
    }
}

// ------------------------------------------
//  KRONOMETRE YÖNETİCİSİ
// ------------------------------------------
class StopwatchManager {
    constructor() {
        this.display = document.getElementById('sw-display');
        this.lapsContainer = document.getElementById('laps-container');
        this.interval = null;
        this.elapsedTime = 0;
        this.startTime = 0;
        this.running = false;
        this.lapCounter = 1;
        this.initButtons();
    }

    formatTime(diff) {
        let seconds = Math.floor((diff / 1000) % 60);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let hours = Math.floor((diff / (1000 * 60 * 60)));
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    initButtons() {
        document.getElementById('btn-start')?.addEventListener('click', () => {
            if (!this.running) {
                this.startTime = Date.now() - this.elapsedTime; 
                this.interval = setInterval(() => {
                    this.elapsedTime = Date.now() - this.startTime; 
                    if (this.display) this.display.innerText = this.formatTime(this.elapsedTime);
                }, 10);
                this.running = true;
            }
        });
        
        document.getElementById('btn-stop')?.addEventListener('click', () => {
            clearInterval(this.interval);
            this.running = false;
        });
        
        document.getElementById('btn-lap')?.addEventListener('click', () => {
            if (!this.running) return;
            const t = translations[currentLang]; 
            const lapItem = document.createElement('div');
            lapItem.innerText = `${t.lap} ${this.lapCounter}: ${this.formatTime(this.elapsedTime)}`;
            lapItem.style.cssText = "padding: 5px; border-bottom: 1px solid rgba(255,255,255,0.2); color: #ccc;";
            if (this.lapsContainer) this.lapsContainer.prepend(lapItem);
            this.lapCounter++;
        });
        
        document.getElementById('btn-reset')?.addEventListener('click', () => {
            clearInterval(this.interval);
            this.running = false;
            this.elapsedTime = 0;
            if (this.display) this.display.innerText = "00:00:00";
            if (this.lapsContainer) this.lapsContainer.innerHTML = "";
            this.lapCounter = 1;
        });
    }
}

// ------------------------------------------
//  ALARM ETİKET VE BİLDİRİM YÖNETİCİSİ
// ------------------------------------------
function setTabAlarmActive(tabId, isActive) {
    const tabLink = document.querySelector(`.feature-tab-link[data-tab="${tabId}"]`);
    if (tabLink) {
        if (isActive) {
            tabLink.classList.add('alarm-active-tab');
        } else {
            tabLink.classList.remove('alarm-active-tab');
        }
    }
    const hasAnyAlarm = document.querySelectorAll('.feature-tab-link.alarm-active-tab').length > 0;
    const dockFeatures = document.querySelector('.dock-btn[data-dock="features"]');
    if (dockFeatures) {
        if (hasAnyAlarm) {
            dockFeatures.classList.add('has-alarm');
        } else {
            dockFeatures.classList.remove('has-alarm');
        }
    }
}

// ------------------------------------------
//  SAYAÇ YÖNETİCİSİ
// ------------------------------------------
class TimerManager {
    constructor() {
        this.display = document.getElementById('timer-display');
        this.inputHour = document.getElementById('timer-input-hour');
        this.inputMin = document.getElementById('timer-input-min');
        this.inputSec = document.getElementById('timer-input-sec');
        this.btnPause = document.getElementById('btn-timer-pause');
        this.audio = document.getElementById('audio-alarm'); 
        
        this.interval = null;
        this.totalSeconds = 0;
        this.remainingSeconds = 0; 
        this.running = false;
        this.isPaused = false; 
        this.isAlarming = false;
        
        this.initButtons();
    }

    initButtons() {
        document.querySelectorAll('.spin-btn[data-spin-target]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetId = e.currentTarget.dataset.spinTarget;
                const action = e.currentTarget.dataset.spinAction;
                const inp = document.getElementById(targetId);
                if (inp) {
                    if (action === 'up') inp.stepUp();
                    else if (action === 'down') inp.stepDown();
                }
            });
        });

        document.getElementById('btn-timer-start')?.addEventListener('click', () => {
            this.stopAlarm();
            if (!this.running && !this.isPaused) {
                const hrs = parseInt(this.inputHour.value) || 0;
                const mins = parseInt(this.inputMin.value) || 0;
                const secs = parseInt(this.inputSec.value) || 0;
                
                this.totalSeconds = (hrs * 3600) + (mins * 60) + secs;
                if (this.totalSeconds <= 0) return;
                
                this.remainingSeconds = this.totalSeconds;
                this.startTimer();
            } else if (this.isPaused) {
                this.startTimer();
            }
        });
        
        this.btnPause?.addEventListener('click', () => {
            if (this.isAlarming) {
                this.stopAlarm();
                return;
            }
            if (this.running) {
                clearInterval(this.interval);
                this.running = false;
                this.isPaused = true;
            }
        });
        
        document.getElementById('btn-timer-reset')?.addEventListener('click', () => {
            this.stopAlarm();
            clearInterval(this.interval);
            this.running = false;
            this.isPaused = false;
            this.remainingSeconds = 0;
            this.updateDisplay(0);
            if (this.inputHour) this.inputHour.value = '0';
            if (this.inputMin) this.inputMin.value = '0';
            if (this.inputSec) this.inputSec.value = '0';
        });
    }

    triggerAlarm() {
        this.isAlarming = true;
        if (this.btnPause) {
            this.btnPause.classList.add('alarm-ringing');
        }
        setTabAlarmActive('timer-view', true);
        if (this.audio) {
            this.audio.play().catch(e => console.log('Audio play error:', e));
        }
    }

    stopAlarm() {
        this.isAlarming = false;
        if (this.btnPause) {
            this.btnPause.classList.remove('alarm-ringing');
        }
        setTabAlarmActive('timer-view', false);
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    startTimer() {
        this.running = true;
        this.isPaused = false;
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateDisplay(this.remainingSeconds);
            
            if (this.remainingSeconds <= 0) {
                clearInterval(this.interval);
                this.running = false;
                this.triggerAlarm();
            }
        }, 1000);
    }

    updateDisplay(seconds) {
        if (seconds < 0) seconds = 0;
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = seconds % 60;
        if (this.display) {
            this.display.innerText = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        }
    }
}

// ------------------------------------------
//  ALARM YÖNETİCİSİ
// ------------------------------------------
class AlarmManager {
    constructor() {
        this.uiTimeInput = document.getElementById('alarm-time-input');
        this.uiSetBtn = document.getElementById('btn-set-alarm');
        this.uiCancelBtn = document.getElementById('btn-cancel-alarm');
        this.uiStatus = document.getElementById('alarm-status');
        this.uiControls = document.getElementById('alarm-controls');
        this.audio = document.getElementById('audio-alarm');
        this.uiCreditBox = document.getElementById('alarm-credit-box');
        this.alarmTimeout = null;
        this.initButtons();
    }

    initButtons() {
        this.uiSetBtn?.addEventListener('click', () => this.setAlarm());
        this.uiCancelBtn?.addEventListener('click', () => this.cancelAlarm());
        document.getElementById('btn-snooze')?.addEventListener('click', () => this.snoozeAlarm());
        document.getElementById('btn-dismiss')?.addEventListener('click', () => this.dismissAlarm());
    }

    setAlarm() {
        if (!this.uiTimeInput || !this.uiTimeInput.value) return;
        const [targetHours, targetMinutes] = this.uiTimeInput.value.split(':').map(Number);
        const now = new Date();
        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHours, targetMinutes, 0);

        if (alarmDate <= now) {
            alarmDate.setDate(alarmDate.getDate() + 1);
        }

        const timeToAlarm = alarmDate.getTime() - now.getTime();
        if (this.alarmTimeout) clearTimeout(this.alarmTimeout);
        this.alarmTimeout = setTimeout(() => this.triggerAlarm(), timeToAlarm);

        const t = translations[currentLang];
        const alarmBox = document.getElementById('alarm-view');
        if (alarmBox) alarmBox.classList.add('alarm-active');
        if (this.uiSetBtn) this.uiSetBtn.style.display = 'none';
        if (this.uiCancelBtn) this.uiCancelBtn.style.display = 'inline-block';
        if (this.uiStatus) {
            this.uiStatus.innerText = `${t.alarmSet}: ${this.uiTimeInput.value}`;
            this.uiStatus.style.color = '#00ff88';
        }
        if (alarmBox) {
            setTimeout(() => {
                alarmBox.scrollTo({ top: alarmBox.scrollHeight, behavior: 'smooth' });
            }, 60);
        }
    }

    cancelAlarm() {
        if (this.alarmTimeout) clearTimeout(this.alarmTimeout);
        setTabAlarmActive('alarm-view', false);
        const t = translations[currentLang];
        const alarmBox = document.getElementById('alarm-view');
        if (alarmBox) alarmBox.classList.remove('alarm-active');
        if (this.uiSetBtn) this.uiSetBtn.style.display = 'inline-block';
        if (this.uiCancelBtn) this.uiCancelBtn.style.display = 'none';
        if (this.uiStatus) {
            this.uiStatus.innerText = t.noAlarm;
            this.uiStatus.style.color = '#b3b3b3';
        }
        if (this.uiCreditBox) this.uiCreditBox.style.display = 'none';
        if (alarmBox) {
            setTimeout(() => {
                alarmBox.scrollTo({ top: 0, behavior: 'smooth' });
            }, 60);
        }
    }

    triggerAlarm() {
        const t = translations[currentLang];
        const alarmBox = document.getElementById('alarm-view');
        setTabAlarmActive('alarm-view', true);
        if (this.uiStatus) {
            this.uiStatus.innerText = t.alarmRinging;
            this.uiStatus.style.color = '#ff4444';
        }
        if (this.uiControls) this.uiControls.style.display = 'flex';
        if (this.uiCancelBtn) this.uiCancelBtn.style.display = 'none';
        if (this.audio) this.audio.play();
        if (this.uiCreditBox) this.uiCreditBox.style.display = 'block';
        if (alarmBox) {
            setTimeout(() => {
                alarmBox.scrollTo({ top: alarmBox.scrollHeight, behavior: 'smooth' });
            }, 60);
        }
    }

    snoozeAlarm() {
        this.dismissAlarm();
        const snoozeTime = new Date(new Date().getTime() + 5 * 60000);
        if (this.uiTimeInput) {
            this.uiTimeInput.value = `${String(snoozeTime.getHours()).padStart(2, '0')}:${String(snoozeTime.getMinutes()).padStart(2, '0')}`;
        }
        this.setAlarm();
    }

    dismissAlarm() {
        setTabAlarmActive('alarm-view', false);
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; }
        if (this.uiControls) this.uiControls.style.display = 'none';
        this.cancelAlarm();
    }
}

// ------------------------------------------
//  ASTROLOJİ YÖNETİCİSİ
// ------------------------------------------
class AstrologyManager {
    constructor() {
        this.btnCalc = document.getElementById('btn-calculate-zodiac');
        this.uiDate = document.getElementById('birth-date');
        if (this.btnCalc) this.btnCalc.addEventListener('click', () => this.calculate());
    }

    calculate() {
        if (!this.uiDate || !this.uiDate.value) {
            const isTr = currentLang === 'tr';
            return alert(isTr ? "Lütfen doğum tarihinizi girin!" : "Please enter your birth date!");
        }

        const date = new Date(this.uiDate.value);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const sunSign = this.getSunSign(day, month);
        
        document.getElementById('res-sun').innerText = sunSign;
        document.getElementById('res-element').innerText = this.getElement(sunSign);
        document.getElementById('res-chinese').innerText = this.getChineseZodiac(year, month, day);
        document.getElementById('res-lifepath').innerText = this.getLifePathNumber(year, month, day);
        document.getElementById('res-moon-phase').innerText = this.getAccurateMoonPhase(year, month, day);
        
        document.getElementById('zodiac-result').style.display = 'block';
        const birthView = document.getElementById('birth-chart-view');
        if (birthView) {
            setTimeout(() => {
                birthView.scrollTo({ top: birthView.scrollHeight, behavior: 'smooth' });
            }, 60);
        }
    }

    getSunSign(d, m) {
        const isTr = currentLang === 'tr';
        if((m==1&&d<=20)||(m==12&&d>=22)) return isTr ? "Oğlak ♑" : "Capricorn ♑";
        if((m==1&&d>=21)||(m==2&&d<=18)) return isTr ? "Kova ♒" : "Aquarius ♒";
        if((m==2&&d>=19)||(m==3&&d<=20)) return isTr ? "Balık ♓" : "Pisces ♓";
        if((m==3&&d>=21)||(m==4&&d<=19)) return isTr ? "Koç ♈" : "Aries ♈";
        if((m==4&&d>=20)||(m==5&&d<=20)) return isTr ? "Boğa ♉" : "Taurus ♉";
        if((m==5&&d>=21)||(m==6&&d<=20)) return isTr ? "İkizler ♊" : "Gemini ♊";
        if((m==6&&d>=21)||(m==7&&d<=22)) return isTr ? "Yengeç ♋" : "Cancer ♋";
        if((m==7&&d>=23)||(m==8&&d<=22)) return isTr ? "Aslan ♌" : "Leo ♌";
        if((m==8&&d>=23)||(m==9&&d<=22)) return isTr ? "Başak ♍" : "Virgo ♍";
        if((m==9&&d>=23)||(m==10&&d<=22)) return isTr ? "Terazi ♎" : "Libra ♎";
        if((m==10&&d>=23)||(m==11&&d<=21)) return isTr ? "Akrep ♏" : "Scorpio ♏";
        return isTr ? "Yay ♐" : "Sagittarius ♐";
    }

    getElement(sign) {
        const isTr = currentLang === 'tr';
        if(sign.includes("♈") || sign.includes("♌") || sign.includes("♐")) return isTr ? "Ateş 🔥" : "Fire 🔥";
        if(sign.includes("♉") || sign.includes("♍") || sign.includes("♑")) return isTr ? "Toprak 🌿" : "Earth 🌿";
        if(sign.includes("♊") || sign.includes("♎") || sign.includes("♒")) return isTr ? "Hava 💨" : "Air 💨";
        return isTr ? "Su 💧" : "Water 💧";
    }

    getChineseZodiac(year, month, day) {
        const isTr = currentLang === 'tr';
        let cYear = (month === 1 || (month === 2 && day <= 4)) ? year - 1 : year;
        const animalsEn = ["Rat 🐁", "Ox 🐂", "Tiger 🐅", "Rabbit 🐇", "Dragon 🐉", "Snake 🐍", "Horse 🐎", "Goat 🐐", "Monkey 🐒", "Rooster 🐓", "Dog 🐕", "Pig 🐖"];
        const animalsTr = ["Fare 🐁", "Öküz 🐂", "Kaplan 🐅", "Tavşan 🐇", "Ejderha 🐉", "Yılan 🐍", "At 🐎", "Keçi 🐐", "Maymun 🐒", "Horoz 🐓", "Köpek 🐕", "Domuz 🐖"];
        let index = (cYear - 4) % 12;
        if (index < 0) index += 12;
        return isTr ? animalsTr[index] : animalsEn[index];
    }

    getLifePathNumber(y, m, d) {
        const reduce = (n) => {
            while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
                n = n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
            }
            return n;
        };
        const total = reduce(m) + reduce(d) + reduce(y);
        return reduce(total);
    }

    getAccurateMoonPhase(year, month, day) {
        const isTr = currentLang === 'tr';
        let y = year, m = month;
        if (m < 3) { y--; m += 12; }
        m++;

        const c = 365.25 * y;
        const e = 30.6 * m;
        let jd = c + e + day - 694039.09;
        jd /= 29.5305882;
        let b = Math.floor(jd); 
        jd -= b;
        b = Math.round(jd * 8);
        if (b >= 8) b = 0; 
        
        const phasesEn = ["New Moon 🌑", "Waxing Crescent 🌒", "First Quarter 🌓", "Waxing Gibbous 🌔", "Full Moon 🌕", "Waning Gibbous 🌖", "Last Quarter 🌗", "Waning Crescent 🌘"];
        const phasesTr = ["Yeni Ay 🌑", "İlk Hilal 🌒", "İlk Dördün 🌓", "Büyüyen Ay 🌔", "Dolunay 🌕", "Küçülen Ay 🌖", "Son Dördün 🌗", "Son Hilal 🌘"];
        return isTr ? phasesTr[b] : phasesEn[b];
    }
}

// ------------------------------------------
//  GÖRSEL VE TEMA YÖNETİCİSİ
// ------------------------------------------
//  GÖRSEL VE ARKA PLAN YÖNETİCİSİ (GIF/VIDEO LOOPER)
// ------------------------------------------
class AssetManager {
    constructor() {
        this.body = document.body;
        this.bgVideo = document.getElementById('bg-video');
        this.videoPath = "assets/gifs/"; 
        this.imagePath = "assets/images/";
        
        const themes = ['cowboy-era', 'cyber-world', 'dark-fantasy', 'light-fantasy', 'jazz-romance', 'rock-n-roll', 'the-pasific-crest', 'milky-way'];
        this.currentTheme = themes[Math.floor(Math.random() * themes.length)]; 
        
        this.totalVisuals = 5; 
        this.slideInterval = null; 
        this.isReverse = Math.random() > 0.5;
        this.currentVisualIndex = this.isReverse ? this.totalVisuals : 1;
        this.isVideoLoaded = false;
        this.isCustomVisual = false;
        
        // İlk açılışta anında arka plan görselini bas (siyah ekranı tamamen önler)
        let th = normalizeTheme(this.currentTheme);
        this.currentTheme = th;
        const initialImg = `${this.imagePath}${th}/${th}-${this.currentVisualIndex}.jpg`;
        this.body.style.backgroundImage = `url('${initialImg}')`;
        this.body.style.backgroundSize = "cover";
        this.body.style.backgroundPosition = "center center";
        this.body.style.backgroundRepeat = "no-repeat";

        if (this.bgVideo) {
            this.bgVideo.poster = initialImg;
            this.bgVideo.muted = true;
            this.bgVideo.defaultMuted = true;
            this.bgVideo.loop = true;
            this.bgVideo.setAttribute('playsinline', '');
            this.bgVideo.setAttribute('webkit-playsinline', '');
        }

        // Mobil Dokunmatik Kilit Açıcı: Kullanıcı ekrana ilk dokunduğu anda videoyu kesin başlatır
        this.setupMobileVideoUnlock();

        this.initThemeButtons();
        this.initSceneButtons();
        this.changeVisualTheme(this.currentTheme, false); 
    }

    setupMobileVideoUnlock() {
        const unlock = () => {
            if (this.isCustomVisual) return;
            if (this.bgVideo) {
                const extScreen = document.getElementById('extension-screen');
                const isExtensionVisible = extScreen && !extScreen.classList.contains('ext-hidden');
                if (isExtensionVisible) return;

                if (!this.isVideoLoaded) {
                    this.loadCurrentVideo();
                } else if (this.bgVideo.paused) {
                    this.bgVideo.play().then(() => {
                        this.bgVideo.classList.add('visible');
                        document.body.classList.add('video-active');
                    }).catch(() => {});
                }
            }
        };

        window.addEventListener('touchstart', unlock, { passive: true });
        window.addEventListener('touchend', unlock, { passive: true });
        window.addEventListener('click', unlock, { passive: true });
        window.addEventListener('pointerdown', unlock, { passive: true });

        if (this.bgVideo) {
            this.bgVideo.addEventListener('canplay', () => {
                if (this.bgVideo.paused) {
                    this.bgVideo.play().catch(() => {});
                }
            });
            this.bgVideo.addEventListener('loadeddata', () => {
                if (this.bgVideo.paused) {
                    this.bgVideo.play().catch(() => {});
                }
            });
            this.bgVideo.addEventListener('loadedmetadata', () => {
                if (this.bgVideo.paused) {
                    this.bgVideo.play().catch(() => {});
                }
            });
            this.bgVideo.addEventListener('playing', () => {
                this.bgVideo.classList.add('visible');
                document.body.classList.add('video-active');
            });
        }
    }

    loadCurrentVideo(themeName = null) {
        if (!this.bgVideo) return;
        this.bgVideo.style.display = 'block';
        this.bgVideo.style.opacity = '1';
        if (themeName) {
            this.currentTheme = normalizeTheme(themeName);
        }
        let th = normalizeTheme(this.currentTheme);
        this.currentTheme = th;
        const imageSrc = `${this.imagePath}${th}/${th}-${this.currentVisualIndex}.jpg`;
        const videoSrc = `${this.videoPath}${th}/${th}-${this.currentVisualIndex}.mp4`;

        this.body.style.backgroundImage = `url('${imageSrc}')`;
        this.bgVideo.poster = imageSrc;
        this.bgVideo.muted = true;
        this.bgVideo.defaultMuted = true;
        this.bgVideo.playsInline = true;
        this.bgVideo.loop = true;
        this.bgVideo.preload = 'auto';
        this.bgVideo.setAttribute('playsinline', '');
        this.bgVideo.setAttribute('webkit-playsinline', '');
        this.bgVideo.setAttribute('muted', '');

        const curSrc = this.bgVideo.getAttribute('src');
        if (curSrc !== videoSrc) {
            this.bgVideo.src = videoSrc;
            this.bgVideo.load();
        }
        this.isVideoLoaded = true;

        const playPromise = this.bgVideo.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.bgVideo.classList.add('visible');
                document.body.classList.add('video-active');
            }).catch(err => {
                console.log("Bg video play deferred:", err);
            });
        }
    }

    initSceneButtons() {
        document.querySelectorAll('.scene-card').forEach(btn => {
            btn.addEventListener('click', () => {
                const scene = parseInt(btn.getAttribute('data-scene'));
                if (scene) this.selectScene(scene);
            });
        });
    }

    selectScene(index) {
        this.isCustomVisual = false;
        if (this.bgVideo) {
            this.bgVideo.style.display = 'block';
            this.bgVideo.style.opacity = '1';
        }
        this.currentVisualIndex = index;
        this.updateBackground();
        this.startSlideshow();
        this.updateSceneCardsUI();
    }

    updateSceneCardsUI() {
        document.querySelectorAll('.scene-card').forEach(card => {
            const sceneNum = parseInt(card.getAttribute('data-scene'));
            card.classList.toggle('active', sceneNum === this.currentVisualIndex);
        });
    }

    initThemeButtons() {
        document.querySelectorAll('#themes-list li[data-theme]').forEach(li => {
            li.addEventListener('click', (e) => {
                const th = e.currentTarget.dataset.theme;
                if (th) this.changeVisualTheme(th);
            });
        });
    }

    changeVisualTheme(themeName, resetIndex = true) {
        this.isCustomVisual = false;
        if (this.bgVideo) {
            this.bgVideo.style.display = 'block';
            this.bgVideo.style.opacity = '1';
        }
        this.currentTheme = normalizeTheme(themeName);
        if (resetIndex) this.currentVisualIndex = this.isReverse ? this.totalVisuals : 1;
        this.updateBackground();
        this.startSlideshow();
        this.updateThemeActiveUI();
        this.updateSceneCardsUI();
    }

    updateThemeActiveUI() {
        document.querySelectorAll('#themes-list li').forEach(li => li.classList.remove('active'));
        const activeLi = document.querySelector(`#themes-list li[data-theme="${this.currentTheme}"]`);
        if (activeLi) activeLi.classList.add('active');
    }

    updateBackground() {
        let th = normalizeTheme(this.currentTheme);
        this.currentTheme = th;
        const imageSrc = `${this.imagePath}${th}/${th}-${this.currentVisualIndex}.jpg`;
        
        // 1. ANINDA GÖRSELİ BODY'YE VE POSTER'A BAS (Asla siyah void oluşmaz!)
        this.body.style.backgroundImage = `url('${imageSrc}')`;
        this.body.style.backgroundSize = "cover";
        this.body.style.backgroundPosition = "center center";
        this.body.style.backgroundRepeat = "no-repeat";

        if (this.bgVideo) {
            this.bgVideo.poster = imageSrc;
        }

        // Eğer kullanıcı henüz 1. sayfada (eklenti ekranında) ise 24 MB videoyu peşin indirme
        const extScreen = document.getElementById('extension-screen');
        const isExtensionVisible = extScreen && !extScreen.classList.contains('ext-hidden');

        if (!isExtensionVisible) {
            this.loadCurrentVideo();
        }
    }

    startSlideshow() {
        this.stopSlideshow();
        const timeInMilliseconds = 600000; // 10 dakikalık döngüsel geçiş

        this.slideInterval = setInterval(() => {
            if (this.isReverse) {
                this.currentVisualIndex--;
                if (this.currentVisualIndex < 1) this.currentVisualIndex = this.totalVisuals;
            } else {
                this.currentVisualIndex++;
                if (this.currentVisualIndex > this.totalVisuals) this.currentVisualIndex = 1;
            }
            this.updateBackground();
        }, timeInMilliseconds);
    }

    stopSlideshow() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// ------------------------------------------
//  FREKANS SESLERİ SENTEZLEYİCİSİ (WEB AUDIO BINAURAL ENGINE)
// ------------------------------------------
class FrequencySynth {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.nodes = [];
        this.isPlaying = false;
        this.currentFreqId = null;
        this.volume = 50;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            this.ctx = new AudioCtx();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play(freqId, volume = 50) {
        this.init();
        this.stop();
        this.currentFreqId = freqId;
        this.isPlaying = true;
        this.setVolume(volume);

        if (freqId === '432hz') {
            this.createTone(432, 0, 0.4);
            this.createTone(864, 0, 0.08);
        } else if (freqId === '528hz') {
            this.createTone(528, 0, 0.4);
            this.createTone(1056, 0, 0.08);
        } else if (freqId === 'alpha') {
            // 10Hz Binaural: Sol 432Hz, Sağ 442Hz (Odaklanma)
            this.createTone(432, -1, 0.35);
            this.createTone(442, 1, 0.35);
        } else if (freqId === 'theta') {
            // 6Hz Binaural: Sol 216Hz, Sağ 222Hz (Akış & Meditasyon)
            this.createTone(216, -1, 0.4);
            this.createTone(222, 1, 0.4);
        } else if (freqId === 'delta') {
            // 2Hz Binaural: Sol 108Hz, Sağ 110Hz (Derin Dinlenme & Uyku)
            this.createTone(108, -1, 0.45);
            this.createTone(110, 1, 0.45);
        } else if (freqId === 'schumann') {
            // 7.83Hz Schumann: Sol 136.1Hz (Om), Sağ 143.93Hz (Dünya Frekansı)
            this.createTone(136.1, -1, 0.4);
            this.createTone(143.93, 1, 0.4);
        }
    }

    createTone(freq, pan = 0, gainLevel = 0.3) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(gainLevel, this.ctx.currentTime + 0.4);

        if (this.ctx.createStereoPanner && pan !== 0) {
            const panner = this.ctx.createStereoPanner();
            panner.pan.setValueAtTime(pan, this.ctx.currentTime);
            osc.connect(gain);
            gain.connect(panner);
            panner.connect(this.masterGain);
        } else {
            osc.connect(gain);
            gain.connect(this.masterGain);
        }

        osc.start();
        this.nodes.push({ osc, gain });
    }

    stop() {
        if (this.nodes.length > 0 && this.ctx) {
            this.nodes.forEach(({ osc, gain }) => {
                try {
                    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);
                    setTimeout(() => { try { osc.stop(); } catch (_) {} }, 250);
                } catch (e) {
                    try { osc.stop(); } catch (_) {}
                }
            });
            this.nodes = [];
        }
        this.isPlaying = false;
    }

    setVolume(value) {
        this.volume = value;
        if (this.masterGain && this.ctx) {
            const v = (value / 100) * 0.35;
            this.masterGain.gain.setValueAtTime(Math.max(0.0001, v), this.ctx.currentTime);
        }
    }
}

// ------------------------------------------
//  MÜZİK VE AMBİYANS YÖNETİCİSİ (HİBRİT MİMARİ)
// ------------------------------------------
class AudioManager {
    constructor() {
        // 1. Lobi Çaları (Sekme 5: Lobi Müzikleri - assets/audios/lobby-sounds/)
        this.lobbyPlayer = document.getElementById('lobby-player');
        this.lobbySoundPath = "assets/audios/lobby-sounds/";
        this.lobbySoundFiles = {
            'cowboy-era': 'cowboy-era.mp3',
            'cyber-world': 'cyber-world.mp3',
            'dark-fantasy': 'dark-fantasy.mp3',
            'jazz-romance': 'jazz-dine.mp3',
            'light-fantasy': 'light-fantasy.mp3',
            'rock-n-roll': 'rock-n-roll.mp3',
            'the-pasific-crest': 'the-pasific-crest.mp3',
            'milky-way': 'milky-way.mp3'
        };
        this.lobbySoundFiles['welcome-to-oregon'] = 'the-pasific-crest.mp3';
        this.lobbySoundFiles['kawaii-space'] = 'milky-way.mp3';
        this.lobbySoundFiles['jazz-dine'] = 'jazz-dine.mp3';
        this.lobbyThemesList = ['cowboy-era', 'cyber-world', 'dark-fantasy', 'light-fantasy', 'jazz-romance', 'rock-n-roll', 'the-pasific-crest', 'milky-way'];
        this.currentLobbyTheme = 'cyber-world';
        this.currentLobbyThemeIndex = 1;
        this.hasLobbyStarted = false;

        // 2. Playlist Çaları (Sekme 4: Tema Listesi - assets/audios/music-for-themes/)
        this.playlistPlayer = document.getElementById('bg-player');
        this.musicPath = "assets/audios/music-for-themes/"; 
        this.currentPlaylistTheme = 'cyber-world';
        this.totalPlaylistTracks = 12;
        this.isPlaylistReverse = false;
        this.currentPlaylistTrackIndex = 1;
        this.isPlaylistShuffle = false;
        this.hasPlaylistStarted = false;
        this.playlistHistory = [];

        // 3. Müzik & Stream Çaları (Canlı Radyolar)
        this.streamPlayer = document.getElementById('radio-player');
        this.freqSynth = new FrequencySynth();

        this.playerMode = 'freq'; // 'freq' | 'radio' | 'embed'
        this.currentFreqId = null;
        this.currentRadioStation = null;

        // Frekans Bilgi Sözlüğü
        this.frequencies = {
            '432hz': { id: '432hz', name: { en: '432Hz Miracle Tone', tr: '432Hz Mucize Tonu' }, credit: { en: 'Pure Harmonic 432Hz (Deep Healing)', tr: 'Saf Harmonik 432Hz (Derin İyileşme)' } },
            '528hz': { id: '528hz', name: { en: '528Hz Solfeggio Love', tr: '528Hz Sevgi & DNA' }, credit: { en: 'Pure 528Hz Transformation Frequency', tr: 'Saf 528Hz Dönüşüm Frekansı' } },
            'alpha': { id: 'alpha', name: { en: 'Alpha Waves (10Hz)', tr: 'Alfa Dalgaları (10Hz)' }, credit: { en: '10Hz Binaural Beat (Focus & Super Learning)', tr: '10Hz Çift Kulaklı Vuru (Odaklanma)' } },
            'theta': { id: 'theta', name: { en: 'Theta Waves (6Hz)', tr: 'Teta Dalgaları (6Hz)' }, credit: { en: '6Hz Binaural Beat (Flow State & Zen)', tr: '6Hz Çift Kulaklı Vuru (Akış & Meditasyon)' } },
            'delta': { id: 'delta', name: { en: 'Delta Waves (2Hz)', tr: 'Delta Dalgaları (2Hz)' }, credit: { en: '2Hz Binaural Beat (Deep Sleep & Rest)', tr: '2Hz Çift Kulaklı Vuru (Derin Uyku)' } },
            'schumann': { id: 'schumann', name: { en: '7.83Hz Earth Resonance', tr: '7.83Hz Dünya Rezonansı' }, credit: { en: '7.83Hz Schumann Harmonic Resonance', tr: '7.83Hz Schumann Yeryüzü Rezonansı' } }
        };
        this.freqKeys = Object.keys(this.frequencies);
        this.currentFreqIndex = 0;

        // Canlı Radyo İstasyonları (Kural: İstasyon Ülke/Bölge (Şehir - Müzik Türleri))
        this.radioStations = {
            'los40': {
                id: 'los40',
                name: { en: 'LOS40', tr: 'LOS40' },
                url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40.mp3',
                credit: { en: 'Live: LOS40 España (Madrid - Pop & Hits)', tr: 'Canlı: LOS40 İspanya (Madrid - Pop & Hit)' }
            },
            'trt-radyo-3': {
                id: 'trt-radyo-3',
                name: { en: 'TRT Radyo 3', tr: 'TRT Radyo 3' },
                url: 'https://rd-trtradyo3.medya.trt.com.tr/master_128.m3u8',
                credit: { en: 'Live: TRT Radyo 3 (Ankara - Classical & Jazz)', tr: 'Canlı: TRT Radyo 3 (Ankara - Klasik Müzik & Caz)' }
            },
            'chante-france': {
                id: 'chante-france',
                name: { en: 'Chante France', tr: 'Chante France' },
                url: 'https://chantefrance.ice.infomaniak.ch/chantefrance-128.mp3',
                credit: { en: 'Live: Chante France (Paris - Chanson & Retro Pop)', tr: 'Canlı: Chante France (Paris - Şanson & Retro Pop)' }
            },
            'flash-fm': {
                id: 'flash-fm',
                name: { en: 'Flash FM', tr: 'Flash FM' },
                url: 'https://audio.gtaradio.net/vc/flash',
                credit: { en: 'Live: Flash FM (Vice City - 80s Pop & New Wave)', tr: 'Canlı: Flash FM (Vice City - 80\'ler Pop & New Wave)' }
            },
            'lagos-jump': {
                id: 'lagos-jump',
                name: { en: 'LagosJump Radio', tr: 'LagosJump Radio' },
                url: 'https://radio.lagosjumpradio.com/listen/lagosjump_radio/radio.mp3',
                credit: { en: 'Live: LagosJump Radio (Lagos - Afrobeats & Afro-Pop)', tr: 'Canlı: LagosJump Radio (Lagos - Afrobeats & Afro-Pop)' }
            },
            'radio-x': {
                id: 'radio-x',
                name: { en: 'Radio X', tr: 'Radio X' },
                url: 'https://media-ssl.musicradio.com/RadioXUK',
                credit: { en: 'Live: Radio X (London - Indie & Alternative Rock)', tr: 'Canlı: Radio X (Londra - Indie & Alternatif Rock)' }
            },
            'capital-fm': {
                id: 'capital-fm',
                name: { en: 'Capital FM', tr: 'Capital FM' },
                url: 'https://media-ssl.musicradio.com/CapitalUK',
                credit: { en: 'Live: Capital FM (London - Top 40 & Pop Hits)', tr: 'Canlı: Capital FM (Londra - Top 40 & Pop Hit)' }
            },
            'asia-dream': {
                id: 'asia-dream',
                name: { en: 'Asia DREAM Radio', tr: 'Asia DREAM Radio' },
                url: 'https://quincy.torontocast.com:2020/stream.mp3',
                credit: { en: 'Live: Asia DREAM Radio (Tokyo - J-Pop & City Pop)', tr: 'Canlı: Asia DREAM Radio (Tokyo - J-Pop & City Pop)' }
            },
            'kexp': {
                id: 'kexp',
                name: { en: 'KEXP 90.3 FM', tr: 'KEXP 90.3 FM' },
                url: 'https://kexp.streamguys1.com/kexp128.mp3',
                credit: { en: 'Live: KEXP 90.3 FM (Seattle - Indie & Alternative)', tr: 'Canlı: KEXP 90.3 FM (Seattle - Bağımsız & Alternatif)' }
            },
            'radio-paradise': {
                id: 'radio-paradise',
                name: { en: 'Radio Paradise', tr: 'Radio Paradise' },
                url: 'https://stream.radioparadise.com/mp3-128',
                credit: { en: 'Live: Radio Paradise (California - Eclectic Rock & Chill)', tr: 'Canlı: Radio Paradise (Kaliforniya - Eklektik Rock & Chill)' }
            },
            'fip-paris': {
                id: 'fip-paris',
                name: { en: 'FIP', tr: 'FIP' },
                url: 'https://icecast.radiofrance.fr/fip-midfi.mp3',
                credit: { en: 'Live: FIP (Paris - Eclectic, Jazz & Groove)', tr: 'Canlı: FIP (Paris - Eklektik, Caz & Groove)' }
            },
            'power-fm': {
                id: 'power-fm',
                name: { en: 'Power FM', tr: 'Power FM' },
                url: 'https://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio',
                credit: { en: 'Live: Power FM (Istanbul - Pop & Hits)', tr: 'Canlı: Power FM (İstanbul - Pop & Hit)' }
            },
            'classic-fm': {
                id: 'classic-fm',
                name: { en: 'Classic FM', tr: 'Classic FM' },
                url: 'https://media-ssl.musicradio.com/ClassicFM',
                credit: { en: 'Live: Classic FM (London - Classical)', tr: 'Canlı: Classic FM (Londra - Klasik Müzik)' }
            }
        };
        // Canlı radyo istasyonlarının anahtar dizisi
        this.radioKeys = ['los40', 'trt-radyo-3', 'chante-france', 'flash-fm', 'lagos-jump', 'radio-x', 'capital-fm', 'asia-dream', 'kexp', 'radio-paradise', 'fip-paris', 'power-fm', 'classic-fm'];
        // Geriye dönük uyumluluk takma adları (backward compatibility aliases)
        this.radioStations['bbc-world'] = this.radioStations['radio-x'];
        this.radioStations['nts-radio'] = this.radioStations['asia-dream'];
        this.radioStations['cowboy-era'] = this.radioStations['radio-x'];
        this.radioStations['cyber-world'] = this.radioStations['flash-fm'];
        this.radioStations['dark-fantasy'] = this.radioStations['radio-paradise'];
        this.radioStations['light-fantasy'] = this.radioStations['chante-france'];
        this.radioStations['jazz-romance'] = this.radioStations['trt-radyo-3'];
        this.radioStations['rock-n-roll'] = this.radioStations['radio-x'];
        this.radioStations['the-pasific-crest'] = this.radioStations['classic-fm'];
        this.radioStations['milky-way'] = this.radioStations['asia-dream'];
        this.radioStations['lofi'] = this.radioStations['chante-france'];
        this.radioStations['synthwave'] = this.radioStations['flash-fm'];
        this.radioStations['space'] = this.radioStations['radio-paradise'];
        this.radioStations['piano-chill'] = this.radioStations['fip-paris'];
        this.radioStations['jazz-cafe'] = this.radioStations['trt-radyo-3'];
        this.radioStations['welcome-to-oregon'] = this.radioStations['classic-fm'];
        this.radioStations['kawaii-space'] = this.radioStations['asia-dream'];
        this.currentRadioIndex = 0;
        this.currentHls = null;

        this.previewAudio = null;
        this.previewTheme = null;

        // Lobi Kredi Bilgileri (Tüm 12 parça x 6 tema)
        this.lobbyCredits = {
            'cowboy-era': {
                1: "Music by: JHS Pedals - Cowboy Lullaby",
                2: "Music by: Chris Haugen - Tumbleweed Texas",
                3: "Music by: Kaazoom - Homestead",
                4: "Music by: Kaazoom - Rider Under the Canyon Moon",
                5: "Music by: Kaazoom - The Lonesome Rider",
                6: "Music by: Kaazoom - Way Out West",
                7: "Music by: Telecasted - Big River",
                8: "Music by: Dan Lebowitz - Dumb as a Box",
                9: "Music by: Zachariah Hickman - The Beacon",
                10: "Music by: Cumbia Deli - Sabor a la Antigua",
                11: "Music by: Litesaturation - Country Rock",
                12: "Music by: Track Tribe - Hotlanta"
            },
            'cyber-world': {
                1: "Music by: Ribhavagrawal - Nostalgic",
                2: "Music by: Ribhavagrawal - Royal Entry",
                3: "Music by: Ribhavagrawal - Teleporting",
                4: "Music by: Ribhavagrawal - Villian Arrives",
                5: "Music by: The Soundlings - 360 No Scope",
                6: "Music by: Dan Lebowitz - Boomin'",
                7: "Music by: Dan Lebowitz - In It to Win It",
                8: "Music by: Telecasted - Jetski",
                9: "Music by: Telecasted - The Last Goodbye",
                10: "Music by: Everet Almond - Wrangle the Crazy",
                11: "Music by: half.cool - Sharp Edges",
                12: "Music by: half.cool - Virtual Roaming Charges"
            },
            'dark-fantasy': {
                1: "Music by: Alexaa221 from Pixabay",
                2: "Music by: Everet Almond - Among the Stars",
                3: "Music by: Puddle of Infinity - Cloud Wheels, Castle Builder",
                4: "Music by: Kellepics - Pandora",
                5: "Music by: Quincas Moreira - London Fog",
                6: "Music by: Montogoronto from Pixabay",
                7: "Music by: Density & Time - Level",
                8: "Music by: Openmindaudio from Pixabay",
                9: "Music by: Density & Time - Radar",
                10: "Music by: Brian Bolger - Black Mass",
                11: "Music by: NIVIRO - Rumble | Provided by NCS",
                12: "Music by: Kevin MacLeod - Hall of the Mountain King | CC BY 4.0 (incompetech.com)"
            },
            'light-fantasy': {
                1: "Music by: Meditativetiger - Ethereal Harp Lullaby",
                2: "Music by: Alanajordan - Ethereal Visit",
                3: "Music by: Dreaming Under The Stars from Pixabay",
                4: "Music by: Jumpingbunny from Pixabay",
                5: "Music by: Zachariah Hickman - Leaning On the Everlasting Arms",
                6: "Music by: Whatssmooth - The Fairy of Crimson Light",
                7: "Music by: Kevin MacLeod - Pooka | CC BY 4.0 (incompetech.com)",
                8: "Music by: Brian Bolger - Music Box",
                9: "Music by: Aaron Kenny - Happy Haunts",
                10: "Music by: Reed Mathis - Orphan",
                11: "Music by: Nathan Moore - With a Rose in Your Teeth",
                12: "Music by: Esther Abrami - No.3 Morning Folk Song"
            },
            'jazz-romance': {
                1: "Music by: Surprising Media - Gentle Glow",
                2: "Music by: Surprising Media from Pixabay",
                3: "Music by: Surprising Media from Pixabay",
                4: "Music by: Surprising Media from Pixabay",
                5: "Music by: E's Jammy Jams - Arabian Sand",
                6: "Music by: Alex Hamlin - Dance Number 24449",
                7: "Music by: Bird Creek - Ipanema Daydream",
                8: "Music by: Valerystarfell - Snowflake",
                9: "Music by: Doug Maxwell - 1940's Slow Dance",
                10: "Music by: Casa Rosa's Tulum Vibes - Bah Dop Bop",
                11: "Music by: Jimmy Fontanez - ChaCha Fontanez",
                12: "Music by: Quincas Moreira - Tango Mango"
            },
            'rock-n-roll': {
                1: "Music by: Huma-Huma - Heavy",
                2: "Music by: Silent Partner - Cloud Patterns",
                3: "Music by: National Sweetheart - Airline",
                4: "Music by: Silent Partner - Abracadabra",
                5: "Music by: Audionautix - Code Blue | CC BY 4.0 (audionautix.com)",
                6: "Music by: Silent Partner - Dinner For One",
                7: "Music by: Everet Almond - A Brand New Day",
                8: "Music by: Silent Partner - Don't Sleep",
                9: "Music by: Dan Lebowitz, Tone Seeker - Land of a Loss",
                10: "Music by: Silent Partner - Don't Change A Thing",
                11: "Music by: Riot - Donations",
                12: "Music by: Audionautix - Alison | CC BY 4.0 (audionautix.com)"
            },
            'the-pasific-crest': {
                1: "Music by: The Whole Other - The Dismal Hand",
                2: "Music by: Patrick Patrikios - Project",
                3: "Music by: Dan Lebowitz, Tone Seeker - A Distant Call",
                4: "Music by: The Whole Other - Beyond the Lows",
                5: "Music by: Patrick Patrikios - Away",
                6: "Music by: Dan Lebowitz - Barilicious",
                7: "Music by: Patrick Patrikios - Know Myself",
                8: "Music by: The Whole Other - A Guy Walks Into a Bar",
                9: "Music by: The Whole Other - An Army of None",
                10: "Music by: Dan Lebowitz - Robots a Cometh",
                11: "Music by: Dan Lebowitz - How We Like It",
                12: "Music by: The Whole Other - Clocks on Strike"
            },
            'milky-way': {
                1: "Music by: DivKid - Digifunk",
                2: "Music by: Patrick Patrikios - City lights",
                3: "Music by: The Grey Room & Density & Time - Pulsar",
                4: "Music by: DivKid - Cupid's Tubes",
                5: "Music by: Patrick Patrikios - Cruise control",
                6: "Music by: The Grey Room & Density & Time - Nebula",
                7: "Music by: Cheel - Anywhen You Say",
                8: "Music by: DivKid - Polymetric Juggling",
                9: "Music by: Density & Time - End Of Valor",
                10: "Music by: Density & Time - AETHER",
                11: "Music by: Cheel - Violet Vape",
                12: "Music by: Density & Time - Trekking"
            }
        };
        this.lobbyCredits['welcome-to-oregon'] = this.lobbyCredits['the-pasific-crest'];
        this.lobbyCredits['kawaii-space'] = this.lobbyCredits['milky-way'];

        // Ambiyans Kredi Bilgileri
        this.soundCredits = {
            'winter-wind': "Sound by: Dragon Studio from Pixabay", 'rain': "Sound by: Liecio from Pixabay",
            'birds': "Sound by: Freesound Community from Pixabay", 'birds-rain': "Sound by: SoundReality from Pixabay",
            'waves-seagulls': "Sound by: Soundsvisual from Pixabay", 'fire': "Sound by: SoundReality from Pixabay",
            'cafe-noise': "Sound by: Freesound Community from Pixabay", 'train': "Sound by: SSPsurvival from Pixabay",
            'koto-japanese-zither': "Sound by: Freesound"
        };

        // UI Bağlantıları
        this.initLobbyControls();
        this.initPlaylistControls();
        this.initMusicPlayerControls();
        this.initAmbiences(); 
        
        if (this.lobbyPlayer) {
            this.lobbyPlayer.loop = true;
        }
        if (this.playlistPlayer) {
            this.playlistPlayer.onended = () => this.playNextPlaylistTrack();
        }
    }

    // ==========================================
    //  1. AMBIENT SOUNDS (Ambiyans Mikseri)
    // ==========================================
    initAmbiences() {
        this.activeAmbiences = [];
        this.uiSoundsPlayPauseBtn = document.getElementById('btn-sounds-play-pause');
        this.uiSoundCredit = document.getElementById('sound-credit');

        if(this.uiSoundsPlayPauseBtn) {
            this.uiSoundsPlayPauseBtn.addEventListener('click', () => this.toggleMasterAmbience());
        }

        this.ambienceButtons = {
            'winter-wind': document.getElementById('btn-winter-wind'), 'rain': document.getElementById('btn-rain'),
            'birds': document.getElementById('btn-birds'), 'birds-rain': document.getElementById('btn-birds-rain'),
            'waves-seagulls': document.getElementById('btn-waves-seagulls'), 'fire': document.getElementById('btn-fire'),
            'cafe-noise': document.getElementById('btn-cafe-noise'), 'train': document.getElementById('btn-train'),
            'koto-japanese-zither': document.getElementById('btn-koto-japanese-zither')
        };

        document.querySelectorAll('#ambient-sounds-list li[data-sound]').forEach(li => {
            li.addEventListener('click', (e) => {
                const snd = e.currentTarget.dataset.sound;
                if (snd) this.toggleAmbience(snd);
            });
        });
    }

    updateSoundCreditText() {
        if (!this.uiSoundCredit) return;
        const t = translations[currentLang];
        
        if (this.activeAmbiences.length === 0) {
            this.uiSoundCredit.innerText = t.playPauseAudio;
        } else if (this.activeAmbiences.length === 1) {
            const playingId = this.activeAmbiences[0];
            let rawCredit = String(this.soundCredits[playingId] || t.soundPlaying);
            this.uiSoundCredit.innerText = rawCredit.replace("Sound by:", t.soundBy);
        } else {
            this.uiSoundCredit.innerText = `${t.specialMix} ${this.activeAmbiences.length} ${t.soundsActive}`;
        }
    }

    toggleAmbience(soundId) {
        const targetAudio = document.getElementById(`audio-${soundId}`);
        const targetButton = this.ambienceButtons[soundId];
        if (!targetAudio || !targetButton) return;

        if (targetAudio.paused) {
            targetAudio.play().then(() => {
                targetButton.classList.add('active');
                if (!this.activeAmbiences.includes(soundId)) this.activeAmbiences.push(soundId);
                if (this.uiSoundsPlayPauseBtn) this.uiSoundsPlayPauseBtn.innerHTML = '&#10074;&#10074;';
                this.updateSoundCreditText(); 
            });
        } else {
            targetAudio.pause();
            targetButton.classList.remove('active');
            this.activeAmbiences = this.activeAmbiences.filter(id => id !== soundId);
            this.updateSoundCreditText(); 
        }
    }

    toggleMasterAmbience() {
        let isAnyPlaying = false;
        this.activeAmbiences.forEach(soundId => {
            const audio = document.getElementById(`audio-${soundId}`);
            if (audio && !audio.paused) isAnyPlaying = true;
        });

        if (isAnyPlaying) {
            this.activeAmbiences.forEach(soundId => {
                const audio = document.getElementById(`audio-${soundId}`);
                if (audio) audio.pause();
            });
            if (this.uiSoundsPlayPauseBtn) this.uiSoundsPlayPauseBtn.innerHTML = '&#9654;';
        } else {
            this.activeAmbiences.forEach(soundId => {
                const audio = document.getElementById(`audio-${soundId}`);
                if (audio) audio.play();
            });
            if (this.uiSoundsPlayPauseBtn) this.uiSoundsPlayPauseBtn.innerHTML = '&#10074;&#10074;';
        }
    }

    // ==========================================
    //  2. LOBBY MUSIC (Lobi Müzikleri - assets/audios/lobby-sounds/)
    // ==========================================
    initLobbyControls() {
        this.uiLobbyPlayPauseBtn = document.getElementById('btn-lobby-play-pause');
        this.uiLobbyNextBtn = document.getElementById('btn-lobby-next');
        this.uiLobbyPrevBtn = document.getElementById('btn-lobby-prev');
        this.uiLobbyTrackCredit = document.getElementById('lobby-track-credit');
        const lobbyVolSlider = document.getElementById('lobby-volume');

        this.uiLobbyPlayPauseBtn?.addEventListener('click', () => this.toggleLobbyPlayPause());
        this.uiLobbyNextBtn?.addEventListener('click', () => this.playNextLobbyTheme());
        this.uiLobbyPrevBtn?.addEventListener('click', () => this.playPrevLobbyTheme());
        lobbyVolSlider?.addEventListener('input', (e) => this.setLobbyVolume(e.target.value));

        document.querySelectorAll('#lobby-themes-list li[data-lobby-theme]').forEach(li => {
            li.addEventListener('click', (e) => {
                const themeName = e.currentTarget.dataset.lobbyTheme;
                if (themeName) this.playLobbyTheme(themeName);
            });
        });
    }

    playLobbyTheme(themeName) {
        let normalized = normalizeTheme(themeName);

        this.currentLobbyTheme = normalized;
        const idx = this.lobbyThemesList.indexOf(normalized);
        if (idx !== -1) this.currentLobbyThemeIndex = idx;

        const file = this.lobbySoundFiles[normalized] || `${normalized}.mp3`;
        const src = `${this.lobbySoundPath}${file}`;

        if (this.playlistPlayer && !this.playlistPlayer.paused) {
            this.playlistPlayer.pause();
            this.updatePlaylistUI();
        }
        if (this.streamPlayer && !this.streamPlayer.paused) {
            this.streamPlayer.pause();
            this.updateMusicPlayerUI();
        }
        if (this.freqSynth && this.freqSynth.isPlaying) {
            this.freqSynth.stop();
        }

        if (this.lobbyPlayer) {
            this.hasLobbyStarted = true;
            this.lobbyPlayer.src = src;
            this.lobbyPlayer.loop = true;
            this.lobbyPlayer.load();
            this.lobbyPlayer.play()
                .then(() => this.updateLobbyUI())
                .catch(err => {
                    console.log("Lobby sound play err:", err);
                    this.updateLobbyUI();
                });
        }
        this.updateLobbyUI();
    }

    toggleLobbyPlayPause() {
        if (!this.lobbyPlayer) return;
        if (!this.lobbyPlayer.src || !this.hasLobbyStarted) {
            this.playLobbyTheme(this.currentLobbyTheme || 'cyber-world');
            return;
        }

        if (this.lobbyPlayer.paused) {
            if (this.playlistPlayer && !this.playlistPlayer.paused) {
                this.playlistPlayer.pause();
                this.updatePlaylistUI();
            }
            if (this.streamPlayer && !this.streamPlayer.paused) {
                this.streamPlayer.pause();
                this.updateMusicPlayerUI();
            }
            if (this.freqSynth && this.freqSynth.isPlaying) {
                this.freqSynth.stop();
            }
            this.hasLobbyStarted = true;
            this.lobbyPlayer.play().then(() => this.updateLobbyUI()).catch(e => console.log(e));
        } else {
            this.lobbyPlayer.pause();
            this.updateLobbyUI();
        }
    }

    playNextLobbyTheme() {
        this.currentLobbyThemeIndex = (this.currentLobbyThemeIndex + 1) % this.lobbyThemesList.length;
        this.playLobbyTheme(this.lobbyThemesList[this.currentLobbyThemeIndex]);
    }

    playPrevLobbyTheme() {
        this.currentLobbyThemeIndex = (this.currentLobbyThemeIndex - 1 + this.lobbyThemesList.length) % this.lobbyThemesList.length;
        this.playLobbyTheme(this.lobbyThemesList[this.currentLobbyThemeIndex]);
    }

    setLobbyVolume(value) {
        if (this.lobbyPlayer) this.lobbyPlayer.volume = value / 100;
    }

    getLobbyThemeTitle(themeKey) {
        let normalized = normalizeTheme(themeKey);

        const isTr = currentLang === 'tr';
        const suffix = isTr ? 'Lobi Müziği' : 'Lobby Music';

        const district = window.mapManager?.districts?.[normalized];
        if (district && district.title) {
            const bldName = district.title[currentLang] || district.title.en;
            return `${bldName} — ${suffix}`;
        }

        const fallbackTitles = {
            'cowboy-era': { tr: 'Vahşi Batı Salon', en: 'Wild West Saloon' },
            'cyber-world': { tr: 'Cyberpunk Gökdelen', en: 'Cyberpunk Skyscraper' },
            'dark-fantasy': { tr: 'Lanetli Katedral', en: 'Cursed Cathedral' },
            'light-fantasy': { tr: 'Ejderhanın Sığınağı', en: 'Dragon\'s Sanctuary' },
            'jazz-romance': { tr: 'New York Kadife Caz', en: 'New York Velvet Jazz' },
            'rock-n-roll': { tr: 'Demokrasinin Çocukları Motor Kulübü', en: 'Children of Democracy Motor Club' },
            'the-pasific-crest': { tr: 'Oregon\'a Hoşgeldiniz', en: 'Welcome to Oregon' },
            'milky-way': { tr: 'Tatlış Uzay', en: 'Kawaii Space' }
        };
        const lang = isTr ? 'tr' : 'en';
        const bld = fallbackTitles[normalized] ? fallbackTitles[normalized][lang] : normalized;
        return `${bld} — ${suffix}`;
    }

    updateLobbyUI() {
        const isPaused = !this.lobbyPlayer || this.lobbyPlayer.paused;
        const playIcon = isPaused ? '&#9654;' : '&#10074;&#10074;';

        if (this.uiLobbyPlayPauseBtn) this.uiLobbyPlayPauseBtn.innerHTML = playIcon;

        // Aktif lobi temasını listede işaretle
        document.querySelectorAll('#lobby-themes-list li').forEach(li => li.classList.remove('active'));
        if (this.currentLobbyTheme) {
            const activeLi = document.querySelector(`#lobby-themes-list li[data-lobby-theme="${this.currentLobbyTheme}"]`);
            if (activeLi) activeLi.classList.add('active');
        }

        if (this.uiLobbyTrackCredit) {
            if (this.hasLobbyStarted && this.currentLobbyTheme) {
                this.uiLobbyTrackCredit.innerText = this.getLobbyThemeTitle(this.currentLobbyTheme);
            } else {
                const t = translations[currentLang];
                this.uiLobbyTrackCredit.innerText = t ? t.awaitingAudio : 'Awaiting audio...';
            }
        }
    }

    // ==========================================
    //  2.1 PLAYLIST (Tema Müzik Listesi - assets/audios/music-for-themes/)
    // ==========================================
    initPlaylistControls() {
        this.uiPlaylistPlayPauseBtn = document.getElementById('btn-playlist-play-pause');
        this.uiPlaylistNextBtn = document.getElementById('btn-playlist-next');
        this.uiPlaylistPrevBtn = document.getElementById('btn-playlist-prev');
        this.uiPlaylistTrackCredit = document.getElementById('playlist-track-credit');
        this.uiPlaylistThemeName = document.getElementById('playlist-theme-name');
        const playlistVolSlider = document.getElementById('playlist-volume');

        this.uiPlaylistPlayPauseBtn?.addEventListener('click', () => this.togglePlaylistPlayPause());
        this.uiPlaylistNextBtn?.addEventListener('click', () => this.playNextPlaylistTrack());
        this.uiPlaylistPrevBtn?.addEventListener('click', () => this.playPrevPlaylistTrack());

        const shuffleBtns = [
            document.getElementById('btn-playlist-shuffle'),
            document.getElementById('btn-playlist-shuffle-toggle')
        ];
        shuffleBtns.forEach(btn => {
            btn?.addEventListener('click', () => this.togglePlaylistShuffle());
        });

        playlistVolSlider?.addEventListener('input', (e) => {
            this.setPlaylistVolume(e.target.value);
        });

        if (this.playlistPlayer) {
            this.playlistPlayer.onended = () => this.playNextPlaylistTrack();
        }
    }

    setPlaylistTheme(themeName) {
        this.currentPlaylistTheme = normalizeTheme(themeName);
        this.currentPlaylistTrackIndex = 1;
        this.playlistHistory = [];
        this.updatePlaylistUI();
    }

    playPlaylistTrack(themeName = null, trackIndex = null) {
        if (themeName) {
            this.currentPlaylistTheme = normalizeTheme(themeName);
        }
        if (!this.currentPlaylistTheme) {
            this.currentPlaylistTheme = normalizeTheme(window.theme?.currentTheme || 'cyber-world');
        }
        if (trackIndex !== null) {
            this.currentPlaylistTrackIndex = trackIndex;
        }

        const src = `${this.musicPath}${this.currentPlaylistTheme}/mp${this.currentPlaylistTrackIndex}.mp3`;

        // Lobi müziği çalıyorsa durdur
        if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
            this.lobbyPlayer.pause();
            this.updateLobbyUI();
        }
        if (this.streamPlayer && !this.streamPlayer.paused) {
            this.streamPlayer.pause();
            this.updateMusicPlayerUI();
        }
        if (this.freqSynth && this.freqSynth.isPlaying) {
            this.freqSynth.stop();
        }

        if (this.playlistPlayer) {
            this.hasPlaylistStarted = true;
            this.playlistPlayer.src = src;
            this.playlistPlayer.load();
            this.playlistPlayer.play()
                .then(() => this.updatePlaylistUI())
                .catch(err => {
                    console.log("Playlist play err:", err);
                    this.updatePlaylistUI();
                });
        }
        this.updatePlaylistUI();
    }

    togglePlaylistPlayPause() {
        if (!this.playlistPlayer) return;
        if (!this.playlistPlayer.src || !this.hasPlaylistStarted) {
            this.playPlaylistTrack(this.currentPlaylistTheme || 'cyber-world');
            return;
        }

        if (this.playlistPlayer.paused) {
            if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
                this.lobbyPlayer.pause();
                this.updateLobbyUI();
            }
            if (this.streamPlayer && !this.streamPlayer.paused) {
                this.streamPlayer.pause();
                this.updateMusicPlayerUI();
            }
            if (this.freqSynth && this.freqSynth.isPlaying) {
                this.freqSynth.stop();
            }
            this.hasPlaylistStarted = true;
            this.playlistPlayer.play().then(() => this.updatePlaylistUI()).catch(e => console.log(e));
        } else {
            this.playlistPlayer.pause();
            this.updatePlaylistUI();
        }
    }

    playNextPlaylistTrack() {
        if (this.currentPlaylistTrackIndex) {
            if (!this.playlistHistory) this.playlistHistory = [];
            this.playlistHistory.push(this.currentPlaylistTrackIndex);
            if (this.playlistHistory.length > 50) this.playlistHistory.shift();
        }

        if (this.isPlaylistShuffle) {
            let nextIndex = this.currentPlaylistTrackIndex;
            if (this.totalPlaylistTracks > 1) {
                while (nextIndex === this.currentPlaylistTrackIndex) {
                    nextIndex = Math.floor(Math.random() * this.totalPlaylistTracks) + 1;
                }
            }
            this.currentPlaylistTrackIndex = nextIndex;
        } else {
            this.currentPlaylistTrackIndex++;
            if (this.currentPlaylistTrackIndex > this.totalPlaylistTracks) {
                this.currentPlaylistTrackIndex = 1;
            }
        }
        this.playPlaylistTrack(this.currentPlaylistTheme, this.currentPlaylistTrackIndex);
    }

    playPrevPlaylistTrack() {
        if (this.playlistHistory && this.playlistHistory.length > 0) {
            // Gerçekten daha önce dinlenen parçayı geçmişten alıp çal
            const prevIndex = this.playlistHistory.pop();
            this.currentPlaylistTrackIndex = prevIndex;
        } else {
            // Geçmiş henüz boşsa sıralı bir önceki parçaya geç
            this.currentPlaylistTrackIndex--;
            if (this.currentPlaylistTrackIndex < 1) {
                this.currentPlaylistTrackIndex = this.totalPlaylistTracks;
            }
        }
        this.playPlaylistTrack(this.currentPlaylistTheme, this.currentPlaylistTrackIndex);
    }

    setPlaylistVolume(value) {
        if (this.playlistPlayer) this.playlistPlayer.volume = value / 100;
    }

    togglePlaylistShuffle() {
        this.isPlaylistShuffle = !this.isPlaylistShuffle;
        this.updatePlaylistShuffleUI();
        if (this.isPlaylistShuffle && this.hasPlaylistStarted) {
            this.playNextPlaylistTrack();
        }
    }

    updatePlaylistShuffleUI() {
        const btns = [
            document.getElementById('btn-playlist-shuffle'),
            document.getElementById('btn-playlist-shuffle-toggle')
        ];
        btns.forEach(btn => {
            if (btn) btn.classList.toggle('active', this.isPlaylistShuffle);
        });
    }

    updatePlaylistUI() {
        const t = translations[currentLang];
        const isPaused = !this.playlistPlayer || this.playlistPlayer.paused;
        const playIcon = isPaused ? '&#9654;' : '&#10074;&#10074;';

        if (this.uiPlaylistPlayPauseBtn) this.uiPlaylistPlayPauseBtn.innerHTML = playIcon;
        this.updatePlaylistShuffleUI();

        if (this.uiPlaylistThemeName) {
            let currentThemeTitle = 'CURRENT THEME';
            if (this.currentPlaylistTheme) {
                const districtData = window.mapManager?.districts?.[this.currentPlaylistTheme];
                if (districtData) {
                    currentThemeTitle = (districtData.title[currentLang] || districtData.title.en).toUpperCase();
                } else {
                    currentThemeTitle = this.currentPlaylistTheme.replaceAll('-', ' ').toUpperCase();
                }
            }
            this.uiPlaylistThemeName.innerText = currentThemeTitle;
        }

        if (this.currentPlaylistTheme && this.hasPlaylistStarted) {
            let creditInfo = this.lobbyCredits[this.currentPlaylistTheme] && this.lobbyCredits[this.currentPlaylistTheme][this.currentPlaylistTrackIndex];
            let rawMusicCredit = creditInfo ? creditInfo : t.noCopyright;
            const fullCredit = rawMusicCredit.replace("Music by:", t.musicBy).trim();
            if (this.uiPlaylistTrackCredit) this.uiPlaylistTrackCredit.innerText = fullCredit;
        } else {
            if (this.uiPlaylistTrackCredit) this.uiPlaylistTrackCredit.innerText = t.awaitingAudio;
        }
    }

    // Geriye dönük uyumluluk takma adları (Backward Compatibility Aliases)
    playLobby(themeName, trackIndex = null) {
        if (trackIndex !== null) {
            this.playPlaylistTrack(themeName, trackIndex);
        } else {
            this.playLobbyTheme(themeName);
        }
    }

    prepareLobby(themeName) {
        let normalized = normalizeTheme(themeName);
        this.currentPlaylistTheme = normalized;
        this.currentLobbyTheme = normalized;
        this.updatePlaylistUI();
        this.updateLobbyUI();
    }

    playThemePreview(themeName) {
        let normalized = normalizeTheme(themeName);
        const file = this.lobbySoundFiles ? this.lobbySoundFiles[normalized] : null;
        if (!file) return;

        if (this.previewAudio && this.previewTheme === normalized && !this.previewAudio.paused) {
            this.stopThemePreview();
            return;
        }

        if (this.previewAudio) {
            this.previewAudio.pause();
            this.previewAudio.currentTime = 0;
        }

        this.previewTheme = normalized;
        this.previewAudio = new Audio(`${this.lobbySoundPath}${file}`);
        this.previewAudio.loop = true;
        this.previewAudio.volume = 0.55;
        this.previewAudio.play().catch(e => console.log("Lobby preview audio err:", e));

        const yBtn = document.querySelector('.abxy-y');
        if (yBtn) yBtn.classList.add('playing-preview');
    }

    stopThemePreview() {
        if (this.previewAudio) {
            this.previewAudio.pause();
            this.previewAudio.currentTime = 0;
            this.previewTheme = null;
        }
        const yBtn = document.querySelector('.abxy-y');
        if (yBtn) yBtn.classList.remove('playing-preview');
    }

    // ==========================================
    //  3. MUSIC PLAYER (Frequencies / Live Radio / Embed)
    // ==========================================
    initMusicPlayerControls() {
        this.uiPlayerPlayPauseBtn = document.getElementById('btn-player-play-pause');
        this.uiPlayerNextBtn = document.getElementById('btn-player-next');
        this.uiPlayerPrevBtn = document.getElementById('btn-player-prev');
        this.uiPlayerTrackCredit = document.getElementById('player-track-credit');

        this.uiFreqPlayPauseBtn = document.getElementById('btn-freq-play-pause');
        this.uiFreqNextBtn = document.getElementById('btn-freq-next');
        this.uiFreqPrevBtn = document.getElementById('btn-freq-prev');
        this.uiFreqTrackCredit = document.getElementById('freq-track-credit');

        const playerVolSlider = document.getElementById('player-volume');
        const freqVolSlider = document.getElementById('freq-volume');

        this.uiPlayerPlayPauseBtn?.addEventListener('click', () => {
            this.playerMode = 'radio';
            this.togglePlayerPlayPause();
        });
        this.uiPlayerNextBtn?.addEventListener('click', () => {
            this.playerMode = 'radio';
            this.playNextPlayerItem();
        });
        this.uiPlayerPrevBtn?.addEventListener('click', () => {
            this.playerMode = 'radio';
            this.playPrevPlayerItem();
        });

        this.uiFreqPlayPauseBtn?.addEventListener('click', () => {
            this.playerMode = 'freq';
            this.togglePlayerPlayPause();
        });
        this.uiFreqNextBtn?.addEventListener('click', () => {
            this.playerMode = 'freq';
            this.playNextPlayerItem();
        });
        this.uiFreqPrevBtn?.addEventListener('click', () => {
            this.playerMode = 'freq';
            this.playPrevPlayerItem();
        });

        playerVolSlider?.addEventListener('input', (e) => {
            this.setPlayerVolume(e.target.value);
            if (freqVolSlider) freqVolSlider.value = e.target.value;
        });

        freqVolSlider?.addEventListener('input', (e) => {
            this.setPlayerVolume(e.target.value);
            if (playerVolSlider) playerVolSlider.value = e.target.value;
        });

        // 6'lı Müzik Sekmesi Geçişleri (.music-tab-btn -> .music-tab-pane)
        const musicTabBtns = document.querySelectorAll('.music-tab-btn[data-music-tab]');
        const musicPanes = document.querySelectorAll('.music-tab-pane[data-music-tab-content]');

        musicTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-music-tab');
                if (!targetTab) return;

                musicTabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                musicPanes.forEach(pane => {
                    if (pane.getAttribute('data-music-tab-content') === targetTab) {
                        pane.classList.add('active');
                    } else {
                        pane.classList.remove('active');
                    }
                });
            });
        });

        // Frekans butonları
        document.querySelectorAll('#frequency-list li[data-freq-id]').forEach(li => {
            li.addEventListener('click', (e) => {
                const freqId = e.currentTarget.dataset.freqId;
                if (freqId) this.playFrequency(freqId);
            });
        });

        // Canlı radyo butonları
        document.querySelectorAll('#radio-stations-list li[data-radio-station]').forEach(li => {
            li.addEventListener('click', (e) => {
                const stationId = e.currentTarget.dataset.radioStation;
                if (stationId) this.playRadio(stationId);
            });
        });
    }

    playFrequency(freqId) {
        const freq = this.frequencies[freqId];
        if (!freq) return;

        // Stream, çalma listesi ve lobi çalarını durdur
        if (this.currentHls) {
            try { this.currentHls.destroy(); } catch (e) {}
            this.currentHls = null;
        }
        if (this.streamPlayer && !this.streamPlayer.paused) {
            this.streamPlayer.pause();
            this.streamPlayer.onerror = null;
        }
        if (this.playlistPlayer && !this.playlistPlayer.paused) {
            this.playlistPlayer.pause();
            this.updatePlaylistUI();
        }
        if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
            this.lobbyPlayer.pause();
            this.updateLobbyUI();
        }

        this.playerMode = 'freq';
        this.currentFreqId = freqId;
        this.currentRadioStation = null;
        this.currentFreqIndex = this.freqKeys.indexOf(freqId);

        this.updatePlayerActiveUI();
        const playerVol = document.getElementById('player-volume')?.value || 50;
        this.freqSynth.play(freqId, playerVol);
        this.updateMusicPlayerUI();
    }

    playRadio(stationId) {
        let normalized = normalizeTheme(stationId);
        const station = this.radioStations[normalized];
        if (!station || !this.streamPlayer) return;

        // Frekans sentezleyiciyi, çalma listesini ve lobi çalarını durdur
        this.freqSynth.stop();
        if (this.playlistPlayer && !this.playlistPlayer.paused) {
            this.playlistPlayer.pause();
            this.updatePlaylistUI();
        }
        if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
            this.lobbyPlayer.pause();
            this.updateLobbyUI();
        }

        this.playerMode = 'radio';
        this.currentRadioStation = normalized;
        this.currentFreqId = null;
        this.currentRadioIndex = this.radioKeys.indexOf(normalized);

        this.updatePlayerActiveUI();

        const t = translations[currentLang];
        if (this.uiPlayerTrackCredit) {
            const stationTitle = station.name[currentLang] || station.name.en;
            this.uiPlayerTrackCredit.innerText = `${t.radioConnecting || 'Connecting...'} (${stationTitle})`;
        }

        // Varsa önceki HLS örneğini temizle
        if (this.currentHls) {
            try { this.currentHls.destroy(); } catch (e) {}
            this.currentHls = null;
        }

        this.streamPlayer.onerror = () => {
            console.warn(`[Atmosphere] Radio stream failed for ${stationId}`);
            if (this.uiPlayerTrackCredit) {
                this.uiPlayerTrackCredit.innerText = `${t.radioErrorFallback || 'Stream unavailable'}`;
            }
        };

        const isHls = station.url.includes('.m3u8');
        if (isHls && !this.streamPlayer.canPlayType('application/vnd.apple.mpegurl') && window.Hls && Hls.isSupported()) {
            this.currentHls = new Hls({ enableWorker: false });
            this.currentHls.loadSource(station.url);
            this.currentHls.attachMedia(this.streamPlayer);
            this.currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.streamPlayer.play()
                    .then(() => this.updateMusicPlayerUI())
                    .catch(err => {
                        console.log("Radio HLS play error:", err);
                        this.updateMusicPlayerUI();
                    });
            });
            this.currentHls.on(Hls.Events.ERROR, (event, data) => {
                if (data && data.fatal) {
                    console.warn('[Atmosphere] HLS fatal error:', data);
                    if (this.uiPlayerTrackCredit) {
                        this.uiPlayerTrackCredit.innerText = `${t.radioErrorFallback || 'Stream unavailable'}`;
                    }
                }
            });
        } else {
            this.streamPlayer.src = station.url;
            this.streamPlayer.load();
            this.streamPlayer.play()
                .then(() => this.updateMusicPlayerUI())
                .catch(err => {
                    console.log("Radio stream play error:", err);
                    this.updateMusicPlayerUI();
                });
        }
    }

    togglePlayerPlayPause() {
        if (this.playerMode === 'freq') {
            if (!this.currentFreqId) {
                this.playFrequency('432hz');
                return;
            }
            if (this.freqSynth.isPlaying) {
                this.freqSynth.stop();
            } else {
                if (this.streamPlayer && !this.streamPlayer.paused) {
                    this.streamPlayer.pause();
                }
                if (this.playlistPlayer && !this.playlistPlayer.paused) {
                    this.playlistPlayer.pause();
                    this.updatePlaylistUI();
                }
                if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
                    this.lobbyPlayer.pause();
                    this.updateLobbyUI();
                }
                const vol = document.getElementById('player-volume')?.value || 50;
                this.freqSynth.play(this.currentFreqId, vol);
            }
            this.updateMusicPlayerUI();
        } else if (this.playerMode === 'radio') {
            if (!this.streamPlayer) return;
            if (!this.streamPlayer.src || !this.currentRadioStation) {
                this.playRadio('los40');
                return;
            }
            if (this.streamPlayer.paused) {
                if (this.freqSynth && this.freqSynth.isPlaying) {
                    this.freqSynth.stop();
                }
                if (this.playlistPlayer && !this.playlistPlayer.paused) {
                    this.playlistPlayer.pause();
                    this.updatePlaylistUI();
                }
                if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
                    this.lobbyPlayer.pause();
                    this.updateLobbyUI();
                }
                this.streamPlayer.play().then(() => this.updateMusicPlayerUI()).catch(e => console.log(e));
            } else {
                this.streamPlayer.pause();
                this.updateMusicPlayerUI();
            }
        }
    }

    playNextPlayerItem() {
        if (this.playerMode === 'freq') {
            this.currentFreqIndex = (this.currentFreqIndex + 1) % this.freqKeys.length;
            this.playFrequency(this.freqKeys[this.currentFreqIndex]);
        } else if (this.playerMode === 'radio') {
            this.currentRadioIndex = (this.currentRadioIndex + 1) % this.radioKeys.length;
            this.playRadio(this.radioKeys[this.currentRadioIndex]);
        }
    }

    playPrevPlayerItem() {
        if (this.playerMode === 'freq') {
            this.currentFreqIndex = (this.currentFreqIndex - 1 + this.freqKeys.length) % this.freqKeys.length;
            this.playFrequency(this.freqKeys[this.currentFreqIndex]);
        } else if (this.playerMode === 'radio') {
            this.currentRadioIndex = (this.currentRadioIndex - 1 + this.radioKeys.length) % this.radioKeys.length;
            this.playRadio(this.radioKeys[this.currentRadioIndex]);
        }
    }

    setPlayerVolume(value) {
        if (this.streamPlayer) this.streamPlayer.volume = value / 100;
        if (this.freqSynth) this.freqSynth.setVolume(value);
    }

    updateMusicPlayerUI() {
        const t = translations[currentLang];
        const isFreqPlaying = (this.playerMode === 'freq' && this.freqSynth && this.freqSynth.isPlaying);
        const isRadioPlaying = (this.playerMode === 'radio' && this.streamPlayer && !this.streamPlayer.paused);

        if (this.uiPlayerPlayPauseBtn) {
            this.uiPlayerPlayPauseBtn.innerHTML = isRadioPlaying ? '&#10074;&#10074;' : '&#9654;';
        }

        if (this.uiFreqPlayPauseBtn) {
            this.uiFreqPlayPauseBtn.innerHTML = isFreqPlaying ? '&#10074;&#10074;' : '&#9654;';
        }

        if (this.playerMode === 'freq' && this.currentFreqId && isFreqPlaying) {
            const freq = this.frequencies[this.currentFreqId];
            const cred = freq ? (freq.credit[currentLang] || freq.credit.en) : 'Frequency Playing';
            if (this.uiPlayerTrackCredit) this.uiPlayerTrackCredit.innerText = `${cred}`;
            if (this.uiFreqTrackCredit) this.uiFreqTrackCredit.innerText = `${cred}`;
        } else if (this.playerMode === 'radio' && this.currentRadioStation && isRadioPlaying) {
            const station = this.radioStations[this.currentRadioStation];
            const cred = station ? (station.credit[currentLang] || station.credit.en) : 'Live Radio';
            if (this.uiPlayerTrackCredit) this.uiPlayerTrackCredit.innerText = `${cred}`;
        } else {
            if (this.uiPlayerTrackCredit) this.uiPlayerTrackCredit.innerText = t.awaitingAudio;
            if (this.uiFreqTrackCredit) this.uiFreqTrackCredit.innerText = t.awaitingAudio;
        }
    }

    updatePlayerActiveUI() {
        document.querySelectorAll('#frequency-list li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('#radio-stations-list li').forEach(li => li.classList.remove('active'));

        if (this.playerMode === 'freq' && this.currentFreqId) {
            const activeLi = document.querySelector(`#frequency-list li[data-freq-id="${this.currentFreqId}"]`);
            if (activeLi) activeLi.classList.add('active');
        } else if (this.playerMode === 'radio' && this.currentRadioStation) {
            const activeLi = document.querySelector(`#radio-stations-list li[data-radio-station="${this.currentRadioStation}"]`);
            if (activeLi) activeLi.classList.add('active');
        }
    }

    setAmbienceVolume(soundId, value) {
        const audio = document.getElementById(`audio-${soundId}`);
        if (audio) audio.volume = value / 100;
    }

    togglePlayPause() {
        if (this.playerMode === 'freq' && this.freqSynth && this.freqSynth.isPlaying) {
            this.togglePlayerPlayPause();
        } else if (this.playerMode === 'radio' && this.streamPlayer && !this.streamPlayer.paused) {
            this.togglePlayerPlayPause();
        } else if (this.playlistPlayer && !this.playlistPlayer.paused) {
            this.togglePlaylistPlayPause();
        } else if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
            this.toggleLobbyPlayPause();
        } else {
            if (this.hasPlaylistStarted) {
                this.togglePlaylistPlayPause();
            } else if (this.hasLobbyStarted) {
                this.toggleLobbyPlayPause();
            } else if (this.currentRadioStation) {
                this.togglePlayerPlayPause();
            } else {
                this.togglePlaylistPlayPause();
            }
        }
    }

    playNextTrack() {
        if (this.playerMode === 'freq' && this.freqSynth && this.freqSynth.isPlaying) {
            this.playNextPlayerItem();
        } else if (this.playerMode === 'radio' && this.streamPlayer && !this.streamPlayer.paused) {
            this.playNextPlayerItem();
        } else if (this.playlistPlayer && !this.playlistPlayer.paused) {
            this.playNextPlaylistTrack();
        } else if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
            this.playNextLobbyTheme();
        } else if (this.hasPlaylistStarted) {
            this.playNextPlaylistTrack();
        } else if (this.hasLobbyStarted) {
            this.playNextLobbyTheme();
        } else {
            this.playNextPlaylistTrack();
        }
    }

    playPrevTrack() {
        if (this.playerMode === 'freq' && this.freqSynth && this.freqSynth.isPlaying) {
            this.playPrevPlayerItem();
        } else if (this.playerMode === 'radio' && this.streamPlayer && !this.streamPlayer.paused) {
            this.playPrevPlayerItem();
        } else if (this.playlistPlayer && !this.playlistPlayer.paused) {
            this.playPrevPlaylistTrack();
        } else if (this.lobbyPlayer && !this.lobbyPlayer.paused) {
            this.playPrevLobbyTheme();
        } else if (this.hasPlaylistStarted) {
            this.playPrevPlaylistTrack();
        } else if (this.hasLobbyStarted) {
            this.playPrevLobbyTheme();
        } else {
            this.playPrevPlaylistTrack();
        }
    }

    toggleMute() {
        if (this.lobbyPlayer) this.lobbyPlayer.muted = !this.lobbyPlayer.muted;
        if (this.playlistPlayer) this.playlistPlayer.muted = !this.playlistPlayer.muted;
        if (this.streamPlayer) this.streamPlayer.muted = !this.streamPlayer.muted;
    }

    setMusicVolume(value) {
        this.setPlaylistVolume(value);
    }

    toggleShuffle() {
        this.togglePlaylistShuffle();
    }
}

// ------------------------------------------
//  ÖZELLİK SINIFLARI
// ------------------------------------------

// -- 1. Pomodoro Zamanlayıcısı
class PomodoroManager {
    constructor() {
        this.workMinutes = 25;
        this.breakMinutes = 5;
        this.timeLeft = this.workMinutes * 60;
        this.isRunning = false;
        this.isBreak = false;
        this.session = 0;
        this.interval = null;
        this.isAlarming = false;
        this.audio = document.getElementById('audio-alarm');
        this.display = document.getElementById('pomo-display');
        this.sessionInfo = document.getElementById('pomo-session');
        this.btnPause = document.getElementById('btn-pomo-pause');
        this.initButtons();
        this.updateLanguage();
    }

    initButtons() {
        document.getElementById('btn-pomo-start')?.addEventListener('click', () => {
            this.stopAlarm();
            this.start();
        });
        this.btnPause?.addEventListener('click', () => {
            if (this.isAlarming) {
                this.stopAlarm();
                return;
            }
            this.pause();
        });
        document.getElementById('btn-pomo-reset')?.addEventListener('click', () => {
            this.stopAlarm();
            this.reset();
        });
        document.querySelectorAll('.pomo-preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.stopAlarm();
                const work = parseInt(e.currentTarget.dataset.work);
                const breakTime = parseInt(e.currentTarget.dataset.break);
                this.setMode(work, breakTime);
            });
        });
    }

    setMode(work, breakTime) {
        this.workMinutes = Math.max(1, parseInt(work) || 25);
        this.breakMinutes = Math.max(1, parseInt(breakTime) || 5);
        this.reset();
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.interval = setInterval(() => this.tick(), 1000);
    }

    pause() {
        this.isRunning = false;
        if (this.interval) clearInterval(this.interval);
    }

    reset() {
        this.pause();
        this.isBreak = false;
        this.timeLeft = this.workMinutes * 60;
        this.updateDisplay();
        this.updateLanguage();
    }

    triggerAlarm() {
        this.isAlarming = true;
        if (this.btnPause) {
            this.btnPause.classList.add('alarm-ringing');
        }
        setTabAlarmActive('pomodoro-view', true);
        if (this.audio) {
            this.audio.play().catch(e => console.log('Audio play error:', e));
        }
    }

    stopAlarm() {
        this.isAlarming = false;
        if (this.btnPause) {
            this.btnPause.classList.remove('alarm-ringing');
        }
        setTabAlarmActive('pomodoro-view', false);
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    tick() {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
            this.pause();
            this.triggerAlarm();

            if (!this.isBreak) {
                this.session++;
                const breakLen = (this.session % 4 === 0) ? 15 : this.breakMinutes;
                this.isBreak = true;
                this.timeLeft = breakLen * 60;
            } else {
                this.isBreak = false;
                this.timeLeft = this.workMinutes * 60;
            }
            this.updateLanguage();
        }
        this.updateDisplay();
    }

    updateLanguage() {
        const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;
        if (this.sessionInfo) {
            const sessionTxt = t ? t.pomoSession : (currentLang === 'tr' ? 'Oturum' : 'Session');
            this.sessionInfo.innerText = `${sessionTxt}: ${this.session}/4`;
            this.sessionInfo.style.color = '#00ff88';
        }
    }

    updateDisplay() {
        const m = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
        const s = (this.timeLeft % 60).toString().padStart(2, '0');
        if (this.display) this.display.innerText = `${m}:${s}`;
        const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;
        if (this.sessionInfo) {
            const sessionTxt = t ? t.pomoSession : (currentLang === 'tr' ? 'Oturum' : 'Session');
            this.sessionInfo.innerText = `${sessionTxt}: ${this.session}/4`;
            this.sessionInfo.style.color = '#00ff88';
        }
    }
}

// -- 2. To-Do Listesi Yöneticisi
class TodoManager {
    constructor() {
        this.list = JSON.parse(localStorage.getItem('atmos-todos') || '[]');
        this.initListeners();
        this.render();
    }

    initListeners() {
        const input = document.getElementById('todo-input');
        const addBtn = document.getElementById('btn-todo-add');
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.add();
        });
        addBtn?.addEventListener('click', () => this.add());
    }

    add() {
        const input = document.getElementById('todo-input');
        if (!input || !input.value.trim()) return;
        this.list.push({ text: input.value.trim(), done: false, id: Date.now() });
        input.value = '';
        this.save();
        this.render();
    }

    toggle(id) {
        const item = this.list.find(t => t.id === id);
        if (item) item.done = !item.done;
        this.save();
        this.render();
    }

    remove(id) {
        this.list = this.list.filter(t => t.id !== id);
        this.save();
        this.render();
    }

    save() {
        localStorage.setItem('atmos-todos', JSON.stringify(this.list));
    }

    render() {
        const ul = document.getElementById('todo-list');
        if (!ul) return;
        ul.innerHTML = this.list.map(t => `
            <li style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 6px;
                        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; 
                        ${t.done ? 'opacity: 0.4; text-decoration: line-through;' : ''}">
                <input type="checkbox" class="todo-check" data-id="${t.id}" ${t.done ? 'checked' : ''} 
                       style="accent-color: #00ff88; width: 16px; height: 16px; cursor: pointer;">
                <span style="flex: 1; font-size: 13px;">${t.text}</span>
                <button class="todo-remove-btn" data-id="${t.id}" 
                        style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 15px;">✕</button>
            </li>
        `).join('');

        ul.querySelectorAll('.todo-check').forEach(chk => {
            chk.addEventListener('change', (e) => this.toggle(parseInt(e.target.dataset.id)));
        });
        ul.querySelectorAll('.todo-remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.remove(parseInt(e.currentTarget.dataset.id)));
        });
    }
}

// -- 3. Görsel / GIF Yükleme Yöneticisi
function handleVisualUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (window.theme) {
        window.theme.isCustomVisual = true;
        window.theme.stopSlideshow();
    }

    const fileReader = new FileReader();
    if (file.type.startsWith('video/')) {
        fileReader.onload = (event) => {
            const videoDataUrl = event.target.result;
            const bgVideo = document.getElementById('bg-video');
            if (bgVideo) {
                bgVideo.style.display = 'block';
                bgVideo.style.opacity = '1';
                let source = bgVideo.querySelector('source');
                if (!source) {
                    source = document.createElement('source');
                    bgVideo.appendChild(source);
                }
                source.src = videoDataUrl;
                bgVideo.src = videoDataUrl;
                bgVideo.load();
                bgVideo.play().then(() => {
                    bgVideo.classList.add('visible');
                    document.body.classList.add('video-active');
                }).catch(() => {});
            }
        };
        fileReader.readAsDataURL(file);
    } else {
        fileReader.onload = (event) => {
            const imageDataUrl = event.target.result;
            const bgVideo = document.getElementById('bg-video');
            if (bgVideo) {
                bgVideo.pause();
                bgVideo.removeAttribute('src');
                bgVideo.style.display = 'none';
                bgVideo.style.opacity = '0';
                bgVideo.classList.remove('visible');
                document.body.classList.remove('video-active');
            }
            document.body.style.backgroundImage = `url('${imageDataUrl}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundColor = '#000';
        };
        fileReader.readAsDataURL(file);
    }
}

function applyVisualUrl() {
    const input = document.getElementById('visual-url');
    if (!input || !input.value.trim()) return;
    let url = input.value.trim().replace(/^['"]+|['"]+$/g, '');

    // 1. Google Görseller arama linki tespiti ve asıl görsel linkini ayıklama
    if (url.includes('google.') && url.includes('imgurl=')) {
        try {
            const u = new URL(url);
            const imgurl = u.searchParams.get('imgurl');
            if (imgurl) url = decodeURIComponent(imgurl);
        } catch (e) {}
    }

    // 2. Giphy web sayfası bağlantısı tespiti (örn: giphy.com/gifs/dance-happy-l0MYt5jPR6QX5pnqM veya /gifs/l0MYt5jPR6QX5pnqM)
    const giphyMatch = url.match(/giphy\.com\/gifs\/(?:.*-)?([a-zA-Z0-9]+)$/i);
    if (giphyMatch && giphyMatch[1]) {
        url = `https://i.giphy.com/media/${giphyMatch[1]}/giphy.gif`;
    }

    // 3. Imgur sayfa linki tespiti (uzantısız linkleri doğrudan resme çevir)
    const imgurMatch = url.match(/^https?:\/\/(?:i\.)?imgur\.com\/([a-zA-Z0-9]+)(?:\.[a-zA-Z0-9]+)?$/i);
    if (imgurMatch && imgurMatch[1] && !url.includes('.')) {
        url = `https://i.imgur.com/${imgurMatch[1]}.gif`;
    }

    // 4. Tenor Sayfa Linki Kontrolü
    if (url.includes('tenor.com') && !url.includes('.gif') && !url.includes('.mp4')) {
        const msg = currentLang === 'tr'
            ? "Tenor sayfa bağlantısı yerine lütfen GIF üzerine sağ tıklayıp 'Resim adresini kopyala' seçeneğini kullanarak doğrudan .gif bağlantısını yapıştırın."
            : "Instead of Tenor page link, please right click the GIF and choose 'Copy Image Address' to paste the direct .gif link.";
        alert(msg);
        return;
    }

    // 5. Pinterest Pin Sayfa Linki Kontrolü (pinterest.com/pin/ veya pin.it/)
    if ((url.includes('pinterest.com') || url.includes('pin.it')) && !url.includes('pinimg.com')) {
        const msg = currentLang === 'tr' 
            ? "Pinterest sayfa bağlantısı yerine, görselin üzerine SAĞ TIKLAYIP 'Resim adresini kopyala' seçeneğini seçin ve doğrudan resim linkini (.jpg / .gif / .png) buraya yapıştırın!"
            : "Instead of the Pinterest page URL, RIGHT CLICK the image, choose 'Copy Image Address', and paste the direct image link (.jpg / .gif / .png) here!";
        alert(msg);
        return;
    }

    // Özel görsel modunu aç ve slaytı/videoyu dondur
    if (window.theme) {
        window.theme.isCustomVisual = true;
        window.theme.stopSlideshow();
    }

    const bgVideo = document.getElementById('bg-video');

    if (url.match(/\.(mp4|webm|ogg)$/i) || url.includes('video')) {
        if (bgVideo) {
            bgVideo.style.display = 'block';
            bgVideo.style.opacity = '1';
            let source = bgVideo.querySelector('source');
            if (!source) {
                source = document.createElement('source');
                bgVideo.appendChild(source);
            }
            source.src = url;
            bgVideo.src = url;
            bgVideo.load();
            bgVideo.play().then(() => {
                bgVideo.classList.add('visible');
                document.body.classList.add('video-active');
            }).catch(() => {
                const msg = currentLang === 'tr' ? "Video oynatılamadı. Lütfen geçerli bir MP4 bağlantısı girin." : "Video could not be played. Please enter a valid MP4 URL.";
                alert(msg);
            });
        }
    } else {
        if (bgVideo) {
            bgVideo.pause();
            bgVideo.removeAttribute('src');
            bgVideo.style.display = 'none';
            bgVideo.style.opacity = '0';
            bgVideo.classList.remove('visible');
            document.body.classList.remove('video-active');
        }
        document.body.style.backgroundImage = `url('${url}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundColor = '#000';

        // Preload testi (hatayı sessizce yakalar ve konsola yazar)
        const testImg = new Image();
        testImg.onerror = () => {
            console.warn("Özel görsel linki yüklenemedi veya CORS/hotlink engellendi:", url);
        };
        testImg.src = url;
    }
}

function resetToThemeVisual() {
    if (window.theme) {
        window.theme.isCustomVisual = false;
        const bgVideo = document.getElementById('bg-video');
        if (bgVideo) {
            bgVideo.style.display = 'block';
            bgVideo.style.opacity = '1';
        }
        window.theme.updateBackground();
        window.theme.loadCurrentVideo();
        window.theme.startSlideshow();
        window.theme.updateSceneCardsUI();
    }
}

// -- 4. Spotify / YouTube Embed Yöneticisi
function loadEmbed() {
    const input = document.getElementById('embed-url');
    const container = document.getElementById('embed-container');
    if (!input || !container) return;
    const url = input.value.trim();

    if (!url) return;

    if (url.includes('spotify.com')) {
        let embedUrl = url;
        if (!url.includes('/embed/')) {
            embedUrl = url.replace('open.spotify.com/', 'open.spotify.com/embed/');
        }
        container.innerHTML = `<iframe src="${embedUrl}" width="100%" height="152" 
            frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy" style="border-radius: 12px; display: block; border: 1px solid rgba(255,255,255,0.15);"></iframe>`;
    } else if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('music.youtube.com')) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|live\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;

        if (videoId) {
            container.innerHTML = `
                <iframe width="100%" height="200" 
                    src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen style="border-radius: 12px; display: block; border: 1px solid rgba(255,255,255,0.15);"></iframe>
                <p style="font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 6px; text-align: center;">
                    ${currentLang === 'tr' ? 'Bazı YouTube videoları kanal sahibi tarafından gömmeye kapatılmış olabilir (Hata 150/153).' : '⚠️ Some YouTube videos may have embedding disabled by the owner (Error 150/153).'}
                </p>
            `;
        } else {
            alert(currentLang === 'tr' ? "Geçerli bir YouTube video bağlantısı bulunamadı." : "Valid YouTube video URL not found.");
        }
    } else {
        alert(currentLang === 'tr' ? "Lütfen geçerli bir Spotify veya YouTube bağlantısı girin." : "Please enter a valid Spotify or YouTube URL.");
    }
}

// ------------------------------------------
//  OPEN-WORLD HARİTA YÖNETİCİSİ (MAP MANAGER)
// ------------------------------------------
class MapManager {
    constructor() {
        this.screen = document.getElementById('map-screen');
        this.card = document.getElementById('building-card');
        this.cardTag = document.getElementById('card-tag');
        this.cardTitle = document.getElementById('card-title');
        this.cardDesc = document.getElementById('card-desc');
        this.btnReturn = document.getElementById('btn-return-map');
        this.btnMapLang = document.getElementById('btn-map-lang');
        this.btnMapFs = document.getElementById('btn-map-fullscreen');
        this.mapVideo = document.getElementById('map-video');

        this.districts = {
            'cowboy-era': {
                tag: 'COWBOY ERA',
                title: { en: 'Wild West Saloon', tr: 'Vahşi Batı Salon' }
            },
            'jazz-romance': {
                tag: 'JAZZ & DINE',
                title: { en: 'New York Velvet Jazz', tr: 'New York Kadife Caz' }
            },
            'rock-n-roll': {
                tag: "ROCK N' ROLL",
                title: { en: 'Children of Democracy Motor Club', tr: 'Demokrasinin Çocukları Motor Kulübü' }
            },
            'dark-fantasy': {
                tag: 'DARK FANTASY',
                title: { en: 'Cursed Cathedral', tr: 'Lanetli Katedral' }
            },
            'light-fantasy': {
                tag: 'LIGHT FANTASY',
                title: { en: "Dragon's Sanctuary", tr: 'Ejderhanın Sığınağı' }
            },
            'cyber-world': {
                tag: 'CYBER WORLD',
                title: { en: 'Cyberpunk Skyscraper', tr: 'Cyberpunk Gökdelen' }
            },
            'the-pasific-crest': {
                tag: 'THE PACIFIC CREST',
                title: { en: 'Welcome to Oregon', tr: "Oregon'a Hoşgeldiniz" }
            },
            'milky-way': {
                tag: 'MILKY WAY',
                title: { en: 'Kawaii Space', tr: 'Tatlış Uzay' }
            }
        };
        this.districts['welcome-to-oregon'] = this.districts['the-pasific-crest'];
        this.districts['kawaii-space'] = this.districts['milky-way'];

        // Konsol D-Pad / Tuş Gezintisi Sırası (Mekansal Harita Sıralaması: Üst Sıra 0-3, Alt Sıra 4-7)
        this.buildingKeys = [
            'cowboy-era',        // 0: Sol üst
            'jazz-romance',      // 1: Orta-sol üst
            'rock-n-roll',       // 2: Orta-sağ üst
            'dark-fantasy',      // 3: Sağ üst
            'the-pasific-crest', // 4: Sol alt
            'light-fantasy',     // 5: Orta alt
            'milky-way',      // 6: Orta-sağ alt
            'cyber-world'        // 7: Sağ alt
        ];

        // Kullanıcı Tarafından Belirlenen Kesintisiz Yatay Gezinti Sırası (Sol -> Sağ)
        // Sıra: cowboy -> oregon -> jazz -> light -> space -> rock -> dark -> cyber
        this.horizontalOrder = [
            'cowboy-era',
            'the-pasific-crest',
            'jazz-romance',
            'light-fantasy',
            'milky-way',
            'rock-n-roll',
            'dark-fantasy',
            'cyber-world'
        ];

        // Kullanıcı Tarafından Belirlenen Kesintisiz Dikey Gezinti Sırası (Üst -> Alt)
        // Sıra: dark -> rock -> jazz -> space -> cowboy -> oregon -> light -> cyber
        this.verticalOrder = [
            'dark-fantasy',
            'rock-n-roll',
            'jazz-romance',
            'milky-way',
            'cowboy-era',
            'the-pasific-crest',
            'light-fantasy',
            'cyber-world'
        ];

        this.lastDpadDirection = null;

        // Her Temanın Kendine Has Özel HUD ve Aura Renk Paleti (Dinamik Bina Renklendirmesi)
        this.themeColors = {
            'light-fantasy': {
                color: '#ffffff',
                glow: 'rgba(255, 255, 255, 0.75)',
                bg: 'rgba(255, 255, 255, 0.16)'
            },
            'jazz-romance': {
                color: '#ff2255',
                glow: 'rgba(255, 34, 85, 0.75)',
                bg: 'rgba(255, 34, 85, 0.18)'
            },
            'milky-way': {
                color: '#00d0ff',
                glow: 'rgba(0, 208, 255, 0.75)',
                bg: 'rgba(0, 208, 255, 0.18)'
            },
            'cyber-world': {
                color: '#ff2a8d', // Canlı Neon Pembe (Cyber Pink)
                glow: 'rgba(255, 42, 141, 0.75)',
                bg: 'rgba(255, 42, 141, 0.18)'
            },
            'cowboy-era': {
                color: '#ffaa00',
                glow: 'rgba(255, 170, 0, 0.75)',
                bg: 'rgba(255, 170, 0, 0.18)'
            },
            'rock-n-roll': {
                color: '#ff4400',
                glow: 'rgba(255, 68, 0, 0.75)',
                bg: 'rgba(255, 68, 0, 0.18)'
            },
            'dark-fantasy': {
                color: '#b066ff',
                glow: 'rgba(176, 102, 255, 0.75)',
                bg: 'rgba(176, 102, 255, 0.18)'
            },
            'the-pasific-crest': {
                color: '#10b981',
                glow: 'rgba(16, 185, 129, 0.75)',
                bg: 'rgba(16, 185, 129, 0.18)'
            }
        };
        this.themeColors['welcome-to-oregon'] = this.themeColors['the-pasific-crest'];
        this.themeColors['kawaii-space'] = this.themeColors['milky-way'];
        this.selectedBuildingIndex = -1;
        this.selectedTheme = null;
        this.isOpen = true;
        this.audioCtx = null;

        this.updateLanguage();
        this.init();
    }

    // ------------------------------------------
    //  WEB AUDIO API: DOKUNMATİK TIK SESİ (TACTILE CLICK SOUND)
    // ------------------------------------------
    getAudioContext() {
        if (!this.audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.audioCtx = new AudioContextClass();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume().catch(() => {});
        }
        return this.audioCtx;
    }

    setupAudioInit() {
        const unlock = () => {
            this.getAudioContext();
            window.removeEventListener('click', unlock);
            window.removeEventListener('keydown', unlock);
            window.removeEventListener('touchstart', unlock);
        };
        window.addEventListener('click', unlock, { once: true });
        window.addEventListener('keydown', unlock, { once: true });
        window.addEventListener('touchstart', unlock, { once: true });
    }

    playClickSound(freq = 440) {
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.45, ctx.currentTime + 0.08);

            gain.gain.setValueAtTime(0.14, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.09);
        } catch (e) {}
    }

    // ------------------------------------------
    //  JOYSTICK: MOUSE İMLECİNİ TAKİP EDEN DAİRELER
    // ------------------------------------------
    setupJoystickTracking() {
        const leftStick = document.getElementById('left-stick');
        const rightStick = document.getElementById('right-stick');
        const sticks = [leftStick, rightStick].filter(Boolean);
        if (sticks.length === 0) return;

        const updateStickPositions = (clientX, clientY) => {
            // Sadece harita görünürken imleci takip et
            if (!this.isOpen || (this.screen && this.screen.classList.contains('map-hidden'))) return;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const normX = Math.max(-1, Math.min(1, (clientX - centerX) / (centerX || 1)));
            const normY = Math.max(-1, Math.min(1, (clientY - centerY) / (centerY || 1)));

            const maxDeflection = 6.5;
            const dx = normX * maxDeflection;
            const dy = normY * maxDeflection;

            // Mobilde harita dikey modda 90 derece saat yönünde döndürülür (#map-screen rotate(90deg))
            // Bu dönüşümü dengelemek için vektörü ters yönde 90 derece döndürürüz:
            // tx = dy, ty = -dx
            const isRotated90 = window.matchMedia && window.matchMedia('(max-width: 1024px) and (orientation: portrait)').matches;

            const tx = isRotated90 ? dy : dx;
            const ty = isRotated90 ? -dx : dy;

            sticks.forEach(stick => {
                stick.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px)`;
            });
        };

        window.addEventListener('mousemove', (e) => {
            updateStickPositions(e.clientX, e.clientY);
        }, { passive: true });

        window.addEventListener('pointermove', (e) => {
            if (e.pointerType === 'touch' || e.pointerType === 'pen') {
                updateStickPositions(e.clientX, e.clientY);
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches.length > 0) {
                updateStickPositions(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        window.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                updateStickPositions(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        sticks.forEach(stick => {
            stick.addEventListener('click', (e) => {
                e.stopPropagation();
                this.playClickSound(380);
                stick.classList.add('stick-pressed');
                setTimeout(() => stick.classList.remove('stick-pressed'), 120);
            });
        });
    }

    isMobilePhone() {
        // Eğer cihazda fare veya hassas işaretçi (mouse/trackpad) varsa KESİNLİKLE PC'dir
        if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
            return false;
        }
        // Fare yoksa gerçek mobil cihaz tespiti
        const isMobileUA = /Android|iPhone|iPod|Mobile|IEMobile/i.test(navigator.userAgent || '');
        const isCoarseOnly = window.matchMedia && window.matchMedia('(pointer: coarse) and (hover: none)').matches;
        return isMobileUA || isCoarseOnly;
    }

    // ------------------------------------------
    //  KONSOL BUTONLARI: D-PAD, ABXY VE HOME İŞLEVLERİ
    // ------------------------------------------
    setupJoyconConsole() {
        // 1. Home Butonu: İlk sayfaya dön
        const homeBtn = document.getElementById('btn-map-home') || document.querySelector('.joycon-home-btn');
        if (homeBtn) {
            homeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.pulseButton(homeBtn);
                this.returnToHome();
            });
        }

        // 2. Minus (-) Butonu
        const minusBtn = document.querySelector('.joycon-minus-btn');
        if (minusBtn) {
            minusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.playClickSound(400);
            });
        }

        // 3. D-Pad Tuşları (▲ ◀ ▶ ▼)
        const dpadButtons = document.querySelectorAll('.joycon-dpad .joycon-round-btn');
        dpadButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Sadece gerçek mobil dokunmatik telefonlarda kısıtlansın; PC'de her zaman çalışsın
                if (this.isMobilePhone()) return;
                const key = btn.dataset.key || (btn.classList.contains('dpad-up') ? 'up' : btn.classList.contains('dpad-down') ? 'down' : btn.classList.contains('dpad-left') ? 'left' : 'right');
                this.pulseButton(btn);
                this.navigateDpad(key);
            });
        });

        // 4. ABXY Tuşları (X, Y, A, B)
        const abxyButtons = document.querySelectorAll('.joycon-abxy .joycon-round-btn');
        abxyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Sadece gerçek mobil dokunmatik telefonlarda kısıtlansın; PC'de her zaman çalışsın
                if (this.isMobilePhone()) return;
                const b = btn.dataset.btn || (btn.classList.contains('abxy-a') ? 'a' : btn.classList.contains('abxy-b') ? 'b' : btn.classList.contains('abxy-x') ? 'x' : 'y');
                this.pulseButton(btn);
                if (b === 'a') this.handleButtonA();
                else if (b === 'b') this.handleButtonB();
                else if (b === 'x') this.handleButtonX();
                else if (b === 'y') this.handleButtonY();
            });
        });

        // 5. Klavye Kısayolları (Ok tuşları + Enter/A, Esc/B, X, Y, H)
        window.addEventListener('keydown', (e) => {
            if (!this.isOpen || (this.screen && this.screen.classList.contains('map-hidden'))) return;
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

            if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.dpad-right'));
                this.navigateDpad('right');
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.dpad-left'));
                this.navigateDpad('left');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.dpad-down'));
                this.navigateDpad('down');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.dpad-up'));
                this.navigateDpad('up');
            } else if (e.key === 'Enter' || e.key === 'a' || e.key === 'A') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.abxy-a'));
                this.handleButtonA();
            } else if (e.key === 'Escape' || e.key === 'b' || e.key === 'B') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.abxy-b'));
                this.handleButtonB();
            } else if (e.key === 'x' || e.key === 'X') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.abxy-x'));
                this.handleButtonX();
            } else if (e.key === 'y' || e.key === 'Y') {
                e.preventDefault();
                this.pulseButton(document.querySelector('.abxy-y'));
                this.handleButtonY();
            } else if (e.key === 'h' || e.key === 'H') {
                e.preventDefault();
                this.pulseButton(document.getElementById('btn-map-home') || document.querySelector('.joycon-home-btn'));
                this.returnToHome();
            }
        });
    }

    pulseButton(btnEl) {
        if (!btnEl) return;
        btnEl.classList.add('btn-pressed');
        setTimeout(() => btnEl.classList.remove('btn-pressed'), 140);
    }

    getAllHotspotsData() {
        const spots = Array.from(document.querySelectorAll('.building-hotspot[data-theme]'));
        if (!spots.length) return [];

        const firstRect = spots[0].getBoundingClientRect();
        const isRendered = firstRect.width > 0;

        return spots.map(spot => {
            const theme = spot.dataset.theme;
            let cx = 0;
            let cy = 0;
            if (isRendered) {
                const r = spot.getBoundingClientRect();
                cx = r.left + r.width / 2;
                cy = r.top + r.height / 2;
            } else {
                const left = parseFloat(spot.style.left) || 0;
                const top = parseFloat(spot.style.top) || 0;
                const w = parseFloat(spot.style.width) || 0;
                const h = parseFloat(spot.style.height) || 0;
                cx = left + w / 2;
                cy = top + h / 2;
            }
            return { theme, spot, cx, cy, isRendered };
        });
    }

    navigateDpad(direction) {
        this.playClickSound(460);
        const spots = this.getAllHotspotsData();
        if (!spots.length) return;

        let targetTheme = null;

        // 1. Durum: Henüz hiçbir bina seçili değilse ilk basışta kullanıcının belirlediği sıranın başı/sonu seçilsin:
        //    Sağ -> En soldan başla: cowboy-era
        //    Sol -> En sağdan başla: cyber-world
        //    Aşağı -> En üstten başla: dark-fantasy
        //    Yukarı -> En alttan başla: cyber-world
        if (!this.selectedTheme) {
            if (direction === 'right') targetTheme = this.horizontalOrder[0];
            else if (direction === 'left') targetTheme = this.horizontalOrder[this.horizontalOrder.length - 1];
            else if (direction === 'down') targetTheme = this.verticalOrder[0];
            else if (direction === 'up') targetTheme = this.verticalOrder[this.verticalOrder.length - 1];

            if (targetTheme) {
                this.lastDpadDirection = direction;
                this.selectBuildingByTheme(targetTheme);
            }
            return;
        }

        // 2. Durum: Bir bina zaten seçiliyse
        const isSameDirection = (this.lastDpadDirection === direction);

        if (isSameDirection) {
            // "Hep aynı tuşa basılsa amaç bu olmalı": Belirlenen eksenel listeyi kesintisiz takip et
            if (direction === 'right') {
                const idx = this.horizontalOrder.indexOf(this.selectedTheme);
                const nextIdx = (idx + 1) % this.horizontalOrder.length;
                targetTheme = this.horizontalOrder[nextIdx];
            } else if (direction === 'left') {
                const idx = this.horizontalOrder.indexOf(this.selectedTheme);
                const nextIdx = (idx - 1 + this.horizontalOrder.length) % this.horizontalOrder.length;
                targetTheme = this.horizontalOrder[nextIdx];
            } else if (direction === 'down') {
                const idx = this.verticalOrder.indexOf(this.selectedTheme);
                const nextIdx = (idx + 1) % this.verticalOrder.length;
                targetTheme = this.verticalOrder[nextIdx];
            } else if (direction === 'up') {
                const idx = this.verticalOrder.indexOf(this.selectedTheme);
                const nextIdx = (idx - 1 + this.verticalOrder.length) % this.verticalOrder.length;
                targetTheme = this.verticalOrder[nextIdx];
            }
        } else {
            // "Dinamikleştirip bu tuşları karma kullanıldığı zaman": Basılan yöndeki en yakın komşuya git
            const curr = spots.find(s => s.theme === this.selectedTheme);
            if (!curr) {
                this.selectBuildingByTheme(spots[0].theme);
                this.lastDpadDirection = direction;
                return;
            }

            const others = spots.filter(s => s.theme !== this.selectedTheme);
            const isRendered = spots[0].isRendered;
            const thresh = isRendered ? Math.min(window.innerWidth, window.innerHeight) * 0.015 : 1.5;
            const candidates = [];

            others.forEach(t => {
                const dx = t.cx - curr.cx;
                const dy = t.cy - curr.cy;

                // Yön doğrulaması ve açı konisi (istenmeyen yana kaymaları önlemek için)
                if (direction === 'up' && dy < -thresh && Math.abs(dy) >= Math.abs(dx) * 0.25) {
                    candidates.push({ theme: t.theme, score: Math.abs(dy) + Math.abs(dx) * 1.5 });
                } else if (direction === 'down' && dy > thresh && Math.abs(dy) >= Math.abs(dx) * 0.25) {
                    candidates.push({ theme: t.theme, score: Math.abs(dy) + Math.abs(dx) * 1.5 });
                } else if (direction === 'left' && dx < -thresh && Math.abs(dx) >= Math.abs(dy) * 0.25) {
                    candidates.push({ theme: t.theme, score: Math.abs(dx) + Math.abs(dy) * 1.5 });
                } else if (direction === 'right' && dx > thresh && Math.abs(dx) >= Math.abs(dy) * 0.25) {
                    candidates.push({ theme: t.theme, score: Math.abs(dx) + Math.abs(dy) * 1.5 });
                }
            });

            if (candidates.length > 0) {
                candidates.sort((a, b) => a.score - b.score);
                targetTheme = candidates[0].theme;
            } else {
                // Sınıra ulaşıldıysa karşı sınıra döngüsel (wrap-around) geçiş
                if (direction === 'right') targetTheme = this.horizontalOrder[0];
                else if (direction === 'left') targetTheme = this.horizontalOrder[this.horizontalOrder.length - 1];
                else if (direction === 'down') targetTheme = this.verticalOrder[0];
                else if (direction === 'up') targetTheme = this.verticalOrder[this.verticalOrder.length - 1];
            }
        }

        if (targetTheme) {
            this.lastDpadDirection = direction;
            this.selectBuildingByTheme(targetTheme);
        }
    }

    selectBuildingByTheme(themeKey) {
        if (!themeKey) return;
        this.selectedTheme = themeKey;
        this.selectedBuildingIndex = this.buildingKeys.indexOf(themeKey);

        const hotspots = document.querySelectorAll('.building-hotspot');
        let targetSpot = null;
        hotspots.forEach(spot => {
            if (spot.dataset.theme === themeKey) {
                spot.classList.add('selected-hotspot');
                targetSpot = spot;
            } else {
                spot.classList.remove('selected-hotspot');
            }
        });

        if (targetSpot) {
            const rect = targetSpot.getBoundingClientRect();
            const fakeEvent = {
                clientX: rect.left + rect.width / 2,
                clientY: rect.top + rect.height / 2
            };
            this.showCard(themeKey, fakeEvent, false);
        }
    }

    selectBuildingByIndex(index) {
        if (index < 0 || index >= this.buildingKeys.length) index = 0;
        this.selectBuildingByTheme(this.buildingKeys[index]);
    }

    handleButtonA() {
        this.playClickSound(540);
        if (this.selectedTheme) {
            const targetSpot = document.querySelector(`.building-hotspot[data-theme="${this.selectedTheme}"]`);
            if (targetSpot) targetSpot.classList.add('entering');
            this.enterDistrict(this.selectedTheme);
        } else {
            this.selectBuildingByIndex(0);
        }
    }

    handleButtonB() {
        this.playClickSound(340);
        // Lobi müziği çalıyorsa durdur
        if (window.audioManager && typeof window.audioManager.stopThemePreview === 'function') {
            window.audioManager.stopThemePreview();
        }
        // Seçimi ve bilgi kartını sıfırla/kapat (Haritadan çıkış yapmaz)
        this.selectedTheme = null;
        this.selectedBuildingIndex = -1;
        this.lastDpadDirection = null;
        this.hideCard();
        document.querySelectorAll('.building-hotspot').forEach(s => s.classList.remove('selected-hotspot', 'entering'));
    }

    handleButtonX() {
        this.playClickSound(620);
        const randIdx = Math.floor(Math.random() * this.buildingKeys.length);
        this.selectBuildingByIndex(randIdx);
    }

    handleButtonY() {
        this.playClickSound(480);
        if (!this.selectedTheme) {
            this.selectBuildingByIndex(0);
        }
        if (this.selectedTheme && window.audioManager && typeof window.audioManager.playThemePreview === 'function') {
            window.audioManager.playThemePreview(this.selectedTheme);
        }
    }

    returnToHome() {
        this.playClickSound(360);
        if (window.audioManager && typeof window.audioManager.stopThemePreview === 'function') {
            window.audioManager.stopThemePreview();
        }
        this.selectedTheme = null;
        this.selectedBuildingIndex = -1;
        this.lastDpadDirection = null;
        this.hideCard();
        document.querySelectorAll('.building-hotspot').forEach(s => s.classList.remove('selected-hotspot', 'entering'));

        if (this.mapVideo && !this.mapVideo.paused) {
            this.mapVideo.pause();
        }

        // 1. Sayfaya dönüş: Harita kapatılır, ilk sayfa dikey olarak görünür
        if (this.screen) {
            this.screen.classList.add('map-hidden');
        }

        if (window.extensionManager && window.extensionManager.screen) {
            window.extensionManager.screen.classList.remove('ext-hidden');
        }

        this.isOpen = false;
    }

    init() {
        this.selectedTheme = null;
        this.setupAudioInit();
        this.setupJoystickTracking();
        this.setupJoyconConsole();

        const hotspots = document.querySelectorAll('.building-hotspot');

        hotspots.forEach(spot => {
            const themeKey = spot.dataset.theme;

            spot.addEventListener('mouseenter', (e) => {
                // Sadece mouse ile gezinen masaüstü bilgisayarlarda hover kartı göster
                if (!('ontouchstart' in window) && window.innerWidth > 950) {
                    this.showCard(themeKey, e);
                }
            });

            spot.addEventListener('mousemove', (e) => {
                if (!('ontouchstart' in window) && window.innerWidth > 950) {
                    this.positionCard(e);
                }
            });

            spot.addEventListener('mouseleave', () => {
                if (!('ontouchstart' in window) && window.innerWidth > 950) {
                    this.hideCard();
                }
            });

            spot.addEventListener('click', (e) => {
                e.stopPropagation();
                this.playClickSound(480);
                const isTouchDevice = ('ontouchstart' in window) || window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 950;

                if (isTouchDevice) {
                    // Mobilde ilk tıklamada isim ve kartı göster, ikincisinde binaya gir
                    if (this.selectedTheme !== themeKey) {
                        this.selectedTheme = themeKey;
                        this.lastDpadDirection = null;
                        hotspots.forEach(s => s.classList.remove('selected-hotspot'));
                        spot.classList.add('selected-hotspot');
                        this.showCard(themeKey, e, true);
                    } else {
                        // Aynı binaya 2. tıklama -> Seç ve içeri gir!
                        this.selectedTheme = null;
                        this.lastDpadDirection = null;
                        hotspots.forEach(s => s.classList.remove('selected-hotspot'));
                        spot.classList.add('entering');
                        this.enterDistrict(themeKey);
                    }
                } else {
                    // Masaüstü PC: Direkt tıkla ve gir
                    spot.classList.add('entering');
                    this.enterDistrict(themeKey);
                }
            });
        });

        // Haritada boş bir alana dokunulduğunda kartı ve bina seçimini temizle
        if (this.screen) {
            this.screen.addEventListener('click', (e) => {
                if (!e.target.closest('.building-hotspot') && !e.target.closest('.map-flank')) {
                    this.selectedTheme = null;
                    this.selectedBuildingIndex = -1;
                    this.lastDpadDirection = null;
                    this.hideCard();
                    document.querySelectorAll('.building-hotspot').forEach(s => s.classList.remove('selected-hotspot'));
                }
            });
        }

        // Haritaya dönüş butonu
        this.btnReturn?.addEventListener('click', () => {
            this.playClickSound(420);
            this.openMap();
        });

        // Harita içi Dil ve Tam Ekran butonları
        this.btnMapLang?.addEventListener('click', () => {
            this.playClickSound(440);
            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            try {
                localStorage.setItem('atmos-user-lang', currentLang);
            } catch (e) {}
            document.documentElement.lang = currentLang;
            applyTranslations();
            if (typeof this.updateLanguage === 'function') {
                this.updateLanguage();
            }
        });
        this.btnMapFs?.addEventListener('click', () => {
            this.playClickSound(440);
        });

        // Bilgilendirme kartına tıklanınca doğrudan binaya gir (özellikle mobilde çok pratik)
        this.card?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.selectedTheme) {
                this.enterDistrict(this.selectedTheme);
            }
        });
    }

    showCard(themeKey, e, isTouch = false) {
        let normalized = normalizeTheme(themeKey);
        const data = this.districts[normalized];
        if (!data || !this.card) return;

        // Dinamik Tema Renk Paletini Sadece Bilgilendirme Kartına Uygula (Örn: light beyaz, jazz kırmızı, space mavi, cyber pembe)
        const colors = this.themeColors[normalized] || {
            color: '#00ff88',
            glow: 'rgba(0, 255, 136, 0.4)',
            bg: 'rgba(0, 255, 136, 0.15)'
        };
        this.card.style.setProperty('--theme-hud-color', colors.color);
        this.card.style.setProperty('--theme-hud-glow', colors.glow);
        this.card.style.setProperty('--theme-hud-bg', colors.bg);

        if (this.cardTag) this.cardTag.innerText = data.tag || 'DRUNKEN SEMAPHORE';
        if (this.cardTitle) this.cardTitle.innerText = (data.title && data.title[currentLang]) ? data.title[currentLang] : data.title.en;
        const badge = this.card.querySelector('.building-hud-badge');
        if (badge) badge.innerText = currentLang === 'tr' ? 'KEŞFET' : 'EXPLORE';

        const hudPrompt = this.card.querySelector('.building-hud-prompt');
        if (hudPrompt) {
            const promptText = isTouch
                ? (currentLang === 'tr' ? 'Giriş İçin Dokun' : 'Tap to Enter')
                : (currentLang === 'tr' ? 'Giriş Yap' : 'Enter');
            hudPrompt.innerHTML = `<span class="hud-key-pill">A</span> <span class="txt-hud-enter">${promptText}</span>`;
        }
        if (this.cardDesc) {
            this.cardDesc.innerText = '';
            this.cardDesc.style.display = 'none';
        }

        this.positionCard(e, isTouch);
        this.card.classList.add('visible');
    }

    positionCard(e, isTouch = false) {
        if (!this.card) return;
        const isMobile = window.innerWidth <= 1024 || window.innerHeight <= 600 || ('ontouchstart' in window);

        if (isMobile) {
            // Mobilde kart haritanın alt-orta kısmında şık, kompakt bir HUD olarak dursun
            // Ekranı asla kaplamaz ve basılan binanın üstünü örtmez!
            this.card.style.left = '50%';
            this.card.style.top = 'auto';
            this.card.style.bottom = '16px';
            this.card.style.transform = 'translateX(-50%)';
            return;
        }

        const cardWidth = 250;
        const cardHeight = this.card.offsetHeight || 90;

        let x = 16;
        let y = 16;

        if (e && typeof e.clientX === 'number') {
            x = e.clientX + 16;
            y = e.clientY + 16;

            if (x + cardWidth > window.innerWidth - 16) {
                x = e.clientX - cardWidth - 16;
            }
            if (y + cardHeight > window.innerHeight - 16) {
                y = e.clientY - cardHeight - 16;
            }
            if (y < 16) y = 16;
            if (x < 16) x = 16;
        }

        this.card.style.transform = 'none';
        this.card.style.bottom = 'auto';
        this.card.style.left = `${x}px`;
        this.card.style.top = `${y}px`;
    }

    hideCard() {
        if (this.card) this.card.classList.remove('visible');
    }

    enterDistrict(themeName) {
        let normalized = normalizeTheme(themeName);

        this.playClickSound(560);
        if (window.audioManager && typeof window.audioManager.stopThemePreview === 'function') {
            window.audioManager.stopThemePreview();
        }
        this.selectedTheme = null;
        this.selectedBuildingIndex = -1;
        this.hideCard();
        document.querySelectorAll('.building-hotspot').forEach(s => s.classList.remove('selected-hotspot'));

        // Temayı ve videoyu doğrudan tek seferde aktifleştir
        if (window.theme && typeof window.theme.changeVisualTheme === 'function') {
            window.theme.changeVisualTheme(normalized, false);
        }

        setTimeout(() => {
            if (this.screen) {
                this.screen.classList.add('map-hidden');
            }
            this.isOpen = false;

            // 3. SAYFA KURALI: Dikey olarak başlar (fullscreen kapalı)
            document.body.classList.remove('fullscreen-mode', 'cinematic-mode');
            const fsBtn = document.getElementById('btn-fullscreen');
            if (fsBtn) {
                const fsTxt = fsBtn.querySelector('.txt-fullscreen');
                const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;
                if (fsTxt && t) fsTxt.innerText = t.fullscreen;
            }

            // O temaya ait lobi müziğini ve çalma listesini hazırla (otomatik çalmaz)
            if (window.audioManager && typeof window.audioManager.prepareLobby === 'function') {
                window.audioManager.prepareLobby(normalized);
            }

            // Mobilde haritadan yatay girildiyse (sinematik görsel açıldığı için),
            // kullanıcıya konsolun varlığını 3.2 saniye hissettiren solan ipucunu tetikle
            const isMobileLandscape = window.matchMedia && window.matchMedia('(max-width: 950px) and (orientation: landscape), (max-height: 550px) and (orientation: landscape)').matches;
            if (isMobileLandscape && typeof window.showCinemaRotateHint === 'function') {
                window.showCinemaRotateHint();
            }

            // Spot efektini temizle
            document.querySelectorAll('.building-hotspot').forEach(s => s.classList.remove('entering'));
        }, 350);
    }

    openMap() {
        if (window.audioManager && typeof window.audioManager.stopThemePreview === 'function') {
            window.audioManager.stopThemePreview();
        }
        this.selectedTheme = null;
        this.selectedBuildingIndex = -1;
        this.hideCard();
        document.querySelectorAll('.building-hotspot').forEach(s => s.classList.remove('selected-hotspot', 'entering'));
        if (window.uiManager) window.uiManager.closePanel();

        // Haritaya geçerken 3. sayfa tam ekran modunu kaldır
        document.body.classList.remove('fullscreen-mode', 'cinematic-mode');

        if (this.screen) {
            this.screen.classList.remove('map-hidden');
        }
        this.isOpen = true;
        if (this.mapVideo && this.mapVideo.paused) {
            this.mapVideo.play().catch(e => console.log(e));
        }
    }

    updateLanguage() {
        const isTr = currentLang === 'tr';
        
        const sub = document.querySelector('.txt-map-subtitle');
        if (sub) sub.innerText = isTr ? "MEKANINI SEÇ" : "CHOOSE YOUR VIBE";

        const retMap = document.querySelector('.txt-return-map');
        if (retMap) retMap.innerText = isTr ? "HARİTA" : "MAP";

        const rotateHint = document.querySelector('.txt-map-rotate-hint');
        if (rotateHint) {
            rotateHint.innerHTML = isTr 
                ? "Daha geniş harita için <strong>cihazınızı yatay çevirebilirsiniz</strong>." 
                : "You can rotate your device to <strong>landscape</strong> for a wider map.";
        }

        const badge = document.querySelector('.building-hud-badge');
        if (badge) badge.innerText = isTr ? "KEŞFET" : "EXPLORE";

        // Joy-Con buton ipuçları (Tooltips)
        const btnA = document.querySelector('.abxy-a'); if (btnA) btnA.title = isTr ? "Seç / Giriş Yap (A)" : "Select / Enter (A)";
        const btnB = document.querySelector('.abxy-b'); if (btnB) btnB.title = isTr ? "Seçimi Sıfırla (B)" : "Reset Selection (B)";
        const btnX = document.querySelector('.abxy-x'); if (btnX) btnX.title = isTr ? "Rastgele Mekan (X)" : "Random Place (X)";
        const btnY = document.querySelector('.abxy-y'); if (btnY) btnY.title = isTr ? "Lobi Müziği Önizle (Y)" : "Preview Audio (Y)";
        const btnHome = document.getElementById('btn-map-home'); if (btnHome) btnHome.title = isTr ? "İlk Sayfaya Dön" : "Home";
        const btnFs = document.getElementById('btn-map-fullscreen'); if (btnFs) btnFs.title = isTr ? "Tam Ekran" : "Fullscreen";
        const btnLang = document.getElementById('btn-map-lang'); if (btnLang) btnLang.title = isTr ? "Dili Değiştir" : "Switch Language";

        // Açık olan kart varsa dilini hemen güncelle
        if (this.selectedTheme && this.card) {
            let th = normalizeTheme(this.selectedTheme);
            const data = this.districts[th];
            if (data) {
                if (this.cardTag) this.cardTag.innerText = data.tag || 'DRUNKEN SEMAPHORE';
                if (this.cardTitle) this.cardTitle.innerText = (data.title && data.title[currentLang]) ? data.title[currentLang] : data.title.en;
                const hudPrompt = this.card.querySelector('.txt-hud-enter');
                if (hudPrompt) hudPrompt.innerText = isTr ? "Giriş Yap" : "Enter";
            }
        }
    }
}

// ------------------------------------------
//  CHROME EXTENSION: DİNAMİK SÜRPRİZ UYGULAMA HAVUZU (APP POOLS)
// ------------------------------------------
const EXT_LEFT_APPS_POOL = [
    {
        id: 'google',
        name: 'Google',
        url: 'https://www.google.com',
        domain: 'google.com',
        boxClass: 'ext-google-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>`
    },
    {
        id: 'notion',
        name: 'Notion',
        url: 'https://www.notion.so',
        desktopUri: 'notion://',
        domain: 'notion.so',
        boxClass: 'ext-notion-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.054-.607L3.107 2.388c-.466.046-.56.28-.373.466zm.84 3.73v13.62c0 .84.466 1.166 1.353 1.12l14.288-.84c.886-.046.793-.746.793-1.306V7.474c0-.606-.233-.886-.793-.84l-14.847.886c-.56.047-.794.327-.794.887zm13.12 1.4c.094.42 0 .84-.42.887l-.933.14v8.864c.513.28.98.14 1.306-.047.373-.233.42-.56.42-.98V9.385c0-.42-.187-.653-.653-.606zm-4.712.327c.187.326.14.7-.28.746l-.886.14v8.583c.793.514 1.54.42 1.912.094.373-.327.42-.653.42-1.12V9.758c0-.42-.187-.653-.653-.606l-.513.093v-.513zm-2.846.186l-2.8 4.713v-4.153c0-.42-.234-.607-.653-.56l-.98.14v.513c.28.047.466.187.466.607v9.423c0 .42-.186.607-.653.607l-.606-.047v.513l2.285-.14 3.127-5.04v4.433c0 .466.233.653.7.606l1.026-.14v-.513c-.327-.047-.466-.233-.466-.653V9.758c0-.42-.187-.607-.653-.56z"/>
        </svg>`
    },
    {
        id: 'notebooklm',
        name: 'NotebookLM',
        url: 'https://notebooklm.google.com',
        domain: 'notebooklm.google',
        boxClass: 'ext-notebook-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#1A73E8"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#1A73E8"></path>
            <path d="M12 7l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1 1-2.2z" fill="#00ff88" stroke="#00ff88"></path>
        </svg>`
    },
    {
        id: 'scholar',
        name: 'Scholar',
        url: 'https://scholar.google.com',
        domain: 'scholar.google.com',
        boxClass: 'ext-scholar-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" fill="#4285F4" fill-opacity="0.25"></polygon>
            <path d="M6 10.5V16c0 3.3 2.7 6 6 6s6-2.7 6-6v-5.5"></path>
            <path d="M22 7v9"></path>
        </svg>`
    },
    {
        id: 'quizlet',
        name: 'Quizlet',
        url: 'https://quizlet.com',
        domain: 'quizlet.com',
        boxClass: 'ext-quizlet-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <rect x="3" y="4" width="13" height="16" rx="3" stroke="#4257B2" stroke-width="2" fill="#4257B2" fill-opacity="0.2"></rect>
            <rect x="7" y="4" width="13" height="16" rx="3" stroke="#3CCFCF" stroke-width="2" fill="#3CCFCF" fill-opacity="0.25"></rect>
            <path d="M12 9h4M12 12h4M12 15h2" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"></path>
        </svg>`
    },
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        url: 'https://chatgpt.com',
        domain: 'chatgpt.com',
        boxClass: 'ext-chatgpt-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#10a37f">
            <path d="M22.28 9.37a5.99 5.99 0 0 0-.52-4.93 6.06 6.06 0 0 0-6.19-2.88 6.05 6.05 0 0 0-4.63-2.06c-2.52 0-4.72 1.54-5.6 3.86a6.05 6.05 0 0 0-3.9 2.82 6.06 6.06 0 0 0 .74 6.78 6.06 6.06 0 0 0 .52 4.93 6.06 6.06 0 0 0 6.19 2.88 6.06 6.06 0 0 0 4.63 2.06c2.52 0 4.72-1.54 5.6-3.86a6.05 6.05 0 0 0 3.9-2.82 6.06 6.06 0 0 0-.74-6.78zM12 4c1.5 0 2.83.67 3.73 1.74l-.94.54c-.67-.62-1.55-1-2.52-1a3.73 3.73 0 0 0-3.73 3.73v.8l-1.07-.62A3.75 3.75 0 0 1 12 4zm-4.79 3.78l1.07.62-.01 1.63-2.12 1.22a3.74 3.74 0 0 1-.36-1.54 3.73 3.73 0 0 1 1.42-1.93zm-1.42 5.48l2.12-1.22 1.41.82v2.44a3.74 3.74 0 0 1-1.78.46 3.73 3.73 0 0 1-1.75-2.5zm5.79 5.01c-.97 0-1.85-.38-2.52-1l-.94.54A4.98 4.98 0 0 0 12 19a4.98 4.98 0 0 0 4.54-2.93l-1.07-.62v-.8a3.73 3.73 0 0 1-3.89 3.62zm3.37-3.26l-1.07-.62.01-1.63 2.12-1.22c.24.47.37 1 .37 1.54a3.73 3.73 0 0 1-1.43 1.93zm1.43-5.48l-2.12 1.22-1.41-.82V7.49a3.74 3.74 0 0 1 1.78-.46 3.73 3.73 0 0 1 1.75 2.5z"/>
        </svg>`
    },
    {
        id: 'deepl',
        name: 'DeepL',
        url: 'https://www.deepl.com',
        domain: 'deepl.com',
        boxClass: 'ext-deepl-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M4 17l6-6 4 4 6-6" stroke="#00d4ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 5h6v6" stroke="#00d4ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6" cy="19" r="2" fill="#00ff88"/>
        </svg>`
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        url: 'https://obsidian.md',
        desktopUri: 'obsidian://',
        domain: 'obsidian.md',
        boxClass: 'ext-obsidian-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <polygon points="12 2 19 8 16 22 8 22 5 8 12 2" stroke="#a78bfa" stroke-width="1.8" fill="#7c3aed" fill-opacity="0.3"/>
            <polygon points="12 2 16 11 12 22 8 11 12 2" stroke="#c4b5fd" stroke-width="1.4" fill="#a78bfa" fill-opacity="0.2"/>
        </svg>`
    },
    {
        id: 'duolingo',
        name: 'Duolingo',
        url: 'https://www.duolingo.com',
        domain: 'duolingo.com',
        boxClass: 'ext-duolingo-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#58cc02">
            <circle cx="12" cy="12" r="9" fill="#58cc02" fill-opacity="0.2" stroke="#58cc02" stroke-width="2"/>
            <circle cx="9" cy="11" r="2.2" fill="#ffffff"/>
            <circle cx="15" cy="11" r="2.2" fill="#ffffff"/>
            <circle cx="9.5" cy="11" r="1.1" fill="#1e293b"/>
            <circle cx="15.5" cy="11" r="1.1" fill="#1e293b"/>
            <polygon points="12 13 10 16 14 16" fill="#ff9600"/>
        </svg>`
    },
    {
        id: 'khan',
        name: 'Khan Academy',
        url: 'https://www.khanacademy.org',
        domain: 'khanacademy.org',
        boxClass: 'ext-khan-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M12 22V11M12 11c-2.5-4-7-3-7-3s0 5 4 6c3 1 3-3 3-3zm0 0c2.5-4 7-3 7-3s0 5-4 6c-3 1-3-3-3-3z" stroke="#14bf96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#14bf96" fill-opacity="0.25"/>
        </svg>`
    },
    {
        id: 'figma',
        name: 'Figma',
        url: 'https://www.figma.com',
        desktopUri: 'figma://',
        domain: 'figma.com',
        boxClass: 'ext-figma-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20">
            <circle cx="15" cy="12" r="3" fill="#1abcfe"/>
            <path d="M9 3h3v6H9a3 3 0 1 1 0-6z" fill="#f24e1e"/>
            <path d="M12 3h3a3 3 0 1 1 0 6h-3V3z" fill="#ff7262"/>
            <path d="M9 9h3v6H9a3 3 0 1 1 0-6z" fill="#a259ff"/>
            <path d="M9 15h3v3a3 3 0 1 1-3-3z" fill="#0acf83"/>
        </svg>`
    },
    {
        id: 'pomofocus',
        name: 'Pomofocus',
        url: 'https://pomofocus.io',
        domain: 'pomofocus.io',
        boxClass: 'ext-pomofocus-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <circle cx="12" cy="13" r="8" stroke="#ef4444" stroke-width="2" fill="#ef4444" fill-opacity="0.2"/>
            <path d="M12 5V2M10 2h4M9 9l-2-2" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
            <path d="M12 10v3l2 2" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
        </svg>`
    },
    {
        id: 'wolfram',
        name: 'WolframAlpha',
        url: 'https://www.wolframalpha.com',
        domain: 'wolframalpha.com',
        boxClass: 'ext-wolfram-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#dd1100">
            <path d="M12 2l2.4 5 5.3.8-3.9 3.8.9 5.3-4.7-2.5-4.7 2.5.9-5.3-3.9-3.8 5.3-.8z"/>
        </svg>`
    },
    {
        id: 'wikipedia',
        name: 'Wikipedia',
        url: 'https://www.wikipedia.org',
        domain: 'wikipedia.org',
        boxClass: 'ext-wikipedia-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1.2 14.8h-2.4l-1.1-3.2-1.1 3.2H6.2L8.6 8h2.1l1.5 4.5L13.7 8h2.1l2.4 8.8h-2.4l-1.1-3.2z"/>
        </svg>`
    },
    {
        id: 'stackoverflow',
        name: 'StackOverflow',
        url: 'https://stackoverflow.com',
        domain: 'stackoverflow.com',
        boxClass: 'ext-stackoverflow-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#f48024">
            <path d="M18.986 21.865v-6.404h2.134V24H2.97v-8.539h2.133v6.404h13.883zM7.24 16.52l9.96 2.08.43-2.09-9.96-2.08-.43 2.09zm1.77-5.03l9.04 4.54.9-1.95-9.04-4.54-.9 1.95zm3.5-5.18l7.35 6.96 1.44-1.63-7.35-6.96-1.44 1.63zM16.92 1.4l-1.81 1.2 5.56 8.46 1.81-1.2-5.56-8.46zm-9.87 18.52h10.24v-2.13H7.05v2.13z"/>
        </svg>`
    }
];

const EXT_RIGHT_APPS_POOL = [
    {
        id: 'spotify',
        name: 'Spotify',
        url: 'https://open.spotify.com',
        desktopUri: 'spotify:',
        domain: 'spotify.com',
        boxClass: 'ext-spotify-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#1DB954">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.4.1-.7-.2-.8-.5-.1-.4.2-.7.5-.8 4-.9 7.5-.5 10.3 1.2.3.2.4.6.2.9zm1.5-3.3c-.3.4-.8.5-1.2.3-3-1.8-7.5-2.3-11-1.3-.5.1-.9-.2-1-.6-.1-.5.2-.9.6-1 4-1.2 9-.6 12.3 1.5.5.2.6.7.3 1.1zm.1-3.4C15.6 8.5 9.1 8.3 5.3 9.4c-.6.2-1.2-.2-1.4-.7-.2-.6.2-1.2.7-1.4 4.5-1.3 11.6-1.1 16 1.5.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4z"/>
        </svg>`
    },
    {
        id: 'youtube',
        name: 'YouTube',
        url: 'https://www.youtube.com',
        domain: 'youtube.com',
        boxClass: 'ext-youtube-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
            <polygon fill="#FFFFFF" points="9.545 15.568 15.818 12 9.545 8.432"/>
        </svg>`
    },
    {
        id: 'github',
        name: 'GitHub',
        url: 'https://github.com',
        desktopUri: 'github-desktop://',
        domain: 'github.com',
        boxClass: 'ext-github-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>`
    },
    {
        id: 'goodreads',
        name: 'Goodreads',
        url: 'https://www.goodreads.com',
        domain: 'goodreads.com',
        boxClass: 'ext-goodreads-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#d69e2e" stroke-width="2"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#d69e2e" stroke-width="2" fill="#d69e2e" fill-opacity="0.18"></path>
            <path d="M14.5 10c0-2-1-3-2.5-3s-2.5 1-2.5 3 1 3 2.5 3c.8 0 1.5-.3 2-1v2.5c0 1.5-.8 2-2 2-.8 0-1.5-.3-1.8-.8" stroke="#f6ad55" stroke-width="1.8" stroke-linecap="round"></path>
        </svg>`
    },
    {
        id: 'pinterest',
        name: 'Pinterest',
        url: 'https://www.pinterest.com',
        domain: 'pinterest.com',
        boxClass: 'ext-pinterest-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#E60023">
            <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.1-2.4.05-3.43l1.08-4.57s-.27-.55-.27-1.37c0-1.28.74-2.24 1.67-2.24.78 0 1.16.59 1.16 1.3 0 .79-.5 1.98-.77 3.08-.22.93.46 1.68 1.38 1.68 1.65 0 2.92-1.74 2.92-4.26 0-2.23-1.6-3.79-3.89-3.79-2.65 0-4.2 1.99-4.2 4.04 0 .8.31 1.66.7 2.13.08.1.09.18.06.33l-.26 1.08c-.04.18-.14.22-.33.13-1.24-.58-2.02-2.39-2.02-3.85 0-3.13 2.28-6.01 6.57-6.01 3.45 0 6.13 2.46 6.13 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14l-.62 2.37c-.23.86-.84 1.94-1.25 2.6A12 12 0 1 0 12 0z"/>
        </svg>`
    },
    {
        id: 'discord',
        name: 'Discord',
        url: 'https://discord.com/app',
        desktopUri: 'discord://',
        domain: 'discord.com',
        boxClass: 'ext-discord-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#5865F2">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>`
    },
    {
        id: 'soundcloud',
        name: 'SoundCloud',
        url: 'https://soundcloud.com',
        domain: 'soundcloud.com',
        boxClass: 'ext-soundcloud-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#ff5500">
            <path d="M11 9.5a5.5 5.5 0 0 1 5.4 4.5 3.5 3.5 0 0 1 3.6 3.5 3.5 3.5 0 0 1-3.5 3.5H7.5A4.5 4.5 0 0 1 3 16.5a4.5 4.5 0 0 1 4.1-4.48c.4-1.48 1.7-2.52 3.9-2.52z"/>
        </svg>`
    },
    {
        id: 'letterboxd',
        name: 'Letterboxd',
        url: 'https://letterboxd.com',
        domain: 'letterboxd.com',
        boxClass: 'ext-letterboxd-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20">
            <circle cx="6" cy="12" r="4.5" fill="#ff8000"/>
            <circle cx="12" cy="12" r="4.5" fill="#00e054" fill-opacity="0.9"/>
            <circle cx="18" cy="12" r="4.5" fill="#40bcf4"/>
        </svg>`
    },
    {
        id: 'medium',
        name: 'Medium',
        url: 'https://medium.com',
        domain: 'medium.com',
        boxClass: 'ext-medium-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
            <ellipse cx="6.5" cy="12" rx="4.5" ry="6"/>
            <ellipse cx="14" cy="12" rx="2.5" ry="5.8"/>
            <ellipse cx="19.5" cy="12" rx="1.2" ry="5.5"/>
        </svg>`
    },
    {
        id: 'behance',
        name: 'Behance',
        url: 'https://www.behance.net',
        domain: 'behance.net',
        boxClass: 'ext-behance-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#0057ff">
            <path d="M7.7 10.3c.7-.4 1.1-1.1 1.1-2 0-1.8-1.4-2.5-3.3-2.5H1v12.4h4.8c2.2 0 3.7-.9 3.7-2.8 0-1.2-.6-2.1-1.8-2.6zm-4.3-3h2.1c1.1 0 1.8.4 1.8 1.3 0 .9-.6 1.4-1.7 1.4H3.4V7.3zm2.3 8.3H3.4v-3.2h2.4c1.2 0 1.9.5 1.9 1.6 0 1.1-.7 1.6-2 1.6zm13.1-6.9c-2.8 0-4.6 2-4.6 4.7 0 3 1.8 4.8 4.7 4.8 2.1 0 3.6-1.1 4.1-2.6h-2.3c-.4.5-1 .8-1.8.8-1.2 0-2-.7-2.2-1.9h6.4c0-.3.1-.7.1-1 0-2.8-1.7-4.8-4.4-4.8zm-2.2 3.8c.2-1 .9-1.6 2.1-1.6 1.1 0 1.8.6 2 1.6h-4.1zM16.5 6.5h4.6v1.4h-4.6z"/>
        </svg>`
    },
    {
        id: 'bandcamp',
        name: 'Bandcamp',
        url: 'https://bandcamp.com',
        domain: 'bandcamp.com',
        boxClass: 'ext-bandcamp-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20">
            <polygon points="4 18 16 6 20 6 8 18" fill="#1da0c3"/>
        </svg>`
    },
    {
        id: 'reddit',
        name: 'Reddit',
        url: 'https://www.reddit.com',
        domain: 'reddit.com',
        boxClass: 'ext-reddit-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#ff4500">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 3.31 1.35 6.31 3.53 8.47l-1.07 3.23 3.34-.99C7.82 23.47 9.85 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm6.8 14.3c-.07.45-.3.86-.65 1.17-1.12.98-2.9 1.53-4.15 1.53-1.25 0-3.03-.55-4.15-1.53-.35-.31-.58-.72-.65-1.17-.11-.73.18-1.45.76-1.92.58-.46 1.34-.61 2.06-.41.6.17 1.25.26 1.98.26s1.38-.09 1.98-.26c.72-.2 1.48-.05 2.06.41.58.47.87 1.19.76 1.92z"/>
        </svg>`
    },
    {
        id: 'twitch',
        name: 'Twitch',
        url: 'https://www.twitch.tv',
        desktopUri: 'twitch://',
        domain: 'twitch.tv',
        boxClass: 'ext-twitch-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#a970ff">
            <path d="M2.149 0L.537 4.119v16.836h5.731V24h3.224l3.045-3.045h4.657l6.269-6.269V0H2.149zm19.164 13.612l-3.582 3.582H12l-3.045 3.045v-3.045H4.836V1.791h16.477v11.821zM16.478 5.373h-2.15v6.448h2.15V5.373zm-5.732 0h-2.15v6.448h2.15V5.373z"/>
        </svg>`
    },
    {
        id: 'dribbble',
        name: 'Dribbble',
        url: 'https://dribbble.com',
        domain: 'dribbble.com',
        boxClass: 'ext-dribbble-box',
        svg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="#ea4c89">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.886 6.002a9.988 9.988 0 0 1 2.052 5.864 19.544 19.544 0 0 0-5.73-.853 17.514 17.514 0 0 0-1.02-2.023c2.723-1.036 4.303-2.316 4.698-2.988zM12 2.054c2.274 0 4.364.767 6.035 2.058-.466.757-2.112 2.039-4.859 3.056C11.517 4.195 9.873 2.502 9.77 2.387 10.487 2.17 11.233 2.054 12 2.054zm-4.305 1.15c.105.116 1.765 1.83 3.42 4.846-3.843 1.196-7.854 1.25-8.877 1.242A9.974 9.974 0 0 1 7.695 3.204zM2.054 12c0-.12.004-.24.01-.358.986.007 5.617-.044 9.697-1.396a24.28 24.28 0 0 1 1.272 2.453c-3.142.946-6.14 3.04-7.618 5.76A9.957 9.957 0 0 1 2.054 12zm9.946 9.946a9.952 9.952 0 0 1-5.467-1.626c1.332-2.454 4.084-4.382 7.042-5.275 1.298 3.473 1.848 6.42 1.93 6.901a9.944 9.944 0 0 1-3.505 0zm5.352-1.34c-.116-.62-.67-3.52-1.938-6.945 1.637-.107 3.398.058 5.25.485a9.98 9.98 0 0 1-3.312 6.46z"/>
        </svg>`
    }
];

// ------------------------------------------
//  CHROME EXTENSION NEW TAB YÖNETİCİSİ (EXTENSION MANAGER)
// ------------------------------------------
class ExtensionManager {
    constructor() {
        this.screen = document.getElementById('extension-screen');
        this.timeEl = document.getElementById('ext-time');
        this.dateEl = document.getElementById('ext-date');
        this.btnAtmosphere = document.getElementById('btn-enter-atmosphere');
        this.btnLang = document.getElementById('ext-btn-lang');
        this.btnFullscreen = document.getElementById('ext-btn-fullscreen');
        this.bgWallpaper = document.getElementById('ext-bg-wallpaper');

        // assets/first-page içerisindeki 19 adet yüksek çözünürlüklü görsel havuzu
        this.bgImages = [
            'assets/first-page/image-1.jpg',
            'assets/first-page/image-2.jpg',
            'assets/first-page/image-3.jpg',
            'assets/first-page/image-4.jpg',
            'assets/first-page/image-5.jpg',
            'assets/first-page/image-6.jpg',
            'assets/first-page/image-7.jpg',
            'assets/first-page/image-8.png',
            'assets/first-page/image-9.jpg',
            'assets/first-page/image-10.jpg',
            'assets/first-page/image-11.jpg',
            'assets/first-page/image-12.jpg',
            'assets/first-page/image-14.jpg',
            'assets/first-page/image-15.jpg',
            'assets/first-page/image-16.jpg',
            'assets/first-page/image-17.jpg',
            'assets/first-page/image-18.jpg',
            'assets/first-page/image-19.jpg'
        ];

        this.init();
    }

    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);

        // Her sayfa açılışında rastgele tek bir görsel seç ve sabit tut
        this.setRandomWallpaper();

        // Dinamik Sürpriz Havuzundan Kart Render Et (Masaüstünde 3 Sol + 3 Sağ, Mobilde 3 Kart)
        this.renderSurpriseCards();

        // Ekran boyutu değiştiğinde (mobil/masaüstü geçişi) kart sayısını dinamik güncelle
        this.isCurrentlyMobile = window.innerWidth <= 950;
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const nowMobile = window.innerWidth <= 950;
                if (nowMobile !== this.isCurrentlyMobile) {
                    this.isCurrentlyMobile = nowMobile;
                    this.renderSurpriseCards();
                }
            }, 200);
        });

        // "Atmosphere" kutusu/bağlantısı:
        // Uzantıdaysa: 2. ve 3. sayfa deneyimi için doğrudan web sitesini aç
        // Web sitesindeyse: Sayfa içi haritayı akıcı şekilde aç (revealMap)
        this.btnAtmosphere?.addEventListener('click', () => {
            this.handleAtmosphereClick();
        });
        this.btnAtmosphere?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleAtmosphereClick();
            }
        });

        // URL hash kontrolü: Eğer web sitesine #explore veya #map ile gelindiyse doğrudan haritayı aç
        if (window.location.hash === '#explore' || window.location.hash === '#map') {
            setTimeout(() => {
                this.revealMap();
            }, 120);
        }

        // Dil Değiştirme Butonu (TR <-> EN)
        this.btnLang?.addEventListener('click', () => {
            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            try {
                localStorage.setItem('atmos-user-lang', currentLang);
            } catch (e) {}
            document.documentElement.lang = currentLang;
            applyTranslations();
            if (window.mapManager && typeof window.mapManager.updateLanguage === 'function') {
                window.mapManager.updateLanguage();
            }
        });

        // Tam Ekran Butonu
        this.btnFullscreen?.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch(() => {});
                }
            }
        });
    }

    renderSurpriseCards() {
        const leftContainer = document.querySelector('.ext-side-left');
        const rightContainer = document.querySelector('.ext-side-right');
        if (!leftContainer || !rightContainer) return;

        // Rastgele karıştırma algoritması (Fisher-Yates)
        const pickRandom = (arr, count) => {
            const copy = [...arr];
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy.slice(0, count);
        };

        const leftPoolFiltered = EXT_LEFT_APPS_POOL;
        const isMobile = window.innerWidth <= 950;

        let selectedLeft = [];
        let selectedRight = [];

        if (isMobile) {
            // Mobilde: Dikeyde soldan 3 kart gösterilir (sağ panel CSS ile dikeyde gizlidir).
            // Yatay rotasyona geçildiğinde ise solda 3, sağda 3 kart olarak zarif çift kanatlı yatay vitrin oluşur.
            selectedLeft = pickRandom(leftPoolFiltered, 3);
            selectedRight = pickRandom(EXT_RIGHT_APPS_POOL, 3);
        } else {
            // Masaüstünde orijinal hali: Sol panelde 6, sağ panelde 6 kart (hiç dokunulmaz)
            selectedLeft = pickRandom(leftPoolFiltered, 6);
            selectedRight = pickRandom(EXT_RIGHT_APPS_POOL, 6);
        }

        const buildCard = (item) => {
            const a = document.createElement('a');
            a.className = 'ext-quick-card';
            a.href = item.url;
            const isGoogle = (item.id === 'google' || item.url.includes('google.com'));
            a.target = isGoogle ? '_self' : '_blank';
            if (!isGoogle) {
                a.rel = 'noopener noreferrer';
            }

            const desktopTip = currentLang === 'tr' ? 'Masaüstü Uygulaması' : 'Desktop App';
            if (item.desktopUri) {
                a.title = `${item.name} (${desktopTip})`;
                // Akıllı Masaüstü / Web if-else mekanizması:
                // Masaüstü uygulaması yüklüyse uygulama açılır (pencere blur olur).
                // Yüklü değilse hiçbir şey açılmayacağı için otomatik olarak web sitesini açar!
                a.addEventListener('click', (e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                        e.preventDefault();

                        let appOpened = false;
                        const onBlur = () => {
                            appOpened = true;
                            window.removeEventListener('blur', onBlur);
                        };
                        window.addEventListener('blur', onBlur);

                        // 1. Masaüstü uygulamasını başlatmayı dene
                        window.location.href = item.desktopUri;

                        // 2. 1200ms bekle: Uygulama açılmadıysa (blur olmadıysa) web sitesini yeni sekmede aç
                        setTimeout(() => {
                            window.removeEventListener('blur', onBlur);
                            if (!appOpened && !document.hidden) {
                                window.open(item.url, '_blank', 'noopener,noreferrer');
                            }
                        }, 1200);
                    }
                });
            } else {
                a.title = item.name;
            }

            const desktopBadge = item.desktopUri ? `<span class="ext-app-badge" title="${desktopTip}"><svg viewBox="0 0 24 24" width="9" height="9" fill="#00ff88" stroke="#00ff88" stroke-width="1.2" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></span>` : '';

            a.innerHTML = `
                <div class="ext-card-icon-box ${item.boxClass}">
                    ${item.svg}
                </div>
                <div class="ext-card-details">
                    <span class="ext-card-name">${item.name}${desktopBadge}</span>
                    <span class="ext-card-url">${item.domain}</span>
                </div>
                <svg class="ext-card-arrow" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            `;
            return a;
        };

        leftContainer.innerHTML = '';
        selectedLeft.forEach(item => leftContainer.appendChild(buildCard(item)));

        rightContainer.innerHTML = '';
        selectedRight.forEach(item => rightContainer.appendChild(buildCard(item)));
    }

    updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        if (this.timeEl) {
            this.timeEl.innerText = `${hours}:${minutes}`;
        }
        this.updateDate(now);
    }

    updateDate(nowDate) {
        if (!this.dateEl) return;
        const now = nowDate || new Date();
        let dateStr = '';
        if (currentLang === 'tr') {
            const day = now.getDate();
            const month = now.toLocaleDateString('tr-TR', { month: 'long' });
            const weekday = now.toLocaleDateString('tr-TR', { weekday: 'long' });
            dateStr = `${day} ${month}, ${weekday}`.toLocaleUpperCase('tr-TR');
        } else {
            const day = now.getDate();
            const month = now.toLocaleDateString('en-GB', { month: 'long' });
            const weekday = now.toLocaleDateString('en-GB', { weekday: 'long' });
            dateStr = `${weekday}, ${day} ${month}`.toLocaleUpperCase('en-GB');
        }
        this.dateEl.innerText = dateStr;
    }

    setRandomWallpaper() {
        if (!this.bgWallpaper || !this.bgImages || this.bgImages.length === 0) return;

        // Her sayfa açılışında rastgele bir görsel seç (üst üste aynı görsel gelmemesi için kontrol)
        let lastIdx = -1;
        try {
            lastIdx = parseInt(sessionStorage.getItem('atmos-last-wallpaper-idx') ?? '-1', 10);
        } catch (e) {}

        let randomIdx = Math.floor(Math.random() * this.bgImages.length);
        if (this.bgImages.length > 1 && randomIdx === lastIdx) {
            randomIdx = (randomIdx + 1) % this.bgImages.length;
        }

        try {
            sessionStorage.setItem('atmos-last-wallpaper-idx', randomIdx.toString());
        } catch (e) {}

        const chosenImage = this.bgImages[randomIdx];
        this.bgWallpaper.style.backgroundImage = `url('${chosenImage}')`;
    }

    handleAtmosphereClick() {
        const isExtension = window.location.protocol === 'chrome-extension:' || (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id);
        if (isExtension) {
            // Eklentideyiz: 2. ve 3. sayfa (interaktif harita ve odalar) için doğrudan web sitesini aynı sekmede aç
            window.location.href = 'https://drunken-semaphore.web.app/#explore';
        } else {
            // Web sitesindeyiz: Sayfa içi interaktif haritaya akıcı dönüşüm
            this.revealMap();
        }
    }

    revealMap() {
        if (!this.screen) return;
        // Akıcı reveal efekti: Ekran opaklığını ve ölçeğini yumuşakça değiştirir
        this.screen.classList.add('ext-hidden');

        // Haritayı aç ve harita videosunu oynat
        if (window.mapManager) {
            window.mapManager.openMap();
        }
        if (window.theme && typeof window.theme.loadCurrentVideo === 'function') {
            window.theme.loadCurrentVideo();
        }
    }
}

// ------------------------------------------
//  SİSTEM BAŞLATICILARI (INITIALIZATION)
// ------------------------------------------
const ui = new UIManager();
window.uiManager = ui;

const clock = new ClockManager();
const stopwatch = new StopwatchManager();
const timer = new TimerManager();
const alarm = new AlarmManager();
window.alarm = alarm;

const astro = new AstrologyManager();
const audioManager = new AudioManager(); 
window.audioManager = audioManager;

const theme = new AssetManager(); 
window.theme = theme;

const mapManager = new MapManager();
window.mapManager = mapManager;

const extensionManager = new ExtensionManager();
window.extensionManager = extensionManager;

window.playClickSound = (pitch) => {
    if (window.mapManager && typeof window.mapManager.playClickSound === 'function') {
        window.mapManager.playClickSound(pitch);
    }
};

// 2. Sayfa Dock Bar, Sekmeler ve Butonlara Genel Tık Sesi Ekle
document.querySelectorAll('.dock-btn, .dock-coffee-btn, .dock-map-btn, .feature-tab-link, .spin-btn, .ext-pill-btn, .radio-mode-btn, .brand-sign').forEach(el => {
    el.addEventListener('click', () => {
        if (window.playClickSound) window.playClickSound(440);
    });
});

const pomodoro = new PomodoroManager();
window.pomodoro = pomodoro;

const todoManager = new TodoManager();
window.todoManager = todoManager;

// Görsel Yükleme / URL ve Embed Event Listener'ları
const visualFileInput = document.getElementById('visual-file-input');
visualFileInput?.addEventListener('change', handleVisualUpload);

// Drag & Drop Bölgesi
const visualDropZone = document.getElementById('visual-drop-zone');
if (visualDropZone) {
    ['dragenter', 'dragover'].forEach(evtName => {
        visualDropZone.addEventListener(evtName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            visualDropZone.classList.add('drag-over');
        });
    });

    ['dragleave', 'drop'].forEach(evtName => {
        visualDropZone.addEventListener(evtName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            visualDropZone.classList.remove('drag-over');
        });
    });

    visualDropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
            handleVisualUpload({ target: { files: files } });
        }
    });

    visualDropZone.addEventListener('click', (e) => {
        if (e.target.closest('label') || e.target.closest('button')) return;
        visualFileInput?.click();
    });
}

document.getElementById('visual-url')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') applyVisualUrl();
});
document.getElementById('btn-apply-visual')?.addEventListener('click', applyVisualUrl);
document.getElementById('btn-reset-visual')?.addEventListener('click', resetToThemeVisual);

document.getElementById('embed-url')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadEmbed();
});
document.getElementById('btn-load-embed')?.addEventListener('click', loadEmbed);

// ------------------------------------------
//  GLOBAL NESNE KÖPRÜLEMESİ
// ------------------------------------------
window.playTheme = (themeName) => { if(audioManager) audioManager.playLobby(themeName); };
window.playLobby = (themeName) => { if(audioManager) audioManager.playLobby(themeName); };
window.playRadio = (stationId) => { if(audioManager) audioManager.playRadio(stationId); };
window.openTab = (evt, tabName) => UIManager.openTab(evt, tabName);
window.changeTheme = (themeName) => { if(theme) theme.changeVisualTheme(themeName); };
window.toggleAmbience = (soundId) => { if(audioManager) audioManager.toggleAmbience(soundId); };
window.setAmbienceVolume = (soundId, value) => { if(audioManager) audioManager.setAmbienceVolume(soundId, value); };
window.setMusicVolume = (value) => { if(audioManager) audioManager.setMusicVolume(value); };
window.toggleShuffle = () => { if(audioManager) audioManager.toggleShuffle(); };
window.loadEmbed = loadEmbed;
window.handleVisualUpload = handleVisualUpload;
window.applyVisualUrl = applyVisualUrl;
window.resetToThemeVisual = resetToThemeVisual;

// ------------------------------------------
//  KEYBOARD SHORTCUTS
// ------------------------------------------
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

    switch(e.key.toLowerCase()) {
        case ' ':
            e.preventDefault();
            if (audioManager) audioManager.togglePlayPause();
            break;
        case 'f':
            document.getElementById('btn-fullscreen')?.click();
            break;
        case 'n':
            if (audioManager) audioManager.playNextTrack();
            break;
        case 'p':
            if (audioManager) audioManager.playPrevTrack();
            break;
        case 'm':
            if (audioManager) audioManager.toggleMute();
            break;
    }
});

// ------------------------------------------
//  KAYNAK KOD KORUMA KİLİTLERİ
// ------------------------------------------
document.addEventListener('contextmenu', (e) => { e.preventDefault(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') { e.preventDefault(); }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) { e.preventDefault(); }
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) { e.preventDefault(); }
});

// ------------------------------------------
//  DİL MOTORU İLK ÇALIŞTIRMA (DOM READY & İMMEDIATE)
// ------------------------------------------
applyTranslations();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
}

window.lastActiveTabName = null; 
window.lastActiveTabId = null;

window.showCinemaRotateHint = function() {
    const hint = document.getElementById('cinema-rotate-hint');
    if (!hint) return;

    const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : translations.tr;
    const txtSpan = hint.querySelector('.txt-rotate-for-console');
    if (txtSpan && t && t.rotateForConsole) {
        txtSpan.innerText = t.rotateForConsole;
    }

    hint.style.display = 'flex';
    hint.classList.remove('fade-out');
    void hint.offsetWidth;
    hint.classList.add('show');

    if (window._cinemaHintTimer) clearTimeout(window._cinemaHintTimer);
    if (window._cinemaHintFadeTimer) clearTimeout(window._cinemaHintFadeTimer);

    window._cinemaHintTimer = setTimeout(() => {
        hint.classList.remove('show');
        hint.classList.add('fade-out');
        window._cinemaHintFadeTimer = setTimeout(() => {
            hint.style.display = 'none';
            hint.classList.remove('fade-out');
        }, 1300);
    }, 3200);
};

function enforceLandscapeProtection() {
    const isExtVisible = window.extensionManager && window.extensionManager.screen && !window.extensionManager.screen.classList.contains('ext-hidden');
    const isMapVisible = window.mapManager && window.mapManager.screen && !window.mapManager.screen.classList.contains('map-hidden');
    if (isExtVisible || isMapVisible) return;

    const isMobileDevice = window.innerWidth <= 1024;
    if (!isMobileDevice) return;

    const isLandscape = window.innerWidth > window.innerHeight;
    const fsBtn = document.getElementById('btn-fullscreen');
    const fsTxt = fsBtn ? fsBtn.querySelector('.txt-fullscreen') : null;
    const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;

    if (isLandscape) {
        // Yatay modda: Otomatik olarak 4. Sayfa (Sinematik Tam Ekran Modu)
        if (window.uiManager && window.uiManager.slidePanel && window.uiManager.slidePanel.classList.contains('open')) {
            window.uiManager.closePanel();
        }

        const nonCinemaViews = ['world-clock-view', 'birth-chart-view', 'todo-view', 'alarm-view'];
        for (const id of nonCinemaViews) {
            const v = document.getElementById(id);
            const isVOpen = v && v.style.display !== 'none' && !v.classList.contains('hidden');
            if (isVOpen) {
                window.lastActiveTabId = id;
                v.style.display = 'none';
                
                const home = document.getElementById('clock-view');
                if (home) {
                    home.style.display = 'block';
                    home.classList.remove('hidden');
                }
                
                const tablinks = document.querySelectorAll('.static-menu-list .tab-link, .feature-tab-link');
                tablinks.forEach(link => link.classList.remove("active"));
                if (tablinks[0]) tablinks[0].classList.add("active");
                break;
            }
        }

        if (!document.body.classList.contains('fullscreen-mode')) {
            document.body.classList.add('fullscreen-mode', 'cinematic-mode');
            if (fsTxt && t) fsTxt.innerText = t.minimize;
        }
    } else { 
        // Dikey modda: Otomatik olarak 3. Sayfa (Normal Konsol Görünümü)
        const rotHint = document.getElementById('cinema-rotate-hint');
        if (rotHint) {
            rotHint.style.display = 'none';
            rotHint.classList.remove('show', 'fade-out');
        }

        if (document.body.classList.contains('fullscreen-mode')) {
            document.body.classList.remove('fullscreen-mode', 'cinematic-mode');
            if (fsTxt && t) fsTxt.innerText = t.fullscreen;
        }

        if (window.lastActiveTabId) {
            const home = document.getElementById('clock-view');
            if (home) home.style.display = 'none';

            const savedView = document.getElementById(window.lastActiveTabId);
            if (savedView) {
                savedView.style.display = 'block';
                savedView.classList.remove('hidden');
            }

            const tablinks = document.querySelectorAll('.static-menu-list .tab-link');
            tablinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-tab') === window.lastActiveTabId) {
                    link.classList.add('active');
                }
            });

            window.lastActiveTabId = null;
        }
    }
}

window.addEventListener('orientationchange', () => {
    setTimeout(enforceLandscapeProtection, 200);
    setTimeout(applyTranslations, 250);
});
window.addEventListener('resize', enforceLandscapeProtection);

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        document.body.classList.toggle('mobile-menu-open');
    });
}
