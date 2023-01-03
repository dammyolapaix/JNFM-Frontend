import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  IAttendanceInitialState,
  IAttendanceRes,
  markAsAbsentAction,
  takeAttendanceAction,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  attendanceResCRUD: { success: false, attendance: null },
} as IAttendanceInitialState

export const attendanceSlices = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    resetAttendance: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.attendanceResCRUD = { success: false, attendance: null }
    },
  },
  extraReducers: (builder) => {
    // Take Attendance
    builder.addCase(takeAttendanceAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      takeAttendanceAction.fulfilled,
      (state, action: PayloadAction<IAttendanceRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.attendanceResCRUD = action.payload
      }
    )
    builder.addCase(
      takeAttendanceAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )

    // Mark Attendance as absent
    builder.addCase(markAsAbsentAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      markAsAbsentAction.fulfilled,
      (state, action: PayloadAction<IAttendanceRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.attendanceResCRUD = action.payload
      }
    )
    builder.addCase(
      markAsAbsentAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetAttendance } = attendanceSlices.actions

export default attendanceSlices.reducer
