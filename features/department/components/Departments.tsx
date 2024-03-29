import React, { FC } from 'react'
import Link from 'next/link'
import { DepartmentItem, IDepartmentsRes } from '../index'
import { MdAdd } from 'react-icons/md'
import { NoRecordFound } from '../../../components'

const Departments: FC<{ departmentsRes: IDepartmentsRes }> = ({
  departmentsRes,
}) => {
  return (
    <section>
      {departmentsRes.count === 0 ? (
        <NoRecordFound
          cta="Oops, No Department Found"
          href="/departments/new"
        />
      ) : (
        <div className="shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-2xl mb-5 text-secondary">
              Departments ({departmentsRes.count})
            </h1>
            <Link
              href={`/departments/new`}
              className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
            >
              <MdAdd />
              <div>New</div>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-secondary">
                <tr className="text-left border">
                  <th className="p-3">Name</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                {departmentsRes.departments.map((department) => (
                  <DepartmentItem
                    key={department._id}
                    department={department}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

export default Departments
