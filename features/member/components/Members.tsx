import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MembersGraph, MembersOverview, MembersTableLayout } from '../index'

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
      <MembersOverview members={members} />
      <MembersGraph members={members} />
    </>
  )
}

// const Members: FC<{
//   membersRes: IMembersRes
//   membersResQueryCountIsZero: boolean
// }> = ({ membersRes, membersResQueryCountIsZero }) => {
//   return (
//     <MembersTableLayout
//       membersRes={membersRes}
//       membersResQueryCountIsZero={membersResQueryCountIsZero}
//     />
//   )
// }

export default Members
