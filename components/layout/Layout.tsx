import Head from 'next/head'
import styles from './layout.module.css'
import { ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NextJS Example</title>
      </Head>
      <main className={styles.main}>{ children }</main>
    </>
  )
}
