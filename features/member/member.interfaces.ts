import { IError } from '../../interfaces'
import { IAttendance } from '../attendance'
import { ICell } from '../cell'
import { IDepartment } from '../department'
import { ITithe } from '../income/tithe'
import { IWelfare } from '../income/welfare'

export interface IBaseMember {
  firstName?: string
  lastName?: string
  otherNames?: string | undefined
  fullName?: string
  gender?: '' | 'Male' | 'Female'
  dateOfBirth?: string
  maritalStatus?: '' | 'Single' | 'Married' | 'Divorced' | 'Widowed'
  occupation?: string | undefined
  postalAddress?: string | undefined
  homeAddress?: string | undefined
  email?: string | undefined
  phoneNumber?: string
  nearestRelative?: {
    name?: string
    relationship?: string
    phoneNumber?: string
  }
  cell?: {
    cell: ICell | ICell['_id']
    dateJoined?: string
  }
  attendances?: IAttendance[]
  departments?: IDepartment[]
  welfares?: IWelfare[]
  tithes?: ITithe[]
}

export default interface IMember extends IBaseMember {
  _id: string
}

export interface IMembersRes {
  success: boolean
  count: number | 0
  members: IMember[]
}

export interface IMemberRes {
  success: boolean
  member: null | IMember
}

export interface IMemberRequestQuery {
  firstName?: string
  lastName?: string
  otherNames?: string | undefined
  fullName?: string
  gender: string | 'Male' | 'Female'
  dateOfBirth?: string
  maritalStatus?:
    | string
    | undefined
    | 'Single'
    | 'Married'
    | 'Divorced'
    | 'Widowed'
  occupation?: string | undefined
  postalAddress?: string | undefined
  homeAddress?: string | undefined
  email?: string | undefined
  phoneNumber: string
  nearestRelative?: {
    name?: string
    relationship?: string
    phoneNumber?: string
  }
  cell?: {
    cell?: ICell | ICell['_id']
    dateJoined?: string
  }
}

export interface IMemberInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error?: IError['error']
  advancedSearchFormData: null | IMemberQuery
  membersRes: IMembersRes
  memberResCRUD: IMemberRes
}

export interface IMemberEditReq {
  id: IMember['_id']
  member: IBaseMember
}

export interface IMemberQuery {
  fullName?: string
  gender?: string | 'Male' | 'Female'
  maritalStatus?: string | 'Single' | 'Married' | 'Divorced' | 'Widowed'
  age?: string | 'Oldest' | 'Youngest' | '18+'
  dateOfBirth?: Date
  'cell.cell'?: string
  select?: string
  sort?: string
  page?: string
  limit?: string
  'dateOfBirth[ne]'?: string
  'cell.dateJoined[gte]'?: string
  'cell.dateJoined[lte]'?: string
}
