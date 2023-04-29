import { FC, useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { TiTick } from 'react-icons/ti'
import { IMember } from '../../member'
import { useAppDispatch } from '../../../hooks'
import { markAsAbsentAction, takeAttendanceAction } from '../attendance.actions'
import { useRouter } from 'next/router'

const MarkAttendanceItem: FC<{ member: IMember }> = ({
  member: { _id, fullName, gender, attendances },
}) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [churchServiceId, setChurchServiceId] = useState('')

  const memberIsPresent =
    attendances &&
    attendances.some(
      (attendance) =>
        typeof attendance.churchService === 'string' &&
        attendance.churchService === churchServiceId
    )

  const churchServiceAttendance =
    attendances &&
    attendances.filter(
      (attendance) =>
        typeof attendance.churchService === 'string' &&
        attendance.churchService === churchServiceId
    )

  useEffect(() => {
    setChurchServiceId(router.query.id as string)
  }, [router])

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
        {typeof memberIsPresent !== 'undefined' && !memberIsPresent && (
          <td className="flex items-center my-2">
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
              <TiTick className="text-xs" />
            </button>
          </td>
        )}
        {typeof memberIsPresent !== 'undefined' &&
          memberIsPresent &&
          typeof churchServiceAttendance !== 'undefined' && (
            <td>
              <button
                onClick={() =>
                  dispatch(markAsAbsentAction(churchServiceAttendance[0]._id))
                }
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4"
              >
                <ImCross className="text-xs" />
              </button>
            </td>
          )}
      </tr>
    </>
  )
}

export default MarkAttendanceItem
