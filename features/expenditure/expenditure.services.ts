import { makeRequest } from '../../lib'
import { IChurchService } from '../churchService'
import { IBaseExpenditure, IExpenditureRes, IExpendituresRes } from './index'

export const getExpenditures = async (
  churchServiceId?: IChurchService['_id'],
  cookie?: string
) => {
  if (churchServiceId) {
    const { data } = await makeRequest.get<IExpendituresRes>(
      `/churchServices/${churchServiceId}/expenditures`,
      {
        withCredentials: true,
        headers: {
          Cookie: cookie,
        },
      }
    )
    return data
  } else {
    const { data } = await makeRequest.get<IExpendituresRes>('/expenditures', {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    })
    return data
  }
}

export const addExpenditure = async (
  expenditure: IBaseExpenditure,
  cookie?: string
) => {
  const { data } = await makeRequest.post<IExpenditureRes>(
    `/expenditures`,
    expenditure,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
