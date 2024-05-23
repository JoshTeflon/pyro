import React from 'react';
import { SocialPlatforms } from '../interfaces';

const Footer: React.FC = () => {
  return (
    <footer className='py-2 mt-auto shrink-0'>
      <SocialPlatforms />
    </footer>
  )
}

export default Footer;