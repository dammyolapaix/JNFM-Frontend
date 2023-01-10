import { makeRequest } from '../../lib'
import { ICashBooksRes } from './index'

export const getCashBooks = async () => {
  const { data } = await makeRequest.get<ICashBooksRes>('/cashBooks')
  return data
}
