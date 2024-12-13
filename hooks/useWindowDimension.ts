import { useState, useEffect } from 'react';


const useWindowDimension = (breakpoinrt: number): boolean => {
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobileSize(window.innerWidth <= breakpoinrt);
  
      const windowResizeHandler = () => {
        const matchMediaString = `(max-width: ${breakpoinrt}px)`;

        setIsMobileSize(matchMedia(matchMediaString).matches);
      };

      window.addEventListener('resize', windowResizeHandler);
      return () => window.removeEventListener('resize', windowResizeHandler);
    }
  }, [breakpoinrt]);

  return isMobileSize;
};

export default useWindowDimension;