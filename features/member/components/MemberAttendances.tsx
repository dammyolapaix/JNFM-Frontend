import React, { FC } from 'react'
import { NoRecordFound } from '../../../components'
import { IAttendance } from '../../attendance'
import MemberAttendancesItem from './MemberAttendancesItem'

const MemberAttendances: FC<{ attendances: IAttendance[] }> = ({
  attendances,
}) => {
  return (
    <section>
      {attendances && attendances.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="px-4 py-2">Church Service</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {attendances.map((attendance) => (
                <MemberAttendancesItem
                  key={attendance._id}
                  attendance={attendance}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoRecordFound message="Oops, this member has no attendance" />
      )}
    </section>
  )
}

export default MemberAttendances
