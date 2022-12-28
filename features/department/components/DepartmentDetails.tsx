import { FC } from 'react'
import Link from 'next/link'
import { IDepartment } from '../index'
import { MdEdit } from 'react-icons/md'
import { MembersTableLayout } from '../../member'

const DepartmentDetails: FC<{ department: IDepartment }> = ({
  department: { _id, name, members },
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          Department Details
        </h1>
        <Link
          href={`/departments/${_id}/edit`}
          className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdEdit />
          <div>Edit</div>
        </Link>
      </div>
      <div className="shadow-md p-3 rounded-md mt-5">
        <div className="mb-5">
          <h3 className="font-semibold">Name</h3>
          <h4>{name ? name : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Number of members</h3>
          <h4>{members ? members.length : '0'}</h4>
        </div>
      </div>

      <div className="mt-10">
        {members && members.length > 0 ? (
          <MembersTableLayout
            membersData={members}
            href={'/departments/members/new'}
          />
        ) : (
          <div className="text-center text-2xl text-bold">No Member</div>
        )}
      </div>
    </section>
  )
}

export default DepartmentDetails
