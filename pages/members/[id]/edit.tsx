import { useEffect } from 'react'
import { InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../../components'
import {
  getMembers,
  getSingleMemberById,
  IMember,
  MemberInputForm,
  resetMember,
} from '../../../features/member'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditMemberPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ member }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isSuccess,
    memberResCRUD: { member: updatedMember },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (isSuccess && updatedMember !== null) {
      toast.success('Member updated successfully')
      dispatch(resetMember())
      router.push(`/members/${member?._id}`)
    }
  }, [router, dispatch, isSuccess, updatedMember])

  return (
    <Layout>
      <ToastContainer />
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
