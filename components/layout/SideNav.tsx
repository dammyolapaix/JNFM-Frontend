import Link from 'next/link'
import { FC } from 'react'
import { MdDashboard } from 'react-icons/md'
import { MdGroup } from 'react-icons/md'

const SideNav: FC<{ showSideNav: boolean }> = ({ showSideNav }) => {
  return (
    <aside
      className={`${
        !showSideNav ? 'hidden' : ''
      } absolute top-0 right-1/4 bottom-0 left-0 h-screen z-10 md:right-2/4 lg:right-3/4`}
    >
      <div className="h-full bg-white shadow-2xl p-10 text-primary">
        <Link
          href={'/'}
          className="flex items-center border-b lg:text-xl py-5 hover:text-secondary"
        >
          <MdDashboard className="mr-3" />
          <div className="font-semibold">Dashboard</div>
        </Link>
        <Link
          href={'/members'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <MdGroup className="mr-3" />
          <div className="font-semibold">Members</div>
        </Link>
      </div>
    </aside>
  )
}

export default SideNav
