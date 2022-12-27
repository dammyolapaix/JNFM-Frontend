// Importing Interfaces
import IMember, {
  IBaseMember,
  IMemberRes,
  IMembersRes,
  IMemberRequestQuery,
  IMemberInitialState,
  IMemberEditReq,
} from './member.interfaces'

// Importing Components
import MemberDetails from './components/MemberDetails'
import MemberInputForm from './components/MemberInputForm'
import MemberItem from './components/MemberItem'
import Members from './components/Members'

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

// Exporting Interfaces
export type {
  IMember,
  IBaseMember,
  IMemberRes,
  IMembersRes,
  IMemberRequestQuery,
  IMemberInitialState,
  IMemberEditReq,
}

// Exporting components
export { Members, MemberDetails, MemberItem, MemberInputForm }

// Exporting Services
export { getMembers, getSingleMemberById, addMember, editMember }

// Exporting Actions
export { addMemberAction, editMemberAction, getMembersAction }

// Exporting Slice
export { memberReducers, resetMember }
