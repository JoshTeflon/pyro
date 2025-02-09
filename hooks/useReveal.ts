import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealConfig {
  direction?: 'bottom' | 'top' | 'left' | 'right';
  distance?: number;
  start?: string;
  duration?: number;
  delay?: number;
  ease?: string;
  opacity?: {
    from: number;
    to: number;
  };
}

const useReveal = ({
  direction = 'bottom',
  distance = 100,
  start = "top 90%",
  duration = 1,
  delay = 0,
  ease = "power4.out",
  opacity = { from: 0, to: 1 }
}: RevealConfig = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Define initial and final positions based on direction
    const initialPosition = {
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'top' ? -distance : direction === 'bottom' ? distance : 0,
      opacity: opacity.from
    };

    const finalPosition = {
      x: 0,
      y: 0,
      opacity: opacity.to,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: "play none none reverse"
      }
    };

    gsap.fromTo(element, initialPosition, finalPosition);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, distance, start, duration, delay, ease, opacity]);

  return elementRef;
};

export default useReveal;