import { makeRequest } from '../../../lib'
import { IExpenditureCategoriesRes } from './index'

export const getExpenditureCategories = async () => {
  const { data } = await makeRequest.get<IExpenditureCategoriesRes>(
    '/expenditureCategories'
  )
  return data
}
