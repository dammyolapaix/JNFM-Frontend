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
          <Link href={`/services/${source.offering.churchService}/offerings`}>
            Offering
          </Link>
        ) : (
          'Not Given'
        )}
      </td>
      <td className="px-4 py-2">
        {amount ? `Ghc ${changeToHigherDenomination(amount)}` : 'Not Given'}
      </td>
    </tr>
  )
}

export default IncomeItem
