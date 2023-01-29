import { FC } from 'react'
import Link from 'next/link'
import { MdRemoveRedEye } from 'react-icons/md'
import { IDepartment } from '../../department'

const MemberDepartmentItem: FC<{ department: IDepartment }> = ({
  department: { name, _id },
}) => {
  return (
    <>
      <tr className="border text-left">
        <td className="px-4 py-2">{name ? name : 'Not Given'}</td>
        <td className="px-4 py-2">
          {_id ? (
            <Link
              href={`/departments/${_id}`}
              className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3 inline-block"
            >
              <MdRemoveRedEye />
            </Link>
          ) : (
            'Not Given'
          )}
        </td>
      </tr>
    </>
  )
}

export default MemberDepartmentItem
