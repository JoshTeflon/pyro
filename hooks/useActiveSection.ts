import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds: string[], threshold = 1) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const getClosestEntry = (entries: IntersectionObserverEntry[]): string => {
          let closestEntryToZero: IntersectionObserverEntry = entries[0];

          for (let idx = 0; idx < entries.length; idx++) {
            const entry = entries[idx];
            const yRect = Math.abs(entry.intersectionRect.y);

            if (idx !== 0) {
              if (yRect === 0 || yRect <= Math.abs(closestEntryToZero.intersectionRect.y)) {
                closestEntryToZero = entry;
              }
            }
          }

          return closestEntryToZero.target.id;
        };

        setActiveSection(getClosestEntry(entries));
      },
      {
        root: document.querySelector('main'),
        threshold,
      }
    );
    
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    };

    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return activeSection;
};

export default useActiveSection;
