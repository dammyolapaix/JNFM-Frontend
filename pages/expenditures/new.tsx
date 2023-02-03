import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../components'
import {
  getChurchServices,
  IChurchServicesRes,
} from '../../features/churchService'
import {
  ExpenditureInputForm,
  resetExpenditure,
} from '../../features/expenditure'
import {
  getExpenditureCategories,
  IExpenditureCategoriesRes,
} from '../../features/expenditure/ExpenditureCategory'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewExpenditurePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  churchServicesRes: { churchServices },
  expenditureCategoriesRes: { expenditureCategories },
}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    expenditureResCRUD: { expenditure },
  } = useAppSelector((state) => state.expenditure)

  useEffect(() => {
    if (isSuccess && expenditure !== null) {
      toast.success('Church Service added successfully')
      dispatch(resetExpenditure())
      router.push('/expenditures')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, expenditure])
  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

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
