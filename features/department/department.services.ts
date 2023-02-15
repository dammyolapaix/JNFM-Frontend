import { makeRequest } from '../../lib'
import { IMember } from '../member'
import {
  IBaseDepartment,
  IDepartment,
  IDepartmentMemberReq,
  IDepartmentRes,
  IDepartmentsRes,
} from './index'

export const getDepartments = async (cookie?: string) => {
  const { data } = await makeRequest.get<IDepartmentsRes>('/departments', {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const getSingleDepartmentById = async (
  id: IDepartment['_id'],
  cookie?: string
) => {
  const { data } = await makeRequest.get<IDepartmentRes>(`/departments/${id}`, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const addDepartment = async (
  department: IBaseDepartment,
  cookie?: string
) => {
  const { data } = await makeRequest.post<IDepartmentRes>(
    `/departments`,
    department,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )

  return data
}

export const editDepartment = async (
  id: IDepartment['_id'],
  department: IBaseDepartment,
  cookie?: string
) => {
  const { data } = await makeRequest.patch<IDepartmentRes>(
    `/departments/${id}`,
    department,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )

  return data
}

export const addMemberToDepartment = async (
  departmentMemberReq: IDepartmentMemberReq,
  cookie?: string
) => {
  const { departmentId: id, member } = departmentMemberReq

  const { data } = await makeRequest.patch<IDepartmentRes>(
    `/departments/${id}/members/add`,
    { member },
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )

  return data
}

export const removeMemberFromDepartment = async (
  departmentMemberReq: IDepartmentMemberReq,
  cookie?: string
) => {
  const { departmentId: id, member } = departmentMemberReq

  const { data } = await makeRequest.patch<IDepartmentRes>(
    `/departments/${id}/members/remove`,
    { member },
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )

  return data
}
