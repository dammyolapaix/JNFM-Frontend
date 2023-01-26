import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  getCashBooksAction,
  ICashBookInitialState,
  ICashBooksRes,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  cashBooksRes: { success: false, count: 0, cashBooks: [], totalCashBook: [] },
  cashBookResCRUD: { success: false, cashBook: null },
} as ICashBookInitialState

export const cashBook = createSlice({
  name: 'cashBook',
  initialState,
  reducers: {
    resetCashBook: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.cashBooksRes = {
        success: false,
        count: 0,
        cashBooks: [],
        totalCashBook: [],
      }
      state.cashBookResCRUD = { success: false, cashBook: null }
    },
  },
  extraReducers: (builder) => {
    // Get Cash Books
    builder.addCase(getCashBooksAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getCashBooksAction.fulfilled,
      (state, action: PayloadAction<ICashBooksRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.cashBooksRes = action.payload
      }
    )
    builder.addCase(
      getCashBooksAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetCashBook } = cashBook.actions

export default cashBook.reducer
