'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Logo } from '@/components/shared';
import { newsCycle } from '@/lib/fonts';
import { galleryDeck } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef<HTMLElement>(null);
  const mainGalleryRef = useRef<HTMLDivElement>(null);
  const galleryCardsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.set(mainGalleryRef.current, { perspective: 1500 });
    gsap.set(galleryCardsRef.current, { transformStyle: 'preserve-3d' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top 50%',
        end: 'bottom top',
        scrub: true,
        pin: true,
      }
    });

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 80, 
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'sine.inOut',
      },
    );

    tl.fromTo(
      cardsRef.current[0],
      {
        opacity: 0,
        z: -4000,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            z: -2900,
            opacity: 1, 
          },
          { 
            z: -1050,
            opacity: 1,
          },
          { 
            z: 0, 
            opacity: 0, 
          },
        ],
      },
      `>-0.5` 
    );

    tl.fromTo(
      cardsRef.current[1],
      {
        opacity: 0,
        z: -4000,
        y: 300,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            z: -2900,
            y: 200,
            opacity: 1, 
          },
          { 
            z: -700,
            y: 100,
            opacity: 1,
          },
          { 
            z: 0, 
            y: 0,
            opacity: 0, 
          },
        ],
      },
      `>-1.2`
    );

    tl.fromTo(
      cardsRef.current[2],
      {
        opacity: 0,
        z: -4000,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            z: -2900,
            opacity: 1, 
          },
          { 
            z: -1050,
            opacity: 1,
          },
          { 
            z: 0, 
            opacity: 0, 
          },
        ],
      },
      `>-1.25` 
    );

    tl.fromTo(
      cardsRef.current[3],
      {
        opacity: 0,
        z: -4200,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            z: -3050,
            opacity: 1,
          },
          { 
            z: -700,
            opacity: 1,
          },
          { 
            z: 0, 
            opacity: 0, 
          },
        ],
      },
      `>-1.3` 
    );

    tl.fromTo(
      cardsRef.current[4],
      {
        opacity: 0,
        z: -4200,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            z: -3050,
            opacity: 1, 
          },
          { 
            z: -700,
            opacity: 1,
          },
          { 
            z: 0, 
            opacity: 0, 
          },
        ],
      },
      `>-1.35` 
    );

    tl.fromTo(
      cardsRef.current[5],
      {
        opacity: 0,
        z: -4500,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            z: -3500,
            opacity: 1, 
          },
          { 
            z: -1500,
            opacity: 1,
          },
          { 
            z: 0, 
            opacity: 0, 
          },
        ],
      },
      `>-1.4` 
    );

    tl.fromTo(
      cardsRef.current[6],
      {
        opacity: 0,
        z: -5200,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            xPercent: '2%',
            z: -4500,
            opacity: 1, 
          },
          {
            xPercent: '8%',
            z: -2000,
            opacity: 1,
          },
          { 
            xPercent: '10%',
            z: -800, 
            opacity: 0, 
          },
        ],
      },
      `>-1.45` 
    );

    tl.fromTo(
      cardsRef.current[7],
      {
        opacity: 0,
        z: -4800,
      },
      {
        ease: "power3.inOut",
        keyframes: [
          { 
            y: -32,
            z: -4000,
            opacity: 1, 
          },
          {
            y: -128,
            z: -1500,
            opacity: 1,
          },
          { 
            y: -160,
            z: -800, 
            opacity: 0, 
          },
        ],
      },
      `>-1.5` 
    );
  });

  return (
    <section
      id='gallery'
      ref={galleryRef}
      className='gallery relative block w-full h-[500vh] bg-main z-[1]'
    >
      <div className='gallery-title-wrapper w-full h-full absolute top-0 left-0 z-[-1]'>
        <div className='sticky top-0 w-full h-screen -mt-[100vh] pointer-events-none overflow-hidden'>
          <h2 className={`${newsCycle.className} gallery-title w-full h-full absolute top-0 left-0 flex items-center`}>
            <span
              ref={textRef}
              className='relative w-full max-xl:flex max-xl:justify-center xl:inline-block'
            >
              <div className='flex flex-col items-center'>
                <Logo variant='secondary' size='sm' className='-rotate-2' shortname />

                <span className='text-5xl md:text-8xl font-medium uppercase leading-none tracking-tight'>
                  Gallery
                </span>
              </div>
            </span>
          </h2>
        </div>
      </div>

      <div
        ref={mainGalleryRef}
        className='main-gallery sticky top-0 w-full h-screen -mt-[90vh] overflow-hidden max-xl:will-change-transform'
      >
        <div
          ref={galleryCardsRef}
          className='gallery-cards w-full h-full'
        >
          {
            galleryDeck?.map(item => (
              <div
                key={item.name}
                ref={(el) => addCardRef(el)}
                className='gallery-card absolute w-auto max-w-[90vw] xl:max-w-[60vw] min-w-[60vw] xl:min-w-[40vw] h-auto'
                style={{
                  top: item?.top,
                  right: item?.right,
                  bottom: item?.bottom,
                  left: item?.left,
                }}
              >
                <div className="-translate-x-1/2 overflow-hidden">
                  <div className="w-full h-full">
                    <figure className="w-full h-full">
                      <Image
                        className='object-cover'
                        width={item.width/2}
                        height={item.height/2}
                        src={item.image}
                        alt={item.name}
                        quality={100}
                        placeholder='blur'
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
