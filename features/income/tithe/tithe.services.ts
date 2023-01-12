import { makeRequest } from '../../../lib'
import { ITithesRes } from './tithe.interfaces'

export const getTithes = async () => {
  const { data } = await makeRequest.get<ITithesRes>('/tithes')
  return data
}
