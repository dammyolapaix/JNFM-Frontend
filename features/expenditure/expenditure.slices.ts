import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  addExpenditureAction,
  IExpenditureInitialState,
  IExpenditureRes,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  expenditureResCRUD: { success: false, expenditure: null, totalOfferings: 0 },
} as IExpenditureInitialState

export const expenditureSlices = createSlice({
  name: 'expenditure',
  initialState,
  reducers: {
    resetExpenditure: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.expenditureResCRUD = {
        success: false,
        expenditure: null,
        totalOfferings: 0,
      }
    },
  },
  extraReducers: (builder) => {
    // Add Expenditure
    builder.addCase(addExpenditureAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addExpenditureAction.fulfilled,
      (state, action: PayloadAction<IExpenditureRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.expenditureResCRUD = action.payload
      }
    )
    builder.addCase(
      addExpenditureAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetExpenditure } = expenditureSlices.actions

export default expenditureSlices.reducer
