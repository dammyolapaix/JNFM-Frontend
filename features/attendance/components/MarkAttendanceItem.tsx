import { FC, FormEvent } from 'react'
import Link from 'next/link'
import { MdEdit } from 'react-icons/md'
import { IChurchService } from '../../churchService'
import { IMember } from '../../member'
import { useAppDispatch } from '../../../hooks'
import { takeAttendanceAction } from '../attendance.actions'

const MarkAttendanceItem: FC<{
  member: IMember
  churchServiceId: IChurchService['_id']
}> = ({ member: { _id, fullName, gender, attendances }, churchServiceId }) => {
  const dispatch = useAppDispatch()

  const memberIsPresent =
    attendances &&
    attendances.some(
      (attendance) =>
        typeof attendance.churchService === 'string' &&
        attendance.churchService === churchServiceId
    )

  return (
    <>
      <tr className="border">
        <td className="p-3">{`${!fullName ? '' : fullName}`}</td>
        <td>{!gender ? 'Not Given' : gender?.at(0)}</td>
        <td>
          {typeof memberIsPresent !== 'undefined' && memberIsPresent ? (
            <span className="text-green-500">Present</span>
          ) : (
            <span className="text-red-500">Absent</span>
          )}
        </td>
        <td className="flex items-center my-2">
          {typeof memberIsPresent !== 'undefined' && !memberIsPresent ? (
            <button
              onClick={() =>
                dispatch(
                  takeAttendanceAction({
                    churchService: churchServiceId,
                    member: _id,
                  })
                )
              }
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-md py-2 px-4"
            >
              <MdEdit className="mr-1" />{' '}
              <span className="ml-1">Mark Present</span>
            </button>
          ) : (
            <Link
              href={`/members/${_id}/edit`}
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4"
            >
              <MdEdit className="mr-1" />{' '}
              <span className="ml-1">Mark Absent</span>
            </Link>
          )}
        </td>
      </tr>
    </>
  )
}

export default MarkAttendanceItem
