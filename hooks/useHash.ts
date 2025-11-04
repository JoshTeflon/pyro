import { useState, useEffect } from 'react';

/**
 * Custom hook to read and subscribe to changes in the URL hash fragment.
 * @returns The current hash fragment (e.g., "#gallery") or an empty string.
 **/
export const useHash = (): string => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const initialHash = globalThis.location.hash;
    setHash(initialHash);

    const handleHashChange = () => {
      setHash(globalThis.location.hash);
    };

    // Listen for the hashchange event
    globalThis.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
      globalThis.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return hash;
};

// Example Usage in a Component (assuming you put this in a file named useHash.ts)
/*
import { useHash } from './useHash';

const GalleryComponent = () => {
    const currentHash = useHash();
    
    // Check if the fragment matches
    const isGalleryRoute = currentHash === '#gallery'; 

    return (
        <div>
            {isGalleryRoute 
                ? <p>Welcome to the Gallery!</p> 
                : <p>Viewing the main page content.</p>
            }
            <a href="#gallery">Go to Gallery Anchor</a>
        </div>
    );
};
*/
