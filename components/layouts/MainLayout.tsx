import { FC, ReactNode } from "react";
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

 
type Props = {
  children: ReactNode;
};


export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Gasty Next App</title>
            <meta name="description" content="Gasty" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}
