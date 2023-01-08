import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import { getExpenditures, IExpendituresRes } from '../../features/expenditure'

const ExpendituresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ expendituresRes }) => {
  return <Layout>ExpendituresPage</Layout>
}

export const getServerSideProps: GetServerSideProps<{
  expendituresRes: IExpendituresRes
}> = async () => {
  const expendituresRes: IExpendituresRes = await getExpenditures()

  return {
    props: {
      expendituresRes,
    },
  }
}
export default ExpendituresPage
