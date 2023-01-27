import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../components'
import { CashBooks, getCashBooks, ICashBooksRes } from '../../features/cashBook'
import { useAppSelector } from '../../hooks'

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

      <CashBooks
        cashBooksRes={isSuccess ? cashBooksResQuery : cashBooksRes}
        cashBooksResQueryCount={isSuccess && cashBooksResQuery.count === 0}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cashBooksRes: ICashBooksRes
}> = async () => {
  const cashBooksRes: ICashBooksRes = await getCashBooks()

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
