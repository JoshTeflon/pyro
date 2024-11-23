import { createContext, ReactNode, useState } from 'react';

import { NavContextInterface } from '@/types';

export const NavContext = createContext<NavContextInterface | null>(null)

const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNavOpen = () => setNavOpen(prev => !prev);

  return (
    <NavContext.Provider value={{ navOpen, toggleNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;