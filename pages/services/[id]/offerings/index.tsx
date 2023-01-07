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
      <Offerings
        offeringsRes={offeringsRes}
        churchServiceId={churchServiceId}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  offeringsRes: IOfferingsRes
  churchServiceId: string
}> = async ({ params }) => {
  const { id: churchServiceId } = params as IParams

  const offeringsRes = await getOfferings(churchServiceId)

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
