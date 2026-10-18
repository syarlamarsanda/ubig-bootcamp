/* CLASS */
/* class itu cetakan buat bikin banyak object yang bentuknya sama.
ibaratnya cetakan kue: cetakannya satu, kuenya bisa banyak */

class Siswa {
    constructor(nama, kelas){
        this.nama = nama;
        this.kelas = kelas;
    }

    perkenalan(){
        return `halo aku ${this.nama} dari kelas ${this.kelas}`;
    }

    naikKelas(){
        this.kelas++;
    }
}
/* nama class diawali huruf besar.
constructor itu fungsi yang otomatis jalan pas object baru dibikin, tugasnya ngisi data awal.
this artinya object yang lagi dibikin */

const siswa1 = new Siswa("Syarla", 11);
const siswa2 = new Siswa("Budi", 10);
/* new artinya "bikinin object baru dari cetakan ini" */

console.log(siswa1.perkenalan()); // halo aku Syarla dari kelas 11
console.log(siswa2.perkenalan()); // halo aku Budi dari kelas 10
siswa1.naikKelas();
console.log(siswa1.kelas); // 12, siswa2 ga ikut berubah karna object nya beda

// extends: class turunan, otomatis dapet semua isi class induknya
class KetuaKelas extends Siswa {
    constructor(nama, kelas, periode){
        super(nama, kelas); // manggil constructor induknya (Siswa), wajib ditulis paling atas
        this.periode = periode;
    }

    umumin(pengumuman){
        return `${this.nama} (ketua kelas): ${pengumuman}`;
    }
}

const ketua = new KetuaKelas("Rina", 11, "2026/2027");
console.log(ketua.perkenalan()); // method dari Siswa tetep bisa dipake
console.log(ketua.umumin("besok libur!"));
