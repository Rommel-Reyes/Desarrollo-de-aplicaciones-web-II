"use client";

import { useEffect, useState } from "react";
import { Person } from "./models/Person";
import PersonCard from "./components/PersonCard";

export default function HomePage() {
  const [personas, setPersonas] = useState<Person[]>([]);

  useEffect(() => {
    const listaPersonas: Person[] = [
      {
        id: 1,
        nombre: "Carlos López",
        ocupacion: "Desarrollador Web",
        pais: "Guatemala",
      },
      {
        id: 2,
        nombre: "Ana Martínez",
        ocupacion: "Diseñadora UX",
        pais: "México",
      },
      {
        id: 3,
        nombre: "Luis Pérez",
        ocupacion: "Ingeniero de Software",
        pais: "Honduras",
      },
      {
        id: 4,
        nombre: "María Gómez",
        ocupacion: "Analista de Datos",
        pais: "Colombia",
      },
      {
        id: 5,
        nombre: "José Rodríguez",
        ocupacion: "Project Manager",
        pais: "España",
      },
    ];

    setPersonas(listaPersonas);
  }, []);

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Tarjetas de Presentación</h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {personas.map((persona) => (
          <PersonCard key={persona.id} persona={persona} />
        ))}
      </div>
    </main>
  );
}
