import { useState } from 'react';

export default function Materi05() {
    const [pesan, setPesan] = useState('Belum ada yang diklik');
    const [ketikan, setKetikan] = useState('');
    const [hover, setHover] = useState(false);

    function handleKlik() {
        setPesan('Tombol diklik!');
    }

    function sapa(nama) {
        setPesan(`Halo ${nama}!`);
    }
    function handleKetik(e) {
        setKetikan(e.target.value);
    }

    return (
        <section>
            <h2>Materi 05 · Event Handling</h2>

            <div className="kotak">
                <h3>1. onClick</h3>
                <p>{pesan}</p>
                <div className="baris">
                    <button onClick={handleKlik}>Klik aku</button>
                    <button className="ghost" onClick={() => sapa('Budi')}>Sapa Budi</button>
                    <button className="ghost" onClick={() => sapa('Rina')}>Sapa Rina</button>
                </div>
            </div>

            <div className="kotak">
                <h3>2. onChange (ngetik real time)</h3>
                <input value={ketikan} onChange={handleKetik} placeholder="ketik sesuatu..." />
                <p>Kamu ngetik: <b>{ketikan}</b> ({ketikan.length} huruf)</p>
            </div>

            <div className="kotak">
                <h3>3. onMouseEnter & onMouseLeave</h3>
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{ padding: 20, borderRadius: 8, textAlign: 'center', background: hover ? '#61dafb' : '#e5e7eb' }}
                >
                    {hover ? 'Mouse lagi di atas kotak 🎯' : 'Arahin mouse ke sini'}
                </div>
            </div>

            <div className="kotak">
                <h3>4. onSubmit + preventDefault</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setPesan('Form dikirim tanpa reload!');
                    }}
                >
                    <button type="submit">Kirim form</button>
                </form>
            </div>
        </section>
    );
}
