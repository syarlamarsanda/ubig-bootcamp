/* ARROW FUNCTION */
/* cara nulis fungsi yang lebih singkat. bentuknya mirip function expression,
cuma kata function nya diapus terus ditambah panah => */

// function expression biasa (yang di js dasar)
const kaliDua = function(angka){
    return angka * 2;
};
// versi arrow
const kaliDuaArrow = (angka) => {
    return angka * 2;
};
console.log(kaliDua(5), kaliDuaArrow(5)); // 10 10, hasilnya sama

/* bisa disingkat lagi: */
// a. kalo isinya cuma satu baris return, { } sama kata return nya boleh diapus
const kaliTiga = (angka) => angka * 3;
console.log(kaliTiga(5)); // 15

// b. kalo parameternya cuma satu, kurung () nya juga boleh diapus
const kaliEmpat = angka => angka * 4;
console.log(kaliEmpat(5)); // 20

// kalo ga ada parameter, kurungnya wajib ada walaupun kosong
const sapaPagiArrow = () => "selamat pagi!";
console.log(sapaPagiArrow());

// kalo parameternya lebih dari satu, kurungnya juga wajib
const jumlah = (a, b) => a + b;
console.log(jumlah(3, 4)); // 7

/* cara bacanya: angka => angka * 4 artinya "terima angka, balikin angka dikali 4".
yang dibalikin otomatis jadi return, walaupun ga ditulis.
arrow function bakal sering banget dipake di materi map, filter, sama DOM nanti */
