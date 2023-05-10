import React, { FC } from 'react'
import { IAttendancesRes } from '../../attendance'
import { NoRecordFound } from '../../../components'
import ChurchServiceAttendanceMembersTable from './ChurchServiceAttendanceMembersTable'
import ChurchServiceAttendanceMembersGraph from './ChurchServiceAttendanceMembersGraph'
import IChurchService from '../churchService.interfaces'

const ChurchServiceAttendances: FC<{
  attendancesRes: IAttendancesRes
  churchService: IChurchService
}> = ({ attendancesRes: { count, attendances }, churchService }) => {
  return (
    <section>
      {count > 0 ? (
        <>
          {/* 
           ** Overview **
            1. List all the cell and total number of member attendance
            2. Total Offering
            3. First Offering
            4. Second Offering
            5. Total Expenditure
            6. Category of expenditure / how much for each
        */}

          {/* Graph */}
          <ChurchServiceAttendanceMembersGraph churchService={churchService} />

          <ChurchServiceAttendanceMembersTable attendances={attendances} />
        </>
      ) : (
        <NoRecordFound cta="No Attendance Found" />
      )}
    </section>
  )
}

export default ChurchServiceAttendances
