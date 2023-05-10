import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../components'
import { CashBooks, getCashBooks, ICashBooksRes } from '../../features/cashBook'
import { useAppSelector } from '../../hooks'
import { IError } from '../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const CashBooksPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cashBooksRes, errorMessage }) => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    cashBooksRes: cashBooksResQuery,
  } = useAppSelector((state) => state.cashBook)
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        <>
          <QueryResult
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            // error={error}
          ></QueryResult>

          {cashBooksRes && (
            <CashBooks
              cashBooksRes={isSuccess ? cashBooksResQuery : cashBooksRes}
              cashBooksResQueryCount={
                isSuccess && cashBooksResQuery.count === 0
              }
            />
          )}
        </>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cashBooksRes?: ICashBooksRes
  errorMessage?: string
}> = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie

  try {
    const cashBooksRes: ICashBooksRes = await getCashBooks(
      undefined,
      cookieHeaders
    )
    if (!cashBooksRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        cashBooksRes,
      },
    }
  } catch (error) {
    // Handle the error and return a custom error page or message
    if (!cookieHeaders) {
      res.writeHead(302, { Location: '/login' })
      res.end()
      return {
        props: {},
      }
    } else {
      const { token } = cookie.parse(cookieHeaders)

      if (!token) {
        res.writeHead(302, { Location: '/login' })
        res.end()
        return {
          props: {},
        }
      }
    }

    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = `An error occurred ${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}
export default CashBooksPage
