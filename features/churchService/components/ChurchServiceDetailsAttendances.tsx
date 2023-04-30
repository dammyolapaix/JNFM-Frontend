import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useRouter } from 'next/router'
import { getSingleChurchSeviceAttendancesAction } from '../../attendance'
import { QueryResult } from '../../../components'
import ChurchServiceAttendances from './ChurchServiceAttendances'

const ChurchServiceDetailsAttendances: FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { isLoading, isError, error, isSuccess, attendancesRes } =
    useAppSelector((state) => state.attendance)

  useEffect(() => {
    const churchServiceId = router.query.id as string
    dispatch(getSingleChurchSeviceAttendancesAction(churchServiceId))
  }, [router])

  return (
    <QueryResult
      children={<ChurchServiceAttendances attendancesRes={attendancesRes} />}
      error={error}
      isError={isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  )
}

export default ChurchServiceDetailsAttendances
