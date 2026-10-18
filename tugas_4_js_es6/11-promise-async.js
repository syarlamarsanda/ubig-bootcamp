/* PROMISE DAN ASYNC AWAIT */
/* sejauh ini kode js jalan urut dari atas ke bawah. tapi ada kerjaan yang butuh waktu,
misalnya ngambil data dari internet. js ga mau nungguin, dia lanjut ke baris berikutnya dulu.
ini namanya asynchronous */

console.log("1. pesen makanan");
setTimeout(() => {
    console.log("3. makanan dateng (setelah 1 detik)");
}, 1000);
console.log("2. sambil nunggu, main hp");
/* setTimeout itu jalanin fungsi setelah waktu tertentu (1000 = 1 detik).
yang kecetak urutannya 1, 2, baru 3. js ga nungguin setTimeout, dia lanjut dulu */

// PROMISE: janji yang hasilnya baru ada nanti. bisa berhasil (resolve) atau gagal (reject)
const pesenMakanan = (adaStok) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (adaStok){
                resolve("mie ayam siap!");
            } else {
                reject("maaf, stok habis");
            }
        }, 1500);
    });
};

// cara pake promise: .then kalo berhasil, .catch kalo gagal
pesenMakanan(true)
    .then(hasil => console.log("then:", hasil))
    .catch(error => console.log("catch:", error));

// ASYNC AWAIT: cara nulis promise biar keliatan kaya kode biasa yang urut
const makanSiang = async () => {
    try {
        const makanan = await pesenMakanan(false);
        console.log("await:", makanan);
    } catch (error) {
        console.log("await gagal:", error);
    }
};
makanSiang();

/* async ditaro di depan fungsi, await artinya "tungguin promise ini kelar dulu baru lanjut".
await cuma bisa dipake di dalem fungsi async.
try catch: coba jalanin yang di try, kalo gagal (reject) langsung lompat ke catch.
ini nanti kepake banget buat fetch, ngambil data dari API */
