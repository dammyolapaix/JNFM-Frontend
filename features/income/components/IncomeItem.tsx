import Link from 'next/link'
import { FC } from 'react'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { IIncome } from '../index'

const IncomeItem: FC<{ income: IIncome }> = ({
  income: { amount, date, naration, source },
}) => {
  return (
    <tr className="border">
      <td className="px-4 py-2">
        {date ? formatDateToddmYYY(date) : 'Not Given'}
      </td>
      <td className="px-4 py-2">{naration ? naration : 'Not Given'}</td>
      <td className="px-4 py-2">
        {source && source.offering && typeof source.offering === 'object' ? (
          <Link
            href={`/services/${source.offering.churchService}/offerings`}
            className="text-primary hover:text-tertiary"
          >
            Offering
          </Link>
        ) : source.tithe ? (
          <Link
            href={`/incomes/tithes`}
            className="text-primary hover:text-tertiary"
          >
            Tithe
          </Link>
        ) : source.welfare ? (
          <Link
            href={`/incomes/welfares`}
            className="text-primary hover:text-tertiary"
          >
            Welfare
          </Link>
        ) : (
          'Not Given'
        )}
      </td>
      <td className="px-4 py-2">
        {amount ? `${changeToHigherDenomination(amount)}` : 'Not Given'}
      </td>
    </tr>
  )
}

export default IncomeItem
