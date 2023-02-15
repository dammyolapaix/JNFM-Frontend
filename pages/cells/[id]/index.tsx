import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../../components'
import { CellDetails, ICellRes } from '../../../features/cell'
import { getSingleCellById } from '../../../features/cell/cell.services'
import { getMembers, IMembersRes } from '../../../features/member'
import { useAppSelector } from '../../../hooks'
import { IError, IParams } from '../../../interfaces'

const SingleCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes, membersRes }) => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    membersRes: membersResQuery,
  } = useAppSelector((state) => state.member)

  return (
    <Layout>
      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {cellRes && cellRes.cell !== null && membersRes && (
        <CellDetails
          cell={cellRes.cell}
          membersRes={isSuccess ? membersResQuery : membersRes}
          membersResQueryCountIsZero={isSuccess && membersResQuery.count === 0}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellRes?: ICellRes
  membersRes?: IMembersRes
  errorRes?: IError
}> = async ({ req, res, params }) => {
  const cookie = req.headers.cookie

  if (!cookie) {
    res.writeHead(302, { Location: '/login' })
    res.end()
    return {
      props: {
        success: false,
        error: 'Access Denied',
      },
    }
  }

  const { id } = params as IParams

  const cellRes: ICellRes = await getSingleCellById(id, cookie)
  const membersRes: IMembersRes = await getMembers({ 'cell.cell': id }, cookie)

  if (!cellRes && !membersRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { cellRes, membersRes },
  }
}

export default SingleCellPage
