import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../components'
import {
  ChurchSeriveInputForm,
  resetChurchService,
} from '../../features/churchService'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddNewServicePage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    churchServiceResCRUD: { churchService },
  } = useAppSelector((state) => state.churchService)

  useEffect(() => {
    if (isSuccess && churchService !== null) {
      toast.success('Church Service added successfully')
      dispatch(resetChurchService())
      router.push('/services')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, churchService])
  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <ChurchSeriveInputForm />
    </Layout>
  )
}

export default AddNewServicePage
