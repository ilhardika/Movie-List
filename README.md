# Movie List App

Aplikasi Movie List adalah aplikasi CRUD (Create, Read, Update, Delete) yang memungkinkan pengguna untuk menambahkan, melihat, dan mengelola daftar film. Aplikasi ini menggunakan React untuk antarmuka pengguna dan mengakses API film untuk mendapatkan data film.

## Fitur

- Menampilkan daftar film populer menggunakan API dari TMDb (The Movie Database)
- Menambahkan film baru ke dalam daftar
- Deskripsi film yang dipersingkat dengan tanda "..." untuk teks yang terlalu panjang
- Navigasi antar halaman menggunakan React Router

## Teknologi yang Digunakan

- React
- React Router
- Babel
- Webpack
- CSS (Bootstrap)

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/movie-list-app.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd movie-list-app
   ```
3. Instal dependensi: Pastikan Anda memiliki Node.js dan npm terinstal di sistem Anda. Kemudian, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
   ```bash
   npm install
   ```
4. Ganti YOUR_API_KEY: Buka file yang berisi kode Anda dan ganti YOUR_API_KEY dengan API key Anda dari TMDb (The Movie Database).
5. Jalankan aplikasi: Setelah semua langkah di atas selesai, jalankan perintah berikut untuk memulai aplikasi:
   ```bash
   npm start
   ```
6. Akses aplikasi di browser: Buka browser Anda dan akses aplikasi di alamat berikut:
   ```bash
   http://localhost:3000
   ```

## Cara Menggunakan

1. Akses halaman Home untuk melihat daftar film populer.
2. Klik pada menu untuk mengakses halaman CRUD.
3. Tambahkan film baru dengan mengisi form yang tersedia.
4. Film yang baru ditambahkan akan muncul di urutan pertama daftar film.
