import Link from 'next/link'
import { FC } from 'react'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { ICashBook } from '../index'

const CashBookItem: FC<{ cashBook: ICashBook; runningBalance: number }> = ({
  cashBook: {
    amount,
    date,
    debitCredit,
    naration,
    account,
    chequeNumber,
    pvNumber,
  },
  runningBalance,
}) => {
  return (
    <tr className="border text-center">
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
        className={`px-4 py-2 text-center ${
          debitCredit === 'Debit' && 'text-green-600'
        }`}
      >
        {debitCredit && debitCredit === 'Debit' && amount
          ? changeToHigherDenomination(amount)
          : '-'}
      </td>
      <td className={`px-4 py-2 ${debitCredit === 'Credit' && 'text-red-600'}`}>
        {debitCredit && debitCredit === 'Credit' && amount
          ? changeToHigherDenomination(amount)
          : '-'}
      </td>
      <td
        className={`px-4 py-2 ${
          runningBalance > 0 ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {runningBalance
          ? changeToHigherDenomination(runningBalance)
          : 'Not Given'}
      </td>
    </tr>
  )
}

export default CashBookItem
