export interface IBaseChurchService {
  date?: string | undefined
  startsAt?: string | undefined
  endsAt?: string | undefined
}

export default interface IChurchService extends IBaseChurchService {
  _id: string
}

export interface IChurchServicesRes {
  success: boolean
  count: number | 0
  churchServices: IChurchService[]
}

export interface IChurchServiceRes {
  success: boolean
  churchService: null | IChurchService
}
