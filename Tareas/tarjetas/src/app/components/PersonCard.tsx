"use client";

import { Person } from "../models/Person";

interface Props {
    persona: Person;
}

export default function PersonCard({ persona }: Props) {
return (
<div
    style={{
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1rem",
    width: "250px",
    backgroundColor: "#ffffff",
    color: "#111827",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}
    >
    <h3 style={{ marginBottom: "0.5rem" }}>
    {persona.nombre}
    </h3>

    <p>
    <strong>Ocupación:</strong> {persona.ocupacion}
    </p>
    <p>
    <strong>País:</strong> {persona.pais}
    </p>
    </div>
);
}
