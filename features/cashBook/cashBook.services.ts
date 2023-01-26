import { makeRequest } from '../../lib'
import { ICashBookQuery, ICashBooksRes } from './index'

export const getCashBooks = async (cashBookQuery?: ICashBookQuery) => {
  if (cashBookQuery) {
    const currentYear = new Date().getFullYear()

    if (cashBookQuery.quarter === 'Q1') {
      const Q1start = new Date(currentYear, 0, 1).toISOString().slice(0, 10)
      const Q1end = new Date(currentYear, 2, 31).toISOString().slice(0, 10)

      cashBookQuery['date[gte]'] = Q1start
      cashBookQuery['date[lte]'] = Q1end

      delete cashBookQuery.quarter
    }

    if (cashBookQuery.quarter === 'Q2') {
      const Q2start = new Date(currentYear, 3, 1).toISOString().slice(0, 10)
      const Q2end = new Date(currentYear, 5, 30).toISOString().slice(0, 10)

      cashBookQuery['date[gte]'] = Q2start
      cashBookQuery['date[lte]'] = Q2end

      delete cashBookQuery.quarter
    }

    if (cashBookQuery.quarter === 'Q3') {
      const Q3start = new Date(currentYear, 6, 1).toISOString().slice(0, 10)
      const Q3end = new Date(currentYear, 8, 30).toISOString().slice(0, 10)

      cashBookQuery['date[gte]'] = Q3start
      cashBookQuery['date[lte]'] = Q3end

      delete cashBookQuery.quarter
    }

    if (cashBookQuery.quarter === 'Q4') {
      const Q4start = new Date(currentYear, 9, 1).toISOString().slice(0, 10)
      const Q4end = new Date(currentYear, 11, 31).toISOString().slice(0, 10)

      cashBookQuery['date[gte]'] = Q4start
      cashBookQuery['date[lte]'] = Q4end

      delete cashBookQuery.quarter
    }

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
