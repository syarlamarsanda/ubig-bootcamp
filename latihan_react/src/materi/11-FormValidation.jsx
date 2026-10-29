import { useState } from 'react';
import api from '../api/axios';

const formKosong = { kelas_id: '1', nama: '', nis: '', jenis_kelamin: '', alamat: '' };

export default function Materi11() {
    return (
        <section>
            <h2>Materi 11 · Form Handling & Validation</h2>
            <FormTambahSiswa />
            <FormLogin />
        </section>
    );
}

function FormTambahSiswa() {
    const [form, setForm] = useState(formKosong);
    const [errors, setErrors] = useState({});
    const [pesan, setPesan] = useState('');
    const [loading, setLoading] = useState(false);
    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function validasi() {
        const err = {};
        if (form.nama.trim().length < 3) err.nama = ['Nama minimal 3 huruf'];
        if (!/^\d{7}$/.test(form.nis)) err.nis = ['NIS harus 7 digit angka'];
        if (!form.jenis_kelamin) err.jenis_kelamin = ['Pilih jenis kelamin'];
        return err;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setPesan('');

        const errFrontend = validasi();
        setErrors(errFrontend);
        if (Object.keys(errFrontend).length > 0) return;

        setLoading(true);
        try {
            const res = await api.post('/m09/cara1', form);
            setPesan(res.data.message);
            setForm(formKosong); // kosongin form lagi
        } catch (err) {
            if (err.response?.status === 422) {
                setErrors(err.response.data.errors);
            } else {
                setPesan('Gagal konek ke API. Udah jalanin php artisan serve?');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="kotak" onSubmit={handleSubmit} noValidate>
            <h3>Form tambah siswa (kirim ke /api/m09/cara1)</h3>

            <div style={{ display: 'grid', gap: 10, maxWidth: 420 }}>
                <label>
                    Kelas<br />
                    <select name="kelas_id" value={form.kelas_id} onChange={handleChange}>
                        <option value="1">XI PG 1</option>
                        <option value="2">XI TJKT 1</option>
                        <option value="3">XI DKV 1</option>
                    </select>
                </label>

                <label>
                    Nama<br />
                    <input name="nama" value={form.nama} onChange={handleChange} />
                    {errors.nama && <p className="error">{errors.nama[0]}</p>}
                </label>

                <label>
                    NIS (7 digit)<br />
                    <input name="nis" value={form.nis} onChange={handleChange} />
                    {errors.nis && <p className="error">{errors.nis[0]}</p>}
                </label>

                <div>
                    Jenis kelamin<br />
                    <label><input type="radio" name="jenis_kelamin" value="L" checked={form.jenis_kelamin === 'L'} onChange={handleChange} /> Laki-laki</label>{' '}
                    <label><input type="radio" name="jenis_kelamin" value="P" checked={form.jenis_kelamin === 'P'} onChange={handleChange} /> Perempuan</label>
                    {errors.jenis_kelamin && <p className="error">{errors.jenis_kelamin[0]}</p>}
                </div>

                <label>
                    Alamat (boleh kosong)<br />
                    <textarea name="alamat" rows="2" value={form.alamat} onChange={handleChange} />
                </label>

                <div>
                    <button type="submit" disabled={loading}>{loading ? 'Mengirim...' : 'Simpan'}</button>
                </div>
                {pesan && <p className={pesan.startsWith('Gagal') ? 'error' : 'sukses'}>{pesan}</p>}
            </div>
            <p style={{ fontSize: 13, color: '#6b7280' }}>
                Coba isi NIS yang udah ada (misal 2425001): lolos validasi React, tapi ditolak Laravel karena unique.
            </p>
        </form>
    );
}

function FormLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [akun, setAkun] = useState(null);
    const [error, setError] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        try {
            const res = await api.post('/m11/login', { username, password });
            localStorage.setItem('token', res.data.token); 
            const profil = await api.get('/m11/profil'); 
            setAkun(profil.data.akun);
        } catch (err) {
            setError(err.response?.data?.message ?? 'Gagal konek ke API');
        }
    }

    async function handleLogout() {
        await api.post('/m11/logout');
        localStorage.removeItem('token');
        setAkun(null);
    }

    if (akun) {
        return (
            <div className="kotak">
                <h3>Login (ke /api/m11/login)</h3>
                <p className="sukses">Halo {akun.nama}, kamu udah login!</p>
                <button className="ghost" onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <form className="kotak" onSubmit={handleLogin}>
            <h3>Login (ke /api/m11/login)</h3>
            <div className="baris">
                <input placeholder="username (syarla)" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password (rahasia123)" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </div>
            {error && <p className="error">{error}</p>}
        </form>
    );
}
