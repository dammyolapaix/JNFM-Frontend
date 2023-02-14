const getQueryStr = (query: Object): string => {
  // Turn object to string
  let queryStr = JSON.stringify(query)

  // Replace brackets and quotes by an empty string i.e ''
  queryStr = queryStr.replace(/{|}|"/g, '')

  // Replace column by equal sign i.e =
  queryStr = queryStr.replace(/:/g, '=')

  // Replace comma by and sign i.e &
  queryStr = queryStr.replace(/,/g, '&')

  // Start the query string with question mart i.e ?
  queryStr = `?${queryStr}`

  return queryStr
}

export default getQueryStr
