import { makeRequest } from '../../../lib'
import { IBaseOffering, IOfferingRes, IOfferingsRes } from './index'
import { IChurchService } from '../../churchService'

export const getOfferings = async (churchServiceId: IChurchService['_id']) => {
  const { data } = await makeRequest.get<IOfferingsRes>(
    `/churchServices/${churchServiceId}/offerings`
  )
  return data
}

export const addOffering = async (offering: IBaseOffering) => {
  const { churchService: churchServiceId, ...rest } = offering

  const { data } = await makeRequest.post<IOfferingRes>(
    `/churchServices/${churchServiceId}/offerings`,
    rest
  )
  return data
}
