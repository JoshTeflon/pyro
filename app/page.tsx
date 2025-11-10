'use client';

import { useEffect, useState } from 'react';

import { CustomCursor } from '@/components/shared';
import { Header, MobileNav } from '@/components/interfaces';
import { Footer, Gallery, Home, Music } from '@/components/views';

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
      <CustomCursor />
      {/* {isLoading ? (
          // <Loading />
          <div className='w-full h-screen flex items-center justify-center'>loading...</div>
        ) : ( */}
          <Header  />
          <MobileNav />
          <main className='relative w-full h-full flex flex-col grow font-geist-mono tracking-wide'>
            <Home />
            <Music />
            {/* <div className="sticky top-0 h-screen">
              <Music />
            </div> */}
            <Gallery />
            <Footer /> {/* TODO: update this component to 'Contact' or 'Newsletter' */}
          </main>
        {/* )} */}
    </NavContextProvider>
  );
}
