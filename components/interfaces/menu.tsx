import React from 'react';

interface MenuItems {
  item: string
  link: string
}

const menuItems: MenuItems[] = [
  {
    item: 'home',
    link: ''
  },
  {
    item: 'music',
    link: ''
  },
  {
    item: '🔥',
    link: ''
  },
  {
    item: 'videos',
    link: ''
  },
  {
    item: 'store',
    link: ''
  }
]

const Menu = () => {
  return (
    <nav className='w-full'>
      <ul className='w-full flex items-center justify-between space-x-16'>
        {
          menuItems?.map((item: MenuItems) => (
            <li
              key={item?.item}
              className='text-sm lg:text-base uppercase cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out'
            >
              {item.item}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Menu;