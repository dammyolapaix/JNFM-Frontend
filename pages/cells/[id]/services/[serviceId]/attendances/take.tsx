import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks'
import { getMembersAction } from '../../../../../../features/member'
import {
  MarkAttendance,
  resetAttendance,
} from '../../../../../../features/attendance'
import { Layout, QueryResult } from '../../../../../../components'
import { IParams } from '../../../../../../interfaces'
import cookie from 'cookie'

const SingleCellTakeAttendancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellId }) => {
  const dispatch = useAppDispatch()

  const {
    isLoading: memberIsLoading,
    isError: memberIsError,
    error: memberError,
    isSuccess: memberIsSucces,
    membersRes: { members },
  } = useAppSelector((state) => state.member)

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    attendanceResCRUD: { attendance },
  } = useAppSelector((state) => state.attendance)

  useEffect(() => {
    cellId && dispatch(getMembersAction({ 'cell.cell': cellId }))
    if (isSuccess && attendance !== null) {
      dispatch(resetAttendance())
    }
  }, [dispatch, isLoading, isError, error, isSuccess, attendance])
  return (
    <Layout>
      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error && error}
      ></QueryResult>

      <QueryResult
        isLoading={memberIsLoading}
        isSuccess={memberIsSucces}
        isError={memberIsError}
        error={memberError}
      >
        <MarkAttendance members={members} />
      </QueryResult>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellId?: string
}> = async ({ req, res, params }) => {
  const cookieHeaders = req.headers.cookie
  const { id: cellId } = params as IParams

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

  if (!cellId) {
    return {
      notFound: true,
    }
  }

  return {
    props: { cellId },
  }
}

export default SingleCellTakeAttendancePage
