import { FC } from 'react'
import Link from 'next/link'
import { CellDetailsCards, ICell } from '../index'
import { MdEdit } from 'react-icons/md'
import { MembersTableLayout } from '../../member'
import { NoRecordFound } from '../../../components'

const CellDetails: FC<{ cell: ICell }> = ({ cell: { _id, name, members } }) => {
  const totalMembers = members ? members.length : 0

  const totalMales = members
    ? members.filter((member) => member.gender === 'Male').length
    : 0

  const totalFemales = members
    ? members.filter((member) => member.gender === 'Female').length
    : 0

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          {name ? name : 'Cell Details'}
        </h1>
        <Link
          href={`/cells/${_id}/edit`}
          className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdEdit />
          <div>Edit</div>
        </Link>
      </div>
      <CellDetailsCards
        totalMembers={totalMembers}
        totalMales={totalMales}
        totalFemales={totalFemales}
        cellId={_id}
      />
      <div className="mt-10">
        {members && members.length > 0 ? (
          <MembersTableLayout
            membersData={members}
            href={`/cells/${_id}/members/new`}
          />
        ) : (
          <NoRecordFound
            message="Oops, no member found in this cell"
            href={`/cells/${_id}/members/new`}
            cta="Add A New Member"
          />
        )}
      </div>
    </section>
  )
}

export default CellDetails
