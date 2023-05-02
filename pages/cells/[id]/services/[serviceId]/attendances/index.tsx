import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../../../components'
import { getSingleChurchServiceAttendances } from '../../../../../../features/churchService'
import { IError } from '../../../../../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'
import { IAttendancesRes } from '../../../../../../features/attendance'
import { CellSingleChurchServiveAttendances } from '../../../../../../features/cell'
import { ParsedUrlQuery } from 'querystring'

const CellAttendancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ attendancesRes, cellId, errorMessage }) => {
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        attendancesRes &&
        attendancesRes.attendances !== null &&
        cellId && (
          <CellSingleChurchServiveAttendances
            attendancesRes={attendancesRes}
            cellId={cellId}
          />
        )
      )}
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  serviceId: string
  id: string
}

export const getServerSideProps: GetServerSideProps<{
  attendancesRes?: IAttendancesRes
  cellId?: string
  errorMessage?: string
}> = async ({ req, res, params }) => {
  const cookieHeaders = req.headers.cookie
  const { id: cellId, serviceId } = params as IParams

  try {
    const attendancesRes: IAttendancesRes =
      await getSingleChurchServiceAttendances(serviceId, cookieHeaders)

    if (!attendancesRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: { attendancesRes, cellId },
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

    const errorMessage = `An error occurred: ${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}

export default CellAttendancePage
