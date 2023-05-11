import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { MemberItem, IMember } from '../index'

const MembersTable: FC<{
  members: IMember[]
}> = ({ members }) => {
  const { route } = useRouter()

  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-5">
        Members ({members.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-left border">
              <th className="p-3">Name</th>
              <th>Sex</th>
              <th>Age</th>
              {!route.includes('/cells/[id]') && <th>Cell</th>}
              <th>Date Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <MemberItem key={member._id} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MembersTable
