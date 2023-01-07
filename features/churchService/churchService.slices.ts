import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  addChurchServiceAction,
  IChurchServiceInitialState,
  IChurchServiceRes,
} from './index'
import {
  addChurchServiceTypeAction,
  IChurchServiceTypeRes,
} from './churchServiceType'
import { addChurchServiceOfferingAction, IOfferingRes } from './offering'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  churchServiceResCRUD: { success: false, churchService: null },
  churchServiceTypeResCRUD: { success: false, churchServiceType: null },
  offeringResCRUD: { success: false, offering: null },
} as IChurchServiceInitialState

export const churchServiceSlices = createSlice({
  name: 'churchService',
  initialState,
  reducers: {
    resetChurchService: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.churchServiceResCRUD = {
        success: false,
        totalOfferings: 0,
        churchService: null,
      }
      state.churchServiceTypeResCRUD = {
        success: false,
        churchServiceType: null,
      }
      state.offeringResCRUD = {
        success: false,
        offering: null,
      }
    },
    resetOffering: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.offeringResCRUD = {
        success: false,
        offering: null,
      }
    },
  },
  extraReducers: (builder) => {
    // Add Church Service
    builder.addCase(addChurchServiceAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addChurchServiceAction.fulfilled,
      (state, action: PayloadAction<IChurchServiceRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.churchServiceResCRUD = action.payload
      }
    )
    builder.addCase(
      addChurchServiceAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )

    // Add Church Service Type
    builder.addCase(addChurchServiceTypeAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addChurchServiceTypeAction.fulfilled,
      (state, action: PayloadAction<IChurchServiceTypeRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.churchServiceTypeResCRUD = action.payload
      }
    )
    builder.addCase(
      addChurchServiceTypeAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )

    // Add Church Service Offering
    builder.addCase(addChurchServiceOfferingAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      addChurchServiceOfferingAction.fulfilled,
      (state, action: PayloadAction<IOfferingRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.offeringResCRUD = action.payload
      }
    )
    builder.addCase(
      addChurchServiceOfferingAction.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { resetChurchService, resetOffering } = churchServiceSlices.actions

export default churchServiceSlices.reducer
