import React, { FC } from 'react'
import { IMember, useMembersTotal } from '../'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
)

const MaleFemalePieChart: FC<{ members: IMember[] }> = ({ members }) => {
  const { totalFemales, totalMales } = useMembersTotal(members)

  const data = {
    labels: ['Males', 'Females'],
    datasets: [
      {
        label: '# of Members',
        data: [totalMales, totalFemales],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data} />
}

export default MaleFemalePieChart
