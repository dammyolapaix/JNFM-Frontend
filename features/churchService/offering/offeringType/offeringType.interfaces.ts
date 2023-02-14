export interface IBaseOfferingType {
  name: string
}

export default interface IOfferingType extends IBaseOfferingType {
  _id: string
}

export interface IOfferingTypesRes {
  success: boolean
  count: number
  offeringTypes: IOfferingType[]
}
