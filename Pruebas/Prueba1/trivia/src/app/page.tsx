"use client";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { TriviaContext } from "./context/TriviaContext";
import { Question } from "./models/Question";
import QuestionCard from "./components/QuestionCard";

export default function HomePage() {
  const router = useRouter();
  const { incrementarPreguntas } = useContext(TriviaContext);

  const [preguntas, setPreguntas] = useState<Question[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [respondida, setRespondida] = useState(false);

  useEffect(() => {
    const preguntasSimuladas: Question[] = [
      {
        idPregunas: "1",
        DescripcionPregunta: "Next.js es un framework basado en React?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPregunas: "2",
        DescripcionPregunta: "TypeScript reemplaza a JavaScript?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },
      {
        idPregunas: "3",
        DescripcionPregunta: "useEffect se ejecuta después del render?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPregunas: "4",
        DescripcionPregunta: "React tiene hooks?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
            {
        idPregunas: "5",
        DescripcionPregunta: "React es un framework de JavaScript?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
    ];

    setPreguntas(preguntasSimuladas);
  }, []);

  const siguientePregunta = () => {
    incrementarPreguntas();
    setRespondida(false);

    if (indiceActual + 1 < preguntas.length) {
      setIndiceActual(indiceActual + 1);
    } else {
      router.push("/results");
    }
  };

  if (preguntas.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  return (
    <main style={{ padding: "1rem" }}>
      <QuestionCard
        pregunta={preguntas[indiceActual]}
        respondida={respondida}
        setRespondida={setRespondida}
      />

      {respondida && (
        <button
          onClick={siguientePregunta}
          style={{ marginTop: "1rem" }}
        >
          Siguiente pregunta
        </button>
      )}
    </main>
  );
}
