import Link from 'next/link'
import { FC } from 'react'
import { IChurchService } from '../index'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'

const ChurchServiceItem: FC<{ churchService: IChurchService }> = ({
  churchService: {
    _id,
    date,
    // endsAt,
    // startsAt,
    attendances,
    churchServiceType,
    offerings,
    expenditures,
  },
}) => {
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
      <tr className="border">
        <td className="p-3">
          {churchServiceType && typeof churchServiceType === 'object'
            ? churchServiceType.name
            : 'Not Given'}
        </td>
        <td>{!date ? 'Not Given' : formatDateToddmYYY(date)}</td>
        {/* <td>{!startsAt ? 'Not Given' : formatDateToddmYYY(startsAt)}</td>
        <td>{!endsAt ? 'Not Given' : formatDateToddmYYY(endsAt)}</td> */}
        <td className="text-center">
          {!attendances ? (
            '0'
          ) : (
            <Link
              href={`/services/${_id}/attendances`}
              className="text-primary hover:text-tertiary"
            >
              {attendances.length}
            </Link>
          )}
        </td>
        <td>
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
        <td>
          <Link
            href={`/services/${_id}/expenditures`}
            className={
              typeof totalExpenditures === 'number' && totalExpenditures !== 0
                ? 'text-red-600 hover:text-tertiary'
                : ''
            }
          >
            {changeToHigherDenomination(
              typeof totalExpenditures === 'number' ? totalExpenditures : 0
            )}
          </Link>
        </td>
        <td className="flex items-center mt-2">
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
      </tr>
    </>
  )
}

export default ChurchServiceItem
