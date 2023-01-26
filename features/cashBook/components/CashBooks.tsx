import Link from 'next/link'
import { FC } from 'react'
import { GiMoneyStack, GiPayMoney, GiTwoCoins } from 'react-icons/gi'
import { AdvancedSearchDrawer, NoRecordFound } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { changeToHigherDenomination } from '../../../utils'
import {
  CashBookAdvancedSearchInputForm,
  CashBookItem,
  ICashBooksRes,
  resetCashBook,
} from '../index'

const CashBooks: FC<{
  cashBooksRes: ICashBooksRes
}> = ({ cashBooksRes: { cashBooks, count, totalCashBook } }) => {
  let runningBalance = 0

  const dispatch = useAppDispatch()

  return (
    <section>
      {count === 0 ? (
        <NoRecordFound
          message="Oops, No Cash Book Found"
          cta="Add New Cash Book"
          href={`#`}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <Link
              href={`/incomes`}
              className="bg-green-600 text-white hover:bg-green-500 rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiMoneyStack className="text-5xl" />
              <div className="my-3">Income</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalCashBook &&
                    totalCashBook.length > 0 &&
                    totalCashBook[0].totalIncome.length > 0
                    ? totalCashBook[0].totalIncome[0].totalIncome
                    : 0
                )}
              </div>
            </Link>
            <Link
              href={`/expenditures`}
              className="bg-red-600 text-white hover:bg-red-500 rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiPayMoney className="text-5xl" />
              <div className="my-3">Expenditures</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalCashBook &&
                    totalCashBook.length > 0 &&
                    totalCashBook[0].totalExpenditure &&
                    totalCashBook[0].totalExpenditure.length > 0
                    ? totalCashBook[0].totalExpenditure[0].totalExpenditure
                    : 0
                )}
              </div>
            </Link>
            <Link
              href={`#`}
              className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
            >
              <GiTwoCoins className="text-5xl" />
              <div className="my-3">Balance</div>
              <div className="text-xl font-bold">
                {changeToHigherDenomination(
                  totalCashBook &&
                    totalCashBook.length > 0 &&
                    totalCashBook[0].balance.length > 0
                    ? totalCashBook[0].balance[0].balance
                    : 0
                )}
              </div>
            </Link>
          </div>
          <div className="shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold text-2xl mb-5 text-secondary">
                Cashbook (
                {changeToHigherDenomination(
                  totalCashBook &&
                    totalCashBook.length > 0 &&
                    totalCashBook[0].balance.length > 0
                    ? totalCashBook[0].balance[0].balance
                    : 0
                )}
                )
              </h1>
              <AdvancedSearchDrawer>
                <CashBookAdvancedSearchInputForm />
              </AdvancedSearchDrawer>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="text-secondary">
                  <tr className="text-center border">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Naration</th>
                    <th className="px-4 py-2">PV. No</th>
                    <th className="px-4 py-2">Cheque. No</th>
                    <th className="px-4 py-2">Account/Source</th>
                    <th className="px-4 py-2">Debit</th>
                    <th className="px-4 py-2">Credit</th>
                    <th className="px-4 py-2">(GHS) Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {cashBooks &&
                    cashBooks.map((cashBook) => {
                      runningBalance += cashBook.amount

                      return (
                        <CashBookItem
                          key={cashBook._id}
                          cashBook={cashBook}
                          runningBalance={runningBalance}
                        />
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="" onClick={() => dispatch(resetCashBook())}>
            Clear Filters
          </div>
        </>
      )}
    </section>
  )
}

export default CashBooks
