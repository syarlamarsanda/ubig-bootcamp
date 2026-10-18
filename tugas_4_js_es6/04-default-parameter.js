/* DEFAULT PARAMETER */
/* inget di js dasar, sapa() tanpa argumen hasilnya "halo undefined"?
di ES6 parameter bisa dikasih nilai cadangan, dipake kalo argumennya ga dikirim */

const sapaSiswa = (nama = "teman") => `halo ${nama}!`;
console.log(sapaSiswa("Syarla")); // halo Syarla!
console.log(sapaSiswa()); // halo teman! pake nilai cadangan, bukan undefined lagi

const hitungDiskon = (harga, diskon = 10) => harga - (harga * diskon / 100);
console.log(hitungDiskon(50000)); // 45000, diskon nya pake default 10%
console.log(hitungDiskon(50000, 20)); // 40000, diskon diisi 20 jadi default nya ga dipake

/* nilai default cuma dipake kalo argumennya kosong (undefined).
kalo argumennya diisi, yang diisi yang menang */
