/* LOOPING: mengulangi perintah yang sama berkali kali tanpa nulis ulang  */

// FOR
for (let i = 1;  i <= 5; i++){
    console.log(i);
} /* jadi cara bacanya itu, kita punya variabel i yang disi angka 1,
 jadi tiap angka di dalam i masih kurang dari sama dengan 5 maka akan ditambah 1 sampai hasilnya false baru dia berhenti.*/

//hitung mundur 5 ke 1
for (let i = 5; i >= 1; i--){
    console.log(i)
} /* variabel i berisi angka 5, i lebih dari sama dengan 1. maka dibacanya
jika variabel i masih lebih besar atau sama dengan 1 maka akan dikurangi 1 sampai hasilnya memenuhi target */

// push up 1 sampai 10
for (let i = 1; i <= 10; i++){
    console.log(`push up ke-${i}`);
} /* masih sama dengan yang atas hanya di tambah template literal */

//angka genap 2 sampai 10
for (let i = 2; i <= 10; i += 2){
    console.log(i)
    /* variable i diisi angka 2, i kurang dari sama dengan 10, maka tiap angka dalam i masih kurang dari sama dengan 10 akan terus ditambah 2 sampe hasilnya memenuhi target*/
}

/* WHILE */
/* perbedaan while dan for: kalo for itu dipake pas kita udah tau targetnya mau muter berapa kali, sedangkan while gatau berapa kali, tapi tau syarat berentinya. */
let i = 1;
while(i<=5){
    console.log(i);
    i++;
} /* cara bacanya, ketika angka di i masih kurang dari sama dengan 5 maka akan terus ditambah 1 dan dicetak, sampai hasilnya ga memenuhi syarat. dia akan berhenti mencetak*/

let tabungan = 0;
let minggu = 0;

while (tabungan < 100000){
    tabungan += 15000;
    minggu++;
}
console.log(`butuh ${minggu} minggu, tabungan jadi ${tabungan}`);
/* cara bacanya gini, tabungan kita itu 0, selama isi tabungan kita itu masih kurang dari 100 rb akan terus ditambah 15rb dan variable minggu akan ditambah 1. sampai hasilnya itu false */

/* DO WHILE */

/* bedanya sama while, klo while itu cek syarat dulu baru jalan. kalo syaratnya salah ga akan jalan sama sekali
kalo do while, jalan dulu sekali baru cek syarat. jadi isinya pasti jalan minimal satu kali walaupun syaratnya salah dari awal */

let angka = 10;

while(angka < 5){
    console.log("while jalan");
}
do {
    console.log("do while jalan");
} while (angka < 5);

/* cara bacanya yaitu kita punya angka 10, syaratnya angka harus kurang dari 5, sedangkan angka kita 10. maka syarat udah gugur dari awal, jadi while dilewatin.
do while itu loop sendiri, isinya dijalanin sekali dulu baru dicek syaratnya, makanya yang dicetak cuma do while jalan */


/* looping array */
let daftarBuah = ["apel","jeruk","mangga","pisang"];

for (let i = 0; i < daftarBuah.length; i++){
    console.log(`buah ke-${i} : ${daftarBuah[i]}`);
}
/* cara bacanya: i mulai dari 0 karna nomor isi array mulainya dari 0. syaratnya pake < bukan <=, karna panjang arraynya 4 tapi nomor terakhirnya 3.
kalo pake <= nanti nyoba ngambil daftarBuah[4] yang isinya ga ada, jadinya undefined.
daftarBuah[i] artinya ambil isi array di nomor i, karna i nya berubah tiap putaran jadi yang diambil juga ganti ganti */

/* BREAK */

/* break itu berentiin total*/
let daftarSiswa = ["rina", "budi","syarla","dodi","eka"];

for (let i = 0; i < daftarSiswa.length; i++){
    console.log(`ngecek ${daftarSiswa[i]}...`);
    if (daftarSiswa[i] === "syarla"){
        console.log("ketemu!");
        break;
    }
}
/*ketika tidak ada break, loop bakal ngecek kelima nama sampe abis.
karna syaratnya i < 5 walaupun syarla udah ketemu ditengah, dodi sama eka tetep ikut dicek*/


/* CONTINUE */
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
/* continue iru cuma putaran sekarang yang diskip, puteran berikutnya tetap jalan */