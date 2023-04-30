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
import { AxiosError } from 'axios'
import cookie from 'cookie'
import { IError } from '../../interfaces'

const AddNewServicePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceTypesRes, errorMessage }) => {
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
        error={error && error}
      ></QueryResult>

      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        churchServiceTypesRes && (
          <ChurchSeriveInputForm
            churchServiceTypes={churchServiceTypesRes.churchServiceTypes}
          />
        )
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServiceTypesRes?: IChurchServiceTypesRes
  errorMessage?: string
}> = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie

  try {
    const churchServiceTypesRes = await getChurchServiceTypes(cookieHeaders)

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
  } catch (error) {
    // Handle the error and return a custom error page or message
    if (!cookieHeaders) {
      res.writeHead(302, { Location: '/login' })
      res.end()
      return {
        props: {},
      }
    } else {
      const { token } = cookie.parse(cookieHeaders)

      if (!token) {
        res.writeHead(302, { Location: '/login' })
        res.end()
        return {
          props: {},
        }
      }
    }

    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = `An error occurred ${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}

export default AddNewServicePage
