import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  addChurchServiceAction,
  IChurchServiceInitialState,
  IChurchServiceRes,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  churchServiceResCRUD: { success: false, churchService: null },
} as IChurchServiceInitialState

export const churchServiceSlices = createSlice({
  name: 'churchService',
  initialState,
  reducers: {
    resetChurchService: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.churchServiceResCRUD = { success: false, churchService: null }
    },
  },
  extraReducers: (builder) => {
    // Add Church Service
    builder.addCase(addChurchServiceAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addChurchServiceAction.fulfilled,
      (state, action: PayloadAction<IChurchServiceRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.churchServiceResCRUD = action.payload
      }
    )
    builder.addCase(
      addChurchServiceAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetChurchService } = churchServiceSlices.actions

export default churchServiceSlices.reducer
