import Link from 'next/link'
import { FC } from 'react'
import { MdSearchOff } from 'react-icons/md'

interface INoRecordFound {
  message?: string
  href?: string
  cta?: string
}

const NoRecordFound: FC<INoRecordFound> = ({ message, href, cta }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <MdSearchOff className="text-red-500 text-9xl font-black" />
      <h3 className="text-2xl font-semibold my-5">
        {message ? message : 'Oops, No Records Found'}
      </h3>

      {href && cta && (
        <Link
          href={href}
          className="bg-tertiary hover:bg-primary px-5 py-3 text-white rounded-md"
        >
          {cta}
        </Link>
      )}
    </div>
  )
}

export default NoRecordFound
