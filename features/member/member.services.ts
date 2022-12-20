import { makeRequest } from '../../lib'
import { IMember, IMemberRequestQuery, IMemberRes, IMembersRes } from './index'

export const getMembers = async () => {
  return await makeRequest.get<IMembersRes>('/members')
}

export const getSingleMemberById = async (id: IMember['_id']) => {
  return await makeRequest.get<IMemberRes>(`/members/${id}`)
}

export const addMember = async (member: IMemberRequestQuery) => {
  const { data } = await makeRequest.post<IMemberRes>(`/members`, member)
  return data
}
