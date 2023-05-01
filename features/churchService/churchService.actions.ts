import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addChurchService,
  getChurchServices,
  IBaseChurchService,
  IChurchServicesRes,
} from './index'
import { IError } from '../../interfaces'
import { AxiosError } from 'axios'

export const getChurchServicesAction = createAsyncThunk<
  IChurchServicesRes,
  {},
  { rejectValue: IError['error'] }
>('churchService/getChurchServicesAction', async (_, thunkAPI) => {
  try {
    return await getChurchServices()
  } catch (error) {
    const errorMessageRes = (error as AxiosError).response?.data as IError

    const errorMessage = errorMessageRes.error

    return thunkAPI.rejectWithValue(errorMessage)
  }
})

export const addChurchServiceAction = createAsyncThunk(
  'churchService/addChurchServiceAction',
  async (churchService: IBaseChurchService, thunkAPI) => {
    try {
      return await addChurchService(churchService)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
