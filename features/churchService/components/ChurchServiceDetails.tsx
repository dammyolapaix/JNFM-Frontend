import Link from 'next/link'
import { FC } from 'react'
import { IChurchServiceRes } from '../index'
import { MdEdit, MdPeople } from 'react-icons/md'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'

const ChurchServiceDetails: FC<{ churchServiceRes: IChurchServiceRes }> = ({
  churchServiceRes: { churchService },
}) => {
  const totalOfferings =
    churchService !== null &&
    typeof churchService.offerings !== 'undefined' &&
    churchService.offerings.reduce(
      (accumulatedOfferings, currentOffering) =>
        accumulatedOfferings + currentOffering.amount,
      0
    )

  const totalExpenditures =
    churchService !== null &&
    typeof churchService.expenditures !== 'undefined' &&
    churchService.expenditures.reduce(
      (accumulatedExpenditures, currentExpenditure) =>
        accumulatedExpenditures + currentExpenditure.amount,
      0
    )
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {churchService && (
          <Link
            href={`/services/${churchService._id}/attendances`}
            className="bg-tertiary text-white hover:bg-secondary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
          >
            <MdPeople className="text-5xl" />
            <div className="my-3">Attendances</div>
            <div className="text-xl font-bold">
              (
              {churchService.attendances
                ? churchService.attendances.length
                : '0'}
              )
            </div>
          </Link>
        )}

        {churchService && (
          <Link
            href={`/services/${churchService._id}/offerings`}
            className="bg-green-600 text-white hover:bg-green-500 rounded-md flex flex-col items-center justify-center p-5 font-semibold"
          >
            <GiReceiveMoney className="text-5xl" />
            <div className="my-3">Offerings</div>
            <div className="text-xl font-bold">
              (
              {changeToHigherDenomination(
                typeof totalOfferings === 'number' ? totalOfferings : 0
              )}
              )
            </div>
          </Link>
        )}

        {churchService && (
          <Link
            href={`/services/${churchService._id}/expenditures`}
            className="bg-red-600 text-white hover:bg-red-500 rounded-md flex flex-col items-center justify-center p-5 font-semibold"
          >
            <GiPayMoney className="text-5xl" />
            <div className="my-3">Expenditures</div>
            <div className="text-xl font-bold">
              (
              {changeToHigherDenomination(
                typeof totalExpenditures === 'number' ? totalExpenditures : 0
              )}
              )
            </div>
          </Link>
        )}
        {/* <div className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-10 font-semibold">
          1
        </div> */}
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          Church Service Details
        </h1>
        {churchService && (
          <Link
            href={`/members/${churchService._id}/edit`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdEdit />
            <div>Edit</div>
          </Link>
        )}
      </div>
      <div className="shadow-md p-3 rounded-md mt-5">
        <div className="mb-5">
          <h3 className="font-semibold">Type</h3>
          <h4>
            {' '}
            {churchService &&
            churchService.churchServiceType &&
            typeof churchService.churchServiceType === 'object'
              ? churchService.churchServiceType.name
              : 'Not Given'}
          </h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Date</h3>
          <h4>
            {churchService && churchService.date
              ? formatDateToddmYYY(churchService.date)
              : 'Not Given'}
          </h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Start At</h3>
          <h4>
            {churchService && churchService.startsAt
              ? formatDateToddmYYY(churchService.startsAt)
              : 'Not Given'}
          </h4>
        </div>
        {/* <div className="mb-5">
          <h3 className="font-semibold">Ends At</h3>
          <h4>{endsAt ? formatDateToddmYYY(endsAt) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Attendance</h3>
          <h4>{attendances ? attendances.length : '0'}</h4>
        </div> */}
      </div>
    </section>
  )
}

export default ChurchServiceDetails
