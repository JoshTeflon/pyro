'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useApp } from "@/hooks";

interface AnimatedTextProps {
  className?: string;
  text: string;
  animationDelay?: number;
  scrollConfig?: {
    start?: string;
    toggleActions?: string;
  };
}

gsap.registerPlugin(ScrollTrigger);

const AnimatedText: React.FC<AnimatedTextProps> = ({
  className = "",
  text,
  animationDelay = 0.3,
  scrollConfig = {
    start: "top bottom-=100",
    toggleActions: "play none none none",
  },
}) => {
  const { ready } = useApp();

  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  wordRefs.current = [];

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !wordRefs.current.includes(el)) {
      wordRefs.current.push(el);
    }
  };

  useGSAP(() => {
    if (!ready) return;

    const text_twn = gsap.fromTo(
      wordRefs.current,
      { y: 0, opacity: 0 },
      {
        keyframes: [
          { y: -16, opacity: 1, duration: 0.3 },
          { y: 0, opacity: 1, duration: 0.3 },
        ],
        stagger: 0.1,
        ease: "power1.out",
        delay: animationDelay,
        scrollTrigger: {
          trigger: containerRef.current,
          ...scrollConfig,
        },
      }
    );

    return () => text_twn.kill();
  }, [text]);

  return (
    <div ref={containerRef} className={className}>
      {text.split(" ").map((word, index, array) => (
        <span key={word} ref={addToRefs} className='opacity-0 inline-block'>
          {word}{index < array.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
