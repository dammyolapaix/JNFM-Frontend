import { createSlice } from '@reduxjs/toolkit'
import {
  IExpenditureCategoryInitialState,
  expenditureCategoryExtraReducers,
  resetExpenditureCategoryReducer,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  expenditureCategory: { success: false, expenditureCategory: null },
} as IExpenditureCategoryInitialState

export const expenditureCategorySlices = createSlice({
  name: 'expenditureCategory',
  initialState,
  reducers: {
    resetExpenditureCategory: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = undefined
      state.expenditureCategory = { success: false, expenditureCategory: null }
    },
  },
  extraReducers: expenditureCategoryExtraReducers,
})

export const { resetExpenditureCategory } = expenditureCategorySlices.actions

export default expenditureCategorySlices.reducer
