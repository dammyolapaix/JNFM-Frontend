import { FC } from 'react'
import { IMember } from '../../../member'
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
import { Pie, Line } from 'react-chartjs-2'

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

const CellMembersGraph: FC<{ members: IMember[] }> = ({ members }) => {
  const totalMales = members
    ? members.filter((member) => member.gender === 'Male').length
    : 0

  const totalFemales = members
    ? members.filter((member) => member.gender === 'Female').length
    : 0

  const maleFemaleData = {
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

  //   Join Date
  const joinedDateOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'New Members per month',
      },
    },
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'August',
    'September',
    'October',
    'Novermber',
    'December',
  ]

  const getMembersByMonthJoined = (members: IMember[]): number[] => {
    const memberCountByMonth = new Array(12).fill(0) // Initialize an array of length 12 with 0s for each month

    members.forEach((member) => {
      if (member.cell?.dateJoined) {
        const joinedDate = new Date(member.cell?.dateJoined)
        const month = joinedDate.getMonth() // get the month index (0-11)
        memberCountByMonth[month]++ // increment the member count for the corresponding month
      }
    })

    return memberCountByMonth
  }

  const memberCountByMonthJoined = getMembersByMonthJoined(members)

  const joinedDateData = {
    labels,
    datasets: [
      {
        label: 'New Members',
        data: memberCountByMonthJoined,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-5">Graph</h2>
      <div className="grid md:grid-cols-2">
        <div className="h-96">
          <Pie data={maleFemaleData} />
        </div>
        <div className="h-96">
          <Line options={joinedDateOptions} data={joinedDateData} />
        </div>
      </div>
    </div>
  )
}

export default CellMembersGraph
