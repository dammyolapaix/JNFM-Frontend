import React, { FC, useEffect } from 'react'
import { IChurchServicesRes } from '../../../churchService'
import { NoRecordFound, QueryResult } from '../../../../components'
import { CellAttendancesGraph, CellAttendancesTable } from '../../index'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getAttendancesAction } from '../../../attendance/attendance.actions'

const CellAttendances: FC<{ churchServicesRes: IChurchServicesRes }> = ({
  churchServicesRes: { churchServices, count },
}) => {
  const dispatch = useAppDispatch()

  const { isLoading, isError, error, isSuccess, attendancesRes } =
    useAppSelector((state) => state.attendance)

  useEffect(() => {
    dispatch(getAttendancesAction({}))
  }, [])

  return (
    <>
      {count > 0 ? (
        <>
          <CellAttendancesTable churchServices={churchServices} />
          <QueryResult
            children={<CellAttendancesGraph attendancesRes={attendancesRes} />}
            error={error}
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
        </>
      ) : (
        <NoRecordFound message="No Church Service Found" />
      )}
    </>
  )
}

export default CellAttendances
