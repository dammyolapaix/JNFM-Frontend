import { makeRequest } from '../../lib'
import { ICashBookQuery, ICashBooksRes } from './index'

export const getCashBooks = async (
  cashBookQuery?: ICashBookQuery,
  cookie?: string
) => {
  if (cashBookQuery) {
    const currentDate = new Date()

    const currentYear = currentDate.getFullYear()

    // Getting the start and end of this month
    const startOfThisMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    )
      .toISOString()
      .slice(0, 10)
    const endOfThisMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    )
      .toISOString()
      .slice(0, 10)

    // Getting the start and end of last month
    const startOfLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    )
      .toISOString()
      .slice(0, 10)
    const endOfLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    )
      .toISOString()
      .slice(0, 10)

    // Getting the start of last 3 months
    const startOfLast3Months = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 3,
      1
    )
      .toISOString()
      .slice(0, 10)

    // Getting the start of last 6 months
    const startOfLast6Months = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 6,
      1
    )
      .toISOString()
      .slice(0, 10)

    // Getting the start of last 12 months
    const startOfLast12Months = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 12,
      1
    )
      .toISOString()
      .slice(0, 10)

    const startOfThisYear = new Date(currentYear, 0, 1)
      .toISOString()
      .slice(0, 10)
    const endOfThisYear = new Date(currentYear, 11, 31)
      .toISOString()
      .slice(0, 10)

    const startOfLastYear = new Date(currentYear - 1, 0, 1)
      .toISOString()
      .slice(0, 10)
    const endOfLastYear = new Date(currentYear - 1, 11, 31)
      .toISOString()
      .slice(0, 10)

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

    if (cashBookQuery.month === 'This Month') {
      cashBookQuery['date[gte]'] = startOfThisMonth
      cashBookQuery['date[lte]'] = endOfThisMonth

      delete cashBookQuery.month
    }

    if (cashBookQuery.month === 'Last Month') {
      cashBookQuery['date[gte]'] = startOfLastMonth
      cashBookQuery['date[lte]'] = endOfLastMonth

      delete cashBookQuery.month
    }

    if (cashBookQuery.month === 'Last 3 Months') {
      cashBookQuery['date[gte]'] = startOfLast3Months
      cashBookQuery['date[lte]'] = endOfLastMonth

      delete cashBookQuery.month
    }

    if (cashBookQuery.month === 'Last 6 Months') {
      cashBookQuery['date[gte]'] = startOfLast6Months
      cashBookQuery['date[lte]'] = endOfLastMonth

      delete cashBookQuery.month
    }

    if (cashBookQuery.month === 'Last 12 Months') {
      cashBookQuery['date[gte]'] = startOfLast12Months
      cashBookQuery['date[lte]'] = endOfLastMonth

      delete cashBookQuery.month
    }

    if (cashBookQuery.year === 'This Year') {
      cashBookQuery['date[gte]'] = startOfThisYear
      cashBookQuery['date[lte]'] = endOfThisYear

      delete cashBookQuery.year
    }

    if (cashBookQuery.year === 'Last Year') {
      cashBookQuery['date[gte]'] = startOfLastYear
      cashBookQuery['date[lte]'] = endOfLastYear

      delete cashBookQuery.year
    }

    if (cashBookQuery.fromDate) {
      cashBookQuery['date[gte]'] = cashBookQuery.fromDate

      delete cashBookQuery.fromDate
    }
    if (cashBookQuery.toDate) {
      cashBookQuery['date[lte]'] = cashBookQuery.toDate

      delete cashBookQuery.toDate
    }

    // Filtering by Account
    if (cashBookQuery.account === 'offering') {
      cashBookQuery['account.offering[exists]'] = true

      delete cashBookQuery.account
    }

    if (cashBookQuery.account === 'welfare') {
      cashBookQuery['account.welfare[exists]'] = true

      delete cashBookQuery.account
    }
    if (cashBookQuery.account === 'tithe') {
      cashBookQuery['account.tithe[exists]'] = true

      delete cashBookQuery.account
    }

    if (cashBookQuery.account === 'specialContribution') {
      cashBookQuery['account.specialContribution[exists]'] = true

      delete cashBookQuery.account
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
      `/cashBooks/${queryStr}`,
      {
        withCredentials: true,
        headers: {
          Cookie: cookie,
        },
      }
    )
    return data
  } else {
    const { data } = await makeRequest.get<ICashBooksRes>('/cashBooks', {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    })
    return data
  }
}
