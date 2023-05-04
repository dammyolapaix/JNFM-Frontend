import expenditureCategoryExtraReducers from './addExpenditureCategory.extraReducers'

/** Import Components */
import ExpenditureCategories from './components/ExpenditureCategories'
import ExpenditureCategoriesTable from './components/ExpenditureCategoriesTable'
import ExpenditureCategoryItem from './components/ExpenditureCategoryItem'
import ExpenditureCategoryInputForm from './components/ExpenditureCategoryInputForm'

import { addExpenditureCategoryAction } from './expenditureCategory.actions'
import IExpenditureCategory, {
  IBaseExpenditureCategory,
  IExpenditureCategoriesRes,
  IExpenditureCategoryRes,
  IExpenditureCategoryInitialState,
} from './expenditureCategory.interfaces'
import {
  addExpenditureCategory,
  getExpenditureCategories,
} from './expenditureCategory.services'

import expenditureCategoryReducers, {
  resetExpenditureCategory,
} from './expenditureCategory.slices'
import { resetExpenditureCategoryReducer } from './expenditureCategory.reducers'

export type {
  IExpenditureCategory,
  IBaseExpenditureCategory,
  IExpenditureCategoriesRes,
  IExpenditureCategoryRes,
  IExpenditureCategoryInitialState,
}

export {
  ExpenditureCategories,
  ExpenditureCategoriesTable,
  ExpenditureCategoryItem,
  ExpenditureCategoryInputForm,
}

export { addExpenditureCategory, getExpenditureCategories }

export { expenditureCategoryReducers, resetExpenditureCategory }

export { addExpenditureCategoryAction }

export { expenditureCategoryExtraReducers }

export { resetExpenditureCategoryReducer }
