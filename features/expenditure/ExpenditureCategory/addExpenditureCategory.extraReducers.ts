import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import {
  IExpenditureCategoryInitialState,
  IExpenditureCategoryRes,
  addExpenditureCategoryAction,
} from './index'
import { IError } from '../../../interfaces'

const expenditureCategoryExtraReducers = (
  builder: ActionReducerMapBuilder<IExpenditureCategoryInitialState>
) => {
  builder.addCase(addExpenditureCategoryAction.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(
    addExpenditureCategoryAction.fulfilled,
    (state, action: PayloadAction<IExpenditureCategoryRes>) => {
      state.isLoading = false
      state.isSuccess = true
      state.expenditureCategory = action.payload
    }
  )
  builder.addCase(
    addExpenditureCategoryAction.rejected,
    (state, action: PayloadAction<IError['error'] | undefined>) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    }
  )
}

export default expenditureCategoryExtraReducers
