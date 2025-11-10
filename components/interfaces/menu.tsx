'use client';

import { FC, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Button } from '@/components/interfaces';
import { Dots, Flame } from '@/components/icons';

import { useActiveSection } from '@/hooks';
import { languageMenuItems, navigationMenuItems } from '@/lib/data';
import { IMenuItems, MenuType } from '@/types';

interface MenuProps {
  type: MenuType;
  className?: string;
};

const DisplayNavigationMenu: FC = () => {
  const activeSection = useActiveSection(navigationMenuItems.map((item: IMenuItems) => item.label));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const elementPosition = el.getBoundingClientRect().top + globalThis.scrollY;

      globalThis.scrollTo({
        top: id === 'gallery' ? elementPosition + (globalThis.innerHeight * 1.5) : elementPosition,
        behavior: 'smooth',
      });
    };
  };
  
  return (
    navigationMenuItems?.map((item: IMenuItems) => (
      <li key={item.label}>
        <Button
          variant='naked'
          className='!p-1 w-full menu-link flex items-center justify-between'
          onClick={() => scrollToSection(item.label)}
        >
          <div className='w-full flex items-center space-x-3'>
            {
            item?.icon &&
              <div
                id='menu-icon-container'
                className='flex-center w-8 h-8 bg-body text-primary rounded-lg flex-shrink-0 opacity-0 scale-50 -rotate-[15deg]'
              >
                <item.icon />
              </div>
            }

            <div className="text-wrapper">
              <span className="text-line text-xs tracking-tight capitalize">{item.label}</span>
            </div>
          </div>
          { activeSection === item.label && <Flame className='mr-1 opacity-95' /> }
        </Button>
      </li>
    ))
  );
};

const DisplayLanguageMenu: FC = () => (
  languageMenuItems?.map((item: IMenuItems) => (
    <li key={item.label}>
      <Link href={item.link} className='menu-link py-1 px-1.5 flex items-center space-x-3'>
        <div className="text-wrapper">
          <span className="text-line text-xs tracking-tight">{item.label}</span>
        </div>
      </Link>
    </li>
  ))
);

const Menu: FC<MenuProps> = ({ type, className }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      gsap.to(
        navRef.current,
        {
          opacity: 1,
          duration: 0.25,
          ease: 'power1.inOut',
        }
      );

      tl.to(navRef.current, {
        width: type === MenuType.NAVIGATION ? '12.25rem' : 'max-content',
        borderRadius: '0.75rem',
        duration: 0.3,
        ease: 'sine.inOut',
      });

      tl.to(
        menuListRef.current,
        {
          opacity: 1,
          display: 'block',
          y: 0,
          duration: 0.3,
          ease: 'sine.inOut',
        },
        '<'
      );

      if (type === MenuType.NAVIGATION) {
        tl.to(
          '#menu-icon-container',
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.35,
            ease: 'sine.inOut',
          },
          '<'
        );
      };

      // Hover In
      navRef.current?.addEventListener('mouseenter', () => tl.play());
      navRef.current?.addEventListener('focusin', () => tl.play());

      // Hover Out
      navRef.current?.addEventListener('mouseleave', () => tl.reverse());
      navRef.current?.addEventListener('focusout', () => tl.reverse());
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${className} py-2.5 w-32 h-auto text-body bg-grey-overlay capitalize flex flex-col items-center backdrop-blur-[2px] rounded-3xl opacity-0`}
      style={{ width: type === MenuType.NAVIGATION ? '8rem' : 'max-content' }}
    >
      <div className='flex-between px-3 w-full space-x-4'>
        <span className='text-sm font-medium leading-none tracking-tight'>{type === MenuType.NAVIGATION ? navigationMenuItems[0].label : languageMenuItems[0].label}</span>

        <div className='flex space-x-0.5'>
          {
            type === MenuType.NAVIGATION ?
            ['dot1', 'dot2'].map((id) => (
              <Dots key={id} height={8} />
            ))
            :
            <Dots height={8} />
          }
        </div>
      </div>

      <ul
        ref={menuListRef}
        className='menu-links mt-3.5 px-1.5 w-full space-y-0.5 hidden opacity-0 translate-y-2'
      >
        { type === MenuType.NAVIGATION ? <DisplayNavigationMenu /> : <DisplayLanguageMenu /> }
      </ul>
    </nav>
  )
}

export default Menu;