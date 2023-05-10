import { makeRequest } from '../../lib'
import { IChurchService } from '../churchService'
import {
  IAttendance,
  IAttendanceRes,
  IAttendancesRes,
  IBaseAttendance,
} from '../attendance'

export const getAttendances = async (cookie?: string) => {
  const { data } = await makeRequest.get<IAttendancesRes>(`/attendances`, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const getSingleChurchSeviceAttendances = async (
  churchServiceId: IChurchService['_id'],
  cookie?: string
) => {
  const { data } = await makeRequest.get<IAttendancesRes>(
    `/churchServices/${churchServiceId}/attendances`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const takeAttendance = async (
  attendance: IBaseAttendance,
  cookie?: string
) => {
  const { churchService, member } = attendance
  const { data } = await makeRequest.post<IAttendanceRes>(
    `/churchServices/${churchService}/attendances`,
    { member },
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const markAsAbsent = async (
  attendanceId: IAttendance['_id'],
  cookie?: string
) => {
  const { data } = await makeRequest.delete<IAttendanceRes>(
    `/attendances/${attendanceId}`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
