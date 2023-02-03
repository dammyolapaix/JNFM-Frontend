import { createAsyncThunk } from '@reduxjs/toolkit'
import { addTithe, IBaseTithe } from './index'

export const addTitheAction = createAsyncThunk(
  'tithe/addTitheAction',
  async (tithe: IBaseTithe, thunkAPI) => {
    try {
      return await addTithe(tithe)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
