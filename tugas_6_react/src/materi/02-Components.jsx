
function Header() {
    return (
        <div className="kotak">
            <h3>Ini komponen Header</h3>
            <p>Dipanggil pake &lt;Header /&gt;</p>
        </div>
    );
}

const Kartu = () => {
    return (
        <div className="kotak">
            <h3>Ini komponen Kartu</h3>
            <p>Komponen yang sama bisa dipanggil berkali kali.</p>
        </div>
    );
};

function Footer() {
    return <p style={{ color: '#6b7280' }}>Ini komponen Footer, cuma 1 baris jadi ga perlu kurung ( )</p>;
}

export default function Materi02() {
    return (
        <section>
            <h2>Materi 02 · Components</h2>
            <Header />
            {/* Kartu dipanggil 3 kali, tampil 3 kali */}
            <Kartu />
            <Kartu />
            <Kartu />
            <Footer />
        </section>
    );
}
