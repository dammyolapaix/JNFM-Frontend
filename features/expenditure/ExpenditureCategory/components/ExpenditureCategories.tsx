import React, { FC } from 'react'
import { IExpenditureCategoriesRes, ExpenditureCategoriesTable } from '../index'
import { NoRecordFound } from '../../../../components'

const ExpenditureCategories: FC<{
  expenditureCategoriesRes: IExpenditureCategoriesRes
}> = ({ expenditureCategoriesRes: { count, expenditureCategories } }) => {
  return (
    <>
      {count > 0 ? (
        <ExpenditureCategoriesTable
          expenditureCategories={expenditureCategories}
        />
      ) : (
        <NoRecordFound
          message="No Member Found"
          cta="Add A Member"
          href={`/`}
        />
      )}
    </>
  )
}

export default ExpenditureCategories
