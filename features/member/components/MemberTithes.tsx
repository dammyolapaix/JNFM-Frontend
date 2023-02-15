import { FC } from 'react'
import { NoRecordFound } from '../../../components'
import { changeToHigherDenomination } from '../../../utils'
import { ITithe } from '../../income/tithe'
import { MemberTitheItem } from '../index'

const MemberTithes: FC<{ tithes: ITithe[] }> = ({ tithes }) => {
  const totalTithePaid = tithes.reduce(
    (accumulatedTithes, currentTithe) =>
      accumulatedTithes + currentTithe.amount,
    0
  )

  return (
    <section>
      <div className="mb-5 flex items-center">
        <h3 className="font-semibold mr-1">Total Tithe Paid:</h3>
        <h3 className="font-bold text-3xl text-primary ml-1">
          {tithes
            ? changeToHigherDenomination(totalTithePaid)
            : changeToHigherDenomination(0)}
        </h3>
      </div>
      {tithes && tithes.length > 0 ? (
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
              {tithes.map((tithe) => (
                <MemberTitheItem key={tithe._id} tithe={tithe} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoRecordFound message="Oops, this member is yet to pay a tithe." />
      )}
    </section>
  )
}

export default MemberTithes
