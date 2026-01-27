'use client';

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Button } from '@/components/interfaces';
import { Dots, Flame } from '@/components/icons';

import { useRouter } from '@/i18n/navigation';
import { useActiveSection, useApp } from '@/hooks';
import { languageMenuItems, navigationMenuItems } from '@/lib/data';
import { IMenuItems, MenuType } from '@/types';

interface MenuProps {
  type: MenuType;
  className?: string;
};

const DisplayNavigationMenu: FC<{ activeSection: string }> = ({ activeSection }) => {
  const navigationLang = useTranslations('navigation');

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const elementPosition = el.getBoundingClientRect().top + globalThis.scrollY;

      globalThis.scrollTo({
        top: id === 'gallery' ? elementPosition + (globalThis.innerHeight * 1.5) : elementPosition,
        // top: elementPosition,
        behavior: 'smooth',
      });
    };
  }, []);
  
  return (
    navigationMenuItems?.map((item: IMenuItems) => (
      <li key={item.label}>
        <Button
          variant='naked'
          className='menu-link !p-1 w-full flex items-center justify-between'
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
              <span className="text-line text-xs tracking-tight capitalize">
                { navigationLang(item.label) }
              </span>
            </div>
          </div>
          { activeSection === item.label && <Flame className='mr-1 opacity-95' /> }
        </Button>
      </li>
    ))
  );
};

const DisplayLanguageMenu: FC<{ locale: string }> = ({ locale }) => {
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push('/', { locale: newLocale });
      router.refresh();
    }
  };

  return (
    languageMenuItems
    ?.filter((item: IMenuItems) => item.link !== locale)
    ?.map((item: IMenuItems) => (
      <li key={item.label}>
        <Button
          variant='naked'
          className='menu-link !p-1 w-full flex items-center space-x-3 leading-6'
          onClick={() => switchLocale(item.link)}
        >
          <div className="text-wrapper">
            <span className="text-line text-xs tracking-tight">
              {item.label}
            </span>
          </div>
        </Button>
      </li>
    ))
  );
};

const Menu: FC<MenuProps> = ({ type, className }) => {
  const { ready } = useApp();
  const locale = useLocale();

  const activeSection = useActiveSection(navigationMenuItems.map((item: IMenuItems) => item.label)) ?? 'home';

  const navigationLang = useTranslations('navigation');

  const navRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const isMenuNavigation = useMemo(() => type === MenuType.NAVIGATION, [type]);
  const menuConfig = useMemo(() => ({
    expandedWidth: isMenuNavigation ? '12.25rem' : '10.25rem',
    expandedHeight: isMenuNavigation ? '13rem' : '17.5rem',
    transformOrigin: isMenuNavigation ? 'top left' : 'top right',
    activeLabel: isMenuNavigation ? navigationLang(activeSection) : languageMenuItems?.find(item => item.link === locale)?.label,
    dotsCount: isMenuNavigation ? 2 : 1,
  }), [isMenuNavigation, locale, activeSection, navigationLang]);

  useGSAP(() => {
    if (!ready || !navRef.current || !menuListRef.current) return;

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'sine.inOut' },
    });

    tl.to(navRef.current, {
      width: menuConfig.expandedWidth,
      height: menuConfig.expandedHeight,
      borderRadius: '0.875rem',
      duration: 0.3,
    });

    tl.to(menuListRef.current, {
      opacity: 1,
      display: 'block',
      y: 0,
      duration: 0.3,
    }, '<');

    if (isMenuNavigation) {
      tl.to('.menu-icon-container', {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.35,
      }, '<');
    }

    timelineRef.current = tl;

    gsap.set(navRef.current, { opacity: 1 });

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, [ready, isMenuNavigation]);

  const openMenu = () => {
    timelineRef.current?.play();
    setIsOpen(true);
  };

  const closeMenu = () => {
    timelineRef.current?.reverse();
    setIsOpen(false);
  };

  const handleMobileToggle = useCallback(() => {
    if (!isMobile || !timelineRef.current) return;

    const tl = timelineRef.current;

    if (isOpen) {
      tl.timeScale(1).reverse();
      setIsOpen(false);
    } else {
      tl.timeScale(1).play();
      setIsOpen(true);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    if (!navRef.current || isMobile) return;

    const el = navRef.current;

    el.addEventListener('mouseenter', openMenu);
    el.addEventListener('mouseleave', closeMenu);
    el.addEventListener('focusin', openMenu);
    el.addEventListener('focusout', closeMenu);

    return () => {
      el.removeEventListener('mouseenter', openMenu);
      el.removeEventListener('mouseleave', closeMenu);
      el.removeEventListener('focusin', openMenu);
      el.removeEventListener('focusout', closeMenu);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (!navRef.current) return;

      if (!navRef.current.contains(event.target as Node)) {
        timelineRef.current?.reverse();
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, [isMobile, isOpen]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${className} py-2.5 min-w-32 h-[2.1875rem] text-body bg-grey-overlay capitalize flex flex-col items-center backdrop-blur-[2px] rounded-2xl opacity-0`}
      style={{ transformOrigin: menuConfig.transformOrigin }}
      onClick={handleMobileToggle}
      role='navigation'
      aria-label={isMenuNavigation ? 'Main navigation' : 'Language selection'}
    >
      <div className='flex-between px-3 w-full space-x-4 cursor-pointer md:cursor-default'>
        <span className='text-sm font-medium leading-none tracking-tight'>{ menuConfig.activeLabel }</span>

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
        { isMenuNavigation ? <DisplayNavigationMenu activeSection={activeSection} /> : <DisplayLanguageMenu locale={locale} /> }
      </ul>
    </nav>
  )
}

export default Menu;