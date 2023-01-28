import { useState, SyntheticEvent, FC } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { IAttendance } from '../../attendance'
import MemberAttendances from './MemberAttendances'

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

const MemberDetailsOthers: FC<{ attendances?: IAttendance[] }> = ({
  attendances,
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <section className="shadow-md p-3 rounded-md mt-5">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={true}
            allowScrollButtonsMobile
            aria-label="basic tabs example"
          >
            <Tab
              label={`Attendances (${attendances ? attendances.length : '0'})`}
              {...a11yProps(0)}
            />
            <Tab label="Welfares" {...a11yProps(1)} />
            <Tab label="Tithes" {...a11yProps(2)} />
            <Tab label="Special Contributions" {...a11yProps(3)} />
            <Tab label="Cell" {...a11yProps(4)} />
            <Tab label="Departments" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {attendances && <MemberAttendances attendances={attendances} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Welfares
        </TabPanel>
        <TabPanel value={value} index={2}>
          Tithes
        </TabPanel>
        <TabPanel value={value} index={3}>
          Special Contributions
        </TabPanel>
        <TabPanel value={value} index={4}>
          Cell
        </TabPanel>
        <TabPanel value={value} index={5}>
          Departments
        </TabPanel>
      </Box>
    </section>
  )
}

export default MemberDetailsOthers
