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
  debitCredit: 'Credit' | 'Debit' | string
}

export default interface ICashBook extends IBaseCashBook {
  _id: string
}

export interface ICashBookQuery {
  date?: string
  amount?: number
  debitCredit?: string | 'Credit' | 'Debit'
  select?: string
  sort?: string
  quarter?: string
  month?: string
  year?: string
  fromDate?: string
  toDate?: string
  account?: string
  'date[gte]'?: string
  'date[lte]'?: string
  'account.offering[exists]'?: boolean
  'account.welfare[exists]'?: boolean
  'account.tithe[exists]'?: boolean
  'account.specialContribution[exists]'?: boolean
  // page: string
  // limit: string
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

export interface ICashBookInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
  advancedSearchFormData: null | ICashBookQuery
  cashBooksRes: ICashBooksRes
  cashBookResCRUD: ICashBookRes
}
