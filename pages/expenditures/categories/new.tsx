import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../../../components'
import { ExpenditureCategoryInputForm } from '../../../features/expenditure/ExpenditureCategory'

const ExpenditureCategoryNewPage: NextPage = () => {
  return <Layout children={<ExpenditureCategoryInputForm />} />
}

export default ExpenditureCategoryNewPage
