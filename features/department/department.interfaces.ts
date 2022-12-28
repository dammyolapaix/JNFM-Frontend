import { IMember } from '../member'

export interface IBaseDepartment {
  name?: string
  members?: {
    member: IMember
  }[]
}

export default interface IDepartment extends IBaseDepartment {
  _id: string
}

export interface IDepartmentsRes {
  success: boolean
  count: number | 0
  departments: IMember[]
}

export interface IDepartmentRes {
  success: boolean
  department: null | IMember
}

export interface IDepartmentInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
  departmentsRes: IDepartmentsRes
  departmentResCRUD: IDepartmentRes
}
