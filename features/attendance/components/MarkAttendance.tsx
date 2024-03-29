import { FC, useEffect, useState } from 'react'
import { IMember } from '../../member'
import { MarkAttendanceItem } from '../index'
import { useRouter } from 'next/router'

const MarkAttendance: FC<{ members: IMember[] }> = ({ members }) => {
  const [churchServiceId, setChurchServiceId] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    router.query.serviceId &&
      setChurchServiceId(router.query.serviceId as string)

    return () => {
      setChurchServiceId('')
    }
  }, [router])

  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Mark Attendance
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
              {churchServiceId !== '' &&
                members.map((member) => (
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
