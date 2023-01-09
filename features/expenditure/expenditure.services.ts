import { makeRequest } from '../../lib'
import { IChurchService } from '../churchService'
import { IBaseExpenditure, IExpenditureRes, IExpendituresRes } from './index'

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

export const addExpenditure = async (expenditure: IBaseExpenditure) => {
  const { data } = await makeRequest.post<IExpenditureRes>(
    `/expenditures`,
    expenditure
  )
  return data
}
