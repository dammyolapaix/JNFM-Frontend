import { FC } from 'react'
import Link from 'next/link'
import { CellDetailsMembers, ICell } from '../index'
import { MdEdit } from 'react-icons/md'
import { Tab } from '@headlessui/react'

const CellDetails: FC<{ cell: ICell }> = ({ cell: { _id, name } }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const tabs = [
    'Members',
    'Attendances',
    'Welfares',
    'Tithes',
    'Special Contributions',
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          {name ? name : 'Cell Details'}
        </h1>
        <Link
          href={`/cells/${_id}/edit`}
          className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdEdit />
          <div>Edit Cell</div>
        </Link>
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
            <CellDetailsMembers />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  )
}

export default CellDetails
