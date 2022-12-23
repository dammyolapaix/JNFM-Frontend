import Link from 'next/link'
import React, { FC } from 'react'
import { MdAdd } from 'react-icons/md'
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
      </div>
    </section>
  )
}

export default Attendances
