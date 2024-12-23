'use client';

import React from 'react';
import Link from 'next/link';

import { Logo, Hamburger } from '@/components/shared';
import { Menu, SocialPlatforms } from '@/components/interfaces';
import { useNav } from '@/hooks';

const Header: React.FC = () => {
  const { navOpen, toggleNavOpen } = useNav();

  return (
    <header className='side-pad z-[75] fixed left-0 right-0 py-8 w-full bg-transparent flex items-center justify-between'>
      <Link href={'/'}>
        <Logo
          className='-rotate-2'
          variant={navOpen ? 'default' : 'primary'}
          size={navOpen ? 'md' : 'lg'}        
        />
      </Link>
      <div
        className='hidden lg:flex p-5 xl:py-5 xl:px-8 items-center justify-between space-x-8 text-main bg-primary border-[0.5px] border-main rounded-xl lg:shadow-lg'
      >
        <Menu />
        <SocialPlatforms />
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