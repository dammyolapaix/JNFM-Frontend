import IChurchService, {
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
} from './churchService.interfaces'
import {
  getChurchServices,
  getSingleChurchServiceById,
} from './churchService.services'
import ChurchServices from './components/ChurchSerives'
import ChurchServiceDetails from './components/ChurchServiceDetails'
import ChurchServiceItem from './components/ChurchServiceItem'
ChurchServiceItem

export { ChurchServices, ChurchServiceItem, ChurchServiceDetails }

export type {
  IChurchService,
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
}

export { getChurchServices, getSingleChurchServiceById }
