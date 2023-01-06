import { makeRequest } from '../../../lib'
import { IOfferingsRes } from './offering.interfaces'
import { IChurchService } from '../../churchService'

export const getOfferings = async (churchServiceId: IChurchService['_id']) => {
  const { data } = await makeRequest.get<IOfferingsRes>(
    `/churchServices/${churchServiceId}/offerings`
  )
  return data
}
