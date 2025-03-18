import React from 'react';
import { EmailInput, SocialPlatforms } from '@/components/interfaces';

const Footer = () => {
  return (
    <footer className='side-pad pt-16 pb-8 lg:pt-32 lg:pb-16 flex flex-col items-center justify-center space-y-10 lg:space-y-14'>
      <div className='mb-4 lg:mb-8 w-[95%] lg:w-full max-w-sm'>
        <EmailInput />
      </div>
      <SocialPlatforms className='text-primary' />
      <div className='text-center text-primary text-[0.625rem] lg:text-xs -tracking-[0.075rem]'>
        <p className='mb-2'>
          &copy;{new Date().getFullYear()} ii6 pyro. All rights reserved.
        </p>
        <p>
          By using the site, you agree to our <a className='underline'>Privacy Policy</a> and <a className='underline'>Terms of Service.</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;