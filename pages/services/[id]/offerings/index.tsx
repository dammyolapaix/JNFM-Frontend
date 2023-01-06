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
> = ({ offeringsRes }) => {
  return (
    <Layout>
      <Offerings offeringsRes={offeringsRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  offeringsRes: IOfferingsRes
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
    },
  }
}

export default ChurchServiceOfferingsPage
