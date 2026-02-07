"use client";

import { useContext, useState } from "react";
import { TriviaContext } from "../context/TriviaContext";
import { Question } from "../models/Question";

interface Props {
    pregunta: Question;
    respondida: boolean;
    setRespondida: (value: boolean) => void;
}

export default function QuestionCard({
    pregunta,
    respondida,
    setRespondida,
}: Props) {
    const { incrementarPuntaje } = useContext(TriviaContext);
    const [mensaje, setMensaje] = useState<string | null>(null);

    const seleccionarRespuesta = (respuestaUsuario: boolean) => {
    if (respondida) return;

    if (respuestaUsuario === pregunta.respuestaCorrecta) {
        incrementarPuntaje(pregunta.puntajePregunta);
        setMensaje("Respuesta correcta");
    } else {
        setMensaje("Respuesta incorrecta");
    }

    setRespondida(true);
};

    return (
    <div
        style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
    }}
    >
    <h3>{pregunta.DescripcionPregunta}</h3>

    <button
        onClick={() => seleccionarRespuesta(true)}
        disabled={respondida}
        style={{ marginRight: "1rem" }}
        >
        Verdadero
    </button>

    <button
        onClick={() => seleccionarRespuesta(false)}
        disabled={respondida}
        >
        Falso
    </button>

    {mensaje && <p style={{ marginTop: "1rem" }}>{mensaje}</p>}
    </div>
);
}
