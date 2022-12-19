import { FC } from 'react'
import { IMember } from '../index'

const MemberDetails: FC<{ member: IMember }> = ({ member: { fullName } }) => {
  return <main>{fullName}</main>
}

export default MemberDetails
