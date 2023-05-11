export const formatDateToddmYYY = (date: string): string => {
  //  Get dd
  const dd = new Date(date).getDate()

  //  Get m
  const m = new Intl.DateTimeFormat('en-US', {
    month: 'short',
  }).format(new Date(date))

  //  Get YYYY
  const YYYY = new Date(date).getFullYear()

  const formatedDate = `${dd} ${m}, ${YYYY}`

  return formatedDate
}

export const getAge = (dateOfBirth: string): string => {
  // Current Date
  const now = new Date(Date.now())

  //   Get the year and month of date of birth
  let dobYear = new Date(dateOfBirth).getFullYear()
  let dobMonth = new Date(dateOfBirth).getMonth() + 1

  let nowYear = now.getFullYear()
  let nowMonth = now.getMonth() + 1

  let getAge: string
  let getYear: number
  let getMonth: number

  getYear = nowYear - dobYear
  getMonth = nowMonth - dobMonth

  if (dobMonth > nowMonth) {
    getYear = nowYear - dobYear - 1
  }

  if (getYear < 1) {
    getAge = `${getMonth} mo`
  } else {
    getAge = getYear === 1 ? `${getYear} yr` : `${getYear} yrs`
  }

  return getAge
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'August',
  'September',
  'October',
  'Novermber',
  'December',
]
