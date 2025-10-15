'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Logo } from '@/components/shared';
import { newsCycle } from '@/lib/fonts';

import GalleryCardImage0 from '@/public/images/gallery/gallery-card-0.jpg';
import GalleryCardImage1 from '@/public/images/gallery/gallery-card-1.jpeg';
import GalleryCardImage2 from '@/public/images/gallery/gallery-card-2.jpg';

type Coordinates = Partial<
Record<"x" | "y" | "z" | "xPercent" | "yPercent", number | string>
>;

interface IGalleryCard {
  name: string;
  image: any;
  width: number;
  height: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  from: Coordinates;
  fromTo: Coordinates;
  to?: Coordinates;
  transformOrigin?: string;
}

gsap.registerPlugin(ScrollTrigger);

const galleryDeck: IGalleryCard[] = [
  {
    name: 'resurrection',
    image: GalleryCardImage0,
    width: 1080,
    height: 1080 ,
    bottom: '-95%',
    left: '25%',
    from: { z: -4000 },
    fromTo: { z: -3100 },
    transformOrigin: 'top right',
  },
  {
    name: 'awake',
    image: GalleryCardImage1,
    width: 1170,
    height: 1714,
    top: '-30rem',
    left: '85%',
    from: { y: 300, z: -4000 },
    fromTo: { y: 250, z: -3100 },
  },
  {
    name: 'depth',
    image: GalleryCardImage2,
    width: 798,
    height: 1080,
    bottom: '70%',
    left: '20%',
    from: { z: -4000 },
    fromTo: { z: -3100 },
  },
  {
    name: 'awake2',
    image: GalleryCardImage1,
    width: 1170,
    height: 1714,
    top: '50%',
    left: '90%',
    from: { z: -4000 },
    fromTo: { z: -3000 },
  },
  {
    name: 'depth2',
    image: GalleryCardImage2,
    width: 798,
    height: 1080,
    bottom: '-20%',
    left: '0',
    from: { z: -4200 },
    fromTo: { z: -3300 },
  },
  {
    name: 'resurrection2',
    image: GalleryCardImage0,
    width: 1080,
    height: 1080 ,
    top: '-20%',
    left: '70%',
    from: { z: -4500 },
    fromTo: { z: -3600 },
    to: { z: -500 }
  },
  {
    name: 'depth3',
    image: GalleryCardImage1,
    width: 1170,
    height: 1714 ,
    top: '30%',
    left: '10%',
    from: { z: -5200, xPercent: 0, yPercent: 0 },
    fromTo: { z: -4200,  xPercent: 2.5, yPercent: 0 },
    to: { z: -800, xPercent: 10, yPercent: 0 }
  },
  {
    name: 'awake3',
    image: GalleryCardImage2,
    width: 798,
    height: 1080,
    bottom: '-30%',
    left: '65%',
    from: { y: 0, z: -4800 },
    fromTo: { y: '-2rem', z: -4000 },
    to: { y: '-10rem', z: -800 }
  },
];

const Gallery = () => {
  const galleryRef = useRef<HTMLElement>(null);
  const mainGalleryRef = useRef<HTMLDivElement>(null);
  const galleryItems = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const addCardRef = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.set(mainGalleryRef.current, { perspective: 1500 });
    gsap.set(galleryItems.current, { transformStyle: 'preserve-3d' });

    const totalScrollLength = 8;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top 50%',
        end: 'bottom top',
        // end: `=+=${totalScrollLength * 100}vh`,
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

    

    const tweenDuration = 1.5;
    const overlap = '>-' + (tweenDuration * 0.5); 

    // galleryDeck.forEach((cardData, idx) => {
    //   const cardEl = cardsRef.current[idx];
    //   if (!cardEl) return;

    //   tl.fromTo(
    //     cardEl,
    //     {
    //       opacity: 0,
    //       xPercent: cardData.from.xPercent ?? -50,
    //       yPercent: cardData.from.yPercent ?? -50,
    //       x: cardData.from.x ?? 0,
    //       y: cardData.from.y ?? 0,
    //       z: cardData.from.z ?? 0
    //     },
    //     {
    //       opacity: 1,
    //       xPercent: cardData.fromTo.xPercent,
    //       yPercent: cardData.fromTo.yPercent,
    //       x: cardData.fromTo.x ?? 0,
    //       y: cardData.fromTo.y ?? 0,
    //       z: cardData.fromTo.z ?? 0,
    //       duration: tweenDuration,
    //       ease: 'sine.inOut',
    //     },
    //     idx === 0 ? 0 : overlap
    //   )
    //   .to(
    //     cardEl,
    //     {
    //       opacity: 0,
    //       xPercent: cardData?.to?.xPercent,
    //       yPercent: cardData?.to?.yPercent,
    //       x: cardData?.to?.x ?? 0,
    //       y: cardData?.to?.y ?? 0,
    //       z: cardData?.to?.z ?? 0,
    //       duration: tweenDuration,
    //       ease: 'sine.inOut',
    //     },
    //     `>-0.2`
    //   );
    // });

    galleryDeck.forEach((cardData, idx) => {
      const cardEl = cardsRef.current[idx];
      if (!cardEl) return;

      const holdDuration = 1; 
      const fadeDuration = 0.5;

      tl.fromTo(
        cardEl,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: fadeDuration,
        },
        // idx === 0 ? 0 : overlap
      )
      .to(
        cardEl,
        {
          duration: holdDuration,
        }
      )
      .to(
        cardEl,
        {
          opacity: 0,
          duration: fadeDuration,
        },
        `>-0.2`
      );
    });
  }, []);

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
          ref={galleryItems}
          className='gallery-items w-full h-full'
        >  
          {/* {galleryDeck.map(card => (
            <div
              key={card.name}
              ref={addCardRef}
              className='gallery-card absolute w-auto max-w-[90vw] xl:max-w-[60vw] min-w-[60vw] xl:min-w-[40vw] h-auto'
              style={{
                top: card.top,
                bottom: card.bottom,
                left: card.left,
                right: card.right,
                transformOrigin: card.transformOrigin ?? '50% 50%',
              }}
            >
              <Image
                className='object-cover rounded-md'
                width={card.width}
                height={card.height}
                src={card.image}
                alt={card.name}
                quality={100}
                placeholder='blur'
              />
            </div>
          ))} */}
          <div
            ref={addCardRef}
            className='gallery-card absolute w-auto max-w-[90vw] xl:max-w-[60vw] min-w-[60vw] xl:min-w-[40vw] h-auto'
            style={{
              // top: card.top,
              // bottom: card.bottom,
              // left: card.left,
              // right: card.right,
              // transformOrigin: card.transformOrigin ?? '50% 50%',
            }}
          >
            <Image
              className='object-cover rounded-md'
              width={galleryDeck[0].width/3}
              height={galleryDeck[0].height/3}
              src={galleryDeck[0].image}
              alt={galleryDeck[0].name}
              quality={100}
              placeholder='blur'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
