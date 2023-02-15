import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdAdd } from 'react-icons/md'
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
        <NoRecordFound message="Oops, No Attendance Found" />
      ) : (
        <div className="shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-2xl mb-5 text-secondary">
              Church Service Attendances ({attendancesRes.count})
            </h1>
            <Link
              href={`/services/${churchServiceId}/attendances/mark`}
              className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
            >
              <MdAdd />
              <div className="">Take Attendance</div>
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
