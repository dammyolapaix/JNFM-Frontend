import { GetStaticPaths, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  getMembers,
  getSingleMemberById,
  IMember,
  IMembersRes,
  MemberDetails,
} from '../../../features/member'

const SingleMemberPage: NextPage<{ member: IMember }> = ({ member }) => {
  return (
    <Layout>
      {member && member !== null && <MemberDetails member={member} />}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { members }: IMembersRes = await getMembers()

  const paths = members.map((member) => ({
    params: { id: member?._id },
  }))

  return { paths, fallback: false }
}

interface IContext {
  params: {
    id: IMember['_id']
  }
}

export async function getStaticProps({ params: { id } }: IContext) {
  const { member } = await getSingleMemberById(id)

  return {
    props: { member },
    revalidate: 1,
  }
}

export default SingleMemberPage
