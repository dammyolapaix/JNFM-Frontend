import { makeRequest } from '../../lib'
import { IChurchServicesRes } from './index'

export const getChurchServices = async () => {
  const { data } = await makeRequest.get<IChurchServicesRes>('/churchServices')
  return data
}
