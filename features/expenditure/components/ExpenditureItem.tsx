import { FC } from 'react'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { IExpenditure } from '../index'

const ExpenditureItem: FC<{ expenditure: IExpenditure }> = ({
  expenditure: { amount, date, churchService, expenditureCategory },
}) => {
  return (
    <tr className="border">
      <td className="px-4 py-2">
        {date ? formatDateToddmYYY(date) : 'Not Given'}
      </td>
      <td className="px-4 py-2">
        {expenditureCategory && typeof expenditureCategory === 'object'
          ? expenditureCategory.name
          : 'Not Given'}
      </td>
      <td className="px-4 py-2">
        {churchService &&
        typeof churchService === 'object' &&
        typeof churchService.churchServiceType === 'object'
          ? churchService.churchServiceType.name
          : 'Not Given'}
      </td>
      <td className="px-4 py-2">
        {amount ? changeToHigherDenomination(amount) : 'Not Given'}
      </td>
    </tr>
  )
}

export default ExpenditureItem
