
function KartuSiswa(props) {
    return (
        <div className="kotak">
            <h3>{props.nama}</h3>
            <p>Kelas {props.kelas}, jurusan {props.jurusan}</p>
        </div>
    );
}

function Tombol({ teks, warna = '#2563eb' }) {
    return <button style={{ background: warna, borderColor: warna }}>{teks}</button>;
}

function Bingkai({ judul, children }) {
    return (
        <div className="kotak">
            <h3>{judul}</h3>
            {children}
        </div>
    );
}

export default function Materi03() {
    return (
        <section>
            <h2>Materi 03 · Props</h2>

            {/* komponen yang sama, data beda beda */}
            <KartuSiswa nama="Syarla Marsanda" kelas={11} jurusan="PG" />
            <KartuSiswa nama="Budi Santoso" kelas={10} jurusan="TJKT" />

            <div className="kotak">
                <h3>Props pake destructuring + default</h3>
                <div className="baris">
                    <Tombol teks="Simpan" />
                    <Tombol teks="Hapus" warna="#dc2626" />
                    <Tombol teks="Oke" warna="#16a34a" />
                </div>
            </div>

            <Bingkai judul="Props children">
                <p>Paragraf ini dikirim sebagai children.</p>
                <p>Apa aja yang ditaruh di antara &lt;Bingkai&gt; dan &lt;/Bingkai&gt; masuk ke children.</p>
            </Bingkai>
        </section>
    );
}
