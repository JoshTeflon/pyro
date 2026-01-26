'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { Logo } from '@/components/shared';
import { EmailInput, SocialPlatforms } from '@/components/interfaces';

import { useApp } from '@/hooks';
import { artist } from '@/lib/data';
import { rockSalt } from '@/lib/fonts';

const Connect = () => {
  const { isMobileSize } = useApp();

  const connectLang = useTranslations('connectSection');

  return (
    <footer
      id='connect'
      className='p-4 md:p-6 xl:p-8 z-50 relative h-screen bg-transparent flex flex-col items-center justify-center'
    >
      <div className='side-pad pt-36 h-full bg-primary flex flex-col justify-between rounded-4xl overflow-y-hidden'>
        <div className='flex-center flex-col -mt-32 mx-auto w-full max-w-xl lg:max-w-2xl h-full'>
          <h1 className={`${rockSalt.className} outline-connect-header text-body text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex items-center justify-center flex-wrap space-x-4`}>
            <span className='capitalize tracking-tight whitespace-nowrap'>{ connectLang('titleStart') }</span>
            <Logo variant='secondary' size='xl' shortname />
            <span className='capitalize'>{ connectLang('titleEnd') }</span> 
          </h1>

          <p className='mt-12 text-sm lg:text-base text-primary-100 text-center'>
            { connectLang('subtitle') }
          </p>

          <div className='mt-16 mb-12 mx-auto w-full max-w-xl lg:max-w-3xl'>
            <EmailInput />
          </div>

          <SocialPlatforms className='text-body justify-center' layout='inline' />
        </div>

        <div className='relative'>
          <span
            className={`${rockSalt.className} outline-connect-footer-logo text-[7rem] lg:text-[6rem] xl:text-[7rem] absolute xl:left-8 -bottom-[4.75rem] lg:-bottom-[4rem] xl:-bottom-[4.75rem]`}
          >
            {(() => {
              const logoText = isMobileSize ? artist?.short_name : artist?.name;
              
              return logoText.split('').map((char, idx) => (
                <span key={`${char}-${idx}`} className='inline-block hover:-translate-y-9 transition-all duration-500 ease-in-out'>
                  {char}
                </span>
              ));
            })()}
          </span>

          <div className='mb-8 text-right text-burn text-[0.625rem] md:text-xs -tracking-[0.075rem]'>
            <p>
              &copy;{new Date().getFullYear()} <span className={`${rockSalt.className}`}>ii6 pyro.</span> { connectLang('allRightsReserved') }
            </p>
            <p>
              { connectLang('siteText') }: <a className='underline'>{ connectLang('privacyPolicy') }</a> | <a className='underline'>{ connectLang('termsOfService') }.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Connect;