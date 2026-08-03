import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>Terceirão A</h1>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/fotos">Fotos</Link></li>
        </ul>
      </nav>
    </header>
  );
}