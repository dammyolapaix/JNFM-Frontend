import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  IBaseExpenditureCategory,
  IExpenditureCategory,
  IExpenditureCategoryRes,
  addExpenditureCategory,
  editExpenditureCategory,
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

export const editExpenditureCategoryAction = createAsyncThunk<
  IExpenditureCategoryRes,
  IExpenditureCategory,
  { rejectValue: IError['error'] }
>(
  'expenditureCategory/editExpenditureCategoryAction',
  async (expenditureCategory: IExpenditureCategory, thunkAPI) => {
    const { _id, ...rest } = expenditureCategory
    try {
      return await editExpenditureCategory(_id, { ...rest })
    } catch (error) {
      const errorMessageRes = (error as AxiosError).response?.data as IError

      const errorMessage = errorMessageRes.error

      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)
