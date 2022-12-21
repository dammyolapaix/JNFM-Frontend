import IChurchService, {
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
} from './churchService.interfaces'
import { getChurchServices } from './churchService.services'
import ChurchServices from './components/ChurchSerives'
import ChurchServiceItem from './components/ChurchServiceItem'
ChurchServiceItem

export { ChurchServices, ChurchServiceItem }

export type {
  IChurchService,
  IBaseChurchService,
  IChurchServiceRes,
  IChurchServicesRes,
}

export { getChurchServices }
