import { useContext } from 'react';

import { AppContext } from '@/contexts/AppContext';
import { IAppContext } from '@/types';

const useApp = () => {
  const context = useContext<IAppContext | undefined>(AppContext);

  if (!context) {
    throw new Error('useApp must be used within the AppContextProvider');
  }
  return context;
};

export default useApp;