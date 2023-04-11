import { useEffect } from 'react'
import Head from 'next/head';
import dynamic from "next/dynamic";
import Infobar from '@/components/Infobar';
import Header from '@/components/Header';

function MapNoSSR() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });

  return (
    <div id="map" className='h-[70vh]'>
      <MapWithNoSSR />
    </div>
  );
}

export default function Home() {


  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-[100vh] relative'>
        <Header />
        <Infobar />
        <MapNoSSR />
      </main >
    </>
  )
}
