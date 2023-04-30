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
import ChurchServiceDetailsAttendances from './components/ChurchServiceDetailsAttendances'
import ChurchServiceAttendances from './components/ChurchServiceAttendances'
import ChurchServiceAttendanceMembersTable from './components/ChurchServiceAttendanceMembersTable'
import ChurchServiceAttendanceMemberItem from './components/ChurchServiceAttendanceMemberItem'
import ChurchServiceGeneralOverview from './components/ChurchServiceGeneralOverview'

export { addChurchServiceAction }

export {
  ChurchSeriveInputForm,
  ChurchServices,
  ChurchServiceDetails,
  ChurchServiceItem,
  ChurchServiceDetailsAttendances,
  ChurchServiceAttendances,
  ChurchServiceAttendanceMembersTable,
  ChurchServiceAttendanceMemberItem,
  ChurchServiceGeneralOverview,
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
