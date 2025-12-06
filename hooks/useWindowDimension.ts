import { useState, useEffect } from 'react';


const useWindowDimension = (breakpoinrt = 1024): boolean => {
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false);

  useEffect(() => {
    if (typeof globalThis !== 'undefined') {
      setIsMobileSize(globalThis.innerWidth <= breakpoinrt);
  
      const windowResizeHandler = () => {
        const matchMediaString = `(max-width: ${breakpoinrt}px)`;

        setIsMobileSize(matchMedia(matchMediaString).matches);
      };

      globalThis.addEventListener('resize', windowResizeHandler);
      return () => globalThis.removeEventListener('resize', windowResizeHandler);
    }
  }, [breakpoinrt]);

  return isMobileSize;
};

export default useWindowDimension;