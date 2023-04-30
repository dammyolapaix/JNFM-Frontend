import { FC } from 'react'
import { IMember } from '../../member'
import { formatDateToddmYYY, getAge } from '../../../utils'
import Link from 'next/link'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'

const CellMemberItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, dateOfBirth, cell },
}) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">{fullName ? fullName : ''}</td>
        <td>{gender ? gender?.at(0) : 'Not Given'}</td>
        <td>{dateOfBirth ? getAge(dateOfBirth) : 'Not Given'}</td>
        <td>
          {cell && cell?.dateJoined
            ? formatDateToddmYYY(cell?.dateJoined)
            : 'Not Given'}
        </td>
        <td className="flex items-center mt-2">
          <Link
            href={`/members/${_id}`}
            className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <MdRemoveRedEye />
          </Link>
          {cell && cell?.cell && typeof cell?.cell === 'object' && (
            <Link
              href={`/cells/${cell.cell._id}/members/${_id}/edit`}
              className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
            >
              <MdEdit />
            </Link>
          )}
        </td>
      </tr>
    </>
  )
}

export default CellMemberItem
