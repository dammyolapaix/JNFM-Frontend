import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../../components'
import { IChurchService } from '../../../../features/churchService'
import {
  ExpenditureInputForm,
  resetExpenditure,
} from '../../../../features/expenditure'
import {
  getExpenditureCategories,
  IExpenditureCategoriesRes,
} from '../../../../features/expenditure/ExpenditureCategory'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { IParams } from '../../../../interfaces'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewChurchServiceExpenditurePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  churchServiceId,
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
      toast.success('Expenditure added successfully')
      dispatch(resetExpenditure())
      router.push(`/services/${churchServiceId}/expenditures`)
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
        churchServiceId={churchServiceId}
        expenditureCategories={expenditureCategories}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expenditureCategoriesRes: IExpenditureCategoriesRes
  churchServiceId: IChurchService['_id']
}> = async ({ params }) => {
  const { id: churchServiceId } = params as IParams

  const expenditureCategoriesRes: IExpenditureCategoriesRes =
    await getExpenditureCategories()

  if (!expenditureCategoriesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      churchServiceId,
      expenditureCategoriesRes,
    },
  }
}

export default NewChurchServiceExpenditurePage
