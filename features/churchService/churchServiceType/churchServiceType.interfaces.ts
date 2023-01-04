export interface IBaseChurchServiceType {
  name: string
}

export default interface IChurchServiceType extends IBaseChurchServiceType {
  _id: string
}

export interface IChurchServiceTypesRes {
  success: boolean
  count: number | 0
  churchServiceTypes: IChurchServiceType[]
}

export interface IChurchServiceTypeRes {
  success: boolean
  churchServiceType: null | IChurchServiceType
}
