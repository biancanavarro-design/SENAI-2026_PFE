import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Tecnologia() {
  const techArticles = [
    {
      id: 1,
      title: "Equipe SESI de Robótica avança para final internacional com projeto de energia solar",
      excerpt: "Protótipo capaz de otimizar captação fotovoltaica em 35% foi destaque entre mais de 80 países.",
      tag: "FIRST Lego League",
      date: "13 de Agosto, 2026",
      readTime: "5 min",
      image: "/tech.png",
    },
    {
      id: 2,
      title: "Estudantes desenvolvem algoritmo de IA para previsão de consumo hídrico industrial",
      excerpt: "Solução sustentável utiliza sensores IoT e machine learning para detectar vazamentos em tempo real.",
      tag: "Inteligência Artificial",
      date: "12 de Agosto, 2026",
      readTime: "4 min",
      image: "/tech.png",
    },
    {
      id: 3,
      title: "Novo FabLab SESI abre inscrições para oficinas de impressão 3D e corte a laser",
      excerpt: "Comunidade acadêmica poderá transformar ideias em protótipos físicos com suporte de mentores especializados.",
      tag: "Prototipagem 3D",
      date: "11 de Agosto, 2026",
      readTime: "3 min",
      image: "/campus.png",
    },
    {
      id: 4,
      title: "Hackathon SESI Tech reúne 200 jovens desenvolvedores em maratona de 36 horas",
      excerpt: "Desafios abordaram inteligência artificial ética, acessibilidade digital e cidades inteligentes.",
      tag: "Programação",
      date: "10 de Agosto, 2026",
      readTime: "4 min",
      image: "/tech.png",
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
          <span style={{ color: '#fff', fontWeight: 600 }}>Tecnologia</span>
        </nav>

        {/* Category Header Banner */}
        <div
          className="sports-banner"
          style={{
            background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.05))",
            borderColor: "rgba(168, 85, 247, 0.3)",
          }}
        >
          <div>
            <span className="category-tag tag-tech" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
              🚀 Canal Tecnologia & Robótica
            </span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.2 }}>
              Inovação, Robótica & Futuro
            </h1>
            <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", maxWidth: "600px" }}>
              Acompanhe as últimas novidades em Robótica FIRST, inteligência artificial, programação, IoT e prototipagem na rede SESI.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {["Todos os Tópicos", "Robótica FIRST", "Inteligência Artificial", "Impressão 3D", "Programação", "Cybersecurity"].map((topic, idx) => (
            <button
              key={topic}
              style={{
                background: idx === 0 ? "var(--purple-accent)" : "rgba(255, 255, 255, 0.05)",
                color: idx === 0 ? "#ffffff" : "var(--text-muted)",
                border: "1px solid " + (idx === 0 ? "var(--purple-accent)" : "var(--border-color)"),
                padding: "0.45rem 1rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 700,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {techArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="card-img-wrapper">
                <img src={article.image} alt={article.title} className="card-img" />
              </div>
              <div className="card-body">
                <span className="category-tag tag-tech">{article.tag}</span>
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
