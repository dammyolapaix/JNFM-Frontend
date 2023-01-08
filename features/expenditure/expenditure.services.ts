import { makeRequest } from '../../lib'
import { IChurchService } from '../churchService'
import { IExpendituresRes } from './expenditure.interfaces'

export const getExpenditures = async (
  churchServiceId?: IChurchService['_id']
) => {
  if (churchServiceId) {
    const { data } = await makeRequest.get<IExpendituresRes>(
      `/churchServices/${churchServiceId}/expenditures`
    )
    return data
  } else {
    const { data } = await makeRequest.get<IExpendituresRes>('/expenditures')
    return data
  }
}
