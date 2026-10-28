# Drunken Semaphore — Lo-Fi, Chill & Focus Console

[Visit Live Web App ➜ https://drunken-semaphore.web.app](https://drunken-semaphore.web.app)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-000000?style=for-the-badge&logo=soundCloud&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

---

## English

### About the Project
Drunken Semaphore is an immersive, aesthetic productivity and relaxation console designed for studying, reading, coding, or simply unwinding. It brings dynamic visual atmospheres, curated multi-track lo-fi playlists, realistic environmental soundscapes, and comprehensive time management utilities together into a single cohesive interface.

The project operates across two main experiences:
1. **Interactive Web Application**: Full atmospheric journey with an interactive isometric map and 8 distinct themed rooms.
2. **Chrome Web Store Extension (Manifest V3)**: An ultra-fast, lightweight New Tab companion featuring a customizable clock, rotating high-definition lo-fi wallpapers, and quick productivity links.

---

### Key Features

* **Three-Tier Architecture**:
  * **Page 1 (Focus Console / New Tab)**: Minimalist dashboard with digital clock, date, rotating 4K wallpapers, quick launch shortcuts (Spotify, Google, YouTube, Notion, GitHub, etc.), and fullscreen mode.
  * **Page 2 (Interactive Campus Map)**: Animated isometric map allowing users to explore different themed locations with interactive previews.
  * **Page 3 (Themed Atmosphere Rooms)**: Immersive rooms featuring high-definition visual animations, dedicated lo-fi music playlists, and an ambient sound mixer.

* **8 Unique Themed Rooms**:
  * Milky Way
  * Cyber World
  * Cowboy Era
  * Jazz Romance
  * Light Fantasy
  * Dark Fantasy
  * Rock 'n' Roll
  * The Pacific Crest

* **Audio & Soundscape Engine**:
  * Multi-track lo-fi playlists curated for each theme with shuffle, loop, and playback controls.
  * Multi-channel environmental audio mixer: Rain, Winter Wind, Cafe Noise, Birds & Rain, Seagulls & Waves, Fireplace, Train, Japanese Koto.
  * Realistic volume balancing and independent channel sliders.

* **Time & Productivity Suite**:
  * Pomodoro Focus Timer with customizable work/break intervals.
  * Stopwatch with lap support.
  * Multi-time alarm system with custom audio alerts.
  * World Clocks and interactive Astrological / Birth Chart reference.

---

### Tech Stack
* **Vanilla JavaScript (ES6+)**: Custom modular state management, audio synthesis, audio mixing engine, and screen routing without framework overhead.
* **HTML5 & CSS3**: Responsive UI, CSS animations, cyberpunk neon lighting, and high-performance backdrop-filter glassmorphism.
* **Web Audio API & HTML5 Audio**: Multi-channel concurrent audio playback with volume ducking and seamless looping.
* **Chrome Extension (Manifest V3)**: Lightweight new tab override with optimized bundle size.
* **Deployment**: Hosted on Google Cloud Firebase Hosting with global CDN caching.

---

### Local Setup

```bash
# Clone the repository
git clone https://github.com/ietkose/atmosphere-os.git

# Navigate into the project directory
cd atmosphere-os

# Open index.html in your preferred browser or use a local static server
npx serve .
```

---

## Türkçe

### Proje Hakkında
Drunken Semaphore; ders çalışırken, kitap okurken, kod yazarken veya dinlenirken arka planda yaşayan bir evren kurmak isteyenler için geliştirilmiş cyberpunk ve lo-fi temalı atmosfer konsoludur. Dinamik görsel atmosferleri, özenle derlenmiş çok parçalı müzik listelerini, gerçekçi çevre seslerini ve zaman yönetim araçlarını tek bir arayüzde birleştirir.

Proje iki ana mecrada çalışır:
1. **İnteraktif Web Konsolu**: İzometrik harita ve 8 tematik odayı kapsayan tam deneyim.
2. **Chrome Web Mağazası Uzantısı (Manifest V3)**: Yeni Sekme (New Tab) sayfasını saat, tarih, yüksek çözünürlüklü duvar kağıtları ve hızlı linklerle şık bir çalışma alanına dönüştüren hafif eklenti.

---

### Öne Çıkan Özellikler

* **Üç Katmanlı Mimari**:
  * **1. Sayfa (Odak Konsolu / Yeni Sekme)**: Büyük dijital saat, tarih, dönüşümlü 4K duvar kağıtları, hızlı erişim kartları (Spotify, Google, YouTube, Notion, GitHub vb.) ve tam ekran modu.
  * **2. Sayfa (İnteraktif Harita)**: Bina önizlemeleri ve lobi sesleriyle zenginleştirilmiş animasyonlu izometrik yerleşke haritası.
  * **3. Sayfa (Tematik Odalar)**: Her biri kendine has video animasyonlarına, lo-fi çalma listelerine ve ambiyans ses mikserine sahip 8 özel oda.

* **8 Farklı Tematik Oda**:
  * Milky Way (Samanyolu)
  * Cyber World (Siber Dünya)
  * Cowboy Era (Vahşi Batı)
  * Jazz Romance (Caz & Romantizm)
  * Light Fantasy (Aydınlık Fantastik)
  * Dark Fantasy (Karanlık Fantastik)
  * Rock 'n' Roll
  * The Pacific Crest (Pasifik Zirvesi)

* **Ses ve Ambiyans Mikseri**:
  * Her tema için özel derlenmiş 12'şer parçalık lo-fi müzik kütüphanesi.
  * 8 kanallı ortam sesi mikseri: Yağmur, Kış Rüzgarı, Kafe Uğultusu, Kuşlar, Dalgalar & Martılar, Şömine Ateşi, Tren Sesi, Geleneksel Koto.
  * Birbirinden bağımsız ses düzeyi kontrolleri ve kesintisiz döngü desteği.

* **Zaman ve Odaklanma Araçları**:
  * Pomodoro Odaklanma Sayacı (çalışma ve mola döngüleri).
  * Hassas Kronometre.
  * Özel alarm zil sesli Çalar Saat.
  * Dünya Saatleri ve Doğum Haritası aracı.

---

### Kullanılan Teknolojiler
* **Saf JavaScript (ES6+)**: Dış framework bağımlılığı olmaksızın modüler durum yönetimi, ses yönlendirme ve arayüz mantığı.
* **HTML5 & CSS3**: Esnek (responsive) yerleşim, cam efekti (glassmorphism), neon ışıklandırmalar ve akıcı animasyonlar.
* **Web Audio API**: Çok kanallı eşzamanlı ses çalma, ses seviyesi dengeleme ve döngü yönetimi.
* **Chrome Uzantısı (Manifest V3)**: Hızlı açılan, hafif ve optimize edilmiş Yeni Sekme paketi.
* **Barındırma & Dağıtım**: Global CDN ve SSL desteğiyle Google Cloud Firebase Hosting.

---

### Canlı Bağlantılar
* Web Konsolu: [https://drunken-semaphore.web.app](https://drunken-semaphore.web.app)
* Gizlilik Politikası: [https://drunken-semaphore.web.app/privacy.html](https://drunken-semaphore.web.app/privacy.html)
