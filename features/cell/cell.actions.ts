import { createAsyncThunk } from '@reduxjs/toolkit'
import { addCell, editCell, IBaseCell, ICellEditReq } from './index'

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

export const editCellAction = createAsyncThunk(
  'cell/editCellAction',
  async (cellEditReq: ICellEditReq, thunkAPI) => {
    try {
      const { id, cell } = cellEditReq
      return await editCell(id, cell)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
