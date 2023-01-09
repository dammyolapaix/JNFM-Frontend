import React, { FC } from 'react'

interface TableProps<T> {
  data: T[]
  className: string
  headers: string[]
}

const Table: FC<TableProps<{ [key: string]: any }>> = ({
  data,
  className,
  headers,
}) => {
  return (
    <table className={`${className}`}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {Object.values(row).map((cell) => (
              <td key={cell} className="px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
