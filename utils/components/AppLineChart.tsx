import React, { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface IAppLineChart {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor: string
    borderColor: string
  }[]
}

const AppLineChart: FC<{ titleText: string; data: IAppLineChart }> = ({
  data,
  titleText: text,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text,
      },
    },
  }

  const chartData: ChartData<'line', number[], string> = {
    labels: data.labels,
    datasets: data.datasets,
  }

  return <Line options={options} data={chartData} />
}

export default AppLineChart
