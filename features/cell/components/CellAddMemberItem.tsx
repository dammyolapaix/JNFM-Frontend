import React, { FC } from 'react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { useAppDispatch } from '../../../hooks'
import { IMember } from '../../member'
import { addMemberToCellAction, ICell } from '../index'

const CellAddMemberItem: FC<{
  member: IMember
  cellId: ICell['_id']
}> = ({ member: { _id, fullName, gender, departments }, cellId }) => {
  const dispatch = useAppDispatch()

  const cellMember =
    departments && departments.filter((department) => department._id === cellId)

  const isMember = typeof cellMember !== 'undefined' && cellMember.length > 0

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
                  addMemberToCellAction({
                    cellId,
                    member: _id,
                  })
                )
              }
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-md py-2 px-4"
            >
              <FaUserPlus />
            </button>
          </td>
        )}
        {isMember && cellMember && (
          <td>
            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4">
              <FaUserMinus />
            </button>
          </td>
        )}
      </tr>
    </>
  )
}

export default CellAddMemberItem
