import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DepartmentInputForm, resetDepartment } from '../../features/department'

const AddNewDepartmentPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    departmentResCRUD: { department },
  } = useAppSelector((state) => state.department)

  useEffect(() => {
    if (isSuccess && department !== null) {
      toast.success('Department added successfully')
      dispatch(resetDepartment())
      router.push('/departments')
    }
  }, [router, dispatch, isSuccess, department])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <DepartmentInputForm />
    </Layout>
  )
}

export default AddNewDepartmentPage
