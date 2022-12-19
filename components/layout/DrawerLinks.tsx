import Link from 'next/link'
import Divider from '@mui/material/Divider'
import { Dashboard as DashboardIcon } from '@mui/icons-material'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'

export default function DrawerLinks() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </a>
          </Link>
          <Link href="/members" legacyBehavior>
            <a className="flex items-center">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Members" />
            </a>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  )
}
