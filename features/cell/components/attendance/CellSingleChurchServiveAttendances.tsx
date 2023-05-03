import React, { FC } from 'react'
import { IAttendancesRes } from '../../../attendance'
import { CellMemberItem, CellMembersTable, ICell } from '../../index'
import { IMember } from '../../../member'

const CellSingleChurchServiveAttendances: FC<{
  attendancesRes: IAttendancesRes
  cellId: string
}> = ({ attendancesRes: { attendances, count }, cellId }) => {
  console.log(attendances)
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-secondary mb-3">
          Members Attendance
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-left border">
              <th className="p-3">Name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Date Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {attendances &&
              attendances
                .filter(
                  (attendance) =>
                    typeof attendance.member === 'object' &&
                    attendance.member.cell &&
                    typeof attendance.member.cell.cell === 'object' &&
                    attendance.member.cell.cell._id === cellId
                )
                .map((attendance) => (
                  <CellMemberItem
                    key={(attendance.member as IMember)._id}
                    member={attendance.member as IMember}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CellSingleChurchServiveAttendances
