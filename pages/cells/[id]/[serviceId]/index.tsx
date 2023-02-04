import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout, QueryResult } from '../../../../components'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getMembersAction } from '../../../../features/member'
import {
  MarkAttendance,
  resetAttendance,
} from '../../../../features/attendance'

const NewCellServiceAttendancePage: NextPage = () => {
  const { query } = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading: memberIsLoading,
    isError: memberIsError,
    error: memberError,
    isSuccess: memberIsSucces,
    membersRes: { members },
  } = useAppSelector((state) => state.member)

  console.log(members)

  const {
    isLoading: attendanceIsLoading,
    isError: attendanceIsError,
    error: attendanceError,
    isSuccess: attendanceIsSuccess,
    attendanceResCRUD: { attendance },
  } = useAppSelector((state) => state.attendance)

  useEffect(() => {
    if (query && query.id && typeof query.id === 'string') {
      dispatch(getMembersAction({ 'cell.cell': query.id }))
    }
    if (attendanceIsSuccess && attendance !== null) {
      dispatch(resetAttendance())
    }
  }, [
    dispatch,
    attendanceIsLoading,
    attendanceIsError,
    attendanceError,
    attendanceIsSuccess,
    attendance,
  ])

  return (
    <Layout>
      <QueryResult
        isLoading={attendanceIsLoading}
        isSuccess={attendanceIsSuccess}
        isError={attendanceIsError}
        error={attendanceError}
      ></QueryResult>

      <QueryResult
        isLoading={memberIsLoading}
        isSuccess={memberIsSucces}
        isError={memberIsError}
        error={memberError}
      >
        {query && query.serviceId && typeof query.serviceId === 'string' && (
          <MarkAttendance members={members} churchServiceId={query.serviceId} />
        )}
      </QueryResult>
    </Layout>
  )
}

export default NewCellServiceAttendancePage
