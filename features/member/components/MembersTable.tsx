import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import {
  MemberItem,
  IMember,
  MemberAdvancedSearchInputForm,
  generateMembersReport,
} from '../index'
import {
  AdvancedSearchDrawer,
  NoRecordFound,
  QueryResult,
} from '../../../components'
import { useAppSelector } from '../../../hooks'
import { MdFileDownload } from 'react-icons/md'

const MembersTable: FC<{
  members: IMember[]
}> = ({ members }) => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const { route } = useRouter()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    membersRes: membersResClient, //To differentiate between client and server members response
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    isSuccess && setIsClient(true)

    return () => {
      setIsClient(false)
    }
  }, [isSuccess, membersResClient])

  return (
    <>
      <QueryResult
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        error={error && error}
      />
      {!isClient && members.length === 0 ? (
        <NoRecordFound message="Oops, No member found" />
      ) : isClient && membersResClient.count === 0 ? (
        <>
          <NoRecordFound message="Oops, No member found for this filter, filter for something else" />

          <div className="flex justify-center items-center border border-tertiary rounded-md p-3 w-1/5 mx-auto cursor-pointer hover:shadow-2xl hover:bg-gray-100">
            <AdvancedSearchDrawer
              children={<MemberAdvancedSearchInputForm />}
            />
          </div>
        </>
      ) : (
        <div className="my-10 shadow-md bg-white p-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl text-secondary mb-5">
              Members ({isClient ? membersResClient.count : members.length})
            </h2>
            <div className="flex justify-between items-center">
              <MdFileDownload
                onClick={() => generateMembersReport(members)}
                className="text-primary text-4xl cursor-pointer hover:text-primary/60"
              />
              <AdvancedSearchDrawer
                children={<MemberAdvancedSearchInputForm />}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-secondary">
                <tr className="text-left border">
                  <th className="p-3">Name</th>
                  <th>Sex</th>
                  <th>Age</th>
                  {!route.includes('/cells/[id]') && <th>Cell</th>}
                  <th>Date Joined</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!isClient
                  ? members.map((member) => (
                      <MemberItem key={member._id} member={member} />
                    ))
                  : membersResClient.members.map((member) => (
                      <MemberItem key={member._id} member={member} />
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default MembersTable
