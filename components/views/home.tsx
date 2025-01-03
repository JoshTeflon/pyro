'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/interfaces';
import { artist } from '@/lib/data';
import { newsCycle } from '@/lib/fonts';

const Home = () => {
  const landingImageRef = useRef<HTMLImageElement>(null);
  const streamRef = useRef<HTMLButtonElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.landing-img',
        start: 'bottom 80%'
      }
    });

    // tl.to(landingImageRef.current, {
    //   scale: '10',
    //   duration: 1.5,
    //   ease: 'power3.inOut',
    // });

    // tl.to('.action-content', {
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power3.inOut',
    // });
  });

  return (
    <section id='home' className='relative w-full h-dvh overflow-hidden'>
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
        <div className='absolute bottom-16 left-1/2 -translate-x-1/2'>
          <div className='flex flex-col items-center text-center'>
            <p className={`${newsCycle.className} text-3xl lg:text-4xl font-bold uppercase tracking-wider`}>New Release</p>
            <div className='mt-3 mb-6 flex items-baseline space-x-2 font-bold hover:animate-glow'>
              <span className='text-xl lg:text-2xl'>GO</span>
              <span className='text-sm lg:text-base tracking-tighter'>ft. wyld chlld</span>
            </div>
            <Button
              ref={streamRef}
              variant='primary'
              size='lg'
            >
              Stream Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;