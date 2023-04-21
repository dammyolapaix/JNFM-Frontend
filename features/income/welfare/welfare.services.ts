import { makeRequest } from '../../../lib'
import { IBaseWelfare, IWelfareRes, IWelfaresRes } from './index'

export const getWelfares = async (cookie?: string) => {
  const { data } = await makeRequest.get<IWelfaresRes>('/welfares', {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const addWelfare = async (welfare: IBaseWelfare, cookie?: string) => {
  const { data } = await makeRequest.post<IWelfareRes>('/welfares', welfare, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}
