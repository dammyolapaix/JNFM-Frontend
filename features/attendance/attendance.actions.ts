import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMembers } from '../member'
import {
  IAttendance,
  IBaseAttendance,
  markAsAbsent,
  takeAttendance,
} from './index'

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

export const markAsAbsentAction = createAsyncThunk(
  'attendance/markAsAbsentAction',
  async (attendanceId: IAttendance['_id'], thunkAPI) => {
    try {
      return await markAsAbsent(attendanceId)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
