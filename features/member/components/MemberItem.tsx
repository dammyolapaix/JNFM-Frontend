import Link from 'next/link'
import { FC } from 'react'
import { IMember } from '../index'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'

const MemberItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, dateOfBirth },
}) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">{`${!fullName ? '' : fullName}`}</td>
        <td>{!gender ? 'Not Given' : gender?.at(0)}</td>
        <td>32</td>
        {/* <td>
      {!dateOfBirth ? 'Not Given' : age(dateOfBirth)}
    </td> */}
        <td className="flex items-center mt-2">
          <Link
            href={`/members/${_id}`}
            className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <MdRemoveRedEye />
          </Link>
          <Link
            href={`/members/${_id}/edit`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
          >
            <MdEdit />
          </Link>
        </td>
      </tr>
    </>
  )
}

export default MemberItem
