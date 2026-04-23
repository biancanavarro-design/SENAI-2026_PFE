import Header from '../../components/header'
import './dashboard.css'


export default function Dashboard(){
    return (
        <>
        <Header />
        <section className="cards">
            <div className="card">
           <h6>Temperatura</h6>
           <h2>32º C</h2>
            </div>

            <div className="card">
           <h6>Umidde</h6>
           <h2>60%</h2>
            </div>

            <div className="card">
           <h6>Pressão</h6>
           <h2>1013 hPa</h2>
            </div>

            <div className="card">
           <h6>Vento</h6>
           <h2>12 km</h2>
            </div>

        </section>

        <section className="graficos">
            <h6>Gráficos</h6>

            <div>
                {/* colocar gráficos */}
            </div>
        </section>

        <section className="tabela">
<h6>Leituras recentes</h6>
<table>
    <thead>
        <tr>
            <th>Horário</th>
            <th>Temp.</th>
            <th>Umidades</th>
            <th>Vento</th>
        </tr>
    </thead>
    <tbody>
       <tr>
            <td>12:00</td>
            <td>45°C</td>
            <td>50%</td>
            <td>13km</td>
       </tr>
    </tbody>
</table>
        </section>

        </>
    )
}
