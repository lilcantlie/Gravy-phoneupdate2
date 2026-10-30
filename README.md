# Gravy's iPhone â€” Simulator iPhone 15 Pro Max (Fan AU)

Website simulator HP bergaya iPhone (dark mode) dengan cerita interaktif bertahap.
Murni HTML + CSS + JavaScript, tanpa framework. Bisa dibuka di GitHub Pages dan browser Android.

- Passcode: `7777`
- Aplikasi: Telegram, Instagram, Photos, Mail, Calendar, Clock, Notes, Weather, Phone, Spotify, Settings.
  Maps dan Safari hanya berupa logo.

## Struktur file

```
index.html
style.css
app.js
README.md
assets/
  avatar.jpg
  wallpaper-lock.jpg
  assets-avatars-/   foto profil kontak
  assets-photos-/    foto aplikasi Photos
  assets-posts-/     foto postingan Instagram
  assets-stories-/   foto story Telegram
  assets-music-/     01.mp3 ... 05.mp3
```

`index.html` harus berada di root repo, bukan di dalam subfolder.


1. Upload semua file dan folder `assets` ke repo GitHub.
2. Buka Settings > Pages.
3. Pada Source pilih Deploy from a branch, branch `main`, folder `/ (root)`, lalu Save.
4. Tunggu 1-2 menit, lalu buka `https://<username>.github.io/<nama-repo>/`.
5. Setelah memperbarui file, tekan Ctrl+F5 atau bersihkan cache supaya versi baru terbaca.

Cloudflare Pages/Workers bisa dihubungkan ke repo yang sama dan akan deploy otomatis.

## Foto profil kontak

Taruh di `assets/assets-avatars-/` dengan nama persis (huruf kecil, `.jpg`).
Jika file belum ada, otomatis tampil inisial berwarna.

| Kontak | File |
|---|---|
| Gravy | `gravy.jpg` |
| Baby / Hagiel | `baby.jpg` |
| Maxton | `maxton.jpg` |
| Keenan | `keenan.jpg` |
| Miyuka | `miyuka.jpg` |
| Noona Kian | `kian.jpg` |
| Akatsudi (grup) | `akatsudi.jpg` |
| Eiser | `eiser.jpg` |
| Evander | `evander.jpg` |
| Dito | `dito.jpg` |
| Jason BEM FTI | `jason.jpg` |
| Kevin HIMA TI | `kevin.jpg` |
| Zayn Cybersecurity | `zayn.jpg` |
| Andrew PPIC Staff | `andrew.jpg` |
| IT Team | `itteam.jpg` |
| Harvard survivor | `harvard.jpg` |
| Jiwa | `jiwa.jpg` |
| Hilmi | `hilmi.jpg` |
| Merapi | `merapi.jpg` |
| Jeremiel | `jeremiel.jpg` |
| Jan Adam | `jan-adam.jpg` |
| Incen | `incen.jpg` |
| Jourdane | `jourdane.jpg` |
| Barudak Kampus (grup) | `barudak-kampus.jpg` |

## Cara kerja cerita

- Cerita berjalan bertahap dan hanya maju jika tugas aktif selesai (dialog `STEPS` di `app.js`).
- Roomchat memutar pesan secara live dengan indikator "typing". Pembaca tidak bisa mengetik di chat cerita.
- Modal tengah layar punya tombol Yes/No. Tombol No menyisakan chip pengingat kecil.
- Roomchat yang dibuka sebelum waktunya tidak memicu live chat.
- Telegram Add Story memakai 4 foto. Foto tahap berikutnya terkunci, dan tiap foto hanya bisa dikirim sekali.
- Instagram: caption diketik otomatis, postingan tersimpan permanen.
- Telepon masuk hanya muncul pada tahap cerita yang benar, tanpa timer sejak web dibuka.
- Hagiel berganti nama menjadi Baby setelah adegan jadian.
- Setelah cerita utama selesai tampil layar "3:00 AM, Life of me" dengan tombol "Kembali ke HP".

## Penyimpanan progres

- Progres disimpan di `localStorage` dengan satu key: `gp_story_v1`. Key lain tidak pernah disentuh.
- Refresh tidak mengulang pesan, story, atau panggilan.
- Reset: Settings > Reset Cerita (dengan konfirmasi). Hanya progres cerita yang dihapus,
  chat lama, kontak, dan catatan tetap aman.
- Kalau `localStorage` diblokir (mode privat), progres hanya bertahan selama tab terbuka.

## Bagian yang masih sementara

Teks berikut belum ada di materi cerita dan diisi sementara. Ubah di `app.js`:

- Notifikasi balasan story Jiwa dan Hilmi, serta dialog Jiwa tahap 1.
- Caption postingan Instagram: konstanta `IG_CAPTIONS`.
- Narasi penutup layar ending: konstanta `ENDING_TEXT`.
- Tanggal event "Seminar Vibe Coding" di kalender.

## Catatan teknis

- Fullscreen otomatis di layar sempit (<= 520px), bingkai HP di layar lebar.
- Kecepatan jeda bisa dipercepat untuk uji coba lewat `window.GP_SPEED` (khusus pengujian, bawaan 1).
- Cuaca memakai Open-Meteo, dan memakai data contoh jika offline.

