import React from 'react';
import { Menu } from '../interfaces';

const Header: React.FC = () => {
  return (
    <header className='py-4 w-full border-b border-current'>
      <div>
        <Menu />
      </div>
    </header>
  )
}

export default Header;