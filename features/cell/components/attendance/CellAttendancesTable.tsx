import React, { FC, useEffect, useState } from 'react'
import { IChurchService } from '../../../churchService'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import CellAttendanceItem from './CellAttendanceItem'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getMembersAction } from '../../../member'

const CellAttendancesTable: FC<{ churchServices: IChurchService[] }> = ({
  churchServices,
}) => {
  const [cellId, setcellId] = useState<string>('')
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    membersRes: { count: countCellMembers },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    setcellId(router.query.id as string)
    if (cellId !== '') {
      dispatch(getMembersAction({ 'cell.cell': cellId }))
    }
    return () => setcellId('')
  }, [router, cellId])
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-tertiary mb-3">
          Attendance By Church Services
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-left border">
              <th className="px-4 py-2">Church Service</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Attendance</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {churchServices &&
              churchServices.map((churchService) => (
                <CellAttendanceItem
                  key={churchService._id}
                  churchService={churchService}
                  cellId={cellId}
                  countCellMembers={countCellMembers}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CellAttendancesTable
