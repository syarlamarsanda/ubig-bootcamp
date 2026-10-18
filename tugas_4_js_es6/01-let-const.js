/* ES6 itu versi javascript tahun 2015 (nama lainnya ES2015). isinya fitur fitur baru yang bikin nulis js lebih enak.
let sama const yang dari kemaren kita pake itu sebenernya lahir di ES6. sebelumnya cuma ada var */

/* LET DAN CONST */

// 1. var ga kenal block scope, let kenal
if (true){
    var bocor = "aku var";
    let aman = "aku let";
}
console.log(bocor); // "aku var", var nya bocor keluar dari { }
// console.log(aman); // kalo dijalanin error, let cuma hidup di dalem { }
/* ini alasan utama kenapa sekarang orang pake let, bukan var. var bisa bocor kemana mana dan bikin bug */

// 2. const ga bisa diisi ulang
const pi = 3.14;
// pi = 3; // kalo dijalanin error: Assignment to constant variable
console.log(pi);

/* tapi hati hati: const itu ngunci kotaknya, bukan isinya.
kalo isinya array, isi arraynya masih bisa diubah */
const buahFavorit = ["apel", "mangga"];
buahFavorit.push("jeruk"); // boleh, karna yang diubah isinya
console.log(buahFavorit); // ["apel", "mangga", "jeruk"]
// buahFavorit = ["semangka"]; // error, karna ini nyoba ganti kotaknya

/* kapan pake apa:
const = pake ini duluan buat semua variabel
let = kalo isinya bakal diganti ganti (contoh: i di loop, tabungan yang nambah terus)
var = udah ga usah dipake */
