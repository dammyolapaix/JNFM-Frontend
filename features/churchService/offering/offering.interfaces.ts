import { IChurchService } from '../../churchService'
import { IOfferingType } from './offeringType'

export interface IBaseOffering {
  date: string
  amount: number
  churchService: IChurchService | IChurchService['_id']
  offeringType: IOfferingType | IOfferingType['_id']
}

export default interface IOffering extends IBaseOffering {
  _id: string
}

export interface IOfferingsRes {
  success: boolean
  count: number
  totalOfferings: number
  offerings: IOffering[]
}

export interface IOfferingRes {
  success: boolean
  offering: null | IOffering
}
