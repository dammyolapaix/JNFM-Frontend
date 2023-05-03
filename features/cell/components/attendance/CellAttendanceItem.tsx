import React, { FC, useEffect, useState } from 'react'
import { IChurchService } from '../../../churchService'
import { formatDateToddmYYY } from '../../../../utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'

const CellAttendanceItem: FC<{
  churchService: IChurchService
  cellId: string
  countCellMembers: number
}> = ({
  churchService: { _id, attendances, churchServiceType, date },
  cellId,
  countCellMembers,
}) => {
  const attendanceCount =
    attendances &&
    attendances.filter(
      (attendance) =>
        typeof attendance.member === 'object' &&
        attendance.member.cell &&
        attendance.member.cell.cell === cellId
    ).length

  return (
    <>
      <tr className="border">
        <td className="px-4 py-2">
          {churchServiceType && typeof churchServiceType === 'object' ? (
            <Link
              href={`/services/${_id}`}
              className="text-primary hover:text-tertiary"
            >
              {churchServiceType.name}
            </Link>
          ) : (
            'Not Given'
          )}
        </td>
        <td className="px-4 py-2">
          {date ? formatDateToddmYYY(date) : 'Not Given'}
        </td>
        <td className="px-4 py-2">
          {attendanceCount && cellId ? (
            <Link
              href={`/cells/${cellId}/services/${_id}/attendances`}
              className="text-primary hover:text-tertiary"
            >{`${attendanceCount} of ${countCellMembers}`}</Link>
          ) : (
            cellId && (
              <Link
                href={`/cells/${cellId}/services/${_id}/attendances`}
                className="text-primary hover:text-tertiary"
              >{`0 of ${countCellMembers}`}</Link>
            )
          )}
        </td>
        {cellId && (
          <td className="flex items-center px-4 py-2">
            <Link
              href={`/cells/${cellId}/services/${_id}/attendances/take`}
              className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
            >
              <div className="flex items-center">
                <MdAdd /> Take Attendance
              </div>
            </Link>
          </td>
        )}
      </tr>
    </>
  )
}

export default CellAttendanceItem
