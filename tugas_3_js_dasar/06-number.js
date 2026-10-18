/* NUMBER DAN ARITMATIKA */
/* 
+ = untuk penjumlahan
- = untuk pengurangan
* = untuk perkalian
/ = untuk pembagian
*/

let a = 17;
let b = 5;

console.log(a+b); //penjumlahan
console.log(a-b); //pengurangan
console.log(a*b); //perkalian
console.log(a/b); //pembagian
console.log(a % b); //modulus, atau sisa hasil bagi

let skor = 10;
skor++;
console.log(skor); // tanda ++ akan menambah 1

console.log("abc" * 2); // akan mencetak NaN(not a number), jadi abc ini gabisa dijadiin angka
console.log(typeof("abc" * 2)) //typenya akan number? kenapa bukannya "abc" bukan angka? NaN itu merupakan penanda hitungan yang gagal dan tinggalnya tetep di keluarga number karna asalnya dari aritmatika

console.log("10" * 2); //hasilnya akan 20, kenapa? karna "10" masih bisa diubah ke angka, sedangkan "abc" gak bisa
console.log(NaN + 5); // NaN ini sifatnya nular, sekali ada dia semuanya akan menjadi NaN

skor--;
console.log(skor); // tanda -- kebalikannya ++, ngurangin 1. tadi skor 11, sekarang balik jadi 10
