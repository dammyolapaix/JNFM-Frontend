import { InferGetServerSidePropsType, NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components'
import { getMembers, Members } from '../../features/member'

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

export const getServerSideProps = async () => {
  const { data: membersRes } = await getMembers()

  return {
    props: {
      membersRes,
    },
  }
}
