import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  getSingleMemberById,
  IMemberRes,
  MemberDetails,
} from '../../../features/member'
import { IParams } from '../../../interfaces'

const SingleMemberPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ memberRes: { member } }) => {
  return (
    <Layout>
      {member && member !== null && <MemberDetails member={member} />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  memberRes: IMemberRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const memberRes: IMemberRes = await getSingleMemberById(id)

  if (!memberRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { memberRes },
  }
}

export default SingleMemberPage
