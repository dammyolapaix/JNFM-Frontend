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
import { IError } from '../../interfaces'

const NewExpenditurePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServicesRes, expenditureCategoriesRes }) => {
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

      {churchServicesRes && expenditureCategoriesRes && (
        <ExpenditureInputForm
          churchServices={churchServicesRes.churchServices}
          expenditureCategories={expenditureCategoriesRes.expenditureCategories}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServicesRes?: IChurchServicesRes
  expenditureCategoriesRes?: IExpenditureCategoriesRes
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

  const churchServicesRes: IChurchServicesRes = await getChurchServices(cookie)

  const expenditureCategoriesRes: IExpenditureCategoriesRes =
    await getExpenditureCategories(cookie)

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
