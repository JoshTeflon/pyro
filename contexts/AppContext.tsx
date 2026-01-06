'use client';

import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { useWindowDimension } from '@/hooks';
import { IAppContext } from '@/types';

export const AppContext = createContext<IAppContext | undefined>(undefined)

const AppContextProvider = ({ children, ready }: { children: ReactNode, ready: boolean }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const isMobileSize = useWindowDimension();

  const toggleNavOpen = useCallback(() => setNavOpen(prev => !prev), [setNavOpen]);
  const closeNav = useCallback(() => setNavOpen(false), [setNavOpen]);
  
  useEffect(() => !isMobileSize ? setNavOpen(false) : undefined, [isMobileSize]);

  const contextValue = useMemo(() => ({
    navOpen,
    toggleNavOpen,
    closeNav,
    isMobileSize,
    ready,
  }), [navOpen, toggleNavOpen, closeNav, isMobileSize, ready])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;