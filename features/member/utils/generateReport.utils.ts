import { utils, writeFile } from 'xlsx'
import { IMember } from '../'
import { formatDateToddmYYY, getAge } from '../../../utils'
import { ICell } from '../../cell'

const getRows = (members: IMember[]) => {
  const rows = members.map((member) => ({
    'Full Name': member.fullName as string,
    Gender: (member.gender as string).charAt(0),
    'Date of Birth': formatDateToddmYYY(member.dateOfBirth as string),
    Age: getAge(member.dateOfBirth as string),
    'Marital Status': member.maritalStatus as string,
    occupation: member.occupation ? member.occupation : 'Not Given',
    'Postal Address': member.postalAddress ? member.postalAddress : 'Not Given',
    'Homme Address': member.homeAddress ? member.homeAddress : 'Not Given',
    email: member.email ? member.email : 'Not Given',
    'Phone Number': member.phoneNumber ? member.phoneNumber : 'Not Given',
    'Nearest Relative Name': member.nearestRelative?.name
      ? member.nearestRelative.name
      : 'Not Given',
    'Nearest Relative Relationship': member.nearestRelative?.relationship
      ? member.nearestRelative.relationship
      : 'Not Given',
    'Nearest Relative Phone Number': member.nearestRelative?.phoneNumber
      ? member.nearestRelative.phoneNumber
      : 'Not Given',
    Cell: member.cell?.cell ? (member.cell.cell as ICell).name : 'Not Given',
    'Joined Cell On': member.cell?.dateJoined
      ? formatDateToddmYYY(member.cell.dateJoined)
      : 'Not Given',
  }))

  return rows
}

export const generateMembersReport = (members: IMember[]) => {
  const rows = getRows(members)

  const worksheet = utils.json_to_sheet(rows)

  const workbook = utils.book_new()
  utils.book_append_sheet(workbook, worksheet, 'Bio Data')

  worksheet['!cols'] = [{ wch: 10 }] // set column A width to 10 characters
  const max_width = rows.reduce(
    (w, r) => Math.max(w, r['Full Name'].length),
    10
  )
  worksheet['!cols'] = [{ wch: max_width }]

  return writeFile(workbook, 'Members Report.xlsx', { compression: true })
}
