import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import { CellDetails, ICellRes } from '../../../features/cell'
import { getSingleCellById } from '../../../features/cell/cell.services'
import { IError, IParams } from '../../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'

const SingleCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes, errorMessage }) => {
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        cellRes && cellRes.cell !== null && <CellDetails cell={cellRes.cell} />
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

export default SingleCellPage
