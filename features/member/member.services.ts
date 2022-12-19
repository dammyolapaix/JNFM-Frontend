import { makeRequest } from '../../lib'
import { IMember, IMemberRes, IMembersRes } from './index'

export const getMembers = async () => {
  return await makeRequest.get<IMembersRes>('/members')
}

export const getSingleMemberById = async (id: IMember['_id']) => {
  return await makeRequest.get<IMemberRes>(`/members/${id}`)
}
