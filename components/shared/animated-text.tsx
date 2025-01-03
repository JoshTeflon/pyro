import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimatedTextProps {
  className?: string;
  text: string;
  animationDelay?: number | string;
  scrollConfig?: {
    start?: string;
    toggleActions?: string;
  };
}

gsap.registerPlugin(ScrollTrigger)

const AnimatedText: React.FC<AnimatedTextProps> = ({
  className = '',
  text,
  animationDelay = 0.3,
  scrollConfig = {
    start: 'top bottom-=100',
    toggleActions: 'play none none none'
  }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement[]>([]);
  textRef.current = [];

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  useGSAP(() => {
    const text_twn = gsap.fromTo(
      textRef.current,
      { y: 0, opacity: 0 },
      {
        keyframes: [
          { y: -24, opacity: 1, duration: 0.3 },
          { y: 0, opacity: 1, duration: 0.3 },
        ],
        stagger: 0.1,
        ease: 'power2.out',
        delay: animationDelay,
        scrollTrigger: {
          trigger: containerRef.current,
          ...scrollConfig
        },
      }
    );

    return () => text_twn.kill();
  }, [text]);

  return (
    <div ref={containerRef} className={className}>
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          ref={addToRefs}
          className='inline-block'
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;