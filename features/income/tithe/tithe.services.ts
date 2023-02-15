import { makeRequest } from '../../../lib'
import { IBaseTithe, ITitheRes, ITithesRes } from './index'

export const getTithes = async (cookie?: string) => {
  const { data } = await makeRequest.get<ITithesRes>('/tithes', {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const addTithe = async (tithe: IBaseTithe, cookie?: string) => {
  const { data } = await makeRequest.post<ITitheRes>('/tithes', tithe, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}
