/* METHOD ARRAY: forEach, map, filter, find, reduce */
/* ini fungsi bawaan array yang nerima fungsi lain (biasanya arrow function).
fungsi itu dijalanin buat tiap isi array, jadi mirip loop tapi lebih singkat */

const hargaJajan = [5000, 12000, 3000, 20000];

// forEach: jalanin sesuatu buat tiap isi. ga ngasilin apa apa, mirip for of
hargaJajan.forEach((harga, index) => {
    console.log(`jajan ke-${index}: ${harga}`);
});

// map: bikin array BARU, isinya hasil olahan tiap isi. panjangnya selalu sama
const hargaDiskon = hargaJajan.map(harga => harga - harga * 10 / 100);
console.log(hargaDiskon); // [4500, 10800, 2700, 18000]

// filter: bikin array BARU, isinya cuma yang syaratnya true
const jajanMurah = hargaJajan.filter(harga => harga < 10000);
console.log(jajanMurah); // [5000, 3000]

// find: nyari SATU isi pertama yang cocok. kalo ga ada yang cocok hasilnya undefined
const jajanMahal = hargaJajan.find(harga => harga > 10000);
console.log(jajanMahal); // 12000, yang pertama ketemu. 20000 ga diliat lagi

// reduce: ngumpulin semua isi jadi satu nilai, misalnya total
const totalJajan = hargaJajan.reduce((total, harga) => total + harga, 0);
console.log(totalJajan); // 40000
/* reduce bacanya: total mulai dari 0 (angka paling belakang), terus tiap putaran total ditambah harga */

// contoh pake array isinya object, ini bakal sering kepake
const dataSiswa = [
    { nama: "rina", nilai: 80 },
    { nama: "budi", nilai: 65 },
    { nama: "eka", nilai: 90 }
];
const lulus = dataSiswa.filter(s => s.nilai >= 75).map(s => s.nama);
console.log(lulus); // ["rina", "eka"]
/* bacanya: saring dulu yang nilainya >= 75, terus dari yang lolos ambil namanya doang */

/* ringkesan:
forEach = cuma jalanin, ga ngasilin array
map = ubah tiap isi, hasilnya array sama panjang
filter = saring, hasilnya array yang lolos aja
find = cari satu, hasilnya satu isi
reduce = gabung semua jadi satu nilai
semuanya ga ngubah array aslinya */
