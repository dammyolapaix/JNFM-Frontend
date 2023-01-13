import { NextPage } from 'next'
import { Layout } from '../../../components'
import { WelfareInputForm } from '../../../features/income/welfare'

const AddNewWelfarePage: NextPage = () => {
  return (
    <Layout>
      <WelfareInputForm />
    </Layout>
  )
}

export default AddNewWelfarePage
