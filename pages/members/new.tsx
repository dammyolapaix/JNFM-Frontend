import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../components'
import { MemberInputForm, resetMember } from '../../features/member'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddNewMemberPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isSuccess,
    memberResCRUD: { member },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (isSuccess && member !== null) {
      toast.success('Member added successfully')
      dispatch(resetMember())
      router.push('/members')
    }
  }, [router, dispatch, isSuccess, member])

  return (
    <Layout>
      <ToastContainer />
      <MemberInputForm />
    </Layout>
  )
}

export default AddNewMemberPage
