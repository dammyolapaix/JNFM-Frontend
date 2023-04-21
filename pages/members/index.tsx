import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { ErrorMessage, Layout, QueryResult } from '../../components'
import { getMembers, IMembersRes, Members } from '../../features/member'
import { useAppSelector } from '../../hooks'
import { AxiosError } from 'axios'
import cookie from 'cookie'
import { IError } from '../../interfaces'

const MembersPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ membersRes, errorMessage }) => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    membersRes: membersResQuery,
  } = useAppSelector((state) => state.member)

  return (
    <Layout>
      {errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : membersRes ? (
        <>
          <QueryResult
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            error={error?.error}
          ></QueryResult>
          {membersRes && (
            <Members
              membersRes={isSuccess ? membersResQuery : membersRes}
              membersResQueryCountIsZero={
                isSuccess && membersResQuery.count === 0
              }
            />
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  membersRes?: IMembersRes
  errorMessage?: string
}> = async ({ req, res }) => {
  const cookieHeaders = req.headers.cookie
  try {
    const membersRes: IMembersRes = await getMembers(undefined, cookieHeaders)

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
  } catch (error) {
    // Handle the error and return a custom error page or message
    if (!cookieHeaders) {
      res.writeHead(302, { Location: '/login' })
      res.end()
      return {
        props: {},
      }
    } else {
      const { token } = cookie.parse(cookieHeaders)

      if (!token) {
        res.writeHead(302, { Location: '/login' })
        res.end()
        return {
          props: {},
        }
      }
    }

    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = `An error occurred ${errorMessageRes.error}`
    return { props: { errorMessage } }
  }
}

export default MembersPage
