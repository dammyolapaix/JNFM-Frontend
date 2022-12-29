import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import { CellDetails, ICellRes } from '../../../features/cell'
import { getSingleCellById } from '../../../features/cell/cell.services'
import { IParams } from '../../../interfaces'

const SingleCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes: { cell } }) => {
  return <Layout>{cell && cell !== null && <CellDetails cell={cell} />}</Layout>
}

export const getServerSideProps: GetServerSideProps<{
  cellRes: ICellRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const cellRes: ICellRes = await getSingleCellById(id)

  if (!cellRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { cellRes },
  }
}

export default SingleCellPage
