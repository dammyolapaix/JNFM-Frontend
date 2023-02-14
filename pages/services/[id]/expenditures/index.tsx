import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import {
  Expenditures,
  getExpenditures,
  IExpendituresRes,
} from '../../../../features/expenditure'
import { IParams } from '../../../../interfaces'

const ChurchServiceExpendituresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceId, expendituresRes }) => {
  return (
    <Layout>
      <Expenditures
        expendituresRes={expendituresRes}
        churchServiceId={churchServiceId}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expendituresRes: IExpendituresRes
  churchServiceId: string
}> = async ({ params }) => {
  const { id: churchServiceId } = params as IParams

  const expendituresRes: IExpendituresRes = await getExpenditures(
    churchServiceId
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
