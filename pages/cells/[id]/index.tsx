import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../../components'
import { CellDetails, ICellRes } from '../../../features/cell'
import { getSingleCellById } from '../../../features/cell/cell.services'
import { getMembers, IMembersRes } from '../../../features/member'
import { useAppSelector } from '../../../hooks'
import { IError, IParams } from '../../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const SingleCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes, membersRes, errorMessage }) => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    membersRes: membersResQuery,
  } = useAppSelector((state) => state.member)

  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        cellRes &&
        cellRes.cell !== null &&
        membersRes && (
          <>
            <QueryResult
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error && error}
            ></QueryResult>

            <CellDetails
              cell={cellRes.cell}
              membersRes={isSuccess ? membersResQuery : membersRes}
              membersResQueryCountIsZero={
                isSuccess && membersResQuery.count === 0
              }
            />
          </>
        )
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellRes?: ICellRes
  membersRes?: IMembersRes
  errorMessage?: string
}> = async ({ req, res, params }) => {
  const cookieHeaders = req.headers.cookie
  const { id } = params as IParams

  try {
    const cellRes: ICellRes = await getSingleCellById(id, cookieHeaders)
    const membersRes: IMembersRes = await getMembers(
      { 'cell.cell': id },
      cookieHeaders
    )

    if (!cellRes && !membersRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: { cellRes, membersRes },
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

export default SingleCellPage
