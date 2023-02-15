import { makeRequest } from '../../lib'
import {
  IChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
  IBaseChurchService,
} from './index'

export const getChurchServices = async (cookie?: string) => {
  const { data } = await makeRequest.get<IChurchServicesRes>(
    '/churchServices',
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )

  return data
}

export const getSingleChurchServiceById = async (
  id: IChurchService['_id'],
  cookie?: string
) => {
  const { data } = await makeRequest.get<IChurchServiceRes>(
    `/churchServices/${id}`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const addChurchService = async (
  churchService: IBaseChurchService,
  cookie?: string
) => {
  const { data } = await makeRequest.post<IChurchServiceRes>(
    `/churchServices`,
    churchService,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
