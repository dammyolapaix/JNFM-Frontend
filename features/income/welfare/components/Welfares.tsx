import Link from 'next/link'
import { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { WelfareItem } from '..'
import { NoRecordFound } from '../../../../components'
import { changeToHigherDenomination } from '../../../../utils'
import { IWelfaresRes } from '../welfare.interfaces'

const Welfares: FC<{
  welfaresRes: IWelfaresRes
}> = ({ welfaresRes: { count, welfares } }) => {
  return (
    <section>
      {count === 0 ? (
        <NoRecordFound
          message="Oops, No Welfare Found"
          cta="Add New Welfare"
          href={`/incomes/tithes/new`}
        />
      ) : (
        <>
          <div className="shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold text-2xl mb-5 text-secondary">
                Welfares ({changeToHigherDenomination(0)})
              </h1>
              <Link
                href={`/incomes/tithes/new`}
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
                    <th className="px-4 py-2">Member</th>
                    <th className="px-4 py-2">(GHS) Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {welfares &&
                    welfares.map((welfare) => (
                      <WelfareItem key={welfare._id} welfare={welfare} />
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

export default Welfares
