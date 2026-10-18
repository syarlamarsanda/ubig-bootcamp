/* STRING itu teks, ada kutp dua: "" dan kutip ''. hasilnya sama*/

/* dibawah ini merupakan bentuk kesalahan dari penggunaan string, yaitu kalo didalam teks ada kutip lagi */

// let hari = 'hari ini hari jum'at';
// console.log(hari); 

//TRIK PERTAMA

/* menggunakan gabungan 2 kutip */
let hari = "hari ini hari jum'at";
console.log(hari);

//TRIK KEDUA 
/* menggunakan escaping menggunakan \ garis miring kebalik */
console.log('hari ini hari jum\'at');

//TRIK KETIGA
/* \n itu buat bikin baris baru (kaya pencet enter) di dalem string. n nya dari kata "new line" */
console.log("baris pertama\nbaris kedua"); // bakal kecetak jadi dua baris
