import { IChurchService } from '../churchService'

export interface IBaseExpenditure {
  date: string
  amount: number
  naration: string
  churchService?: IChurchService | IChurchService['_id']
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
