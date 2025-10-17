'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { newsCycle } from '@/lib/fonts';
import { menuItems } from '@/lib/data';
import { IMenuItems } from '@/types';
import { useNav } from '@/hooks';
import { SocialPlatforms } from '@/components/interfaces';

const MobileNav = () => {
  const { navOpen } = useNav();

  useEffect(() => {
    const bodyElement = document.body;
    const OVERFLOW_HIDDEN_CLASS = 'overflow-hidden';
    
    const toggleBodyScroll = (shouldDisableScroll: boolean) => {
      bodyElement.classList.toggle(OVERFLOW_HIDDEN_CLASS, shouldDisableScroll);
    };

    toggleBodyScroll(navOpen);

    return () => {
      bodyElement.classList.remove(OVERFLOW_HIDDEN_CLASS);
    };
  }, [navOpen]);

  return (
    <div
      className={`${navOpen ? 'translate-y-0' : '-translate-y-full'} z-50 fixed inset-0 block lg:hidden w-full h-screen pt-32 pb-8 bg-primary backdrop-blur-sm transition-all ease-in-out duration-300`}
    >
      <nav className='side-pad w-full'>
        <ul className='w-full flex flex-col items-center space-y-20'>
          {
            menuItems?.map((item: IMenuItems, idx: number) => (
              <li
                key={item?.item}
                className={`${newsCycle.className} text-body text-xl uppercase tracking-widest hover:text-body hover:-translate-y-0.5 cursor-pointer transition-all duration-300 ease-in-out`}
              >
                <Link href='/' className='flex focus:text-body'>
                  <span className='text-[0.5rem]'>{`${String(idx + 1).padStart(2, '0')}/`}</span>
                  <span>{item.item}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className='side-pad absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center'>
        <SocialPlatforms />
        <span className='mt-3 text-[0.5rem]'>火 血 家族</span>
      </div>
    </div>
  );
};

export default MobileNav;