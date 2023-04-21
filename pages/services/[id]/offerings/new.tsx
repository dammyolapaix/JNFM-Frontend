import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../../../components'
import { OfferingInputForm } from '../../../../features/churchService/offering'
import {
  getOfferingTypes,
  IOfferingTypesRes,
} from '../../../../features/churchService/offering/offeringType'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { IParams } from '../../../../interfaces'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { resetOffering } from '../../../../features/churchService'

const NewOfferingPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceId, offeringTypesRes }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    offeringResCRUD: { offering },
  } = useAppSelector((state) => state.churchService)

  useEffect(() => {
    if (isSuccess && offering !== null) {
      toast.success('Offering added successfully')
      dispatch(resetOffering())
      router.back()
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, offering])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {offeringTypesRes &&
        offeringTypesRes.offeringTypes &&
        churchServiceId && (
          <OfferingInputForm
            offeringTypes={offeringTypesRes.offeringTypes}
            churchServiceId={churchServiceId}
          />
        )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  offeringTypesRes?: IOfferingTypesRes
  churchServiceId?: string
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

  const offeringTypesRes = await getOfferingTypes(cookie)

  if (!offeringTypesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      offeringTypesRes,
      churchServiceId,
    },
  }
}

export default NewOfferingPage
