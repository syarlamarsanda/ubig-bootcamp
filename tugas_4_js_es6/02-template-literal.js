/* TEMPLATE LITERAL */
/* udah kita pake di js dasar, ini juga fitur ES6. pake backtick ` bukan kutip biasa */

const namaSiswa = "Syarla";
const kelasSiswa = 11;

// cara lama (sebelum ES6), nyambung pake +
console.log("halo, aku " + namaSiswa + " kelas " + kelasSiswa);
// cara ES6
console.log(`halo, aku ${namaSiswa} kelas ${kelasSiswa}`);

// di dalem ${ } bisa diisi hitungan atau ekspresi apa aja, ga cuma variabel
console.log(`tahun depan aku kelas ${kelasSiswa + 1}`);
console.log(`status: ${kelasSiswa >= 12 ? "kelas akhir" : "belum kelas akhir"}`);

// bisa bikin teks beberapa baris tanpa \n
const kartuNama = `
Nama  : ${namaSiswa}
Kelas : ${kelasSiswa}
`;
console.log(kartuNama);

/* ini nanti kepake banget di DOM, buat bikin potongan html dari js */
const htmlKartu = `<div class="kartu"><h2>${namaSiswa}</h2><p>kelas ${kelasSiswa}</p></div>`;
console.log(htmlKartu);
