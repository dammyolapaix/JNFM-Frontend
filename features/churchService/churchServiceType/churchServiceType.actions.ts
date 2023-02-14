import { createAsyncThunk } from '@reduxjs/toolkit'
import { addChurchServiceType, IBaseChurchServiceType } from './index'

export const addChurchServiceTypeAction = createAsyncThunk(
  'churchService/addChurchServiceTypeAction',
  async (churchServiceType: IBaseChurchServiceType, thunkAPI) => {
    try {
      return await addChurchServiceType(churchServiceType)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
