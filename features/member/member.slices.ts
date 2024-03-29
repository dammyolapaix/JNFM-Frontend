import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  addMemberAction,
  editMemberAction,
  getMembersAction,
  IMemberInitialState,
  IMemberRes,
  IMembersRes,
} from './index'
import { IError } from '../../interfaces'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  advancedSearchFormData: null,
  membersRes: { success: false, count: 0, members: [], status: null },
  memberResCRUD: { success: false, member: null },
} as IMemberInitialState

export const memberSlices = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setAdvancedSearchFormData: (state, { payload }) => {
      state.advancedSearchFormData = payload
    },
    resetMember: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.advancedSearchFormData = null
      state.membersRes = { success: false, count: 0, members: [] }
      state.memberResCRUD = { success: false, member: null }
    },
  },
  extraReducers: (builder) => {
    // Get Members
    builder.addCase(getMembersAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getMembersAction.fulfilled,
      (state, action: PayloadAction<IMembersRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.membersRes = action.payload
      }
    )
    builder.addCase(
      getMembersAction.rejected,
      (state, action: PayloadAction<IError['error'] | undefined>) => {
        state.isLoading = false
        state.isError = true
        if (action.payload) {
          state.error = action.payload
        }
      }
    )

    // Add Member
    builder.addCase(addMemberAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addMemberAction.fulfilled,
      (state, action: PayloadAction<IMemberRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.memberResCRUD = action.payload
      }
    )
    builder.addCase(
      addMemberAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )

    // Edit Member
    builder.addCase(editMemberAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      editMemberAction.fulfilled,
      (state, action: PayloadAction<IMemberRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.memberResCRUD = action.payload
      }
    )
    builder.addCase(
      editMemberAction.rejected,
      (state, action: PayloadAction<IError['error'] | undefined>) => {
        state.isLoading = false
        state.isError = true
        if (action.payload) {
          state.error = action.payload
        }
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetMember, setAdvancedSearchFormData } = memberSlices.actions

export default memberSlices.reducer
