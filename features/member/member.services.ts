import { makeRequest } from '../../lib'
import { getQueryStr } from '../../utils'
import {
  IBaseMember,
  IMember,
  IMemberQuery,
  IMemberRes,
  IMembersRes,
} from './index'

export const getMembers = async (
  memberQuery?: IMemberQuery,
  cookie?: string
) => {
  if (memberQuery) {
    if (memberQuery.age === 'Oldest') {
      memberQuery['dateOfBirth[ne]'] = 'null'
      memberQuery.sort = 'dateOfBirth'

      delete memberQuery.age
    }

    if (memberQuery.age === 'Youngest') {
      memberQuery['dateOfBirth[ne]'] = 'null'
      memberQuery.sort = '-dateOfBirth'

      delete memberQuery.age
    }
    const queryStr = getQueryStr(memberQuery)

    const { data } = await makeRequest.get<IMembersRes>(
      `/members/${queryStr}`,
      {
        withCredentials: true,
        headers: {
          Cookie: cookie,
        },
      }
    )

    return data
  } else {
    const { data } = await makeRequest.get<IMembersRes>('/members', {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    })
    return data
  }
}

export const getSingleMemberById = async (id: IMember['_id']) => {
  const { data } = await makeRequest.get<IMemberRes>(`/members/${id}`)
  return data
}

export const addMember = async (member: IBaseMember) => {
  const { data } = await makeRequest.post<IMemberRes>(`/members`, member)
  return data
}

export const editMember = async (id: IMember['_id'], member: IBaseMember) => {
  const { data } = await makeRequest.patch<IMemberRes>(`/members/${id}`, member)
  return data
}
