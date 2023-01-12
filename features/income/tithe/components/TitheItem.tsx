import Link from 'next/link'
import { FC } from 'react'
import {
  changeToHigherDenomination,
  formatDateToddmYYY,
} from '../../../../utils'
import { ITithe } from '../index'

const TitheItem: FC<{ tithe: ITithe }> = ({
  tithe: { amount, date, member },
}) => {
  return (
    <tr className="border">
      <td className="px-4 py-2">
        {date ? formatDateToddmYYY(date) : 'Not Given'}
      </td>
      <td className="px-4 py-2">
        {member && typeof member === 'object' ? (
          <Link href={`/members/${member._id}`}>{member.fullName}</Link>
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

export default TitheItem
