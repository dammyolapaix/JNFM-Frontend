import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components'
import { getMembers, IMembersRes, Members } from '../../features/member'

const MembersPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ membersRes }) => {
  return (
    <Layout>
      <Members membersRes={membersRes} />
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
