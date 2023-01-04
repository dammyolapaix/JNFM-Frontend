import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../components'
import { ChurchSeriveTypeInputForm } from '../../../features/churchService/churchServiceType'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { resetChurchService } from '../../../features/churchService'
import { NextPage } from 'next'

const AddNewServiceTypePage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    churchServiceTypeResCRUD: { churchServiceType },
  } = useAppSelector((state) => state.churchService)

  useEffect(() => {
    if (isSuccess && churchServiceType !== null) {
      toast.success('Church Service added successfully')
      dispatch(resetChurchService())
      router.push('/services')
    }
  }, [
    router,
    dispatch,
    isLoading,
    isError,
    error,
    isSuccess,
    churchServiceType,
  ])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <ChurchSeriveTypeInputForm />
    </Layout>
  )
}

export default AddNewServiceTypePage
