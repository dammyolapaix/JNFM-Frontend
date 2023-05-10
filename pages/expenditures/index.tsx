import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  ExpendituresPage as ExpendituresPageComponent,
  getExpenditures,
  IExpendituresRes,
} from '../../features/expenditure'
import { IError } from '../../interfaces'
import { AxiosError } from 'axios'
import cookie from 'cookie'
import {
  IExpenditureCategoriesRes,
  getExpenditureCategories,
} from '../../features/expenditure/ExpenditureCategory'

const ExpendituresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ expendituresRes, expenditureCategoriesRes, errorMessage }) => {
  return (
    <Layout>
      {errorMessage ? (
        <div className="text-center text-red-600">{errorMessage}</div>
      ) : (
        expendituresRes &&
        expenditureCategoriesRes && (
          <ExpendituresPageComponent
            expendituresRes={expendituresRes}
            expenditureCategoriesRes={expenditureCategoriesRes}
          />
        )
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  expendituresRes?: IExpendituresRes
  expenditureCategoriesRes?: IExpenditureCategoriesRes
  errorMessage?: string
}> = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie

  try {
    const expendituresRes: IExpendituresRes = await getExpenditures(
      undefined,
      cookieHeaders
    )

    const expenditureCategoriesRes: IExpenditureCategoriesRes =
      await getExpenditureCategories(cookieHeaders)

    if (!expendituresRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        expendituresRes,
        expenditureCategoriesRes,
      },
    }
  } catch (error) {
    // Handle the error and return a custom error page or message
    if (!cookieHeaders) {
      res.writeHead(302, { Location: '/login' })
      res.end()
      return {
        props: {},
      }
    } else {
      const { token } = cookie.parse(cookieHeaders)

      if (!token) {
        res.writeHead(302, { Location: '/login' })
        res.end()
        return {
          props: {},
        }
      }
    }

    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = `An error occurred ${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}
export default ExpendituresPage
