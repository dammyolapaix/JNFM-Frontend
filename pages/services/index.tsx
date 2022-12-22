import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  ChurchServices,
  getChurchServices,
  IChurchServicesRes,
} from '../../features/churchService'

const ChurchServicesPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServicesRes }) => {
  return (
    <Layout>
      <ChurchServices churchServicesRes={churchServicesRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServicesRes: IChurchServicesRes
}> = async () => {
  const churchServicesRes = await getChurchServices()

  if (!churchServicesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      churchServicesRes,
    },
  }
}

export default ChurchServicesPage
