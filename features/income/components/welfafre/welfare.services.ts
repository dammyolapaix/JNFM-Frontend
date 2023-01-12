import { makeRequest } from '../../../../lib'
import { IWelfaresRes } from './welfare.interfaces'

export const getWelfares = async () => {
  const { data } = await makeRequest.get<IWelfaresRes>('/welfares')
  return data
}
