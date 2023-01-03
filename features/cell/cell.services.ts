import { makeRequest } from '../../lib'
import { IBaseCell, ICell, ICellMemberReq, ICellRes, ICellsRes } from './index'

export const getCells = async () => {
  const { data } = await makeRequest.get<ICellsRes>('/cells')
  return data
}

export const getSingleCellById = async (id: ICell['_id']) => {
  const { data } = await makeRequest.get<ICellRes>(`/cells/${id}`)
  return data
}

export const addCell = async (cell: IBaseCell) => {
  const { data } = await makeRequest.post<ICellRes>(`/cells`, cell)
  return data
}

export const editCell = async (id: ICell['_id'], cell: IBaseCell) => {
  const { data } = await makeRequest.patch<ICellRes>(`/cells/${id}`, cell)
  return data
}

export const addMemberToCell = async (cellMemberReq: ICellMemberReq) => {
  const { cellId: id, member } = cellMemberReq

  const { data } = await makeRequest.patch<ICellRes>(
    `/cells/${id}/members/add`,
    { member }
  )
  return data
}

export const removeMemberFromCell = async (cellMemberReq: ICellMemberReq) => {
  const { cellId: id, member } = cellMemberReq

  const { data } = await makeRequest.patch<ICellRes>(
    `/cells/${id}/members/remove`,
    { member }
  )
  return data
}
