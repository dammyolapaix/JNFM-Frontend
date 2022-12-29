// Importing Interfaces
import IDepartment, {
  IBaseDepartment,
  IDepartmentRes,
  IDepartmentsRes,
  IDepartmentInitialState,
  IDepartmentEditReq,
  IDepartmentMemberReq,
} from './department.interfaces'

// Importing Components
import DepartmentDetails from './components/DepartmentDetails'
import DepartmentInputForm from './components/DepartmentInputForm'
import DepartmentItem from './components/DepartmentItem'
import Departments from './components/Departments'
import DepartmentAddMemberItem from './components/DepartmentAddMemberItem'
import DepartmentAddMember from './components/DepartmentAddMember'

// Importing Services
import {
  getDepartments,
  getSingleDepartmentById,
  addDepartment,
  editDepartment,
  addMemberToDepartment,
  removeMemberFromDepartment,
} from './department.services'

// Importing Actions
import {
  addDepartmentAction,
  editDepartmentAction,
  addMemberToDepartmentAction,
  removeMemberFromDepartmentAction,
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
  IDepartmentEditReq,
  IDepartmentMemberReq,
}

// Exporting components
export {
  Departments,
  DepartmentItem,
  DepartmentDetails,
  DepartmentInputForm,
  DepartmentAddMember,
  DepartmentAddMemberItem,
}

// Exporting Services
export {
  getDepartments,
  getSingleDepartmentById,
  addDepartment,
  editDepartment,
  addMemberToDepartment,
  removeMemberFromDepartment,
}

// Exporting Actions
export {
  addDepartmentAction,
  editDepartmentAction,
  addMemberToDepartmentAction,
  removeMemberFromDepartmentAction,
  // getDepartmentsAction
}

// Exporting Slice
export { departmentReducers, resetDepartment }
