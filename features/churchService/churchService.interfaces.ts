import { IAttendance } from '../attendance'
import { IChurchServiceType, IChurchServiceTypeRes } from './churchServiceType'

export interface IBaseChurchService {
  date?: string | undefined
  startsAt?: string | undefined
  endsAt?: string | undefined
  attendances?: IAttendance[]
  churchServiceType?: string | IChurchServiceType | undefined
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
}
