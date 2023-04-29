import { FC } from 'react'
import { IMembersRes } from '../../member'
import { NoRecordFound } from '../../../components'
import {
  CellMembersGraph,
  CellMembersOverview,
  CellMembersTable,
} from '../index'

const CellMembers: FC<{ membersRes: IMembersRes }> = ({
  membersRes: { count, members },
}) => {
  return (
    <section>
      {count > 0 ? (
        <>
          <CellMembersOverview count={count} members={members} />
          <CellMembersGraph members={members} />
          <CellMembersTable members={members} />
        </>
      ) : (
        <NoRecordFound cta="No Member Found" />
      )}
    </section>
  )
}

export default CellMembers
