import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  DepartmentInputForm,
  getSingleDepartmentById,
  IDepartmentRes,
  resetDepartment,
} from '../../../features/department'
import { IParams } from '../../../interfaces'

const EditDepartmentPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departmentRes: { department } }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    departmentResCRUD: { department: updatedDepartment },
  } = useAppSelector((state) => state.department)

  useEffect(() => {
    if (isSuccess && updatedDepartment !== null) {
      toast.success('Department updated successfully')
      dispatch(resetDepartment())
      router.push(`/departments/${department?._id}`)
    }
  }, [router, dispatch, isSuccess, updatedDepartment])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {department && department !== null && (
        <DepartmentInputForm department={department} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  departmentRes: IDepartmentRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const departmentRes: IDepartmentRes = await getSingleDepartmentById(id)

  if (!departmentRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { departmentRes },
  }
}

export default EditDepartmentPage
