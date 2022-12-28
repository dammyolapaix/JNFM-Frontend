import React, { FC } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import { useAppDispatch } from '../../../hooks'
import { IMember } from '../../member'
import { addMemberToDepartmentAction, IDepartment } from '../index'

const DepartmentAddMemberItem: FC<{
  member: IMember
  departmentId: IDepartment['_id']
}> = ({ member: { _id, fullName, gender, departments }, departmentId }) => {
  const dispatch = useAppDispatch()

  const departmentMember =
    departments &&
    departments.filter((department) => department._id === departmentId)

  console.log(departments)

  const isMember =
    typeof departmentMember !== 'undefined' && departmentMember.length > 0

  return (
    <>
      <tr className="border">
        <td className="p-3">{fullName ? fullName : 'Not Given'}</td>
        <td>{gender ? gender?.at(0) : 'Not Given'}</td>
        <td>
          {isMember ? (
            <span className="text-green-500">Member</span>
          ) : (
            <span className="text-red-500">Not Member</span>
          )}
        </td>
        {!isMember && (
          <td className="flex items-center my-2">
            <button
              onClick={() =>
                dispatch(
                  addMemberToDepartmentAction({
                    departmentId,
                    member: _id,
                  })
                )
              }
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-md py-2 px-4"
            >
              <MdAdd className="text-xs" />
            </button>
          </td>
        )}
        {isMember && departmentMember && (
          <td>
            <button
              //   onClick={() =>
              //     dispatch(
              //       removeMemberFromDepartmentAction(departmentMember[0]._id)
              //     )
              //   }
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4"
            >
              <MdRemove className="text-xs" />
            </button>
          </td>
        )}
      </tr>
    </>
  )
}

export default DepartmentAddMemberItem
