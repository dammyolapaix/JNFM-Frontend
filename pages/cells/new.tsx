import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CellInputForm, resetCell } from '../../features/cell'

const AddNewCellPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    cellResCRUD: { cell },
  } = useAppSelector((state) => state.cell)

  useEffect(() => {
    if (isSuccess && cell !== null) {
      toast.success('Cell added successfully')
      dispatch(resetCell())
      router.push('/cells')
    }
  }, [router, dispatch, isSuccess, cell])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <CellInputForm />
    </Layout>
  )
}

export default AddNewCellPage
