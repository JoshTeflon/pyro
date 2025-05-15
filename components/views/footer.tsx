import React from 'react';
import { EmailInput, SocialPlatforms } from '@/components/interfaces';

const Footer = () => {
  return (
    <footer
      id='footer'
      className='pt-16 md:pt-24 lg:pt-32 pb-8'
    >
      <div className='side-pad flex flex-col items-center justify-center'>
        <div className='w-full max-w-md'>
          <div className='mx-auto w-full'>
            <EmailInput />
            <p className='mt-2 mx-auto w-full text-[0.625rem] text-center text-primary'>
              Be the first to hear! Get early access to new releases, insider updates, and exclusive content — straight to your inbox. By entering your email, you agree to receive occasional updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <SocialPlatforms className='text-primary my-10 lg:my-16' />
        <div className='text-center text-primary text-[0.625rem] lg:text-xs -tracking-[0.075rem]'>
          <p className='mb-2'>
            &copy;{new Date().getFullYear()} ii6 pyro. All rights reserved.
          </p>
          <p>
            By using the site, you agree to our <a className='underline'>Privacy Policy</a> and <a className='underline'>Terms of Service.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;