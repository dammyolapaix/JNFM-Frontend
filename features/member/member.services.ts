import { makeRequest } from '../../lib'
import { IMember, IMemberRequestQuery, IMemberRes, IMembersRes } from './index'

export const getMembers = async () => {
  const { data } = await makeRequest.get<IMembersRes>('/members')
  return data
}

export const getSingleMemberById = async (id: IMember['_id']) => {
  const { data } = await makeRequest.get<IMemberRes>(`/members/${id}`)
  return data
}

export const addMember = async (member: IMemberRequestQuery) => {
  const { data } = await makeRequest.post<IMemberRes>(`/members`, member)
  return data
}

export const editMember = async (
  id: IMember['_id'],
  member: IMemberRequestQuery
) => {
  const { data } = await makeRequest.patch<IMemberRes>(`/members/${id}`, member)
  return data
}
