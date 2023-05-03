import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  addChurchServiceAction,
  churchServiceExtraReducers,
  getChurchServicesAction,
  IChurchServiceInitialState,
  IChurchServiceRes,
  IChurchServicesRes,
  resetChurchServiceReducer,
  resetOfferingReducer,
} from './index'
import { IError } from '../../interfaces'
import {
  addChurchServiceTypeAction,
  IChurchServiceTypeRes,
} from './churchServiceType'
import { addChurchServiceOfferingAction, IOfferingRes } from './offering'

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
    resetChurchService: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
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
      state.offeringResCRUD = {
        success: false,
        offering: null,
      }
    },
  },
  extraReducers: (builder) => {
    /**
     * Get Church Services
     */
    builder.addCase(getChurchServicesAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getChurchServicesAction.fulfilled,
      (state, action: PayloadAction<IChurchServicesRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.churchServicesRes = action.payload
      }
    )
    builder.addCase(
      getChurchServicesAction.rejected,
      (state, action: PayloadAction<IError['error'] | undefined>) => {
        state.isLoading = false
        state.isError = true
        if (action.payload) {
          state.error = action.payload
        }
      }
    )

    /**
     * Add Church Service
     */
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

    /**
     * Add Church Service Type
     */
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

    /**
     * Add Church Service Offering
     */
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
