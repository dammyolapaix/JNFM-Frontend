import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  ICellInitialState,
  addCellAction,
  ICellRes,
  editCellAction,
  addMemberToCellAction,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  cellsRes: { success: false, count: 0, cells: [] },
  cellResCRUD: { success: false, cell: null },
} as ICellInitialState

export const cellSlices = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    resetCell: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.cellsRes = { success: false, count: 0, cells: [] }
      state.cellResCRUD = { success: false, cell: null }
    },
  },
  extraReducers: (builder) => {
    // Add Department
    builder.addCase(addCellAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addCellAction.fulfilled,
      (state, action: PayloadAction<ICellRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.cellResCRUD = action.payload
      }
    )
    builder.addCase(
      addCellAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )

    // Edit Department
    builder.addCase(editCellAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      editCellAction.fulfilled,
      (state, action: PayloadAction<ICellRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.cellResCRUD = action.payload
      }
    )
    builder.addCase(
      editCellAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )

    // Edit Department
    builder.addCase(addMemberToCellAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addMemberToCellAction.fulfilled,
      (state, action: PayloadAction<ICellRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.cellResCRUD = action.payload
      }
    )
    builder.addCase(
      addMemberToCellAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetCell } = cellSlices.actions

export default cellSlices.reducer
