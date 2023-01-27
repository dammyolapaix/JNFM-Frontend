import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout, QueryResult } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IParams } from '../../../interfaces'
import {
  CellInputForm,
  getSingleCellById,
  ICellRes,
  resetCell,
} from '../../../features/cell'

const EditCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes: { cell } }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    cellResCRUD: { cell: updatedCell },
  } = useAppSelector((state) => state.cell)

  useEffect(() => {
    if (isSuccess && updatedCell !== null) {
      toast.success('Cell updated successfully')
      dispatch(resetCell())
      router.push(`/cells/${cell?._id}`)
    }
  }, [router, dispatch, isSuccess, updatedCell])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {cell && cell !== null && <CellInputForm cell={cell} />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  cellRes: ICellRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const cellRes: ICellRes = await getSingleCellById(id)

  if (!cellRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { cellRes },
  }
}

export default EditCellPage
