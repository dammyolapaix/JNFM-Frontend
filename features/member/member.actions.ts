import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { IError } from '../../interfaces'
import {
  editMember,
  getMembers,
  IBaseMember,
  IMemberEditReq,
  IMemberQuery,
  IMemberRes,
  IMembersRes,
} from './index'
import { addMember } from './index'

export const getMembersAction = createAsyncThunk<
  IMembersRes,
  IMemberQuery,
  { rejectValue: IError['error'] }
>('member/getMembersAction', async (memberQuery, thunkAPI) => {
  try {
    return await getMembers(memberQuery)
  } catch (error) {
    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = errorMessageRes.error

    return thunkAPI.rejectWithValue(errorMessage)
  }
})

export const addMemberAction = createAsyncThunk<
  IMemberRes,
  IBaseMember,
  { rejectValue: IError['error'] }
>('member/addMemberAction', async (member: IBaseMember, thunkAPI) => {
  try {
    return await addMember(member)
  } catch (error) {
    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = errorMessageRes.error

    return thunkAPI.rejectWithValue(errorMessage)
  }
})

export const editMemberAction = createAsyncThunk<
  IMemberRes,
  IMemberEditReq,
  { rejectValue: IError['error'] }
>(
  'member/editMemberAction',
  async (memberEditReq: IMemberEditReq, thunkAPI) => {
    try {
      const { id, member } = memberEditReq
      return await editMember(id, member)
    } catch (error) {
      const errorMessageRes = (error as AxiosError).response?.data as IError

      const errorMessage = errorMessageRes.error

      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)
