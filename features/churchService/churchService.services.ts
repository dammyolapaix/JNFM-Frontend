import { makeRequest } from '../../lib'
import {
  IChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
  IBaseChurchService,
} from './index'

export const getChurchServices = async () => {
  const { data } = await makeRequest.get<IChurchServicesRes>('/churchServices')
  return data
}

export const getSingleChurchServiceById = async (id: IChurchService['_id']) => {
  const { data } = await makeRequest.get<IChurchServiceRes>(
    `/churchServices/${id}`
  )
  return data
}

export const addChurchService = async (churchService: IBaseChurchService) => {
  const { data } = await makeRequest.post<IChurchServiceRes>(
    `/churchServices`,
    churchService
  )
  return data
}
