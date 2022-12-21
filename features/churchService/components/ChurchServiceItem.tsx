import Link from 'next/link'
import { FC } from 'react'
import { IChurchService } from '../index'
import { MdEdit, MdRemoveRedEye } from 'react-icons/md'

const ChurchServiceItem: FC<{ churchService: IChurchService }> = ({
  churchService: { _id, date, endsAt, startsAt },
}) => {
  return (
    <>
      <tr className="border">
        <td className="p-3">{!date ? 'Not Given' : date}</td>
        <td>{!startsAt ? 'Not Given' : startsAt}</td>
        <td>{!endsAt ? 'Not Given' : endsAt}</td>
        <td className="flex items-center mt-2">
          <Link
            href={`/services/${_id}`}
            className="bg-secondary hover:bg-tertiary text-white rounded-md py-2 px-4 mr-3"
          >
            <MdRemoveRedEye />
          </Link>
          <Link
            href={`/services/${_id}/edit`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4"
          >
            <MdEdit />
          </Link>
        </td>
      </tr>
    </>
  )
}

export default ChurchServiceItem
