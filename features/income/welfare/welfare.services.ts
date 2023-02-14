import { makeRequest } from '../../../lib'
import { IBaseWelfare, IWelfareRes, IWelfaresRes } from './index'

export const getWelfares = async () => {
  const { data } = await makeRequest.get<IWelfaresRes>('/welfares')
  return data
}

export const addWelfare = async (welfare: IBaseWelfare) => {
  const { data } = await makeRequest.post<IWelfareRes>('/welfares', welfare)
  return data
}
