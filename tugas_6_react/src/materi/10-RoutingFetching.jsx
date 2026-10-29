import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';

export default function Materi10() {
    const [siswa, setSiswa] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const ambilData = async () => {
            try {
                const res = await api.get('/m07/siswa'); // GET http://127.0.0.1:8000/api/m07/siswa
                setSiswa(res.data.data); 
            } catch (err) {
                setError('Gagal ambil data. Udah jalanin php artisan serve di latihan_laravel belum?');
            } finally {
                setLoading(false); 
            }
        };
        ambilData();
    }, []);

    return (
        <section>
            <h2>Materi 10 · Routing & API Fetching</h2>

            <div className="kotak">
                <h3>Data siswa dari API Laravel</h3>
                {loading && <p>Lagi ngambil data...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && (
                    <table>
                        <thead>
                            <tr><th>Nama</th><th>NIS</th><th></th></tr>
                        </thead>
                        <tbody>
                            {siswa.map((s) => (
                                <tr key={s.id}>
                                    <td>{s.nama}</td>
                                    <td>{s.nis}</td>
                                    <td><Link to={`/materi/10/siswa/${s.id}`}>Detail →</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
}

export function DetailSiswa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [siswa, setSiswa] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const ambil = async () => {
            try {
                const res = await api.get(`/m07/siswa/${id}`);
                setSiswa(res.data.data);
            } catch (err) {
                setError(err.response?.data?.message ?? 'Gagal ambil data');
            }
        };
        ambil();
    }, [id]);

    return (
        <section>
            <h2>Detail siswa #{id}</h2>
            <div className="kotak">
                {error && <p className="error">{error}</p>}
                {!siswa && !error && <p>Loading...</p>}
                {siswa && (
                    <>
                        <p><b>Nama:</b> {siswa.nama}</p>
                        <p><b>NIS:</b> {siswa.nis}</p>
                        <p><b>Jenis kelamin:</b> {siswa.jenis_kelamin === 'P' ? 'Perempuan' : 'Laki-laki'}</p>
                        <p><b>Alamat:</b> {siswa.alamat ?? '-'}</p>
                    </>
                )}
                <button className="ghost" onClick={() => navigate(-1)}>← Kembali</button>
            </div>
        </section>
    );
}
