/* OPERASI LOGIKA; ini buat ngegabungin beberapa syarat sekaligus
&& artinya DAN, hasilnya TRUE cuma kalo syaratnya bener 
|| artinya ATAU, hasilnya TRUE kalo minimal satu syaratnya bener
! artinya KEBALIKAN. TRUE jadi False, false jadi true */

let nilai2 = 80;
let kehadiran = 70;
console.log(nilai2 >= 75 && kehadiran >= 80) //DAN itu akan bernilai true jika dua duanya true, disini nilai2 itu terpenuhi karna nilainya adalah 80, melebihi 75. sedangkan kehadirannya itu belum terpenuhi aturannya, jadinya akan mencetak false atau tidak lulus karna satu syarat tidak terpenuhi
console.log(nilai2 >= 75 || kehadiran >= 80) //ATAU akan bernilai true jika salah satu ada yang bener,disini salah satunya ada yang terpenuhi, yaitu nilainya melebihi 75. maka ia lulus karna salah satu dari nilainya terpenuhi


let sudahMakan = false;
console.log(!sudahMakan) // cara bacanya gini: sudahMakan itu pertanyaan udah makan apa belum, jawabannya false(belum). kalo dikasih !, pertanyaanya berubah jadi "belum makan?", jawabannya true(iya emang belum makan).