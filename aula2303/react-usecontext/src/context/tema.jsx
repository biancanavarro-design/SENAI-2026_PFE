import { createContext, useState, useEffect } from "react";

export const TemaProvedor = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState("light");

  function mudarTema() {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <TemaProvedor.Provider value={{ tema, mudarTema }}>
      {children}
    </TemaProvedor.Provider>
  );
}