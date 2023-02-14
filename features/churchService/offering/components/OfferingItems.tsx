import { FC } from 'react'
import { changeToHigherDenomination } from '../../../../utils'
import IOffering from '../offering.interfaces'

const OfferingItems: FC<{ offering: IOffering }> = ({
  offering: { amount, offeringType },
}) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">
          {offeringType &&
          typeof offeringType === 'object' &&
          typeof offeringType === 'object'
            ? offeringType.name
            : 'Not Given'}
        </td>
        <td>Ghc {amount ? changeToHigherDenomination(amount) : '0'}</td>
      </tr>
    </>
  )
}

export default OfferingItems
