import { FC, ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { BiFilterAlt } from 'react-icons/bi'

type Anchor = 'right'

const AdvancedSearchDrawer: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      <div className="p-5">
        <div className="text-center font-bold text-2xl text-primary mb-10">
          Advanced Search
        </div>
        {children}
      </div>
    </Box>
  )

  return (
    <>
      <div
        onClick={toggleDrawer('right', true)}
        // className="cursor-pointer bg-tertiary hover:bg-primary text-white rounded-md py-2 px-4 flex items-center"
        className="flex items-center"
      >
        <BiFilterAlt className="cursor-pointer text-tertiary hover:text-primary text-3xl font-bold" />
        {/* <FaSearchPlus /> */}
        {/* <div className="pl-1">Filter</div> */}
      </div>

      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list()}
      </Drawer>
    </>
  )
}

export default AdvancedSearchDrawer
