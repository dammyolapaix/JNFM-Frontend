import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { useRouter } from 'next/router'
import { getChurchServicesAction } from '../../../churchService'
import { QueryResult } from '../../../../components'
import { CellAttendances } from '../../index'

const CellDetailsAttendances: FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { isLoading, isError, error, isSuccess, churchServicesRes } =
    useAppSelector((state) => state.churchService)

  useEffect(() => {
    dispatch(getChurchServicesAction({}))
  }, [router])

  return (
    <QueryResult
      children={<CellAttendances churchServicesRes={churchServicesRes} />}
      error={error}
      isError={isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  )
}

export default CellDetailsAttendances
