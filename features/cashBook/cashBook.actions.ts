import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCashBooks, ICashBookQuery } from './index'

export const getCashBooksAction = createAsyncThunk(
  'cashBook/getCashBooksAction',
  async (cashBookQuery: ICashBookQuery, thunkAPI) => {
    try {
      return await getCashBooks(cashBookQuery)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
