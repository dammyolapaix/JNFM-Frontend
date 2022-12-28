import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  addDepartmentAction,
  IDepartmentInitialState,
  IDepartmentRes,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  departmentsRes: { success: false, count: 0, departments: [] },
  departmentResCRUD: { success: false, department: null },
} as IDepartmentInitialState

export const departmentSlices = createSlice({
  name: 'department',
  initialState,
  reducers: {
    resetDepartment: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.departmentsRes = { success: false, count: 0, departments: [] }
      state.departmentResCRUD = { success: false, department: null }
    },
  },
  extraReducers: (builder) => {
    // Add Member
    builder.addCase(addDepartmentAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addDepartmentAction.fulfilled,
      (state, action: PayloadAction<IDepartmentRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.departmentResCRUD = action.payload
      }
    )
    builder.addCase(
      addDepartmentAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetDepartment } = departmentSlices.actions

export default departmentSlices.reducer
