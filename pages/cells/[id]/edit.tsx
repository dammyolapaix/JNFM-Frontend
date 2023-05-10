import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  CellInputForm,
  getSingleCellById,
  ICellRes,
  resetCell,
} from '../../../features/cell'
import { IError, IParams } from '../../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const EditCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes, errorMessage }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { cell } = cellRes as ICellRes

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    cellResCRUD: { cell: updatedCell },
  } = useAppSelector((state) => state.cell)

  useEffect(() => {
    if (isSuccess && updatedCell !== null) {
      toast.success('Cell updated successfully')
      dispatch(resetCell())
      router.push(`/cells/${cell?._id}`)
    }
  }, [router, dispatch, isSuccess, updatedCell])

  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        <>
          <ToastContainer />
          <QueryResult
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            error={error}
          ></QueryResult>
          {cell && cell !== null && <CellInputForm cell={cell} />}
        </>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellRes?: ICellRes
  errorMessage?: string
}> = async ({ req, res, params }) => {
  const cookieHeaders = req.headers.cookie
  const { id } = params as IParams

  try {
    const cellRes: ICellRes = await getSingleCellById(id, cookieHeaders)

    if (!cellRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: { cellRes },
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

    const errorMessage = `An error occurred: ${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}

export default EditCellPage
