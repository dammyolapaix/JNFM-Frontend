import React, { FC } from 'react'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import { ICell } from '../../cell'
import { IChurchServicesRes, ChurchServiceItem } from '../index'

const ChurchServices: FC<{
  churchServicesRes: IChurchServicesRes
  cell?: ICell
}> = ({ churchServicesRes, cell }) => {
  const hasCell = cell ? true : false

  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            {hasCell
              ? `${cell?.name} Attendances`
              : `ChurchService (${churchServicesRes.count})`}
          </h1>
          {!hasCell && (
            <Link
              href={`/services/new`}
              className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
            >
              <MdAdd />
              <div className="">New</div>
            </Link>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Attendances</th>
                <th className="px-4 py-2">
                  {!hasCell ? 'Offerings' : 'Males'}
                </th>
                <th className="px-4 py-2">
                  {!hasCell ? 'Expenditures' : 'Females'}
                </th>
              </tr>
            </thead>
            <tbody>
              {churchServicesRes.churchServices.map((churchService) => (
                <ChurchServiceItem
                  key={churchService._id}
                  churchService={churchService}
                  cell={cell ? cell : undefined}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {!hasCell && (
        <div className="flex items-center justify-center mt-10">
          <Link
            href={`/services/ServiceTypes/new`}
            className="bg-tertiary hover:bg-primary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div>Add New Church Service Type</div>
          </Link>
        </div>
      )}
    </section>
  )
}

export default ChurchServices
