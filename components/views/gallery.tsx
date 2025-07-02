// 'use client';

import { useRef, useState } from 'react';

import { newsCycle } from '@/lib/fonts';
import { Logo } from '../shared';

const Gallery = () => {

  return (
    <section
      id='gallery'
      className='z-50 relative bg-main py-8 w-full h-dvh'
    >
      <div className='w-full h-full flex flex-col items-center justify-center opacity-90'>
        <Logo
          variant='secondary'
          size='sm'
          className='-rotate-2'
          shortname
        />
        <span className={`${newsCycle.className} text-9xl font-black uppercase tracking-wider`}>Gallery</span>
      </div>
    </section>
  );
};

export default Gallery;