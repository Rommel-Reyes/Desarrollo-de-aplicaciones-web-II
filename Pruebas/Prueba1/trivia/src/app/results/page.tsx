"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { TriviaContext } from "../context/TriviaContext";

export default function ResultsPage() {
    const router = useRouter();
    const { puntaje, preguntasRespondidas, reiniciarJuego } =
    useContext(TriviaContext);

    const reiniciarTrivia = () => {
    reiniciarJuego();
    router.push("/");
};

    return (
    <main style={{ padding: "1rem" }}>
        <h1>Resultados</h1>

        <p>
        Puntaje final: <strong>{puntaje}</strong>
        </p>
        <p>
        Preguntas respondidas: <strong>{preguntasRespondidas}</strong>
        </p>

    <button
        onClick={reiniciarTrivia}
        style={{ marginTop: "1rem" }}
    >
        Reiniciar trivia
    </button>
    </main>
);
}
