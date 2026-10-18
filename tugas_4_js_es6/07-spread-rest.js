/* SPREAD DAN REST */
/* dua duanya pake titik tiga ... tapi kerjanya kebalikan
spread = ngebongkar isi array/object jadi satu satu
rest = ngumpulin sisa sisa jadi satu array */

// SPREAD
// gabungin array
const kelasA = ["rina", "budi"];
const kelasB = ["dodi", "eka"];
const semuaKelas = [...kelasA, ...kelasB];
console.log(semuaKelas); // ["rina", "budi", "dodi", "eka"]

// nyalin array biar yang asli ga ikut berubah
const asli = [1, 2, 3];
const salinan = [...asli];
salinan.push(4);
console.log(asli, salinan); // [1, 2, 3] [1, 2, 3, 4]
/* kalo cuma ditulis const salinan = asli; dua duanya nunjuk ke array yang sama, jadi asli nya ikut berubah */

// ngebongkar array jadi argumen fungsi
const nilaiUjian = [80, 95, 70];
console.log(Math.max(...nilaiUjian)); // 95, sama aja kaya Math.max(80, 95, 70)

// spread di object: nyalin terus update sebagian
const profil = { nama: "Syarla", kelas: 11 };
const profilBaru = { ...profil, kelas: 12 };
console.log(profilBaru); // { nama: "Syarla", kelas: 12 }

// REST
// di parameter fungsi: ngumpulin semua argumen yang dikirim jadi satu array
const totalBelanja = (...harga) => {
    let total = 0;
    for (let i = 0; i < harga.length; i++){
        total += harga[i];
    }
    return total;
};
console.log(totalBelanja(5000, 10000)); // 15000
console.log(totalBelanja(2000, 3000, 4000, 1000)); // 10000, jumlah argumennya bebas

// di destructuring: ngambil sisanya
const [juara1, ...lainnya] = ["syarla", "budi", "rina", "dodi"];
console.log(juara1); // syarla
console.log(lainnya); // ["budi", "rina", "dodi"]

/* cara bedainnya:
... di sebelah kanan = atau pas manggil fungsi itu spread (ngebongkar)
... di sebelah kiri = atau di parameter fungsi itu rest (ngumpulin) */
