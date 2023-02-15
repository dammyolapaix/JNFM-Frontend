import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Layout } from '../../../../components'
import { getSingleCellById, ICellRes } from '../../../../features/cell'
import {
  ChurchServices,
  getChurchServices,
  IChurchServicesRes,
} from '../../../../features/churchService'
import { IParams } from '../../../../interfaces'

const CellAttendancePage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cellRes: { cell }, churchServicesRes }) => {
  return (
    <Layout>
      {cell && (
        <ChurchServices churchServicesRes={churchServicesRes} cell={cell} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  churchServicesRes: IChurchServicesRes
  cellRes: ICellRes
}> = async ({ params }) => {
  const { id } = params as IParams

  const cellRes: ICellRes = await getSingleCellById(id)

  const churchServicesRes = await getChurchServices()

  if (!churchServicesRes || !cellRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cellRes,
      churchServicesRes,
    },
  }
}

export default CellAttendancePage
