import imgMusculacao from "https://media.istockphoto.com/id/1441694626/pt/foto/hand-of-athlete-woman-holding-dumbbell-from-the-rack-in-the-gym-muscular-fitness-female.jpg?s=612x612&w=0&k=20&c=keUz19Hez2bL8unh6rbVKqQOZ2Ypub0d9seVKT1o9Ak="
import imgCardio from "https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1132086660.jpg"
import imgYoga from "https://img.freepik.com/fotos-gratis/jovem-desportiva-praticando-ioga-isolada-na-superficie-branca-conceito-de-vida-saudavel-e-equilibrio-natural-entre-o-corpo-e-o-desenvolvimento-mental_231208-12535.jpg?semt=ais_hybrid&w=740&q=80"


export default function Main(){
    return(
        <main>
            <section id="nome">
                <h2>Transforme seu corpo com a <span>FoFitness</span></h2>
                <p>A academia perfeita para quem deseja saúde, diversão e evolução</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre Nós</h2>
                <p>Somos uma academia focada em saúde, bem-estar e inclusão.
                    Aqui, todos os alunos são tratados com respeito e motivação.
                    Nossa estrutura conta com equipamentos modernos, professores qualificados e um ambiente acolhedor.</p>
            </section>

            <section id="modalidades">
                <h2>Modalidades</h2>
                <div className="exercicio">
                    <h3>Musculação</h3>
                    <img src= {imgMusculacao} alt="" />
                </div>
                <div className="exercicio">
                    <h3>Cardio</h3>
                    <img src= {imgCardio} alt="" />
                </div>
                <div className="exercicio">
                    <h3>Yoga</h3>
                    <img src= {imgYoga} alt="" />
                </div>
            </section>

            <section id="planos">
                <h2>Planos e Preços</h2>
                <div className="tabela-planos">
                    <h3>Básico</h3>
                    <p className="preco">R$ 79,99/mês</p>
                    <ul>
                        <li>Acesso à musculação</li>
                        <li>Aulas coletivas limitadas</li>
                        <li>Horário Livre</li>
                    </ul>
                </div>
               
                <div className="plano destaque">
                    <h3>Premium</h3>
                    <p className="preco">R$ 129,90/mês</p>
                    <ul>
                        <li>Acesso total</li>
                        <li>Personal Trainer 1x/semana</li>
                        <li>Yoga & Funcional</li>
                    </ul>
                </div>

                <div className="plano">
                    <h3>Vip</h3>
                    <p className="preco">R$ 199,90/mês</p>
                    <ul>
                        <li>Personal exclusivo</li>
                        <li>Nutricionista</li>
                        <li>Acompanhamento mensal</li>
                        <li>Bom dia da(o) atendente</li>
                    </ul>
                </div>
            </section>

            <section id="depoimentos">
                <h2>O que nossos alunos dizem</h2>
                <div className="depoimento">
                    <p>“A melhor academia que já frequentei! Ambiente leve e motivador.”</p>
                    <span>Vinnie Hacker</span>
                </div>

                 <div className="depoimento">
                    <p>“Professores incríveis e estrutura impecável. Recomendo muito!”</p>
                    <span>Jace Norman</span>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2>Entre em contato</h2>
                <form action="">
                    <input type="text" placeholder="seu nome"/>
                    <input type="text" placeholder="seu email"/>
                    <textarea name="" id="" placeholder="mensagem"/>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    )
}
