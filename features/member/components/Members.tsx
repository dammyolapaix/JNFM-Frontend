import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MembersTableLayout } from '../index'

const Members: FC<{
  membersRes: IMembersRes
  membersResQueryCount: boolean
}> = ({ membersRes, membersResQueryCount }) => {
  return (
    <MembersTableLayout
      membersRes={membersRes}
      membersResQueryCount={membersResQueryCount}
    />
  )
}

export default Members
