import { NavLink, Route, Routes } from 'react-router-dom';
import Materi01 from './materi/01-JSX';
import Materi02 from './materi/02-Components';
import Materi03 from './materi/03-Props';
import Materi04 from './materi/04-State';
import Materi05 from './materi/05-EventHandling';
import Materi06 from './materi/06-ConditionalRendering';
import Materi07 from './materi/07-ListKeys';
import Materi08 from './materi/08-Hooks';
import Materi09 from './materi/09-ContextRedux';
import Materi10, { DetailSiswa } from './materi/10-RoutingFetching';
import Materi11 from './materi/11-FormValidation';

const daftarMateri = [
    { no: '01', judul: 'JSX' },
    { no: '02', judul: 'Components' },
    { no: '03', judul: 'Props' },
    { no: '04', judul: 'State' },
    { no: '05', judul: 'Event Handling' },
    { no: '06', judul: 'Conditional Rendering' },
    { no: '07', judul: 'List & Keys' },
    { no: '08', judul: 'Hooks' },
    { no: '09', judul: 'Context & Redux' },
    { no: '10', judul: 'Routing & Fetching' },
    { no: '11', judul: 'Form & Validation' },
];

export default function App() {
    return (
        <div className="layout">
            <aside className="sidebar">
                <h1>Latihan React</h1>
                <nav>
                    {daftarMateri.map((m) => (
                        <NavLink key={m.no} to={`/materi/${m.no}`}>
                            <span className="no">{m.no}</span> {m.judul}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="isi">
                <Routes>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/materi/01" element={<Materi01 />} />
                    <Route path="/materi/02" element={<Materi02 />} />
                    <Route path="/materi/03" element={<Materi03 />} />
                    <Route path="/materi/04" element={<Materi04 />} />
                    <Route path="/materi/05" element={<Materi05 />} />
                    <Route path="/materi/06" element={<Materi06 />} />
                    <Route path="/materi/07" element={<Materi07 />} />
                    <Route path="/materi/08" element={<Materi08 />} />
                    <Route path="/materi/09" element={<Materi09 />} />
                    <Route path="/materi/10" element={<Materi10 />} />
                    <Route path="/materi/10/siswa/:id" element={<DetailSiswa />} />
                    <Route path="/materi/11" element={<Materi11 />} />
                    <Route path="*" element={<p>Halaman tidak ditemukan.</p>} />
                </Routes>
            </main>
        </div>
    );
}

function Beranda() {
    return (
        <section>
            <h2>Halo! 👋</h2>
            <p>Pilih materi di samping kiri. Tiap materi kodenya ada di folder <code>src/materi</code></p>
            <p>Materi 10 &amp; 11 ngambil data dari API Laravel di <code>tugas_7_laravel</code></p>
        </section>
    );
}
