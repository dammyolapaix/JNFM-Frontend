import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../../components'
import { ChurchSeriveInputForm } from '../../../features/churchService'
import {
  getChurchServiceTypes,
  IChurchServiceTypesRes,
} from '../../../features/churchService/churchServiceType'
import { TitheInputForm } from '../../../features/income/tithe'

const AddNewServicePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ churchServiceTypesRes: { churchServiceTypes } }) => {
  //   const router = useRouter()
  //   const dispatch = useAppDispatch()

  return (
    <Layout>
      <TitheInputForm />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServiceTypesRes: IChurchServiceTypesRes
}> = async () => {
  const churchServiceTypesRes = await getChurchServiceTypes()

  if (!churchServiceTypesRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      churchServiceTypesRes,
    },
  }
}

export default AddNewServicePage
