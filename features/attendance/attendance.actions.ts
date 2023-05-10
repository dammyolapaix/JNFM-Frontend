import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMembers } from '../member'
import {
  IAttendance,
  IAttendancesRes,
  IBaseAttendance,
  getAttendances,
  getSingleChurchSeviceAttendances,
  markAsAbsent,
  takeAttendance,
} from './index'
import { IChurchService } from '../churchService'
import { IError } from '../../interfaces'
import { AxiosError } from 'axios'

export const getAttendancesAction = createAsyncThunk<
  IAttendancesRes,
  {},
  { rejectValue: IError['error'] }
>('attendance/getSingleChurchSeviceAttendancesAction', async (_, thunkAPI) => {
  try {
    return await getAttendances()
  } catch (error) {
    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = errorMessageRes.error

    return thunkAPI.rejectWithValue(errorMessage)
  }
})

export const getSingleChurchSeviceAttendancesAction = createAsyncThunk<
  IAttendancesRes,
  IChurchService['_id'],
  { rejectValue: IError['error'] }
>(
  'attendance/getSingleChurchSeviceAttendancesAction',
  async (churchServiceId, thunkAPI) => {
    try {
      return await getSingleChurchSeviceAttendances(churchServiceId)
    } catch (error) {
      const errorMessageRes = (error as AxiosError).response?.data as IError

      const errorMessage = errorMessageRes.error

      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)

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
