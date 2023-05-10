import expenditureCategoryExtraReducers from './expenditureCategory.extraReducers'

/** Import Components */
import ExpenditureCategories from './components/ExpenditureCategories'
import ExpenditureCategoriesTable from './components/ExpenditureCategoriesTable'
import ExpenditureCategoryItem from './components/ExpenditureCategoryItem'
import ExpenditureCategoryInputForm from './components/ExpenditureCategoryInputForm'

/** Import Actions */
import {
  addExpenditureCategoryAction,
  editExpenditureCategoryAction,
} from './expenditureCategory.actions'

/** Import Interfaces */
import IExpenditureCategory, {
  IBaseExpenditureCategory,
  IExpenditureCategoriesRes,
  IExpenditureCategoryRes,
  IExpenditureCategoryInitialState,
} from './expenditureCategory.interfaces'
import {
  addExpenditureCategory,
  getExpenditureCategories,
  getExpenditureCategory,
  editExpenditureCategory,
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

export {
  addExpenditureCategory,
  getExpenditureCategories,
  getExpenditureCategory,
  editExpenditureCategory,
}

export { expenditureCategoryReducers, resetExpenditureCategory }

export { addExpenditureCategoryAction, editExpenditureCategoryAction }

export { expenditureCategoryExtraReducers }

export { resetExpenditureCategoryReducer }
