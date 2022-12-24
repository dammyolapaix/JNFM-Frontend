import { InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import { MarkAttendance } from '../../../../features/attendance'
import { getMembers } from '../../../../features/member'

const MarkChurchServiceAttendancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ members }) => {
  return (
    <Layout>
      <MarkAttendance members={members} />
    </Layout>
  )
}

export default MarkChurchServiceAttendancePage

export const getServerSideProps = async () => {
  const {
    data: { members },
  } = await getMembers()

  if (!members) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      members,
    },
  }
}
