"use client";

import { useEffect, useState } from "react";
import { Word } from "./models/Word";
import LanguageButton from "./components/LanguageButton";

export default function HomePage() {
  const [idioma, setIdioma] = useState<"es" | "en">("es");
  const [palabras, setPalabras] = useState<string[]>([]);

  const palabrasJSON: Word[] = [
    { es: "Casa", en: "House" },
    { es: "Perro", en: "Dog" },
    { es: "Comida", en: "Food" },
    { es: "Escuela", en: "School" },
    { es: "Libro", en: "Book" },
    { es: "Ciudad", en: "City" },
    { es: "Trabajo", en: "Work" },
    { es: "Amigo", en: "Friend" },
    { es: "Agua", en: "Water" },
    { es: "Tiempo", en: "Time" },
  ];

  useEffect(() => {
    const listaTraducida = palabrasJSON.map(
      (palabra) => palabra[idioma]
    );

    setPalabras(listaTraducida);
  }, [idioma]);

  return (
    <main style={{ padding: "1rem" }}>
      <h1>🌐 Cambio de Idioma</h1>

      <div style={{ marginBottom: "1rem" }}>
        <LanguageButton
          label="Español"
          language="es"
          onChangeLanguage={setIdioma}
        />
        <LanguageButton
          label="Inglés"
          language="en"
          onChangeLanguage={setIdioma}
        />
      </div>

      <ul>
        {palabras.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </main>
  );
}
