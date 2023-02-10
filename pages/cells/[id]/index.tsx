import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../../components'
import { CellDetails, ICellRes } from '../../../features/cell'
import { getSingleCellById } from '../../../features/cell/cell.services'
import { getMembers, IMembersRes } from '../../../features/member'
import { useAppSelector } from '../../../hooks'
import { IParams } from '../../../interfaces'

const SingleCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes: { cell }, membersRes }) => {
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

      {cell && cell !== null && (
        <CellDetails
          cell={cell}
          membersRes={isSuccess ? membersResQuery : membersRes}
          membersResQueryCountIsZero={isSuccess && membersResQuery.count === 0}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellRes: ICellRes
  membersRes: IMembersRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const cellRes: ICellRes = await getSingleCellById(id)
  const membersRes: IMembersRes = await getMembers({ 'cell.cell': id })

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
