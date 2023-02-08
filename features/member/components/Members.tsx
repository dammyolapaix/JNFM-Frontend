import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MembersTableLayout } from '../index'

const Members: FC<{
  membersRes: IMembersRes
  membersResQueryCountIsZero: boolean
}> = ({ membersRes, membersResQueryCountIsZero }) => {
  return (
    <MembersTableLayout
      membersRes={membersRes}
      membersResQueryCountIsZero={membersResQueryCountIsZero}
    />
  )
}

export default Members
