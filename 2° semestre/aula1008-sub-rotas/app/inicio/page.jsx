import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Inicio() {
  return (
    <>
      <Header />

      {/* Breaking News Ticker */}
      <div className="ticker-banner">
        <div className="ticker-content">
          <span className="ticker-tag">URGENTE</span>
          <p className="ticker-text">
            <strong>Equipe SESI de Robótica</strong> conquista o 1º lugar no Festival Internacional FIRST LEGO League com projeto de energia sustentável.
          </p>
        </div>
      </div>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Main Featured Hero Card */}
          <div className="hero-card">
            <img
              src="/campus.png"
              alt="Novo Centro de Inovação SESI"
              className="hero-image"
            />
            <div className="hero-overlay" />
            <div className="hero-body">
              <span className="category-tag">Inovação & Educação</span>
              <h1 className="hero-title">
                Novo Centro de Inovação e Robótica do SESI é Inaugurado com Tecnologias de Ponta
              </h1>
              <p className="hero-desc">
                O novo complexo fabuloso conta com laboratórios 3D, simuladores industriais e espaços de co-working para estudantes da rede e parceiros.
              </p>
              <div className="meta-info">
                <span>🕒 Há 2 horas</span>
                <span>•</span>
                <span>✍️ Redação SESI</span>
                <span>•</span>
                <span>💬 24 comentários</span>
              </div>
            </div>
          </div>

          {/* Sidebar Highlights */}
          <div className="hero-sidebar">
            <h3 className="sidebar-heading">
              <span>🔥 Em Alta</span>
            </h3>

            <Link href="/categorias/esportes" className="mini-card">
              <img
                src="/esportes.png"
                alt="Atletas do SESI"
                className="mini-card-thumb"
              />
              <div className="mini-card-content">
                <span className="category-tag tag-sports" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                  Esportes
                </span>
                <h4 className="mini-card-title">
                  Atletas do SESI garantem medalha de ouro em torneio nacional
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Há 4 horas
                </span>
              </div>
            </Link>

            <Link href="/categorias/tecnologia" className="mini-card">
              <img
                src="/tech.png"
                alt="Inteligência Artificial SESI"
                className="mini-card-thumb"
              />
              <div className="mini-card-content">
                <span className="category-tag tag-tech" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                  Tecnologia
                </span>
                <h4 className="mini-card-title">
                  Estudantes criam IA para otimização de energia limpa
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Há 6 horas
                </span>
              </div>
            </Link>

            <div className="mini-card" style={{ background: 'linear-gradient(135deg, rgba(227,6,19,0.1), rgba(19,25,39,1))' }}>
              <div className="mini-card-content" style={{ padding: '0.5rem 0' }}>
                <span className="category-tag tag-culture" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                  Cultura
                </span>
                <h4 className="mini-card-title">
                  Mostra Cultural SESI 2026 abre inscrições para projetos artísticos
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Há 8 horas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <div className="section-header">
          <h2 className="section-title">Feed de Notícias</h2>
          <Link href="/categorias" className="view-all-btn">
            Ver todas as matérias →
          </Link>
        </div>

        <div className="news-grid">
          {/* Card 1 */}
          <article className="news-card">
            <div className="card-img-wrapper">
              <img src="/esportes.png" alt="Esportes SESI" className="card-img" />
            </div>
            <div className="card-body">
              <span className="category-tag tag-sports">Esportes</span>
              <h3 className="card-title">
                Liga Escolar SESI: Abertas as inscrições para futebol e vôlei
              </h3>
              <p className="card-excerpt">
                Competição reunirá mais de 3.000 alunos atletas em etapas regionais e finais com cobertura ao vivo.
              </p>
              <div className="card-footer">
                <span>13 de Agosto, 2026</span>
                <span>⏱️ 3 min de leitura</span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="news-card">
            <div className="card-img-wrapper">
              <img src="/tech.png" alt="Robótica e Tech" className="card-img" />
            </div>
            <div className="card-body">
              <span className="category-tag tag-tech">Tecnologia</span>
              <h3 className="card-title">
                Robótica do SESI avança para etapa mundial com robô autônomo
              </h3>
              <p className="card-excerpt">
                Projeto foi avaliado com nota máxima em inovação, design de engenharia e impacto social.
              </p>
              <div className="card-footer">
                <span>12 de Agosto, 2026</span>
                <span>⏱️ 5 min de leitura</span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="news-card">
            <div className="card-img-wrapper">
              <img src="/campus.png" alt="Educação SESI" className="card-img" />
            </div>
            <div className="card-body">
              <span className="category-tag tag-culture">Educação</span>
              <h3 className="card-title">
                SESI lança 500 novas bolsas para Cursos Técnicos de Inovação
              </h3>
              <p className="card-excerpt">
                Oportunidades em desenvolvimento de software, automação industrial e ciências de dados.
              </p>
              <div className="card-footer">
                <span>11 de Agosto, 2026</span>
                <span>⏱️ 4 min de leitura</span>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="news-card">
            <div className="card-img-wrapper">
              <img src="/esportes.png" alt="Natação SESI" className="card-img" />
            </div>
            <div className="card-body">
              <span className="category-tag tag-sports">Esportes</span>
              <h3 className="card-title">
                Equipe de Natação bate 2 novos recordes no Troféu Brasil
              </h3>
              <p className="card-excerpt">
                Atletas da categoria juvenil conquistaram o topo do pódio nas provas de 100m e 200m borboleta.
              </p>
              <div className="card-footer">
                <span>10 de Agosto, 2026</span>
                <span>⏱️ 2 min de leitura</span>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="news-card">
            <div className="card-img-wrapper">
              <img src="/tech.png" alt="Cybersecurity" className="card-img" />
            </div>
            <div className="card-body">
              <span className="category-tag tag-tech">Tecnologia</span>
              <h3 className="card-title">
                Workshop de Segurança da Informação atrai centenas de jovens
              </h3>
              <p className="card-excerpt">
                Especialistas abordaram práticas de defesa cibernética, ética hacker e privacidade digital.
              </p>
              <div className="card-footer">
                <span>09 de Agosto, 2026</span>
                <span>⏱️ 4 min de leitura</span>
              </div>
            </div>
          </article>

          {/* Card 6 */}
          <article className="news-card">
            <div className="card-img-wrapper">
              <img src="/campus.png" alt="Infraestrutura" className="card-img" />
            </div>
            <div className="card-body">
              <span className="category-tag">Institucional</span>
              <h3 className="card-title">
                Parceria entre SESI e Indústria impulsiona novos talentos
              </h3>
              <p className="card-excerpt">
                Programa de mentoria garante contratação direta de formandos do ensino técnico integrado.
              </p>
              <div className="card-footer">
                <span>08 de Agosto, 2026</span>
                <span>⏱️ 3 min de leitura</span>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}