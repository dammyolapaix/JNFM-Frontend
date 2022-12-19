import React, { ReactNode } from 'react'
import Head from 'next/head'

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

      <main>{children}</main>
    </>
  )
}

Layout.defaultProps = {
  title: 'JNFM - Jesus Never Fails Ministry',
  description: 'JNFM - Jesus Never Fails Ministry',
  keywords: 'JNFM - Jesus Never Fails Ministry',
}
