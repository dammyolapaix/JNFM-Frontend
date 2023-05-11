import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MembersGraph, MembersOverview, MembersTable } from '../index'
import { NoRecordFound } from '../../../components'

const Members: FC<{ membersRes: IMembersRes }> = ({
  membersRes: { count, members },
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          Members ({count})
        </h1>
      </div>

      {count > 0 ? (
        <>
          <MembersOverview members={members} />
          <MembersGraph members={members} />
          <MembersTable members={members} />
        </>
      ) : (
        <NoRecordFound message="No Member Found" />
      )}
    </>
  )
}

export default Members
