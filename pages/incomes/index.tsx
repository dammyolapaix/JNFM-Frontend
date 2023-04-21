import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { getIncomes, IIncomesRes, Incomes } from '../../features/income'
import { IError } from '../../interfaces'

const IncomesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ incomesRes }) => {
  return <Layout>{incomesRes && <Incomes incomesRes={incomesRes} />}</Layout>
}

export const getServerSideProps: GetServerSideProps<{
  incomesRes?: IIncomesRes
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

  const incomesRes: IIncomesRes = await getIncomes(cookie)

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
