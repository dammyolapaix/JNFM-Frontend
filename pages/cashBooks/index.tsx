import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../components'
import { CashBooks, getCashBooks, ICashBooksRes } from '../../features/cashBook'
import { useAppSelector } from '../../hooks'
import { IError } from '../../interfaces'

const CashBooksPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cashBooksRes }) => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    cashBooksRes: cashBooksResQuery,
  } = useAppSelector((state) => state.cashBook)
  return (
    <Layout>
      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {cashBooksRes && (
        <CashBooks
          cashBooksRes={isSuccess ? cashBooksResQuery : cashBooksRes}
          cashBooksResQueryCount={isSuccess && cashBooksResQuery.count === 0}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cashBooksRes?: ICashBooksRes
  errorRes?: IError
}> = async ({ req, res }) => {
  const cookie = req.headers.cookie

  if (!cookie) {
    res.writeHead(302, { Location: '/login' })
    res.end()
    return {
      props: {
        success: false,
        error: 'Access Denied',
      },
    }
  }

  const cashBooksRes: ICashBooksRes = await getCashBooks(undefined, cookie)

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
}
export default CashBooksPage
