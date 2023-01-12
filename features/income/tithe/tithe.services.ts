import { makeRequest } from '../../../lib'
import { IBaseTithe, ITitheRes, ITithesRes } from './index'

export const getTithes = async () => {
  const { data } = await makeRequest.get<ITithesRes>('/tithes')
  return data
}

export const addTithe = async (tithe: IBaseTithe) => {
  const { data } = await makeRequest.post<ITitheRes>('/tithes', tithe)
  return data
}
