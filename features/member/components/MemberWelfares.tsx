import { FC } from 'react'
import { NoRecordFound } from '../../../components'
import { changeToHigherDenomination } from '../../../utils'
import { IWelfare } from '../../income/welfare'
import MemberWelfareItem from './MemberWelfareItem'

const MemberWelfares: FC<{ welfares: IWelfare[] }> = ({ welfares }) => {
  const totalWelfarePaid = welfares.reduce(
    (accumulatedWelfares, currentWelfare) =>
      accumulatedWelfares + currentWelfare.amount,
    0
  )

  return (
    <section>
      <div className="mb-5 flex items-center">
        <h3 className="font-semibold mr-1">Total Welfare Paid:</h3>
        <h3 className="font-bold text-3xl text-primary ml-1">
          {welfares
            ? changeToHigherDenomination(totalWelfarePaid)
            : changeToHigherDenomination(0)}
        </h3>
      </div>
      {welfares && welfares.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {welfares.map((welfare) => (
                <MemberWelfareItem key={welfare._id} welfare={welfare} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoRecordFound message="Oops, this member is yet to pay a welfare." />
      )}
    </section>
  )
}

export default MemberWelfares
