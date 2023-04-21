import type { GetServerSideProps, NextPage } from 'next'
import { Layout } from '../components'
import cookie from 'cookie'

const Home: NextPage = () => {
  return (
    <Layout>
      <h3 className="text-4xl font-bold">Dashboard</h3>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie

  if (!cookieHeaders) {
    res.writeHead(302, { Location: '/login' })
    res.end()
    return {
      props: {
        success: false,
        error: 'Access Denied',
      },
    }
  } else {
    const { token } = cookie.parse(cookieHeaders)

    if (!token) {
      res.writeHead(302, { Location: '/login' })
      res.end()
      return {
        props: {
          success: false,
          error: 'Access Denied',
        },
      }
    }
  }

  return {
    props: {},
  }
}

export default Home
