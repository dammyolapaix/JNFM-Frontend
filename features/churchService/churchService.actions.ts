import { createAsyncThunk } from '@reduxjs/toolkit'
import { addChurchService, IBaseChurchService } from './index'

export const addChurchServiceAction = createAsyncThunk(
  'churchService/addChurchServiceAction',
  async (churchService: IBaseChurchService, thunkAPI) => {
    try {
      return await addChurchService(churchService)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
