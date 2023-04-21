import { makeRequest } from '../../../lib'
import { IExpenditureCategoriesRes } from './index'

export const getExpenditureCategories = async (cookie?: string) => {
  const { data } = await makeRequest.get<IExpenditureCategoriesRes>(
    '/expenditureCategories',
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
