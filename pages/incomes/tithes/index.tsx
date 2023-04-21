import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import { getTithes, ITithesRes, Tithes } from '../../../features/income/tithe'
import { IError } from '../../../interfaces'

const IncomesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ tithesRes }) => {
  return <Layout>{tithesRes && <Tithes tithesRes={tithesRes} />}</Layout>
}

export const getServerSideProps: GetServerSideProps<{
  tithesRes?: ITithesRes
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

  const tithesRes: ITithesRes = await getTithes(cookie)

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
