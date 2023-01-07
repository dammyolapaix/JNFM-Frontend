import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import { OfferingInputForm } from '../../../../features/churchService/offering'
import {
  getOfferingTypes,
  IOfferingTypesRes,
} from '../../../../features/churchService/offering/offeringType'

const NewOfferingPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ offeringTypesRes: { offeringTypes } }) => {
  return (
    <Layout>
      <OfferingInputForm offeringTypes={offeringTypes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  offeringTypesRes: IOfferingTypesRes
}> = async () => {
  const offeringTypesRes = await getOfferingTypes()

  if (!offeringTypesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      offeringTypesRes,
    },
  }
}

export default NewOfferingPage
