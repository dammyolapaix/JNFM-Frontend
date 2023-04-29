import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import {
  Attendances,
  getAttendances,
  IAttendancesRes,
} from '../../../../features/attendance'
import { IParams } from '../../../../interfaces'

const SingleChurchServiceAttendacePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ attendancesRes }) => {
  return (
    <Layout>
      {attendancesRes && <Attendances attendancesRes={attendancesRes} />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  attendancesRes?: IAttendancesRes
}> = async ({ params, req, res }) => {
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

  const { id } = params as IParams

  const attendancesRes: IAttendancesRes = await getAttendances(id, cookie)

  if (!attendancesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { attendancesRes },
  }
}

export default SingleChurchServiceAttendacePage
