import { FC } from 'react'
import { IChurchService } from '../../churchService'
import { Expenditures, IExpendituresRes } from '../index'
import { Tab } from '@headlessui/react'
import {
  ExpenditureCategories,
  IExpenditureCategoriesRes,
} from '../ExpenditureCategory'

const ExpendituresPage: FC<{
  expendituresRes: IExpendituresRes
  expenditureCategoriesRes: IExpenditureCategoriesRes
  churchServiceId?: IChurchService['_id']
}> = ({ expendituresRes, expenditureCategoriesRes }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const tabs = ['Expenditures', 'Categories (Expenditures)']

  return (
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
          <Expenditures expendituresRes={expendituresRes} />
        </Tab.Panel>
        <Tab.Panel>
          <ExpenditureCategories
            expenditureCategoriesRes={expenditureCategoriesRes}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ExpendituresPage
