'use client';

import { useTemaContext } from '../context/TemaContext';

export default function TemaItem({ id }: { id: number }) {
    const { temas, toggleInteresante } = useTemaContext();
    const tema = temas.find(t => t.id === id);

    if (!tema) return null;

    return (
    <div className="tema">
        <span
        style={{
            backgroundColor: tema.interesante ? '#2CC809' : '#F54927',
            padding: '6px 12px',
            marginRight: '8px',
        }}
        >
        {tema.titulo}
        </span>

    <button onClick={() => toggleInteresante(tema.id)}>
        {tema.interesante ? 'Interesante' : 'No Interesante'}
    </button>
    </div>
);
}
