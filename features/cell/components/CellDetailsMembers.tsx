import { FC, useEffect } from 'react'
import { getMembersAction } from '../../member'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useRouter } from 'next/router'
import { QueryResult } from '../../../components'
import { CellMembers } from '../index'

const CellDetailsMembers: FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { isLoading, isError, error, isSuccess, membersRes } = useAppSelector(
    (state) => state.member
  )

  useEffect(() => {
    dispatch(getMembersAction({ 'cell.cell': router.query.id as string }))
  }, [router])

  return (
    <QueryResult
      children={<CellMembers membersRes={membersRes} />}
      error={error}
      isError={isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  )
}

export default CellDetailsMembers
