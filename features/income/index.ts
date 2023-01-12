import IIncome, {
  IBaseIncome,
  IIncomeRes,
  IIncomesRes,
  ITitheInitialState,
} from './income.interfaces'
import { getIncomes } from './income.services'

import Incomes from './components/Incomes'
import IncomeItem from './components/IncomeItem'

import incomeReducers, { incomeSlices, resetTithe } from './income.slices'

export type {
  IBaseIncome,
  IIncome,
  IIncomeRes,
  IIncomesRes,
  ITitheInitialState,
}
export { getIncomes }

export { Incomes, IncomeItem }

export { incomeReducers, incomeSlices, resetTithe }
