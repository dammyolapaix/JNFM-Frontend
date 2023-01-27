import { createAsyncThunk } from '@reduxjs/toolkit'
import { addWelfare, IBaseWelfare } from './index'

export const addWelfareAction = createAsyncThunk(
  'income/addWelfareAction',
  async (welfare: IBaseWelfare, thunkAPI) => {
    try {
      return await addWelfare(welfare)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
