import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  getChurchServices,
  IChurchServicesRes,
} from '../../features/churchService'
import { ExpenditureInputForm } from '../../features/expenditure'
import {
  getExpenditureCategories,
  IExpenditureCategoriesRes,
} from '../../features/expenditure/ExpenditureCategory'

const NewExpenditurePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  churchServicesRes: { churchServices },
  expenditureCategoriesRes: { expenditureCategories },
}) => {
  return (
    <Layout>
      <ExpenditureInputForm
        churchServices={churchServices}
        expenditureCategories={expenditureCategories}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServicesRes: IChurchServicesRes
  expenditureCategoriesRes: IExpenditureCategoriesRes
}> = async () => {
  const churchServicesRes: IChurchServicesRes = await getChurchServices()

  const expenditureCategoriesRes: IExpenditureCategoriesRes =
    await getExpenditureCategories()

  if (!churchServicesRes && !expenditureCategoriesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      churchServicesRes,
      expenditureCategoriesRes,
    },
  }
}

export default NewExpenditurePage
