import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../components'
import { MemberInputForm, resetMember } from '../../features/member'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddNewMemberPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    memberResCRUD: { member },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (isSuccess && member !== null) {
      toast.success('Member added successfully')
      dispatch(resetMember())
      router.push('/members')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, member])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <MemberInputForm />
    </Layout>
  )
}

export default AddNewMemberPage
