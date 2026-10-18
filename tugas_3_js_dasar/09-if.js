/* IF itu cara program untuk mengambil keputusan, kalo syaratnya bener jalanin ini */

// if (syarat){
//     //jalan kalo syaratnya true
// }

// ELSE itu pasangannya kalo syaratnya salah

// if(syarat){
//     //kalo true
// }
// else{
//     //kalo false
// }


let nilaiUjian = 75;

if (nilaiUjian >= 75){
    console.log("LULUS")
}
else {
    console.log("TIDAK LULUS")
} // ini akan mencetak "LULUS", karna nilainya terpenuhi maka akan mencetak lulus

//perbandingan lain
if (nilaiUjian > 75){ 
    console.log("LULUS")
}
else{
    console.log("TIDAK LULUS")
} //sedangkan ini akan mencetak "TIDAK LULUS" karna syarat lulus itu harus lebih dari 75, sedangkan nilainya itu pas banget 75. maka dia tidak terpenuhi maka akan dilempar ke else


let udahMakan = false;
if(!udahMakan){
    console.log("makan dulu yuk")
}else{
    console.log("okee!")
}

/* if else cuma bisa milih dari dua kemungkinan, kalo kemungkinannya lebih dari dua, misal nilai huruf a,b,c,d kita pake else if */

// if(syarat1){
//     //kalo syarat1 bener
// } else if (syarat2){
//     //kalo syarat1 salah, tapi syarat2 bener
// }else{
//     //kalo semua salah
// }

let nilaiMtk = 89;

if(nilaiMtk >= 90){
    console.log("A")
} else if(nilaiMtk >= 80) {
    console.log("B")
} else if (nilaiMtk >= 70){
    console.log("C")
} else{
    console.log("D")
}

let nilaiBindo = 101;

if(nilaiBindo > 100 || nilaiBindo < 0){
    console.log("NILAI GA VALID")
}else{ 
    if(nilaiBindo >= 90){ //ini merupakan bentuk if bersarang
        console.log("A")
    } 
    else if (nilaiBindo >= 80){
        console.log("B")
    }
    else if (nilaiBindo >= 70){
        console.log("C")
    }
    else{
        console.log("D")
    }
} /* kesimpulannya: jika nilai b indo lebih dari 100 atau kurang dari 0 maka akan mencetak nilai tidak valid, tetapi jika nilainya valid atau true dan lolos di syarat if pertama maka akan dilempar ke else, 
didalam else didalamnya ada if lagi, maka akan di cek di if kedua, jika nilainya terpenuhi di if maka akan langsung mencetak A, jika tidak akan dilempar ke if else, dan seterusnya. */

/* KESIMPULAN IF
1. urutan else if itu penting, dicek dari atas ke bawah dan berhenti di syarat pertama yang bener. makanya syarat paling tinggi (>= 90) ditaro paling atas
2. cek nilai yang ga valid (lebih dari 100 atau kurang dari 0) paling atas, biar nilai aneh ga keburu masuk ke A, B, C, D
3. > sama >= itu bedanya pas di angka batas. nilai 75 lolos kalo pake >= 75, tapi ga lolos kalo pake > 75 */
