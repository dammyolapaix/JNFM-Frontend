import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addDepartment,
  addMemberToDepartment,
  editDepartment,
  IBaseDepartment,
  IDepartmentEditReq,
  IDepartmentMemberReq,
} from './index'

export const addDepartmentAction = createAsyncThunk(
  'department/addDepartmentAction',
  async (department: IBaseDepartment, thunkAPI) => {
    try {
      return await addDepartment(department)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)

export const editDepartmentAction = createAsyncThunk(
  'department/editDepartmentAction',
  async (departmentEditReq: IDepartmentEditReq, thunkAPI) => {
    try {
      const { id, department } = departmentEditReq
      return await editDepartment(id, department)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)

export const addMemberToDepartmentAction = createAsyncThunk(
  'department/addMemberToDepartmentAction',
  async (departmentMemberReq: IDepartmentMemberReq, thunkAPI) => {
    try {
      return await addMemberToDepartment(departmentMemberReq)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
