import { makeRequest } from '../../lib'
import { IChurchService, IChurchServiceRes, IChurchServicesRes } from './index'

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
