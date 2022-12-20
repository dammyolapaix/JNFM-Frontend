// Importing Interfaces
import IMember, {
  IBaseMember,
  IMemberRes,
  IMembersRes,
  IMemberRequestQuery,
  IMemberInitialState,
} from './member.interfaces'

// Importing Components
import MemberDetails from './components/MemberDetails'
import MemberInputForm from './components/MemberInputForm'
import MemberItem from './components/MemberItem'
import Members from './components/Members'

// Importing Services
import { getMembers, getSingleMemberById, addMember } from './member.services'

// Importing Services
import { addMemberAction } from './member.actions'

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
}

// Exporting components
export { Members, MemberDetails, MemberItem, MemberInputForm }

// Exporting Services
export { getMembers, getSingleMemberById, addMember }

// Exporting Actions
export { addMemberAction }

// Exporting Slice
export { memberReducers, resetMember }
