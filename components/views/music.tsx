'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';
import Lottie from "lottie-react";

import { newsCycle } from '@/lib/fonts';
import { musicList } from '@/lib/data';
import { TrackDetails } from '@/types';
import { AnimatedText } from '@/components/shared';
import { Button } from '@/components/interfaces';
import fireAnimation from '@/assets/fire-lottie.json';

import 'swiper/css';
import 'swiper/css/zoom';

const swiperConfig = {
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 0,
  speed: 300,
  modules: [Zoom],
  grabCursor: true,
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: -125
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: -25
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: -25
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100
    },
  },
  spaceBetween: 50,
};

interface SlideState {
  isActive: boolean;
  details: TrackDetails;
  index: number;
}

const Music = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const [activeSlide, setActiveSlide] = useState<SlideState>({
    isActive: false,
    details: musicList[0],
    index: 0
  });
  
  // Track the Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section
      id='music'
      className='z-40 relative py-8 w-full h-dvh flex flex-col justify-around overflow-hidden'
    >
      <video
        // title='zzxy'
        className='z-[-5] absolute inset-0 w-full h-full object-cover opacity-80 ease-in-out'
        // width='100%'
        // height='100vh'
        preload='none'
        playsInline
        autoPlay
        loop
        muted
      >
        <source
          type='video/mp4'
          // src='/public/SURRENDER (visualizer).mp4'
          src='https://cdn.shopify.com/videos/c/o/v/f964089c84a240dfa7af199106281137.mp4'
        />
        Your browser does not support the video tag.
      </video>
      <div className={`${newsCycle.className} side-pad text-center uppercase`}>
        <span className='text-xs'>explore</span>
        <h3 ref={headerRef} className='text-2xl xl:text-[1.75rem] tracking-wider'>
          <AnimatedText
            text='music'
            scrollConfig={{
              toggleActions: 'restart none restart none'
            }}
          />
        </h3>
      </div>
      <div className="relative my-8 lg:my-16 w-full overflow-hidden">
        <Swiper
          className="mx-auto px-0"
          style={{
            width: '150%',
            marginLeft: '-25%',
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setActiveSlide({
              isActive: true,
              details: musicList[swiper.activeIndex],
              index: swiper.activeIndex
            });
          }}
          onSlideChange={(swiper) => {
            setActiveSlide({
              isActive: true,
              details: musicList[swiper.activeIndex],
              index: swiper.activeIndex
            });
          }}
          {...swiperConfig}
        >
          {musicList.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="transition-all duration-300 ease-in-out"
              style={{
                zIndex: activeSlide.index === idx ? 1 : 0
              }}
            >
              {({ isActive }) => (
                <div className='w-full h-full flex items-center justify-center'>
                  <div
                    className={`
                      w-full max-w-96 h-96
                      flex items-center justify-center rounded-md cursor-pointer
                      transition-all duration-300 ease-in-out
                      ${isActive 
                        ? 'scale-100 opacity-100' 
                        : 'scale-50 opacity-50'
                      }
                    `}
                  >
                    <div className='group relative w-full h-full bg-main rounded-md transition-all duration-300 ease-in-out'>
                      <Image
                        // ref={landingImageRef}
                        className={`
                          z-10 absolute inset-0 w-full h-full object-cover object-center rounded-md
                          ${isActive ? 'group-hover:opacity-75' : ''}
                        `}
                        src={item.cover}
                        alt={item?.name}
                        quality={100}
                        sizes="(max-width: 768px) 23rem, 24rem"
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
      <div className='my-4 text-center text-xs lg:text-sm text-body uppercase'>{activeSlide.details.name}</div>
      <div className='flex justify-center'>
        <Lottie
          animationData={fireAnimation}
          style={{
            height: '100%',
            width: '100%',
            maxHeight: 100,
            maxWidth: 100,
          }}
          loop={true}
          autoPlay={true}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
          }}
        />
      </div>
    </section>
  )
}

export default Music;