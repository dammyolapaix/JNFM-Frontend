import { IMember } from '../member'

export interface IBaseCell {
  name?: string
  members?: {
    member: IMember
  }[]
}

export default interface ICell extends IBaseCell {
  _id: string
}

export interface ICellsRes {
  success: boolean
  count: number | 0
  cells: IMember[]
}

export interface ICellRes {
  success: boolean
  cell: null | IMember
}

export interface ICellInitialState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
  cellsRes: ICellsRes
  cellResCRUD: ICellRes
}

export interface ICellEditReq {
  id: ICell['_id']
  cell: IBaseCell
}

export interface ICellMemberReq {
  cellId: ICell['_id']
  member: IMember['_id']
}
