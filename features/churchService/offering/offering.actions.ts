import { createAsyncThunk } from '@reduxjs/toolkit'
import { addOffering, IBaseOffering } from './index'

export const addChurchServiceOfferingAction = createAsyncThunk(
  'churchService/addChurchServiceOfferingAction',
  async (offering: IBaseOffering, thunkAPI) => {
    try {
      return await addOffering(offering)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
