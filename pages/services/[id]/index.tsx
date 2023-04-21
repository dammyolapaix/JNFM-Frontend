import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  ChurchServiceDetails,
  getSingleChurchServiceById,
  IChurchServiceRes,
} from '../../../features/churchService'
import { IError, IParams } from '../../../interfaces'

const SingleChurchServicePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceRes }) => {
  return (
    <Layout>
      {churchServiceRes && (
        <ChurchServiceDetails churchServiceRes={churchServiceRes} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServiceRes?: IChurchServiceRes
  errorRes?: IError
}> = async ({ params, req, res }) => {
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

  const churchServiceRes: IChurchServiceRes = await getSingleChurchServiceById(
    id,
    cookie
  )

  if (!churchServiceRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { churchServiceRes },
  }
}

export default SingleChurchServicePage
