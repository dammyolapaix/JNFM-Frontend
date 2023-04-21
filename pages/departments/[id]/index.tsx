import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../components'
import {
  DepartmentDetails,
  getSingleDepartmentById,
  IDepartmentRes,
} from '../../../features/department'
import { IError, IParams } from '../../../interfaces'

const SingleDepartmentPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departmentRes }) => {
  return (
    <Layout>
      {departmentRes && departmentRes.department && (
        <DepartmentDetails department={departmentRes.department} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  departmentRes?: IDepartmentRes
  errorRes?: IError
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

  const { id } = params as IParams

  const departmentRes: IDepartmentRes = await getSingleDepartmentById(
    id,
    cookie
  )

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
