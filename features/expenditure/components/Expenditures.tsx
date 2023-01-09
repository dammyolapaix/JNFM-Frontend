import Link from 'next/link'
import { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { NoRecordFound } from '../../../components'
import { changeToHigherDenomination } from '../../../utils'
import { IChurchService } from '../../churchService'
import { ExpenditureItem, IExpendituresRes } from '../index'

const Expenditures: FC<{
  expendituresRes: IExpendituresRes
  churchServiceId?: IChurchService['_id']
}> = ({
  expendituresRes: { totalExpenditures, expenditures, count },
  churchServiceId,
}) => {
  return (
    <section>
      {count === 0 ? (
        <NoRecordFound
          cta="Add New Expenditure"
          href={
            !churchServiceId
              ? '/expenditures/new'
              : `/services/${churchServiceId}/expenditures/new`
          }
        />
      ) : (
        <>
          <div className="shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold text-2xl mb-5 text-secondary">
                Expenditure (Ghc{' '}
                {totalExpenditures
                  ? changeToHigherDenomination(totalExpenditures)
                  : '0'}
                )
              </h1>
              <Link
                href={
                  !churchServiceId
                    ? '/expenditures/new'
                    : `/services/${churchServiceId}/expenditures/new`
                }
                className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
              >
                <MdAdd />
                <div>New</div>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="text-secondary">
                  <tr className="text-left border">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Church Service</th>
                    <th className="px-4 py-2">(Ghc) Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenditures &&
                    expenditures.map((expenditure) => (
                      <ExpenditureItem
                        key={expenditure._id}
                        expenditure={expenditure}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Expenditures
