import { IMember } from '../index'

interface IMembersTotal {
  totalMembers: number
  totalMales: number
  totalFemales: number
}

const useMembersTotal = (members: IMember[]): IMembersTotal => {
  const totalMembers = members ? members.length : 0

  const totalMales = members
    ? members.filter((member) => member.gender === 'Male').length
    : 0

  const totalFemales = members
    ? members.filter((member) => member.gender === 'Female').length
    : 0
  return { totalFemales, totalMales, totalMembers }
}

export default useMembersTotal
