import { WritableDraft } from 'immer/dist/internal'
import { IExpenditureCategoryInitialState } from './index'

export const resetExpenditureCategoryReducer = (
  state: WritableDraft<IExpenditureCategoryInitialState>
) => {
  state.isLoading = false
  state.isSuccess = false
  state.isError = false
  state.error = undefined
  state.expenditureCategory = { success: false, expenditureCategory: null }
}
