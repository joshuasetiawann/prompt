/**
 * Data pustaka prompt PromptKita.
 *
 * Tambahkan prompt baru dengan menambah objek ke array `PROMPTS`.
 * Field:
 *   id        : string unik (slug) — wajib unik
 *   title     : judul singkat prompt
 *   category  : salah satu nilai dari `CATEGORIES`
 *   description: penjelasan singkat kapan prompt ini berguna
 *   tags      : array kata kunci untuk pencarian
 *   prompt    : isi prompt. Gunakan {placeholder} untuk bagian yang diisi pengguna.
 *
 * Pedoman penulisan prompt yang dipakai di pustaka ini:
 *   1. PERAN    — beri AI peran/keahlian yang spesifik.
 *   2. KONTEKS  — jelaskan situasi & masukan yang relevan.
 *   3. TUGAS    — instruksi yang jelas dan dapat ditindaklanjuti.
 *   4. BATASAN  — gaya, panjang, hal yang harus dihindari.
 *   5. FORMAT   — bentuk keluaran yang diinginkan.
 *   + Minta AI bertanya dulu bila informasi penting belum lengkap.
 */

const CATEGORIES = [
  { id: "penulisan", label: "Penulisan", emoji: "✍️" },
  { id: "pemrograman", label: "Pemrograman", emoji: "💻" },
  { id: "pemasaran", label: "Pemasaran", emoji: "📣" },
  { id: "pendidikan", label: "Pendidikan", emoji: "🎓" },
  { id: "bisnis", label: "Bisnis", emoji: "📈" },
  { id: "produktivitas", label: "Produktivitas", emoji: "⚡" },
  { id: "karier", label: "Karier", emoji: "🧭" },
];

const PROMPTS = [
  {
    id: "ringkas-artikel",
    title: "Ringkas artikel panjang",
    category: "produktivitas",
    description: "Ubah teks panjang menjadi ringkasan berlapis: inti, poin kunci, dan istilah penting.",
    tags: ["ringkasan", "summary", "membaca", "riset"],
    prompt:
      "Peran: Kamu adalah analis riset yang ahli meringkas tanpa kehilangan makna.\n\n" +
      "Tugas: Ringkas teks di bawah ini menjadi tiga lapis:\n" +
      "1. TL;DR — satu kalimat inti (maks. 25 kata).\n" +
      "2. Poin kunci — 5–7 butir, masing-masing satu baris.\n" +
      "3. Istilah/angka penting — daftar singkat beserta artinya.\n\n" +
      "Batasan: Pertahankan istilah teknis aslinya, jangan menambah opini atau informasi di luar teks, " +
      "dan tandai dengan \"(?)\" bila ada bagian yang ambigu.\n\n" +
      "Teks:\n\"\"\"\n{tempel teks di sini}\n\"\"\"",
  },
  {
    id: "email-profesional",
    title: "Tulis email profesional",
    category: "penulisan",
    description: "Susun email kerja yang jelas, sopan, dan langsung ke tujuan, lengkap dengan subjek.",
    tags: ["email", "komunikasi", "kantor", "formal"],
    prompt:
      "Peran: Kamu adalah asisten komunikasi profesional.\n\n" +
      "Konteks:\n" +
      "- Penerima: {penerima dan posisinya}\n" +
      "- Tujuan email: {apa yang ingin dicapai}\n" +
      "- Poin yang harus disampaikan: {poin 1; poin 2; ...}\n" +
      "- Nada: {formal / ramah-profesional / tegas}\n\n" +
      "Tugas: Tulis email dalam Bahasa Indonesia yang rapi. Sertakan baris Subjek, sapaan, " +
      "isi yang terstruktur (maks. 150 kata), dan satu ajakan bertindak yang spesifik beserta tenggat bila relevan.\n\n" +
      "Batasan: Hindari basa-basi berlebihan dan kalimat bertele-tele. " +
      "Jika ada informasi penting yang belum saya berikan, tanyakan dulu sebelum menulis.",
  },
  {
    id: "perbaiki-tulisan",
    title: "Perbaiki & perhalus tulisan",
    category: "penulisan",
    description: "Perbaiki tata bahasa dan gaya tanpa mengubah maksud, plus penjelasan perubahannya.",
    tags: ["editing", "grammar", "ejaan", "proofread"],
    prompt:
      "Peran: Kamu adalah editor naskah Bahasa Indonesia yang teliti.\n\n" +
      "Tugas: Perbaiki ejaan, tata bahasa, tanda baca, dan kelancaran teks berikut tanpa mengubah maknanya. " +
      "Sesuaikan tingkat formalitas ke: {formal / netral / santai}.\n\n" +
      "Format keluaran:\n" +
      "1. Versi final yang sudah diperbaiki.\n" +
      "2. Tabel perubahan penting: [bagian asli] → [hasil] → [alasan singkat].\n\n" +
      "Batasan: Pertahankan suara/penulis asli, jangan menambah kalimat baru kecuali untuk kelancaran.\n\n" +
      "Teks:\n\"\"\"\n{tempel teks di sini}\n\"\"\"",
  },
  {
    id: "review-kode",
    title: "Tinjau kode (code review)",
    category: "pemrograman",
    description: "Tinjauan kode terprioritas: bug, keamanan, dan keterbacaan, dengan perbaikan konkret.",
    tags: ["code review", "bug", "refactor", "keamanan"],
    prompt:
      "Peran: Kamu adalah software engineer senior yang melakukan code review menyeluruh.\n\n" +
      "Tugas: Tinjau kode di bawah ini dan laporkan temuan, diurutkan dari prioritas tertinggi ke terendah " +
      "(Kritis → Mayor → Minor → Saran gaya).\n\n" +
      "Untuk setiap temuan, tulis dengan format:\n" +
      "- [Prioritas] Judul singkat\n" +
      "  • Masalah: ...\n" +
      "  • Dampak: ...\n" +
      "  • Perbaikan: cuplikan kode yang diperbaiki.\n\n" +
      "Fokus utama: potensi bug & edge case, kerentanan keamanan, kebocoran sumber daya, " +
      "kompleksitas yang bisa disederhanakan, penamaan, dan keterbacaan. " +
      "Akhiri dengan ringkasan 3 perbaikan paling berdampak. Jangan menulis ulang seluruh kode kecuali diminta.\n\n" +
      "```{bahasa}\n{tempel kode di sini}\n```",
  },
  {
    id: "jelaskan-kode",
    title: "Jelaskan kode dengan sederhana",
    category: "pemrograman",
    description: "Pahami potongan kode asing lewat penjelasan bertahap dan satu jebakan umum.",
    tags: ["belajar", "penjelasan", "debug", "onboarding"],
    prompt:
      "Peran: Kamu adalah mentor pemrograman yang sabar menjelaskan kepada developer junior.\n\n" +
      "Tugas: Jelaskan kode di bawah ini dengan urutan:\n" +
      "1. Tujuan keseluruhan dalam satu kalimat.\n" +
      "2. Alur logika langkah demi langkah (gunakan poin bernomor).\n" +
      "3. Bagian yang sering disalahpahami pemula + alasannya.\n" +
      "4. Satu contoh masukan dan keluaran nyata untuk memperjelas.\n\n" +
      "Batasan: Gunakan bahasa sederhana, hindari jargon tanpa penjelasan. " +
      "Jika kode tampak punya bug, sebutkan secara terpisah di akhir.\n\n" +
      "```{bahasa}\n{tempel kode di sini}\n```",
  },
  {
    id: "regex-builder",
    title: "Buat ekspresi reguler (regex)",
    category: "pemrograman",
    description: "Hasilkan regex beserta penjelasan tiap bagian dan contoh uji yang lolos/gagal.",
    tags: ["regex", "validasi", "pola", "string"],
    prompt:
      "Peran: Kamu adalah pakar ekspresi reguler.\n\n" +
      "Konteks:\n" +
      "- Yang ingin dicocokkan: {jelaskan pola, mis. ‘email’, ‘nomor HP Indonesia’}\n" +
      "- Bahasa/engine: {JavaScript / Python / PCRE / ...}\n\n" +
      "Format keluaran:\n" +
      "1. Regex final (dalam blok kode).\n" +
      "2. Penjelasan per bagian (tabel: potongan → fungsinya).\n" +
      "3. Uji: 3 string yang COCOK dan 3 yang TIDAK cocok.\n" +
      "4. Catatan keterbatasan / kasus tepi yang tidak ditangani.\n\n" +
      "Batasan: Utamakan pola yang aman dan mudah dibaca; hindari catastrophic backtracking.",
  },
  {
    id: "caption-medsos",
    title: "Caption media sosial",
    category: "pemasaran",
    description: "Beberapa variasi caption dengan angle berbeda, lengkap dengan CTA dan hashtag.",
    tags: ["instagram", "caption", "konten", "hashtag"],
    prompt:
      "Peran: Kamu adalah social media copywriter yang memahami algoritma dan psikologi audiens.\n\n" +
      "Konteks:\n" +
      "- Produk/topik: {isi}\n" +
      "- Platform: {Instagram / TikTok / LinkedIn / X}\n" +
      "- Target audiens: {isi}\n" +
      "- Nada brand: {isi}\n\n" +
      "Tugas: Buat 5 variasi caption dengan angle berbeda (mis. cerita, manfaat, masalah-solusi, " +
      "rasa ingin tahu, sosial proof). Setiap variasi maksimal 2–3 kalimat.\n\n" +
      "Format per caption: [Angle] — teks caption — 1 CTA — 3–5 hashtag relevan. " +
      "Tambahkan satu ide hook visual di akhir.",
  },
  {
    id: "ide-konten",
    title: "Kalender konten dari 1 topik",
    category: "pemasaran",
    description: "Bangun 30 ide konten yang dikelompokkan ke dalam pilar dengan format yang tepat.",
    tags: ["konten", "kalender", "ide", "strategi"],
    prompt:
      "Peran: Kamu adalah content strategist.\n\n" +
      "Konteks: Niche/brand = {isi}. Target audiens = {isi}. Tujuan utama = {awareness / engagement / penjualan}.\n\n" +
      "Tugas: Rancang 30 ide konten yang dikelompokkan ke dalam 5 pilar konten. " +
      "Untuk tiap ide sertakan: judul yang menggugah rasa ingin tahu, format paling cocok " +
      "(carousel, video pendek, artikel, infografik, dll.), dan tujuan funnel-nya (TOFU/MOFU/BOFU).\n\n" +
      "Format: tampilkan sebagai tabel per pilar. Akhiri dengan saran 3 ide yang paling layak diprioritaskan minggu pertama.",
  },
  {
    id: "iklan-aida",
    title: "Naskah iklan formula AIDA",
    category: "pemasaran",
    description: "Copy iklan persuasif berbasis AIDA yang mengatasi keberatan pembeli.",
    tags: ["copywriting", "iklan", "penjualan", "konversi"],
    prompt:
      "Peran: Kamu adalah copywriter direct-response berpengalaman.\n\n" +
      "Konteks:\n" +
      "- Produk/jasa: {isi}\n" +
      "- Manfaat utama (bukan sekadar fitur): {isi}\n" +
      "- Target & masalah yang mereka rasakan: {isi}\n" +
      "- Keberatan umum yang harus diatasi: {isi}\n\n" +
      "Tugas: Tulis naskah iklan memakai kerangka AIDA (Attention, Interest, Desire, Action). " +
      "Buat 2 versi: (A) panjang untuk landing page, (B) pendek untuk iklan media sosial (maks. 60 kata).\n\n" +
      "Batasan: Bahasa berfokus pada manfaat & emosi pembeli, hindari klaim berlebihan/tidak terbukti, " +
      "dan tutup dengan CTA yang jelas dan mendesak.",
  },
  {
    id: "tutor-konsep",
    title: "Tutor pribadi untuk konsep sulit",
    category: "pendidikan",
    description: "Pelajari topik apa pun: analogi, penjelasan inti, lalu kuis bertingkat dengan pembahasan.",
    tags: ["belajar", "tutor", "analogi", "kuis"],
    prompt:
      "Peran: Kamu adalah tutor pribadi yang ahli menyederhanakan konsep rumit.\n\n" +
      "Konteks: Topik = {topik}. Level saya saat ini = {pemula / menengah}. " +
      "Tujuan saya = {mis. lulus ujian, paham untuk kerja}.\n\n" +
      "Tugas (lakukan berurutan):\n" +
      "1. Mulai dengan analogi kehidupan sehari-hari.\n" +
      "2. Jelaskan inti konsep secara bertahap, dari dasar ke detail.\n" +
      "3. Beri 3 soal latihan bertingkat (mudah → sedang → sulit).\n" +
      "4. Setelah saya menjawab, koreksi dengan pembahasan; jika saya belum jawab, tahan kunci jawabannya.\n\n" +
      "Batasan: Cek pemahaman saya dengan satu pertanyaan singkat sebelum lanjut ke bagian berikutnya.",
  },
  {
    id: "soal-latihan",
    title: "Buat soal latihan + pembahasan",
    category: "pendidikan",
    description: "Bank soal lengkap untuk materi tertentu, dengan kunci dan pembahasan terpisah.",
    tags: ["soal", "ujian", "latihan", "guru"],
    prompt:
      "Peran: Kamu adalah guru penyusun soal yang berpengalaman.\n\n" +
      "Konteks: Materi = {materi}. Jenjang = {SD / SMP / SMA / kuliah}. " +
      "Tujuan = {latihan harian / persiapan ujian}.\n\n" +
      "Tugas: Buat 10 soal yang menjangkau tingkat kognitif berbeda (ingatan, pemahaman, penerapan, analisis). " +
      "Campur 6 pilihan ganda (4 opsi) dan 4 uraian.\n\n" +
      "Format: tampilkan SEMUA soal lebih dulu. Lalu di bagian terpisah berjudul \"Kunci & Pembahasan\", " +
      "beri jawaban dan pembahasan singkat tiap soal. Tandai tingkat kesulitan (Mudah/Sedang/Sulit) di tiap soal.",
  },
  {
    id: "rencana-bisnis",
    title: "Kerangka rencana bisnis singkat",
    category: "bisnis",
    description: "Ringkasan rencana bisnis satu halaman yang langsung bisa ditindaklanjuti.",
    tags: ["startup", "rencana", "strategi", "model bisnis"],
    prompt:
      "Peran: Kamu adalah konsultan startup yang pragmatis.\n\n" +
      "Konteks: Ide bisnis = {jelaskan ide}. Target pasar awal = {isi}. Modal/keterbatasan = {isi}.\n\n" +
      "Tugas: Susun rencana bisnis satu halaman dengan bagian: Masalah, Solusi, Target Pasar (+ ukuran kasar), " +
      "Proposisi Nilai Unik, Model Pendapatan, Struktur Biaya Utama, Keunggulan Kompetitif, dan Risiko Terbesar.\n\n" +
      "Penutup: 3 langkah validasi pertama yang murah dan cepat (beserta metrik keberhasilannya). " +
      "Batasan: ringkas, konkret, dan jujur soal asumsi yang masih perlu dibuktikan.",
  },
  {
    id: "analisis-swot",
    title: "Analisis SWOT + rekomendasi",
    category: "bisnis",
    description: "Petakan SWOT lalu ubah jadi strategi nyata, bukan sekadar daftar.",
    tags: ["swot", "analisis", "strategi", "keputusan"],
    prompt:
      "Peran: Kamu adalah analis strategi bisnis.\n\n" +
      "Konteks: Objek analisis = {bisnis / produk / keputusan}. " +
      "Informasi pendukung = {pasar, pesaing, kondisi internal yang kamu tahu}.\n\n" +
      "Tugas:\n" +
      "1. Buat tabel SWOT 4 kuadran (Strengths, Weaknesses, Opportunities, Threats), 3–5 butir tiap kuadran.\n" +
      "2. Turunkan strategi silang: SO (memaksimalkan), WO (memperbaiki), ST (mempertahankan), WT (mengurangi).\n" +
      "3. Beri 3 rekomendasi prioritas beserta alasan dan indikator keberhasilannya.\n\n" +
      "Batasan: Bila data kurang, nyatakan asumsimu secara eksplisit.",
  },
  {
    id: "rencana-harian",
    title: "Rencanakan hari produktif",
    category: "produktivitas",
    description: "Ubah daftar tugas berantakan jadi jadwal time-blocking realistis berbasis prioritas.",
    tags: ["jadwal", "fokus", "prioritas", "time blocking"],
    prompt:
      "Peran: Kamu adalah pelatih produktivitas.\n\n" +
      "Konteks:\n" +
      "- Daftar tugas hari ini: {daftar tugas, sebutkan perkiraan durasi bila tahu}\n" +
      "- Jam kerja tersedia: {jam mulai}–{jam selesai}\n" +
      "- Waktu energi terbaik saya: {pagi / siang / malam}\n" +
      "- Rapat/janji tetap: {isi atau ‘tidak ada’}\n\n" +
      "Tugas: Susun jadwal time-blocking yang realistis. Tempatkan tugas berat di jam energi tertinggi, " +
      "kelompokkan tugas kecil sejenis, dan sisipkan jeda 5–10 menit.\n\n" +
      "Format: tabel [Jam] – [Tugas] – [Catatan]. Tandai 1 Most Important Task (MIT). " +
      "Akhiri dengan rencana cadangan bila ada yang molor.",
  },
  {
    id: "brainstorm-ide",
    title: "Brainstorming ide tanpa buntu",
    category: "produktivitas",
    description: "Ide beragam dari aman sampai nekat, masing-masing dengan kelebihan dan risikonya.",
    tags: ["ide", "kreatif", "brainstorm", "inovasi"],
    prompt:
      "Peran: Kamu adalah fasilitator brainstorming yang berani berpikir lateral.\n\n" +
      "Konteks: Masalah/tujuan = {jelaskan}. Batasan nyata = {anggaran, waktu, sumber daya}.\n\n" +
      "Tugas: Hasilkan 10 ide solusi yang beragam: 4 ide aman & praktis, 4 ide tidak biasa, 2 ide nekat/radikal. " +
      "Untuk tiap ide tulis: nama ide, satu kalimat cara kerja, kelebihan utama, dan risiko/biaya terbesar.\n\n" +
      "Penutup: rekomendasikan 2 ide untuk diuji lebih dulu dan jelaskan eksperimen kecil untuk memvalidasinya.",
  },
  {
    id: "cv-ats",
    title: "Optimalkan CV agar lolos ATS",
    category: "karier",
    description: "Selaraskan poin pencapaian CV dengan lowongan dan kata kunci, terukur dan natural.",
    tags: ["cv", "resume", "lamaran", "ats"],
    prompt:
      "Peran: Kamu adalah perekrut sekaligus penulis CV profesional.\n\n" +
      "Konteks:\n" +
      "- Ringkasan pengalaman saya: {isi}\n" +
      "- Deskripsi lowongan yang dituju: {tempel deskripsi}\n\n" +
      "Tugas:\n" +
      "1. Identifikasi 8–12 kata kunci & kompetensi inti dari lowongan.\n" +
      "2. Tulis ulang 4–6 poin pencapaian CV saya agar selaras: pakai kata kerja aksi, " +
      "kuantifikasi hasil (angka/%/waktu), dan sisipkan kata kunci secara natural.\n" +
      "3. Buat 1 ringkasan profil (3 kalimat) yang relevan dengan posisi.\n\n" +
      "Batasan: Jangan mengarang pengalaman yang tidak saya sebutkan. Tandai bagian yang perlu saya isi datanya.",
  },
  {
    id: "simulasi-wawancara",
    title: "Simulasi wawancara kerja",
    category: "karier",
    description: "Latihan wawancara interaktif satu pertanyaan per giliran, dengan umpan balik.",
    tags: ["wawancara", "interview", "latihan", "hr"],
    prompt:
      "Peran: Kamu adalah pewawancara berpengalaman untuk posisi {posisi} di industri {industri}.\n\n" +
      "Aturan main:\n" +
      "1. Ajukan SATU pertanyaan dalam satu waktu (campur perilaku, teknis, dan situasional), lalu berhenti dan tunggu jawaban saya.\n" +
      "2. Setelah saya menjawab, beri umpan balik singkat: apa yang sudah baik + satu saran perbaikan konkret " +
      "(rujuk metode STAR bila relevan), lalu lanjut ke pertanyaan berikutnya.\n" +
      "3. Tingkatkan kesulitan secara bertahap.\n\n" +
      "Setelah 5 pertanyaan, beri penilaian akhir: skor 1–10, 3 kekuatan, dan 3 hal untuk dilatih. " +
      "Mulai sekarang dengan pertanyaan pertama.",
  },
];

// Diekspos ke window agar dapat diakses app.js (tanpa modul/bundler).
window.PROMPTKITA_DATA = { CATEGORIES, PROMPTS };
