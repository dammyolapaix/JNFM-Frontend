import Link from 'next/link'
import { FC } from 'react'
import { IChurchService } from '../index'
import { MdEdit } from 'react-icons/md'
import { formatDateToddmYYY } from '../../../utils'

const ChurchServiceDetails: FC<{ churchService: IChurchService }> = ({
  churchService: {
    _id,
    date,
    endsAt,
    startsAt,
    churchServiceType,
    attendances,
  },
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
          <h3 className="font-semibold">Type</h3>
          <h4>
            {' '}
            {churchServiceType && typeof churchServiceType === 'object'
              ? churchServiceType.name
              : 'Not Given'}
          </h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Date</h3>
          <h4>{date ? formatDateToddmYYY(date) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Start At</h3>
          <h4>{startsAt ? formatDateToddmYYY(startsAt) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Ends At</h3>
          <h4>{endsAt ? formatDateToddmYYY(endsAt) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Attendance</h3>
          <h4>{attendances ? attendances.length : 'Not Given'}</h4>
        </div>
      </div>
    </section>
  )
}

export default ChurchServiceDetails
