import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import {
  DepartmentAddMember,
  resetDepartment,
} from '../../../../features/department'
import { Layout, QueryResult } from '../../../../components'
import { getMembersAction } from '../../../../features/member'

const AddNewDepartmentPage = () => {
  const dispatch = useAppDispatch()

  const {
    isLoading: memberIsLoading,
    isError: memberIsError,
    error: memberError,
    isSuccess: memberIsSucces,
    membersRes: { members },
  } = useAppSelector((state) => state.member)

  const {
    isLoading: departmentIsLoading,
    isError: departmentIsError,
    error: departmentError,
    isSuccess: departmentIsSucces,
    departmentResCRUD: { department },
  } = useAppSelector((state) => state.department)

  useEffect(() => {
    dispatch(getMembersAction())
    if (departmentIsSucces && department !== null) {
      dispatch(resetDepartment())
    }
  }, [dispatch, departmentIsSucces, department])

  return (
    <Layout>
      <QueryResult
        isLoading={departmentIsLoading ? departmentIsLoading : memberIsLoading}
        isSuccess={departmentIsSucces ? departmentIsSucces : memberIsSucces}
        isError={departmentIsError ? departmentIsError : memberIsError}
        error={departmentError ? departmentError : memberError}
      >
        <DepartmentAddMember members={members} />
      </QueryResult>
    </Layout>
  )
}

export default AddNewDepartmentPage
