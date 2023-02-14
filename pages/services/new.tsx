import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
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
import {
  getChurchServiceTypes,
  IChurchServiceTypesRes,
} from '../../features/churchService/churchServiceType'

const AddNewServicePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceTypesRes: { churchServiceTypes } }) => {
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

      <ChurchSeriveInputForm churchServiceTypes={churchServiceTypes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServiceTypesRes: IChurchServiceTypesRes
}> = async () => {
  const churchServiceTypesRes = await getChurchServiceTypes()

  if (!churchServiceTypesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      churchServiceTypesRes,
    },
  }
}

export default AddNewServicePage
