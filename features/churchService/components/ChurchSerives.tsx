import Link from 'next/link'
import React, { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { IChurchServicesRes, ChurchServiceItem } from '../index'

const ChurchServices: FC<{ churchServicesRes: IChurchServicesRes }> = ({
  churchServicesRes,
}) => {
  return (
    <section>
      <div className="shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl mb-5 text-secondary">
            ChurchService ({churchServicesRes.count})
          </h1>
          <Link
            href={`/services/new`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdAdd />
            <div className="">New</div>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-secondary">
              <tr className="text-left border">
                <th className="p-3">Date</th>
                <th>Type</th>
                <th>Starts At</th>
                <th>Ends At</th>
                <th>Attendances</th>
              </tr>
            </thead>
            <tbody>
              {churchServicesRes.churchServices.map((churchService) => (
                <ChurchServiceItem
                  key={churchService._id}
                  churchService={churchService}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          href={`/services/ServiceTypes/new`}
          className="bg-tertiary hover:bg-primary text-white rounded-md py-2 px-4 flex items-center"
        >
          <MdAdd />
          <div>Add New Church Service Type</div>
        </Link>
      </div>
    </section>
  )
}

export default ChurchServices
