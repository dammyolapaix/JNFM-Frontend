import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../components'
import { resetTithe } from '../../../features/income'
import { TitheInputForm } from '../../../features/income/tithe'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddNewServicePage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    titheResCRUD: { tithe },
  } = useAppSelector((state) => state.income)

  useEffect(() => {
    if (isSuccess && tithe !== null) {
      toast.success('Tithe added successfully')
      dispatch(resetTithe())
      router.push('/incomes/tithes')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, tithe])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <TitheInputForm />
    </Layout>
  )
}

export default AddNewServicePage
