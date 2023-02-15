import React, { FC } from 'react'
import { NoRecordFound } from '../../../components'
import { IDepartment } from '../../department'
import MemberDepartmentItem from './MemberDepartmentItem'

const MemberDepartments: FC<{ departments: IDepartment[] }> = ({
  departments,
}) => {
  return (
    <section>
      {departments && departments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="px-4 py-2">Department Name</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <MemberDepartmentItem
                  key={department._id}
                  department={department}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoRecordFound message="Oops, this member is not in any department." />
      )}
    </section>
  )
}

export default MemberDepartments
