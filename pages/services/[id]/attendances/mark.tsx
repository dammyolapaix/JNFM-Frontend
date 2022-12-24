import { useEffect } from 'react'
import { InferGetServerSidePropsType, NextPage } from 'next'
import { Layout, QueryResult } from '../../../../components'
import {
  MarkAttendance,
  resetAttendance,
} from '../../../../features/attendance'
import { getMembers } from '../../../../features/member'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MarkChurchServiceAttendancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ members }) => {
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    attendanceResCRUD: { attendance },
  } = useAppSelector((state) => state.attendance)

  useEffect(() => {
    if (isSuccess && attendance !== null) {
      toast.success('Member marked as present')
      dispatch(resetAttendance())
    }
  }, [dispatch, isLoading, isError, error, isSuccess, attendance])
  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      <MarkAttendance members={members} />
    </Layout>
  )
}

export default MarkChurchServiceAttendancePage

export const getServerSideProps = async () => {
  const {
    data: { members },
  } = await getMembers()

  if (!members) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      members,
    },
  }
}
