import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Categorias() {
  const categories = [
    {
      id: "esportes",
      title: "Esportes",
      slug: "/categorias/esportes",
      icon: "⚽",
      count: "142 Artigos",
      accent: "#00c6ff",
      description: "Cobertura de torneios escolares, atletismo, natação, futebol, vôlei e destaques dos atletas do SESI.",
    },
    {
      id: "tecnologia",
      title: "Tecnologia & Robótica",
      slug: "/categorias/tecnologia",
      icon: "🤖",
      count: "98 Artigos",
      accent: "#a855f7",
      description: "Competições de robótica FIRST LEGO League, inteligência artificial, programação e inovação digital.",
    },
    {
      id: "educacao",
      title: "Educação & Formação",
      slug: "/categorias",
      icon: "🎓",
      count: "76 Artigos",
      accent: "#f59e0b",
      description: "Bolsas de estudo, cursos técnicos integrados, aprendizagem industrial e infraestrutura educacional.",
    },
    {
      id: "cultura",
      title: "Cultura & Arte",
      slug: "/categorias",
      icon: "🎭",
      count: "54 Artigos",
      accent: "#ec4899",
      description: "Festivais de música, teatro, mostras de cinema, exposições artísticas e literatura contemporânea.",
    },
    {
      id: "ciencia",
      title: "Ciência & Sustentabilidade",
      slug: "/categorias",
      icon: "🔬",
      count: "41 Artigos",
      accent: "#10b981",
      description: "Pesquisas científicas, projetos de energia renovável, reciclagem e conservação ambiental.",
    },
    {
      id: "carreiras",
      title: "Carreiras & Indústria",
      slug: "/categorias",
      icon: "💼",
      count: "63 Artigos",
      accent: "#6366f1",
      description: "Tendências do mercado de trabalho, programas de mentoria, oportunidades de estágio e empreendedorismo.",
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
          <span style={{ color: '#fff', fontWeight: 600 }}>Categorias</span>
        </nav>

        <div style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            Explorar Categorias
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Selecione uma categoria para conferir as últimas notícias, coberturas especiais e análises.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.slug}
              className="category-card"
              style={{ "--card-accent": cat.accent }}
            >
              <div className="category-icon">{cat.icon}</div>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: cat.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {cat.count}
                </span>
                <h3 className="category-card-title">{cat.title}</h3>
              </div>
              <p className="category-card-desc">{cat.description}</p>
              <div className="category-card-action">
                <span>Acessar Categoria</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Category Spotlight */}
        <section style={{ marginTop: "4rem" }}>
          <div className="section-header">
            <h2 className="section-title">Destaque em Esportes</h2>
            <Link href="/categorias/esportes" className="view-all-btn">
              Ver canal de Esportes →
            </Link>
          </div>

          <div className="news-grid">
            <article className="news-card">
              <div className="card-img-wrapper">
                <img src="/esportes.png" alt="Esportes SESI" className="card-img" />
              </div>
              <div className="card-body">
                <span className="category-tag tag-sports">Esportes</span>
                <h3 className="card-title">
                  Fase final dos Jogos Escolares do SESI reunirá mais de 40 delegações
                </h3>
                <p className="card-excerpt">
                  Estudantes disputarão pódios em 12 modalidades esportivas no complexo olímpico.
                </p>
                <div className="card-footer">
                  <span>13 de Agosto, 2026</span>
                  <span>⏱️ 4 min</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-img-wrapper">
                <img src="/tech.png" alt="Tecnologia no Esporte" className="card-img" />
              </div>
              <div className="card-body">
                <span className="category-tag tag-tech">Tech & Esportes</span>
                <h3 className="card-title">
                  Uso de inteligência artificial e sensores biomecânicos na preparação dos atletas
                </h3>
                <p className="card-excerpt">
                  Tecnologia auxilia treinadores na prevenção de lesões e aprimoramento de desempenho.
                </p>
                <div className="card-footer">
                  <span>11 de Agosto, 2026</span>
                  <span>⏱️ 5 min</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}