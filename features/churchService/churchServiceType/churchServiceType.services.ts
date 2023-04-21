import { makeRequest } from '../../../lib'
import {
  IBaseChurchServiceType,
  IChurchServiceTypeRes,
  IChurchServiceTypesRes,
} from './index'

export const getChurchServiceTypes = async (cookie?: string) => {
  const { data } = await makeRequest.get<IChurchServiceTypesRes>(
    `/churchServiceTypes`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const addChurchServiceType = async (
  churchServiceType: IBaseChurchServiceType,
  cookie?: string
) => {
  const { data } = await makeRequest.post<IChurchServiceTypeRes>(
    `/churchServiceTypes`,
    churchServiceType,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
