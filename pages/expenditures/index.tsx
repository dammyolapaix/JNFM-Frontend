import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  Expenditures,
  getExpenditures,
  IExpendituresRes,
} from '../../features/expenditure'

const ExpendituresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ expendituresRes }) => {
  return (
    <Layout>
      <Expenditures expendituresRes={expendituresRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expendituresRes: IExpendituresRes
}> = async () => {
  const expendituresRes: IExpendituresRes = await getExpenditures()

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
