import { IMember } from '../../../member'

export interface IBaseWelfare {
  date: string
  member: IMember | IMember['_id']
  amount: number
}

export default interface IWelfare extends IBaseWelfare {
  _id: string
}

export interface IWelfaresRes {
  success: boolean
  count: number
  welfares: IWelfare[]
}

export interface IWelfareRes {
  success: boolean
  welfare: null | IWelfare
}
