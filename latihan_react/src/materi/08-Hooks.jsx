import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const NamaContext = createContext('tamu');

export default function Materi08() {
    return (
        <section>
            <h2>Materi 08 · Hooks</h2>
            <ContohUseEffect />
            <ContohUseRef />
            <ContohUseMemo />
            <NamaContext.Provider value="Syarla">
                <ContohUseContext />
            </NamaContext.Provider>
        </section>
    );
}

function ContohUseEffect() {
    const [angka, setAngka] = useState(0);
    const [detik, setDetik] = useState(0);

    useEffect(() => {
        document.title = `Klik: ${angka}`;
    }, [angka]);

    useEffect(() => {
        const timer = setInterval(() => setDetik((d) => d + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="kotak">
            <h3>useEffect</h3>
            <p>Udah buka materi ini selama {detik} detik (timer dari useEffect)</p>
            <button onClick={() => setAngka(angka + 1)}>Klik ({angka}), terus liat judul tab browser</button>
        </div>
    );
}

function ContohUseRef() {
    const inputRef = useRef(null);
    const jumlahRender = useRef(0);
    const [teks, setTeks] = useState('');

    jumlahRender.current++; 

    return (
        <div className="kotak">
            <h3>useRef</h3>
            <div className="baris">
                <input ref={inputRef} value={teks} onChange={(e) => setTeks(e.target.value)} placeholder="ketik..." />
                <button onClick={() => inputRef.current.focus()}>Fokus ke input</button>
            </div>
            <p style={{ fontSize: 13, color: '#6b7280' }}>Komponen ini udah render {jumlahRender.current} kali</p>
        </div>
    );
}

function ContohUseMemo() {
    const [nilai, setNilai] = useState([80, 90, 75]);
    const [gelap, setGelap] = useState(false);

    const rataRata = useMemo(() => {
        console.log('menghitung rata rata...');
        const total = nilai.reduce((jumlah, n) => jumlah + n, 0);
        return (total / nilai.length).toFixed(1);
    }, [nilai]);

    return (
        <div className={`kotak ${gelap ? 'gelap' : ''}`}>
            <h3>useMemo</h3>
            <p>Nilai: {nilai.join(', ')} → rata rata {rataRata}</p>
            <div className="baris">
                <button onClick={() => setNilai([...nilai, Math.floor(Math.random() * 41) + 60])}>Tambah nilai acak</button>
                <button className="ghost" onClick={() => setGelap(!gelap)}>Ganti warna</button>
            </div>
        </div>
    );
}

function ContohUseContext() {
    const nama = useContext(NamaContext); 
    return (
        <div className="kotak">
            <h3>useContext</h3>
            <p>Nama dari context: <b>{nama}</b> (ga lewat props sama sekali)</p>
        </div>
    );
}
