import { useEffect, useState, FC } from 'react'
import { IMembersRes } from '../../../member'
import { NoRecordFound } from '../../../../components'
import {
  CellMembersGraph,
  CellMembersOverview,
  CellMembersTable,
} from '../../index'
import { useRouter } from 'next/router'

const CellMembers: FC<{ membersRes: IMembersRes }> = ({
  membersRes: { count, members },
}) => {
  const [cellId, setCellId] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    setCellId(router.query.id as string)
  }, [router])

  return (
    <section>
      {count > 0 ? (
        <>
          <CellMembersOverview count={count} members={members} />
          <CellMembersGraph members={members} />
          <CellMembersTable members={members} />
        </>
      ) : (
        cellId !== '' && (
          <NoRecordFound
            message="No Member Found"
            cta="Add A Member"
            href={`/cells/${cellId}/members/new`}
          />
        )
      )}
    </section>
  )
}

export default CellMembers
