'use client';

import Loading from './loading';

// import { CustomCursor } from '@/components/shared';
import { Header } from '@/components/interfaces';
import { Connect, Gallery, Home, Music } from '@/components/views';

import { useAppReady } from '@/hooks';
import AppContextProvider from '@/contexts/AppContext';

export default function Landing() {
  const { isLoading, progress } = useAppReady();

  if (isLoading) return <Loading progress={progress} />;

  return (
    <AppContextProvider ready={!isLoading}>
      {/* <CustomCursor /> */}
      <Header  />
      <main className='relative w-full h-full flex flex-col grow font-geist-mono tracking-wide overflow-hidden'>
        <Home />
        <Music />
        <Gallery />
        <Connect />
      </main>
    </AppContextProvider>
  );
}
