import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../../../components'
import {
  getMembers,
  IMembersRes,
  MembersTable,
} from '../../../../features/member'
import { IParams } from '../../../../interfaces'

const CellServiceAttendancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ membersRes: { members } }) => {
  const router = useRouter()

  return (
    <Layout>
      <MembersTable members={members} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  membersRes: IMembersRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const membersRes: IMembersRes = await getMembers({ 'cell.cell': id })

  if (!membersRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      membersRes,
    },
  }
}

export default CellServiceAttendancePage
