import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  getWelfares,
  IWelfaresRes,
  Welfares,
} from '../../../features/income/welfare'
import { IError } from '../../../interfaces'

const WelfaresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ welfaresRes }) => {
  return (
    <Layout>{welfaresRes && <Welfares welfaresRes={welfaresRes} />}</Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  welfaresRes?: IWelfaresRes
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
  const welfaresRes: IWelfaresRes = await getWelfares(cookie)

  if (!welfaresRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      welfaresRes,
    },
  }
}
export default WelfaresPage
