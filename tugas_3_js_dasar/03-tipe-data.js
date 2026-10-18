/* TIPE DATA: adalah jenis isi yang dimasukin kedalam wadah, ada yang berupa tulisan, angka, benar salah, atau kosong, dll */

let namaMakanan= "miayam";
console.log(typeof namaMakanan); //typeof adalah alat buat ngecek jenis isinya

let umur = 17;
console.log(typeof umur);

let status_siswa = true;
console.log(typeof status_siswa)

let tinggi = 141.1;
console.log(typeof tinggi);

let alamat;
console.log(typeof alamat); // undefined, karna variabelnya udah dibikin tapi belum diisi apa apa

let email = null;
console.log(typeof email); /* hasilnya "object", padahal null itu artinya kosong. ini bug lama dari js yang sengaja dibiarin biar website lama ga rusak, jadi inget aja typeof null itu "object" */

console.log(10+5); // akan mencetak 15, karna jika tipe datanya number akan menjumlahkan keduanya
console.log("10"+5); // akan mencetak 105, karna "10" merupakan string
