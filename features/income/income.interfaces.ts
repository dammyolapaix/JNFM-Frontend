import { IOffering } from '../churchService/offering'
import { ITitheRes } from './tithe'
import { IWelfareRes } from './welfare'

export interface IBaseIncome {
  date: string
  amount: number
  naration: string
  source: {
    offering?: IOffering | IOffering['_id'] | undefined
  }
}

export default interface IIncome extends IBaseIncome {
  _id: string
}

export interface IIncomesRes {
  success: boolean
  count: number
  // totalIncomes: number
  incomes: IIncome[]
}

export interface IIncomeRes {
  success: boolean
  // totalOfferings: number
  income: null | IIncome
}

export interface ITitheInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
  titheResCRUD: ITitheRes
  welfareResCRUD: IWelfareRes
}
