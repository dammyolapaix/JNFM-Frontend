import IChurchService, {
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
} from './churchService.interfaces'
import {
  getChurchServices,
  getSingleChurchServiceById,
} from './churchService.services'
import ChurchSeriveInputForm from './components/ChurchSeriveInputForm'
import ChurchServices from './components/ChurchSerives'
import ChurchServiceDetails from './components/ChurchServiceDetails'
import ChurchServiceItem from './components/ChurchServiceItem'

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
}

export { getChurchServices, getSingleChurchServiceById }
