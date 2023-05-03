import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MemberItem } from '../../member'
import { IAttendancesRes } from '../index'
import { ParsedUrlQuery } from 'querystring'
import { NoRecordFound } from '../../../components'

const Attendances: FC<{ attendancesRes: IAttendancesRes }> = ({
  attendancesRes,
}) => {
  const router = useRouter()

  interface IParams extends ParsedUrlQuery {
    id: string
  }

  const { id: churchServiceId } = router.query as IParams

  useEffect(() => {}, [router, churchServiceId])

  return (
    <section>
      {attendancesRes.count === 0 ? (
        <NoRecordFound
          message="Oops, No Attendance Found"
          cta="Take Attendance"
          href={`/services/${churchServiceId}/attendances/mark`}
        />
      ) : (
        <div className="shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-2xl mb-5 text-secondary">
              Church Service Attendances ({attendancesRes.count})
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-secondary">
                <tr className="text-left border">
                  <th className="p-3">Name</th>
                  <th>Sex</th>
                  <th>Age</th>
                  {!router.route.includes('/cells/[id]') && <th>Cell</th>}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {attendancesRes.attendances.map(
                  (attendance) =>
                    typeof attendance.member === 'object' && (
                      <MemberItem
                        key={attendance._id}
                        member={attendance.member}
                      />
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

export default Attendances
