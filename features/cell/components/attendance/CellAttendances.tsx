import React, { FC } from 'react'
import { IChurchServicesRes } from '../../../churchService'
import { NoRecordFound } from '../../../../components'
import CellAttendancesTable from './CellAttendancesTable'

const CellAttendances: FC<{ churchServicesRes: IChurchServicesRes }> = ({
  churchServicesRes: { churchServices, count },
}) => {
  return (
    <>
      {count > 0 ? (
        <>
          <CellAttendancesTable churchServices={churchServices} />
        </>
      ) : (
        <NoRecordFound message="No Church Service Found" />
      )}
    </>
  )
}

export default CellAttendances
