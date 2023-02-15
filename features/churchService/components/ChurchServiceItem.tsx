import { FC } from 'react'
import Link from 'next/link'
import { IChurchService } from '../index'
import { MdAdd, MdEdit, MdRemoveRedEye } from 'react-icons/md'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { ICell } from '../../cell'

const ChurchServiceItem: FC<{
  churchService: IChurchService
  cell?: ICell
}> = ({
  cell,
  churchService: {
    _id,
    date,
    attendances,
    churchServiceType,
    offerings,
    expenditures,
  },
}) => {
  const hasCell = cell ? true : false

  const totalOfferings =
    typeof offerings !== 'undefined' &&
    offerings.reduce(
      (accumulatedOfferings, currentOffering) =>
        accumulatedOfferings + currentOffering.amount,
      0
    )

  const totalExpenditures =
    typeof expenditures !== 'undefined' &&
    expenditures.reduce(
      (accumulatedExpenditures, currentExpenditure) =>
        accumulatedExpenditures + currentExpenditure.amount,
      0
    )
  return (
    <>
      <tr className="border text-left">
        <td className="px-4 py-2">
          {!date ? 'Not Given' : formatDateToddmYYY(date)}
        </td>
        <td>
          {churchServiceType && typeof churchServiceType === 'object'
            ? churchServiceType.name
            : 'Not Given'}
        </td>
        {/* Rendering conditionalily based on hasCell */}
        {hasCell ? (
          <>
            <td className="px-4 py-2">
              {attendances
                ? attendances.filter(
                    (attendance) =>
                      typeof attendance.member === 'object' &&
                      attendance.member.cell?.cell === cell?._id
                  ).length
                : '0'}
            </td>
            <td className="px-4 py-2">
              {attendances
                ? attendances.filter(
                    (attendance) =>
                      typeof attendance.member === 'object' &&
                      attendance.member.cell?.cell === cell?._id &&
                      attendance.member.gender === 'Male'
                  ).length
                : '0'}
            </td>
            <td>
              {attendances
                ? attendances.filter(
                    (attendance) =>
                      typeof attendance.member === 'object' &&
                      attendance.member.cell?.cell === cell?._id &&
                      attendance.member.gender === 'Female'
                  ).length
                : '0'}
            </td>
            <td className="px-4 py-2 flex">
              <Link
                href={`/cells/${cell?._id}/${_id}/attendance`}
                className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
              >
                <MdRemoveRedEye />
              </Link>
              <Link
                href={`/cells/${cell?._id}/${_id}`}
                className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
              >
                <MdAdd />
              </Link>
            </td>
          </>
        ) : (
          <>
            <td className="px-4 py-2">
              {attendances ? (
                <Link
                  href={`/services/${_id}/attendances`}
                  className="text-primary hover:text-tertiary"
                >
                  {attendances.length}
                </Link>
              ) : (
                '0'
              )}
            </td>
            <td className="px-4 py-2">
              <Link
                href={`/services/${_id}/offerings`}
                className={
                  typeof totalOfferings === 'number' && totalOfferings > 0
                    ? 'text-green-600 hover:text-tertiary'
                    : ''
                }
              >
                {changeToHigherDenomination(
                  typeof totalOfferings === 'number' ? totalOfferings : 0
                )}
              </Link>
            </td>
            <td className="px-4 py-2">
              <Link
                href={`/services/${_id}/expenditures`}
                className={
                  typeof totalExpenditures === 'number' &&
                  totalExpenditures !== 0
                    ? 'text-red-600 hover:text-tertiary'
                    : ''
                }
              >
                {changeToHigherDenomination(
                  typeof totalExpenditures === 'number' ? totalExpenditures : 0
                )}
              </Link>
            </td>
            <td className="px-4 py-2 flex">
              <Link
                href={`/services/${_id}`}
                className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
              >
                <MdRemoveRedEye />
              </Link>
              <Link
                href={`/services/${_id}/edit`}
                className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
              >
                <MdEdit />
              </Link>
            </td>
          </>
        )}
      </tr>
    </>
  )
}

export default ChurchServiceItem
