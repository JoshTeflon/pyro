import { useContext } from 'react';

import { NavContext } from '@/contexts/NavContext';
import { INavContext } from '@/types';

const useNav = () => {
  const context = useContext<INavContext | undefined>(NavContext);

  if (!context) {
    throw new Error('useNav must be used within a NavContextProvider');
  }
  return context;
};

export default useNav;