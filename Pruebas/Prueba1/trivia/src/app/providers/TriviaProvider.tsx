"use client";

import { useState } from "react";
import { TriviaContext } from "../context/TriviaContext";

interface Props {
    children: React.ReactNode;
}

export default function TriviaProvider({ children }: Props) {

    const [puntaje, setPuntaje] = useState(0);
    const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);

    const incrementarPuntaje = (puntos: number) => {
    setPuntaje((prev) => prev + puntos);
};

    const incrementarPreguntas = () => {
    setPreguntasRespondidas((prev) => prev + 1);
};

    const reiniciarJuego = () => {
    setPuntaje(0);
    setPreguntasRespondidas(0);
};

    return (
    <TriviaContext.Provider
        value={{
        puntaje,
        preguntasRespondidas,
        incrementarPuntaje,
        incrementarPreguntas,
        reiniciarJuego,
    }}
    >
        {children}
    </TriviaContext.Provider>
    );
}
