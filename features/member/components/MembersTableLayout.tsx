import React, { FC } from 'react'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import IMember, { IMembersRes } from '../member.interfaces'
import { MembersTable } from '../index'

const MembersTableLayout: FC<{
  membersRes?: IMembersRes
  membersData?: {
    member: IMember
  }[]
}> = ({ membersRes, membersData }) => {
  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Members (
            {membersRes
              ? membersRes.count
              : membersData
              ? membersData.length
              : '0'}
            )
          </h1>
          <Link
            href={`/members/new`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div>New</div>
          </Link>
        </div>
        {membersRes && <MembersTable members={membersRes.members} />}

        {membersData && <MembersTable membersData={membersData} />}
      </div>
    </section>
  )
}

export default MembersTableLayout
