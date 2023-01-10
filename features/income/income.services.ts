import { makeRequest } from '../../lib'
import { IIncomesRes } from './index'

export const getIncomes = async () => {
  const { data } = await makeRequest.get<IIncomesRes>('/incomes')
  return data
}
