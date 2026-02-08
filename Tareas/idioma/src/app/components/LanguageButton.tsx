"use client";

interface Props {
    label: string;
    language: "es" | "en";
    onChangeLanguage: (lang: "es" | "en") => void;
}

export default function LanguageButton({
    label,
    language,
    onChangeLanguage,
}: Props) {
    return (
    <button
        onClick={() => onChangeLanguage(language)}
        style={{
        padding: "0.5rem 1rem",
        marginRight: "1rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        cursor: "pointer",
        }}
    >
        {label}
    </button>
    );
}
