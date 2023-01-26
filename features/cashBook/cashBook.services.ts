import { makeRequest } from '../../lib'
import { ICashBookQuery, ICashBooksRes } from './index'

export const getCashBooks = async (cashBookQuery?: ICashBookQuery) => {
  if (cashBookQuery) {
    // Turn object to string
    let queryStr = JSON.stringify(cashBookQuery)

    // Replace brackets and quotes by an empty string i.e ''
    queryStr = queryStr.replace(/{|}|"/g, '')

    // Replace column by equal sign i.e =
    queryStr = queryStr.replace(/:/g, '=')

    // Replace comma by and sign i.e &
    queryStr = queryStr.replace(/,/g, '&')

    // Start the query string with question mart i.e ?
    queryStr = `?${queryStr}`

    const { data } = await makeRequest.get<ICashBooksRes>(
      `/cashBooks/${queryStr}`
    )
    return data
  } else {
    const { data } = await makeRequest.get<ICashBooksRes>('/cashBooks')
    return data
  }
}
