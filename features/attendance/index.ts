// Importing Interfaces
import IAttendance, {
  IBaseAttendance,
  IAttendanceRes,
  IAttendancesRes,
} from './attendance.interfaces'

// Importing Components
import Attendances from './components/Attendances'

// Importing Services
import { getAttendances } from './attendance.services'

// Importing Actions

// Importing Slice

// Exporting Interfaces
export type { IAttendance, IBaseAttendance, IAttendanceRes, IAttendancesRes }

// Exporting components
export { Attendances }

// Exporting Services
export { getAttendances }

// Exporting Actions
export {}

// Exporting Slice
export {}
