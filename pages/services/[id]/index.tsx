import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Layout } from '../../../components'
import {
  ChurchServiceDetails,
  getChurchServices,
  getSingleChurchServiceById,
  IChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
} from '../../../features/churchService'

const SingleChurchServicePage: NextPage<{
  churchServiceRes: IChurchServiceRes
}> = ({ churchServiceRes }) => {
  return (
    <Layout>
      <ChurchServiceDetails churchServiceRes={churchServiceRes} />
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { churchServices }: IChurchServicesRes = await getChurchServices()

  const paths = churchServices.map((churchService) => ({
    params: { id: churchService?._id },
  }))

  return { paths, fallback: false }
}

/**
 * Special thanks to Jame Wallis.
 * Due to his article, I was able to fix typescript's error below.
 * About how typescript (GetStaticProps) doesn't recognized the params "id" passed from GetStaticPaths
 * Here's the link to the article "https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript"
 */

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams // no longer causes error
  const churchServiceRes: IChurchServiceRes = await getSingleChurchServiceById(
    id
  )

  if (!churchServiceRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { churchServiceRes },
    revalidate: 1,
  }
}

export default SingleChurchServicePage
