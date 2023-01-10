import IIncome, {
  IBaseIncome,
  IIncomeRes,
  IIncomesRes,
} from './income.interfaces'
import { getIncomes } from './income.services'

import Incomes from './components/Incomes'
import IncomeItem from './components/IncomeItem'

export type { IBaseIncome, IIncome, IIncomeRes, IIncomesRes }
export { getIncomes }

export { Incomes, IncomeItem }
