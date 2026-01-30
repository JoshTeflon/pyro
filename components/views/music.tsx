'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';

import { AnimatedText } from '@/components/shared';
import { Button } from '@/components/interfaces';
import { Arrow, Close } from '@/components/icons';

import { useModal, useWindowDimension } from '@/hooks';
import { newsCycle } from '@/lib/fonts';
import { musicList } from '@/lib/data';
import { ITrackInfo } from '@/types';

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

const DragHint = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={`pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-700 ease-out
      ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
    >
      <div className="flex items-center space-x-0.5 text-body uppercase text-xs tracking-widest">
        <span className="opacity-75">drag</span>

        <div className="relative w-5 h-0.5 bg-body/50 overflow-hidden">
          <div className="absolute inset-0 bg-body animate-drag-line" />
        </div>

        <Arrow direction="right" className='w-4' />
      </div>
    </div>
  );
};

const Music = () => {
  const musicSectionLang = useTranslations('musicSection');

  const isMobileSize = useWindowDimension();

  const musicRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState<SlideState>({
    isActive: false,
    details: musicList[0],
    index: 0
  });
  
  const [activeYtVideo, setActiveYtVideo] = useState<string | null>(null);
  
  const [showDragHint, setShowDragHint] = useState<boolean>(!isMobileSize);

  const activeTrackVideo = musicList[activeSlide.index];

  useModal(
    modalRef,
    () => setActiveYtVideo(null),
    {
      enabled: !!activeYtVideo,
      closeOnOutsideClick: true,
      closeOnEsc: true,
      lockScroll: true,
    }
  );

  useEffect(() => {
    setShowDragHint(!isMobileSize);
  }, [isMobileSize]);

  const handleSlideChange = (swiper: SwiperInstance) => {
    if (swiper.activeIndex === activeSlide.index) return;
  
    const newIndex = swiper.activeIndex;
    setActiveSlide({
      isActive: true,
      details: musicList[newIndex],
      index: newIndex,
    });
  };

  return (
    <section
      id='music'
      ref={musicRef}
      className='z-40 relative py-8 w-full h-screen bg-main flex flex-col justify-around overflow-hidden'
    >
      <div className='absolute inset-0 w-full h-screen opacity-40 transition-all ease-in-out'>
        <video
          id='music-video-bg'
          title={activeTrackVideo.name}
          className='w-full h-screen object-cover transition-all ease-in-out duration-300'
          poster={activeTrackVideo.videoPoster}
          preload='metadata'
          autoPlay
          playsInline
          muted
          loop
        >
          <source type='video/mp4' src={activeTrackVideo.video} />
          { musicSectionLang('videoError') }
        </video>
      </div>

      <div className={`${newsCycle.className} side-pad relative text-center uppercase`}>
        <span className='text-xs'>{ musicSectionLang('explore') }</span>

        <h3 ref={headerRef} className='text-2xl xl:text-[1.75rem] tracking-wider'>
          <AnimatedText
            text={musicSectionLang('title')}
            scrollConfig={{ toggleActions: 'restart none restart none' }}
          />
        </h3>
      </div>

      <div className="relative my-8 lg:my-16 w-full overflow-hidden">
        <DragHint visible={showDragHint} />

        <Swiper
          {...swiperConfig}
          onSlideChange={handleSlideChange}
          onTouchStart={() => setShowDragHint(false)}
          onDragStart={() => setShowDragHint(false)}
          onClick={() => setShowDragHint(false)}
          initialSlide={0}
          className="mx-auto px-0"
          style={{ width: '150%', marginLeft: '-25%' }}
        >
          {musicList.map((item, idx) => (
            <SwiperSlide
              key={item.name}
              className="transition-all duration-300 ease-in-out"
              style={{ zIndex: activeSlide.index === idx ? 1 : 0 }}
            >
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`w-full h-full flex items-center justify-center ${isPrev ? 'cursor-w-resize' : isNext ? 'cursor-e-resize' : ''}`}
                >
                  <div
                    className={
                      `w-full max-w-96 h-96 flex items-center justify-center rounded-md cursor-grab transition-all duration-300 ease-in-out
                      ${isActive ? 'scale-100 opacity-100 cursor-pointer' : 'scale-50 opacity-50'}`
                    }
                    onClick={() => isActive && setActiveYtVideo(item.youtubeId)}
                  >
                    <div className='group relative w-full h-full bg-black/50 rounded-md transition-all duration-300 ease-in-out'>
                      <Image
                        className={`z-10 absolute inset-0 w-full h-full bg-primary object-cover object-center ${isActive ? 'group-hover:opacity-90' : ''}`}
                        src={item.cover}
                        alt={item.name}
                        quality={100}
                        sizes="(max-width: 768px) 23rem, 24rem"
                        placeholder='blur'
                        priority={isActive}
                        loading={isActive ? 'eager' : 'lazy'}
                        fill
                      />

                      <div
                        className={`w-full h-full items-center justify-center hidden ${isActive ? 'group-hover:flex' : ''}`}
                      >
                        <Button
                          className='z-20 relative py-1.5 lg:!py-2 !px-4 lg:!px-6 uppercase border border-primary'
                          variant='secondary-primary'
                          roundness='pill'
                          size='xs'
                        >
                          { musicSectionLang('trackCta') }
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {activeYtVideo && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
            <div
              ref={modalRef}
              className='flex flex-col items-center gap-y-12 gap-x-4 w-full max-w-4xl px-4'
            >
              <div className='relative w-full aspect-video overflow-hidden'>
                <iframe
                  className='w-full h-full'
                  src={`https://www.youtube.com/embed/${activeYtVideo}?autoplay=1`}
                  title={activeSlide.details.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>

              <Button
                onClick={() => setActiveYtVideo(null)}
                variant='secondary-primary'
                roundness='pill'
                size='sm'
                className='!py-1.5 !px-2 flex items-center space-x-2 group'
              >
                <Close width={24} height={24} className='group-hover:fill-primary' />
                <span className='capitalize'>{ musicSectionLang('closeCta') }</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className='relative my-4 text-center text-xs lg:text-sm text-body uppercase'>
        {activeSlide.details.name}
      </div>

      <div className='relative flex justify-center'>
        <Image
          className='object-cover object-center'
          src='/images/flame.png'
          alt='cool flame'
          width={40}
          height={40}
          quality={100}
        />
      </div>
    </section>
  )
}

export default Music;