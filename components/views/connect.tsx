import React from 'react';

import { Logo } from '@/components/shared';
import { EmailInput, SocialPlatforms } from '@/components/interfaces';

import { useApp } from '@/hooks';
import { artist } from '@/lib/data';
import { rockSalt } from '@/lib/fonts';

const Connect = () => {
  const { isMobileSize } = useApp();

  return (
    <footer
      id='connect'
      className='p-4 md:p-6 xl:p-8 z-50 relative h-screen bg-transparent flex flex-col items-center justify-center'
    >
      <div className='side-pad pt-36 h-full bg-primary flex flex-col justify-between rounded-4xl overflow-y-hidden'>
        <div className='flex-center flex-col -mt-32 mx-auto w-full max-w-xl lg:max-w-2xl h-full'>
          <h1 className={`${rockSalt.className} outline-connect-header text-body text-4xl md:text-5xl lg:text-6xl flex items-center justify-center space-x-4`}>
            <span>Join</span>
            <span>The</span>
            <Logo variant='secondary' size='xl' shortname />
            <span>Pack</span> 
          </h1>

          <p className='mt-12 text-sm lg:text-base text-primary-100 text-center'>
            Be the first to hear! Get early access to new releases, insider updates, and exclusive content straight to your inbox. By entering your email, you agree to receive occasional updates.
          </p>

          <div className='mt-16 mb-12 mx-auto w-full max-w-xl lg:max-w-3xl'>
            <EmailInput />
          </div>

          <SocialPlatforms className='text-body justify-center' layout='inline' />
        </div>

        <div className='relative'>
          <span
            className={`${rockSalt.className} outline-connect-footer-logo text-[7rem] lg:text-[6rem] xl:text-[7rem] absolute xl:left-8 -bottom-[4.75rem] lg:-bottom-[4rem] xl:-bottom-[4.75rem] hover:-bottom-[0.75rem] transition-all duration-700 ease-in-out`}
          >
            { isMobileSize ? artist?.short_name : artist?.name }
          </span>

          <div className='mb-8 text-right text-burn text-[0.625rem] md:text-xs -tracking-[0.075rem]'>
            <p>
              &copy;{new Date().getFullYear()} <span className={`${rockSalt.className}`}>ii6 pyro.</span> All rights reserved.
            </p>
            <p>
              By using this site, you agree to our <a className='underline'>Privacy Policy</a> and <a className='underline'>Terms of Service.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Connect;