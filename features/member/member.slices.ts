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

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  membersRes: { success: false, count: 0, members: [] },
  memberResCRUD: { success: false, member: null },
} as IMemberInitialState

export const memberSlices = createSlice({
  name: 'member',
  initialState,
  reducers: {
    resetMember: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
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
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
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
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetMember } = memberSlices.actions

export default memberSlices.reducer
