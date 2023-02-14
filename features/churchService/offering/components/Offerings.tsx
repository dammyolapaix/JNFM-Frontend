import Link from 'next/link'
import { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { changeToHigherDenomination } from '../../../../utils'
import { IOfferingsRes, OfferingItems } from '../index'

const Offerings: FC<{
  offeringsRes: IOfferingsRes
  churchServiceId: string
}> = ({ offeringsRes: { offerings, totalOfferings }, churchServiceId }) => {
  return (
    <section>
      <div className="shadow-md p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Total Offerings (Ghc {changeToHigherDenomination(totalOfferings)})
          </h1>
          <Link
            href={`/services/${churchServiceId}/offerings/new`}
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
                <th className="p-3">Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {offerings.map((offering) => (
                <OfferingItems key={offering._id} offering={offering} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Offerings
