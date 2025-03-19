'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Logo, Hamburger } from '@/components/shared';
import { Menu } from '@/components/interfaces';
import { useNav } from '@/hooks';

const Header: React.FC = () => {
  const { navOpen, toggleNavOpen } = useNav();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
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
      <Link href={'/'}>
        <Logo
          className='-rotate-2'
          variant={navOpen ? 'default' : 'primary'}
          size={navOpen ? 'md' : 'lg'}        
        />
      </Link>
      <div
        className='hidden lg:flex p-5 xl:py-5 xl:px-8 items-center justify-between space-x-8 text-primary uppercase'
      >
        <Menu />
      </div>
      <div className='flex lg:hidden'>
        <Hamburger
          isOpen={navOpen}
          toggleMenu={toggleNavOpen}
        />
      </div>
    </header>
  )
}

export default Header;