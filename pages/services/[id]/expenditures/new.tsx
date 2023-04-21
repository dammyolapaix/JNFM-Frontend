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
import { IError, IParams } from '../../../../interfaces'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewChurchServiceExpenditurePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceId, expenditureCategoriesRes }) => {
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

      {expenditureCategoriesRes &&
        churchServiceId &&
        expenditureCategoriesRes.expenditureCategories && (
          <ExpenditureInputForm
            churchServiceId={churchServiceId}
            expenditureCategories={
              expenditureCategoriesRes.expenditureCategories
            }
          />
        )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expenditureCategoriesRes?: IExpenditureCategoriesRes
  churchServiceId?: IChurchService['_id']
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

  const expenditureCategoriesRes: IExpenditureCategoriesRes =
    await getExpenditureCategories(cookie)

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
