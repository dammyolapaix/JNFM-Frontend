import Link from 'next/link'
import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MemberItem } from '../index'

const Members: FC<{ membersRes: IMembersRes }> = ({ membersRes }) => {
  return (
    <section>
      <div className="shadow-md my-5 p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-blue-900">
            Members ({membersRes.count})
          </h1>
          <Link legacyBehavior href={`/patients/new`}>
            <a className="bg-blue-900 text-white rounded-md py-2 px-4">
              New
              {/* <AddBoxIcon /> */}
            </a>
          </Link>
        </div>

        <table className="overflow-x-auto overflow-y-hidden w-full">
          <thead className="text-blue-900">
            <tr className="text-left border">
              <th className="p-3">Name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {membersRes.members.map((member) => (
              <MemberItem key={member._id} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Members
