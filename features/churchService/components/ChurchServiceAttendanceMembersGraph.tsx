import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { IAttendance } from '../../attendance'
import { ICell, getCellsAction } from '../../cell'
import IChurchService from '../churchService.interfaces'

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

const ChurchServiceAttendanceMembersGraph: FC<{
  churchService: IChurchService
}> = ({ churchService }) => {
  const [cellMemberAttendancesCount, setCellMemberAttendancesCount] = useState<
    ICellMemberAttendance[]
  >([
    {
      cellName: '',
      attendancesNumber: 0,
    },
  ])

  interface ICellMemberAttendance {
    cellName: string
    attendancesNumber: number
  }

  const dispatch = useAppDispatch()

  const { cellsRes } = useAppSelector((state) => state.cell)

  const getCellMemberAttendance = (
    cells: ICell[],
    attendances: IAttendance[]
  ): ICellMemberAttendance[] => {
    const cellMemberAttendances: ICellMemberAttendance[] = []

    cells.forEach((cell) => {
      const cellMemberAttendance: ICellMemberAttendance = {
        cellName: cell.name as string,
        attendancesNumber: 0,
      }

      if (cell.members) {
        cell.members.forEach((member) => {
          const attendance = attendances.find(
            (attendance) =>
              typeof attendance.member === 'object' &&
              attendance.member.cell &&
              typeof attendance.member.cell.cell === 'object' &&
              attendance.member.cell.cell._id === cell._id &&
              attendance.member._id === member._id
          )
          if (attendance) {
            cellMemberAttendance.attendancesNumber++
          }
        })
      }

      cellMemberAttendances.push(cellMemberAttendance)
    })

    return cellMemberAttendances
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  }

  const cellNames: string[] = []
  const attendancesNumbers: number[] = []

  cellMemberAttendancesCount.forEach((cellAttendance) => {
    const cellName = cellAttendance.cellName
    const attendanceNumber = cellAttendance.attendancesNumber

    if (!cellNames.includes(cellName)) {
      cellNames.push(cellName)
      attendancesNumbers.push(attendanceNumber)
    }
  })

  const labels = cellNames

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: attendancesNumbers,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  useEffect(() => {
    dispatch(getCellsAction())
    const cellMemberAttendancesCount = getCellMemberAttendance(
      cellsRes.cells,
      churchService.attendances as IAttendance[]
    )
    setCellMemberAttendancesCount(cellMemberAttendancesCount)
  }, [dispatch])
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-tertiary mb-5">Graph</h2>
      <Bar options={options} data={data} />
    </div>
  )
}

export default ChurchServiceAttendanceMembersGraph
