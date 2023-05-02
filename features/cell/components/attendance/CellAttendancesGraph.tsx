import React, { FC, useEffect, useState } from 'react'
import { IAttendance, IAttendancesRes } from '../../../attendance'
import { useRouter } from 'next/router'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CellAttendancesGraph: FC<{ attendancesRes: IAttendancesRes }> = ({
  attendancesRes: { attendances },
}) => {
  const [cellId, setCellId] = useState<string>('second')

  const router = useRouter()

  const getMonthlyAttendances = (attendances: IAttendance[]): number[] => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const monthlyAttendances: number[] = Array(12).fill(0)
    attendances.forEach((attendance) => {
      if (
        typeof attendance.member === 'object' &&
        typeof attendance.churchService === 'object' &&
        attendance.member.cell &&
        attendance.churchService.date
      ) {
        const cell = attendance.member.cell.cell
        const date = new Date(attendance.churchService.date)
        const year = date.getFullYear()
        const month = date.getMonth()
        if (
          typeof cell === 'object' &&
          cell._id === cellId &&
          year === currentYear
        ) {
          monthlyAttendances[month]++
        }
      }
    })
    return monthlyAttendances
  }

  const monthlyAttendances = getMonthlyAttendances(attendances)

  const totalAttendances = monthlyAttendances.map((attendance) => attendance)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Attendance Per Month',
      },
    },
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Attendance',
        data: totalAttendances,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  useEffect(() => {
    setCellId(router.query.id as string)

    return () => {
      setCellId('')
    }
  }, [router, cellId])

  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-5">Graph</h2>
      <div className="flex justify-center items-center h-96">
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default CellAttendancesGraph
