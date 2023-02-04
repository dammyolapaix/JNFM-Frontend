import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { Layout, QueryResult } from '../../../../components'
import { MemberInputForm, resetMember } from '../../../../features/member'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ICellRes, getSingleCellById } from '../../../../features/cell'
import { IParams } from '../../../../interfaces'

const AddMemberToCellPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes: { cell } }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    memberResCRUD: { member },
  } = useAppSelector((state) => state.member)

  useEffect(() => {
    if (isSuccess && member !== null) {
      toast.success('Member added successfully')
      dispatch(resetMember())
      router.push('/members')
    }
  }, [router, dispatch, isLoading, isError, error, isSuccess, member])

  return (
    <Layout>
      <ToastContainer />

      <QueryResult
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      ></QueryResult>

      {cell && cell !== null && (
        <MemberInputForm cellName={cell.name} cellId={cell._id} />
      )}
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

export default AddMemberToCellPage
