import { ReactNode } from 'react'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'

interface IQueryResult {
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
  error?: string
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
      {isError && error ? (
        <ErrorMessage errorMessage={error} />
      ) : isLoading ? (
        <Spinner />
      ) : isSuccess ? (
        <>{children}</>
      ) : null}
    </>
  )
}

export default QueryResult
