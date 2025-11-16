import React from 'react';

import { EmailInput, SocialPlatforms } from '@/components/interfaces';
import { rockSalt } from '@/lib/fonts';
import { Logo } from '@/components/shared';

const Connect = () => {
  return (
    <footer
      id='connect'
      className='pt-16 md:pt-24 lg:pt-32 pb-8 z-50 relative h-screen bg-main flex flex-col items-center justify-center'
    >
      <div className='side-pad flex flex-col items-center justify-center'>
        <div className='w-full'>
          <h1 className='mb-16 text-primary text-5xl flex items-center justify-center space-x-3'>
            <span>Join</span>
            <span>The</span>
            <Logo variant='primary' size='lg' className='-rotate-2' shortname />
            <span>Pack</span> 
          </h1>
          <div className='mx-auto w-full max-w-md'>
            <EmailInput />
            <p className='mt-2 mx-auto w-full text-[0.625rem] text-center text-primary'>
              Be the first to hear! Get early access to new releases, insider updates, and exclusive content — straight to your inbox. By entering your email, you agree to receive occasional updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <SocialPlatforms
          className='text-primary my-10 lg:my-20'
          layout='inline'
        />
        <div className='text-center text-primary text-[0.625rem] lg:text-xs -tracking-[0.075rem]'>
          <p className='mb-2'>
            &copy;{new Date().getFullYear()} <span className={`${rockSalt.className}`}>ii6 pyro -</span> All rights reserved.
          </p>
          <p>
            By using the site, you agree to our <a className='underline'>Privacy Policy</a> and <a className='underline'>Terms of Service.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Connect;