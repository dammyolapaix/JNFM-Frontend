import IIncome, {
  IBaseIncome,
  IIncomeRes,
  IIncomesRes,
  ITitheInitialState,
} from './income.interfaces'
import { getIncomes } from './income.services'

import Incomes from './components/Incomes'
import IncomeItem from './components/IncomeItem'
import IncomeAdvancedSearchForm from './components/IncomeAdvancedSearchForm'

import incomeReducers, {
  incomeSlices,
  resetTithe,
  resetWelfare,
} from './income.slices'

export type {
  IBaseIncome,
  IIncome,
  IIncomeRes,
  IIncomesRes,
  ITitheInitialState,
}
export { getIncomes }

export { Incomes, IncomeItem, IncomeAdvancedSearchForm }

export { incomeReducers, incomeSlices, resetTithe, resetWelfare }
