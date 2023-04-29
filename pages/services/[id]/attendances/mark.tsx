import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout, QueryResult } from '../../../../components'
import {
  MarkAttendance,
  resetAttendance,
} from '../../../../features/attendance'
import { getMembersAction } from '../../../../features/member'
import { useAppDispatch, useAppSelector } from '../../../../hooks'

const MarkChurchServiceAttendancePage: NextPage = () => {
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
    dispatch(getMembersAction({}))
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

export default MarkChurchServiceAttendancePage
