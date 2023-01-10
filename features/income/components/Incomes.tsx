import Link from 'next/link'
import { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { NoRecordFound } from '../../../components'
import { changeToHigherDenomination } from '../../../utils'
import { IIncomesRes, IncomeItem } from '../index'

const Expenditures: FC<{
  incomesRes: IIncomesRes
}> = ({ incomesRes: { incomes, count } }) => {
  return (
    <section>
      {count === 0 ? (
        <NoRecordFound
          message="Oops, No Income Found"
          cta="Add New Income"
          href={`#`}
        />
      ) : (
        <>
          <div className="shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold text-2xl mb-5 text-secondary">
                Income (Ghc {changeToHigherDenomination(37789)})
              </h1>
              <Link
                href={`#`}
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
                    <th className="px-4 py-2">Naration</th>
                    <th className="px-4 py-2">Account/Source</th>
                    <th className="px-4 py-2">(Ghc) Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {incomes &&
                    incomes.map((income) => (
                      <IncomeItem key={income._id} income={income} />
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
