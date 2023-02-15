import { makeRequest } from '../../lib'
import { IBaseCell, ICell, ICellMemberReq, ICellRes, ICellsRes } from './index'

export const getCells = async (cookie?: string) => {
  const { data } = await makeRequest.get<ICellsRes>('/cells', {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const getSingleCellById = async (id: ICell['_id'], cookie?: string) => {
  const { data } = await makeRequest.get<ICellRes>(`/cells/${id}`, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const addCell = async (cell: IBaseCell, cookie?: string) => {
  const { data } = await makeRequest.post<ICellRes>(`/cells`, cell, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const editCell = async (
  id: ICell['_id'],
  cell: IBaseCell,
  cookie?: string
) => {
  const { data } = await makeRequest.patch<ICellRes>(`/cells/${id}`, cell, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  })
  return data
}

export const addMemberToCell = async (
  cellMemberReq: ICellMemberReq,
  cookie?: string
) => {
  const { cellId: id, member } = cellMemberReq

  const { data } = await makeRequest.patch<ICellRes>(
    `/cells/${id}/members/add`,
    member,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}

export const removeMemberFromCell = async (
  cellMemberReq: ICellMemberReq,
  cookie?: string
) => {
  const { cellId: id, member } = cellMemberReq

  const { data } = await makeRequest.patch<ICellRes>(
    `/cells/${id}/members/remove`,
    member,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  )
  return data
}
