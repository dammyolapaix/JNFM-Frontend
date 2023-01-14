import { IOffering } from '../churchService/offering'
import { ITithe, ITitheRes } from './tithe'
import { IWelfare, IWelfareRes } from './welfare'

export interface IBaseIncome {
  date: string
  amount: number
  naration: string
  source: {
    offering?: IOffering | IOffering['_id'] | undefined
    tithe?: ITithe | ITithe['_id'] | undefined
    welfare?: IWelfare | IWelfare['_id'] | undefined
  }
}

export default interface IIncome extends IBaseIncome {
  _id: string
}

export interface ITotalIncome {
  totalIncome: {
    _id: null
    totalIncome: number
  }[]
  incomeByOffering: {
    _id: null
    totalIncome: number
  }[]
  incomeByWelfare: {
    _id: null
    totalIncome: number
  }[]
  incomeByTithe: {
    _id: null
    totalIncome: number
  }[]
  incomeBySpecialContribution: {
    _id: null
    totalIncome: number
  }[]
}

export interface IIncomesRes {
  success: boolean
  count: number
  totalIncome: ITotalIncome[]
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
