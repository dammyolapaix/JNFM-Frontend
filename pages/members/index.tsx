import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React from 'react'
import { Layout, QueryResult } from '../../components'
import { getMembers, IMembersRes, Members } from '../../features/member'
import { useAppSelector } from '../../hooks'

const MembersPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ membersRes }) => {
  const [statusCode, setStatusCode] = useState(200)
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    membersRes: membersResQuery,
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (error && error.status && error.status === 401) {
      setStatusCode(error.status)
    }
  }, [error])

  useAuth(statusCode)

  return (
    <Layout>
      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>
      {membersRes && (
        <Members
          membersRes={isSuccess ? membersResQuery : membersRes}
          membersResQueryCountIsZero={isSuccess && membersResQuery.count === 0}
        />
      )}
    </Layout>
  )
}

export default MembersPage

interface IErrorRes {
  success: boolean
  error: string
}

export const getServerSideProps: GetServerSideProps<{
  membersRes?: IMembersRes
  errorRes?: IErrorRes
}> = async ({ req, res }) => {
  const cookie = req.headers.cookie

  if (!req.headers.cookie) {
    res.writeHead(302, { Location: '/login' })
    res.end()
    return {
      props: {
        success: false,
        error: 'Access Denied',
      },
    }
  }

  const membersRes: IMembersRes = await getMembers(undefined, cookie)

  if (!membersRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      membersRes,
    },
  }
}
