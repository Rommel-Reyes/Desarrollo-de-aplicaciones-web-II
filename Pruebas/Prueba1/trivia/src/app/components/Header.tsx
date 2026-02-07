"use client";

import { useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";

export default function Header() {
    const { puntaje, preguntasRespondidas } = useContext(TriviaContext);

    return (
    <header
        style={{
        padding: "1rem",
        backgroundColor: "#1f2937",
        color: "white",
        marginBottom: "1rem",
    }}
    >
        <h2>🎯 Trivia</h2>
        <p>Puntaje: {puntaje}</p>
        <p>Preguntas respondidas: {preguntasRespondidas}</p>
    </header>
);
}
