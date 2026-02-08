import Link from 'next/link';
import TemaList from '../components/TemaList';

export default function InteresantesPage() {
    return (
    <main>
        <h1>Pantalla Interesantes</h1>

        <TemaList soloInteresantes />

        <br />
    <Link href="/">
        <button>Volver</button>
    </Link>
    </main>
);
}

