import { useContext } from 'react';

import { NavContext } from '@/app/contexts/NavContext';
import { NavContextInterface } from '@/types';

const useNav = () => {
  const context = useContext<NavContextInterface | null>(NavContext);

  if (!context) {
    throw new Error('useNav must be used within a NavContextProvider');
  }
  return context;
};

export default useNav;