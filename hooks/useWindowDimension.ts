import { useState, useEffect } from 'react';


const useWindowDimension = (breakpoint = 768): boolean => {
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false);

  useEffect(() => {
    if (typeof globalThis !== 'undefined') {
      setIsMobileSize(globalThis.innerWidth < breakpoint);
  
      const windowResizeHandler = () => {
        const matchMediaString = `(max-width: ${breakpoint}px)`;

        setIsMobileSize(matchMedia(matchMediaString).matches);
      };

      globalThis.addEventListener('resize', windowResizeHandler);
      return () => globalThis.removeEventListener('resize', windowResizeHandler);
    }
  }, [breakpoint]);

  return isMobileSize;
};

export default useWindowDimension;