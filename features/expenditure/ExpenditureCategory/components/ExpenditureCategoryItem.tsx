import React, { FC } from 'react'
import { IExpenditureCategory } from '../index'
import Link from 'next/link'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'

const ExpenditureCategoryItem: FC<{
  expenditureCategory: IExpenditureCategory
}> = ({ expenditureCategory: { _id, name } }) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">
          <Link
            href={`/expenditures/categories/${_id}`}
            className="text-primary hover:text-tertiary"
          >
            {name ? name : 'Not Given'}
          </Link>
        </td>
        <td className="flex items-center mt-2">
          <Link
            href={`/expenditures/categories/${_id}`}
            className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <MdRemoveRedEye />
          </Link>

          <Link
            href={`//expenditures/categories/${_id}/edit`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
          >
            <MdEdit />
          </Link>
        </td>
      </tr>
    </>
  )
}

export default ExpenditureCategoryItem
