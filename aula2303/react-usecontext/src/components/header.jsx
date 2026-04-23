import { useContext } from "react";
import { TemaProvedor } from "../context/tema.jsx";

export default function Header() {
  const { tema, mudarTema } = useContext(TemaProvedor);

  return (
    <header>
      <h1>Surf News</h1>

      <button onClick={mudarTema}>
        {tema === "light" ? "🌙 Modo escuro" : "☀️ Modo claro"}
      </button>
    </header>
  );
}