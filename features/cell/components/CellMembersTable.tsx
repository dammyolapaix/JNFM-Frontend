import { FC } from 'react'
import { IMember } from '../../member'
import { CellMemberItem } from '../index'

const CellMembersTable: FC<{ members: IMember[] }> = ({ members }) => {
  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-3">All Members</h2>
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
