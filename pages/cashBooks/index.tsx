import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { CashBooks, getCashBooks, ICashBooksRes } from '../../features/cashBook'

const CashBooksPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cashBooksRes }) => {
  return (
    <Layout>
      <CashBooks cashBooksRes={cashBooksRes} />
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
