import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  ChurchServices,
  getChurchServices,
  IChurchServicesRes,
} from '../../features/churchService'
import { IError } from '../../interfaces'

const ChurchServicesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServicesRes }) => {
  return (
    <Layout>
      {churchServicesRes && (
        <ChurchServices churchServicesRes={churchServicesRes} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServicesRes?: IChurchServicesRes
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

  const churchServicesRes = await getChurchServices(cookie)

  if (!churchServicesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      churchServicesRes,
    },
  }
}

export default ChurchServicesPage
