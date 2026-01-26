'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Logo } from '@/components/shared';
import { Menu } from '@/components/interfaces';

import { Link } from '@/i18n/navigation';
import { useApp } from '@/hooks';
import { MenuType } from '@/types';

const Header: React.FC = () => {
  const { ready } = useApp();

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = globalThis.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    globalThis.addEventListener('scroll', handleScroll);

    return () => {
      globalThis.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useGSAP(() => {
    if (!ready || !headerRef.current) return;

    gsap.to(headerRef.current, {
      y: isVisible ? 0 : -80,
      opacity: isVisible ? 1 : 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [isVisible]);

  return (
    <header
      ref={headerRef}
      className='side-pad z-[75] fixed left-0 right-0 py-8 w-full bg-transparent flex items-center justify-between'
    >
      <div className='relative w-full'>
        <Menu
          type={MenuType.NAVIGATION}
          className='absolute top-0 left-0'
        />
        <Link
          href={'/'}
          className='mx-auto flex-center w-fit outline-none border-none'
        >
          <Logo
            className='-rotate-2 hover:rotate-0 hover:tracking-[0.075em] transition-all duration-500 ease-in-out'
            variant='primary'   
            animate={false}
          />
        </Link>
        <Menu
          type={MenuType.LANGUAGE}
          className='absolute top-0 right-0'
        />
      </div>
    </header>
  )
}

export default Header;