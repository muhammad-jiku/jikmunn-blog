import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/page.module.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
