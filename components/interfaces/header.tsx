import React from 'react';

import { Logo, Menu, SocialPlatforms } from '@/components/interfaces';

const Header: React.FC = () => {
  return (
    <header className='z-50 relative py-8 w-full flex items-center justify-between'>
      <Logo className='text-primary -rotate-2' />
      <div
        className='hidden lg:flex py-6 px-5 items-center justify-between space-x-8 text-main bg-primary rounded-lg'
      >
        <Menu />
        <SocialPlatforms />
      </div>
    </header>
  )
}

export default Header;