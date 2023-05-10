import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { IParams } from '../../../../interfaces'
import { IMember } from '../../../member'
import { CellAddMemberItem } from '../../index'

const CellAddMember: FC<{ members: IMember[] }> = ({ members }) => {
  const router = useRouter()

  const { id } = router.query as IParams

  useEffect(() => {}, [router, id])

  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">Cell</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="p-3">Name</th>
                <th>Sex</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <CellAddMemberItem
                  key={member._id}
                  member={member}
                  cellId={id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default CellAddMember
