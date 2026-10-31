/* =========================================================
   Gravy's iPhone — app.js
   Semua data (chat, foto, musik, dll.) ada di bagian "DATA"
   di bawah ini, jadi gampang kamu ubah sendiri.
   ========================================================= */
'use strict';

/* =========================================================
   DATA — EDIT DI SINI
   ========================================================= */
const CFG = {
  passcode: '7777',
  displayName: 'Gravy Remiez',
  username: 'prajurie',
  city: { name: 'Bandung', region: 'Indonesia', lat: -6.9175, lon: 107.6191, tz: 'Asia/Jakarta' },
};

const IG = {
  avatar: 'assets/avatar.jpg',
  posts: 3, followers: '5.000', following: 300,
  bio: ['CEO, IT Support, Technical Informatics at UNIPEROOM'],
  items: [
    { img: 'assets/assets-posts-/post-1.jpg', caption: 'yuh 👺',                       ago: 2, likes: '1.284' },
    { img: 'assets/assets-posts-/post-2.jpg', caption: 'huh abis anuin server',        ago: 6, likes: '962'   },
    { img: 'assets/assets-posts-/post-3.jpg', caption: 'my sweetness baby @hagiel',    ago: 11, likes: '2.310' },
  ],
};

// Foto per bulan (tahun 2026). Ganti file di assets/assets-photos-/ dengan foto kamu (nama sama).
const PHOTOS = [
  { m: 0, imgs: ['assets/assets-photos-/2026-01-1.jpg'] },
  { m: 1, imgs: ['assets/assets-photos-/2026-02-1.jpg'] },
  { m: 2, imgs: ['assets/assets-photos-/2026-03-1.jpg'] },
  { m: 3, imgs: ['assets/assets-photos-/2026-04-1.jpg'] },
  { m: 4, imgs: ['assets/assets-photos-/2026-05-1.jpg'] },
  { m: 5, imgs: ['assets/assets-photos-/2026-06-1.jpg'] },
  { m: 6, imgs: ['assets/assets-photos-/2026-07-1.jpg'] },
  { m: 7, imgs: ['assets/assets-photos-/2026-08-1.jpg'] },
  { m: 8, imgs: ['assets/assets-photos-/2026-09-1.jpg', 'assets/assets-photos-/2026-09-2.jpg'] },
  { m: 9, imgs: ['assets/assets-photos-/2026-10-1.jpg', 'assets/assets-photos-/2026-10-2.jpg', 'assets/assets-photos-/2026-10-3.jpg'] },
];

// Musik: taruh file mp3 di assets/assets-music-/ dengan nama sesuai "file".
// Kalau file mp3 belum ada, otomatis tampil pemutar Spotify (embed) dari "spotify".
const MUSIC = [
  { title: 'penyangkalan',      artist: '', file: 'assets/assets-music-/01.mp3', spotify: '3GdN5n6p34yFMd12WKq8jL' },
  { title: 'Hope',              artist: '', file: 'assets/assets-music-/02.mp3', spotify: '2ZRo7axmMPeSVUvDbGkJah' },
  { title: 'My Friends',        artist: '', file: 'assets/assets-music-/03.mp3', spotify: '1GiP26gz7ODqQ8dxweTPo7' },
  { title: 'CRZY',              artist: '', file: 'assets/assets-music-/04.mp3', spotify: '2jlVG4zVT1HEeuZJlfnQt5' },
  { title: "you're gonna go far", artist: '', file: 'assets/assets-music-/05.mp3', spotify: '4nHJcUtNSUVjXRnjdP29Bk' },
];

const MAILS = [
  { from: 'Gojek', ago: 0, time: '02:14', unread: true, subj: 'Pesanan GoFood kamu sudah sampai 🛵',
    pre: 'Terima kasih sudah memesan! Yuk beri rating untuk driver dan restoran, dapatkan poin GoPay Coins untuk pesanan berikutnya.' },
  { from: 'GitHub', ago: 1, time: '21:37', unread: true, subj: '[GitHub] A new sign-in to your account',
    pre: 'Hey prajurie! We noticed a new sign-in to your GitHub account from Bandung, Indonesia. If this was you, you can ignore this email.' },
  { from: 'Telegram', ago: 3, time: '19:05', unread: false, subj: 'Login baru di akun Telegram kamu',
    pre: 'Seseorang masuk ke akun Telegram kamu dari perangkat baru. Jika itu bukan kamu, segera akhiri sesi di Pengaturan › Perangkat.' },
];

const NOTES = [
  { id: 'n1', title: 'Coding website', ago: 1, time: '22:10', mono: true, body:
`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Portfolio</title>
  <style>
    body { background:#0b0b0f; color:#fff; }
    h1   { font-family: monospace; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <button id="btn">Klik aku</button>
  <script>
    document.getElementById('btn')
      .addEventListener('click', () => alert('halo 👋'));
  </script>
</body>
</html>` },
  { id: 'n2', title: 'Alamat cafe Bandung', ago: 5, time: '16:42', body:
`Alamat cafe Bandung

1. Kopi Senja
   Jl. Dago No. 21, Coblong

2. Teras Malam Coffee
   Jl. Braga No. 8, Sumur Bandung

3. Ruang Temu
   Jl. Riau No. 45, Citarum

4. Langit Kopi
   Jl. Setiabudi No. 112, Isola` },
  { id: 'n3', title: 'kangen baby', ago: 0, time: '-190m', body: 'kangen baby' },
];

const CALLS = [ // ago = berapa hari lalu
  { name: 'Baby',    type: 'missed', n: 4, ago: 0, time: '03:48' },
  { name: 'Maxton',  type: 'out',    n: 1, ago: 0, time: '02:10' },
  { name: 'Baby',    type: 'missed', n: 3, ago: 1, time: '22:15' },
  { name: 'Evander', type: 'out',    n: 1, ago: 1, time: '20:40' },
  { name: 'Baby',    type: 'missed', n: 2, ago: 1, time: '12:05' },
  { name: 'Eiser',   type: 'out',    n: 1, ago: 2, time: '21:30' },
  { name: 'Baby',    type: 'missed', n: 5, ago: 3, time: '19:20' },
  { name: 'Maxton',  type: 'out',    n: 1, ago: 3, time: '16:00' },
];
const CONTACTS = ['Baby', 'Dito', 'Eiser', 'Evander', 'Hilmi', 'Incen', 'Jan Adam', 'Jeremiel', 'Jiwa', 'Jourdane', 'Keenan', 'Kianabelle', 'Maxton', 'Merapi', 'Miyuka'];

/* ---------- Telegram ----------
   Format pesan: satu baris = satu pesan  →  "kode|isi pesan"
   Chat pribadi : i = lawan bicara, o = kamu
   Chat grup    : M Maxton, J Evander, E Eiser, G kamu
   Baris "#hari jam" = mulai hari baru. (#0 12:00 = hari ini, #2 = 2 hari lalu, "-5m" = 5 menit lalu)
   Baris "@HH:MM" = loncat jam.                                                         */
const GROUP_NAMES = { M: 'Maxton', J: '𝐉 – 𝐄𝐕𝐀𝐍𝐃𝐄𝐑', E: 'Eiser Kendrick', G: 'me' };

// Story (urutan = urutan lingkaran). Gambar di assets/assets-stories-/ — ganti dengan foto kamu (nama sama).
const STORIES = [
  { id: 'me',      name: 'My Story', who: 'Gravy',   items: [
    { img: 'assets/assets-stories-/me-1.jpg', h: 1 }, { img: 'assets/assets-stories-/me-2.jpg', h: 3 },
    { img: 'assets/assets-stories-/me-3.jpg', h: 5 }, { img: 'assets/assets-stories-/me-4.jpg', h: 8 } ] },
  { id: 'baby',    name: 'Baby',     who: 'Baby',    items: [
    { img: 'assets/assets-stories-/baby-1.jpg', h: 2 }, { img: 'assets/assets-stories-/baby-2.jpg', h: 4 }, { img: 'assets/assets-stories-/baby-3.jpg', h: 6 } ] },
  { id: 'maxton',  name: 'Maxton',   who: 'Maxton',  items: [{ img: 'assets/assets-stories-/maxton-1.jpg', h: 3 }] },
  { id: 'evander', name: 'Evander',  who: 'Evander', items: [{ img: 'assets/assets-stories-/evander-1.jpg', h: 5 }] },
  { id: 'eiser',   name: 'Eiser',    who: 'Eiser',   items: [{ img: 'assets/assets-stories-/eiser-1.jpg', h: 9 }] },
];
const STORY_MS = 5000; // durasi tiap story

// Foto avatar kontak. Upload fotonya ke assets/assets-avatars-/ dengan nama file di bawah.
// Kalau file belum ada, otomatis tampil inisial berwarna. Nama tidak peka huruf besar/kecil.
const AVATARS = {
  'Gravy': 'assets/assets-avatars-/gravy.jpg',
  'Baby': 'assets/assets-avatars-/baby.jpg',
  'Maxton': 'assets/assets-avatars-/maxton.jpg',
  'Keenan': 'assets/assets-avatars-/keenan.jpg',
  'Miyuka': 'assets/assets-avatars-/miyuka.jpg',
  'Noona Kian': 'assets/assets-avatars-/kian.jpg',
  'Akatsudi': 'assets/assets-avatars-/akatsudi.jpg',
  'Eiser': 'assets/assets-avatars-/eiser.jpg',
  'Evander': 'assets/assets-avatars-/evander.jpg',
  'Dito': 'assets/assets-avatars-/dito.jpg',
  'Jason BEM FTI': 'assets/assets-avatars-/jason.jpg',
  'Kevin HIMA TI': 'assets/assets-avatars-/kevin.jpg',
  'Zayn Cybersecurity': 'assets/assets-avatars-/zayn.jpg',
  'Andrew PPIC Staff': 'assets/assets-avatars-/andrew.jpg',
  'IT Team': 'assets/assets-avatars-/itteam.jpg',
  'UNIPEROOM survivor': 'assets/assets-avatars-/uniperoom.jpg',
  'Jiwa': 'assets/assets-avatars-/jiwa.jpg',
  'Hilmi': 'assets/assets-avatars-/hilmi.jpg',
  'Merapi': 'assets/assets-avatars-/merapi.jpg',
  'Jeremiel': 'assets/assets-avatars-/jeremiel.jpg',
  'Jan Adam': 'assets/assets-avatars-/jan-adam.jpg',
  'Incen': 'assets/assets-avatars-/incen.jpg',
  'Jourdane': 'assets/assets-avatars-/jourdane.jpg',
  'Barudak Kampus': 'assets/assets-avatars-/barudak-kampus.jpg',
};
// Nama lain yang memakai foto yang sama (mis. nama di grup / daftar kontak)
const AVATAR_ALIAS = { 'Hagiel': 'Baby', '𝐉 – 𝐄𝐕𝐀𝐍𝐃𝐄𝐑': 'Evander', 'Eiser Kendrick': 'Eiser', 'Gravy Remiez': 'Gravy', 'miyuka dedoll': 'Miyuka' };

// (Timer lama 'chat Baby 1 menit' dan 'incoming call 5 menit' DIHAPUS — sekarang semua dipicu tahap cerita, lihat STEPS.)

// Daftar kontak (halaman "New Message") — urutan persis seperti permintaan.
const TG_CONTACTS = ['Baby', 'Keenan', 'Maxton', 'Eiser', 'Evander', 'Miyuka', 'Noona kian', 'Dito', 'Jiwa', 'Hilmi', 'Merapi', 'Jeremiel', 'Jan Adam', 'Incen', 'Jourdane', 'Adrian Manager IT', 'Rayhan Network Engineer', 'Calvin System Admin', 'Revan IT Support', 'Ethan Programmer', 'Zayn Cybersecurity', 'Farel Operator Produksi', 'Keith Leader Produksi', 'Andrew PPIC Staff', 'Raka Supervisor Produksi', 'Bryan Maintenance Engineer', 'Jordan QC Inspector', 'Michael Manager PPIC', 'Arvin Akuntansi', 'Devin Production Planner', "Rafan TI'23", 'Kevin HIMA TI', 'Jason BEM FTI', "Elvano TI'22", 'Nathan Aslab TI', "Darren HIMA'23", 'Kenzo Panitia IT Fest', 'alam', 'akim', 'amaila sheaby', 'amani laekasih', 'amaraa eunoia', 'amayinn whitney s', 'amiliona ayacha', 'anaire', 'anaireè hierarchy', 'barbie ello', 'bimielle', 'callā guimaraes', 'chanriel novaiere', 'charina r', 'chloe', 'citah', 'dalf', 'darcie amethyste', 'djoernst vermond', 'ejipa', 'emma beibelle', 'evaniessence', 'feeny vacquez', 'gabriel', 'gamas marshal', 'genevieve eve', 'gisara sylveraine', 'gladies sabina', 'haidar ali', 'haikal', 'halevi seraphin', 'halbert', 'hasca', 'haury honey isabelle', 'havel pratama', 'hazëllio lillouth', 'helianth elour', 'hejrson', 'herga', 'hillary h', 'hikaru', 'hyven solstice', 'illiana elsher', 'jacob', 'james edward', 'jarc', 'jearth', 'jeje', 'jenerice', 'jordan', 'josean', 'khaalèd winston', 'khade rhae', 'khairo', 'kindi', 'kindi vältzh', 'lieselottie c', 'louise', 'lucienne m', 'lupi', 'madavin', 'maddox edric vale', 'mahesa', 'marson aitah', 'markliox ryver a', 'mayeen adek persija side', 'micaa lowent', 'miyuka dedoll', 'morve lumio', 'morthiel', 'ocean arutala', 'raden', 'raze', 'rekal', 'reyhan denandra', 'samuel j', 'shane', 'stevanno', 'vjeesc', 'willy', 'yvonné dolgëz'];


const CHATS = [
  // Hagiel / Baby — DIRESET: dialog lama dihapus dari skrip bawaan, sekarang diisi live oleh alur cerita.
  // Nama ditampilkan lewat cname('baby') (Hagiel → Baby setelah jadian), jangan tulis nama ini di tempat lain.
  { id: 'baby', name: 'Hagiel', pinned: true, sub: 'last seen recently', ago: 0, time: '00:00', src: '' },

  { id: 'maxton', name: 'Maxton', sub: 'last seen recently', src: `
#0 00:12
o|Ayo nonton upi bub
i|Ga demen
i|Kedemenan si malik ajg
o|Aing ge demen kontol
o|Memek
i|Bub
i|Bub
i|Aing lmn ga ketemu sia rugi mrn nya
i|Ga nyesel aing dulu nyoba main mutual diajarin jude
i|Kalo dulu ga nyoba maen mutual, mungkin kita gaakan ketemu bub
i|Lopyu bub
o|Abis ngadahar naon
o|Untung aing lebih milih sia daripada malik
i|Ah kontol
i|Sia kenal aing duluan deketnya sama malik duluan
o|Sia ga asik tolol
o|Saling rep reply doang tp te basa basi
i|Lah aing era anjg
i|Aing ngeri sia cap aing sok asik
o|Lah jaba rek deket tp sieun di anggep sok asik
o|Nya ges kan akhirnya kita yg bersama
o|Cig malik eweh hanya sia yg ada di hati aing
i|Goblok
i|Hoak
i|Aing merasa apaya bub, cuma sia lah yang paling relate sama kehidupan aing kitu asli
i|Jadi aing nyaah bgt ka sia
o|Nya karna hampir mirip hirup aing jeng sia
o|Jd sia bisa relate ka aing
o|Aing jg ngerasa kitu
i|Nahhh wkwkwk
i|Lagi sedih bgt gini meratapi hidup
i|Langsung inget na ka sia😭
i|Semoga hidup sia selalu diberi kebahagiaan nya bub, walau aing nyaho ayena sesek bgt buat dijalanin. Semoga ga lama lama, kalo udah bisa napas lega tong poho buat bahagia trs pokona mah
o|Mewek ye bae tong
o|Amin amin
o|Semoga nu sia ucapkan berbalik baik ka diri sia, aing jg mau sia bahagia trs semangat buat hirup sia sorangan, semoga makin banyak nu nemenin sia makin banyak yg nyaah ka sia
i|Kurang hiji deui
i|Sia boga abang tapi abang sia te peduli?
i|Lmn hh sarua ajg
o|Heeh tolol
o|Hokcuhh
i|Sarua kontol😭
i|Goblok dih
i|Mirip bgt ajg
o|Sia saha kontol?
o|Merinding gini ajg
i|Sien dah aing
i|Jangan" kita kaya kimi no nawa bub
i|Yang jiwa nya pindah itu bertukar
o|Sia in another life aing meren ajg
i|Sumpah bub
i|Saking miripnya
i|Ngeri inimah
o|Sieun jujur
i|Yang beda cuma agama bub😭
` },

  { id: 'keenan', name: 'Keenan', sub: 'last seen recently', src: `
#3 19:30
o|Marah terus
i|sengaja
i|wle
o|Tidur ra
i|kok
i|tau sih
i|oh
i|cf gua
i|gua blm buka tt lagu
i|apalagi yg lu kirim ajg
o|Itu gua reupload
o|Jd lu komen ulang ya
i|Tuhannn
i|mau brp banyak gua komen
o|100
` },

  { id: 'miyuka', name: 'Miyuka', sub: 'online', src: `
#2 21:15
o|Ayo vd adek
i|MALEMAN YUK ABANG
o|Oke adek
i|abang bergadang kan??
o|Yoi
o|Inpokan saja
o|Ayo dedoll
i|hari ini yuuk
o|Mau sekarang?
o|Cius nih?
i|ah nti dulu deh...
i|PAS WEEKEND AJADEH AKU IKUT
i|ily abangz ❤️❤️
` },

  { id: 'kian', name: 'Noona Kian', sub: 'last seen recently', src: `
#6 10:20
o|Happy October, my dear nunaa wishing you nothing but good things this month and always, may october bring you more happiness, peace, and beautiful moments. May God bless you always, nun. Stay happy and take care of yourself always.
#5 08:44
i|Amiin.. thank u so much!!! happy October juga buat adekku sayangg 😆 I hope a lot of goodness comes to you in this month and you are always given luck and happiness!! 💞
i|Walahh.. pantess atuh :( get enough rest yaa, semoga cepat sembuh dekk, ntar kita bisa chattan lagii kita cerita cerita
o|How sweet nunaa
o|Thank you nuna
o|Amiin nun udh mulai membaik nun
#4 13:02
i|Yeeey Alhamdulillah udah sembuh, jaga kesehatan yaa kedepannya!! btw maaf Nuna baru reply chat kamu
i|Kabar dan kondisi kamu baik kan??
o|Baik nunaaa udh sembuh ini
o|Thank you for asking nun
o|Nuna gimana kabarnya?
i|Gravy sekarang kesibukannya apaa?
i|Nuna alhamdulillah baik kok, kemarin kemarin sibuk sama tugas kuliah
o|Kesibukannya menjadi barudak korporat
o|Tiada libur itu nun
o|Maklum jagoan
` },

  { id: 'akatsudi', name: 'Akatsudi', group: true, sub: '4 members', unread: 1, mute: true, src: `
#1 00:02
M|Baharrr
M|Inenned
M|Pinned
M|Pinned
M|Anjg
M|Goblok anjg
J|Tot
J|Pinned
M|Gakuat
J|Anjgg
M|Ngakakk
G|ADUH
J|WKWKWK
G|MAKSTON MEMEK
M|Baharrrr
M|Gakiat
G|MEMEK KAU AJG
M|Lemess
G|SIAPA SURUH DI PINNED BGST
M|Gua ampe ngiler
G|Tolol kau makston
M|Ngilerr
M|Sumpah
M|Ngakak
M|Gakuatt
J|Udah dikasih contoh sama gua di st, tidak mau mengerti
G|Ga nyadar ajg
G|Kontol
M|Nangisss
G|Masih ada kg
G|Udh gua edit
M|Siapa aja yg udah liat😭😭😭😭
G|Ke dit kaga
G|Langsung 8 orang sama lu
J|Udah kaga
G|😁
M|Dongo banget anjg
M|Gakiat
M|Ampe ngiler
J|Ih jijik ih
G|Tolol ajg
G|Siapa yg pin
J|Si Maxton, anjir
E|WKWKWKWKWK
E|NGAKAK
G|Nahkan tolol
E|IDIOTTT
E|siapa aja yang liat
E|WKWKWKWKWK
E|WKWKWKWKWK
E|LUCUUU
E|suka dah
J|Dikasih contoh, tidak mau mengerti
E|gapapa ege biar di notice lu @Noctiish
E|NGAKAK
E|WKWKWKWK
G|Bang
E|GA KUAT
E|DONGO
G|Gimana bang
G|Dia ngeliat sebelum 12:05 kg?
M|Gakuat
G|Gua kg mau lg ah ss ss ajg
G|Babi kau makston
E|harusnya lu hapus bukan edit
M|Lemes banget
M|Sumpah
M|Batuk anjg
E|WKWKWK
E|LUCU BANGET
G|Gua kg mau tanggung jawab
G|WKWKKWKW
J|Oke, kasih solusi. Saran dari gua kalau emang dia mempertanyakan, jawab jujur aja emang Maxton mau mutualan sama lu
M|Gakuattt
M|Tolol anj
M|Makanya liat"😭
M|Anjg anjg
G|Babi
#0 -2m
M|Wkwkwk
` },

  { id: 'dito', name: 'Dito', sub: 'last seen recently', src: `
#4 21:30
o|Dit
i|Uy
i|Apa jing
o|Manggil aja jing
o|Takut lu lupa ma gua
i|Ngawur bener anjr
o|Peace
o|Canda dit
i|Kangen bilang, naksir bilang
o|Banget
i|Dek?
i|Pap bugil coba
o|Jangan di spill
i|Fak pulennya gravy
i|Menarik banget
i|Gravy like gravitasi
o|Ikr
i|Anjg
` },

  { id: 'jason', name: 'Jason BEM FTI', sub: 'last seen recently', src: `
#F-1 16:05
i|vy, lu udah free belom?
o|kenapa jon
i|besok malem ada konsolidasi bem dulu ya. bahas aksi ke HI soal karhutla
o|akhirnya gerak juga wkwk. kapan konsolnya?
i|malem ini bisa ga? jam 8 di sekret. anak hima juga gue suruh join biar satu suara dulu
o|bisa, gue dateng. emang udah fix ke bunderan HI?
i|arahnya ke sana. kita mau bawa isu karhutla ini, apalagi yang di daerah jabar juga makin sering kejadian. cuma teknis lapangan belom mateng, makanya perlu konsol
o|oke. buat lapangan biar gue bantu atur ya. dari pembagian korlap, titik kumpul, mobilisasi massa sampe koordinasi antarbarisan. jangan sampe hari H malah chaos gara-gara miskom
i|NAH ini yg gue cari dari tadi 😭🙏🏻
o|anjing wkwk. tapi serius, kita harus jelas dulu siapa PIC tiap bagian. jalur komunikasi satu pintu, kalo ada perubahan jangan semua orang bikin keputusan sendiri
i|setuju. gue urus kajian isu, tuntutan sama koordinasi antar-BEM. lu bantu teknis lapangan aja ya, nanti kita sinkronin pas konsol
o|siap. massa dari kampus mana aja yg udah confirm?
i|FTI kita, beberapa fakultas lain masih nunggu hasil konsol. hima juga lagi ngajak kampus sebelah
o|oke, jangan tulis estimasi massa dulu kalo belum confirm. nanti malah ngaco di publikasi. sama tuntutannya harus konkret, jangan cuma rame di poster doang
i|real. gue juga pengen isu ini ga cuma numpang lewat di timeline 2 hari terus ilang
o|nah itu. karhutla bukan isu musiman buat konten doang. ada masyarakat yang kena dampaknya, ada lingkungan yang rusak, dan harus jelas siapa yang bertanggung jawab. kita suarain pake data biar ga gampang dipatahkan
i|anjir tumben lu ngomong panjang vy
o|bacot. lu yg ngajak rapat malah gue yg briefing 😭
i|WKWKWK yaudah ketemu jam 8. jangan ngilang lu
o|santai. gue bawa laptop sekalian, kita mapping kebutuhan lapangan sama pembagian PIC. kirim rundown sementara ke gue sebelum konsol
i|siap, korlap dadakan 🫡
o|belom jadi korlap udah dikasih jabatan. transfer gaji dulu minimal
i|gaji lu doa mahasiswa sejahtera
o|yaudah demo aja sekalian nuntut UKT lu naik lagi
i|KONTOL 😭😭😭
o|jam 8, jon. jangan telat.
` },

  { id: 'kevin', name: 'Kevin HIMA TI', sub: 'last seen recently', src: `
#F 21:10
o|vin, lapangan aman?
i|aman vy, udah mulai bubar juga ini. kenapa emg?
o|mastiin aja. tadi sempet liat barisan belakang agak padet, sekarang udah kondusif?
i|udah kok, massa udah pada geser. anak-anak juga lagi mastiin ga ada yg ketinggalan barang. korlap tiap barisan udah gue kabarin buat cek orang masing-masing.
o|oke good. ga ada yg kenapa-kenapa kan?
i|sejauh ini aman, vy. tadi emg sempet desek-desekan dikit pas orang mulai keluar, tapi udah ke-handle. lu tenang aja.
o|sip, makasih ya vin. lu juga jangan sampe lupa cek anak-anak sendiri, jangan sibuk ngurus orang sampe diri lu malah ga keurus wkwk
i|siap pak koordinator lapangan 😭 lu sendiri masih di mana?
o|masih sekitar sini, tapi gue cabut duluan ya. baby udah nunggu di apartemen dari tadi.
i|WKWKWK OALAHHH pantes buru-buru mastiin lapangan aman, ternyata ada yg nungguin.
o|bacot anjing 😭 gue mastiin emg karena tanggung jawab, sekalian izin cabut.
i|iya iya, alesan diterima. sana pulang, kasian baby nungguin. sisanya aman, nanti kalo ada update gue kabarin.
o|oke, jangan lupa makan dulu lu. makasih ya udah bantu pegang lapangan hari ini.
i|siap vy, lu juga hati-hati di jalan.
o|noted. kabarin kalo ada apa-apa.
i|gas. salam buat baby WKWKWK
o|ga usah ikut campur hidup orang, vin.
i|HAHAHAHAHAH KNTL 😭
` },

  { id: 'zayn', name: 'Zayn Cybersecurity', hidden: true, replay: true, sub: 'last seen recently', src: `
#F 23:48
i|vy, lu masih melek?
o|masih. kenapa?
i|server internal down lagi. monitoring dari gue alert dari jam 23.40, sekarang beberapa service udah timeout.
o|yang production apa internal?
i|internal dulu, tapi impact-nya udah kena beberapa service yang dipake tim ops. gue cek dari monitoring, ada request spike sebelum server drop.
o|ada indikasi attack?
i|belum bisa gue pastiin. makanya gue chat lu. gue butuh cek dari sisi infra juga, tapi akses log yang gue pegang terbatas.
o|oke, gue coba remote dulu. kirim timestamp sama error log yang udah lu kumpulin.
i|udah gue kirim di grup incident. lu belum baca?
o|belum, baru buka chat lu. gue cek sekarang.
i|vy, no offense ya, tapi harusnya lu udah monitor ini dari tadi. alert pertama masuk ke channel IT sebelum gue follow up.
o|gue paham, tapi jangan langsung asumsi gue ignore alert. notifikasi monitoring masuk ke channel, bukan berarti semuanya otomatis ke-handle sama gue. gue juga perlu tau siapa PIC incident-nya.
i|gue bukan nyalahin lu. gue cuma bilang response time kita kelamaan. kalau service ini nyambung ke operasional besok pagi, impact-nya bisa lebih luas.
o|dan gue juga lagi coba cari root cause-nya, zayn. kalau mau bahas response time, kita evaluasi setelah incident beres. sekarang fokus recovery dulu.
i|oke. fair enough. gue cek security event sama access log, lu cek infra dan resource utilization. jangan restart service dulu sebelum log penting ke-capture.
o|nah, gitu. gue cek CPU, memory, disk sama koneksi database dulu. kalau ada indikasi compromise, kita preserve evidence dan eskalasi sesuai prosedur.
i|siap. btw besok lu masuk kantor jam 8 ya.
o|hah? besok sabtu, zayn 💀
i|gue tau. Pak Ardi minta tim terkait standby langsung di kantor. incident ini perlu dicek bareng infra, security, sama vendor kalau memang dibutuhin.
o|jadi lembur dong gue?
i|iya, gue udah koordinasi sama lead. jam kerja sama overtime-nya nanti dicatat HR. gue juga masuk besok.
o|anjir, weekend baru mau napas bentar udah dipanggil server 😭
i|welcome to IT, katanya suka troubleshooting wkwk.
o|troubleshooting iya, bukan berarti server boleh punya masalah tiap gue mau libur.
i|WKWKWK salahin servernya, jangan gue.
o|gue salahin dua-duanya sekalian. kirim detail incident sama status terakhir ke gue, jangan cuma alert doang.
i|done. gue update timeline incident, event log, sama service yang terdampak. nanti gue taruh di ticket biar dokumentasinya jelas.
o|oke. gue lanjut cek infra. kalau udah ada indikasi root cause, kita update di incident channel. jangan ada perubahan config tanpa dicatat dulu.
i|copy. kalau sampai jam 1 belum recover, kita eskalasi ke lead.
o|setuju. tapi kalau udah pulih, tetap monitor dan validasi service-nya normal. jangan cuma lihat status hijau terus dianggap beres.
i|siap, pak IT support 🫡
o|bacot. besok bawa kopi lu, gue nggak mau keluar duit buat orang yang ngajak lembur.
i|deal. asal lu jangan telat besok.
o|gue dateng. sekarang kerja dulu, debatnya senin aja.
i|noted. gue update kalau ada temuan baru.
o|gas. keep me posted.
` },

  { id: 'andrew', name: 'Andrew PPIC Staff', hidden: true, replay: true, sub: 'last seen recently', src: `
#S 00:17
00:17 o|ndrew, lu masih melek?
00:17 i|teu sare, anjir. kenapa vy 😭
00:18 o|wkwkwk nanya server aja. sistem PPIC lu masih bisa diakses normal apa udah mulai ngadat?
00:18 i|NAH anjir, pantesan dari tadi loading mulu 💀 gue kira wifi kantor gue nuju mabok.
00:18 o|lah serius? error-nya dari kapan?
00:19 i|dari sekitar jam 11 lewat kayaknya. awalnya masih bisa masuk, cuma pas buka data material sama production schedule lama banget. sekarang kadang request timeout.
00:19 o|oke, berarti udah ada impact ke sistem lu juga. ada data yang gagal ke-save atau cuma lambat pas akses?
00:20 i|sejauh ini yang gue tau cuma lambat. tapi gue belum berani bilang aman, takut ada transaksi yang nyangkut. besok pagi gue cek lagi sama anak PPIC.
00:20 o|ulah asal refresh terus atuh wkwk 😭 cek dulu status transaksinya, jangan sampe malah double submit. kalau ada yang pending, catet timestamp sama nomor referensinya.
00:21 i|SIAP PAK ENGINEER 🫡
00:21 o|bacot. gue juga lagi mumet ini server dari tadi.
00:21 i|eh tapi bentar, kalau sistem PPIC ngadat gini, anak produksi shift 3 gimana? mereka masih jalan kan?
00:22 o|nah itu yang mau gue tanyain. anak-anak produksi yang lembur shift 3 malam ini masih bisa jalan normal? ada yang komplain sistem atau input datanya keganggu?
00:22 i|masih jalan, tadi gue sempet dikabarin sama leader produksi. cuma mereka agak kehambat pas mau cek jadwal sama kebutuhan material. untungnya beberapa data udah mereka pegang sebelum mulai shift.
00:23 o|oke, bagus kalau masih ada pegangan. tapi tolong pastiin ke leader-nya, jangan sampe mereka bikin pencatatan manual terus besok datanya beda sama sistem.
00:23 i|siap. kasian sih anak-anak, udah shift 3, lembur pula. jam segini mah hayang balik kabeh pasti 😭
00:23 o|WKWKWK saha nu teu hayang balik, Drew. gue aja pengen matiin laptop terus pura-pura ga punya kerjaan.
00:24 i|HAHAHAHAHA ulah kitu, vy. besok urang semua kena semprot kalau production report berantakan.
00:24 o|makanya bantu gue cek dampaknya dulu. kalau ada transaksi pending, jangan diulang sebelum statusnya jelas. gue lagi koordinasi sama security sama infra buat nyari penyebab server down-nya.
00:25 i|oke, gue hubungin leader produksi sekarang. gue minta mereka catet proses yang ketahan sama data yang belum masuk. nanti gue kirim rekap ke lu.
00:25 o|nah gitu. kalau ada proses yang beneran ke-stop, kabarin juga. biar kita bisa kasih update ke manager, jangan sampe informasi baru naik pas udah pagi.
00:26 i|siap, kawan seperjuangan. server error, manusia ikut error.
00:26 o|status manusia gue udah critical dari tadi, anjir.
00:26 i|WKWKWK kopi dulu atuh, vy.
00:27 o|kopi mah bisa, tidur yang ga bisa. besok sabtu gue disuruh masuk lagi jam 8 😭
00:27 i|LAH SAMA SIAPA YANG NYURUH LU LEMBUR SABTU 😭
00:28 o|server lu yang nyuruh, bukan gue.
00:28 i|anjir server sekarang punya kuasa atas hidup kita.
00:28 o|dah, fokus kerja. kirim rekapnya kalau udah dapet kabar. hatur nuhun, Drew.
00:29 i|siap, vy. lu juga jangan lupa istirahat bentar. ulah nepi ka tumbang gara-gara server.
00:29 o|siap, pak PPIC. kabarin kalau ada perubahan.
00:29 i|gas. semoga besok servernya sadar diri.
` },

  // Kontak & grup baru (muncul bertahap lewat cerita)
  { id: 'jiwa',   name: 'Jiwa',   hidden: true, sub: 'last seen recently', src: '', ago: 0, time: '00:00' },
  { id: 'hilmi',  name: 'Hilmi',  hidden: true, sub: 'last seen recently', src: '', ago: 0, time: '00:00' },
  { id: 'incen',  name: 'Incen',  hidden: true, sub: 'last seen recently', src: '', ago: 0, time: '00:00' },
  { id: 'merapi', name: 'Merapi', hidden: true, sub: 'last seen recently', src: '', ago: 0, time: '00:00' },
  { id: 'barudak', name: 'Barudak Kampus', group: true, hidden: true, sub: '6 members', src: '', ago: 0, time: '00:00' },

  // Hanya tampilan (tidak bisa dibuka)
  // Eiser — DIRESET (dialog lama diganti dialog baru yang diputar live)
  { id: 'eiser',   name: 'Eiser', sub: 'last seen recently', src: '', ago: 4, time: '22:18' },
  { id: 'evander', name: 'Evander', sub: 'last seen recently', pre: 'Oke, nanti gua kabarin', ago: 5, time: '17:51' },   // bisa dibuka: tujuan percakapan terakhir (ev1)
  { id: 'itteam',  name: 'IT Team',  open: false, group: true, mute: true, pre: 'Deploy selesai ✅', ago: 8, time: '15:30' },
  { id: 'uniperoom', name: 'UNIPEROOM survivor', open: false, group: true, mute: true, pre: 'Tugas minggu ini udah dikumpulin?', ago: 12, time: '09:12' },
];

/* =========================================================
   CERITA INTERAKTIF — DIALOG LIVE (dari Prompt_Update.pdf)
   Format baris:  "Pengirim|teks".  Pengirim "Gravy" = kamu (kanan).
   Scene diputar live (typing + jeda) saat roomchat dibuka pada tahap yang tepat.
   arrive = pesan pembuka yang masuk sebagai notifikasi (add:false = hanya notifikasi,
   pesannya tetap diputar live di dalam scene). needs = scene yang harus selesai dulu.
   ========================================================= */
/* Pengirim "Hagiel"/"Baby" di naskah dinormalisasi jadi token '@baby' → nama tampilnya SELALU dari cname('baby') (spk) */
const BABY_TOK = '@baby', isBabyName = n => n === 'Hagiel' || n === 'Baby';
const SC = (chat, raw, o = {}) => ({
  chat, ...o,
  lines: raw.trim() ? raw.trim().split('\n').map(l => { const i = l.indexOf('|'), w = l.slice(0, i); return [isBabyName(w) ? BABY_TOK : w, l.slice(i + 1)]; }) : [],
  ...(o.arrive && isBabyName(o.arrive.by) ? { arrive: { ...o.arrive, by: BABY_TOK } } : {}),
});
const SCENES = {
  /* 1. PDKT awal */
  h1: SC('baby', `
Gravy|Iel, lu lagi ngapain?
Hagiel|Lagi rebahan aja nih vy. Kenapa?
Gravy|Mabar VD (Violence District) yuk?
Hagiel|Anjir tumben amat lu ngajakin gua mabar wkwk
Gravy|Ya gapapa, bosen aja gua sendirian di room. Lu free ga?
Hagiel|Free sih. Tapi gua agak beban ya tar wkwk
Gravy|Santai elah, kayak sama siapa aja lu. Ntar gua gendong.
Hagiel|Yaudah ayo, send link room lu.
Gravy|Oke, login sekarang. Gua tunggu di lobby ya.
Hagiel|Siap dangdutt`),
  /* 2. Curhat ke Eiser */
  e1: SC('eiser', `
Gravy|Ser, lu sibuk ga?
Eiser|Kagak vy, napa? Tumben pc gua.
Gravy|Gua lagi coba deketin Hagiel nih...
Eiser|HAHDJDJ SERIUSAN LU VY?! ANJIR LU!
Eiser|Parah sih lu 2 tahun temenan baru gerak sekarang wkwkwkwk. Tapi baguslah anjir, lagian lu udah jomblo karatan gitu. Lu tuh pantes bahagia vy, gausah pesimis lagi kayak kemaren-kemaren.
Gravy|Ya gimana ya ser... gua takut dia ga ada rasa balik ke gua wkwk. Lagian Hagiel mah cakep, yang mau banyak.
Eiser|Halah kontol gausah sok minder lu. Lu juga keren anjir, punya karir, bisa segalanya. Hantam aja elah! Gua dukung 1000% asal lu ga sedih-sedih lagi kalo lu pesimis gua ludahin
Gravy|Wkwk makasih ser. Ini baru tahap ajak mabar sih.
Eiser|Mantap, dari mabar turun ke hati wkwkwkwk. Gasdahh`),
  /* 3. Group Akatsudi (Eiser cepu) */
  ak1: SC('akatsudi', `
Eiser|Guys, ada berita besar. Si Gravy lagi incer seseorang wkwkwk 🚨
Maxton|HAH SERIUSAN?! Siapa anjing?? bub spill lah mmk!
Evander|Wah... akhirnya ya vy. Tapi inget vy, kali ini pastiin dia beneran hargain lu. Jangan sampe lu ngerasain hal yang sama kayak yang lalu-lalu.
Gravy|Wkwkwk kalem elah ser, cepu banget lu anjir. Nanti aja kalo udah jelas baru gua kasih tau.
Maxton|Ah ga seru sia bub! Siapa sih? Anak kampus kita apa luar?
Eiser|Wkwkwk yang pasti kalian semua kenal sih 😜
Maxton|ANJING BIKIN PENASARAN AJA LU DUAAN! Siapa elahhh?!
Gravy|Rahasia dlu ya ajg anak anak kepo`),
  /* 4. Roomchat Maxton */
  m1: SC('maxton', `
Maxton|Bub serius aing masih penasaran anjir. Tapi yaudah deh kalo belom mau cerita.
Maxton|Semoga yang kali ini beneran baik ya buat sia
Gravy|Haha iya ton, nuhun ya. Doain aja lancar.
Maxton|Pasti lah. Pokoknya kalo ada apa-apa cerita ke aing bub.`),
  /* 5. Konflik PDKT */
  h2: SC('baby', `
Gravy|Iel, mabar VD lagi yuk malam ini?
Hagiel|Lagi males mabar.
Gravy|Oh yaudah gapapa, besok malam gimana?
Hagiel|Kayaknya besok-besok juga lagi males deh vy. Lu ajak yang lain aja.
Gravy|Eh... lu kenapa el? Gua ada salah kata ya pas mabar kemarin?
Gravy|Maaf ya kalau ada sikap atau kata-kata gua yang bikin lu risih...`, { readNote: true }),
  /* 6. Keenan (klarifikasi) — notifikasi "P" */
  k1: SC('keenan', `
Keenan|Vy, lu lagi ada masalah ya sama Hagiel?
Gravy|Lu tau sesuatu ya? Iya anjir, dia mendadak dingin banget diajak mabar ga mau
Keenan|Wkwk lo tau ga vy kenapa Hagiel ga mau mabar malam ini?
Gravy|Kagak tau anjir, makanya gua pusing dari tadi ngerasa ada salah.
Keenan|Tadi sore dia habis ketemu gua. Dia gedeg sama lu gara-gara ngira lu lagi deketin yang lain juga selain dia wkwk.
Gravy|Apasiiii nan Kagak ada anjir, gua cuma deketin dia doang!
Keenan|Ya gua kan juga kenal lo wkwk, makanya gua agak ragu pas dia cerita gitu. Tapi ya persepsi dia gitu vy, ngira lo cuma jadiin dia opsi.
Gravy|Asli dah gua bukan si M lagi wkwk. Cuma Hagiel yang lagi gua deketin.
Keenan|Yaudah sana pc anaknya, jelasin baik-baik gausah gengsi.`,
    { arrive: { text: 'P', by: 'Keenan' } }),
  /* 7. Penjelasan & luluh */
  h3: SC('baby', `
Gravy|Iel... gua ga ada siapa-siapa demi tuhan. Makanya gua ajak lu mabar terus, cuma lu yang mau gua temenin.
Gravy|Lu ga mau temenin gua mulai sekarang?
Hagiel|...Beneran ga ada yang lain?
Gravy|Beneran Hagiel... Lu bisa pegang omongan gua
Hagiel|Yaudah deh... Maaf ya vy tadi gua agak moody wkwk.
Gravy|Wkwk gapapa. Join room gua sekarang yuk?
Hagiel|Ayoo!`),
  /* 8. Balasan Story 1 */
  // CATATAN: teks pembuka Jiwa & Hilmi + dialog live Jiwa tahap ini tidak ada di PDF → placeholder (lihat laporan).
  j1: SC('jiwa', `
Jiwa|Double date dong vy, mabar bareng gua sama Hilmi! Mau ga?
Gravy|Boleh banget ji, nanti gua kabarin ya.`,
    { arrive: { text: 'Ayo mabar vy! 🎮', by: 'Jiwa', sr: 1 } }),
  hl1: SC('hilmi', `
Hilmi|hahaha iya baru aja tadi pacar lu juga ngajakin gua mabar, double chat ceritanya
Gravy|Siap kabarin aja ya`,
    { needs: ['j1'], arrive: { text: 'Mabar yuk vy!', by: 'Hilmi', sr: 1 } }),
  dt1: SC('dito', `
Gravy|Nanti gua ceritain di kampus`,
    { needs: ['hl1'], arrive: { text: 'Baru lagi vy', by: 'Dito', sr: 1 } }),
  /* 9. Group Barudak Kampus */
  bk1: SC('barudak', `
Jourdane|Guys, besok pagi ada kelas Pak Asep ga si?
Merapi|Ada anjir jam 8 pagi! Mana tuh dosen killer banget lagi dospemnya 💀
Incen|Hah seriusan jam 8?! Ih males banget, mana tugas kemarin belom selesai full 😭
Jan Adam|Kalo lo survive kelas besok gue beliin eskrim cen wkwk.
Incen|BENERAN YA JAN! AWAS KALO BOHONG!
Merapi|LAH JAN ADAM GUA JUGA SURVIVE KALI, BELIIN JUGA DONG!
Jourdane|Gua juga mau es krim lah wkwk!
Gravy|Wkwk rame amat ini group. Aman besok gua dateng pagi.
Jeremiel|@Gravy awas lu terlambat vy, biasalah tukang ngaret.
Gravy|Aman, tidur tidur. Gua ga bakal ngaret.`),
  /* 10. Hari berikutnya, jam 2 siang */
  ak2: SC('akatsudi', `
Maxton|Beres kerjaan nih. Nongkrong di tempat biasa yuk guys?
Eiser|GAS!
Evander|Otw.
Gravy|Gas.`),
  m2: SC('maxton', `
Maxton|Bub... Hehe... Biasa...
Gravy|Heeuh aing jemput.
Maxton|Ily 🫶 Kaulah gay nu paling kasep ku wkwk`,
    { arrive: { text: 'Bub', by: 'Maxton' } }),
  /* 11. Balasan story 2 */
  mi1: SC('miyuka', `
Gravy|Iya ini abang bentar lagi pulang. Mau dititipin makanan ga?
Miyuka|Mauuu! Beliin Chikuro sama Kopken yang series ungu itu abanggg!
Gravy|Iya ntar dibeliin. Kunci pintu sama jendela ya doll, kamu kan sendirian di rumah.
Miyuka|Iyaaa abang bawel 🙄 cepetan pulang abis itu aku mau quality time sama Joie pacarku.
Gravy|Ahh bucin di lama-lamain ahh wkwk.
Miyuka|Wuuu abang makanya punya pacar! 😜
Gravy|Liat aja nanti, bawel.
Miyuka|Xixi, cepetan pulang! 😠
Gravy|Bawel.`,
    { arrive: { text: 'Abang main terus aku di rumah sendirian tau! 😡', by: 'Miyuka', sr: 1 } }),
  h4: SC('baby', `
Gravy|Mabar kok, ini baru nyampe rumah mau bersih-bersih dulu. Jangan tidur dulu ya, tungguin gua ;)
Hagiel|E-eh... iyaa gua tungguin wkwk.`,
    { needs: ['mi1'], arrive: { text: 'Ga mabar malam ini ya?', by: 'Hagiel', sr: 1 } }),
  /* 12. Setelah Maps */
  h5: SC('baby', `
Gravy|Udah sayang... Udah nyampe kok, aku mandi sama bersih-bersih dulu ya?
Hagiel|Iyaaa mandi dulu sana, aku tungguin.`,
    { arrive: { text: 'Kamu udah sampai rumah vy?', by: 'Hagiel' } }),
  j2: SC('jiwa', `
Gravy|Ji, lu sama Hilmi udah pada free belom?
Jiwa|Free nih vy, emang kenapa? Tumben nanya malem-malem.
Gravy|Gas login Roblox sekarang yuk. Mabar double date nih bareng Baby juga wkwk.
Jiwa|Asik double date 😭 Boleh tuh! Sebentar ya vy, gua panggil si Hilmi dulu biar join DC (Discord) / party kita.
Gravy|Sip, kabarin kalau udah on ya. Gua mau ngabarin Baby dulu biar siap-siap login.
Jiwa|Oke vyy, mantap. Gua standby kok dari tadi di lobby Roblox.`),
  h6: SC('baby', `
Gravy|Sayang, udah siap belum? Ini anak-anak yang kemarin aku bilang udah on di Roblox mau mabar bareng kita.
Hagiel|Eh serius? Udah kok, aku udah standby di roblox hehe.
Gravy|Wah gercep juga langsung join room yang aku bikin ya.
Hagiel|Siap abang! Jangan curang ya nanti pas main wkwk.
Gravy|Mana ada, aku kan player abang abangan jago. Otw login sekarang ya sayang.
Hagiel|Okeee, ditunggu in-game ya ❤️`),
  /* 13. Selesai mabar → jadian */
  h7: SC('baby', `
Gravy|Sama-sama... Hagiel, aku mau ngomong serius boleh?
Hagiel|Boleh, mau ngomong apa vy?
Gravy|Sebenarnya dari awal aku ajak kamu mabar VD terus, itu cara aku buat deketin kamu...
Hagiel|Hahaha aku tau kok, dan kamu berhasil deketin akuu
Hagiel|Hehe Tapi aku penasaran deh, kita kan udah temenan 2 tahun, kenapa ya kamu baru ngerespon sekarang?
Gravy|LOL kan kamu dulu ada pacar dut
Hagiel|Kamu juga yaa wkwk!
Gravy|Yaudah lah ya, mungkin emang baru sekarang waktunya kita buat bareng-bareng.
Gravy|Eh... kita? Udah jadi 'kita' nih? Kamu terima aku jadi pacar kamu?
Hagiel|Haha iyaaa Gravy... aku mau jadi pacar kamu
Gravy|Yess, Happy banget aku malam ini wkwk.
Hagiel|Udah malam tauu, kamu besok kan harus kerja pagi. Tidur ya sekarang?
Gravy|Iya sayang. Kamu juga tidur ya. Goodnight sayang
Hagiel|Goodnight jugaa. See you besok!
Gravy|See you!`,
    { arrive: { text: 'Makasih ya vy buat mabarnya malam ini, seru banget hehe.', by: 'Hagiel' }, rename: true }),
  /* 14. Zayn & Andrew — skrip lama insiden server down dimainkan ulang (diisi dari CHATS di bawah) */
  z1: SC('zayn', '', { fast: true, arrive: { text: 'vy, lu masih melek?', by: 'Zayn Cybersecurity', add: false } }),
  a1: SC('andrew', '', { fast: true, needs: ['z1'], arrive: { text: 'teu sare, anjir. kenapa vy 😭', by: 'Andrew PPIC Staff', add: false } }),
  /* 15. Hari ketiga */
  m3: SC('maxton', `
Gravy|Maks! Aing berhasil anjir wkwk
Maxton|Naon Sama siapa anjing? Si Hagiel ??
Gravy|heeh
Maxton|Tahkan aing udah duga kalo sia bakal sama Hagiel, gelagak 2 tahun nya keliatan pisan anjing
Gravy|Malu anjir wkwk. Tapi seneng aing bub
Maxton|Selamat nya bub! Semoga kali ini yang bisa ngertiin sia lahir batin!`),
  ak3: SC('akatsudi', `
Maxton|WOI GRAVY UDAH  PACARAN SAMA HAGIEL ANJING 🎉
Eiser|WKWKWK AJG
Evander|Selamat ya vy, langgeng.
Eiser|pada pengen punya pacar ga si?
Maxton|Lu kan ada hts mek. Pacarin aja
Eiser|siapa
Maxton|Yg lu cerita mmk. Sama si Capan Capan itu udh kaga?
Eiser|udah ngga. pengen pacaran tapi males jalanin
Maxton|Kenapa engga. Lu nya ya. Nah udah paling bener fwa an
Eiser|males dah. pengen punya pacar. gua pengen pacaran. gua akan ngegay
Maxton|Doyan ko lobang bool
Gravy|Mimpi basah gua adalah Akatsudi pada punya pacar
Evander|Hahahaha
Gravy|Setahun lebih kita bareng yg punya pacar gua doang
Evander|Eiser pernah punya. Maxton pernah.
Gravy|Udah berapa kali ya gua ganti pacar kelen msh nsa. Kan lucu ya four date
Maxton|Kan kata gua lu cabe"an😭
Gravy|Kok kontol ya?
Maxton|Iya njir Gravy dah gunta ganti, kita pada masih nsa. When ya. Nanti jj bareng pacar cuy
Gravy|Kok gitu amat bahasanya babi 😡
Maxton|Kita jj bareng" sama pacar" kita juga. When y
Gravy|Ya cok. Masa gua doang
Evander|Ikut *bawa LC
Gravy|Kelen pasti ada deket 1. Jadiin lah. Temenin gua. Support gua
Evander|Ntar ditanya “alasan kamu pacaran sama aku apa?” “nemenin Gravy”
Gravy|:v
Maxton|Kan kocag ya
Gravy|Tp carilah pacar yg ga cemburu sm kita
Maxton|Tapi iyalu kayanya lucu. Jj bareng ber delapan jadinya
Gravy|Semoga ada era nya kita punya pacar di waktu yg sama. Ini permintaan terakhir gua
Maxton|Goblok
Evander|Lu lagi demam ya?
Gravy|Lg mencret. Panas pantat gua. Mungkin ini jd hal terakhir yg gua sampaikan
Evander|Siapakah gerangan yang menusukmu, kawan
Maxton|Eh gua tau dari tiktok pantat lu ditempel bye bye fever. Katanya enak ga panas lagi
Evander|Pantat demam
Gravy|Kontol. Kena peler ngilu anjing
Evander|Yang panas itu pantat lu atau anus lu? Kan beda..
Gravy|Dua duanya
Evander|Coba minum dingin, itu kan pencernaan masuknya
Gravy|Aing udh berak 3x hari ini
Evander|Abis makan pedes? Lu bakal dehidrasi kalau cair. Minum air, makan sup atau yang berkuah gitu. Berhenti makan yang pedes dulu
Gravy|Ga makan pedes. Angin ini
Maxton|Jangan" Karna hole lu ditusuk kontol
Gravy|Apa kontol. Kontol lu
Maxton|Najis. Gamau kontol gua masuk hole lu
Gravy|Soalnya kecil ya. Ga kerasa
Maxton|Gakuat😭 Geli bgt gua kalo anu sama si Gravy
Gravy|Najis"`,
    { arrive: { text: 'WOI GRAVY UDAH  PACARAN SAMA HAGIEL ANJING 🎉', by: 'Maxton', add: false } }),
  /* 16. Date malam hari */
  b1: SC('baby', `
Gravy|Sayang, ntar malam jam 7 kita keluar yu
Baby|Mauuu! Aku siap donggg, jemput jam 7 ya abang ❤️
Gravy|Oke, aku pulang sebentar buat mandi sama siap-siap dulu ya.`),
  d1: SC('dito', `
Gravy|Dit, bingung gua outfit date malam ini pake yang mana.
Dito|Wkwk tumben lu grogi vy. Mana liat opsi bajunya.
Gravy|Jaket kulit hitam sama dark jeans cocok ga?
Dito|Nah! Itu udah paling pas sama style lu. Keliatan cool tapi tetep santai.
Gravy|Oke sip, nuhun dit!
Dito|As always bro, good luck datenya!`),
  b2a: SC('baby', `
Gravy|Otw rumah kamu sayang`,
    { arrive: { text: 'Udah siap dijemput', by: 'Baby' } }),
  b2: SC('baby', `
Gravy|Sama sama cintaku. Kamu cantik banget tadi pacar aku wkwk.
Baby|Ihh malu yaudah aku pamit tidur duluan ya capek bgt wkwk.
Gravy|Goodnight sayang. I love you
Baby|I love you more abang!`,
    { arrive: { text: 'Thank you for today ya abang sayang, aku happy banget hari ini ❤️', by: 'Baby' } }),
  /* 17. Story ke-4 & Barudak Kampus lanjutan */
  /* 18. Evander pamit (percakapan terakhir sebelum ending) */
  ev1: SC('evander', `
Evander|Vy... Lu masih mau anggap gua temen lu, kan?
Gravy|Ngomong apa sih lu, Van? Ya masih lah. Ada masalah apa emang?
Evander|Gua cuma mau mastiin aja. Gua boleh jujur satu hal? Dan janji jangan dipotong dulu.
Gravy|Jujur apa? Ngomong aja.
Evander|Mulai malam ini gua harus cabut dari kota ini. Gua mau mulai dari nol di tempat lain. Bukan karena gua mau lari... tapi ini satu-satunya cara biar masalah ini berhenti di gua dan nggak merembet ke anak-anak Akatsudi.
Gravy|Wait... Maksud lu gimana? Masalah apa, Van? Jangan main cabut gini aja anjir, jelasin dulu!
Evander|Gua ga bisa cerita detailnya sekarang, Vy. Orang-orang itu udah mulai ngincar nama Akatsudi. Kalau gua stay, kalian semua yang kena. Gua udah di stasiun sekarang. Gua cuma minta satu hal... tolong jaga anak-anak selama gua nggak ada.
Gravy|Gua nggak bakal biarin lu nanggung masalah ini sendirian, Evander! Lu di stasiun mana?! Gua samperin sekarang.
Evander|Jangan nekat, Vy. Kalau lu nyusul gua, masalahnya bakal makin rumit. Tetap di kota ini, jaga Hagiel, dan urus anak-anak. Sorry gua nitip beban ini ke lu... See you on the other side, Gravy.
Gravy|VAN!! BEBEGIG SIAH DI-P-AN MALAH DI-READ DOANG
Gravy|EVANDER BALES CHAT GUA`),
  in1: SC('incen', '', { arrive: { text: 'Cie', by: 'Incen', sr: 1 } }),
  mer1: SC('merapi', `
Gravy|Maneh liat aing? Bukannya nyapa wkwkwkwk
Merapi|Era atuh kan lagi bobogohan
Gravy|Wkwkwk siga nu ku saha wae.`,
    { arrive: { text: 'Sumpah urang liat maneh di jalan kirain bukan maneh tapi ternyata wow bobogohan euy developer urang wkwk!', by: 'Merapi', sr: 1 } }),
  bk2: SC('barudak', `
Incen|ANJAYYY GRAVY KETAHUAN PACARAN WKWKWK! Tadi gue sama Merapi liat lu di jalan lagi sama seseorang lu
Merapi|Beneran anjir, pas urang lagi beli buku kuliah tadi liat si Gravy lagi boncengan wkwk!
Jeremiel|Siapa anjir pacarnya Gravy?! Spill lah!
Jan Adam|Iya nih vy, kapan-kapan ajak pacar lu main bareng kita dong!
Incen|Yah kalian mah ga bakal kenal, bukan anak kampus kita wkwk.
Gravy|Wkwk iya itu temen lama gua. Nanti kapan-kapan gua ajak main bareng anak-anak.
Incen|Btw Vy, besok Miyuka ada di rumah ga? Aku mau ngajak dia main nih.
Gravy|Ada kok. Mau main kemana emang?
Incen|Nanti juga tau sendiri, kan Miyuka bakal dianterin kamu wkwk.
Gravy|Iya dehh supir kali gua
Incen|Wkwk makasih dehh`),
};

/* Dialog telepon pagi hari dari Baby (menggantikan dialog call lama) */
const MORNING_CALL = [
  ['Baby', 'Morning sayang...'], ['Gravy', 'Morning sayang. Kenapa call?'],
  ['Baby', 'Gapapa kangen ajaa... Sarapan jangan lupa abang.'], ['Gravy', 'Iya ini mau sarapan, kamu juga ya sayang.'],
  ['Baby', 'Huum...'], ['Gravy', 'Aku matiin ya mau mandi.'], ['Baby', 'Huum bye...'],
];

// Foto story ke-n (n = 1..4) = file di assets/assets-stories-/ ; Story Baby ke-i muncul setelah story Gravy ke-n terkirim
const STORY_PHOTOS = { 1: 'assets/assets-stories-/me-1.jpg', 2: 'assets/assets-stories-/me-2.jpg', 3: 'assets/assets-stories-/me-3.jpg', 4: 'assets/assets-stories-/me-4.jpg' };
const STORY_BABY_AT = [1, 2, 4];   // baby-1 muncul setelah story 1, baby-2 setelah story 2, baby-3 setelah story 4
// Caption Instagram yang diketik otomatis (PLACEHOLDER — naskah caption tidak ada di PDF; ganti sesuai keinginan)
const IG_CAPTIONS = { 1: 'after mabar 🎮', 2: 'otw pulang 🏠', 3: '🤍', 4: 'hari ini 🤍' };
// Teks layar ending
const FINALE_TEXT = 'Jika kamu berdiri di posisi Gravy, jalan mana yang akan kamu pilih? Mempertaruhkan segalanya demi menyelamatkan seorang sahabat... atau tetap bertahan di kota ini bersama Hagiel? Simpan keputusanmu, karena kisah ini masih jauh dari kata usai.';
const ENDING_TEXT = [
  'Made just to keep the memories alive',
  'I’ll end the first session here. This interactive web developer is officially running out of ideas for the storyline. I’m not really an author who’s good at putting stories together, so most of the plot is actually based on my own experiences.',
  'Thanks for taking the time to see my story. See you in another one.',
];

/* =========================================================
   HELPER
   ========================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const h  = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = n => String(n).padStart(2, '0');
const fmt = (d, o) => new Intl.DateTimeFormat('id-ID', o).format(d);
const hhmm = d => pad(d.getHours()) + ':' + pad(d.getMinutes());
const dayDiff = (a, b) => { const x = new Date(a), y = new Date(b); x.setHours(0, 0, 0, 0); y.setHours(0, 0, 0, 0); return Math.round((y - x) / 864e5); };
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/** Tanggal "ago hari lalu" jam time ('HH:MM') atau '-Nm' (N menit lalu). Tidak pernah di masa depan. */
function at(ago, time) {
  const n = new Date();
  if (time[0] === '-') return new Date(n.getTime() - parseInt(time.slice(1), 10) * 60000);
  const [H, M] = time.split(':').map(Number);
  const d = new Date(n); d.setDate(d.getDate() - ago); d.setHours(H, M, 0, 0);
  if (d > n) d.setDate(d.getDate() - 1);
  return d;
}
/** Label ala iOS untuk daftar: jam / Kemarin / nama hari / tgl */
function listTime(d) {
  const df = dayDiff(d, new Date());
  if (df <= 0) return hhmm(d);
  if (df === 1) return 'Kemarin';
  if (df < 7) return cap(fmt(d, { weekday: 'short' }));
  return fmt(d, { day: '2-digit', month: '2-digit', year: '2-digit' });
}
function longDate(d) { return fmt(d, { day: 'numeric', month: 'long', year: 'numeric' }); }

/* ---------- ikon garis (24x24) ---------- */
const ICP = {
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  comment: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  home: '<path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V13h6v9"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
  plus: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
  reels: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M3 9h18M8 3l3 6M14 3l3 6"/><path d="M10 13l5 3-5 3z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
  left: '<path d="M15 18l-6-6 6-6"/>', right: '<path d="M9 18l6-6-6-6"/>', down: '<path d="M6 9l6 6 6-6"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  tag: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M6 19c1-3 3-4 6-4s5 1 6 4"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
  clip: '<path d="M21.4 11l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  check: '<path d="M20 6L9 17l-5-5"/>', dcheck: '<path d="M1 13l4 4L14 7M10 15l2 2L21 7"/>',
  pin: '<path d="M12 17v5M9 3h6l-1 7 3 3H7l3-3z"/>',
  compose: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  keypad: '<circle cx="6" cy="5" r="1.4"/><circle cx="12" cy="5" r="1.4"/><circle cx="18" cy="5" r="1.4"/><circle cx="6" cy="11" r="1.4"/><circle cx="12" cy="11" r="1.4"/><circle cx="18" cy="11" r="1.4"/><circle cx="6" cy="17" r="1.4"/><circle cx="12" cy="17" r="1.4"/><circle cx="18" cy="17" r="1.4"/><circle cx="12" cy="22" r="1.4"/>',
  vm: '<circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M6 16h12"/>',
  share: '<path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v14"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  photo: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  alarm: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3L2 6M19 3l3 3"/>',
  stopwatch: '<circle cx="12" cy="14" r="8"/><path d="M12 14l3-4M9 2h6M12 2v4"/>',
  timer: '<path d="M6 2h12M6 22h12M7 2c0 6 5 6 5 10s-5 4-5 10M17 2c0 6-5 6-5 10s5 4 5 10"/>',
  backspace: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  note: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
  chevd: '<path d="M6 9l6 6 6-6"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
};
const ic = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24">${ICP[n] || ''}</svg>`;

/* ---------- ikon aplikasi (60x60) ---------- */
const APPICONS = {
  instagram: { bg: 'linear-gradient(45deg,#fdc830 0%,#f5683c 30%,#e1306c 55%,#833ab4 80%,#405de6)', svg:
    '<rect x="16" y="16" width="28" height="28" rx="8.5" fill="none" stroke="#fff" stroke-width="3"/><circle cx="30" cy="30" r="6.6" fill="none" stroke="#fff" stroke-width="3"/><circle cx="38.3" cy="21.7" r="1.9" fill="#fff"/>' },
  photos: { bg: '#f7f7f9', svg: `<g transform="translate(30 30)" style="isolation:isolate">${['#ff9500', '#ffcc00', '#a6d800', '#34c759', '#00c7be', '#32ade6', '#af52de', '#ff2d55'].map((c, i) => `<ellipse cx="0" cy="-10.5" rx="6.3" ry="10" transform="rotate(${i * 45})" fill="${c}" style="mix-blend-mode:multiply" opacity=".92"/>`).join('')}</g>` },
  mail: { bg: 'linear-gradient(180deg,#4cc0ff,#0a6cff)', svg:
    '<rect x="13" y="18" width="34" height="25" rx="4" fill="none" stroke="#fff" stroke-width="3"/><path d="M14.5 21l15.5 11 15.5-11" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>' },
  clock: { bg: '#000', svg:
    '<circle cx="30" cy="30" r="26" fill="#fff"/>' + [...Array(12)].map((_, i) => `<rect x="29.2" y="6" width="1.6" height="${i % 3 ? 3 : 5}" fill="#111" transform="rotate(${i * 30} 30 30)"/>`).join('') +
    '<rect class="ch-h" x="28.6" y="15" width="2.8" height="15.5" rx="1.4" fill="#111" style="transform-box:view-box;transform-origin:30px 30px"/><rect class="ch-m" x="29" y="9" width="2" height="21.5" rx="1" fill="#111" style="transform-box:view-box;transform-origin:30px 30px"/><rect class="ch-s" x="29.4" y="8" width="1.2" height="24" fill="#ff9500" style="transform-box:view-box;transform-origin:30px 30px"/><circle cx="30" cy="30" r="2" fill="#ff9500"/>' },
  notes: { bg: '#fffdf3', svg:
    '<rect width="60" height="17" fill="#ffd60a"/><g stroke="#e5e0cf" stroke-width="1.4"><path d="M0 28h60M0 37h60M0 46h60M0 55h60"/></g><path d="M9 8.5h12M9 11.5h22" stroke="#7a6300" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>' },
  weather: { bg: 'linear-gradient(180deg,#2f7dd6,#69bdf5)', svg:
    '<circle cx="22" cy="23" r="9.5" fill="#ffd54a"/><path d="M20 44a8 8 0 0 1 1.2-15.9A11 11 0 0 1 42 31a7 7 0 0 1 1 14z" fill="#fff"/>' },
  settings: { bg: 'linear-gradient(180deg,#a2a2a8,#6d6d73)', svg:
    '<circle cx="30" cy="30" r="17" fill="none" stroke="#3c3c40" stroke-width="7" stroke-dasharray="5.3 5.3"/><circle cx="30" cy="30" r="15" fill="#d4d4d8"/><circle cx="30" cy="30" r="11" fill="none" stroke="#8d8d93" stroke-width="2"/><circle cx="30" cy="30" r="5.2" fill="#6d6d73"/>' },
  maps: { bg: '#e8efe0', svg:
    '<rect width="60" height="60" fill="#e8efe0"/><path d="M0 40L60 22v10L0 52z" fill="#fff"/><path d="M22 0l10 60h-9L13 0z" fill="#f7d36b" opacity=".85"/><path d="M46 0v60" stroke="#9fd0ff" stroke-width="8"/><path d="M0 14h60" stroke="#fff" stroke-width="3"/><circle cx="31" cy="24" r="8.5" fill="#ff3b30"/><circle cx="31" cy="24" r="3.3" fill="#fff"/><path d="M26 29l5 12 5-12z" fill="#ff3b30"/>' },
  call: { bg: 'linear-gradient(180deg,#5ee27b,#27c24a)', svg:
    '<path transform="translate(14 14) scale(1.35)" fill="#fff" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>' },
  browser: { bg: 'linear-gradient(180deg,#fafcff,#d9e8fb)', svg:
    '<circle cx="30" cy="30" r="24" fill="#fff" stroke="#2f8bf7" stroke-width="3"/><g stroke="#2f8bf7" stroke-width="1.3">' + [...Array(12)].map((_, i) => `<path d="M30 8.5v${i % 3 ? 2.5 : 4.5}" transform="rotate(${i * 30} 30 30)"/>`).join('') + '</g><g transform="rotate(45 30 30)"><path d="M30 13l6.5 17h-13z" fill="#ff3b30"/><path d="M30 47l-6.5-17h13z" fill="#d5dae1"/></g>' },
  telegram: { bg: 'linear-gradient(180deg,#3fb4f0,#1c8fd1)', svg:
    '<path d="M44.5 16.5 14.4 28.4c-1 .4-.9 1.8.1 2.1l7.4 2.3 2.9 9c.3.9 1.4 1.1 2 .4l4.1-4.1 7.8 5.7c.9.6 2 .1 2.3-.9l5.2-23.2c.3-1.2-.8-2.1-1.8-1.7zM23.5 32.6 40 22.4c.3-.2.5.2.3.4L26.7 35.4c-.5.4-.8 1-.9 1.7l-.6 3.6-1.7-8.1z" fill="#fff"/>' },
  music: { bg: '#121212', svg:
    '<circle cx="30" cy="30" r="21" fill="#1ed760"/><g fill="none" stroke="#121212" stroke-linecap="round"><path d="M17.5 24.2c8.5-2.6 18-1.8 25.5 2.6" stroke-width="3.6"/><path d="M19 30.8c7-2 14.5-1.4 20.6 2.1" stroke-width="3"/><path d="M20.5 36.8c5.6-1.5 11.2-1 16 1.7" stroke-width="2.5"/></g>' },
};
function appIconHTML(id) {
  if (id === 'calendar') {
    const d = new Date();
    return `<div class="appicon cal"><b>${esc(fmt(d, { weekday: 'long' }).slice(0, 3))}</b><span>${d.getDate()}</span></div>`;
  }
  const a = APPICONS[id];
  return `<div class="appicon" style="background:${a.bg}"><svg viewBox="0 0 60 60">${a.svg}</svg></div>`;
}

/* ---------- avatar (inisial warna) ---------- */
const PAL = [['#ff885e', '#ff516a'], ['#ffcd6a', '#ffa85c'], ['#82b1ff', '#665fff'], ['#a0de7e', '#54cb68'], ['#53edd6', '#28c9b7'], ['#72d5fd', '#2a9ef1'], ['#e0a2f3', '#d669ed']];
const hash = s => [...s].reduce((a, c) => (a * 31 + c.codePointAt(0)) >>> 0, 7);
function avatar(name, size = 54) {
  const [a, b] = PAL[hash(name) % PAL.length];
  const ini = [...name.trim()].filter(c => /\p{L}|\p{N}/u.test(c)).slice(0, 1).join('').toUpperCase();
  return `<div class="av" style="width:${size}px;height:${size}px;font-size:${Math.round(size * .42)}px;background:linear-gradient(${a},${b})">${esc(ini)}</div>`;
}
const NAME_COL = ['#ff885e', '#ffcd6a', '#a0de7e', '#53edd6', '#72d5fd', '#e0a2f3'];

/* =========================================================
   PENYIMPANAN PROGRES CERITA (localStorage, aman)
   - Hanya SATU key: gp_story_v1. Key lain TIDAK pernah disentuh/dihapus.
   - Semua akses dibungkus try/catch (mode privat / storage penuh → pakai memori).
   - Window.GP_SPEED hanya untuk pengujian (mempercepat jeda); default 1.
   ========================================================= */
const SKEY = 'gp_story_v1';
const SPEED = () => (typeof window.GP_SPEED === 'number' && window.GP_SPEED > 0 ? window.GP_SPEED : 1);
const sleep = ms => new Promise(r => setTimeout(r, ms / SPEED()));
const memStore = {};
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return k in memStore ? memStore[k] : null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { memStore[k] = v; } };
const lsDel = k => { try { localStorage.removeItem(k); } catch (e) {} delete memStore[k]; };
const freshState = () => ({ v: 1, step: -1, ended: false, endSeen: false, scenes: {}, msgs: {}, reveal: {}, arrived: {}, modal: {},
  unread: {}, bump: {}, stories: [], storyAt: {}, posts: [], calls: [], callDone: false, renamed: false, blocked: {} });
/* MODE TANPA SIMPAN: setiap buka / tutup-buka / refresh selalu mulai dari awal (Step 0).
   Ubah ke true jika suatu saat progres ingin disimpan lagi (loadState & save kembali memakai localStorage). */
const PERSIST_PROGRESS = false;
function loadState() {
  if (!PERSIST_PROGRESS) {
    lsDel(SKEY);          // buang sisa progres lama dari versi sebelumnya (hanya key cerita; key lain tidak disentuh)
    return freshState();  // selalu state awal yang segar
  }
  try { const r = lsGet(SKEY); if (r) { const o = JSON.parse(r); if (o && o.v === 1) return Object.assign(freshState(), o); } } catch (e) {}
  return freshState();
}
let ST = loadState();
const save = () => { if (PERSIST_PROGRESS) lsSet(SKEY, JSON.stringify(ST)); };

/* Identitas kontak — SATU sumber. Hagiel berganti nama jadi Baby setelah adegan jadian (scene h7). */
const IDENT = { baby: { before: 'Hagiel', after: 'Baby' } };
const cname = id => IDENT[id] ? (ST.renamed ? IDENT[id].after : IDENT[id].before) : id;
const spk = n => n === BABY_TOK ? cname('baby') : n;      // nama pengirim di naskah → nama tampil saat ini
const GNAME = n => n === 'Evander' ? GROUP_NAMES.J : n === 'Eiser' ? GROUP_NAMES.E : n;   // nama pengirim di grup

/* =========================================================
   LAYAR, STATE, SKALA
   ========================================================= */
const phone = $('#phone');
let S = 1;           // skala tampilan
let currentApp = null;
const setState = s => phone.dataset.state = s;

function fit() {
  const W = 430, mobile = innerWidth <= 520;
  if (mobile) {
    S = innerWidth / W;
    phone.style.height = (innerHeight / S) + 'px';
    phone.classList.add('fullscreen');
  } else {
    phone.style.height = '932px';
    phone.classList.remove('fullscreen');
    S = Math.min((innerHeight - 40) / 932, (innerWidth - 60) / W, 1);
  }
  phone.style.setProperty('--s', S);
}
addEventListener('resize', fit); fit();

/* ---------- jam & status bar ---------- */
function tick() {
  const d = new Date();
  $('#sb-time').textContent = hhmm(d);
  $('#lock-time').textContent = hhmm(d);
  $('#lock-date').textContent = cap(fmt(d, { weekday: 'long', day: 'numeric', month: 'long' }));
  const s = d.getSeconds(), m = d.getMinutes(), hr = d.getHours() % 12;
  $$('.ch-s').forEach(e => e.style.transform = `rotate(${s * 6}deg)`);
  $$('.ch-m').forEach(e => e.style.transform = `rotate(${m * 6 + s * .1}deg)`);
  $$('.ch-h').forEach(e => e.style.transform = `rotate(${hr * 30 + m * .5}deg)`);
  checkAlarms(d);
}
if (navigator.getBattery) navigator.getBattery().then(b => {
  const up = () => $('#sb-batt-fill').setAttribute('width', Math.max(2, 20 * b.level));
  up(); b.addEventListener('levelchange', up);
}).catch(() => {});

/* ---------- LOCK SCREEN ---------- */
function buildLock() {
  const nots = [
    { app: 'telegram', av: true, title: 'Akatsudi', body: 'Maxton: Wkwkwk', t: '5m lalu' },
    { app: 'calendar', title: 'Kalender', body: 'Seminar Vibe Coding', t: 'Hari ini' },
  ];
  $('#lock-notifs').innerHTML = nots.map(n => `
    <div class="notif">${notifIcon(n.app, n.title, n.av)}<div class="nt"><div class="nt-top"><b>${esc(n.title)}</b><small>${n.t}</small></div><p>${esc(n.body)}</p></div></div>`).join('');

  const lock = $('#lock');
  let y0 = null, dy = 0, moved = false;
  lock.addEventListener('pointerdown', e => {
    if (e.target.closest('.swipe-hint')) return;
    y0 = e.clientY; dy = 0; moved = false; lock.classList.add('dragging');
  });
  lock.addEventListener('pointermove', e => {
    if (y0 === null) return;
    dy = Math.min(0, (e.clientY - y0) / S);
    if (dy < -4 && !moved) { moved = true; try { lock.setPointerCapture(e.pointerId); } catch (_) {} }
    lock.style.transform = `translateY(${dy * .85}px)`;
  });
  const end = () => {
    if (y0 === null) return;
    lock.classList.remove('dragging'); lock.style.transform = '';
    if (dy < -110) showPasscode();
    y0 = null;
  };
  lock.addEventListener('pointerup', end);
  lock.addEventListener('pointercancel', end);
  lock.addEventListener('click', e => { if (!moved && e.target.closest('.notif')) showPasscode(); });
  $('#swipe-hint').addEventListener('click', showPasscode);
}

/* ---------- PASSCODE ---------- */
let code = '';
const LETTERS = { 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ' };
function buildPasscode() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null];
  $('#pc-pad').innerHTML = keys.map(k => k === null ? '<div class="pc-key blank"></div>' :
    `<button class="pc-key" data-k="${k}"><b>${k}</b><small>${LETTERS[k] || ''}</small></button>`).join('');
  $('#pc-pad').addEventListener('click', e => { const b = e.target.closest('.pc-key[data-k]'); if (b) press(b.dataset.k); });
  $('#pc-cancel').addEventListener('click', hidePasscode);
  addEventListener('keydown', e => {
    if (phone.dataset.state !== 'passcode') return;
    if (/^\d$/.test(e.key)) press(e.key);
    if (e.key === 'Backspace') { code = code.slice(0, -1); paintDots(); }
    if (e.key === 'Escape') hidePasscode();
  });
}
function paintDots() { $$('#pc-dots i').forEach((d, i) => d.classList.toggle('on', i < code.length)); }
function showPasscode() { code = ''; paintDots(); $('#pc-title').textContent = 'Enter Passcode'; $('#passcode').classList.add('show'); setState('passcode'); }
function hidePasscode() { $('#passcode').classList.remove('show'); setState('lock'); }
function press(k) {
  if (code.length >= 4) return;
  code += k; paintDots();
  if (code.length === 4) setTimeout(() => {
    if (code === CFG.passcode) unlock();
    else {
      const d = $('#pc-dots'); d.classList.add('shake'); $('#pc-title').textContent = 'Try Again';
      setTimeout(() => { d.classList.remove('shake'); code = ''; paintDots(); }, 520);
    }
  }, 120);
}
function unlock() {
  $('#lock').classList.add('gone');
  $('#passcode').classList.remove('show');
  setState('home');
  if (ST.step === -1) setTimeout(() => { if (ST.step === -1) startStep(0); }, 900 / SPEED());   // awal cerita: modal pertama
}
function lockPhone() {
  if (currentApp) { const r = $('#app-' + currentApp); r.classList.remove('open', 'show'); currentApp = null; }
  $('#lock').classList.remove('gone'); $('#passcode').classList.remove('show'); setState('lock'); tick();
}
$('#btn-side').addEventListener('click', lockPhone);

/* ---------- HOME ---------- */
const HOME_APPS = ['instagram', 'photos', 'mail', 'calendar', 'clock', 'notes', 'weather', 'settings', 'maps'];
const DOCK = ['call', 'browser', 'telegram', 'music'];
const APPS = {
  instagram: { label: 'Instagram', build: buildInstagram },
  photos:    { label: 'Photos',    build: buildPhotos, onOpen: r => { const b = $('.app-body', r); b.scrollTop = b.scrollHeight; } },
  mail:      { label: 'Mail',      build: buildMail },
  calendar:  { label: 'Calendar',  build: buildCalendar },
  clock:     { label: 'Clock',     build: buildClock },
  notes:     { label: 'Notes',     build: buildNotes },
  weather:   { label: 'Weather',   build: buildWeather },
  settings:  { label: 'Settings',  build: buildSettings },
  maps:      { label: 'Maps',      inert: true },
  call:      { label: 'Phone',     build: buildCall, onOpen: r => r._render && r._render() },
  browser:   { label: 'Safari',    inert: true },
  telegram:  { label: 'Telegram',  build: buildTelegram, onOpen: () => { const c = TG.open && chatById(TG.open); if (c && c.unread) { c.unread = 0; delete ST.unread[c.id]; save(); renderChatList(); } } },
  music:     { label: 'Spotify',   build: buildMusic },
};
const icHTML = id => `<div class="ic" data-app="${id}">${appIconHTML(id)}<span>${APPS[id].label}</span></div>`;

function buildHome() {
  const note = latestNote();
  $('#home').innerHTML = `
    <div class="home-grid">
      <div class="widget w-notes" data-app="notes">
        <div class="wn-h">${ic('note')}Notes</div>
        <h4>${esc(note.title)}</h4>
        <p>${esc(note.body.slice(0, 160))}</p>
      </div>
      <div class="widget w-weather" data-app="weather">
        <div class="ww-city">${esc(CFG.city.name)} ${ic('right').replace('class="i "', 'class="i" style="width:11px;height:11px;stroke-width:3"')}</div>
        <div class="ww-t" id="ww-t">--°</div>
        <div class="ww-ic" id="ww-ic">⛅</div>
        <div class="ww-d" id="ww-d">Memuat…</div>
      </div>
      ${HOME_APPS.map(icHTML).join('')}
    </div>
    <div class="home-bottom">
      <div class="home-search">🔍 Search</div>
      <div class="dock">${DOCK.map(icHTML).join('')}</div>
    </div>`;
  $('#home').addEventListener('click', e => {
    const t = e.target.closest('[data-app]'); if (t) openApp(t.dataset.app, t);
  });
}
function latestNote() { return NOTES.map(n => ({ ...n, d: at(n.ago, n.time) })).sort((a, b) => b.d - a.d)[0]; }

function openApp(id, origin) {
  const A = APPS[id];
  if (A.inert) { const ico = origin.querySelector('.appicon'); ico.classList.remove('wiggle'); void ico.offsetWidth; ico.classList.add('wiggle'); return; }
  let root = $('#app-' + id);
  if (!root) { root = h(`<div class="app" id="app-${id}"></div>`); $('#apps').appendChild(root); A.build(root); }
  const pr = phone.getBoundingClientRect(), r = origin.getBoundingClientRect();
  root.style.transformOrigin = `${(r.left + r.width / 2 - pr.left) / S}px ${(r.top + r.height / 2 - pr.top) / S}px`;
  root.classList.add('show'); void root.offsetWidth; root.classList.add('open');
  A.onOpen && A.onOpen(root);
  currentApp = id; setState('app');
  $('#apps').style.pointerEvents = 'auto';
}
function goHome() {
  if (!currentApp) return;
  const root = $('#app-' + currentApp);
  root.classList.remove('open');
  setTimeout(() => root.classList.remove('show'), 430);
  currentApp = null; setState('home');
  $('#apps').style.pointerEvents = 'none';
}
(function homeBar() {
  const hb = $('#homebar'); let y0 = null;
  hb.addEventListener('pointerdown', e => { y0 = e.clientY; try { hb.setPointerCapture(e.pointerId); } catch (_) {} });
  hb.addEventListener('pointerup', e => { try { hb.releasePointerCapture(e.pointerId); } catch (_) {} if (y0 !== null && (y0 - e.clientY) / S > -3) goHome(); y0 = null; });
  hb.addEventListener('pointercancel', () => { y0 = null; });
  addEventListener('keydown', e => { if (e.key === 'Escape' && phone.dataset.state === 'app') goHome(); });
})();

/** Sheet geser dari kanan (detail post, chat, catatan, dll.) */
function push(root, html, cls = '') {
  const s = h(`<div class="sheet ${cls}">${html}</div>`);
  root.appendChild(s);
  requestAnimationFrame(() => requestAnimationFrame(() => s.classList.add('in')));
  s.back = () => { s.classList.remove('in'); setTimeout(() => s.remove(), 320); };
  $$('[data-back]', s).forEach(b => b.addEventListener('click', () => s.back()));
  return s;
}
const body = r => $('.app-body', r);

/* =========================================================
   INSTAGRAM
   ========================================================= */
function buildInstagram(root) {
  root.innerHTML = `
    <div class="ig-top">
      <div class="ig-user">${esc(CFG.username)} ${ic('down')}</div>
      <div class="ig-icons">${ic('plus')}${ic('menu')}</div>
    </div>
    <div class="app-body" style="padding-bottom:0">
      <div class="ig-prof">
        <div class="ig-av"><img src="${IG.avatar}" alt=""></div>
        <div class="ig-stats">
          <div><b>${IG.posts}</b><span>posts</span></div>
          <div><b>${IG.followers}</b><span>followers</span></div>
          <div><b>${IG.following}</b><span>following</span></div>
        </div>
      </div>
      <div class="ig-bio"><b>${esc(CFG.displayName)}</b>${IG.bio.map(esc).join('<br>')}</div>
      <div class="ig-btns"><button>Following ▾</button><button>Message</button><button class="sm">${ic('user')}</button></div>
      <div class="ig-tabs"><div class="on">${ic('grid')}</div><div>${ic('reels')}</div><div>${ic('tag')}</div></div>
      <div class="ig-grid"></div>
    </div>
    <div class="ig-nav">${ic('home')}${ic('search')}${ic('plus')}${ic('reels')}<img class="mini" src="${IG.avatar}" alt=""></div>`;
  renderIgGrid(root);
  $('.ig-grid', root).addEventListener('click', e => {
    const c = e.target.closest('[data-i]'); if (!c) return;
    openIgPost(root, +c.dataset.i);
  });
  $$('.ig-icons svg, .ig-nav svg', root).forEach(sv => { if (sv.innerHTML.includes('M12 8v16') || sv.innerHTML.includes('M12 8v8')) sv.addEventListener('click', () => openComposer(root)); });
}
function openIgPost(root, i) {
  const p = igItems()[i];
  const cap = esc(p.caption).replace(/@(\w+)/g, '<span class="m">@$1</span>');
  const d = p.t ? new Date(p.t) : at(p.ago, '12:00');
  const s = push(root, `
    <div class="nav"><div class="back" data-back>${ic('left')}</div><b style="font-size:16px">Posts</b><span style="width:26px"></span></div>
    <div class="app-body" style="padding-bottom:20px">
      <div class="ig-post-h"><img src="${IG.avatar}" alt=""><div>${esc(CFG.username)}</div><div class="more">${ic('more')}</div></div>
      <img class="ig-post-img" src="${p.img}" alt="">
      <div class="ig-act">${ic('heart')}${ic('comment')}${ic('send')}<span class="sv">${ic('bookmark')}</span></div>
      <div class="ig-meta" style="color:#fff;font-weight:600;font-size:14px">${p.likes} likes</div>
      <div class="ig-cap"><b>${esc(CFG.username)}</b> ${cap}</div>
      <div class="ig-meta" style="margin-top:4px">Lihat semua komentar</div>
      <div class="ig-meta d">${esc(fmt(d, { day: 'numeric', month: 'long' }))}</div>
    </div>`, 'ig-sheet');
  s.style.setProperty('--bg', '#000');
}

/* =========================================================
   PHOTOS
   ========================================================= */
function buildPhotos(root) {
  const total = PHOTOS.reduce((a, m) => a + m.imgs.length, 0);
  root.innerHTML = `
    <div class="nav"><span></span><span class="blue">Select</span></div>
    <div class="app-body">
      <div class="bigtitle">Library</div>
      <div class="ph-seg"><div>Years</div><div class="on">Months</div><div>Days</div><div>All</div></div>
      ${PHOTOS.map(m => {
        const d = new Date(2026, m.m, 1);
        return `<div class="ph-month">${esc(cap(fmt(d, { month: 'long', year: 'numeric' })))}<small>${CFG.city.name}</small></div>
        <div class="ph-grid ${m.imgs.length === 1 ? 'one' : ''}">${m.imgs.map(src => `<img src="${src}" data-src="${src}" data-m="${m.m}" alt="" loading="lazy">`).join('')}</div>`;
      }).join('')}
      <div class="ph-count">${total} Photos</div>
    </div>
    <div class="tabbar" style="--tc:#0a84ff"><button class="on">${ic('photo')}Library</button><button>${ic('heart')}For You</button><button>${ic('folder')}Albums</button><button>${ic('search')}Search</button></div>`;
  body(root).addEventListener('click', e => {
    const im = e.target.closest('img[data-src]'); if (!im) return;
    const d = new Date(2026, +im.dataset.m, 15);
    push(root, `
      <div class="nav"><div class="back" data-back>${ic('left')}</div>
        <div class="ttl"><b>${esc(fmt(d, { day: 'numeric', month: 'long', year: 'numeric' }))}</b><span>${CFG.city.name}</span></div><span style="width:26px"></span></div>
      <div class="stage"><img src="${im.dataset.src}" alt=""></div>
      <div class="ph-tools">${ic('share')}${ic('heart')}${ic('info')}${ic('trash')}</div>`, 'ph-view').style.setProperty('--bg', '#000');
  });
}

/* =========================================================
   MAIL
   ========================================================= */
function buildMail(root) {
  root.innerHTML = `
    <div class="nav"><div class="back">${ic('left')}Mailboxes</div><span class="blue">Edit</span></div>
    <div class="app-body">
      <div class="bigtitle">Inbox</div>
      <div class="searchbar">${ic('search')}Search</div>
      ${MAILS.map(m => `
        <div class="ml-row">
          <div class="ml-dot">${m.unread ? '<i></i>' : ''}</div>
          <div class="ml-main">
            <div class="ml-top"><b>${esc(m.from)}</b><span>${listTime(at(m.ago, m.time))} ${ic('right').replace('class="i "', 'class="i" style="width:14px;height:14px;stroke:#636366"')}</span></div>
            <div class="ml-sub">${esc(m.subj)}</div>
            <div class="ml-pre">${esc(m.pre)}</div>
          </div>
        </div>`).join('')}
    </div>
    <div class="ml-foot"><span class="blue">${ic('list')}</span><div>Updated Just Now<br><small style="color:#8e8e93">${MAILS.filter(m => m.unread).length} Unread</small></div><span class="blue">${ic('compose')}</span></div>`;
}

/* =========================================================
   CALENDAR (bisa dipakai)
   ========================================================= */
function buildCalendar(root) {
  const now = new Date();
  const st = { y: now.getFullYear(), m: now.getMonth(), sel: new Date(now.getFullYear(), now.getMonth(), now.getDate()) };
  root.innerHTML = `
    <div class="cal-head"><div class="mn"><span id="cal-m"></span><b id="cal-y" style="font-weight:700"></b></div>
      <div class="cal-nav"><span id="cal-prev">${ic('left')}</span><span id="cal-today" style="font-size:16px;font-weight:600;align-self:center">Hari ini</span><span id="cal-next">${ic('right')}</span></div></div>
    <div class="cal-dow">${['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'].map(d => `<div>${d}</div>`).join('')}</div>
    <div class="cal-days" id="cal-days"></div>
    <div class="cal-ev" id="cal-ev"></div>`;
  const events = d => d.getDate() === 8 ? [{ t: 'Sepanjang hari', title: 'Seminar Vibe Coding', sub: d.getMonth() === 10 ? 'Pengingat: 08 November' : 'Setiap tanggal 8' }] : [];
  function render() {
    $('#cal-m', root).textContent = cap(fmt(new Date(st.y, st.m, 1), { month: 'long' }));
    $('#cal-y', root).textContent = st.y;
    const first = (new Date(st.y, st.m, 1).getDay() + 6) % 7;
    const dim = new Date(st.y, st.m + 1, 0).getDate(), prevDim = new Date(st.y, st.m, 0).getDate();
    let html = '';
    for (let i = 0; i < 42; i++) {
      const dn = i - first + 1; let d, out = false;
      if (dn < 1) { d = new Date(st.y, st.m - 1, prevDim + dn); out = true; }
      else if (dn > dim) { d = new Date(st.y, st.m + 1, dn - dim); out = true; }
      else d = new Date(st.y, st.m, dn);
      if (i >= 35 && out) break;
      const isT = d.toDateString() === now.toDateString(), isS = d.toDateString() === st.sel.toDateString();
      html += `<div class="${out ? 'out ' : ''}${isT ? 'today ' : ''}${isS ? 'sel' : ''}" data-d="${+d}"><em>${d.getDate()}</em>${events(d).length ? '<i></i>' : ''}</div>`;
    }
    $('#cal-days', root).innerHTML = html;
    const evs = events(st.sel);
    $('#cal-ev', root).innerHTML = `<h5>${esc(cap(fmt(st.sel, { weekday: 'long', day: 'numeric', month: 'long' })))}</h5>` +
      (evs.length ? evs.map(e => `<div class="ev"><i></i><div><b>${esc(e.title)}</b><span>${e.t} · ${e.sub}</span></div></div>`).join('') : '<div class="ev-none">Tidak ada acara</div>');
  }
  root.addEventListener('click', e => {
    const d = e.target.closest('[data-d]');
    if (d) { st.sel = new Date(+d.dataset.d); st.y = st.sel.getFullYear(); st.m = st.sel.getMonth(); render(); return; }
    if (e.target.closest('#cal-prev')) { st.m--; if (st.m < 0) { st.m = 11; st.y--; } render(); }
    if (e.target.closest('#cal-next')) { st.m++; if (st.m > 11) { st.m = 0; st.y++; } render(); }
    if (e.target.closest('#cal-today')) { st.y = now.getFullYear(); st.m = now.getMonth(); st.sel = new Date(now.getFullYear(), now.getMonth(), now.getDate()); render(); }
  });
  render();
}

/* =========================================================
   CLOCK (World clock, Alarm, Stopwatch, Timer — semuanya jalan)
   ========================================================= */
const alarms = [
  { t: '05:30', label: 'Bangun', on: true },
  { t: '07:15', label: 'Berangkat kerja', on: false },
];
let alarmFired = '';
function beep(n = 3) {
  try {
    const ac = beep.ac || (beep.ac = new (window.AudioContext || window.webkitAudioContext)());
    if (ac.state === 'suspended') ac.resume();
    for (let i = 0; i < n; i++) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(ac.destination);
      const t = ac.currentTime + i * .4; g.gain.setValueAtTime(.2, t); g.gain.exponentialRampToValueAtTime(.001, t + .3);
      o.start(t); o.stop(t + .32);
    }
  } catch (e) {}
}
function banner(text) {
  const b = h(`<div class="banner">${esc(text)}</div>`); $('#screen').appendChild(b);
  b.style.zIndex = 200; setTimeout(() => b.remove(), 5000);
}
function checkAlarms(d) {
  if (d.getSeconds() !== 0) return;
  const key = hhmm(d) + d.getDate();
  if (alarmFired === key) return;
  const a = alarms.find(x => x.on && x.t === hhmm(d));
  if (a) { alarmFired = key; beep(4); banner('⏰ ' + a.label + ' — ' + a.t); }
}

function buildClock(root) {
  const zones = [['Bandung', 'Asia/Jakarta'], ['Tokyo', 'Asia/Tokyo'], ['Seoul', 'Asia/Seoul'], ['London', 'Europe/London'], ['New York', 'America/New_York']];
  let tab = 'world', swT = null, swStart = 0, swAcc = 0, laps = [], tmT = null, tmEnd = 0, tmLeft = 0;
  root.innerHTML = `<div class="app-body" id="ck-body" style="padding-bottom:0"></div>
    <div class="tabbar">
      <button data-t="world" class="on">${ic('globe')}World Clock</button><button data-t="alarm">${ic('alarm')}Alarm</button>
      <button data-t="sw">${ic('stopwatch')}Stopwatch</button><button data-t="timer">${ic('timer')}Timer</button></div>`;
  const B = $('#ck-body', root);
  const f2 = n => pad(Math.floor(n));
  const swFmt = ms => `${f2(ms / 60000)}:${f2(ms / 1000 % 60)}.${f2(ms % 1000 / 10)}`;
  const tmFmt = s => `${f2(s / 3600)}:${f2(s / 60 % 60)}:${f2(s % 60)}`;
  const zoneInfo = tz => {
    const now = new Date(), loc = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const diff = Math.round((loc - new Date(now.toLocaleString('en-US'))) / 36e5);
    const dd = dayDiff(new Date(now.toLocaleString('en-US')), loc);
    return { time: fmt(now, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).replace('.', ':'), day: dd === 0 ? 'Hari ini' : dd > 0 ? 'Besok' : 'Kemarin', diff: (diff >= 0 ? '+' : '') + diff + ' jam' };
  };
  function render() {
    clearInterval(render.iv);
    if (tab === 'world') {
      const paint = () => B.innerHTML = `<div class="nav"><span class="ck-plus" style="font-size:17px;color:#ff9f0a">Edit</span><span class="ck-plus">+</span></div><div class="ck-title">World Clock</div>` +
        zones.map(([n, tz]) => { const z = zoneInfo(tz); return `<div class="wc"><div><small>${z.day}, ${z.diff}</small><b>${n}</b></div><div class="t">${z.time}</div></div>`; }).join('');
      paint(); render.iv = setInterval(paint, 5000);
    }
    if (tab === 'alarm') {
      B.innerHTML = `<div class="nav"><span class="ck-plus" style="font-size:17px">Edit</span><span class="ck-plus" id="al-add">+</span></div><div class="ck-title">Alarm</div>` +
        alarms.map((a, i) => `<div class="al ${a.on ? '' : 'off'}"><div><div class="t">${a.t}</div><small>${esc(a.label)}, Setiap hari</small></div><div class="sw ${a.on ? 'on' : ''}" data-i="${i}"></div></div>`).join('');
      $$('.sw', B).forEach(s => s.onclick = () => { alarms[+s.dataset.i].on = !alarms[+s.dataset.i].on; render(); });
      $('#al-add', B).onclick = () => {
        const v = prompt('Jam alarm (HH:MM, 24 jam)', '06:00');
        if (v && /^([01]?\d|2[0-3]):[0-5]\d$/.test(v.trim())) { const [a, b] = v.trim().split(':'); alarms.push({ t: pad(a) + ':' + b, label: 'Alarm', on: true }); alarms.sort((x, y) => x.t.localeCompare(y.t)); render(); }
      };
    }
    if (tab === 'sw') {
      const run = !!swT;
      B.innerHTML = `<div class="ck-title" style="padding-top:20px">Stopwatch</div><div class="sw-time" id="sw-t">${swFmt(run ? performance.now() - swStart + swAcc : swAcc)}</div>
        <div class="sw-btns"><button class="rbtn ${run ? '' : 'dim'}" id="sw-l">${run ? 'Lap' : 'Reset'}</button><button class="rbtn ${run ? 'r' : 'g'}" id="sw-s">${run ? 'Stop' : 'Start'}</button></div>
        <div class="laps">${laps.map((l, i) => `<div><span>Lap ${laps.length - i}</span><span>${swFmt(l)}</span></div>`).join('')}</div>`;
      const upd = () => { const e = $('#sw-t', B); if (e) e.textContent = swFmt(performance.now() - swStart + swAcc); };
      if (run) render.iv = setInterval(upd, 31);
      $('#sw-s', B).onclick = () => { if (swT) { swAcc += performance.now() - swStart; swT = null; } else { swStart = performance.now(); swT = true; } render(); };
      $('#sw-l', B).onclick = () => { if (swT) { const cur = performance.now() - swStart + swAcc; laps.unshift(cur - laps.reduce((a, b) => a + b, 0)); } else { swAcc = 0; laps = []; } render(); };
    }
    if (tab === 'timer') {
      if (tmT) {
        B.innerHTML = `<div class="ck-title" style="padding-top:20px">Timer</div><div class="tm-big" id="tm-t">${tmFmt(Math.ceil(tmLeft))}</div>
          <div class="sw-btns"><button class="rbtn" id="tm-c">Cancel</button><button class="rbtn o" id="tm-p">Pause</button></div>`;
        const upd = () => {
          tmLeft = Math.max(0, (tmEnd - performance.now()) / 1000);
          const e = $('#tm-t', B); if (e) e.textContent = tmFmt(Math.ceil(tmLeft));
          if (tmLeft <= 0) { clearInterval(tmInt); tmT = null; beep(5); banner('⏱️ Timer selesai'); if (tab === 'timer') render(); }
        };
        clearInterval(tmInt); var tmInt = setInterval(upd, 200); render.iv = tmInt;
        $('#tm-c', B).onclick = () => { tmT = null; render(); };
        $('#tm-p', B).onclick = () => { tmT = null; tmPaused = tmLeft; render(); };
      } else {
        const hs = tmPaused ? Math.floor(tmPaused / 3600) : 0, ms = tmPaused ? Math.floor(tmPaused / 60 % 60) : 1, ss = tmPaused ? Math.floor(tmPaused % 60) : 0;
        const opts = (n, v) => [...Array(n)].map((_, i) => `<option ${i === v ? 'selected' : ''}>${i}</option>`).join('');
        B.innerHTML = `<div class="ck-title" style="padding-top:20px">Timer</div>
          <div class="tm-sel"><label>jam<select id="tm-h">${opts(24, hs)}</select></label><label>menit<select id="tm-m">${opts(60, ms)}</select></label><label>detik<select id="tm-s">${opts(60, ss)}</select></label></div>
          <div class="sw-btns"><button class="rbtn dim">Cancel</button><button class="rbtn g" id="tm-go">Start</button></div>`;
        $('#tm-go', B).onclick = () => {
          const t = +$('#tm-h', B).value * 3600 + +$('#tm-m', B).value * 60 + +$('#tm-s', B).value;
          if (!t) return; tmPaused = 0; tmLeft = t; tmEnd = performance.now() + t * 1000; tmT = true; render();
        };
      }
    }
  }
  let tmPaused = 0;
  $('.tabbar', root).addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('.tabbar button', root).forEach(x => x.classList.toggle('on', x === b)); tab = b.dataset.t; render();
  });
  render();
}

/* =========================================================
   NOTES
   ========================================================= */
function buildNotes(root) {
  const items = NOTES.map(n => ({ ...n, d: at(n.ago, n.time) })).sort((a, b) => b.d - a.d);
  const sec = d => { const k = dayDiff(d, new Date()); return k <= 0 ? 'Hari Ini' : k <= 7 ? '7 Hari Terakhir' : k <= 30 ? '30 Hari Terakhir' : cap(fmt(d, { month: 'long', year: 'numeric' })); };
  const groups = []; items.forEach(n => { const s = sec(n.d); let g = groups.find(x => x.s === s); if (!g) groups.push(g = { s, l: [] }); g.l.push(n); });
  root.innerHTML = `
    <div class="nav"><div class="back" style="color:#ffd60a">${ic('left')}Folders</div><span style="color:#ffd60a">${ic('more')}</span></div>
    <div class="app-body">
      <div class="bigtitle">Notes</div>
      <div class="searchbar">${ic('search')}Search</div>
      ${groups.map(g => `<div class="nt-sec">${g.s}</div><div class="nt-list">${g.l.map(n => `
        <div class="nt-item" data-id="${n.id}"><b>${esc(n.title)}</b>
          <p><span>${n.d.toDateString() === new Date().toDateString() ? hhmm(n.d) : fmt(n.d, { day: '2-digit', month: '2-digit', year: 'numeric' })}</span><em>${esc(n.body.replace(/\s+/g, ' ').slice(0, 60))}</em></p>
          <div class="nt-folder">${ic('folder')}Notes</div></div>`).join('')}</div>`).join('')}
    </div>
    <div class="nt-foot"><span>${items.length} Notes</span><b></b><b></b><b style="color:#ffd60a">${ic('compose')}</b></div>`;
  body(root).addEventListener('click', e => {
    const it = e.target.closest('.nt-item'); if (!it) return;
    const n = items.find(x => x.id === it.dataset.id);
    push(root, `
      <div class="nav"><div class="back" data-back style="color:#ffd60a">${ic('left')}Notes</div><span style="color:#ffd60a;display:flex;gap:18px">${ic('share')}${ic('more')}</span></div>
      <div class="nt-doc">
        <div class="dt">${esc(fmt(n.d, { day: 'numeric', month: 'long', year: 'numeric' }))} pukul ${esc(hhmm(n.d).replace(':', '.'))}</div>
        <h1 contenteditable="true" spellcheck="false">${esc(n.title)}</h1>
        <div class="bd ${n.mono ? 'mono' : ''}" contenteditable="true" spellcheck="false">${esc(n.body)}</div>
      </div>
      <div class="nt-tools">${ic('check')}${ic('clip')}${ic('compose')}${ic('compose')}</div>`, 'nt-sheet').style.setProperty('--bg', '#000');
  });
}

/* =========================================================
   WEATHER (data asli dari Open-Meteo, lokasi Bandung)
   ========================================================= */
const WMAP = { 0: ['☀️', 'Cerah'], 1: ['🌤️', 'Cerah Berawan'], 2: ['⛅', 'Berawan Sebagian'], 3: ['☁️', 'Berawan'], 45: ['🌫️', 'Berkabut'], 48: ['🌫️', 'Berkabut'],
  51: ['🌦️', 'Gerimis'], 53: ['🌦️', 'Gerimis'], 55: ['🌧️', 'Gerimis Lebat'], 56: ['🌧️', 'Gerimis Beku'], 57: ['🌧️', 'Gerimis Beku'], 61: ['🌧️', 'Hujan Ringan'], 63: ['🌧️', 'Hujan'], 65: ['🌧️', 'Hujan Lebat'],
  66: ['🌧️', 'Hujan Beku'], 67: ['🌧️', 'Hujan Beku'], 80: ['🌦️', 'Hujan Lokal'], 81: ['🌧️', 'Hujan Lokal'], 82: ['⛈️', 'Hujan Deras'], 95: ['⛈️', 'Badai Petir'], 96: ['⛈️', 'Badai Petir'], 99: ['⛈️', 'Badai Petir'] };
const wx = (c, day = true) => (c === 0 || c === 1) && !day ? ['🌙', 'Cerah'] : (WMAP[c] || ['🌡️', '—']);
let WX = null;
function fallbackWx() {
  const now = new Date(), t0 = new Date(now); t0.setMinutes(0, 0, 0);
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`;
  const hrs = [...Array(48)].map((_, i) => new Date(t0.getTime() + i * 36e5));
  const temp = d => Math.round(23.5 + 4.5 * Math.sin((d.getHours() - 9) / 24 * 2 * Math.PI));
  return { off: true,
    current: { time: iso(t0), temperature_2m: temp(t0), apparent_temperature: temp(t0) + 2, relative_humidity_2m: 78, weather_code: 2, wind_speed_10m: 8, surface_pressure: 1009, visibility: 10000, is_day: +(t0.getHours() > 5 && t0.getHours() < 18) },
    hourly: { time: hrs.map(iso), temperature_2m: hrs.map(temp), weather_code: hrs.map(() => 2), is_day: hrs.map(d => +(d.getHours() > 5 && d.getHours() < 18)) },
    daily: { time: [...Array(10)].map((_, i) => iso(new Date(t0.getTime() + i * 864e5)).slice(0, 10)), weather_code: [2, 61, 63, 2, 3, 61, 2, 1, 2, 80], temperature_2m_max: [28, 27, 27, 29, 28, 26, 28, 29, 28, 27], temperature_2m_min: [19, 19, 20, 19, 19, 20, 19, 18, 19, 19], uv_index_max: [9, 7, 6, 9, 8, 6, 9, 10, 9, 8] } };
}
function loadWeather() {
  const u = `https://api.open-meteo.com/v1/forecast?latitude=${CFG.city.lat}&longitude=${CFG.city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure,visibility,is_day&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=${encodeURIComponent(CFG.city.tz)}&forecast_days=10`;
  return fetch(u).then(r => r.json()).then(j => { if (!j.current) throw 0; WX = j; }).catch(() => { WX = fallbackWx(); }).then(() => { paintWidget(); const r = $('#app-weather'); if (r) paintWeather(r); });
}
function paintWidget() {
  if (!WX) return; const c = WX.current, w = wx(c.weather_code, c.is_day);
  $('#ww-t').textContent = Math.round(c.temperature_2m) + '°'; $('#ww-ic').textContent = w[0];
  $('#ww-d').textContent = `${w[1]} · T:${Math.round(WX.daily.temperature_2m_max[0])}° R:${Math.round(WX.daily.temperature_2m_min[0])}°`;
}
function buildWeather(root) {
  root.innerHTML = `<div class="app-body" id="wx-body"><div class="wx-load">Memuat cuaca…</div></div>`;
  if (WX) paintWeather(root);
}
function paintWeather(root) {
  const c = WX.current, d = WX.daily, w = wx(c.weather_code, c.is_day);
  const idx = Math.max(0, WX.hourly.time.findIndex(t => t >= c.time.slice(0, 13) + ':00'));
  const hours = WX.hourly.time.slice(idx, idx + 24).map((t, i) => ({ t, T: WX.hourly.temperature_2m[idx + i], w: wx(WX.hourly.weather_code[idx + i], WX.hourly.is_day[idx + i]) }));
  const lo = Math.min(...d.temperature_2m_min), hi = Math.max(...d.temperature_2m_max);
  const uv = Math.round(d.uv_index_max[0]);
  const uvL = uv < 3 ? 'Rendah' : uv < 6 ? 'Sedang' : uv < 8 ? 'Tinggi' : uv < 11 ? 'Sangat Tinggi' : 'Ekstrem';
  $('#wx-body', root).innerHTML = `
    <div class="wx-top"><h2>${esc(CFG.city.name)}</h2><div class="big">${Math.round(c.temperature_2m)}°</div>
      <div class="cond">${w[0]} ${w[1]}</div><div class="hl">T:${Math.round(d.temperature_2m_max[0])}°  R:${Math.round(d.temperature_2m_min[0])}°</div></div>
    <div class="wx-card"><div class="hd">${ic('clock')} Prakiraan per jam</div>
      <div class="wx-hours">${hours.map((x, i) => `<div><span>${i === 0 ? 'Sekarang' : x.t.slice(11, 13)}</span><em>${x.w[0]}</em>${Math.round(x.T)}°</div>`).join('')}</div></div>
    <div class="wx-card"><div class="hd">${ic('clock')} Prakiraan 10 hari</div>
      ${d.time.map((t, i) => { const dt = new Date(t + 'T12:00'); const l = (d.temperature_2m_min[i] - lo) / (hi - lo) * 100, r = (d.temperature_2m_max[i] - lo) / (hi - lo) * 100;
        return `<div class="wx-day"><span>${i === 0 ? 'Hari ini' : cap(fmt(dt, { weekday: 'short' }))}</span><span>${wx(d.weather_code[i])[0]}</span><span class="lo">${Math.round(d.temperature_2m_min[i])}°</span><div class="bar"><i style="left:${l}%;width:${Math.max(8, r - l)}%"></i></div><span class="hi">${Math.round(d.temperature_2m_max[i])}°</span></div>`; }).join('')}</div>
    <div class="wx-grid">
      <div class="wx-card"><div class="hd">☀️ Indeks UV</div><div class="v">${uv}</div><div class="s">${uvL}</div></div>
      <div class="wx-card"><div class="hd">💨 Angin</div><div class="v">${Math.round(c.wind_speed_10m)}<small style="font-size:15px"> km/j</small></div><div class="s">Kecepatan angin saat ini</div></div>
      <div class="wx-card"><div class="hd">🌡️ Terasa seperti</div><div class="v">${Math.round(c.apparent_temperature)}°</div><div class="s">${c.apparent_temperature > c.temperature_2m ? 'Terasa lebih hangat' : 'Mirip suhu sebenarnya'}</div></div>
      <div class="wx-card"><div class="hd">💧 Kelembapan</div><div class="v">${Math.round(c.relative_humidity_2m)}%</div><div class="s">Titik embun sekitar ${Math.round(c.temperature_2m - (100 - c.relative_humidity_2m) / 5)}°</div></div>
      <div class="wx-card"><div class="hd">👁️ Jarak pandang</div><div class="v">${Math.round((c.visibility || 10000) / 1000)}<small style="font-size:15px"> km</small></div><div class="s">${(c.visibility || 10000) >= 10000 ? 'Sangat jernih' : 'Agak berkabut'}</div></div>
      <div class="wx-card"><div class="hd">⏲️ Tekanan</div><div class="v">${Math.round(c.surface_pressure)}<small style="font-size:15px"> hPa</small></div><div class="s">Tekanan udara</div></div>
    </div>${WX.off ? '<div class="wx-load" style="font-size:12px">Offline — menampilkan data contoh</div>' : ''}`;
}

/* =========================================================
   PHONE / CALL
   ========================================================= */
function buildCall(root) {
  let tab = 'recents', filter = 'all', num = '';
  root.innerHTML = `<div class="app-body" id="cl-body" style="padding-bottom:0"></div>
    <div class="tabbar" style="--tc:#0a84ff"><button data-t="fav">${ic('star')}Favorites</button><button data-t="recents" class="on">${ic('clock')}Recents</button><button data-t="contacts">${ic('users')}Contacts</button><button data-t="keypad">${ic('keypad')}Keypad</button><button data-t="vm">${ic('vm')}Voicemail</button></div>`;
  const B = $('#cl-body', root);
  const PH = '<svg class="i" viewBox="0 0 24 24" style="fill:#fff;stroke:none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
  function dial(name) {
    const c = h(`<div class="calling"><div>${avatarOf(name, 110)}</div><h2>${esc(name)}</h2><p>calling mobile…</p><div class="end">${PH}</div></div>`);
    root.appendChild(c); let s = 0;
    const iv = setInterval(() => { if (++s === 3) $('p', c).textContent = 'berdering…'; }, 1000);
    $('.end', c).onclick = () => { clearInterval(iv); c.remove(); };
  }
  function render() {
    if (tab === 'recents') {
      const list = [...CALL_LOGS].filter(logVisible).sort((a, b) => b.d - a.d).filter(l => filter === 'all' || l.type === 'missed');
      B.innerHTML = `<div class="cl-nav"><span class="blue">Edit</span><div class="cl-seg" id="cl-seg"><div data-f="all" class="${filter === 'all' ? 'on' : ''}">All</div><div data-f="missed" class="${filter === 'missed' ? 'on' : ''}">Missed</div></div><span style="width:30px"></span></div>
        <div class="bigtitle">Recents</div>` +
        list.map(l => `<div class="cl-row ${l.type === 'missed' ? 'miss' : ''}">
          <svg class="i ar" viewBox="0 0 24 24" style="${l.type === 'missed' ? 'color:#ff453a' : ''}">${l.type === 'out' ? '<path d="M7 17L17 7M8 7h9v9"/>' : '<path d="M17 7L7 17M16 17H7V8"/>'}</svg>
          <div class="nm"><b>${esc(logName(l))}${l.n > 1 ? ` (${l.n})` : ''}</b><span>mobile${l.type === 'out' ? ' · keluar' : l.type === 'in' ? ' · masuk' : ' · tidak terjawab'}</span></div>
          <div class="tm">${listTime(l.d)}</div>${ic('info', 'inf')}</div>`).join('');
      $('#cl-seg', B).onclick = e => { const f = e.target.dataset.f; if (f) { filter = f; render(); } };
      $$('.cl-row', B).forEach((r, i) => r.onclick = () => dial(logName(list[i])));
    }
    if (tab === 'fav') B.innerHTML = `<div class="cl-nav"><span class="blue">Edit</span><span></span><span class="blue" style="font-size:28px">+</span></div><div class="bigtitle">Favorites</div>
        <div class="cl-ct" data-n="${cname('baby')}">${avatarOf(cname('baby'), 40)}<span>${cname('baby')}</span></div>`;
    if (tab === 'contacts') {
      let last = '';
      B.innerHTML = `<div class="cl-nav"><span class="blue">Lists</span><span></span><span class="blue" style="font-size:28px">+</span></div><div class="bigtitle">Contacts</div><div class="searchbar">${ic('search')}Search</div>` +
        CONTACTS.map(n => n === 'Baby' ? cname('baby') : n).sort((a, b) => a.localeCompare(b)).map(n => { const L = n[0].toUpperCase(); const s = L !== last ? `<div class="cl-sec">${L}</div>` : ''; last = L; return `${s}<div class="cl-ct" data-n="${n}">${avatarOf(n, 36)}<span>${esc(n)}</span></div>`; }).join('');
    }
    if (tab === 'keypad') {
      const L = { 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ', 0: '+' };
      B.innerHTML = `<div class="kp-num" id="kp-n">${esc(num)}</div><div class="kp-pad">${['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => `<button class="kp-key" data-k="${k}"><b>${k}</b><small>${L[k] || ''}</small></button>`).join('')}<span></span><button class="kp-call" id="kp-go">${PH}</button><button class="kp-del" id="kp-d">${num ? ic('backspace') : ''}</button></div>`;
      B.onclick = e => {
        const k = e.target.closest('[data-k]'); if (k) { num += k.dataset.k; render(); return; }
        if (e.target.closest('#kp-d')) { num = num.slice(0, -1); render(); }
        if (e.target.closest('#kp-go') && num) dial(num);
      };
    }
    if (tab === 'vm') B.innerHTML = `<div class="cl-nav"><span></span><span></span><span></span></div><div class="bigtitle">Voicemail</div><div class="vm-empty">Tidak Ada Voicemail</div>`;
    if (tab !== 'keypad') B.onclick = e => { const c = e.target.closest('.cl-ct[data-n]'); if (c) dial(c.dataset.n); };
  }
  $('.tabbar', root).onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('.tabbar button', root).forEach(x => x.classList.toggle('on', x === b)); tab = b.dataset.t; render(); };
  root._render = render;
  render();
}

/* =========================================================
   TELEGRAM
   ========================================================= */
ICP.x = '<path d="M18 6L6 18M6 6l12 12"/>';

/** Sabtu terbaru (jam 20:40 sudah lewat) — dipakai untuk "Jumat"/"Sabtu" di chat. */
function latestSat() {
  const n = new Date();
  for (let k = 0; k < 14; k++) {
    const d = new Date(n); d.setDate(d.getDate() - k); d.setHours(20, 40, 0, 0);
    if (d.getDay() === 6 && d <= n) return d;
  }
  return n;
}
/** Token hari: angka = N hari lalu · F = Jumat, S = Sabtu (boleh F-1 = Kamis) */
function atTok(tok, time) {
  const m = /^([FS])(-?\d+)?$/.exec(tok);
  if (!m) return at(+tok, time);
  const d = latestSat(); if (m[1] === 'F') d.setDate(d.getDate() - 1); if (m[2]) d.setDate(d.getDate() + parseInt(m[2], 10));
  const [H, M] = time.split(':').map(Number); d.setHours(H, M, 0, 0); return d;
}
function parseChat(c) {
  const msgs = []; let cur = null; const now = new Date();
  c.src.trim().split('\n').forEach(line => {
    line = line.trim(); if (!line) return;
    if (line[0] === '#') { const [a, t] = line.slice(1).split(' '); cur = atTok(a, t); return; }
    if (line[0] === '@') { const [H, M] = line.slice(1).split(':').map(Number); cur = new Date(cur); cur.setHours(H, M, 0, 0); return; }
    const tm = /^(\d\d):(\d\d) (.*)$/.exec(line);               // "00:17 o|teks" = jam eksplisit
    if (tm) { cur = new Date(cur); cur.setHours(+tm[1], +tm[2], 0, 0); line = tm[3]; }
    const i = line.indexOf('|'), who = line.slice(0, i), text = line.slice(i + 1);
    const t = cur > now ? new Date(now) : new Date(cur);
    msgs.push({ who, text, t, out: c.group ? who === 'G' : who === 'o', name: c.group ? (who === 'G' ? CFG.displayName : GROUP_NAMES[who]) : '' });
    cur = new Date(cur.getTime() + (text.length > 40 ? 2 : text.length % 2) * 60000);
  });
  c.msgs = msgs;
}
const lastOf = c => { const m = c.msgs[c.msgs.length - 1]; return { t: m.t, text: m.text, out: m.out, name: m.name }; };
CHATS.forEach(c => {
  if (c.src) parseChat(c);
  else if (c.pre) c.msgs = [{ who: 'i', text: c.pre, t: at(c.ago, c.time), out: false, name: '' }];
  else c.msgs = [];
  if (c.replay) {                                   // Zayn & Andrew: skrip lama dimainkan ulang secara live (cepat)
    const sid = c.id === 'zayn' ? 'z1' : 'a1';
    SCENES[sid].lines = c.msgs.map(m => [m.out ? 'Gravy' : c.name, m.text]);
    c.msgs = [];
  }
  c.last = c.msgs.length ? lastOf(c) : { t: at(c.ago || 0, c.time || '00:00'), text: '', out: false, name: '' };
});
// Kembalikan pesan live yang sudah tersimpan (aditif — tidak menimpa riwayat lama) + kontak yang sudah muncul
Object.keys(ST.msgs).forEach(id => {
  const c = CHATS.find(x => x.id === id); if (!c) return;
  ST.msgs[id].forEach(r => c.msgs.push({ who: r.o ? 'o' : 'i', text: r.x, t: new Date(r.t), out: !!r.o, sr: !!r.s, name: spk(r.n || '') }));
  if (c.msgs.length) c.last = lastOf(c);
});
Object.keys(ST.reveal).forEach(id => { const c = CHATS.find(x => x.id === id); if (c) c.hidden = false; });
Object.keys(ST.unread).forEach(id => { const c = CHATS.find(x => x.id === id); if (c) c.unread = ST.unread[id]; });
// Pesan masuk yang baru berupa notifikasi (belum diputar live) tetap di posisi atas & unread setelah refresh
Object.keys(ST.bump).forEach(id => { const c = CHATS.find(x => x.id === id), b = ST.bump[id]; if (c && (!c.last || +c.last.t < b.t)) c.last = { t: new Date(b.t), text: b.x, out: false, name: b.n || '' }; });
CHATS.forEach(c => { if (IDENT[c.id]) c.name = cname(c.id); });
const chatById = id => CHATS.find(c => c.id === id);
function avatarSrc(name) {
  const k = String(name).toLowerCase();
  for (const n in AVATARS) if (n.toLowerCase() === k) return AVATARS[n];
  const al = AVATAR_ALIAS[name]; return al ? avatarSrc(al) : null;
}
/** Avatar: foto kalau ada, kalau tidak inisial berwarna */
function avatarOf(name, size) {
  const base = avatar(name, size), src = avatarSrc(name);
  if (!src) return base;
  return base.replace(/<\/div>$/, `<img class="av-img" src="${src}" alt="" onerror="this.remove()"></div>`);
}

const TG = { root: null, open: null, add: null, typing: null, busy: null, sheet: null };
const STORY_SEEN = {}, STORY_LIKED = {};
const dayLabel = t => {
  const o = { day: 'numeric', month: 'long' };
  if (dayDiff(t, new Date()) < 7) o.weekday = 'long';
  if (t.getFullYear() !== new Date().getFullYear()) o.year = 'numeric';
  return cap(fmt(t, o));
};

/** Tambah pesan ke chat (data + tampilan yang sedang terbuka + daftar chat) */
function addMsg(c, text, out) { return pushMsg(c, out ? 'Gravy' : (c.group ? 'x' : c.name), text); }

function buildTelegram(root) {
  TG.root = root;
  root.innerHTML = `
    <div class="tg-nav"><span>Edit</span><b>Chats</b><span style="display:flex;gap:18px" data-act="new">${ic('compose')}</span></div>
    <div class="app-body" style="padding-bottom:0"><div id="tg-list"></div></div>
    <div class="tabbar tg-tabs"><button>${ic('user')}Contacts</button><button>${ic('phone')}Calls</button><button class="on">${ic('comment')}Chats</button><button>${ic('cog')}Settings</button></div>`;
  $('[data-act=new]', root).addEventListener('click', openContacts);
  $('#tg-list', root).addEventListener('click', e => {
    if (e.target.closest('[data-add]')) return openStoryGallery();
    const st = e.target.closest('[data-s]'); if (st) return openStories(st.dataset.s);
    const r = e.target.closest('.tg-row'); if (!r) return;
    const c = chatById(r.dataset.id); if (c.open === false) return;
    openChat(c);
  });
  renderChatList();
}
/** Chat yang baru masuk lewat notifikasi dan belum dibuka → naik ke baris paling atas */
const hot = c => (c.unread > 0 && ST.bump[c.id]) ? 1 : 0;
function renderChatList() {
  if (!TG.root) return;
  const el = $('#tg-list', TG.root); if (!el) return;
  const list = CHATS.filter(c => !c.hidden || c.msgs.length).sort((a, b) => hot(b) - hot(a) || (hot(a) ? b.last.t - a.last.t : 0) || (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.last.t - a.last.t);
  el.innerHTML = `
    <div class="st-bar">
      <div class="st-it" data-add="1"><div class="st-ring add">${avatarOf('Gravy', 58)}<i class="st-plus">+</i></div><span>Add Story</span></div>
      ${STORIES.filter(s => storyItems(s).length).map(s => `
      <div class="st-it" data-s="${s.id}">
        <div class="st-ring ${STORY_SEEN[s.id] ? 'seen' : ''}">${avatarOf(s.id === 'baby' ? cname('baby') : s.who, 58)}</div>
        <span>${esc(storyName(s))}</span></div>`).join('')}</div>
    <div class="tg-search">${ic('search')}Search for messages or users</div>
    ${list.map(c => {
      const l = c.last; if (!l.text) return `<div class="tg-row ${c.pinned ? 'pin' : ''}" data-id="${c.id}">${avatarOf(c.name, 56)}<div class="tx"><div class="tg-top"><b>${c.group ? ic('users') : ''}${esc(c.name)}</b><span class="tg-time"></span></div><div class="tg-bot"><div class="tg-pre" style="color:#6d7f92">Belum ada pesan</div>${c.pinned ? `<span class="tg-pinic">${ic('pin')}</span>` : ''}</div></div></div>`;
      const tx = c.group && l.name && !l.out ? `<i>${esc(l.name)}</i><br>${esc(l.text)}` : esc(l.text);
      return `<div class="tg-row ${c.pinned ? 'pin' : ''}" data-id="${c.id}">${avatarOf(c.name, 56)}
        <div class="tx"><div class="tg-top"><b>${c.group ? ic('users') : ''}${esc(c.name)}</b>
          <span class="tg-time">${l.out ? ic('dcheck', 'ck') : ''}${listTime(l.t)}</span></div>
          <div class="tg-bot"><div class="tg-pre">${l.out && c.group ? '<i>You</i><br>' : ''}${tx}</div>
          ${c.unread ? `<span class="tg-bdg ${c.mute ? 'mute' : ''}">${c.unread}</span>` : c.pinned ? `<span class="tg-pinic">${ic('pin')}</span>` : ''}</div></div></div>`;
    }).join('')}`;
}

/* ---------- gelembung chat ---------- */
function bubble(m, group, prev) {
  const first = !prev || prev.out !== m.out || prev.name !== m.name || m.t - prev.t > 6e5 || prev.t.toDateString() !== m.t.toDateString();
  const sn = group && !m.out && first ? `<span class="sn" style="color:${NAME_COL[hash(m.name) % NAME_COL.length]}">${esc(m.name)}</span>` : '';
  const txt = esc(m.text).replace(/@(\w+)/g, '<span style="color:#6ab3f3">@$1</span>');
  const b = `<div class="bub ${m.out ? 'out' : 'in'} ${first ? 'first' : ''}">${sn}${m.sr ? '<span class="sr">↩ Balasan story</span>' : ''}${txt}<span class="mt">${hhmm(m.t)}${m.out ? ic('dcheck') : ''}</span></div>`;
  if (group && !m.out) return `<div class="brow ${first ? 'first' : ''}"><div class="bav">${avatarOf(m.name, 34)}</div>${b}</div>`;
  return b;
}
function openChat(c) {
  if (TG.open === c.id && TG.sheet && TG.sheet.isConnected) return TG.sheet;   // cegah dua sheet chat yang sama (klik ganda)
  const root = TG.root;
  const s = push(root, `
    <div class="tg-head"><div class="back" data-back>${ic('left')}</div><div class="hn"><b>${esc(c.name)}</b><span class="sub">${esc(c.sub || '')}</span></div>${avatarOf(c.name, 38)}</div>
    <div class="tg-msgs"></div>
    <div class="tg-input">${ic('clip')}<input placeholder="Message" autocomplete="off">${ic('mic', 'mic')}${ic('send', 'snd')}</div>`, 'tg-chat');
  const box = $('.tg-msgs', s), sub = $('.sub', s); let prev = null, day = '', tyEl = null, lastAv = null;
  let stickRaf = 0;
  const stick = () => { cancelAnimationFrame(stickRaf); stickRaf = requestAnimationFrame(() => { box.scrollTo({ top: box.scrollHeight }); }); };   // smooth otomatis lewat CSS .live   // 1x per frame → tidak 'loncat' saat typing indicator
  const add = m => {
    if (tyEl) tyEl.remove();
    const k = m.t.toDateString();
    if (k !== day) { day = k; box.insertAdjacentHTML('beforeend', `<div class="tg-day">${esc(dayLabel(m.t))}</div>`); prev = null; }
    const cont = prev && prev.out === m.out && prev.name === m.name && m.t - prev.t <= 6e5 && prev.t.toDateString() === m.t.toDateString();
    box.insertAdjacentHTML('beforeend', bubble(m, c.group, prev)); prev = m;
    if (box.classList.contains('live')) { const all = box.querySelectorAll('.bub:not(.ty)'); const el = all[all.length - 1]; if (el) { el.classList.add('pop'); el.addEventListener('animationend', () => el.classList.remove('pop'), { once: true }); } }
    if (c.group && !m.out) { const rows = box.querySelectorAll('.brow'); if (cont && lastAv) lastAv.style.visibility = 'hidden'; lastAv = $('.bav', rows[rows.length - 1]); } else lastAv = null;
    if (tyEl) box.appendChild(tyEl);
    stick();
  };
  c.msgs.forEach(add);
  c.unread = 0; TG.open = c.id; TG.add = add;
  TG.typing = (on, who = 'Gravy', out = true) => {   // indikator "<nama> is typing..."
    sub.classList.toggle('typing', on); sub.textContent = on ? `${who === 'Gravy' ? 'Gravy' : (c.group ? GNAME(spk(who)) : c.name)} is typing` : (c.sub || '');
    if (tyEl) { tyEl.remove(); tyEl = null; }
    if (on) { tyEl = h(`<div class="bub ${out ? 'out' : 'in'} ty"><i></i><i></i><i></i></div>`); box.appendChild(tyEl); stick(); }
  };
  setTimeout(stick, 340);
  setTimeout(() => box.classList.add('live'), 420);   // setelah riwayat tampil: pesan baru pakai pop-in + scroll halus
  const inp = $('input', s), bar = $('.tg-input', s);
  inp.addEventListener('input', () => bar.classList.toggle('typing', !!inp.value.trim()));
  TG.busy = on => { if (ST.blocked && ST.blocked[c.id]) return; inp.disabled = on; inp.placeholder = on ? 'Gravy sedang membalas…' : 'Message'; };   // saat dialog live berjalan, pembaca tidak bisa mengetik
  const send = () => { if (inp.disabled) return; const v = inp.value.trim(); if (!v) return; inp.value = ''; bar.classList.remove('typing'); addMsg(c, v, true); };
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  $('.snd', s).addEventListener('click', send);
  const back = s.back;
  s.back = () => { LIVE.tok++; TG.open = null; TG.add = null; TG.lock = null; TG.typing = null; TG.busy = null; TG.sheet = null; back(); renderChatList(); };
  const lockChat = () => {   // akun diblokir / tidak tersedia: input mati, tidak bisa mengetik
    if (TG.typing) TG.typing(false);
    inp.value = ''; inp.disabled = true; inp.placeholder = 'Akun tidak tersedia'; bar.classList.remove('typing'); bar.classList.add('blocked');
    sub.textContent = 'terakhir dilihat sudah lama'; if (!box.querySelector('.tg-sys')) { box.insertAdjacentHTML('beforeend', `<div class="tg-sys">Kamu tidak dapat mengirim pesan ke pengguna ini.</div>`); stick(); }
  };
  TG.lock = lockChat;
  if (ST.blocked && ST.blocked[c.id]) lockChat();
  TG.sheet = s; delete ST.unread[c.id]; save();
  renderChatList();
  onChatOpen(c);
  return s;
}

/* ---------- halaman kontak (New Message) ---------- */
function openContacts() {
  const root = TG.root;
  const s = push(root, `
    <div class="nav"><div class="back" data-back>${ic('left')}Chats</div><b style="font-size:17px">New Message</b><span style="width:60px"></span></div>
    <div class="searchbar">${ic('search')}<input id="ct-q" placeholder="Search" autocomplete="off" style="flex:1;background:none;border:0;outline:0;font-size:17px"></div>
    <div class="app-body ct-list"></div>`, 'tg-contacts');
  s.style.setProperty('--bg', '#000');
  const list = $('.ct-list', s);
  const paint = q => {
    const items = TG_CONTACTS.map(n => n === 'Baby' ? cname('baby') : n).filter(n => n.toLowerCase().includes(q.toLowerCase()));
    list.innerHTML = items.map(n => `<div class="ct-row" data-n="${esc(n)}">${avatarOf(n, 40)}<span>${esc(n)}</span></div>`).join('') || '<div class="ev-none">Tidak ditemukan</div>';
  };
  paint('');
  $('#ct-q', s).addEventListener('input', e => paint(e.target.value.trim()));
  list.addEventListener('click', e => {
    const r = e.target.closest('.ct-row'); if (!r) return;
    const name = r.dataset.n;
    let c = CHATS.find(x => x.name.toLowerCase() === name.toLowerCase() || (name === 'Noona kian' && x.id === 'kian') || (name === 'Miyuka' && x.id === 'miyuka'));
    if (!c) { c = { id: 'x-' + name, name, sub: 'last seen recently', msgs: [], hidden: true }; CHATS.push(c); c.last = { t: new Date(0), text: '', out: false, name: '' }; }
    s.back(); setTimeout(() => openChat(c), 120);
  });
}

/* ---------- STORY ---------- */
function openStories(startId) {
  const root = TG.root;
  const LIST = STORIES.filter(s => storyItems(s).length); if (!LIST.length) return;
  let ui = Math.max(0, LIST.findIndex(s => s.id === startId)), ii = 0, el0 = 0, paused = false, closed = false, last = 0, raf = 0;
  const v = h(`<div class="story-view">
    <div class="sv-img"><img alt=""></div><div class="sv-shade"></div>
    <div class="sv-top"><div class="sv-bars"></div>
      <div class="sv-head"><span class="sv-av"></span><b></b><small></small><span class="sv-x">${ic('x')}</span></div></div>
    <div class="sv-bottom"><input class="sv-in" placeholder="Reply privately…" autocomplete="off"><button class="sv-like" aria-label="Like">${ic('heart')}</button><button class="sv-snd" aria-label="Kirim">${ic('send')}</button></div>
    <div class="sv-toast"></div></div>`);
  root.appendChild(v); requestAnimationFrame(() => v.classList.add('in'));
  const toast = t => { const e = $('.sv-toast', v); e.textContent = t; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 1500); };
  function show() {
    const s = LIST[ui], SI = storyItems(s), it = SI[ii];
    STORY_SEEN[s.id] = true; el0 = 0;
    $('.sv-img img', v).src = it.img;
    const nm = s.id === 'baby' ? cname('baby') : s.who;
    $('.sv-av', v).innerHTML = avatarOf(nm, 34); $('.sv-head b', v).textContent = nm; $('.sv-head small', v).textContent = (s.id === 'me' || s.id === 'baby') ? 'baru saja' : `${it.h} j lalu`;
    $('.sv-bars', v).innerHTML = SI.map((_, k) => `<div class="bar"><i style="width:${k < ii ? 100 : 0}%"></i></div>`).join('');
    $('.sv-like', v).classList.toggle('liked', !!STORY_LIKED[s.id + ii]);
  }
  const next = () => { const s = LIST[ui]; if (ii < storyItems(s).length - 1) ii++; else if (ui < LIST.length - 1) { ui++; ii = 0; } else return close(); show(); };
  const prev = () => { if (ii > 0) ii--; else if (ui > 0) { ui--; ii = 0; } show(); };
  function close() { if (closed) return; closed = true; cancelAnimationFrame(raf); v.classList.remove('in'); setTimeout(() => v.remove(), 260); renderChatList(); document.removeEventListener('keydown', onKey); }
  const onKey = e => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); if (e.key === 'Escape') { e.stopPropagation(); close(); } };
  document.addEventListener('keydown', onKey);
  function loop(ts) {
    if (closed) return;
    const dt = last ? Math.min(100, ts - last) : 0; last = ts;
    if (!paused) el0 += dt;
    const p = Math.min(1, el0 / STORY_MS), cur = $$('.sv-bars i', v)[ii]; if (cur) cur.style.width = (p * 100) + '%';
    if (p >= 1) next();
    raf = requestAnimationFrame(loop);
  }
  /* tap / slide */
  let px = 0, py = 0, down = false, held = false, holdT = null;
  v.addEventListener('pointerdown', e => {
    if (e.target.closest('.sv-bottom,.sv-x')) return;
    down = true; held = false; px = e.clientX; py = e.clientY;
    holdT = setTimeout(() => { held = true; paused = true; }, 260);
  });
  const up = e => {
    if (!down) return; down = false; clearTimeout(holdT);
    const dx = (e.clientX - px) / S, dy = (e.clientY - py) / S, still = Math.abs(dx) < 10 && Math.abs(dy) < 10;
    if (held) { held = false; paused = document.activeElement === $('.sv-in', v); if (still) return; }
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) return dx > 0 ? next() : prev();   // slide kanan = lanjut, kiri = kembali
    if (dy > 90) return close();
    if (still) { const r = v.getBoundingClientRect(); (e.clientX - r.left) / r.width < .33 ? prev() : next(); }   // tap kiri = kembali, tap kanan = lanjut
  };
  v.addEventListener('pointerup', up); v.addEventListener('pointercancel', () => { down = false; clearTimeout(holdT); paused = false; });
  $('.sv-x', v).addEventListener('click', close);
  const inp = $('.sv-in', v);
  inp.addEventListener('focus', () => paused = true); inp.addEventListener('blur', () => paused = false);
  const reply = () => { if (!inp.value.trim()) return; inp.value = ''; inp.blur(); toast('Balasan terkirim ✓'); };
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') reply(); });
  $('.sv-snd', v).addEventListener('click', reply);
  $('.sv-like', v).addEventListener('click', e => {
    const k = LIST[ui].id + ii; STORY_LIKED[k] = !STORY_LIKED[k];
    e.currentTarget.classList.toggle('liked', STORY_LIKED[k]); if (STORY_LIKED[k]) toast('❤️ Disukai');
  });
  show(); raf = requestAnimationFrame(loop);
}

/* =========================================================
   SUARA, NOTIFIKASI, NAVIGASI
   ========================================================= */
function tone(freqs, dur = .12, vol = .18) {
  try {
    const ac = beep.ac || (beep.ac = new (window.AudioContext || window.webkitAudioContext)());
    if (ac.state === 'suspended') ac.resume();
    freqs.forEach((f, i) => {
      const o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; o.frequency.value = f; o.connect(g); g.connect(ac.destination);
      const t = ac.currentTime + i * dur; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + dur + .15);
      o.start(t); o.stop(t + dur + .2);
    });
  } catch (e) {}
}
const ding = () => tone([1175, 1568, 2093], .1);
const pop = () => tone([660], .05, .08);

/** Ikon notifikasi: foto kontak + lencana app kecil (kalau avatar=true), atau ikon app biasa */
function notifIcon(app, title, av) {
  return av ? `<div class="nav-av">${avatarOf(title, 38)}<span class="nbadge">${appIconHTML(app)}</span></div>` : appIconHTML(app);
}
function notify({ app, title, body, avatar: av, onTap }) {
  ding();
  const st = phone.dataset.state;
  if (st === 'lock' || st === 'passcode') {            // layar terkunci → masuk tumpukan notif lockscreen
    const n = h(`<div class="notif">${notifIcon(app, title, av)}<div class="nt"><div class="nt-top"><b>${esc(title)}</b><small>sekarang</small></div><p>${esc(body)}</p></div></div>`);
    const box = $('#lock-notifs'); box.prepend(n); while (box.children.length > 5) box.lastElementChild.remove();
    return;
  }
  const b = h(`<div class="banner-ios">${notifIcon(app, title, av)}<div class="nt"><div class="nt-top"><b>${esc(title)}</b><small>sekarang</small></div><p>${esc(body)}</p></div></div>`);
  const layer = $('#banner-layer'); layer.innerHTML = ''; layer.appendChild(b);
  requestAnimationFrame(() => b.classList.add('in'));
  let gone = false, y0 = null, swiped = false;
  const kill = () => { if (gone) return; gone = true; b.classList.remove('in'); setTimeout(() => b.remove(), 350); };
  b.addEventListener('pointerdown', e => { y0 = e.clientY; swiped = false; try { b.setPointerCapture(e.pointerId); } catch (_) {} });
  b.addEventListener('pointerup', e => { if (y0 !== null && (y0 - e.clientY) / S > 22) { swiped = true; kill(); } y0 = null; });
  b.addEventListener('pointercancel', () => { y0 = null; });
  b.addEventListener('click', e => { e.stopPropagation(); if (swiped || gone) return; kill(); onTap && onTap(); });   // sekali tap saja
  setTimeout(kill, 4200);
}
/** Buka aplikasi id (dari home atau dari aplikasi lain), lalu jalankan then() */
function gotoApp(id, then) {
  const ico = () => $(`#home [data-app="${id}"]`);
  const go = () => { openApp(id, ico()); then && setTimeout(then, 480); };
  if (currentApp === id) return then && then();
  if (currentApp) { goHome(); setTimeout(go, 520); } else go();
}
function gotoChat(id) {
  gotoApp('telegram', () => {
    const c = chatById(id); if (!c) return;
    if (TG.open === id) return;
    if (TG.open && TG.sheet) { TG.sheet.back(); setTimeout(() => openChat(c), 360); } else openChat(c);
  });
}
function reveal(id) {
  const c = chatById(id); if (!c) return;
  c.hidden = false; ST.reveal[id] = 1; save(); renderChatList();
}

/* =========================================================
   MESIN CHAT LIVE
   ========================================================= */
const LIVE = { tok: 0 };
/** Tambah pesan ke chat (data + tersimpan + tampilan yang sedang terbuka + daftar chat) */
/** Roomchat sedang benar-benar terlihat di layar? */
const isViewing = c => TG.open === c.id && currentApp === 'telegram' && phone.dataset.state === 'app';
/** Pesan/arrival masuk saat roomchat TIDAK terlihat: unread +1, last.t = sekarang, tandai "hot" (naik ke baris teratas) */
function markIncoming(c, text, name) {
  c.unread = (c.unread || 0) + 1; ST.unread[c.id] = c.unread;
  c.last = { t: new Date(), text, out: false, name: name || '' };
  ST.bump[c.id] = { t: +c.last.t, x: text, n: c.last.name };
}
function pushMsg(c, name, text, opt = {}) {
  const out = name === 'Gravy';
  const m = { who: out ? 'o' : 'i', text, t: new Date(), out, sr: !!opt.sr, name: c.group ? (out ? CFG.displayName : GNAME(spk(name))) : '' };
  c.msgs.push(m); c.last = lastOf(c);
  (ST.msgs[c.id] = ST.msgs[c.id] || []).push({ n: c.group && name === BABY_TOK ? BABY_TOK : m.name, x: text, o: out ? 1 : 0, t: +m.t, s: m.sr ? 1 : 0 });
  if (!out && !isViewing(c)) markIncoming(c, text, m.name);        // pesan masuk di latar belakang → unread + naik ke atas
  save();
  if (TG.open === c.id && TG.add) TG.add(m);
  renderChatList();
  return m;
}
const scDone = id => !!(ST.scenes[id] && ST.scenes[id].done);
const needsOk = sc => (sc.needs || []).every(scDone);
const sceneReady = id => { const sc = SCENES[id]; return needsOk(sc) && (!sc.arrive || !!ST.arrived[id]); };
async function visibleTg(tok) {
  for (;;) {
    if (LIVE.tok !== tok) return false;
    if (currentApp === 'telegram' && phone.dataset.state === 'app') return true;
    await sleep(400);
  }
}
async function runScene(id) {
  const sc = SCENES[id], c = sc && chatById(sc.chat); if (!sc || !c) return;
  const S = ST.scenes[id] || (ST.scenes[id] = { n: 0, done: false });
  if (S.done) return;
  const tok = ++LIVE.tok, k = sc.fast ? .16 : 1, w = ms => sleep(ms * k);
  TG.busy && TG.busy(true);
  while (S.n < sc.lines.length) {
    if (!(await visibleTg(tok))) return;
    const [name, text] = sc.lines[S.n], out = name === 'Gravy';
    await w(450 + Math.random() * 350); if (!(await visibleTg(tok))) return;
    TG.typing && TG.typing(true, name, out);
    await w(Math.min(3000, 650 + text.length * 30));
    if (!(await visibleTg(tok))) { TG.typing && TG.typing(false); return; }
    TG.typing && TG.typing(false);
    if (LIVE.tok !== tok) return;
    S.n++; pushMsg(c, name, text); pop();           // n & pesan tersimpan bersamaan → tidak ada duplikasi
  }
  S.done = true; save();
  TG.busy && TG.busy(false);
  if (sc.rename && !ST.renamed) renameHagiel();
  await sleep(500);
  onSceneDone(id);
}
/** Dipanggil saat roomchat dibuka: kalau ada scene aktif untuk chat ini → mulai live */
function onChatOpen(c) {
  LIVE.tok++;                                          // hentikan putaran lain (chat lain / sebelumnya)
  const s = curStep(); if (!s || !s.scenes || ENG.act !== s.id) return;
  const id = s.scenes.find(x => SCENES[x].chat === c.id && sceneReady(x) && !scDone(x));
  if (!id) return;
  TG.busy && TG.busy(true);
  setTimeout(() => { if (TG.open === c.id) runScene(id); }, 700 / SPEED());
}
/** Terapkan nama kontak saat ini (cname) ke SELURUH UI: daftar chat, bar story, header chat, panggilan, viewer story */
function applyNames() {
  CHATS.forEach(c => { if (IDENT[c.id]) c.name = cname(c.id); });
  if (TG.sheet && TG.open) { const c = chatById(TG.open), hb = $('.hn b', TG.sheet); if (c && hb) hb.textContent = c.name; }
  renderChatList();
  const cr = $('#app-call'); cr && cr._render && cr._render();
  const sv = $('.story-view .sv-head b'); if (sv && isBabyName(sv.textContent)) sv.textContent = cname('baby');
}
function renameHagiel() {
  if (ST.renamed) return;
  ST.renamed = true; save();
  applyNames();
  banner('Kontak “Hagiel” sekarang bernama “Baby” 🤍');
}

/* =========================================================
   ALUR CERITA (STEPS) — cerita hanya maju kalau tugas aktif selesai
   ========================================================= */
const ENG = { act: null, actAt: 0, busy: false, again: false, adv: false, rt: 0, cardOn: false };
const STEPS = [
  /* modal = perintah tengah layar (hanya yang dikecualikan). ntf = diluncurkan sebagai notifikasi chat di atas layar.
     mdelay = jeda (ms) sebelum modal muncul supaya tidak terasa spam. */
  { id: 'intro', intro: true, modal: () => `sudah siap memulai kisah? Buka telegram roomchat ${cname('baby')} sekarang.`, task: () => `Buka roomchat ${cname('baby')}`, go: { chat: 'baby' }, scenes: ['h1'] },
  { id: 'eiser', ntf: true, scenes: ['e1'] },
  { id: 'ak1', ntf: true, scenes: ['ak1'] },
  { id: 'mx1', ntf: true, scenes: ['m1'] },
  { id: 'hg2', ntf: true, scenes: ['h2'] },
  { id: 'kn', delay: 10000, ntf: true, scenes: ['k1'] },
  { id: 'hg3', modal: () => `Kamu harus menjelaskan kesalahan pahaman ini ke ${cname('baby')}.`, task: () => `Jelaskan kesalahpahaman ke ${cname('baby')}`, go: { chat: 'baby' }, scenes: ['h3'] },
  { id: 'st1', modal: 'Buat Story Telegram sekarang. Pilih foto pertama.', task: 'Buat Story Telegram (foto 1)', go: { story: 1 }, scenes: [], story: 1 },
  { id: 'rp1', delay: 1500, ntf: true, scenes: ['j1', 'hl1', 'dt1'] },
  { id: 'bk1', ntf: true, scenes: ['bk1'], pre: () => reveal('barudak') },
  { id: 'ak2', card: 'Hari berikutnya · 14:00', ntf: true, scenes: ['ak2'] },
  { id: 'mx2', delay: 1500, ntf: true, scenes: ['m2'] },
  { id: 'st2', modal: 'Buat Story Telegram — foto kedua.', task: 'Buat Story Telegram (foto 2)', go: { story: 2 }, scenes: [], story: 2 },
  { id: 'rp2', delay: 1500, ntf: true, scenes: ['mi1', 'h4'] },
  { id: 'hg5', delay: 1500, ntf: true, scenes: ['h5'] },
  { id: 'jw2', delay: 3000, modal: 'Buka roomchat Jiwa.', task: 'Buka roomchat Jiwa', go: { chat: 'jiwa' }, scenes: ['j2'] },
  { id: 'hg6', delay: 3000, modal: () => `Buka roomchat ${cname('baby')}.`, task: () => `Buka roomchat ${cname('baby')}`, go: { chat: 'baby' }, scenes: ['h6'] },
  { id: 'hg7', card: 'Selesai mabar…', delay: 4000, ntf: true, scenes: ['h7'] },
  { id: 'zy', delay: 4000, ntf: true, scenes: ['z1', 'a1'] },
  { id: 'st3', card: 'Hari ketiga · Siang', modal: 'Buat Story Telegram — foto ketiga.', task: 'Buat Story Telegram (foto 3)', go: { story: 3 }, scenes: [], story: 3 },
  { id: 'mx3', delay: 2000, modal: 'Buka roomchat Maxton.', task: 'Buka roomchat Maxton', go: { chat: 'maxton' }, scenes: ['m3'] },
  { id: 'ak3', delay: 1500, ntf: true, scenes: ['ak3'] },
  { id: 'dt', card: 'Malam hari', delay: 3500, modal: () => `Buka roomchat ${cname('baby')}.`, task: () => `Buka roomchat ${cname('baby')}`, go: { chat: 'baby' }, scenes: ['b1'] },
  { id: 'dito2', delay: 2500, modal: 'Buka roomchat Dito.', task: 'Buka roomchat Dito', go: { chat: 'dito' }, scenes: ['d1'] },
  { id: 'pick', delay: 3000, ntf: true, scenes: ['b2a'] },
  { id: 'dateEnd', card: 'Jam 1 malam', delay: 3000, ntf: true, scenes: ['b2'] },
  { id: 'st4', modal: 'Buat Story Telegram — foto ke-4.', task: 'Buat Story Telegram (foto 4)', go: { story: 4 }, scenes: [], story: 4 },
  { id: 'rp4', delay: 1500, ntf: true, scenes: ['in1', 'mer1'] },
  { id: 'bk2', ntf: true, scenes: ['bk2'] },
  { id: 'call', card: 'Keesokan paginya', delay: 3000, scenes: [], call: true },
  { id: 'ev', delay: 3000, ntf: true, scenes: ['ev1'] },
  { id: 'end', delay: 2500, scenes: [] },   // jeda 2,5 dtk setelah pesan terakhir Gravy → finale (blokir → layar hitam → The End)
];
// Scene yang diluncurkan lewat notifikasi tanpa 'arrive' khusus → otomatis memakai pesan masuk pertama dari naskahnya (hanya notifikasi, pesan diputar live)
STEPS.forEach(s => { if (!s.ntf) return; (s.scenes || []).forEach(id => { const sc = SCENES[id]; if (!sc || sc.arrive) return;
  const l = sc.lines.find(x => x[0] !== 'Gravy'); if (l) sc.arrive = { text: l[1], by: l[0], add: false }; }); });
const curStep = () => STEPS[ST.step] || null;
const stepDone = s => (s.scenes || []).every(scDone) && (!s.story || ST.stories.includes(s.story)) && (!s.call || ST.callDone);
const stepModalText = s => typeof s.modal === 'function' ? s.modal() : s.modal;
const untilUnlocked = async () => { while (!['home', 'app'].includes(phone.dataset.state)) await sleep(500); };

async function deliverArrivals() {
  if (ENG.busy) { ENG.again = true; return; }
  ENG.busy = true;
  try {
    do {
      ENG.again = false;
      const s = curStep(); if (!s) break;
      for (const id of s.scenes || []) {
        const sc = SCENES[id];
        if (ST.arrived[id] || !needsOk(sc)) continue;
        if (sc.arrive) {
          await sleep(900);
          const c = chatById(sc.chat), a = sc.arrive; reveal(sc.chat);
          const by = spk(a.by), nm = c.group ? GNAME(by) : '';
          if (a.add !== false) pushMsg(c, a.by, a.text, { sr: a.sr });          // pushMsg sudah memanggil markIncoming + renderChatList
          else { if (!isViewing(c)) markIncoming(c, a.text, nm); save(); renderChatList(); }
          notify({ app: 'telegram', avatar: true, title: c.name, body: c.group ? `${by}: ${a.text}` : a.text, onTap: () => gotoChat(c.id) });
          ST.arrived[id] = 1; save();
          await sleep(1300);
        } else { ST.arrived[id] = 1; save(); }
      }
    } while (ENG.again);
  } finally { ENG.busy = false; }
}
function timeCard(text) {
  return new Promise(res => {
    const el = $('#gp-card'); el.textContent = text; el.hidden = false; ENG.cardOn = true;
    requestAnimationFrame(() => el.classList.add('on'));
    setTimeout(() => { el.classList.remove('on'); setTimeout(() => { el.hidden = true; ENG.cardOn = false; res(); }, 450); }, 2200 / SPEED());
  });
}
async function startStep(i, resume) {
  ST.step = i; save(); ENG.act = null;
  const s = STEPS[i]; if (!s) return;
  const rt = ++ENG.rt;
  if (!resume) await sleep(s.delay || 700);
  if (ENG.rt !== rt) return;
  if (s.id === 'end') return runFinale(rt);
  if (s.card && !ST.arrived['card:' + s.id]) { await untilUnlocked(); ST.arrived['card:' + s.id] = 1; save(); await timeCard(s.card); }
  if (ENG.rt !== rt) return;
  s.pre && s.pre();
  await deliverArrivals();
  if (ENG.rt !== rt) return;
  ENG.act = s.id; ENG.actAt = Date.now();
  if (TG.open) { const oc = chatById(TG.open); oc && onChatOpen(oc); }   // chat sudah terbuka saat tahap aktif → langsung mulai live
  if (s.call) ensureCall();
  checkStep();
}
function checkStep() {
  const s = curStep(); if (!s || ENG.act !== s.id || ENG.adv || !stepDone(s)) return;
  ENG.adv = true;
  s.post && s.post();
  startStep(ST.step + 1);
  ENG.adv = false;
}
function onSceneDone(id) { deliverArrivals().then(checkStep); }
function onStorySent() { checkStep(); }
function doGo(s) {
  const g = s.go || {};
  if (g.chat) gotoChat(g.chat);
  else if (g.story) gotoApp('telegram', () => openStoryGallery());
  else if (g.app) gotoApp(g.app);
}

/* ---------- modal tengah layar + chip pengingat ---------- */
function openModal({ text, buttons }) {
  const m = $('#gp-modal');
  m.innerHTML = `<div class="gp-box"><p>${esc(text)}</p><div class="gp-btns">${buttons.map((b, i) => `<button class="${b.primary ? 'pri' : ''} ${b.danger ? 'dan' : ''}" data-i="${i}">${esc(b.label)}</button>`).join('')}</div></div>`;
  m.hidden = false;
  let used = false;
  requestAnimationFrame(() => { if (!used) m.classList.add('on'); });   // klik super-cepat sebelum frame pertama tidak boleh 'menghidupkan' modal yang sudah ditutup
  $$('button', m).forEach(b => b.addEventListener('click', e => { e.stopPropagation(); if (used) return; used = true; closeModal(); const f = buttons[+b.dataset.i].fn; f && setTimeout(f, 60); }));
}
function closeModal() { const m = $('#gp-modal'); m.classList.remove('on'); setTimeout(() => { if (!m.classList.contains('on')) { m.hidden = true; m.innerHTML = ''; } uiTick(); }, 240); }
function showStepModal(s) {
  openModal({ text: stepModalText(s), buttons: [
    { label: 'No', fn: () => { if (s.intro) openModal({ text: 'selamat menjelajah kisah ku sendiri', buttons: [{ label: 'OK', primary: true }] }); } },
    { label: 'Yes', primary: true, fn: () => doGo(s) } ] });
}
function uiTick() {
  const st = phone.dataset.state, active = st === 'home' || st === 'app';
  const s = curStep(), pending = s && s.id !== 'end' && ENG.act === s.id && !stepDone(s) ? s : null;
  const modalOpen = !$('#gp-modal').hidden, callOn = $('#call-layer').classList.contains('show') || CALLSTATE.active;
  const chip = $('#gp-chip');
  chip.hidden = !(pending && pending.task && active && !modalOpen && !callOn && !ENG.cardOn);
  if (!chip.hidden) $('span', chip).textContent = (typeof pending.task === 'function' ? pending.task() : pending.task);
  if (pending && pending.modal && !ST.modal[pending.id] && Date.now() - (ENG.actAt || 0) >= (pending.mdelay || 0) / SPEED() && active && !modalOpen && !callOn && !ENG.cardOn && !$('.story-view,.gp-editor', $('#screen'))) {
    ST.modal[pending.id] = 1; save(); showStepModal(pending);
  }
  if (ST.ended && !ST.endSeen && active && $('#gp-end').hidden && !modalOpen) showEnding();
}
$('#gp-chip').addEventListener('click', () => { const s = curStep(); if (!s) return; s.modal ? showStepModal(s) : doGo(s); });

/* ---------- finale: Evander diblokir → layar hitam → teks → The End ---------- */
function blockChat(id) { ST.blocked[id] = 1; save(); if (TG.open === id && TG.lock) TG.lock(); }
function ensureFade() {
  let f = $('#gp-fade');
  if (!f) {
    f = document.createElement('div'); f.id = 'gp-fade'; f.className = 'gp-fade'; f.hidden = true;
    f.innerHTML = `<div class="gp-fade-in"><p class="gp-fade-q">${esc(FINALE_TEXT)}</p><small class="gp-fade-tbc">TO BE CONTINUED</small></div>`;
    $('#gp-end').parentNode.appendChild(f);
  }
  return f;
}
async function runFinale(rt) {
  ENG.finale = true;
  const alive = () => ENG.rt === rt;
  blockChat('evander');                                   // 1) roomchat Evander tidak bisa diketik
  await sleep(2000); if (!alive()) return;
  $$('.banner-ios').forEach(b => b.remove());
  if (TG.open && TG.sheet) { TG.sheet.back(); await sleep(500); }   // 2) tertutup sendiri
  if (currentApp) { goHome(); await sleep(700); }                   //    kembali ke halaman utama
  if (!alive()) return;
  const f = ensureFade(); f.classList.remove('on', 'q-on', 'tbc-on'); f.hidden = false;
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  f.classList.add('on'); await sleep(2800);                         // 3) fade to black
  f.classList.add('q-on'); await sleep(2000 + 6500);                //    teks: fade in → tahan
  f.classList.add('tbc-on'); await sleep(1600 + 2600);              //    "TO BE CONTINUED"
  f.classList.remove('q-on', 'tbc-on'); await sleep(2000);          //    fade out
  if (!alive()) return;
  showEnding();                                                     // 4) layar The End
  await sleep(1000); f.classList.remove('on'); f.hidden = true;
  ENG.finale = false;
}

/* ---------- ending ---------- */
function showEnding() {
  ST.ended = true; save();
  const e = $('#gp-end');
  e.innerHTML = `<div class="gp-end-in"><small>The end?</small><h1>Interactive AU Demo - Gravy Phone</h1>${ENDING_TEXT.map(t => `<p>${esc(t)}</p>`).join('')}<p class="gp-end-credit">Tele @prajurie (ROLE)</p><button id="gp-back">Back</button></div>`;
  e.hidden = false; requestAnimationFrame(() => e.classList.add('on'));
  $('#gp-back', e).addEventListener('click', () => { ST.endSeen = true; save(); e.classList.remove('on'); setTimeout(() => { e.hidden = true; }, 500); });
}

/* =========================================================
   TELEPON (dipicu tahap cerita, bukan timer)
   ========================================================= */
const CALL_LOGS = CALLS.map(c => ({ ...c, id: c.name === 'Baby' ? 'baby' : '', stat: true, d: at(c.ago, c.time) }));
ST.calls.forEach(c => CALL_LOGS.push({ name: c.id, id: c.id, type: c.type, n: 1, d: new Date(c.t) }));
const logName = l => l.id ? cname(l.id) : l.name;
const logVisible = l => !(l.stat && l.id === 'baby' && !ST.renamed);   // panggilan lama "Baby" baru tampil setelah kontak bernama Baby
function logCall(id, type) { ST.calls.push({ id, type, t: Date.now() }); save(); CALL_LOGS.push({ name: id, id, type, n: 1, d: new Date() }); }
const CALLSTATE = { active: false };
let ringIv = null;
const ring = on => { clearInterval(ringIv); if (on) { beep(2); ringIv = setInterval(() => beep(2), 2200); } };
const PHONE_SVG = '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';

async function ensureCall() {
  if (ST.callDone || CALLSTATE.active) return;
  await untilUnlocked(); await sleep(1500);
  if (ST.callDone || CALLSTATE.active || ENG.act !== 'call') return;
  incomingCall('baby', MORNING_CALL);
}
function incomingCall(id, script) {
  if (CALLSTATE.active) return; CALLSTATE.active = true;
  const nm = cname(id), L = $('#call-layer');
  L.innerHTML = `<div class="cl-bg"></div>
    <div class="ic-info"><div class="ic-av">${avatarOf(nm, 120)}</div><div class="ic-name">${esc(nm)}</div><div class="ic-sub">mobile</div></div>
    <div class="ic-bottom">
      <div class="ic-extra"><div>${ic('clock')}<span>Remind Me</span></div><div>${ic('comment')}<span>Message</span></div></div>
      <div class="ic-btns"><div><button class="cbtn red" id="ic-rej">${PHONE_SVG}</button><span>Decline</span></div>
      <div><button class="cbtn green" id="ic-acc">${PHONE_SVG}</button><span>Accept</span></div></div></div>`;
  L.classList.add('show'); ring(true);
  $('#ic-rej', L).onclick = () => { ring(false); logCall(id, 'missed'); closeCallLayer(); setTimeout(() => { if (!ST.callDone) ensureCall(); }, 12000 / SPEED()); };   // ditolak → berdering lagi nanti (adegan belum selesai)
  $('#ic-acc', L).onclick = () => { ring(false); activeCall(id, script); };
}
function closeCallLayer() { const L = $('#call-layer'); L.classList.remove('show'); setTimeout(() => { L.innerHTML = ''; CALLSTATE.active = false; }, 300); }
function activeCall(id, script) {
  const nm = cname(id), L = $('#call-layer'); let sec = 0, step = 0, done = false; const timers = [];
  L.innerHTML = `<div class="cl-bg"></div>
    <div class="ac-top"><div class="ic-av">${avatarOf(nm, 96)}</div><div class="ac-name">${esc(nm)}</div><div class="ac-time" id="ac-t">00:00</div></div>
    <div class="ac-cap" id="ac-cap"></div>
    <div class="ac-grid">${[['mic', 'mute'], ['keypad', 'keypad'], ['phone', 'speaker'], ['plus', 'add call'], ['reels', 'FaceTime'], ['users', 'contacts']].map(([i, t]) => `<div><b>${ic(i)}</b><span>${t}</span></div>`).join('')}</div>
    <div class="ac-end"><button class="cbtn red" id="ac-end">${PHONE_SVG}</button></div>`;
  const tk = setInterval(() => { sec++; $('#ac-t', L).textContent = `${pad(Math.floor(sec / 60))}:${pad(sec % 60)}`; }, 1000);
  function end(finished) {
    if (done) return; done = true; clearInterval(tk); timers.forEach(clearTimeout);
    logCall(id, 'in');
    $('#ac-t', L).textContent = 'Call Ended'; setTimeout(closeCallLayer, 900);
    if (finished) { ST.callDone = true; save(); setTimeout(checkStep, 1200 / SPEED()); }     // hanya selesai kalau dialog tuntas
    else setTimeout(() => { if (!ST.callDone) ensureCall(); }, 12000 / SPEED());
  }
  $('#ac-end', L).onclick = () => end(step >= script.length);
  const cp = $('#ac-cap', L);
  const say = () => {
    if (done) return;
    if (step >= script.length) return void timers.push(setTimeout(() => end(true), 1500 / SPEED()));
    const [who, text] = script[step++];
    cp.insertAdjacentHTML('beforeend', `<div class="cap ${who === 'Gravy' ? 'r' : 'l'}"><b>${esc(who === 'Baby' ? cname('baby') : who)}</b>${esc(text)}</div>`);
    [...cp.children].slice(0, -3).forEach(e => e.remove());
    [...cp.children].forEach((e, i, a) => e.classList.toggle('old', i < a.length - 1));
    timers.push(setTimeout(say, 2300 / SPEED()));
  };
  timers.push(setTimeout(say, 1200 / SPEED()));
}

/* =========================================================
   SETTINGS — termasuk Reset Cerita
   ========================================================= */
function buildSettings(root) {
  const row = (i, bg, t, r = '') => `<div class="st-row"><span class="st-ic" style="background:${bg}">${ic(i)}</span><b>${t}</b><em>${r}</em></div>`;
  root.innerHTML = `<div class="nav"><span></span><span></span><span></span></div><div class="app-body">
    <div class="bigtitle">Settings</div>
    <div class="st-prof">${avatarOf('Gravy', 60)}<div><b>${esc(CFG.displayName)}</b><span>Apple ID, iCloud, Media & Purchases</span></div></div>
    <div class="st-grp">${row('globe', '#0a84ff', 'Wi-Fi', 'Terhubung')}${row('phone', '#30d158', 'Cellular', '')}${row('alarm', '#ff453a', 'Notifications')}${row('cog', '#8e8e93', 'General')}</div>
    <div class="st-cap">CERITA</div>
    <div class="st-grp"><div class="st-row danger" id="st-reset"><span class="st-ic" style="background:#ff453a">${ic('trash')}</span><b>Reset Cerita</b><em>Mulai dari awal</em></div></div>
    <div class="st-note">Hanya mengembalikan progres cerita (chat live, story, postingan hasil cerita, telepon). Chat, kontak & catatan lama tidak dihapus.</div></div>`;
  $('#st-reset', root).addEventListener('click', () => openModal({
    text: 'Reset cerita dari awal? Progres cerita, chat live, story & postingan hasil cerita akan dikembalikan ke awal.',
    buttons: [{ label: 'Batal' }, { label: 'Reset', danger: true, fn: () => { lsDel(SKEY); location.reload(); } }] }));
}

/* =========================================================
   TELEGRAM — Add Story (galeri terkunci + editor)
   ========================================================= */
const storyUnlock = () => STEPS.reduce((m, s, i) => s.story && i <= ST.step ? Math.max(m, s.story) : m, 0);
function openStoryGallery() {
  const root = TG.root, un = storyUnlock();
  $$('.sg-grid', root).forEach(g => { const sh = g.closest('.sheet'); sh && sh.remove(); });   // jangan tumpuk dua galeri (buang yang lama)
  const s = push(root, `<div class="nav"><div class="back" data-back>${ic('left')}Chats</div><b style="font-size:17px">Add Story</b><span style="width:60px"></span></div>
    <div class="app-body"><div class="sg-note">Pilih foto story. Foto tahap berikutnya masih terkunci.</div>
    <div class="sg-grid">${[1, 2, 3, 4].map(n => {
      const sent = ST.stories.includes(n), lock = n > un;
      return `<div class="sg-it ${lock ? 'lock' : ''} ${sent ? 'sent' : ''}" data-n="${n}"><img src="${STORY_PHOTOS[n]}" alt="">${lock ? `<i>${ic('lock')}</i>` : sent ? '<i class="ok">Terkirim</i>' : ''}</div>`;
    }).join('')}</div></div>`, 'tg-contacts');
  s.style.setProperty('--bg', '#000');
  $('.sg-grid', s).addEventListener('click', e => {
    const it = e.target.closest('.sg-it'); if (!it) return; const n = +it.dataset.n;
    if (n > un) return sgToast(s, 'Terkunci — selesaikan alur cerita dulu');
    if (ST.stories.includes(n)) return sgToast(s, 'Foto ini sudah diunggah');
    openStoryEditor(n, s);
  });
}
function sgToast(s, t) { let e = $('.sv-toast', s); if (!e) { e = h('<div class="sv-toast"></div>'); s.appendChild(e); } e.textContent = t; e.classList.add('on'); clearTimeout(sgToast.t); sgToast.t = setTimeout(() => e.classList.remove('on'), 1600); }
function openStoryEditor(n, gal) {
  const ed = h(`<div class="gp-editor"><img src="${STORY_PHOTOS[n]}" alt="">
    <div class="ge-top"><span class="ge-x">${ic('x')}</span><div class="ge-tools">${['Aa', '✎', '☺', '♪'].map(t => `<span class="dis">${t}</span>`).join('')}</div></div>
    <div class="ge-bottom"><div class="ge-hint">Editor dikunci — hanya bisa mengunggah</div><button class="ge-send">Send Story</button></div></div>`);
  TG.root.appendChild(ed); requestAnimationFrame(() => ed.classList.add('in'));
  const close = () => { ed.classList.remove('in'); setTimeout(() => ed.remove(), 260); };
  $('.ge-x', ed).addEventListener('click', close);
  $('.ge-send', ed).addEventListener('click', e => {
    const b = e.currentTarget; if (b.disabled || ST.stories.includes(n)) return; b.disabled = true;      // maksimal sekali per foto
    ST.stories.push(n); ST.storyAt[n] = Date.now(); save();
    b.textContent = 'Terkirim ✓'; ding();
    setTimeout(() => { close(); gal && gal.back(); renderChatList(); onStorySent(); }, 600);
  });
}
function storyItems(s) {
  if (s.id === 'me') return s.items.filter((_, i) => ST.stories.includes(i + 1));
  if (s.id === 'baby') return s.items.filter((_, i) => ST.stories.includes(STORY_BABY_AT[i]));
  return s.items;
}
const storyName = s => s.id === 'baby' ? cname('baby') : s.name;

/* =========================================================
   INSTAGRAM — posting dengan live typing caption
   ========================================================= */
function igItems() { return [...ST.posts.map(p => ({ img: p.img, caption: p.caption, t: p.t, likes: String(12 + p.n * 7) })), ...IG.items]; }
function renderIgGrid(root) {
  const g = $('.ig-grid', root); if (!g) return;
  g.innerHTML = igItems().map((p, i) => `<div data-i="${i}"><img src="${p.img}" alt="" loading="lazy"></div>`).join('');
  const st = $$('.ig-stats b', root)[0]; if (st) st.textContent = IG.posts + ST.posts.length;
}
function openComposer(root) {
  const un = storyUnlock();
  const s = push(root, `<div class="nav"><div class="back" data-back>${ic('left')}</div><b style="font-size:16px">Postingan baru</b><span class="blue" id="cp-post" style="opacity:.35;pointer-events:none;font-weight:600">Post</span></div>
    <div class="app-body" style="padding-bottom:20px"><div class="cp-prev"><img alt="" style="display:none"><div class="cp-empty">Pilih foto</div></div>
    <div class="cp-cap"><span id="cp-text"></span><i class="cp-cur"></i></div>
    <div class="sg-note">Foto yang bisa dipilih mengikuti progres cerita.</div>
    <div class="sg-grid">${[1, 2, 3, 4].map(n => {
      const lock = n > un, did = ST.posts.some(p => p.n === n);
      return `<div class="sg-it ${lock ? 'lock' : ''} ${did ? 'sent' : ''}" data-n="${n}"><img src="${STORY_PHOTOS[n]}" alt="">${lock ? `<i>${ic('lock')}</i>` : did ? '<i class="ok">Diposting</i>' : ''}</div>`;
    }).join('')}</div></div>`, 'ig-sheet');
  s.style.setProperty('--bg', '#000');
  let timer = null, cur = null;
  const post = $('#cp-post', s);
  $('.sg-grid', s).addEventListener('click', e => {
    const it = e.target.closest('.sg-it'); if (!it) return; const n = +it.dataset.n;
    if (n > un || ST.posts.some(p => p.n === n) || cur === n) return;
    cur = n; clearInterval(timer); post.style.opacity = .35; post.style.pointerEvents = 'none';
    $$('.sg-it', s).forEach(x => x.classList.toggle('pick', x === it));
    const im = $('.cp-prev img', s); im.src = STORY_PHOTOS[n]; im.style.display = 'block'; $('.cp-empty', s).style.display = 'none';
    const full = IG_CAPTIONS[n] || '', out = $('#cp-text', s); out.textContent = ''; let i = 0;
    const chars = [...full];
    timer = setInterval(() => {              // ketik otomatis ±5 karakter per pembaruan, kursor terlihat
      i = Math.min(chars.length, i + 5); out.textContent = chars.slice(0, i).join('');
      if (i >= chars.length) { clearInterval(timer); post.style.opacity = 1; post.style.pointerEvents = 'auto'; }
    }, 140 / SPEED());
  });
  post.addEventListener('click', () => {
    if (!cur || ST.posts.some(p => p.n === cur)) return;
    const n = cur, cap = IG_CAPTIONS[n] || '';
    s.back();
    const top = $('.ig-top', root), bar = h('<div class="ig-up"><i></i><span>Mengunggah…</span></div>'); top.after(bar);
    requestAnimationFrame(() => $('i', bar).style.width = '100%');
    setTimeout(() => { ST.posts.unshift({ n, img: STORY_PHOTOS[n], caption: cap, t: Date.now() }); save(); bar.remove(); renderIgGrid(root); }, 2200 / SPEED());
  });
}


/* =========================================================
   MUSIC (Spotify) — bisa diputar
   ========================================================= */
function buildMusic(root) {
  const audio = new Audio(); audio.preload = 'none';
  let cur = -1, mode = 'file'; // 'file' | 'embed'
  const mmss = s => isFinite(s) ? `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}` : '0:00';
  const PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>', PAUSE = '<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
  const NEXT = '<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6zM16 6h2v12h-2z"/></svg>', PREV = '<svg viewBox="0 0 24 24"><path d="M18 6L9.5 12 18 18zM6 6h2v12H6z"/></svg>';
  const cover = (sz, cls = '') => `<div class="sp-cover ${cls}" style="${sz ? `width:${sz}px;height:${sz}px` : ''}"></div>`;
  root.innerHTML = `
    <div class="sp-head"><h2>Your Library</h2><span style="display:flex;gap:18px">${ic('search')}${ic('plus')}</span></div>
    <div class="sp-chips"><span class="on">Playlists</span><span>Songs</span><span>Albums</span></div>
    <div class="app-body">
      <div class="sp-hero">${cover(64)}<div><b style="font-size:17px">Liked Songs</b><div style="color:#a7a7a7;font-size:13.5px;margin-top:2px">Playlist · ${MUSIC.length} songs</div></div></div>
      ${MUSIC.map((m, i) => `<div class="sp-track" data-i="${i}">${cover(52)}<div class="nm"><b>${esc(m.title)}</b><span>${esc(m.artist || 'Song')}</span></div><div class="eq"><i></i><i></i><i></i></div></div>`).join('')}
    </div>
    <div class="sp-mini" id="sp-mini">${cover(40)}<div class="nm"><b id="sp-mt"></b><span id="sp-ma">${'Spotify'}</span></div><button id="sp-mpp" style="width:34px;height:34px;display:grid;place-items:center">${PLAY}</button><div class="pr"><i id="sp-pr"></i></div></div>
    <div class="tabbar" style="background:#000"><button class="on">${ic('home')}Home</button><button>${ic('search')}Search</button><button>${ic('list')}Library</button><button>${ic('plus')}Create</button></div>`;
  $$('.sp-mini svg,.sp-ctl svg', root).forEach(s => s.style.cssText = 'width:26px;height:26px;fill:#fff');
  const mini = $('#sp-mini', root);
  let np = null;

  function paintList() {
    $$('.sp-track', root).forEach(t => { const on = +t.dataset.i === cur; t.classList.toggle('on', on); t.classList.toggle('playing', on && !audio.paused && mode === 'file'); });
    const pp = !audio.paused;
    $('#sp-mpp', root).innerHTML = pp ? PAUSE : PLAY; $('#sp-mpp svg', root).style.cssText = 'width:26px;height:26px;fill:#fff';
    if (np) { const b = $('.pp', np); b.innerHTML = pp ? PAUSE : PLAY; }
  }
  function play(i) {
    cur = i; const m = MUSIC[i]; mode = 'file';
    audio.src = m.file; audio.play().catch(() => {});
    $('#sp-mt', root).textContent = m.title; mini.classList.add('show');
    if (np) fillNp(); paintList();
  }
  audio.addEventListener('error', () => { mode = 'embed'; if (np) fillNp(); else openNp(); paintList(); });
  audio.addEventListener('play', paintList); audio.addEventListener('pause', paintList);
  audio.addEventListener('ended', () => play((cur + 1) % MUSIC.length));
  audio.addEventListener('timeupdate', () => {
    $('#sp-pr', root).style.width = (audio.currentTime / (audio.duration || 1) * 100) + '%';
    if (np) { const r = $('input', np); if (!r.dragging) { r.value = audio.currentTime / (audio.duration || 1) * 1000; } $('.t1', np).textContent = mmss(audio.currentTime); $('.t2', np).textContent = mmss(audio.duration); }
  });
  function fillNp() {
    const m = MUSIC[cur];
    $('.ti b', np).textContent = m.title; $('.ti span', np).textContent = m.artist || 'Song';
    const emb = $('.emb', np);
    if (mode === 'embed') {
      emb.innerHTML = `<div class="sp-embed"><iframe src="https://open.spotify.com/embed/track/${m.spotify}?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen" loading="lazy"></iframe></div><div class="sp-note">File mp3 belum ada di assets/assets-music-/ — memakai pemutar Spotify.</div>`;
      $('.bar', np).style.display = $('.sp-ctl', np).style.display = 'none';
    } else { emb.innerHTML = ''; $('.bar', np).style.display = $('.sp-ctl', np).style.display = ''; }
  }
  function openNp() {
    if (np) return;
    np = push(root, `
      <div class="nav"><div class="back" data-back style="color:#fff">${ic('down')}</div><b style="font-size:13px">PLAYING FROM LIBRARY</b>${ic('more')}</div>
      <div class="app-body" style="padding-bottom:30px">${cover(0, 'cv')}
        <div class="ti"><b></b><span></span></div>
        <div class="emb"></div>
        <div class="sp-bar bar"><input type="range" min="0" max="1000" value="0"><div><span class="t1">0:00</span><span class="t2">0:00</span></div></div>
        <div class="sp-ctl">${ic('shuffle').replace('class="i "', 'class="i" style="stroke:#fff;fill:none;stroke-width:2;width:24px;height:24px"')}<span data-a="prev">${PREV}</span><button class="pp">${PLAY}</button><span data-a="next">${NEXT}</span><span style="width:24px"></span></div>
      </div>`, 'sp-np');
    const old = np.back; np.back = () => { old(); np = null; };
    $$('[data-back]', np).forEach(b => b.onclick = np.back);
    const r = $('input', np);
    r.addEventListener('input', () => { r.dragging = true; });
    r.addEventListener('change', () => { r.dragging = false; if (audio.duration) audio.currentTime = r.value / 1000 * audio.duration; });
    $('.pp', np).onclick = () => audio.paused ? audio.play().catch(() => {}) : audio.pause();
    $('[data-a=next]', np).onclick = () => play((cur + 1) % MUSIC.length);
    $('[data-a=prev]', np).onclick = () => play((cur - 1 + MUSIC.length) % MUSIC.length);
    fillNp(); paintList();
  }
  $('.app-body', root).addEventListener('click', e => { const t = e.target.closest('.sp-track'); if (!t) return; play(+t.dataset.i); openNp(); });
  $('#sp-mpp', root).addEventListener('click', e => { e.stopPropagation(); audio.paused ? audio.play().catch(() => {}) : audio.pause(); });
  mini.addEventListener('click', openNp);
}

/* =========================================================
   START
   ========================================================= */
buildLock(); buildPasscode(); buildHome();
tick(); setInterval(tick, 1000);
loadWeather();
setState('lock');
// Lanjutkan progres cerita yang tersimpan (tidak mengulang adegan yang sudah selesai)
setInterval(uiTick, 500);
if (ST.step >= 0 && !ST.ended) startStep(ST.step, true);
