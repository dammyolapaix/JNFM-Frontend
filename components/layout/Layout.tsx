import React, { FC, useEffect, useState, ReactNode } from 'react'
import Head from 'next/head'
import { HiMenu } from 'react-icons/hi'
import { SideNav } from '../index'

type Props = {
  title: string
  description: string
  keywords: string
  children: ReactNode
}

export default function Layout({
  title,
  description,
  keywords,
  children,
}: Props) {
  const [showSideNav, setShowSideNav] = useState<boolean>(false)

  const toggleSidenav = () => {
    setShowSideNav(!showSideNav)
  }

  if (typeof window !== 'undefined') {
    // Client-side-only code
    const { innerWidth: width } = window
    useEffect(() => {
      if (width >= 1024 && showSideNav === false) {
        setShowSideNav(true)
      }
    }, [])
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <section className="relative w-full">
        <SideNav showSideNav={showSideNav} />
        <main
          className={`${
            !showSideNav ? '' : 'lg:left-1/4'
          } absolute top-0 right-0 bottom-0 left-0`}
        >
          <div className="bg-primary p-5">
            <div className="flex flex-row-reverse">
              <HiMenu
                className="text-3xl cursor-pointer text-white"
                onClick={toggleSidenav}
              />
            </div>
          </div>
          <section className="p-10">{children}</section>
        </main>
      </section>
    </>
  )
}

Layout.defaultProps = {
  title: 'JNFM - Jesus Never Fails Ministry',
  description: 'JNFM - Jesus Never Fails Ministry',
  keywords: 'JNFM - Jesus Never Fails Ministry',
}
