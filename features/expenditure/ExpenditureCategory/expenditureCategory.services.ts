import { makeRequest } from '../../../lib'
import {
  IBaseExpenditureCategory,
  IExpenditureCategoriesRes,
  IExpenditureCategoryRes,
} from './index'

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

export const getExpenditureCategory = async (id: string, cookie?: string) => {
  const { data } = await makeRequest.get<IExpenditureCategoryRes>(
    `/expenditureCategories/${id}`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const addExpenditureCategory = async (
  expenditureCategory: IBaseExpenditureCategory,
  cookie?: string
) => {
  const { data } = await makeRequest.post<IExpenditureCategoryRes>(
    `/expenditureCategories`,
    expenditureCategory,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const editExpenditureCategory = async (
  id: string,
  expenditureCategory: IBaseExpenditureCategory,
  cookie?: string
) => {
  const { data } = await makeRequest.patch<IExpenditureCategoryRes>(
    `/expenditureCategories/${id}`,
    expenditureCategory,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
