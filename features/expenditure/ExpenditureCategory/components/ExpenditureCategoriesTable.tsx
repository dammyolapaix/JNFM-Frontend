import Link from 'next/link'
import React, { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import IExpenditureCategory from '../expenditureCategory.interfaces'
import ExpenditureCategoryItem from './ExpenditureCategoryItem'

const ExpenditureCategoriesTable: FC<{
  expenditureCategories: IExpenditureCategory[]
}> = ({ expenditureCategories }) => {
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-bold text-xl text-secondary mb-3">Categories</h2>

        <Link
          href={`/expenditures/categories/new`}
          className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdAdd />
          <div>Add New Category</div>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-left border">
              <th className="p-3">Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenditureCategories &&
              expenditureCategories.map((expenditureCategory) => (
                <ExpenditureCategoryItem
                  key={expenditureCategory._id}
                  expenditureCategory={expenditureCategory}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExpenditureCategoriesTable
