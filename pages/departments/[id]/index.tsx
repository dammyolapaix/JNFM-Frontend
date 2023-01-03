import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Layout } from '../../../components'
import {
  DepartmentDetails,
  getSingleDepartmentById,
  IDepartmentRes,
} from '../../../features/department'

const SingleDepartmentPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departmentRes: { department } }) => {
  return (
    <Layout>
      {department && department !== null && (
        <DepartmentDetails department={department} />
      )}
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps<{
  departmentRes: IDepartmentRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const departmentRes: IDepartmentRes = await getSingleDepartmentById(id)

  if (!departmentRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { departmentRes },
  }
}

export default SingleDepartmentPage
