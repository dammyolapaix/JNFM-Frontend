import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { IError } from '../../interfaces'
import {
  editMember,
  getMembers,
  IBaseMember,
  IMemberEditReq,
  IMemberQuery,
  IMembersRes,
} from './index'
import { addMember } from './index'

export const getMembersAction = createAsyncThunk<
  IMembersRes,
  IMemberQuery,
  { rejectValue: IError }
>('member/getMembersAction', async (memberQuery, thunkAPI) => {
  try {
    return await getMembers(memberQuery)
  } catch (error) {
    const err = error as AxiosError

    const errorData: IError = {
      // @ts-ignore
      error: err.response?.data?.error,
      status: err.response?.status as number,
      success: false,
    }

    return thunkAPI.rejectWithValue(errorData as IError)
  }
})

export const addMemberAction = createAsyncThunk(
  'member/addMemberAction',
  async (member: IBaseMember, thunkAPI) => {
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
