import { makeRequest } from '../../lib'
import { IDepartmentsRes } from './index'

export const getDepartments = async () => {
  const { data } = await makeRequest.get<IDepartmentsRes>('/departments')
  return data
}
