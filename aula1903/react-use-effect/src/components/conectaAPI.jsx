import { useEffect, useState } from "react";

export default function ConectaAPI() {
  const [conselho, setConselho] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 SUAS INFORMAÇÕES
  const nome = "Bianca Vitória Pasini Meira Navarro";
  const idade = 17;
  const escola = "Escola SESI";
  const objetivo = "Fazer faculdade e seguir com o que eu amo 💙";

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setConselho(data.slip.advice);
        setLoading(false);
      })
      .catch(() => {
        setConselho("Erro ao carregar conselho 😢");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      background: "linear-gradient(135deg, #00bcd4, #2196f3)",
      padding: "25px",
      borderRadius: "20px",
      textAlign: "center",
      width: "350px",
      margin: "50px auto",
      color: "white",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    }}>

      <h2>🌊 Meu Perfil + API</h2>

      {/* 🌴 Foto de praia */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Praia"
        style={{
          width: "100%",
          borderRadius: "15px",
          marginBottom: "15px"
        }}
      />

      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Escola:</strong> {escola}</p>
      <p><strong>Objetivo:</strong> {objetivo}</p>

      <hr style={{ margin: "15px 0", borderColor: "white" }} />

      <h3>💡 Conselho do dia</h3>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <p style={{ fontStyle: "italic" }}>
          "{conselho}"
        </p>
      )}
    </div>
  );
}