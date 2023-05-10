import { FC } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface IPieChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor: string[]
    borderColor: string[]
    borderWidth: number
  }[]
}

const AppPieChart: FC<{ data: IPieChartData }> = ({ data }) => {
  const chartData: ChartData<'pie', number[], string> = {
    labels: data.labels,
    datasets: data.datasets,
  }
  /**
   * ChartData<"pie", number[], string> is the type for the data prop of the Pie component. This type specifies that the chart data should include an array of numbers (for the chart values) and an array of strings (for the chart labels), with a string type for the chart's background colors.
   */
  return <Pie data={chartData} />
}

export default AppPieChart
