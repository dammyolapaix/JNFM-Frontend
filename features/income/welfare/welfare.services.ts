import { makeRequest } from '../../../lib'
import { IWelfaresRes } from './index'

export const getWelfares = async () => {
  const { data } = await makeRequest.get<IWelfaresRes>('/welfares')
  return data
}
