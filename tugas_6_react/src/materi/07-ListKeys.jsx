import { useState } from 'react';

const dataAwal = [
    { id: 1, nama: 'Syarla Marsanda', kelas: 'XI PG 1', nilai: 92 },
    { id: 2, nama: 'Budi Santoso', kelas: 'XI PG 1', nilai: 70 },
    { id: 3, nama: 'Rina Amelia', kelas: 'XI TJKT 1', nilai: 85 },
    { id: 4, nama: 'Dodi Pratama', kelas: 'XI TJKT 1', nilai: 60 },
];

export default function Materi07() {
    const [siswa, setSiswa] = useState(dataAwal);
    const [cumaLulus, setCumaLulus] = useState(false);

    const hobi = ['ngoding', 'main game', 'desain'];

    const yangDitampilkan = cumaLulus ? siswa.filter((s) => s.nilai >= 75) : siswa;

    function hapus(id) {
        setSiswa(siswa.filter((s) => s.id !== id));
    }

    return (
        <section>
            <h2>Materi 07 · Rendering List & Keys</h2>

            <div className="kotak">
                <h3>1. List sederhana dari array teks</h3>
                <ul>
                    {hobi.map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                </ul>
            </div>

            <div className="kotak">
                <h3>2. List dari array object + key pake id</h3>
                <label className="baris" style={{ marginBottom: 10 }}>
                    <input type="checkbox" checked={cumaLulus} onChange={(e) => setCumaLulus(e.target.checked)} />
                    Tampilkan yang lulus aja (nilai ≥ 75)
                </label>
                <table>
                    <thead>
                        <tr><th>Nama</th><th>Kelas</th><th>Nilai</th><th></th></tr>
                    </thead>
                    <tbody>
                        {yangDitampilkan.map((s) => (
                            <tr key={s.id}>
                                <td>{s.nama}</td>
                                <td>{s.kelas}</td>
                                <td>{s.nilai}</td>
                                <td><button className="ghost" onClick={() => hapus(s.id)}>Hapus</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {yangDitampilkan.length === 0 && <p>Ga ada data.</p>}
                <button style={{ marginTop: 10 }} onClick={() => setSiswa(dataAwal)}>Balikin data</button>
            </div>
        </section>
    );
}
