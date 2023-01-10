import ICashBook, {
  IBaseCashBook,
  ICashBookRes,
  ICashBooksRes,
} from './cashBook.interfaces'
import { getCashBooks } from './cashBook.services'

export type { IBaseCashBook, ICashBook, ICashBookRes, ICashBooksRes }

export { getCashBooks }
