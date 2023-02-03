import Link from 'next/link'
import { FC } from 'react'
import { MdRemoveRedEye } from 'react-icons/md'
import { formatDateToddmYYY } from '../../../utils'
import { IAttendance } from '../../attendance'

const MemberAttendancesItem: FC<{ attendance: IAttendance }> = ({
  attendance: { churchService },
}) => {
  return (
    <>
      <tr className="border text-left">
        <td className="px-4 py-2">
          {churchService &&
          typeof churchService === 'object' &&
          churchService.churchServiceType &&
          typeof churchService.churchServiceType === 'object'
            ? churchService.churchServiceType.name
            : 'Not Given'}
        </td>
        <td className="px-4 py-2">
          {churchService &&
          typeof churchService === 'object' &&
          churchService.date
            ? formatDateToddmYYY(churchService.date)
            : 'Not Given'}
        </td>
        <td className="px-4 py-2">
          {churchService &&
          typeof churchService === 'object' &&
          churchService._id ? (
            <Link
              href={`/services/${churchService._id}/attendances`}
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

export default MemberAttendancesItem
