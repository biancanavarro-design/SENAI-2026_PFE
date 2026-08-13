import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sesi News | Portal de Notícias, Esportes e Inovação",
  description: "Fique por dentro das novidades do SESI em esportes, tecnologia, robótica e educação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
