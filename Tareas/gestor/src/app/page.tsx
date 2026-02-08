import Link from 'next/link';
import TemaList from './components/TemaList';

export default function Home() {
    return (
    <main>
        <h1>Pantalla Principal</h1>

        <TemaList />

        <br />
        <Link href="/interesantes">
        <button>Visualizar temas interesantes</button>
        </Link>
    </main>
);
}