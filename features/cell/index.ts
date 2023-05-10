// Importing Interfaces
import ICell, {
  IBaseCell,
  ICellRes,
  ICellsRes,
  ICellInitialState,
  ICellEditReq,
  ICellMemberReq,
} from './cell.interfaces'

// Importing Components
import CellDetails from './components/CellDetails'
import CellInputForm from './components/CellInputForm'
import CellItem from './components/CellItem'
import Cells from './components/Cells'

// CellDetailsMembers Components
import CellAddMemberItem from './components/member/CellAddMemberItem'
import CellAddMember from './components/member/CellAddMember'
import CellDetailsMembers from './components/member/CellDetailsMembers'
import CellMembers from './components/member/CellMembers'
import CellMemberItem from './components/member/CellMemberItem'
import CellMembersOverview from './components/member/CellMembersOverview'
import CellMembersTable from './components/member/CellMembersTable'
import CellMembersGraph from './components/member/CellMembersGraph'

// CellDetailsAttendances Components
import CellDetailsAttendances from './components/attendance/CellDetailsAttendances'
import CellAttendances from './components/attendance/CellAttendances'
import CellAttendancesTable from './components/attendance/CellAttendancesTable'
import CellAttendanceItem from './components/attendance/CellAttendanceItem'
import CellSingleChurchServiveAttendances from './components/attendance/CellSingleChurchServiveAttendances'
import CellAttendancesGraph from './components/attendance/CellAttendancesGraph'

// Importing Services
import {
  getCells,
  getSingleCellById,
  addCell,
  editCell,
  addMemberToCell,
  // removeMemberFromCell,
} from './cell.services'

// Importing Actions
import {
  addCellAction,
  editCellAction,
  addMemberToCellAction,
  // removeMemberFromCellAction,
  getCellsAction,
} from './cell.actions'

// Importing Slice
import cellReducers, { resetCell } from './cell.slices'

// Exporting Interfaces
export type {
  ICell,
  IBaseCell,
  ICellRes,
  ICellsRes,
  ICellInitialState,
  ICellEditReq,
  ICellMemberReq,
}

// Exporting components
export {
  Cells,
  CellItem,
  CellDetails,
  CellInputForm,
  CellAddMember,
  CellAddMemberItem,
  CellDetailsMembers,
  CellMembers,
  CellMemberItem,
  CellMembersOverview,
  CellMembersTable,
  CellMembersGraph,
  CellDetailsAttendances,
  CellAttendances,
  CellAttendancesTable,
  CellAttendanceItem,
  CellSingleChurchServiveAttendances,
  CellAttendancesGraph,
}

// Exporting Services
export {
  getCells,
  getSingleCellById,
  addCell,
  editCell,
  addMemberToCell,
  // removeMemberFromCell,
}

// Exporting Actions
export {
  addCellAction,
  editCellAction,
  addMemberToCellAction,
  // removeMemberFromCellAction,
  getCellsAction,
}

// Exporting Slice
export { cellReducers, resetCell }
