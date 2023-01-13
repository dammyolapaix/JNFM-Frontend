import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../components'
import { WelfareInputForm } from '../../../features/income/welfare'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { resetWelfare } from '../../../features/income'

const AddNewWelfarePage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    welfareResCRUD: { welfare },
  } = useAppSelector((state) => state.income)

  useEffect(() => {
    if (isSuccess && welfare !== null) {
      toast.success('Welfare added successfully')
      dispatch(resetWelfare())
      router.push('/incomes/welfares')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, welfare])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <WelfareInputForm />
    </Layout>
  )
}

export default AddNewWelfarePage
