import { makeRequest } from '../../../lib'
import { IBaseOffering, IOfferingRes, IOfferingsRes } from './index'
import { IChurchService } from '../../churchService'

export const getOfferings = async (
  churchServiceId: IChurchService['_id'],
  cookie?: string
) => {
  const { data } = await makeRequest.get<IOfferingsRes>(
    `/churchServices/${churchServiceId}/offerings`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const addOffering = async (offering: IBaseOffering, cookie?: string) => {
  const { churchService: churchServiceId, ...rest } = offering

  const { data } = await makeRequest.post<IOfferingRes>(
    `/churchServices/${churchServiceId}/offerings`,
    rest,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
