import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addCell,
  addMemberToCell,
  editCell,
  getCells,
  IBaseCell,
  ICellEditReq,
  ICellMemberReq,
} from './index'

export const getCellsAction = createAsyncThunk(
  'cell/getCellsAction',
  async (_, thunkAPI) => {
    try {
      return await getCells()
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)

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

export const addMemberToCellAction = createAsyncThunk(
  'department/addMemberToCellAction',
  async (cellMemberReq: ICellMemberReq, thunkAPI) => {
    try {
      return await addMemberToCell(cellMemberReq)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
