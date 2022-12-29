import { createAsyncThunk } from '@reduxjs/toolkit'
import { addCell, IBaseCell } from './index'

export const addCellAction = createAsyncThunk(
  'cell/addCellAction',
  async (cell: IBaseCell, thunkAPI) => {
    try {
      return await addCell(cell)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
