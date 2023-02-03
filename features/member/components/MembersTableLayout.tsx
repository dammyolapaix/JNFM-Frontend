import React, { FC } from 'react'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import IMember, { IMembersRes } from '../member.interfaces'
import {
  MemberAdvancedSearchInputForm,
  MembersStats,
  MembersTable,
} from '../index'
import { AdvancedSearchDrawer, NoRecordFound } from '../../../components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useRouter } from 'next/router'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const MembersTableLayout: FC<{
  membersRes?: IMembersRes
  membersResQueryCount?: boolean
  membersData?: IMember[]
  href?: string
}> = ({ membersRes, membersData, href, membersResQueryCount }) => {
  const { route } = useRouter()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  }

  // const labels = membersRes?.members.map((member) => member.gender)
  const labels = ['Male', 'Female']

  const memberData = [
    membersRes?.members.filter((member) => member.gender === 'Male').length,
    membersRes?.members.filter((member) => member.gender === 'Female').length,
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Gender',
        data: memberData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return (
    <section>
      {typeof membersResQueryCount !== 'undefined' &&
      !membersResQueryCount &&
      membersRes?.count === 0 ? (
        <NoRecordFound message="Oops, No Member Found, Add A New Member" />
      ) : (
        <div className="">
          {membersRes && <MembersStats members={membersRes.members} />}

          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-2xl mb-5 text-secondary">
              Members (
              {membersRes
                ? membersRes.count
                : membersData
                ? membersData.length
                : '0'}
              )
            </h1>
            <div className="flex">
              <div className="mr-1">
                <AdvancedSearchDrawer>
                  <MemberAdvancedSearchInputForm />
                </AdvancedSearchDrawer>
              </div>
              {route === '/cells/[id]' && (
                <div className="ml-1">
                  <Link
                    href={href ? href : `/members/new`}
                    className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
                  >
                    <MdAdd />
                    <div>New Member</div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {membersResQueryCount ? (
            <NoRecordFound message="Oops, No member found for this filter, filter for something else" />
          ) : (
            <>
              {membersRes && <MembersTable members={membersRes.members} />}

              {membersData && <MembersTable members={membersData} />}
            </>
          )}
          <Bar options={options} data={data} />
        </div>
      )}
    </section>
  )
}

export default MembersTableLayout
