"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/" && (pathname === "/" || pathname === "/inicio")) return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand-wrapper">
          <Link href="/" className="brand-logo">
            SESI<span className="highlight">NEWS</span>
          </Link>
          <div className="live-badge">
            <span className="pulse-dot"></span>
            AO VIVO
          </div>
        </div>

        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link
                href="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/categorias"
                className={`nav-link ${pathname === "/categorias" ? "active" : ""}`}
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                href="/categorias/esportes"
                className={`nav-link ${isActive("/categorias/esportes") ? "active" : ""}`}
              >
                ⚡ Esportes
              </Link>
            </li>
            <li>
              <Link
                href="/categorias/tecnologia"
                className={`nav-link ${isActive("/categorias/tecnologia") ? "active" : ""}`}
              >
                🚀 Tecnologia
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar notícias..."
              className="search-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}