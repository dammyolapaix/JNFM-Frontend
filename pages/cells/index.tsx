import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { Cells, getCells, ICellsRes } from '../../features/cell'

const CellsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellsRes }) => {
  return (
    <Layout>
      <Cells cellsRes={cellsRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellsRes: ICellsRes
}> = async () => {
  const cellsRes: ICellsRes = await getCells()

  if (!cellsRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cellsRes,
    },
  }
}

export default CellsPage
