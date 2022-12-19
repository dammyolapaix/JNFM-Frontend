import Link from 'next/link'
import { FC } from 'react'
import { MdDashboard } from 'react-icons/md'

const SideNav: FC<{ showSideNav: boolean }> = ({ showSideNav }) => {
  return (
    <aside
      className={`${
        !showSideNav ? 'hidden' : ''
      } absolute top-0 right-1/4 bottom-0 left-0 h-screen z-10 md:right-2/4 lg:right-3/4`}
    >
      <div className="h-full bg-white shadow-2xl p-10 text-primary">
        <Link href={'/'} className="flex items-center border-b py-5">
          <MdDashboard className="lg:text-5xl mr-3" />
          <div className="lg:text-2xl font-semibold">Dashboard</div>
        </Link>
        <Link href={'/members'} className="flex items-center border-b py-5">
          <MdDashboard className="lg:text-5xl mr-3" />
          <div className="lg:text-2xl font-semibold">Members</div>
        </Link>
      </div>
    </aside>
  )
}

export default SideNav
