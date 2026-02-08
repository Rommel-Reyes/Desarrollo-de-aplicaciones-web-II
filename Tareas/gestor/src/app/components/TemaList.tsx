'use client';

import { useTemaContext } from '../context/TemaContext';
import TemaItem from './TemaItem';

export default function TemaList({ soloInteresantes = false }: { soloInteresantes?: boolean }) {
    const { temas } = useTemaContext();

    const lista = soloInteresantes
    ? temas.filter(t => t.interesante)
    : temas;

    return (
    <>
        {lista.map(t => (
        <TemaItem key={t.id} id={t.id} />
        ))}
    </>
    );
}
