import Link from 'next/link'
import { FC } from 'react'
import { IChurchService } from '../index'
import { MdEdit } from 'react-icons/md'

const ChurchServiceDetails: FC<{ churchService: IChurchService }> = ({
  churchService: { _id, date, endsAt, startsAt },
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          Church Service Details
        </h1>
        <Link
          href={`/members/${_id}/edit`}
          className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdEdit />
          <div>Edit</div>
        </Link>
      </div>
      <div className="shadow-md p-3 rounded-md mt-5">
        <div className="mb-5">
          <h3 className="font-semibold">Date</h3>
          <h4>{date ? date : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Start At</h3>
          <h4>{startsAt ? startsAt : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Ends At</h3>
          <h4>{endsAt ? endsAt : 'Not Given'}</h4>
        </div>
      </div>
    </section>
  )
}

export default ChurchServiceDetails
