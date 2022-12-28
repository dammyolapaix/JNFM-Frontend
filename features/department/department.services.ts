import { makeRequest } from '../../lib'
import {
  IBaseDepartment,
  IDepartment,
  IDepartmentRes,
  IDepartmentsRes,
} from './index'

export const getDepartments = async () => {
  const { data } = await makeRequest.get<IDepartmentsRes>('/departments')
  return data
}

export const getSingleDepartmentById = async (id: IDepartment['_id']) => {
  const { data } = await makeRequest.get<IDepartmentRes>(`/departments/${id}`)
  return data
}

export const addDepartment = async (department: IBaseDepartment) => {
  const { data } = await makeRequest.post<IDepartmentRes>(
    `/departments`,
    department
  )
  return data
}
