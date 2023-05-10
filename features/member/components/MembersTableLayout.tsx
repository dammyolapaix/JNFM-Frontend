import { useState, SyntheticEvent, FC } from 'react'
import Link from 'next/link'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import { utils, writeFile } from 'xlsx'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const MembersTableLayout: FC<{
  membersRes?: IMembersRes
  membersResQueryCountIsZero?: boolean
  membersData?: IMember[]
  href?: string
}> = ({ membersRes, membersData, href, membersResQueryCountIsZero }) => {
  const [value, setValue] = useState(0)
  const { route } = useRouter()

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

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

  const months: string[] = []
  const joinedCount: number[] = []

  membersRes?.members.forEach((member) => {
    if (member && member.cell && member.cell.dateJoined) {
      const month = new Date(member?.cell?.dateJoined).toLocaleString(
        'default',
        {
          month: 'short',
        }
      )

      // Checking if the month is not in the months array
      if (months.indexOf(month) === -1) {
        // Add the month to the months array
        months.push(month)

        // set the joinedCount of that month to one
        joinedCount.push(1)
      } else {
        // If month is already in the months array, increament the joinedCount
        joinedCount[months.indexOf(month)]++
      }
    }
  })

  const data2 = {
    labels: months,
    datasets: [
      {
        label: 'Members joined by month',
        data: joinedCount,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const generateReport = () => {
    if (membersRes) {
      const rows = membersRes.members.map((row) => ({
        'Full Name': row.fullName as String,
        Gender: row.gender?.charAt(0),
      }))

      console.log(rows)

      const worksheet = utils.json_to_sheet(rows)

      const workbook = utils.book_new()
      utils.book_append_sheet(workbook, worksheet, 'Bio Data')
      utils.book_append_sheet(workbook, worksheet, 'Bio Data 2')

      worksheet['!cols'] = [{ wch: 10 }] // set column A width to 10 characters
      const max_width = rows.reduce(
        (w, r) => Math.max(w, r['Full Name'].length),
        10
      )
      worksheet['!cols'] = [{ wch: max_width }]

      writeFile(workbook, 'Members Report.xlsx', { compression: true })
    }
  }

  return (
    <section>
      {typeof membersResQueryCountIsZero !== 'undefined' &&
      !membersResQueryCountIsZero &&
      membersRes?.count === 0 ? (
        <NoRecordFound
          message="Oops, No Member Found"
          cta="Add New Member"
          href={route === '/cells/[id]' && href ? `${href}/members/new` : '#'}
        />
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
              <div onClick={generateReport}>Report</div>
              <div className="mr-1">
                <AdvancedSearchDrawer>
                  <MemberAdvancedSearchInputForm />
                </AdvancedSearchDrawer>
              </div>
              {route === '/cells/[id]' && (
                <div className="ml-1">
                  <Link
                    href={href ? `${href}/members/new` : `/members/new`}
                    className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
                  >
                    <MdAdd />
                    <div>New Member</div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons={true}
                allowScrollButtonsMobile
                aria-label="basic tabs example"
              >
                <Tab label={`Table Data`} {...a11yProps(0)} />
                <Tab label="Graph Data" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {membersResQueryCountIsZero ? (
                <NoRecordFound message="Oops, No member found for this filter, filter for something else" />
              ) : (
                <>
                  {membersRes && <MembersTable members={membersRes.members} />}

                  {membersData && <MembersTable members={membersData} />}
                </>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center items-center">
                  <Bar options={options} data={data} />
                </div>
                <div className="flex justify-center items-center">
                  <Line options={options} data={data2} />
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      )}
    </section>
  )
}

export default MembersTableLayout
