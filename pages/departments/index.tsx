import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  Departments,
  getDepartments,
  IDepartmentsRes,
} from '../../features/department'
import { IError } from '../../interfaces'

const DepartmentsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departmentsRes }) => {
  return (
    <Layout>
      {departmentsRes && <Departments departmentsRes={departmentsRes} />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  departmentsRes?: IDepartmentsRes
  errorRes?: IError
}> = async ({ req, res }) => {
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

  const departmentsRes: IDepartmentsRes = await getDepartments(cookie)

  if (!departmentsRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      departmentsRes,
    },
  }
}

export default DepartmentsPage
