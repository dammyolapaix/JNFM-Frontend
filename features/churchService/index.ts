import { addChurchServiceAction } from './churchService.actions'

import churchServiceReducers, {
  resetChurchService,
  resetOffering,
} from './churchService.slices'
import IChurchService, {
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
  IChurchServiceInitialState,
} from './churchService.interfaces'
import {
  getChurchServices,
  getSingleChurchServiceById,
  addChurchService,
} from './churchService.services'
import ChurchSeriveInputForm from './components/ChurchSeriveInputForm'
import ChurchServices from './components/ChurchSerives'
import ChurchServiceDetails from './components/ChurchServiceDetails'
import ChurchServiceItem from './components/ChurchServiceItem'

export { addChurchServiceAction }

export {
  ChurchSeriveInputForm,
  ChurchServices,
  ChurchServiceDetails,
  ChurchServiceItem,
}

export type {
  IChurchService,
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
  IChurchServiceInitialState,
}

export { getChurchServices, getSingleChurchServiceById, addChurchService }

export { churchServiceReducers, resetChurchService, resetOffering }
