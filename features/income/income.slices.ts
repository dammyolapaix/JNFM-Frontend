import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITitheInitialState } from './index'
import { addTitheAction } from './tithe/tithe.actions'
import { ITitheRes } from './tithe'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  titheResCRUD: { success: false, tithe: null },
} as ITitheInitialState

export const incomeSlices = createSlice({
  name: 'income',
  initialState,
  reducers: {
    resetTithe: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.titheResCRUD = {
        success: false,
        tithe: null,
      }
    },
  },
  extraReducers: (builder) => {
    // Add Tithe
    builder.addCase(addTitheAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addTitheAction.fulfilled,
      (state, action: PayloadAction<ITitheRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.titheResCRUD = action.payload
      }
    )
    builder.addCase(
      addTitheAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetTithe } = incomeSlices.actions

export default incomeSlices.reducer
