'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';

import { newsCycle } from '@/lib/fonts';
import { musicList } from '@/lib/data';
import { AnimatedText } from '@/components/shared';
import { Button } from '@/components/interfaces';

import 'swiper/css';
import 'swiper/css/zoom';

const swiperConfig = {
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 0,
  speed: 300,
  modules: [Zoom],
  watchSlidesProgress: true,
  // Add these properties for more control
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  // Customize breakpoints if needed
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  // Add custom spacing
  spaceBetween: -50, // Negative space to bring slides closer
};

const Music = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  return (
    <section id='music' className='z-40 relative w-full min-h-dvh bg-main'>
      {/* <Image
        // ref={landingImageRef}
        className='w-full h-full object-contain object-center rounded-md'
        src={item.cover}
        alt={item?.name}
        quality={100}
        // placeholder='blur'
        fill
        priority
      /> */}
      <div className={`${newsCycle.className} side-pad mt-4 md:mt-8 text-center uppercase`}>
        <span className='text-xs'>explore</span>
        <h3 ref={headerRef} className='text-xl md:text-2xl xl:text-3xl font-bold tracking-wider'>
          <AnimatedText
            text='music'
            scrollConfig={{
              toggleActions: 'restart none restart none'
            }}
          />
        </h3>
      </div>
      <div className="side-pad relative my-4 md:my-8 lg:my-16 xl:my-20 w-full overflow-hidden">
        <Swiper
          className="mx-auto px-0"
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={0}
          watchSlidesProgress={true}
          grabCursor={true}
          modules={[Zoom]}
          style={{
            width: '150%',
            marginLeft: '-25%',
            // alignItems: 'center'
          }}
        >
          {musicList.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="transition-all duration-300 ease-in-out"
              style={{}}
            >
              {({ isActive }) => (
                <div className='w-full h-full flex items-center justify-center'>
                  <div
                    className={`
                      flex items-center justify-center rounded-md cursor-pointer
                      transition-all duration-300 ease-in-out
                      ${isActive 
                        ? 'w-full max-w-[23rem] lg:max-w-96 h-96 lg:h-[25rem] opacity-100' 
                        : 'w-2/5 lg:w-4/5 max-w-[17rem] lg:max-w-72 h-72 lg:h-[19rem] opacity-50'
                      }
                    `}
                  >
                    {/* {item?.name} */}
                    <div className='group relative w-full h-full rounded-md transition-all duration-300 ease-in-out'>
                      <Image
                        // ref={landingImageRef}
                        className={`
                          z-10 absolute inset-0 w-full h-full object-cover object-center rounded-md
                          ${isActive ? 'group-hover:opacity-30' : ''}
                        `}
                        src={item.cover}
                        alt={item?.name}
                        quality={100}
                        // placeholder='blur'
                        fill
                        priority
                      />
                      <div
                        className={`
                          w-full h-full items-center justify-center hidden
                          ${isActive ? 'group-hover:flex' : ''}
                        `}
                      >
                        <Button
                          className='z-20 relative py-1.5 lg:!py-2 !px-4 lg:!px-6'
                          variant='outline'
                          roundness='pill'
                          size='xs'
                        >listen</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Music;