import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import {
  getOfferings,
  IOfferingsRes,
  Offerings,
} from '../../../../features/churchService/offering'
import { IParams } from '../../../../interfaces'

const ChurchServiceOfferingsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ offeringsRes, churchServiceId }) => {
  return (
    <Layout>
      {offeringsRes && churchServiceId && (
        <Offerings
          offeringsRes={offeringsRes}
          churchServiceId={churchServiceId}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  offeringsRes?: IOfferingsRes
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

  const offeringsRes = await getOfferings(churchServiceId, cookie)

  if (!offeringsRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      offeringsRes,
      churchServiceId,
    },
  }
}

export default ChurchServiceOfferingsPage
