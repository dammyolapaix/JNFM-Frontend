import React, { useEffect, useState, FC } from 'react'
import { MdPeopleAlt } from 'react-icons/md'
import IChurchService from '../churchService.interfaces'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { changeToHigherDenomination } from '../../../utils'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { ICell, getCellsAction } from '../../cell'
import { IAttendance } from '../../attendance'

const ChurchServiceGeneralOverview: FC<{ churchService: IChurchService }> = ({
  churchService,
}) => {
  const [cellMemberAttendancesCount, setCellMemberAttendancesCount] = useState<
    ICellMemberAttendance[]
  >([
    {
      cellName: '',
      attendancesNumber: 0,
    },
  ])
  const dispatch = useAppDispatch()

  const { cellsRes } = useAppSelector((state) => state.cell)

  const totalOfferings =
    typeof churchService.offerings !== 'undefined' &&
    churchService.offerings.reduce(
      (accumulatedOfferings, currentOffering) =>
        accumulatedOfferings + currentOffering.amount,
      0
    )

  const totalExpenditures =
    typeof churchService.expenditures !== 'undefined' &&
    churchService.expenditures.reduce(
      (accumulatedExpenditures, currentExpenditure) =>
        accumulatedExpenditures + currentExpenditure.amount,
      0
    )

  interface ICellMemberAttendance {
    cellName: string
    attendancesNumber: number
  }

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
      <h2 className="font-bold text-lg text-tertiary mb-3">General Overview</h2>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="flex items-center">
              <span className="mr-1 bg-primary p-1 rounded-md">
                <MdPeopleAlt className="text-xl text-white" />
              </span>
              <span className="ml-1">Total Attendance</span>
            </div>
            <div className="font-bold ml-10">
              {churchService.attendances ? churchService.attendances.length : 0}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="mr-1 bg-primary p-1 rounded-md">
                <GiReceiveMoney className="text-xl text-white" />
              </span>
              <span className="ml-1">Total Offering</span>
            </div>
            <div className="font-bold ml-10 text-green-600">
              {changeToHigherDenomination(
                typeof totalOfferings === 'number' ? totalOfferings : 0
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <span className="mr-1 bg-primary p-1 rounded-md">
                <GiPayMoney className="text-xl text-white" />
              </span>
              <span className="ml-1">Total Expenditure</span>
            </div>
            <div className="font-bold ml-10 text-red-600">
              {changeToHigherDenomination(
                typeof totalExpenditures === 'number' ? totalExpenditures : 0
              )}
            </div>
          </div>
        </div>
        {/* Cells members attendance */}
        <div className="my-5">
          <h3 className="text-tertiary text-lg font-bold mb-3">
            Cell Members Attendance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cellMemberAttendancesCount.map((cellMemberAttendance, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <span className="mr-1 bg-primary p-1 rounded-md">
                    <MdPeopleAlt className="text-xl text-white" />
                  </span>
                  <span className="ml-1">{cellMemberAttendance.cellName}</span>
                </div>
                <div className="font-bold ml-10">
                  {cellMemberAttendance.attendancesNumber}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChurchServiceGeneralOverview
