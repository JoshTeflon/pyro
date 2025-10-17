import Link from 'next/link';

import { menuItems } from '@/lib/data';
import { IMenuItems } from '@/types';

const Menu = () => {
  return (
    <nav className='w-full'>
      <ul className='w-full flex items-center justify-center space-x-8 lg:space-x-10'>
        {
          menuItems?.map((item: IMenuItems, idx: number) => (
            <li
              key={item?.item}
              className='text-sm lg:text-base font-medium text-inherit hover:text-body hover:-translate-y-0.5 cursor-pointer transition-all duration-300 ease-in-out'
            >
              <Link href={item?.link} className='flex focus:text-body'>
               <span className='text-[0.5rem]'>0{idx + 1}/</span><span>{item.item}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Menu;