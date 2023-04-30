import React, { FC } from 'react'
import { IAttendancesRes } from '../../attendance'
import { NoRecordFound } from '../../../components'
import ChurchServiceAttendanceMembersTable from './ChurchServiceAttendanceMembersTable'

const ChurchServiceAttendances: FC<{ attendancesRes: IAttendancesRes }> = ({
  attendancesRes: { count, attendances },
}) => {
  console.log(attendances)
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

          <ChurchServiceAttendanceMembersTable attendances={attendances} />
        </>
      ) : (
        <NoRecordFound cta="No Attendance Found" />
      )}
    </section>
  )
}

export default ChurchServiceAttendances
