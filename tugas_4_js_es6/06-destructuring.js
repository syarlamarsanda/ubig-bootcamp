/* DESTRUCTURING */
/* cara cepet ngebongkar isi array atau object ke variabel variabel terpisah */

// ARRAY DESTRUCTURING: ngambilnya berdasarkan urutan
const warna = ["merah", "kuning", "hijau"];

// cara lama
const warna1 = warna[0];
const warna2 = warna[1];
console.log(warna1, warna2); // merah kuning

// cara ES6, sekali tulis langsung dapet tiga
const [pertama, kedua, ketiga] = warna;
console.log(pertama, kedua, ketiga); // merah kuning hijau

// bisa skip isi pake koma kosong
const [, , terakhir] = warna;
console.log(terakhir); // hijau

// trik: tuker isi 2 variabel tanpa variabel bantuan
let kiri = "A";
let kanan = "B";
[kiri, kanan] = [kanan, kiri]; // baris sebelumnya wajib ada titik koma, kalo ngga error
console.log(kiri, kanan); // B A

// OBJECT DESTRUCTURING: ngambilnya berdasarkan nama key, bukan urutan
const laptop = { merk: "Apple", ram: 8, tahun: 2022 };
const { merk, ram } = laptop;
console.log(merk, ram); // Apple 8

// ganti nama variabelnya pake titik dua
const { tahun: tahunBeli } = laptop;
console.log(tahunBeli); // 2022

// kasih nilai default kalo key nya ga ada di object
const { warnaLaptop = "silver" } = laptop;
console.log(warnaLaptop); // silver

// sering dipake langsung di parameter fungsi
const kenalanSiswa = ({ nama, kelas }) => `aku ${nama}, kelas ${kelas}`;
console.log(kenalanSiswa({ nama: "Syarla", kelas: 11 })); // aku Syarla, kelas 11

/* bedanya:
array pake [ ] dan yang diliat urutannya
object pake { } dan yang diliat nama key nya */
