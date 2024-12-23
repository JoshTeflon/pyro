import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AnimatedTextProps {
  className?: string;
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ className = '', text }) => {
  const textRef = useRef<HTMLSpanElement[]>([]);
  textRef.current = [];

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { y: 0, opacity: 0 },
      {
        keyframes: [
          { y: -24, opacity: 1, duration: 0.3 },
          { y: 0, opacity: 1, duration: 0.3 },
        ],
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3,
      }
    );
  }, [text]);

  return (
    <div className={className}>
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