import Link from 'next/link'
import { FC } from 'react'
import {
  ChurchServiceDetailsAttendances,
  ChurchServiceGeneralOverview,
  IChurchService,
  IChurchServiceRes,
} from '../index'
import { MdEdit } from 'react-icons/md'
import { formatDateToddmYYY } from '../../../utils'
import { Tab } from '@headlessui/react'

const ChurchServiceDetails: FC<{ churchServiceRes: IChurchServiceRes }> = ({
  churchServiceRes,
}) => {
  const { churchService } = churchServiceRes

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const tabs = ['Attendances', 'Offerings', 'Expenditures']

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
      <ChurchServiceGeneralOverview
        churchService={churchService as IChurchService}
      />
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
            <ChurchServiceDetailsAttendances
              churchService={churchService as IChurchService}
            />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  )
}

export default ChurchServiceDetails
