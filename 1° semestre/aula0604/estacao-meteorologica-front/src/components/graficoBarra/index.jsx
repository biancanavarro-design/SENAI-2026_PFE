import {Chart as ChartJS,
     CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar} from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function GraficoBarra(){
    const opcoes = {
        responsive: true,
        plugins: {
            legend: 'top',
        },
        title: {
            display: true,
            text: 'medidas de temperatura por mês'
        },
    }

    const labels = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
         'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

         const dados = {
            labels,
            datasets: [
            {
                label: 'chuva (mm)',
                data: labels.map(() => faker.number.int({min: 0, max: 500})),
                backgroudColor: '#cd7ef4'
            },
            {
                label: 'temperatura (ºC)',
                data: labels.map(() => faker.number.int({min: 0, max: 50})),
                backgroudColor: '#7ee2f4'
            },
            ]
         }
    return(
        <Bar options= {opcoes} data= {dados}/>
    )
}

