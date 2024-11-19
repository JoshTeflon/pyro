import Link from 'next/link';

import { menuItems } from '@/lib/data';
import { MenuItems } from '@/types';

const Menu = () => {
  return (
    <nav className='w-full'>
      <ul className='w-full flex items-center justify-center space-x-4'>
        {
          menuItems?.map((item: MenuItems) => (
            <li
              key={item?.item}
              className='text-sm font-medium text-inherit hover:text-body hover:-translate-y-0.5 cursor-pointer transition-all duration-300 ease-in-out'
            >
              <Link href='/' className='focus:text-body'>
                {item.item}.
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Menu;