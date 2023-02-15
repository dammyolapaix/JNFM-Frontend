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
> = ({ memberRes }) => {
  return (
    <Layout>
      {memberRes && memberRes.member && memberRes.member !== null && (
        <MemberDetails member={memberRes.member} />
      )}
    </Layout>
  )
}

interface IErrorRes {
  success: boolean
  error: string
}

export const getServerSideProps: GetServerSideProps<{
  memberRes?: IMemberRes
  errorRes?: IErrorRes
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

  const memberRes: IMemberRes = await getSingleMemberById(id, cookie)

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
