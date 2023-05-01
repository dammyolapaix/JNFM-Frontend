import { createSlice } from '@reduxjs/toolkit'
import {
  churchServiceExtraReducers,
  IChurchServiceInitialState,
  resetChurchServiceReducer,
  resetOfferingReducer,
} from './index'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  churchServicesRes: { success: false, count: 0, churchServices: [] },
  churchServiceResCRUD: {
    success: false,
    churchService: null,
    totalOfferings: 0,
  },
  churchServiceTypeResCRUD: { success: false, churchServiceType: null },
  offeringResCRUD: { success: false, offering: null },
} as IChurchServiceInitialState

export const churchServiceSlices = createSlice({
  name: 'churchService',
  initialState,
  reducers: {
    resetChurchService: resetChurchServiceReducer,
    resetOffering: resetOfferingReducer,
  },
  extraReducers: churchServiceExtraReducers,
})

// Action creators are generated for each case reducer function
export const { resetChurchService, resetOffering } = churchServiceSlices.actions

export default churchServiceSlices.reducer
