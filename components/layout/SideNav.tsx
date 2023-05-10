import Link from 'next/link'
import { FC } from 'react'
import { MdDashboard, MdGroup, MdGroups } from 'react-icons/md'
import { FaChurch } from 'react-icons/fa'
import { GiMoneyStack, GiPayMoney } from 'react-icons/gi'
import { IoIosJournal } from 'react-icons/io'

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
        <Link
          href={'/cells'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <MdGroups className="mr-3" />
          <div className="font-semibold">Cells</div>
        </Link>
        <Link
          href={'/departments'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <MdGroups className="mr-3" />
          <div className="font-semibold">Departments</div>
        </Link>
        <Link
          href={'/services'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <FaChurch className="mr-3" />
          <div className="font-semibold">Church Services</div>
        </Link>
        <Link
          href={'/expenditures'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <GiPayMoney className="mr-3" />
          <div className="font-semibold">Expenditures</div>
        </Link>
        <Link
          href={'/incomes'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <GiMoneyStack className="text-primary mr-3" />
          <div className="font-semibold">Income</div>
        </Link>
        <Link
          href={'/cashBooks'}
          className="flex items-center border-b py-5 hover:text-secondary"
        >
          <IoIosJournal className="mr-3" />
          <div className="font-semibold">Cash Book</div>
        </Link>
      </div>
    </aside>
  )
}

export default SideNav
