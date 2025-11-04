'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Logo, Hamburger } from '@/components/shared';
import { Menu } from '@/components/interfaces';
import { useNav } from '@/hooks';
import { MenuType } from '@/types';

const Header: React.FC = () => {
  const { navOpen, toggleNavOpen } = useNav();
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
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        y: isVisible ? 0 : -80,
        opacity: isVisible ? 1 : 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [isVisible]);

  return (
    <header
      ref={headerRef}
      className='side-pad z-[75] fixed left-0 right-0 py-8 w-full bg-transparent flex items-center justify-between'
    >
      {/* <Link href={'/'}>
        <Logo
          className='-rotate-2'
          variant={navOpen ? 'default' : 'primary'}
          size={navOpen ? 'md' : 'lg'}        
        />
      </Link>
      <div
        className='hidden lg:flex p-5 xl:py-5 xl:px-8 items-center justify-between space-x-8 text-primary'
      >
        <Menu />
      </div> */}
      <div className='relative w-full'>
        <Menu
          type={MenuType.NAVIGATION}
          className='absolute top-0 left-0'
        />
        <Link href={'/'} className='mx-auto flex-center w-fit'>
          <Logo
            className='-rotate-2'
            variant='primary'   
          />
        </Link>
        <Menu
          type={MenuType.LANGUAGE}
          className='absolute top-0 right-0'
        />
      </div>
      {/* <div className='flex lg:hidden'>
        <Hamburger
          isOpen={navOpen}
          toggleMenu={toggleNavOpen}
        />
      </div> */}
    </header>
  )
}

export default Header;