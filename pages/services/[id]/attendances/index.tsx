import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Layout } from '../../../../components'
import {
  Attendances,
  getAttendances,
  IAttendancesRes,
} from '../../../../features/attendance'

const SingleChurchServiceAttendacePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ attendancesRes }) => {
  return (
    <Layout>
      <Attendances attendancesRes={attendancesRes} />
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps<{
  attendancesRes: IAttendancesRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const attendancesRes: IAttendancesRes = await getAttendances(id)

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
