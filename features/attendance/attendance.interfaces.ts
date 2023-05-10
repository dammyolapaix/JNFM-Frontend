import { IError } from '../../interfaces'
import { IChurchService } from '../churchService'
import { IMember } from '../member'

export interface IBaseAttendance {
  member: IMember['_id'] | IMember
  churchService: IChurchService['_id'] | IChurchService
}

export default interface IAttendance extends IBaseAttendance {
  _id: string
}

export interface IAttendancesRes {
  success: boolean
  count: number | 0
  attendances: IAttendance[]
}

export interface IAttendanceRes {
  success: boolean
  attendance: null | IAttendance
}

export interface IAttendanceInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error?: IError['error']
  attendancesRes: IAttendancesRes
  attendanceResCRUD: IAttendanceRes
}
