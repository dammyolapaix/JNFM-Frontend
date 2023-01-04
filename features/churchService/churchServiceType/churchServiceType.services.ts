import { makeRequest } from '../../../lib'
import { IBaseChurchServiceType, IChurchServiceTypeRes } from './index'

export const addChurchServiceType = async (
  churchServiceType: IBaseChurchServiceType
) => {
  const { data } = await makeRequest.post<IChurchServiceTypeRes>(
    `/churchServiceTypes`,
    churchServiceType
  )
  return data
}
