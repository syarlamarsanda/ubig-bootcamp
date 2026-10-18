/* OPERASI STRING */

//NYAMBUNGIN TEKS
let namaDepan = "Syarla";
let namaBelakang = "Marsanda";
let namaPanggilan = " laa";
console.log(namaDepan+ " " +namaBelakang);

//NGUKUR PANJANG TEKS ATAU JUMLAH HURUF
console.log(namaPanggilan.length); // akan mencetak 4 meskipun cuma 3 huruf, karna spasi termasuk

//NGAMBIL SATU HURUF
console.log(namaDepan[0]); //akan mencetak huruf "s" karna diitung mulai dari 0, jadi s merupkan urutan ke 0 bukan 1, 

//rumusnya: nomor huruf terakhir = panjang teks dikurangi 1
console.log(namaDepan[namaDepan.length-1]);
/* langkahnya ada 3:
1. hitung panjang teksnya dulu, "Syarla" panjangnya 6
2. kurangin 1 jadi 5, karna nomor huruf mulainya dari 0
3. ambil huruf di nomor 5, yaitu "a" */

//template literal pake ` dan ${...}
console.log(`halo, nama aku ${namaDepan} ${namaBelakang}`);
console.log(`Nama ${namaDepan} punya ${namaDepan.length} huruf`);
console.log(`nama depan saya adalah ${namaDepan}
    dan nama belakang saya adalah ${namaBelakang}`); //ketika mengklik enter, pada console akan keenter juga


