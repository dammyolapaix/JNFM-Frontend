// Importing Interfaces
import IAttendance, {
  IBaseAttendance,
  IAttendanceRes,
  IAttendancesRes,
} from './attendance.interfaces'

// Importing Components
import Attendances from './components/Attendances'
import AttendanceItem from './components/MarkAttendanceItem'
import MarkAttendance from './components/MarkAttendance'

// Importing Services
import { getAttendances } from './attendance.services'
import MarkAttendanceItem from './components/MarkAttendanceItem'

// Importing Actions

// Importing Slice

// Exporting Interfaces
export type { IAttendance, IBaseAttendance, IAttendanceRes, IAttendancesRes }

// Exporting components
export { Attendances, AttendanceItem, MarkAttendance, MarkAttendanceItem }

// Exporting Services
export { getAttendances }

// Exporting Actions
export {}

// Exporting Slice
export {}
