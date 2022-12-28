import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addDepartment,
  editDepartment,
  IBaseDepartment,
  IDepartmentEditReq,
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
