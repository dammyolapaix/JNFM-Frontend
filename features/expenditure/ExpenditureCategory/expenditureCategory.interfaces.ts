import { IError } from '../../../interfaces'

export interface IBaseExpenditureCategory {
  name: string
}

export default interface IExpenditureCategory extends IBaseExpenditureCategory {
  _id: string
}

export interface IExpenditureCategoryRes {
  success: boolean
  expenditureCategory: null | IExpenditureCategory
}

export interface IExpenditureCategoriesRes {
  success: boolean
  count: number
  expenditureCategories: IExpenditureCategory[]
}

export interface IExpenditureCategoryInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error?: IError['error']
  expenditureCategory: IExpenditureCategoryRes
}
