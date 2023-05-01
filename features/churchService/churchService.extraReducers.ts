import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import {
  IChurchServiceInitialState,
  IChurchServiceRes,
  IChurchServicesRes,
  addChurchServiceAction,
  getChurchServicesAction,
} from './index'
import {
  IChurchServiceTypeRes,
  addChurchServiceTypeAction,
} from './churchServiceType'
import { IOfferingRes, addChurchServiceOfferingAction } from './offering'
import { IError } from '../../interfaces'

const churchServiceExtraReducers = (
  builder: ActionReducerMapBuilder<IChurchServiceInitialState>
) => {
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
}

export default churchServiceExtraReducers
