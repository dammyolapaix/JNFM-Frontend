import { FC } from 'react'
import Link from 'next/link'
import { MdRemoveRedEye } from 'react-icons/md'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { ITithe } from '../../income/tithe'

const MemberTitheItem: FC<{ tithe: ITithe }> = ({
  tithe: { _id, amount, date },
}) => {
  return (
    <>
      <tr className="border text-left">
        <td className="px-4 py-2">
          {date ? formatDateToddmYYY(date) : 'Not Given'}
        </td>
        <td className="px-4 py-2">
          {amount ? changeToHigherDenomination(amount) : 'Not Given'}
        </td>
        <td className="px-4 py-2">
          {_id ? (
            <Link
              href={`/incomes/welfares`}
              className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3 inline-block"
            >
              <MdRemoveRedEye />
            </Link>
          ) : (
            'Not Given'
          )}
        </td>
      </tr>
    </>
  )
}

export default MemberTitheItem
