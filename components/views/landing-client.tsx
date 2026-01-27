'use client';

import { useEffect } from 'react';

import Loading from '@/app/[locale]/loading';

// import { CustomCursor } from '@/components/shared';
import { Header } from '@/components/interfaces';
import { Connect, Gallery, Home, Music } from '@/components/views';

import { useRouter } from '@/i18n/navigation';
import { useAppReady } from '@/hooks';
import AppContextProvider from '@/contexts/AppContext';

const LandingClient = () => {
  const router = useRouter();

  const { isLoading, progress } = useAppReady();

  useEffect(() => {
    router.refresh();
  }, [router]);
  
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
};

export default LandingClient;