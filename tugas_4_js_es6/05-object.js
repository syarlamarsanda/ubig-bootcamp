/* OBJECT */
/* object sebenernya bukan fitur ES6, tapi wajib paham dulu sebelum masuk destructuring sama class.
array itu kaya loker bernomor (0, 1, 2), object itu kaya loker yang dikasih label nama */

const profilSiswa = {
    nama: "Syarla",
    kelas: 11,
    jurusan: "PG",
    hobi: ["ngoding", "main game"]
};
/* sebelah kiri titik dua namanya key (labelnya), sebelah kanan namanya value (isinya). tiap pasangan dipisah koma */

// ngambil isi pake titik
console.log(profilSiswa.nama); // Syarla
console.log(profilSiswa.hobi[0]); // ngoding
// bisa juga pake kurung siku, hasilnya sama
console.log(profilSiswa["jurusan"]); // PG

// ngubah sama nambah isi
profilSiswa.kelas = 12; // ubah
profilSiswa.sekolah = "SMK Cyber Media"; // nambah key baru
console.log(profilSiswa);

// object juga bisa nyimpen fungsi, namanya method
const kucing = {
    nama: "oyen",
    suara() {
        return `${this.nama} bilang meong`;
    }
};
console.log(kucing.suara()); // oyen bilang meong
/* this artinya "object ini sendiri", jadi this.nama sama aja kaya kucing.nama.
nulis method langsung suara() { } tanpa kata function itu juga fitur ES6 */

/* FITUR ES6: shorthand property
kalo nama variabelnya sama kaya nama key, cukup ditulis sekali */
const judul = "Belajar ES6";
const durasi = 30;
const videoLama = { judul: judul, durasi: durasi }; // cara lama
const videoBaru = { judul, durasi }; // cara ES6, hasilnya sama persis
console.log(videoLama, videoBaru);
