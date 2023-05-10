import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IMember } from '../index'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'
import { formatDateToddmYYY, getAge } from '../../../utils'

const MemberItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, dateOfBirth, cell, attendances },
}) => {
  const { route, query } = useRouter()

  const memberIsPresent =
    attendances &&
    attendances.some(
      (attendance) =>
        typeof attendance.churchService === 'string' &&
        attendance.churchService === query.serviceId
    )

  return (
    <>
      <tr className="border">
        <td className="p-3">{fullName ? fullName : ''}</td>
        <td>{gender ? gender?.at(0) : 'Not Given'}</td>
        <td>{dateOfBirth ? getAge(dateOfBirth) : 'Not Given'}</td>
        {!route.includes('/cells/[id]') && (
          <td>
            {cell && cell?.cell && typeof cell?.cell === 'object' ? (
              <Link
                href={`/cells/${cell.cell._id}`}
                className="text-primary hover:text-tertiary"
              >
                {cell?.cell?.name}
              </Link>
            ) : (
              'Not Given'
            )}
          </td>
        )}

        {route === '/cells/[id]/[serviceId]/attendance' && (
          <td>
            {cell && cell?.dateJoined
              ? formatDateToddmYYY(cell?.dateJoined)
              : 'Not Given'}
          </td>
        )}

        {route === '/cells/[id]/[serviceId]/attendance' ? (
          <td>
            {typeof memberIsPresent !== 'undefined' && memberIsPresent ? (
              <span className="text-green-500">Present</span>
            ) : (
              <span className="text-red-500">Absent</span>
            )}
          </td>
        ) : (
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
        )}
      </tr>
    </>
  )
}

export default MemberItem
