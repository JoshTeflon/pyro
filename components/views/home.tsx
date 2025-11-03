'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button, SocialPlatforms } from '@/components/interfaces';
import { ArrowDown } from '@/components/icons';

import { artist } from '@/lib/data';
import { newsCycle } from '@/lib/fonts';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const landingImageRef = useRef<HTMLImageElement>(null);
  const streamRef = useRef<HTMLButtonElement>(null);


  useGSAP(() => {
    gsap.to(landingImageRef.current, {
      scale: 2,
      scrollTrigger: {
        trigger: landingImageRef.current,
        start: 'bottom 95%',
        scrub: 1,
        toggleActions: 'restart none none none',
      }
    });

    gsap.fromTo(
      '.action-content',
      {
        y: 0,
        // scale: 1,
      },
      {
        y: -50,
        duration: 1,
        // scale: 0.9,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: landingImageRef.current,
          start: 'bottom 90%',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section id='home' className='relative w-full h-screen overflow-hidden'>
      <Image
        ref={landingImageRef}
        className='landing-img z-10 absolute inset-0 w-full h-full object-cover object-center'
        src={artist.main_image}
        alt='ii6 pyro artiste-themed background'
        quality={100}
        // placeholder='blur'
        fill
        priority
      />
      <div className='z-10 absolute inset-0 w-full h-full bg-overlay'></div>
      <div className='action-content side-pad z-30 relative w-full h-full'>
        {/* <div className='absolute bottom-16 left-1/2 -translate-x-1/2'>
          <div className='flex flex-col items-center text-center'>
            <p className={`${newsCycle.className} text-base sm:text-lg lg:text-xl font-bold uppercase tracking-wider`}>New Release</p>
            <div className='mt-1 mb-4 lg:mb-6 flex items-baseline space-x-2 font-bold'>
              <span className='outline-text-body text-[4rem] sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold uppercase leading-none'>deny</span>
              <span className='text-sm lg:text-base tracking-tighter'>ft. wyld chlld</span>
            </div>
            <Button
              ref={streamRef}
              variant='primary'
              size='lg'
              className='font-medium uppercase'
            >
              Listen Now
            </Button>
          </div>
        </div> */}
        <div className='absolute bottom-16 left-0 right-0'>
          <div className='side-pad flex items-end justify-between'>
            <div className='w-4 h-6 text-primary bg-body flex items-center justify-center rounded-4xl'>
              <ArrowDown className='w-3.5' />
            </div>
            <SocialPlatforms className='text-primary' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;