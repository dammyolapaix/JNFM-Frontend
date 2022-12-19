export interface IBaseMember {
  firstName: string
  lastName: string
  otherNames?: string | undefined
  fullName: string
  gender: 'Male' | 'Female'
  dateOfBirth?: Date
  maritalStatus?: 'Single' | 'Married' | 'Divorced' | 'Widowed'
  occupation?: string | undefined
  postalAddress?: string | undefined
  homeAddress?: string | undefined
  email?: string | undefined
  phoneNumbers?: {
    countryCode: number
    number: number
  }[]
}

export default interface IMember extends IBaseMember {
  _id: string
}

export interface IMembersRes {
  success: boolean
  count: number | 0
  members: IMember[]
}

export interface IMemberRes {
  success: boolean
  member: IMember
}
