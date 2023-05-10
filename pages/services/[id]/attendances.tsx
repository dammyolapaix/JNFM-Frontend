import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  Attendances,
  IAttendancesRes,
  getSingleChurchSeviceAttendances,
} from '../../../features/attendance'
import { IError, IParams } from '../../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const SingleChurchServiceAttendacePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ attendancesRes, errorMessage }) => {
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        attendancesRes && <Attendances attendancesRes={attendancesRes} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  attendancesRes?: IAttendancesRes
  errorMessage?: string
}> = async ({ params, req, res }) => {
  const cookieHeaders = req.headers.cookie
  const { id } = params as IParams

  try {
    const attendancesRes: IAttendancesRes =
      await getSingleChurchSeviceAttendances(id, cookieHeaders)

    if (!attendancesRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: { attendancesRes },
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

export default SingleChurchServiceAttendacePage
