'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, EffectFade } from 'swiper/modules';

import { newsCycle } from '@/lib/fonts';
import { musicList } from '@/lib/data';
import { ITrackInfo } from '@/types';
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
  grabCursor: true,
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  spaceBetween: 50,
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: -125 },
    640: { slidesPerView: 2.5, spaceBetween: -25 },
    768: { slidesPerView: 2.5, spaceBetween: -25 },
    1024: { slidesPerView: 3, spaceBetween: 100 },
  },
};

interface SlideState {
  isActive: boolean;
  details: ITrackInfo;
  index: number;
}

gsap.registerPlugin(ScrollTrigger);

const Music = () => {
  const musicRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const [activeSlide, setActiveSlide] = useState<SlideState>({
    isActive: false,
    details: musicList[0],
    index: 0
  });
  
  // Track the Swiper instance
  const [backgroundSwiper, setBackgroundSwiper] = useState<any>(null);

  const handleSlideChange = (swiper: any) => {
    const newIndex = swiper.activeIndex;
    setActiveSlide({
      isActive: true,
      details: musicList[newIndex],
      index: newIndex,
    });

    // Update the first slider to match the second one
    if (backgroundSwiper) {
      backgroundSwiper.slideTo(newIndex);
    }
  };

  return (
    <section
      id='music'
      ref={musicRef}
      className='z-40 relative py-8 w-full h-screen bg-main flex flex-col justify-around overflow-hidden'
      // className='z-40 relative py-8 w-full h-screen bg-body flex flex-col justify-around overflow-hidden'
    >
      <div className='absolute inset-0 w-full h-screen opacity-40 transition-all ease-in-out'>
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade]}
          onSwiper={setBackgroundSwiper}
          initialSlide={0}
          allowTouchMove={false}
        >
          {musicList.map((item, idx) => (
            <SwiperSlide key={item.name}>
              <video
                key={item.name}
                title={item.video}
                className='w-full h-screen object-cover'
                preload='none'
                playsInline
                autoPlay
                loop
                muted
              >
                <source type='video/mp4' src={item.video} />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`${newsCycle.className} side-pad relative text-center uppercase`}>
        <span className='text-xs'>explore</span>
        <h3 ref={headerRef} className='text-2xl xl:text-[1.75rem] tracking-wider'>
          <AnimatedText text='music' scrollConfig={{ toggleActions: 'restart none restart none' }} />
        </h3>
      </div>
      <div className="relative my-8 lg:my-16 w-full overflow-hidden">
        <Swiper
          {...swiperConfig}
          onSlideChange={handleSlideChange}
          initialSlide={0}
          className="mx-auto px-0"
          style={{ width: '150%', marginLeft: '-25%' }}
        >
          {musicList.map((item, idx) => (
            <SwiperSlide
              key={item.name}
              className="transition-all duration-300 ease-in-out"
              style={{
                zIndex: activeSlide.index === idx ? 1 : 0
              }}
            >
              {({ isActive }) => (
                <div className='w-full h-full flex items-center justify-center'>
                  <div
                    className={`w-full max-w-96 h-96 flex items-center justify-center rounded-md cursor-grab transition-all duration-300 ease-in-out
                      ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-50'}`}
                  >
                    <div className='group relative w-full h-full bg-black/50 rounded-md transition-all duration-300 ease-in-out'>
                      <Image
                        // ref={landingImageRef}
                        className={`z-10 absolute inset-0 w-full h-full object-cover object-center ${isActive ? 'group-hover:opacity-75' : ''}`}
                        src={item.cover}
                        alt={item.name}
                        quality={100}
                        sizes="(max-width: 768px) 23rem, 24rem"
                        // placeholder='blur'
                        fill
                        priority
                      />
                      <div
                        className={`w-full h-full items-center justify-center hidden ${isActive ? 'group-hover:flex' : ''}`}
                      >
                        <Button
                          className='z-20 relative py-1.5 lg:!py-2 !px-4 lg:!px-6 uppercase border border-primary'
                          variant='secondary-primary'
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
      <div className='relative my-4 text-center text-xs lg:text-sm text-body uppercase'>{activeSlide.details.name}</div>
      <div className='relative flex justify-center'>
        <Image
          className='object-cover object-center'
          src='/images/flame.png'
          alt='cool flame'
          width={40}
          height={40}
          quality={100}
          priority
        />
      </div>
    </section>
  )
}

export default Music;