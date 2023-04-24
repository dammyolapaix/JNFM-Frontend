import Link from 'next/link'
import { FC } from 'react'
import { ICell } from '../index'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'

const CellItem: FC<{ cell: ICell }> = ({ cell: { _id, members, name } }) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">
          <Link href={`/cells/${_id}`}>{!name ? 'Not Given' : name}</Link>{' '}
        </td>
        <td>{!members ? '0' : members.length}</td>
        <td className="flex items-center mt-2">
          <Link
            href={`/cells/${_id}`}
            className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <MdRemoveRedEye />
          </Link>
          <Link
            href={`/cells/${_id}/edit`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
          >
            <MdEdit />
          </Link>
        </td>
      </tr>
    </>
  )
}

export default CellItem
