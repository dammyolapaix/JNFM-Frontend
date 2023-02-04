import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IMember } from '../index'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'
import { getAge } from '../../../utils'

const MemberItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, dateOfBirth, cell },
}) => {
  const { route } = useRouter()

  return (
    <>
      <tr className="border">
        <td className="p-3">{fullName ? fullName : ''}</td>
        <td>{gender ? gender?.at(0) : 'Not Given'}</td>
        <td>{dateOfBirth ? getAge(dateOfBirth) : 'Not Given'}</td>
        {route !== '/cells/[id]' && (
          <td>
            {cell && cell?.cell && typeof cell?.cell === 'object'
              ? cell?.cell?.name
              : 'Not Given'}
          </td>
        )}
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
