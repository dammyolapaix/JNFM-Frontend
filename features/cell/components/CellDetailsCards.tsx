import { FC } from 'react'
import Link from 'next/link'
import { MdGroup } from 'react-icons/md'
import { IoIosPerson } from 'react-icons/io'
import { SlPeople, SlUserFemale } from 'react-icons/sl'
import ICell from '../cell.interfaces'

const CellDetailsCards: FC<{
  totalMembers: number
  totalMales: number
  totalFemales: number
  cellId: ICell['_id']
}> = ({ totalMembers, totalMales, totalFemales, cellId }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <Link
        href={`#`}
        className="bg-green-600 text-white hover:bg-green-500 rounded-md flex flex-col items-center justify-center p-5 font-semibold"
      >
        <MdGroup className="text-5xl" />
        <div className="my-3">Members</div>
        <div className="text-xl font-bold">{totalMembers}</div>
      </Link>
      <Link
        href={`#`}
        className="bg-red-600 text-white hover:bg-red-500 rounded-md flex flex-col items-center justify-center p-5 font-semibold"
      >
        <IoIosPerson className="text-5xl" />
        <div className="my-3">Males</div>
        <div className="text-xl font-bold">{totalMales}</div>
      </Link>
      <Link
        href={`#`}
        className="bg-primary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
      >
        <SlUserFemale className="text-5xl" />
        <div className="my-3">Females</div>
        <div className="text-xl font-bold">{totalFemales}</div>
      </Link>
      <Link
        href={`/cells/${cellId}/attendances`}
        className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-5 font-semibold"
      >
        <SlPeople className="text-5xl" />
        <div className="my-3">Attendance</div>
      </Link>
    </div>
  )
}

export default CellDetailsCards
