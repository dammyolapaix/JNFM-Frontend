import React, { FC } from 'react'
import { MemberItem, IMember } from '../index'

const MembersTable: FC<{
  members?: IMember[]
}> = ({ members }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="text-secondary">
          <tr className="text-left border">
            <th className="p-3">Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Cell</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members &&
            members.map((member) => (
              <MemberItem key={member._id} member={member} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MembersTable
