'use client';

import { FC, useCallback, useMemo, useRef, useState } from 'react';
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

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const elementPosition = el.getBoundingClientRect().top + globalThis.scrollY;

      globalThis.scrollTo({
        // top: id === 'gallery' ? elementPosition + (globalThis.innerHeight * 1.5) : elementPosition,
        top: elementPosition,
        behavior: 'smooth',
      });
    };
  }, []);
  
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
                className='menu-icon-container flex-center w-8 h-8 bg-body text-primary rounded-lg flex-shrink-0 opacity-0 scale-50 -rotate-[15deg]'
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
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const isMenuNavigation = useMemo(() => type === MenuType.NAVIGATION, [type]);
  const menuConfig = useMemo(() => ({
    expandedWidth: isMenuNavigation ? '12.25rem' : '10.25rem',
    expandedHeight: isMenuNavigation ? '13rem' : '21.75rem',
    transformOrigin: isMenuNavigation ? 'top left' : 'top right',
    firstItemLabel: isMenuNavigation ? navigationMenuItems[0].label : languageMenuItems[0].label,
    dotsCount: isMenuNavigation ? 2 : 1,
  }), [isMenuNavigation]);

  useGSAP(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    globalThis.addEventListener('resize', checkMobile);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, ease: 'sine.inOut' });
      timelineRef.current = tl;

      // Initial fade in
      gsap.set(navRef.current, { opacity: 1 });

      tl.to(navRef.current, {
        width: menuConfig.expandedWidth,
        height: menuConfig.expandedHeight,
        borderRadius: '0.875rem',
        transformOrigin: menuConfig.transformOrigin,
        duration: 0.3,
      });

      tl.to(
        menuListRef.current,
        {
          opacity: 1,
          display: 'block',
          y: 0,
          duration: 0.3,
        },
        '<'
      );

      if (isMenuNavigation) {
        tl.to(
          '.menu-icon-container',
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.35,
          },
          '<'
        );
      };

      const handleMouseEnter = () => {
        if (!isMobile) {
          tl.play();
          setIsOpen(true);
        }
      };

      const handleMouseLeave = () => {
        if (!isMobile) {
          tl.reverse();
          setIsOpen(false);
        }
      };

      navRef.current?.addEventListener('mouseenter', handleMouseEnter);
      navRef.current?.addEventListener('mouseleave', handleMouseLeave);
      navRef.current?.addEventListener('focusin', handleMouseEnter);
      navRef.current?.addEventListener('focusout', handleMouseLeave);

      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, navRef);

    return () => ctx.revert();
  }, [menuConfig, isMenuNavigation, isMobile]);

  const handleMobileToggle = useCallback(() => {
    if (isMobile && timelineRef.current) {
      if (isOpen) {
        timelineRef.current.reverse();
        setIsOpen(false);
      } else {
        timelineRef.current.play();
        setIsOpen(true);
      }
    }
  }, [isMobile, isOpen]);

  return (
    <nav
      ref={navRef}
      className={`${className} py-2.5 w-32 h-[2.1875rem] text-body bg-grey-overlay capitalize flex flex-col items-center backdrop-blur-[2px] rounded-2xl opacity-0`}
      style={{ transformOrigin: menuConfig.transformOrigin }}
      onClick={handleMobileToggle}
      role='navigation'
      aria-label={isMenuNavigation ? 'Main navigation' : 'Language selection'}
    >
      <div className='flex-between px-3 w-full space-x-4 cursor-pointer md:cursor-default'>
        <span className='text-sm font-medium leading-none tracking-tight'>{menuConfig.firstItemLabel}</span>

        <div className='flex space-x-0.5'>
          {Array.from({ length: menuConfig.dotsCount }).map((_, index) => (
            <Dots key={`dot-${index}`} height={8} />
          ))}
        </div>
      </div>

      <ul
        ref={menuListRef}
        className='menu-links mt-3.5 px-1.5 w-full space-y-0.5 hidden opacity-0 translate-y-2'
        role='list'
      >
        { isMenuNavigation ? <DisplayNavigationMenu /> : <DisplayLanguageMenu /> }
      </ul>
    </nav>
  )
}

export default Menu;