import { useState } from 'react';

export default function Materi06() {
    const [sudahLogin, setSudahLogin] = useState(false);
    const [nilai, setNilai] = useState(80);
    const [notif, setNotif] = useState(3);

    let predikat;
    if (nilai >= 90) {
        predikat = <b style={{ color: '#16a34a' }}>A, mantap!</b>;
    } else if (nilai >= 75) {
        predikat = <b style={{ color: '#2563eb' }}>B, lulus</b>;
    } else {
        predikat = <b style={{ color: '#dc2626' }}>Belum lulus</b>;
    }

    return (
        <section>
            <h2>Materi 06 · Conditional Rendering</h2>

            <div className="kotak">
                <h3>1. Ternary ( ? : )</h3>
                {sudahLogin ? <p>Selamat datang, Syarla! 👋</p> : <p>Silakan login dulu.</p>}
                <button onClick={() => setSudahLogin(!sudahLogin)}>
                    {sudahLogin ? 'Logout' : 'Login'}
                </button>
            </div>

            <div className="kotak">
                <h3>2. && (tampil kalau true aja)</h3>
                {notif > 0 && <p>🔔 Kamu punya {notif} notifikasi baru</p>}
                <div className="baris">
                    <button onClick={() => setNotif(notif + 1)}>Tambah notif</button>
                    <button className="ghost" onClick={() => setNotif(0)}>Baca semua</button>
                </div>
            </div>

            <div className="kotak">
                <h3>3. if di luar JSX</h3>
                <div className="baris">
                    <input type="number" value={nilai} onChange={(e) => setNilai(Number(e.target.value))} />
                    <span>Predikat: {predikat}</span>
                </div>
            </div>
        </section>
    );
}
