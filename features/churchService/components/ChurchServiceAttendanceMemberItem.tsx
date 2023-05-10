import React, { FC } from 'react'
import { IMember } from '../../member'
import { getAge } from '../../../utils'
import Link from 'next/link'

const ChurchServiceAttendanceMemberItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, dateOfBirth, cell },
}) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">
          {fullName ? (
            <Link
              href={`/members/${_id}`}
              className="text-primary hover:text-secondary"
            >
              {fullName}
            </Link>
          ) : (
            'Not Given'
          )}
        </td>
        <td>{gender ? gender?.at(0) : 'Not Given'}</td>
        <td>{dateOfBirth ? getAge(dateOfBirth) : 'Not Given'}</td>
        <td>
          {cell && cell?.cell && typeof cell.cell === 'object' ? (
            <Link
              href={`/cells/${cell.cell._id}`}
              className="text-primary hover:text-secondary"
            >
              {cell.cell.name}
            </Link>
          ) : (
            'Not Given'
          )}
        </td>
      </tr>
    </>
  )
}

export default ChurchServiceAttendanceMemberItem
