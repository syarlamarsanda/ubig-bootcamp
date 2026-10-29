
export default function Materi01() {
    const nama = 'Syarla';
    const kelas = 11;
    const hobi = ['ngoding', 'main game', 'desain'];
    const sekarang = new Date().getFullYear();

    return (
        <section>
            <h2>Materi 01 · JSX</h2>

            <div className="kotak">
                <h3>1. Nampilin variabel pake {'{ }'}</h3>
                <p>Halo, aku {nama}, kelas {kelas}.</p>
            </div>

            <div className="kotak">
                <h3>2. Di dalam {'{ }'} bisa ditulis ekspresi JS apa aja</h3>
                <p>Tahun depan aku kelas {kelas + 1}.</p>
                <p>Nama aku huruf besar: {nama.toUpperCase()}</p>
                <p>Hobi pertama: {hobi[0]}, total hobi: {hobi.length}</p>
                <p>Tahun sekarang: {sekarang}</p>
            </div>

            <div className="kotak">
                <h3>3. className & style</h3>
                {/* komentar di dalam JSX ditulis kaya gini */}
                <p className="sukses">Ini pake className (bukan class)</p>
                <p style={{ color: '#7c3aed', fontWeight: 'bold', fontSize: 18 }}>
                    Ini pake style object, font-size jadi fontSize
                </p>
            </div>

            <div className="kotak">
                <h3>4. Tag wajib ditutup</h3>
                <input placeholder="input ditutup pake />" />
                <br />
                <small>br sama input di atas ditutup pake /&gt;</small>
            </div>
        </section>
    );
}
