import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Turma from "../img/turma.jpg";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>

        <section className="hero">

          <Image
            src={Turma}
            alt="Turma"
            priority
          />

          <div className="overlay">

            <h1>Terceirão A</h1>

            <p>
              Nosso último ano juntos.
            </p>

          </div>

        </section>

        <section className="informacoes">

          <h2>Informações</h2>

          <div className="cards">

            <div className="card">
              <h3>🎓 Formatura</h3>
              <span>18/12/2026</span>

              <p>
                Todos estarão reunidos para viver esse momento especial em nossas vidas.
              </p>
            </div>

            <div className="card">
              <h3>🎭 Próximo trote</h3>
              <span>11/08/2026</span>

              <p>
                Tema: Personagens
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}