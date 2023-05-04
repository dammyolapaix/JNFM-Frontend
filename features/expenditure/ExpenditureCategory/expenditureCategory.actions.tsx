import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  IBaseExpenditureCategory,
  IExpenditureCategoryRes,
  addExpenditureCategory,
} from './index'
import { IError } from '../../../interfaces'
import { AxiosError } from 'axios'

export const addExpenditureCategoryAction = createAsyncThunk<
  IExpenditureCategoryRes,
  IBaseExpenditureCategory,
  { rejectValue: IError['error'] }
>(
  'expenditureCategory/addExpenditureCategoryAction',
  async (expenditureCategory: IBaseExpenditureCategory, thunkAPI) => {
    try {
      return await addExpenditureCategory(expenditureCategory)
    } catch (error) {
      const errorMessageRes = (error as AxiosError).response?.data as IError

      const errorMessage = errorMessageRes.error

      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)
