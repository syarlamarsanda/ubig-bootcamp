/* SWITCH: itu alternatif else if buat kasus kalo mau ngecek satu kotak yang isinya harus sama persis
drngan salah satu dari beberapa pilihan. contoh kaya nama hari, pilihan menu, atau status pesanan */

// switch (kotak){
//     case "pilihan1":
//         //jalan kalo isi kotak sama dengan "pilihan1"
//         break; // break artinya kaya udah keluar dari switch
//     case "pilihan2":
//         //jalan kalo isi kotak sama dengan "pilihan2"
//         break;
//     default: //mirip dengan else
//         // jalan kalo ngga ada yang cocok
// }

let hariIni = "selasa";
switch (hariIni){
    case "senin":
        console.log("belajar js dasar");
        break;
    case "selasa":
        console.log("belajar js ES6");
        break;
    case "rabu":
        console.log("belajar react js");
        break;
    case "kamis":
        console.log("belajar fundamental php");
        break;
    default:
        console.log("ga ada yang cocok")
}

/* percobaan lain */

let jadwalBelajar = "Kamis"
switch (jadwalBelajar){
    case "senin":
        console.log("belajar js dasar");
        break;
    case "selasa":
        console.log("belajar js ES6");
        break;
    case "rabu":
        console.log("belajar react js");
        break;
    case "kamis":
        console.log("belajar fundamental php");
        break;
    default:
        console.log("ga ada yang cocok")
} // akan mencetak isi dari default, karna kita ngisinya dengan huruf besar k "Kamis",
//  sedangkan di case hanya ada "kamis", k kecil jadi otomatis program ga nemuin si Kamis.

/* what if kalo break diapus? */

let jurusan = "PG";

switch(jurusan){
    case "PG":
        console.log("Pengembangan gim")
    case "TJKT":
        console.log("Teknik jaringan dan telekomunikasi")
        break;
    case "DKV":
        console.log("Desain komunikasi visual")
        break;
    default:
        console.log("ga ada jurusan yang cocok");
} /* switch itu mencari case yang cocok, terus mulai jalanin perintah dari situ. begitu udah masuk, dia ga ngecek case lagi
dia bakal jalan kebawah sampe ketemu break. */


// TERNARY:  versi singkat dari if else yang cuma punya 2 pilihan 
// syarat ? hasilKalauBenar : hasilKalauSalah
// cara bacanya "syaratnya bener? kalo iya ambil yang ini, kalo ngga ambil yang itu"
// tanda ? itu nanya, tanda : kaya kalo ngga

let umurPengunjung = 16;
let bolehBikinKtp = umurPengunjung >= 17 ? "boleh" : "belum boleh"; //cara bacanya yaitu: pengunjungnya lebih dari 17 apa ngga? kalo iya maka boleh, kalo ngga maka gaboleh
console.log(bolehBikinKtp);

/* bedanya sama if, ternary itu ngasilin satu nilai yang langsung bisa dimasukin kekotak, jadi bagus buat keputusan simpel */

let nilaiRapot = 80;
let keterangan = nilaiRapot >= 75 ? "LULUS" : "GAK LULUS";
console.log(keterangan)