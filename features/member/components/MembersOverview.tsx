import React, { FC } from 'react'
import { IoIosPerson } from 'react-icons/io'
import { MdPeopleAlt } from 'react-icons/md'
import { SlUserFemale } from 'react-icons/sl'
import { IMember, useMembersTotal } from '../'

const MembersOverview: FC<{ members: IMember[] }> = ({ members }) => {
  const { totalFemales, totalMales, totalMembers } = useMembersTotal(members)

  return (
    <div className="my-10 shadow-md bg-white p-3">
      <h2 className="font-bold text-xl text-secondary mb-5">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <div className="flex items-center">
            <span className="mr-1 bg-primary p-1 rounded-md">
              <MdPeopleAlt className="text-xl text-white" />
            </span>
            <span className="ml-1">Total Members</span>
          </div>
          <div className="font-bold ml-10">{totalMembers}</div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="mr-1 bg-primary p-1 rounded-md">
              <IoIosPerson className="text-xl text-white" />
            </span>
            <span className="ml-1">Males</span>
          </div>
          <div className="font-bold ml-10">{totalMales}</div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="mr-1 bg-primary p-1 rounded-md">
              <SlUserFemale className="text-xl text-white" />
            </span>
            <span className="ml-1">Females</span>
          </div>
          <div className="font-bold ml-10">{totalFemales}</div>
        </div>
      </div>
    </div>
  )
}

export default MembersOverview
