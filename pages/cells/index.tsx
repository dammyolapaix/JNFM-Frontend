import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { Cells, getCells, ICellsRes } from '../../features/cell'
import { IError } from '../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const CellsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellsRes, errorMessage }) => {
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        cellsRes && <Cells cellsRes={cellsRes} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellsRes?: ICellsRes
  errorMessage?: string
}> = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie

  try {
    const cellsRes: ICellsRes = await getCells(cookieHeaders)

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

export default CellsPage
