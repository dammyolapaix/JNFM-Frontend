import { IOffering } from '../churchService/offering'

export interface IBaseCashBook {
  date: string
  amount: number
  naration: string
  pvNumber?: string
  chequeNumber?: string
  account?: {
    offering?: IOffering | IOffering['_id'] | undefined
  }
  debitCredit: 'Credit' | 'Debit'
}

export default interface ICashBook extends IBaseCashBook {
  _id: string
}

export interface ITotalCashBook {
  balance: {
    _id: null
    balance: number
  }[]
  totalIncome: {
    _id: null
    totalIncome: number
  }[]
  totalExpenditure: {
    _id: null
    totalExpenditure: number
  }[]
}

export interface ICashBooksRes {
  success: boolean
  count: number
  totalCashBook: ITotalCashBook[]
  cashBooks: ICashBook[]
}

export interface ICashBookRes {
  success: boolean
  cashBook: null | ICashBook
}
