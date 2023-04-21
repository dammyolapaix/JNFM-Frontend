import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import {
  Expenditures,
  getExpenditures,
  IExpendituresRes,
} from '../../../../features/expenditure'
import { IError, IParams } from '../../../../interfaces'

const ChurchServiceExpendituresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceId, expendituresRes }) => {
  return (
    <Layout>
      {expendituresRes && churchServiceId && (
        <Expenditures
          expendituresRes={expendituresRes}
          churchServiceId={churchServiceId}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expendituresRes?: IExpendituresRes
  churchServiceId?: string
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
  const { id: churchServiceId } = params as IParams

  const expendituresRes: IExpendituresRes = await getExpenditures(
    churchServiceId,
    cookie
  )

  if (!expendituresRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      expendituresRes,
      churchServiceId,
    },
  }
}

export default ChurchServiceExpendituresPage
