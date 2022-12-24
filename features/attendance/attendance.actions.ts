import { createAsyncThunk } from '@reduxjs/toolkit'
import { IBaseAttendance, takeAttendance } from './index'

export const takeAttendanceAction = createAsyncThunk(
  'attendance/takeAttendanceAction',
  async (attendance: IBaseAttendance, thunkAPI) => {
    try {
      return await takeAttendance(attendance)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
