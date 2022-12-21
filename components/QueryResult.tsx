import { ReactNode } from 'react'
import Spinner from './Spinner'

interface IQueryResult {
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
  error?: any
  children?: ReactNode
}

const QueryResult = ({
  isLoading,
  isSuccess,
  isError,
  error,
  children,
}: IQueryResult) => {
  return (
    <>
      {isError ? (
        <p className="text-center text-red-600">{error}</p>
      ) : isLoading ? (
        <Spinner />
      ) : isSuccess ? (
        <>{children}</>
      ) : null}
    </>
  )
}

export default QueryResult
