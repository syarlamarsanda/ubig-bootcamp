import { createContext, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hapusItem, kosongkan, tambahItem } from '../store/keranjangSlice';

const TemaContext = createContext();

function ProviderTema({ children }) {
    const [gelap, setGelap] = useState(false);
    return <TemaContext.Provider value={{ gelap, setGelap }}>{children}</TemaContext.Provider>;
}

function KartuTema() {
    const { gelap, setGelap } = useContext(TemaContext);
    return (
        <div className={`kotak ${gelap ? 'gelap' : ''}`}>
            <h3 style={{ color: gelap ? '#61dafb' : undefined }}>Context API</h3>
            <p>Tema sekarang: {gelap ? 'gelap 🌙' : 'terang ☀️'}</p>
            <button onClick={() => setGelap(!gelap)}>Ganti tema</button>
        </div>
    );
}

const produk = [
    { id: 1, nama: 'Keyboard', harga: 250000 },
    { id: 2, nama: 'Mouse', harga: 120000 },
    { id: 3, nama: 'Headset', harga: 300000 },
];

function DaftarProduk() {
    const dispatch = useDispatch();
    return (
        <div className="baris">
            {produk.map((p) => (
                <button key={p.id} onClick={() => dispatch(tambahItem(p))}>
                    + {p.nama}
                </button>
            ))}
        </div>
    );
}

function Keranjang() {
    const items = useSelector((state) => state.keranjang.items);
    const dispatch = useDispatch();
    const total = items.reduce((jumlah, i) => jumlah + i.harga * i.jumlah, 0);

    if (items.length === 0) return <p>Keranjang masih kosong.</p>;

    return (
        <>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.nama} x{i.jumlah}{' '}
                        <button className="ghost" onClick={() => dispatch(hapusItem(i.id))}>hapus</button>
                    </li>
                ))}
            </ul>
            <p>Total: <b>Rp {total.toLocaleString('id-ID')}</b></p>
            <button className="ghost" onClick={() => dispatch(kosongkan())}>Kosongkan</button>
        </>
    );
}

export default function Materi09() {
    return (
        <section>
            <h2>Materi 09 · Context API & Redux</h2>

            <ProviderTema>
                <KartuTema />
            </ProviderTema>

            <div className="kotak">
                <h3>Redux: keranjang belanja</h3>
                <DaftarProduk />
                <hr />
                <Keranjang />
                <p style={{ fontSize: 13, color: '#6b7280' }}>
                    Coba pindah ke materi lain terus balik lagi: isi keranjang tetep ada,
                    karena disimpen di store Redux, bukan di state komponen.
                </p>
            </div>
        </section>
    );
}
