'use client';

import { useEffect, useState } from 'react';

interface LoadingState {
  isLoading: boolean;
  progress: number;
}

const useAppReady = (): LoadingState => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkpoints = {
      dom: false,
      fonts: false,
      images: false,
      styles: false,
      layout: false,
      heroImage: false,
    };

    const TOTAL = Object.keys(checkpoints).length;

    const updateProgress = () => {
      if (!mounted) return;

      const completed = Object.values(checkpoints).filter(Boolean).length;
      const next = Math.round((completed / TOTAL) * 100);

      setProgress((prev) => (next > prev ? next : prev));

      if (completed === TOTAL) {
        setProgress(100);

        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      } // pause to see loader complete
    };

    /* ---------------- DOM + Load ---------------- */
    const onLoad = () => {
      checkpoints.dom = true;
      updateProgress();
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    /* ---------------- Fonts ---------------- */
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        checkpoints.fonts = true;
        updateProgress();
      });
    } else {
      setTimeout(() => {
        checkpoints.fonts = true;
        updateProgress();
      }, 800);
    }

    /* ---------------- Images ---------------- */
    const images = Array.from(document.images);
    if (images.length === 0) {
      checkpoints.images = true;
      updateProgress();
    } else {
      let loaded = 0;

      const done = () => {
        loaded++;
        setProgress((prev) =>
          Math.min(prev + Math.round(40 / images.length), 90)
        );

        if (loaded === images.length) {
          checkpoints.images = true;
          updateProgress();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          done();
        } else {
          img.addEventListener('load', done, { once: true });
          img.addEventListener('error', done, { once: true });
        }
      });
    }

    /* ---------------- Styles ---------------- */
    const checkStyles = () => {
      try {
        const sheets = [...document.styleSheets];
        const loaded = sheets.every((sheet) => {
          try {
            return !!sheet.cssRules;
          } catch {
            return true; // cross-origin → assume loaded
          }
        });

        if (loaded) {
          checkpoints.styles = true;
          updateProgress();
        } else {
          requestAnimationFrame(checkStyles);
        }
      } catch {
        checkpoints.styles = true;
        updateProgress();
      }
    };

    checkStyles();

    /* ---------------- Layout Stability ---------------- */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        checkpoints.layout = true;
        updateProgress();
      });
    });

    const heroImg = document.querySelector('.landing-img') as HTMLImageElement;

    const waitForImageDecode = (img: HTMLImageElement) => {
      if (img.complete && img.naturalWidth > 0) {
        return img.decode?.() ?? Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        img.onload = () => {
          img.decode?.().finally(resolve);
        };
        img.onerror = () => resolve;
      });
    };

    if (heroImg) {
      waitForImageDecode(heroImg).then(() => {
        checkpoints.heroImage = true;
        updateProgress();
      });
    } else {
      checkpoints.heroImage = true;
      updateProgress();
    }

    if (isLoading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    
    return () => {
      mounted = false;
      window.removeEventListener('load', onLoad);
    };
  }, [isLoading]);

  return { isLoading, progress };
};

export default useAppReady;