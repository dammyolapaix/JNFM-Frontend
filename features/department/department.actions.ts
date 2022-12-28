import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDepartment, IBaseDepartment } from './index'

export const addDepartmentAction = createAsyncThunk(
  'member/addMemberAction',
  async (department: IBaseDepartment, thunkAPI) => {
    try {
      return await addDepartment(department)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
