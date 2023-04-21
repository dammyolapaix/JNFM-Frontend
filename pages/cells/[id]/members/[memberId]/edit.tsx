import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Layout, QueryResult } from '../../../../../components'
import {
  getSingleMemberById,
  IMemberRes,
  MemberInputForm,
  resetMember,
} from '../../../../../features/member'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import { IError } from '../../../../../interfaces'

const EditCellMemberPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ memberRes }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    memberResCRUD: { member: updatedMember },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (isSuccess && updatedMember !== null) {
      toast.success('Member updated successfully')
      dispatch(resetMember())
      router.back()
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, updatedMember])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {memberRes &&
        memberRes.member &&
        typeof memberRes.member.cell !== 'undefined' &&
        typeof memberRes.member.cell.cell === 'object' && (
          <MemberInputForm
            member={memberRes?.member}
            cellName={memberRes.member.cell.cell.name}
            cellId={memberRes.member.cell?.cell._id}
          />
        )}
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  memberId: string
}

export const getServerSideProps: GetServerSideProps<{
  memberRes?: IMemberRes
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

  const { memberId } = params as IParams

  const memberRes: IMemberRes = await getSingleMemberById(memberId, cookie)

  if (!memberRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { memberRes },
  }
}

export default EditCellMemberPage
