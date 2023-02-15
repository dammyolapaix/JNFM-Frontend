import { makeRequest } from '../../../../lib'
import { IOfferingTypesRes } from './index'

export const getOfferingTypes = async (cookie?: string) => {
  const { data } = await makeRequest.get<IOfferingTypesRes>(`/offeringTypes`, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}
