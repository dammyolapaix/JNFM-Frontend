import { IOffering } from '../churchService/offering'

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
