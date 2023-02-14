import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { Cells, getCells, ICellsRes } from '../../features/cell'
import { IError } from '../../interfaces'

const CellsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellsRes }) => {
  return <Layout>{cellsRes && <Cells cellsRes={cellsRes} />}</Layout>
}

export const getServerSideProps: GetServerSideProps<{
  cellsRes?: ICellsRes
  errorRes?: IError
}> = async ({ req, res }) => {
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

  const cellsRes: ICellsRes = await getCells(cookie)

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
