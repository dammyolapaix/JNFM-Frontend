import Link from 'next/link'
import { FC } from 'react'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { ICashBook } from '../index'

const CashBookItem: FC<{ cashBook: ICashBook }> = ({
  cashBook: {
    amount,
    date,
    debitCredit,
    naration,
    account,
    chequeNumber,
    pvNumber,
  },
}) => {
  return (
    <tr className="border">
      <td className="px-4 py-2">
        {date ? formatDateToddmYYY(date) : 'Not Given'}
      </td>
      <td className="px-4 py-2">{naration ? naration : 'Not Given'}</td>
      <td className="px-4 py-2">{pvNumber ? pvNumber : 'Not Given'}</td>
      <td className="px-4 py-2">{chequeNumber ? chequeNumber : 'Not Given'}</td>
      <td className="px-4 py-2">
        {account && account.offering && typeof account.offering === 'object' ? (
          <Link
            href={`/services/${account.offering.churchService}/offerings`}
            className="text-primary"
          >
            Offering
          </Link>
        ) : (
          'Not Given'
        )}
      </td>
      <td
        className={`px-4 py-2 ${debitCredit === 'Debit' && 'text-green-600'} ${
          debitCredit === 'Credit' && 'text-red-600'
        }`}
      >
        {debitCredit ? debitCredit : 'Not Given'}
      </td>
      <td
        className={`px-4 py-2 ${debitCredit === 'Debit' && 'text-green-600'} ${
          debitCredit === 'Credit' && 'text-red-600'
        }`}
      >
        {amount ? changeToHigherDenomination(amount) : 'Not Given'}
      </td>
    </tr>
  )
}

export default CashBookItem
