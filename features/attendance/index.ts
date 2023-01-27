// Importing Interfaces
import IAttendance, {
  IBaseAttendance,
  IAttendanceRes,
  IAttendancesRes,
  IAttendanceInitialState,
} from './attendance.interfaces'

// Importing Components
import Attendances from './components/Attendances'
import AttendanceItem from './components/MarkAttendanceItem'
import MarkAttendance from './components/MarkAttendance'
import MarkAttendanceItem from './components/MarkAttendanceItem'

// Importing Services
import {
  getAttendances,
  takeAttendance,
  markAsAbsent,
} from './attendance.services'

// Importing Actions
import { takeAttendanceAction, markAsAbsentAction } from './attendance.actions'

// Importing Slice
import attendanceReducers, { resetAttendance } from './attendance.slices'

// Exporting Interfaces
export type {
  IAttendance,
  IBaseAttendance,
  IAttendanceRes,
  IAttendancesRes,
  IAttendanceInitialState,
}

// Exporting components
export { Attendances, AttendanceItem, MarkAttendance, MarkAttendanceItem }

// Exporting Services
export { getAttendances, takeAttendance, markAsAbsent }

// Exporting Actions
export { takeAttendanceAction, markAsAbsentAction }

// Exporting Slice
export { attendanceReducers, resetAttendance }
