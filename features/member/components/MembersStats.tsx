import { FC } from 'react'
import IMember from '../member.interfaces'

const MembersStats: FC<{ members: IMember[] }> = ({ members }) => {
  return (
    <div className="shadow-md bg-white p-3 mb-5">
      <h3 className="text-center font-bold text-xl text-secondary mb-5">
        Members Stats
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        <div className="">
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Members Total</h4>
            <h4>{members.length}</h4>
          </div>
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Males</h4>
            <h4>
              {members.filter((member) => member.gender === 'Male').length}
            </h4>
          </div>
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Females</h4>
            <h4>
              {members.filter((member) => member.gender === 'Female').length}
            </h4>
          </div>
        </div>
        <div className="">
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Married</h4>
            <h4>
              {
                members.filter(
                  (member) =>
                    member.maritalStatus && member.maritalStatus === 'Married'
                ).length
              }
            </h4>
          </div>
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Single</h4>
            <h4>
              {
                members.filter(
                  (member) =>
                    member.maritalStatus && member.maritalStatus === 'Single'
                ).length
              }
            </h4>
          </div>
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Divorced</h4>
            <h4>
              {
                members.filter(
                  (member) =>
                    member.maritalStatus && member.maritalStatus === 'Divorced'
                ).length
              }
            </h4>
          </div>
          <div className="mb-3">
            <h4 className="font-semibold text-primary">Widowed</h4>
            <h4>
              {
                members.filter(
                  (member) =>
                    member.maritalStatus && member.maritalStatus === 'Widowed'
                ).length
              }
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersStats
