import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Esportes() {
  const sportsArticles = [
    {
      id: 1,
      title: "SESI Vôlei vence partida decisiva e garante vaga na semifinal da Superliga",
      excerpt: "Em jogo emocionante de 5 sets, a equipe do SESI mostrou garra e garantiu a classificação perante a torcida lotada no ginásio.",
      tag: "Vôlei",
      date: "13 de Agosto, 2026",
      readTime: "4 min",
      image: "/esportes.png",
    },
    {
      id: 2,
      title: "Atletas de Atletismo do SESI conquistam 5 medalhas de ouro no Troféu Brasil",
      excerpt: "Destaque para a prova de revezamento 4x100m e para o salto em altura masculino com marcas inéditas.",
      tag: "Atletismo",
      date: "12 de Agosto, 2026",
      readTime: "3 min",
      image: "/esportes.png",
    },
    {
      id: 3,
      title: "Piscina Olímpica do SESI sedia Campeonato Regional Infanto-Juvenil de Natação",
      excerpt: "Mais de 400 jovens nadadores disputarão as provas classificatórias para o torneio nacional em São Paulo.",
      tag: "Natação",
      date: "11 de Agosto, 2026",
      readTime: "5 min",
      image: "/esportes.png",
    },
    {
      id: 4,
      title: "Seleção SESI Sub-18 de Basquete avança invicta para os playoffs nacionais",
      excerpt: "Com defesa sólida e aproveitamento de 65% nos arremessos de 3 pontos, o time segue como favorito ao título.",
      tag: "Basquete",
      date: "10 de Agosto, 2026",
      readTime: "3 min",
      image: "/esportes.png",
    },
    {
      id: 5,
      title: "Torneio SESI E-Sports 2026 atrai mais de 100 equipes em modalidades virtuais",
      excerpt: "Estudantes competem em campeonatos de estratégia e corrida simulada com transmissão ao vivo na Twitch.",
      tag: "E-Sports",
      date: "09 de Agosto, 2026",
      readTime: "4 min",
      image: "/tech.png",
    },
    {
      id: 6,
      title: "Programa Esporte Transformador impacta mais de 10 mil jovens na rede SESI",
      excerpt: "Iniciativa alia desenvolvimento acadêmico, disciplinas esportivas e acompanhamento nutricional de alta performance.",
      tag: "Formação",
      date: "08 de Agosto, 2026",
      readTime: "6 min",
      image: "/campus.png",
    },
  ];

  return (
    <>
      <Header />

      <main className="main-content">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <Link href="/">Início</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/categorias">Categorias</Link>
          <span className="breadcrumb-sep">/</span>
          <span style={{ color: '#fff', fontWeight: 600 }}>Esportes</span>
        </nav>

        {/* Category Header Banner */}
        <div className="sports-banner">
          <div>
            <span className="category-tag tag-sports" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
              ⚡ Canal Esportes
            </span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.2 }}>
              Sesi Esportes & Torneios
            </h1>
            <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", maxWidth: "600px" }}>
              Acompanhe resultados ao vivo, coberturas dos campeonatos escolares, ligas profissionais e histórias dos nossos atletas.
            </p>
          </div>

          {/* Live Scoreboard Widget */}
          <div className="scoreboard-widget">
            <div className="team-score">
              <div className="team-name">SESI SP</div>
              <div className="score-num">3</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "0.65rem", background: "var(--red-primary)", color: "#fff", padding: "0.2rem 0.5rem", borderRadius: "4px", fontWeight: "bold" }}>
                AO VIVO
              </span>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
                SUPERLIGA VÔLEI
              </div>
            </div>
            <div className="team-score">
              <div className="team-name">MINAS TC</div>
              <div className="score-num" style={{ color: "var(--text-muted)" }}>1</div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {["Todos os Esportes", "Vôlei", "Basquete", "Futebol", "Natação", "Atletismo", "E-Sports"].map((modalidade, idx) => (
            <button
              key={modalidade}
              style={{
                background: idx === 0 ? "var(--cyan-accent)" : "rgba(255, 255, 255, 0.05)",
                color: idx === 0 ? "#090d16" : "var(--text-muted)",
                border: "1px solid " + (idx === 0 ? "var(--cyan-accent)" : "var(--border-color)"),
                padding: "0.45rem 1rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 700,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {modalidade}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {sportsArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="card-img-wrapper">
                <img src={article.image} alt={article.title} className="card-img" />
              </div>
              <div className="card-body">
                <span className="category-tag tag-sports">{article.tag}</span>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-excerpt">{article.excerpt}</p>
                <div className="card-footer">
                  <span>{article.date}</span>
                  <span>⏱️ {article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}