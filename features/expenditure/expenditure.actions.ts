import { createAsyncThunk } from '@reduxjs/toolkit'
import { addExpenditure } from './index'
import { IBaseExpenditure } from './expenditure.interfaces'

export const addExpenditureAction = createAsyncThunk(
  'expenditure/addExpenditureAction',
  async (expenditure: IBaseExpenditure, thunkAPI) => {
    try {
      return await addExpenditure(expenditure)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
