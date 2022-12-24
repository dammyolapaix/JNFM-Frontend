import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { FC, useEffect } from 'react'
import { IMember } from '../../member'
import { MarkAttendanceItem } from '../index'

const MarkAttendance: FC<{ members: IMember[] }> = ({ members }) => {
  const router = useRouter()

  interface IParams extends ParsedUrlQuery {
    id: string
  }

  const { id: churchServiceId } = router.query as IParams

  useEffect(() => {}, [router, churchServiceId])

  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Church Service Attendance
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="p-3">Name</th>
                <th>Sex</th>
                <th>Status</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <MarkAttendanceItem
                  key={member._id}
                  member={member}
                  churchServiceId={churchServiceId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default MarkAttendance
