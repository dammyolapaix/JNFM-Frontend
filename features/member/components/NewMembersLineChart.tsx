import React, { FC } from 'react'
import { IMember, useGetMembersByMonthJoined } from '../'
import { AppLineChart, months } from '../../../utils'

const NewMembersLineChart: FC<{ members: IMember[] }> = ({ members }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: 'New Members',
        data: useGetMembersByMonthJoined(members),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return <AppLineChart titleText="New Members per month" data={data} />
}

export default NewMembersLineChart
