import { makeRequest } from '../../lib'
import { IChurchService } from '../churchService'
import {
  IAttendance,
  IAttendanceRes,
  IAttendancesRes,
  IBaseAttendance,
} from '../attendance'

export const getAttendances = async (
  churchServiceId: IChurchService['_id']
) => {
  const { data } = await makeRequest.get<IAttendancesRes>(
    `/churchServices/${churchServiceId}/attendances`
  )
  return data
}

export const takeAttendance = async (attendance: IBaseAttendance) => {
  const { churchService, member } = attendance
  const { data } = await makeRequest.post<IAttendanceRes>(
    `/churchServices/${churchService}/attendances`,
    { member }
  )
  return data
}

export const markAsAbsent = async (attendanceId: IAttendance['_id']) => {
  const { data } = await makeRequest.delete<IAttendanceRes>(
    `/attendances/${attendanceId}`
  )
  return data
}
