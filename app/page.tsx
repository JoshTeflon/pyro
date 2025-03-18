'use client';

import { useEffect, useState } from 'react';

import { Header, MobileNav } from '@/components/interfaces';
import { Footer, Home, Music } from '@/components/views';
import NavContextProvider from '@/contexts/NavContext';

export default function Landing() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <NavContextProvider>
      {/* {isLoading ? (
          // <Loading />
          <div className='w-full h-dvh flex items-center justify-center'>loading...</div>
        ) : ( */}
          <main className='relative w-full h-full flex flex-col grow font-geist-mono tracking-wide'>
            <Header  />
            <MobileNav />
            <Home />
            <Music />
            <Footer />
          </main>
        {/* )} */}
    </NavContextProvider>
  );
}
