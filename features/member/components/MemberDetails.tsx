import Link from 'next/link'
import { FC } from 'react'
import { IMember, MemberDetailsOthers } from '../index'
import { MdEdit } from 'react-icons/md'
import { formatDateToddmYYY, getAge } from '../../../utils'

const MemberDetails: FC<{ member: IMember }> = ({
  member: {
    _id,
    fullName,
    gender,
    dateOfBirth,
    email,
    homeAddress,
    maritalStatus,
    occupation,
    postalAddress,
    attendances,
    departments,
    // phoneNumbers,
  },
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          Members Details
        </h1>
        <Link
          href={`/members/${_id}/edit`}
          className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdEdit />
          <div>Edit</div>
        </Link>
      </div>
      <div className="shadow-md p-3 rounded-md mt-5">
        <div className="mb-5">
          <h3 className="font-semibold">Name</h3>
          <h4>{fullName ? fullName : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Gender</h3>
          <h4>{gender ? gender : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Date Of Birth</h3>
          <h4>{dateOfBirth ? formatDateToddmYYY(dateOfBirth) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Age</h3>
          <h4>{dateOfBirth ? getAge(dateOfBirth) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Email</h3>
          <h4>{email ? email : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Marital Status</h3>
          <h4>{maritalStatus ? maritalStatus : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Occupation</h3>
          <h4>{occupation ? occupation : 'Not Given'}</h4>
        </div>
        {/* <div className="mb-5">
          <h3 className="font-semibold">Phone Numbers</h3>
          {!phoneNumbers
            ? 'Not Given'
            : phoneNumbers.length === 0
            ? 'Not Given'
            : phoneNumbers.map((phoneNumber) => (
                <div className="flex items-center text-primary hover:text-tertiary">
                  <MdCall className="mr-1" />
                  <a
                    href={`tel:+${phoneNumber.countryCode}${phoneNumber.number}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {phoneNumber.countryCode}
                    {phoneNumber.number}
                  </a>
                </div>
              ))}
        </div> */}
        <div className="mb-5">
          <h3 className="font-semibold">Home Address</h3>
          <h4>{homeAddress ? homeAddress : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Postal Address</h3>
          <h4>{postalAddress ? postalAddress : 'Not Given'}</h4>
        </div>
      </div>

      <MemberDetailsOthers
        attendances={attendances}
        departments={departments}
      />
    </section>
  )
}

export default MemberDetails
