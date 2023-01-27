import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../components'
import {
  Departments,
  getDepartments,
  IDepartmentsRes,
} from '../../features/department'

const DepartmentsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departmentsRes }) => {
  return (
    <Layout>
      <Departments departmentsRes={departmentsRes} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  departmentsRes: IDepartmentsRes
}> = async () => {
  const departmentsRes: IDepartmentsRes = await getDepartments()

  return {
    props: {
      departmentsRes,
    },
  }
}

export default DepartmentsPage
