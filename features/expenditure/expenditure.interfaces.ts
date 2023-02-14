import { IChurchService } from '../churchService'
import { IExpenditureCategory } from './ExpenditureCategory'

export interface IBaseExpenditure {
  date: string
  amount: number
  naration: string
  churchService?: IChurchService | IChurchService['_id']
  expenditureCategory?: IExpenditureCategory | IExpenditureCategory['_id']
}

export default interface IExpenditure extends IBaseExpenditure {
  _id: string
}

export interface IExpendituresRes {
  success: boolean
  count: number
  totalExpenditures: number
  expenditures: IExpenditure[]
}

export interface IExpenditureRes {
  success: boolean
  totalOfferings: number
  expenditure: null | IExpenditure
}

export interface IExpenditureInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
  expenditureResCRUD: IExpenditureRes
}
