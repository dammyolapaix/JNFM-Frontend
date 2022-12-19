import Link from 'next/link'
import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MemberItem } from '../index'
import { MdAdd } from 'react-icons/md'

const Members: FC<{ membersRes: IMembersRes }> = ({ membersRes }) => {
  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Members ({membersRes.count})
          </h1>
          <Link
            href={`/patients/new`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div className="">New</div>
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
              {membersRes.members.map((member) => (
                <MemberItem key={member._id} member={member} />
              ))}
              {membersRes.members.map((member) => (
                <MemberItem key={member._id} member={member} />
              ))}
              {membersRes.members.map((member) => (
                <MemberItem key={member._id} member={member} />
              ))}
              {membersRes.members.map((member) => (
                <MemberItem key={member._id} member={member} />
              ))}
              {membersRes.members.map((member) => (
                <MemberItem key={member._id} member={member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Members
