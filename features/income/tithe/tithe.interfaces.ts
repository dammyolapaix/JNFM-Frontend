import { IMember } from '../../member'

export interface IBaseTithe {
  date: string
  member: IMember | IMember['_id']
  amount: number
}

export default interface ITithe extends IBaseTithe {
  _id: string
}

export interface ITithesRes {
  success: boolean
  count: number
  tithes: ITithe[]
}

export interface ITitheRes {
  success: boolean
  tithe: null | ITithe
}
