// Importing Interfaces
import IMember, {
  IBaseMember,
  IMemberRes,
  IMembersRes,
  IMemberRequestQuery,
  IMemberInitialState,
  IMemberEditReq,
  IMemberQuery,
} from './member.interfaces'

// Importing Components
import MemberDetails from './components/MemberDetails'
import MemberInputForm from './components/MemberInputForm'
import MemberItem from './components/MemberItem'
import Members from './components/Members'
import MembersTable from './components/MembersTable'
import MembersTableLayout from './components/MembersTableLayout'
import MemberDetailsOthers from './components/MemberDetailsOthers'
import MemberAttendancesItem from './components/MemberAttendancesItem'
import MemberAttendances from './components/MemberAttendances'
import MemberDepartments from './components/MemberDepartments'
import MemberDepartmentItem from './components/MemberDepartmentItem'
import MemberWelfares from './components/MemberWelfares'
import MemberWelfareItem from './components/MemberWelfareItem'
import MemberTithes from './components/MemberTithes'
import MemberTitheItem from './components/MemberTitheItem'
import MemberAdvancedSearchInputForm from './components/MemberAdvancedSearchInputForm'

// Importing Services
import {
  getMembers,
  getSingleMemberById,
  addMember,
  editMember,
} from './member.services'

// Importing Actions
import {
  addMemberAction,
  editMemberAction,
  getMembersAction,
} from './member.actions'

// Importing Slice
import memberReducers, { resetMember } from './member.slices'

// Importing Input Options
import { genders, maritalStatuses, ages } from './member.inputOptions'

// Exporting Interfaces
export type {
  IMember,
  IBaseMember,
  IMemberRes,
  IMembersRes,
  IMemberRequestQuery,
  IMemberInitialState,
  IMemberEditReq,
  IMemberQuery,
}

// Exporting components
export {
  Members,
  MemberDetails,
  MemberItem,
  MemberInputForm,
  MembersTable,
  MembersTableLayout,
  MemberDetailsOthers,
  MemberAttendancesItem,
  MemberAttendances,
  MemberDepartments,
  MemberDepartmentItem,
  MemberWelfares,
  MemberWelfareItem,
  MemberTithes,
  MemberTitheItem,
  MemberAdvancedSearchInputForm,
}

// Exporting Services
export { getMembers, getSingleMemberById, addMember, editMember }

// Exporting Actions
export { addMemberAction, editMemberAction, getMembersAction }

// Exporting Slice
export { memberReducers, resetMember }

// Exporting Input Options
export { genders, maritalStatuses, ages }
