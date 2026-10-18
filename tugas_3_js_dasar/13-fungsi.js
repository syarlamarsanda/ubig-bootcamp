/* FUNGSI */
/* Fungsi itu bungkusan kode yang dikasih nama. kodenya ditulis sekali, terus kapan pun kamu butuh, tinggal panggil namanya. */

/* example */
function cetakGaris(){
    console.log("========");
} 
/* function itu kata kuncinya, ngasih tau js "aku mau bikin fungsi"
cetakGaris itu nama fungsinya. aturan namanya sama kaya variabel
() itu tempar parameter. sekarang masih kosong, isinya nanti kita bahas dimateri berikutnya. 
yang didalam { } itu isi bungkusannya, kode yang bakal dijalanin */

cetakGaris();
console.log("jadwal hari ini");
cetakGaris();

/* example 2 */
function sapaPagi(){
    console.log("selamat pagi!");
    console.log("jangan lupa sarapan ya!");
}

sapaPagi;
sapaPagi();
console.log(sapaPagi);

/* sapaPagi; tanpa () ga nyetak apa apa, yang jalan cuma yang pake ().
tanda () itu perintah "jalanin sekarang". kalo cuma nulis namanya doang, itu cuma nyebut fungsinya, bukan nyuruh dia jalan.
kaya nyebut "nasi goreng" doang, belum tentu ada yang masak */

/* ARGUMEN DAN PARAMETER */
/* biar satu fungsi bisa dipake buat data yang beda beda, tanda kurungnya diisi */

function sapa(nama){
    console.log(`halo ${nama}, selamat pagi!`);
}
sapa("syarla");
sapa("budi");
sapa("rina");
/* parameter itu nama yang ada di dalem kurung pas fungsinya dibikin (nama). anggep aja kotak kosong yang nunggu diisi.
argumen itu isi yang dikirim pas manggil fungsinya ("syarla", "budi", "rina").
jadi pas sapa("syarla") dipanggil, kotak nama diisi "syarla" terus isi fungsinya dijalanin. fungsinya cuma satu tapi hasilnya beda beda */

function tambah(angka1, angka2){
    console.log(angka1 + angka2);
}
tambah(5, 3);
tambah(10,18);
/* parameternya bisa lebih dari satu, dipisah pake koma. urutannya penting:
argumen pertama masuk ke parameter pertama, argumen kedua masuk ke parameter kedua.
jadi di tambah(5, 3), angka1 itu 5 dan angka2 itu 3, hasilnya 8 */

/* eksperimen: manggil fungsi tanpa argumen */
sapa(); // hasilnya "halo undefined, selamat pagi!"
/* karna kotak nama ga dikirimin isi apa apa, jadi isinya undefined.
sama kaya variabel yang udah dibikin tapi belum diisi */


/* RETURN */
/* tambah() yang tadi cuma nyetak hasil ke console, hasilnya numpang lewat doang */
let hasilTambah = tambah(5, 3); // angka 8 tetep kecetak karna console.log di dalem fungsinya jalan
console.log(hasilTambah); // tapi isinya undefined
/* hasilTambah jadi undefined karna fungsi tambah ga ngasih apa apa balik ke yang manggil, dia cuma nyetak */

/* pake return biar hasilnya dikirim balik ke tempat fungsinya dipanggil */
function kali(angka1, angka2){
    return angka1 * angka2;
}

let hasilKali = kali(4, 5); // sama aja kaya nulis let hasilKali = 20;
console.log(hasilKali); // 20
console.log(kali(2, 3) + 10); // 16, karna hasil return nya bisa langsung dipake ngitung lagi
/* bedanya console.log sama return:
console.log itu kaya kasir yang cuma ngumumin totalnya, abis itu angkanya ilang
return itu kaya kasir yang ngasih struk, angkanya bisa dibawa pulang terus disimpen ke variabel atau dipake lagi */

/* begitu kena return, fungsinya langsung selesai. kode dibawahnya ga dijalanin, mirip break di loop */
function cekLulus(nilai){
    if (nilai >= 75){
        return "LULUS";
    }
    return "TIDAK LULUS";
}

console.log(cekLulus(80)); // LULUS
console.log(cekLulus(60)); // TIDAK LULUS
/* kalo nilainya 80, kena return "LULUS" terus fungsinya selesai, jadi return "TIDAK LULUS" ga sempet jalan.
makanya ga perlu pake else */


/* VARIABLE SCOPE */
/* scope itu soal dari mana aja sebuah variabel bisa dipake. ibaratnya rumah:
variabel global itu kaya tv di ruang tamu, bisa dipake siapa aja termasuk yang lagi di kamar
variabel lokal itu kaya barang di dalem kamar, cuma bisa dipake di dalem kamar itu */

let kota = "Jakarta"; // global, karna dibikin di luar fungsi

function kenalan(){
    let pesan = "aku tinggal di"; // lokal, cuma ada di dalem fungsi kenalan
    console.log(`${pesan} ${kota}`); // kota bisa dipake disini karna dia global
}

kenalan(); // aku tinggal di Jakarta
console.log(kota); // Jakarta

// console.log(pesan);
/* kalo baris diatas dijalanin bakal error "pesan is not defined".
pesan cuma hidup di dalem fungsi kenalan, begitu fungsinya selesai dia ilang, jadi dari luar js ga kenal.
error ini bikin semua kode dibawahnya ga jalan, makanya baris itu dijadiin komentar */

/* BLOCK SCOPE
let yang dibikin di dalem { } (for, if, atau fungsi) cuma hidup di dalem kurung kurawal itu.
makanya di 12-perulangan.js nulis for (let i = 0; ...) berkali kali ga error, tiap loop punya i nya sendiri */
if (true){
    let rahasia = "cuma ada di dalem if";
    console.log(rahasia); // jalan
}
// console.log(rahasia); // kalo dijalanin error juga, karna rahasia cuma hidup di dalem { } nya if


/* FUNCTION DECLARATION VS FUNCTION EXPRESSION */
/* ada 2 cara nulis fungsi, hasilnya sama sama fungsi, bedanya di kapan dia bisa dipanggil */

// 1. DECLARATION: langsung pake kata function + nama. ini yang dari tadi kita pake
console.log(luasPersegi(4)); // 16, bisa dipanggil SEBELUM fungsinya ditulis
function luasPersegi(sisi){
    return sisi * sisi;
}

// 2. EXPRESSION: fungsinya dimasukin ke dalem variabel
const kelilingPersegi = function(sisi){
    return 4 * sisi;
};
console.log(kelilingPersegi(5)); // 20

// console.log(luasSegitiga(10, 6)); // kalo dijalanin error, karna dipanggil sebelum barisnya ditulis
const luasSegitiga = function(alas, tinggiSegitiga){
    return alas * tinggiSegitiga / 2;
};
console.log(luasSegitiga(10, 6)); // 30, kalo dipanggil setelahnya baru jalan

/* kenapa beda?
sebelum jalan, js ngintip dulu semua function declaration di file terus disiapin duluan (namanya hoisting).
jadi declaration bisa dipanggil dari mana aja, walaupun nulisnya di bawah.
kalo expression, fungsinya itu isi variabel. variabelnya baru keisi pas barisnya kejalan,
jadi sama kaya variabel biasa, ga bisa dipake sebelum dibikin.
expression ini nanti jadi dasar arrow function di ES6 */

