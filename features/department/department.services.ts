import { makeRequest } from '../../lib'
import { IMember } from '../member'
import {
  IBaseDepartment,
  IDepartment,
  IDepartmentMemberReq,
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

export const editDepartment = async (
  id: IDepartment['_id'],
  department: IBaseDepartment
) => {
  const { data } = await makeRequest.patch<IDepartmentRes>(
    `/departments/${id}`,
    department
  )
  return data
}

export const addMemberToDepartment = async (
  departmentMemberReq: IDepartmentMemberReq
) => {
  const { departmentId: id, member } = departmentMemberReq

  const { data } = await makeRequest.patch<IDepartmentRes>(
    `/departments/${id}/members/add`,
    { member }
  )
  return data
}

export const removeMemberFromDepartment = async (
  departmentMemberReq: IDepartmentMemberReq
) => {
  const { departmentId: id, member } = departmentMemberReq

  const { data } = await makeRequest.patch<IDepartmentRes>(
    `/departments/${id}/members/remove`,
    { member }
  )
  return data
}
