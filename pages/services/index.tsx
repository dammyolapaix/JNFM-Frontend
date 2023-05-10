import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  ChurchServices,
  getChurchServices,
  IChurchServicesRes,
} from '../../features/churchService'
import { IError } from '../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const ChurchServicesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServicesRes, errorMessage }) => {
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        churchServicesRes && (
          <ChurchServices churchServicesRes={churchServicesRes} />
        )
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServicesRes?: IChurchServicesRes
  errorMessage?: string
}> = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie

  try {
    const churchServicesRes = await getChurchServices(cookieHeaders)

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

export default ChurchServicesPage
