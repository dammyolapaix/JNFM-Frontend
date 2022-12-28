// Importing Interfaces
import IDepartment, {
  IBaseDepartment,
  IDepartmentRes,
  IDepartmentsRes,
  IDepartmentInitialState,
} from './department.interfaces'

// Importing Components
import DepartmentDetails from './components/DepartmentDetails'
import DepartmentInputForm from './components/DepartmentInputForm'
import DepartmentItem from './components/DepartmentItem'
import Departments from './components/Departments'

// Importing Services
import {
  getDepartments,
  getSingleDepartmentById,
  addDepartment,
  //   editDepartment,
} from './department.services'

// Importing Actions
import {
  addDepartmentAction,
  // editDepartmentAction,
  // getDepartmentsAction,
} from './department.actions'

// Importing Slice
import departmentReducers, { resetDepartment } from './department.slices'

// Exporting Interfaces
export type {
  IDepartment,
  IBaseDepartment,
  IDepartmentRes,
  IDepartmentsRes,
  IDepartmentInitialState,
}

// Exporting components
export { Departments, DepartmentItem, DepartmentDetails, DepartmentInputForm }

// Exporting Services
export {
  getDepartments,
  getSingleDepartmentById,
  addDepartment,
  //   editDepartment,
}

// Exporting Actions
export {
  addDepartmentAction,
  // editDepartmentAction, getDepartmentsAction
}

// Exporting Slice
export { departmentReducers, resetDepartment }
