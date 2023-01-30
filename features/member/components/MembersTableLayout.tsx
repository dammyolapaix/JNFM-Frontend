import React, { FC } from 'react'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import IMember, { IMembersRes } from '../member.interfaces'
import {
  MemberAdvancedSearchInputForm,
  MembersStats,
  MembersTable,
} from '../index'
import { AdvancedSearchDrawer, NoRecordFound } from '../../../components'

const MembersTableLayout: FC<{
  membersRes?: IMembersRes
  membersResQueryCount?: boolean
  membersData?: {
    member: IMember
  }[]
  href?: string
}> = ({ membersRes, membersData, href, membersResQueryCount }) => {
  return (
    <section>
      {typeof membersResQueryCount !== 'undefined' &&
      !membersResQueryCount &&
      membersRes?.count === 0 ? (
        <NoRecordFound message="Oops, No Member Found, Add A New Member" />
      ) : (
        <div className="">
          {membersRes && <MembersStats members={membersRes.members} />}
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-2xl mb-5 text-secondary">
              Members (
              {membersRes
                ? membersRes.count
                : membersData
                ? membersData.length
                : '0'}
              )
            </h1>
            <div className="flex">
              <div className="mr-1">
                <AdvancedSearchDrawer>
                  <MemberAdvancedSearchInputForm />
                </AdvancedSearchDrawer>
              </div>
              <div className="ml-1">
                <Link
                  href={href ? href : `/members/new`}
                  className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
                >
                  <MdAdd />
                  <div>New</div>
                </Link>
              </div>
            </div>
          </div>

          {membersResQueryCount ? (
            <NoRecordFound message="Oops, No member found for this filter, filter for something else" />
          ) : (
            <>
              {membersRes && <MembersTable members={membersRes.members} />}

              {membersData && <MembersTable membersData={membersData} />}
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default MembersTableLayout
