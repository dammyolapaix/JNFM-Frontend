import IExpenditure, {
  IBaseExpenditure,
  IExpendituresRes,
} from './expenditure.interfaces'
import { getExpenditures } from './expenditure.services'

export type { IExpenditure, IBaseExpenditure, IExpendituresRes }
export { getExpenditures }
