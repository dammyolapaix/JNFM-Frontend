import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { Layout, QueryResult } from '../../../../components'
import { getMembersAction } from '../../../../features/member'
import { CellAddMember, resetCell } from '../../../../features/cell'

const AddMemberToCellPage = () => {
  const dispatch = useAppDispatch()

  const {
    isLoading: memberIsLoading,
    isError: memberIsError,
    error: memberError,
    isSuccess: memberIsSucces,
    membersRes: { members },
  } = useAppSelector((state) => state.member)

  const {
    isLoading: cellIsLoading,
    isError: cellIsError,
    error: cellError,
    isSuccess: cellIsSucces,
    cellResCRUD: { cell },
  } = useAppSelector((state) => state.cell)

  useEffect(() => {
    dispatch(getMembersAction())
    if (cellIsSucces && cell !== null) {
      dispatch(resetCell())
    }
  }, [dispatch, cellIsSucces, cell])

  return (
    <Layout>
      <QueryResult
        isLoading={cellIsLoading ? cellIsLoading : memberIsLoading}
        isSuccess={cellIsSucces ? cellIsSucces : memberIsSucces}
        isError={cellIsError ? cellIsError : memberIsError}
        error={cellError ? cellError : memberError}
      >
        <CellAddMember members={members} />
      </QueryResult>
    </Layout>
  )
}

export default AddMemberToCellPage
