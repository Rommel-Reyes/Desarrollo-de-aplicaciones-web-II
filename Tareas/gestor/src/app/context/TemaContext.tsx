'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Tema } from '../types/Tema';

interface TemaContextType {
    temas: Tema[];
    toggleInteresante: (id: number) => void;
}

const TemaContext = createContext<TemaContextType | null>(null);

export const TemaProvider = ({ children }: { children: React.ReactNode }) => {
    const [temas, setTemas] = useState<Tema[]>([]);

    useEffect(() => {
    const listaInicial: Tema[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        titulo: `Tema ${i + 1}`,
        interesante: false,
    }));

    setTemas(listaInicial);
}, []);

    const toggleInteresante = (id: number) => {
    setTemas(prev =>
        prev.map(t =>
        t.id === id ? { ...t, interesante: !t.interesante } : t
        )
    );
};

return (
    <TemaContext.Provider value={{ temas, toggleInteresante }}>
        {children}
    </TemaContext.Provider>
);
};

export const useTemaContext = () => {
    const context = useContext(TemaContext);
    if (!context) {
    throw new Error('useTemaContext debe usarse dentro de TemaProvider');
    }
    return context;
};
