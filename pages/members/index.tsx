import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React from 'react'
import { Layout, QueryResult } from '../../components'
import { getMembers, IMembersRes, Members } from '../../features/member'
import { useAppSelector } from '../../hooks'

const MembersPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ membersRes }) => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    membersRes: membersResQuery,
  } = useAppSelector((state) => state.member)

  return (
    <Layout>
      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>
      <Members
        membersRes={isSuccess ? membersResQuery : membersRes}
        membersResQueryCountIsZero={isSuccess && membersResQuery.count === 0}
      />
    </Layout>
  )
}

export default MembersPage

export const getServerSideProps: GetServerSideProps<{
  membersRes: IMembersRes
}> = async () => {
  const membersRes: IMembersRes = await getMembers()

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
