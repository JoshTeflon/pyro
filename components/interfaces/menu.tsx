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
              className='text-sm cursor-pointer hover:text-body hover:-translate-y-0.5 transition-all duration-300 ease-in-out'
            >
              {item.item}.
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Menu;