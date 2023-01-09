export interface IBaseExpenditureCategory {
  name: string
}

export default interface IExpenditureCategory extends IBaseExpenditureCategory {
  _id: string
}

export interface IExpenditureCategoriesRes {
  success: boolean
  count: number
  expenditureCategories: IExpenditureCategory[]
}
