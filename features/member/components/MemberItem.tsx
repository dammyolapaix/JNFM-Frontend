import Link from 'next/link'
import { FC } from 'react'
import { IMember } from '../index'

const MemberItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, dateOfBirth },
}) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">{`${!fullName ? '' : fullName}`}</td>
        <td>{!gender ? 'Not Given' : gender?.at(0)}</td>
        {/* <td>
      {!dateOfBirth ? 'Not Given' : age(dateOfBirth)}
    </td> */}
        <td>
          <Link legacyBehavior href={`/members/${_id}`}>
            <a className="bg-blue-900 text-white rounded-md py-2 px-4">
              View Member
            </a>
          </Link>
          <Link legacyBehavior href={`/members/${_id}/edit`}>
            <a className="bg-blue-900 text-white rounded-md py-2 px-4">
              Edit Member
            </a>
          </Link>
        </td>
      </tr>
    </>
  )
}

export default MemberItem
