/* FOR OF DAN FOR IN */

const daftarMapel = ["mtk", "bindo", "pwpb"];

// cara lama
for (let i = 0; i < daftarMapel.length; i++){
    console.log(daftarMapel[i]);
}

// ES6 for...of: langsung dapet isinya, ga usah ngurus index
for (const mapel of daftarMapel){
    console.log(mapel);
}
/* bacanya: "untuk setiap mapel di dalem daftarMapel".
tiap putaran, mapel diisi isi array berikutnya. boleh pake const karna tiap putaran mapel nya baru */

// for of juga bisa buat string
for (const huruf of "JS"){
    console.log(huruf); // J, terus S
}

// for...in: buat object, yang didapet key nya
const rapot = { mtk: 85, bindo: 90 };
for (const mapel in rapot){
    console.log(`${mapel}: ${rapot[mapel]}`); // mtk: 85, bindo: 90
}

/* gampang ingetnya:
of = dapet isinya (buat array)
in = dapet key nya (buat object)
kalo masih butuh nomor index, tetep pake for biasa */
