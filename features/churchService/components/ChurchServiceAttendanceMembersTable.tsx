import React, { FC } from 'react'
import { IMember } from '../../member'
import { IAttendance } from '../../attendance'
import ChurchServiceAttendanceMemberItem from './ChurchServiceAttendanceMemberItem'

const ChurchServiceAttendanceMembersTable: FC<{
  attendances: IAttendance[]
}> = ({ attendances }) => {
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-3">
        Members ({attendances.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-left border">
              <th className="p-3">Name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Cell</th>
            </tr>
          </thead>
          <tbody>
            {attendances.map((attendance) => (
              <ChurchServiceAttendanceMemberItem
                key={attendance._id}
                member={attendance.member as IMember}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ChurchServiceAttendanceMembersTable
