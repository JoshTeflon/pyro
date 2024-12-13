'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';

import { useWindowDimension } from '@/hooks';
import { NavContextInterface } from '@/types';

export const NavContext = createContext<NavContextInterface | undefined>(undefined)

const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const isMobileSize = useWindowDimension(1024);

  const toggleNavOpen = () => setNavOpen(prev => !prev);
  const closeNav = () => setNavOpen(false);
  
  useEffect(() => !isMobileSize ? setNavOpen(false) : undefined, [isMobileSize]);

  return (
    <NavContext.Provider value={{ navOpen, toggleNavOpen, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;