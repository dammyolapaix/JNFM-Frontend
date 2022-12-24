import Link from 'next/link'
import React, { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { MemberItem } from '../../member'
import { IAttendancesRes } from '../index'

const Attendances: FC<{ attendancesRes: IAttendancesRes }> = ({
  attendancesRes,
}) => {
  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Church Service Attendances ({attendancesRes.count})
          </h1>
          <Link
            href={`#`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div className="">New</div>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="p-3">Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {attendancesRes.attendances.map((attendance) => (
                <MemberItem key={attendance._id} member={attendance.member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Attendances
