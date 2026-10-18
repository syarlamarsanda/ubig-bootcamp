/* ARRAY: itu kaya loker yang berderet, satu nama kotak, isinya banyak, dan tiap loker punya nomer dari 0
cara ngambil nya sama kaya ngambil huruf dari string */

let jadwal = ["js dasar", "js ES6", "react js", "php"];
/* 1 */ console.log(jadwal[0]); // akan mencetak js dasar
/* 2 */ console.log(jadwal.length); //mencetak 4
/* 3 */ console.log(jadwal[jadwal.length - 1]) //mencetak php
/* 4 */ console.log(jadwal[10]); //undefined karna hanya ada 4 isi
/* 5 */ jadwal[1] = "belajar css";
console.log(jadwal); //merubah js ES6 menjadi belajar css
/* 6 */ jadwal.push("laravel");
console.log(jadwal); //menambah laravel kepaling akhir
console.log(jadwal.length); //hasilnya akan mencetak 5

/* ARRAY PART 2 */

// JOIN
console.log(jadwal.join(" - ")) //akan membuat tiap isi ada strip nya
console.log(typeof jadwal.join(" - "))

// SLICE
let potongan = jadwal.slice(1, 3);
console.log(potongan);
console.log(jadwal);
/* slice itu kaya fotokopi, disini (1, 3) artinya yang diambil itu belajar css dan react js, tapi ga ngerubah jadwal aslinya tetep ada */

// SPLICE 
jadwal.splice(1, 1);
console.log(jadwal);
/* splice itu ngegunting, disini (1,1) jadi mulai dari belajar css dan yang di apus itu belajar css
jadi sekarang isinya tinggal 4*/

jadwal.splice(1, 0, "html");
console.log(jadwal)
/* disini yang terjadi adalah mulai dari isi 1, ngapus isi 0, dan tambah html */

jadwal.splice(3, 1, "nodejs");
console.log(jadwal);
/* ini splice buat ganti isi: mulai dari nomor 3 (php), apus 1 isi, terus masukin "nodejs" ditempatnya.
jadi splice bisa dipake 3 cara:
1. ngapus: splice(posisi, berapa yang diapus)
2. nambah: splice(posisi, 0, isi baru)
3. ganti: splice(posisi, 1, isi baru)
rumus bacanya: splice(mulai dari mana, apus berapa, masukin apa) */

/* ARRAY PART 3 */

//pop() ngeluarin isi paling belakang
//unshift("...") nambah isi dipaling depan
//shift() ngeluarin isi paling depan

let antrian = ["dani","heri","irfan"];
/* 1. */ antrian.pop(); console.log(antrian);
/* 2. */ antrian.unshift("ridwan"); console.log(antrian);
/* 3. */ antrian.shift(); console.log(antrian)
let keluar = antrian.pop(); console.log(keluar)
/* 4. */ console.log(antrian.includes("yono"));
/* 5. */ console.log(antrian.indexOf("purwanto"));

let sudahAbsen = ["dani","ridwan","heri","irfan","purwanto"];
if (sudahAbsen.includes("dani")){
    console.log("sudah absen, gausah absen lagi");
    console.log(`udah absen di nomor ${sudahAbsen.indexOf("dani")}`);
}else{
    console.log("silahkan absen terlebih dahulu");
}

/* contoh indexOf + splice: ngapus isi tanpa harus tau nomornya */
let daftarTugas = ["html", "css", "js", "php"];
let posisiCss = daftarTugas.indexOf("css"); // nyari css ada di nomor berapa, hasilnya 1
daftarTugas.splice(posisiCss, 1); // apus 1 isi mulai dari nomor itu
console.log(daftarTugas); // jadi ["html", "js", "php"]

/* beda includes sama indexOf:
includes cuma jawab ada atau ngga, hasilnya true/false
indexOf jawab ada di nomor berapa, kalo ga ketemu hasilnya -1
jadi kalo cuma mau ngecek ada apa ngga pake includes, kalo butuh nomornya pake indexOf */
