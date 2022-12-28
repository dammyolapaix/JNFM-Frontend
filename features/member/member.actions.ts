import { createAsyncThunk } from '@reduxjs/toolkit'
import { editMember, IMemberEditReq, IMemberRequestQuery } from './index'
import { addMember } from './index'

export const addMemberAction = createAsyncThunk(
  'member/addMemberAction',
  async (member: IMemberRequestQuery, thunkAPI) => {
    try {
      return await addMember(member)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)

export const editMemberAction = createAsyncThunk(
  'member/editMemberAction',
  async (memberEditReq: IMemberEditReq, thunkAPI) => {
    try {
      const { id, member } = memberEditReq
      return await editMember(id, member)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
