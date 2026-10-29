import { useState } from 'react';

export default function Materi04() {
    const [angka, setAngka] = useState(0);
    const [nama, setNama] = useState('Syarla');
    const [daftar, setDaftar] = useState(['apel', 'jeruk']);

    let angkaBiasa = 0;

    return (
        <section>
            <h2>Materi 04 · State</h2>

            <div className="kotak">
                <h3>1. Counter pake state</h3>
                <p>Angka: <b>{angka}</b></p>
                <div className="baris">
                    <button onClick={() => setAngka(angka + 1)}>+1</button>
                    <button onClick={() => setAngka(angka - 1)}>-1</button>
                    <button className="ghost" onClick={() => setAngka(0)}>Reset</button>
                </div>
            </div>

            <div className="kotak">
                <h3>2. Variabel biasa (ga bakal berubah)</h3>
                <p>Angka biasa: <b>{angkaBiasa}</b></p>
                <button onClick={() => { angkaBiasa++; console.log('angkaBiasa =', angkaBiasa); }}>
                    +1 (cek console)
                </button>
                <p style={{ fontSize: 13, color: '#6b7280' }}>
                    Di console angkanya naik, tapi di layar tetep 0, karena React ga di-render ulang.
                </p>
            </div>

            <div className="kotak">
                <h3>3. State berisi teks</h3>
                <p>Halo, {nama}!</p>
                <div className="baris">
                    <button onClick={() => setNama('Budi')}>Ganti jadi Budi</button>
                    <button className="ghost" onClick={() => setNama('Syarla')}>Balikin</button>
                </div>
            </div>

            <div className="kotak">
                <h3>4. State berisi array</h3>
                <p>{daftar.join(', ')}</p>
                <button onClick={() => setDaftar([...daftar, 'mangga'])}>Tambah mangga</button>
            </div>
        </section>
    );
}
