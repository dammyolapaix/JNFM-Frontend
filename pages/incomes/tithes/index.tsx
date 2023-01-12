import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import { getTithes, ITithesRes, Tithes } from '../../../features/income/tithe'

const IncomesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ tithesRes }) => {
  return (
    <Layout>
      <Tithes tithesRes={tithesRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  tithesRes: ITithesRes
}> = async () => {
  const tithesRes: ITithesRes = await getTithes()

  if (!tithesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tithesRes,
    },
  }
}
export default IncomesPage
