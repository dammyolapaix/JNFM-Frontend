import { makeRequest } from '../../lib'
import { IChurchService } from '../churchService'
import { IAttendancesRes } from './attendance.interfaces'

export const getAttendances = async (
  churchServiceId: IChurchService['_id']
) => {
  const { data } = await makeRequest.get<IAttendancesRes>(
    `/churchServices/${churchServiceId}/attendances`
  )
  return data
}
