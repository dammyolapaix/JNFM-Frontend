import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { getIncomes, IIncomesRes, Incomes } from '../../features/income'

const IncomesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ incomesRes }) => {
  return (
    <Layout>
      <Incomes incomesRes={incomesRes} />{' '}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  incomesRes: IIncomesRes
}> = async () => {
  const incomesRes: IIncomesRes = await getIncomes()

  if (!incomesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      incomesRes,
    },
  }
}
export default IncomesPage
