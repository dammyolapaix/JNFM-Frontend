import { IAttendance } from '../attendance'
import { IExpenditure } from '../expenditure'
import { IChurchServiceType, IChurchServiceTypeRes } from './churchServiceType'
import { IOffering, IOfferingRes } from './offering'

export interface IBaseChurchService {
  date?: string | undefined
  startsAt?: string | undefined
  endsAt?: string | undefined
  attendances?: IAttendance[] | undefined
  churchServiceType?: string | IChurchServiceType | undefined
  offerings?: IOffering[] | undefined
  expenditures?: IExpenditure[] | undefined
}

export default interface IChurchService extends IBaseChurchService {
  _id: string
}

export interface IChurchServicesRes {
  success: boolean
  count: number | 0
  churchServices: IChurchService[]
}

export interface IChurchServiceRes {
  success: boolean
  totalOfferings: number
  churchService: null | IChurchService
}

export interface IChurchServiceInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
  churchServiceResCRUD: IChurchServiceRes
  churchServiceTypeResCRUD: IChurchServiceTypeRes
  offeringResCRUD: IOfferingRes
}
