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
// import CellAddMemberItem from './components/CellAddMemberItem'
// import CellAddMember from './components/CellAddMember'

// Importing Services
import {
  getCells,
  getSingleCellById,
  addCell,
  editCell,
  // addMemberToCell,
  // removeMemberFromCell,
} from './cell.services'

// Importing Actions
import {
  addCellAction,
  editCellAction,
  // addMemberToCellAction,
  // removeMemberFromCellAction,
  // getCellsAction,
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
  // CellAddMember,
  // CellAddMemberItem,
}

// Exporting Services
export {
  getCells,
  getSingleCellById,
  addCell,
  editCell,
  // addMemberToCell,
  // removeMemberFromCell,
}

// Exporting Actions
export {
  addCellAction,
  editCellAction,
  // addMemberToCellAction,
  // removeMemberFromCellAction,
  // getCellsAction
}

// Exporting Slice
export { cellReducers, resetCell }
