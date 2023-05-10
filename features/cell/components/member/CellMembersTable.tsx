import { FC, useEffect, useState } from 'react'
import { IMember } from '../../../member'
import { CellMemberItem } from '../../index'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import { useRouter } from 'next/router'

const CellMembersTable: FC<{ members: IMember[] }> = ({ members }) => {
  const [cellId, setcellId] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setcellId(router.query.id as string)
    return () => setcellId('')
  }, [router, cellId])

  return (
    <div className="my-10 shadow-md bg-white p-3">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-bold text-xl text-secondary mb-3">All Members </h2>
        {cellId !== '' && (
          <Link
            href={`/cells/${cellId}/members/new`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div>Add New Member</div>
          </Link>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-left border">
              <th className="p-3">Name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Date Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.map((member) => (
                <CellMemberItem key={member._id} member={member} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CellMembersTable
