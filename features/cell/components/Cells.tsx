import React, { FC } from 'react'
import Link from 'next/link'
import { CellItem, ICellsRes } from '../index'
import { MdAdd } from 'react-icons/md'

const Cells: FC<{ cellsRes: ICellsRes }> = ({ cellsRes }) => {
  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            Cells ({cellsRes.count})
          </h1>
          <Link
            href={`/cells/new`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div>New</div>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="p-3">Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {cellsRes.cells.map((cell) => (
                <CellItem key={cell._id} cell={cell} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Cells
