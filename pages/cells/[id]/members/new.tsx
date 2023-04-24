import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { ErrorMessage, Layout, QueryResult } from '../../../../components'
import { MemberInputForm, resetMember } from '../../../../features/member'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ICellRes, getSingleCellById } from '../../../../features/cell'
import { IError, IParams } from '../../../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const AddMemberToCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes, errorMessage }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    memberResCRUD: { member },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (isSuccess && member !== null) {
      toast.success('Member added successfully')
      dispatch(resetMember())
      router.push('/members')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, member])

  return (
    <Layout>
      {errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : cellRes ? (
        <>
          <ToastContainer />
          <QueryResult
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            error={error && error}
          ></QueryResult>
          {cellRes && cellRes.cell && (
            <MemberInputForm
              cellName={cellRes.cell.name}
              cellId={cellRes.cell._id}
            />
          )}
        </>
      ) : (
        <div>Loading...</div>
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

    const errorMessage = `${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}

export default AddMemberToCellPage
