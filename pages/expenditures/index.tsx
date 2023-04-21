import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  Expenditures,
  getExpenditures,
  IExpendituresRes,
} from '../../features/expenditure'
import { IError } from '../../interfaces'

const ExpendituresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ expendituresRes }) => {
  return (
    <Layout>
      {expendituresRes && <Expenditures expendituresRes={expendituresRes} />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expendituresRes?: IExpendituresRes
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

  const expendituresRes: IExpendituresRes = await getExpenditures(
    undefined,
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
    },
  }
}
export default ExpendituresPage
