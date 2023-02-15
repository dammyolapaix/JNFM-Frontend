import Link from 'next/link'
import { FC } from 'react'
import { GiTwoCoins } from 'react-icons/gi'
import { MdAdd } from 'react-icons/md'
import { AdvancedSearchDrawer, NoRecordFound } from '../../../components'
import { changeToHigherDenomination } from '../../../utils'
import { IIncomesRes, IncomeAdvancedSearchForm, IncomeItem } from '../index'

const Incomes: FC<{
  incomesRes: IIncomesRes
}> = ({ incomesRes: { incomes, count, totalIncome } }) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <Link
              href={`#`}
              className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiTwoCoins className="text-5xl" />
              <div className="my-3">Offerings</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalIncome &&
                    totalIncome.length > 0 &&
                    totalIncome[0].incomeByOffering.length > 0
                    ? totalIncome[0].incomeByOffering[0].totalIncome
                    : 0
                )}
              </div>
            </Link>
            <Link
              href={`/incomes/tithes`}
              className="bg-tertiary text-white hover:bg-secondary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiTwoCoins className="text-5xl" />
              <div className="my-3">Tithes</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalIncome &&
                    totalIncome.length > 0 &&
                    totalIncome[0].incomeByTithe.length > 0
                    ? totalIncome[0].incomeByTithe[0].totalIncome
                    : 0
                )}
              </div>
            </Link>
            <Link
              href={`/incomes/welfares`}
              className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiTwoCoins className="text-5xl" />
              <div className="my-3">Welfares</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalIncome &&
                    totalIncome.length > 0 &&
                    totalIncome[0].incomeByWelfare.length > 0
                    ? totalIncome[0].incomeByWelfare[0].totalIncome
                    : 0
                )}
              </div>
            </Link>
            <Link
              href={`#`}
              className="bg-tertiary text-white hover:bg-secondary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiTwoCoins className="text-5xl" />
              <div className="my-3">Special Contributions</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalIncome &&
                    totalIncome.length > 0 &&
                    totalIncome[0].incomeBySpecialContribution.length > 0
                    ? totalIncome[0].incomeBySpecialContribution[0].totalIncome
                    : 0
                )}
              </div>
            </Link>
          </div>
          <div className="shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold text-2xl mb-5 text-secondary">
                Income (
                {changeToHigherDenomination(
                  totalIncome &&
                    totalIncome.length > 0 &&
                    totalIncome[0].totalIncome.length > 0
                    ? totalIncome[0].totalIncome[0].totalIncome
                    : 0
                )}
                )
              </h1>
              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <AdvancedSearchDrawer>
                    <IncomeAdvancedSearchForm />
                  </AdvancedSearchDrawer>
                </div>
                <Link
                  href={`#`}
                  className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
                >
                  <MdAdd />
                  <div>New</div>
                </Link>
              </div>
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

export default Incomes
