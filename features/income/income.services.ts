import { makeRequest } from '../../lib'
import { IIncomesRes } from './index'

export const getIncomes = async (cookie?: string) => {
  const { data } = await makeRequest.get<IIncomesRes>('/incomes', {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}
