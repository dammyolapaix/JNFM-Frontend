import { WritableDraft } from 'immer/dist/internal'
import { IChurchServiceInitialState } from './index'

export const resetChurchServiceReducer = (
  state: WritableDraft<IChurchServiceInitialState>
) => {
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
}

export const resetOfferingReducer = (
  state: WritableDraft<IChurchServiceInitialState>
) => {
  state.isLoading = false
  state.isSuccess = false
  state.isError = false
  state.offeringResCRUD = {
    success: false,
    offering: null,
  }
}
