import { InferGetStaticPropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  getMembers,
  getSingleMemberById,
  IMember,
  MemberInputForm,
} from '../../../features/member'

const EditMemberPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ member }) => {
  return (
    <Layout>
      {member && member !== null && <MemberInputForm member={member} />}
    </Layout>
  )
}

export async function getStaticPaths() {
  const {
    data: { members },
  } = await getMembers()

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
  const {
    data: { member },
  } = await getSingleMemberById(id)

  return {
    props: { member },
    revalidate: 1,
  }
}

export default EditMemberPage
