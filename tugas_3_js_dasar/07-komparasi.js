/* BOOLEAN: hanya punya true and false. biasanya boolean ga di ketik langsung,
 tetapi muncul dari hasil membandingi dua hal yang disebut komparasi 
 simbolnya: 
 > lebih besar
 < lebih kecil
 >= lebih besar sama dengan
 <= lebih kecil sama dengan */

 let nilai = 80;
 let kkm = 75;
 console.log(nilai >= kkm); //outputnya akan true, karna nilai 80 lebih dari sama dengan nilai kkm 75
 console.log(typeof(nilai >= kkm)); //outputnya akan boolean

 console.log(5 == "5"); // dibacanya gini; yang satu number, yang satu string, samain dulu deh, "5" diubah jadi 5. ketika dibandingin 5 sama 5, akan sama, jadinya true.
 console.log(5 === "5"); // dibacanya gini; 5 harus sama dengan "5", nyatanya mereka beda, jadi akan mencetak false

 console.log(0 == ""); // ini yang bikin == bahaya, karna angka nol dan teks kosong itu beda, tapi pake == nilainya jadi true.
 console.log(0 === "");

 // = bukan buat ngebandingi, tapu buat masukin isi ke kotak (variable)
 // == ngebandingin, tapi jenisnya disamain dulu
 // === ngebandingin isi sekaligus jenisnya