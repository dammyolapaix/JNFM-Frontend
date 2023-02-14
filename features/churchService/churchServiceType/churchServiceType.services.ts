import { makeRequest } from '../../../lib'
import {
  IBaseChurchServiceType,
  IChurchServiceTypeRes,
  IChurchServiceTypesRes,
} from './index'

export const getChurchServiceTypes = async () => {
  const { data } = await makeRequest.get<IChurchServiceTypesRes>(
    `/churchServiceTypes`
  )
  return data
}

export const addChurchServiceType = async (
  churchServiceType: IBaseChurchServiceType
) => {
  const { data } = await makeRequest.post<IChurchServiceTypeRes>(
    `/churchServiceTypes`,
    churchServiceType
  )
  return data
}
