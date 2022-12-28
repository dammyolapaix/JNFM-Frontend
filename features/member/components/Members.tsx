import React, { FC } from 'react'
import { IMembersRes } from '../member.interfaces'
import { MembersTableLayout } from '../index'

const Members: FC<{ membersRes: IMembersRes }> = ({ membersRes }) => {
  return <MembersTableLayout membersRes={membersRes} />
}

export default Members
