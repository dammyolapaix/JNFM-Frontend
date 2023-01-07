import { makeRequest } from '../../../../lib'
import { IOfferingTypesRes } from './index'

export const getOfferingTypes = async () => {
  const { data } = await makeRequest.get<IOfferingTypesRes>(`/offeringTypes`)
  return data
}
