import { IMember } from '../'

const useGetMembersByMonthJoined = (members: IMember[]): number[] => {
  const memberCountByMonth = new Array(12).fill(0) as number[] // Initialize an array of length 12 with 0s for each month

  members.forEach((member) => {
    if (member.cell?.dateJoined) {
      const joinedDate = new Date(member.cell?.dateJoined)
      const month = joinedDate.getMonth() // get the month index (0-11)
      memberCountByMonth[month]++ // increment the member count for the corresponding month
    }
  })

  return memberCountByMonth
}

export default useGetMembersByMonthJoined
