import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import {
  IChurchServiceInitialState,
  IChurchServiceRes,
  addChurchServiceAction,
} from './index'
import {
  IChurchServiceTypeRes,
  addChurchServiceTypeAction,
} from './churchServiceType'
import { IOfferingRes, addChurchServiceOfferingAction } from './offering'

const churchServiceExtraReducers = (
  builder: ActionReducerMapBuilder<IChurchServiceInitialState>
) => {
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
