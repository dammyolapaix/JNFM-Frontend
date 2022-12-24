import { IChurchService } from '../churchService'
import { IMember } from '../member'

export interface IBaseAttendance {
  member: IMember
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
