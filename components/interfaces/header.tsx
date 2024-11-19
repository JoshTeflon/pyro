import React from 'react';
import Link from 'next/link';

import { Logo, Menu, SocialPlatforms } from '@/components/interfaces';

const Header: React.FC = () => {
  return (
    <header className='z-50 relative py-8 w-full flex items-center justify-between'>
      <Link href={'/'}>
        <Logo className='text-5xl text-primary -rotate-2' />
      </Link>
      <div
        className='hidden lg:flex p-5 lg:p-6 items-center justify-between space-x-8 bg-primary text-main rounded-lg lg:shadow-lg'
      >
        <Menu />
        <SocialPlatforms />
      </div>
    </header>
  )
}

export default Header;