import React from 'react'
import { Layout } from '../../../../components'
import {
  ExpenditureCategoryInputForm,
  IExpenditureCategoryRes,
  getExpenditureCategory,
} from '../../../../features/expenditure/ExpenditureCategory'
import { AxiosError } from 'axios'
import cookie from 'cookie'
import { IError } from '../../../../interfaces'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const ExpenditureCategoryEditPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ expenditureCategoryRes, errorMessage }) => {
  return (
    <Layout
      children={
        errorMessage ? (
          <div className="text-center text-red-600">{errorMessage}</div>
        ) : (
          expenditureCategoryRes &&
          expenditureCategoryRes.expenditureCategory !== null && (
            <ExpenditureCategoryInputForm
              expenditureCategory={expenditureCategoryRes.expenditureCategory}
            />
          )
        )
      }
    />
  )
}

interface IParams extends ParsedUrlQuery {
  categoryId: string
}

export const getServerSideProps: GetServerSideProps<{
  expenditureCategoryRes?: IExpenditureCategoryRes
  errorMessage?: string
}> = async ({ req, res, params }) => {
  const cookieHeaders = req.headers.cookie

  const { categoryId } = params as IParams

  try {
    const expenditureCategoryRes: IExpenditureCategoryRes =
      await getExpenditureCategory(categoryId, cookieHeaders)

    if (!expenditureCategoryRes) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        expenditureCategoryRes,
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

export default ExpenditureCategoryEditPage
