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
          {attendanceCount
            ? `${attendanceCount} of ${countCellMembers}`
            : 'Not Given'}
        </td>
        <td className="flex items-center px-4 py-2">
          <Link
            href={`/services/${_id}/attendances/mark`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <div className="flex items-center">
              <MdAdd /> Take Attendance
            </div>
          </Link>
          {/* <Link
            href={`/members/${_id}`}
            // className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <MdAdd className="bg-secondary hover:bg-tertiary p-3 text-white rounded-md" />
          </Link> */}
        </td>
      </tr>
    </>
  )
}

export default CellAttendanceItem
