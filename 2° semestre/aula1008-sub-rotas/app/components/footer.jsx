"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="brand-logo">
            SESI<span className="highlight">NEWS</span>
          </Link>
          <p>
            Portal de notícias oficial do SESI. Informação com credibilidade sobre
            tecnologia, esportes, educação, inovação e cultura para o futuro da indústria e da sociedade.
          </p>
        </div>

        <div>
          <h4 className="footer-column-title">Navegação</h4>
          <ul className="footer-links">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/categorias">Todas as Categorias</Link></li>
            <li><Link href="/categorias/esportes">Esportes & Torneios</Link></li>
            <li><Link href="/categorias/tecnologia">Tecnologia & Robótica</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-column-title">Institucional</h4>
          <ul className="footer-links">
            <li><a href="#">Sobre o SESI</a></li>
            <li><a href="#">Redação & Equipe</a></li>
            <li><a href="#">Central de Imprensa</a></li>
            <li><a href="#">Políticas de Privacidade</a></li>
          </ul>
        </div>

        <div className="newsletter-box">
          <h4 className="footer-column-title">Boletim Informativo</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Receba os principais destaques diários no seu e-mail.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn-primary">
              Assinar
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Todos os direitos reservados © 2026 - Sesi News</p>
        <div className="social-links">
          <a href="#" className="social-icon" title="Instagram">🌐</a>
          <a href="#" className="social-icon" title="LinkedIn">💼</a>
          <a href="#" className="social-icon" title="YouTube">▶</a>
          <a href="#" className="social-icon" title="Twitter / X">🐦</a>
        </div>
      </div>
    </footer>
  );
}