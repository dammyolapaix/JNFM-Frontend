import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  getWelfares,
  IWelfaresRes,
  Welfares,
} from '../../../features/income/welfare'

const WelfaresPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ welfaresRes }) => {
  return (
    <Layout>
      <Welfares welfaresRes={welfaresRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  welfaresRes: IWelfaresRes
}> = async () => {
  const welfaresRes: IWelfaresRes = await getWelfares()

  if (!welfaresRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      welfaresRes,
    },
  }
}
export default WelfaresPage
