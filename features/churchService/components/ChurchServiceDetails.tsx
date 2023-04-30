import Link from 'next/link'
import { FC } from 'react'
import { ChurchServiceDetailsAttendances, IChurchServiceRes } from '../index'
import { MdEdit, MdPeople } from 'react-icons/md'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { changeToHigherDenomination, formatDateToddmYYY } from '../../../utils'
import { Tab } from '@headlessui/react'

const ChurchServiceDetails: FC<{ churchServiceRes: IChurchServiceRes }> = ({
  churchServiceRes: { churchService },
}) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const tabs = ['Attendances', 'Offerings', 'Expenditures']

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
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl mb-5 text-secondary">
          {churchService
            ? churchService.churchServiceType &&
              typeof churchService.churchServiceType === 'object' &&
              churchService.date &&
              `${churchService.churchServiceType.name} (${formatDateToddmYYY(
                churchService.date
              )})`
            : 'Church Service Details'}
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
      </div>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl border-primary border-2 p-1 overflow-x-auto">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 px-2',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-primary text-white shadow'
                    : 'text-primary/60 hover:bg-primary/[0.12] hover:text-primary'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ChurchServiceDetailsAttendances />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  )
}

export default ChurchServiceDetails
