'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SocialPlatforms, Button } from '@/components/interfaces';
import { ArrowDown, Play } from '@/components/icons';

import { artist, musicList } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const landingImageRef = useRef<HTMLImageElement>(null);

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
        <div className='p-4 md:p-5 w-4/5 h-[10.25rem] max-w-[28rem] bg-body rounded-lg absolute top-1/2 -translate-y-1/2'>
          <div className='w-full h-full flex space-x-4'>
            <div className='relative min-w-[8.25rem] w-[8.25rem] h-full rounded-lg'>
              <Image
                  className='z-10 absolute inset-0 w-full h-full object-cover object-center rounded-lg'
                  src={musicList[0].cover}
                  alt={musicList[0].name}
                  quality={100}
                  // placeholder='blur'
                  fill
                  priority
                />
            </div>

            <div className='w-full text-primary uppercase flex flex-col justify-between'>
              <h3 className='text-base tracking-[5%]'>out now</h3>

              <div className='w-full flex flex-col space-y-px'>
                <span className='text-3xl font-medium leading-none'>{musicList[0].name}</span>

                <div className='w-full flex items-end justify-between'>
                  <div className='flex items-center space-x-2'>
                    <div className='py-px px-1 text-[0.625rem] border border-primary rounded-sm'>
                      {musicList[0].year}
                    </div>

                    <div className='py-px px-1 text-[0.625rem] border border-primary rounded-sm'>
                      {musicList[0].type}
                    </div>
                  </div>

                  <Play className='w-8 h-8' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-12 left-0 right-0'>
          <div className='side-pad flex items-end justify-between'>
            <Button variant='naked' className='group'>
              <div className='group w-5 h-10 text-primary bg-body flex items-center justify-center border border-primary rounded-4xl transition-colors duration-500 ease-in-out group-hover:bg-primary group-hover:text-body'>
                <ArrowDown className='w-4 group-hover:animate-jello-horizontal' />
              </div>
            </Button>

            <SocialPlatforms className='text-primary' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;