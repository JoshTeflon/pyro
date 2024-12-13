import { PlatformInterface } from '@/types';
import { artist } from '@/lib/data';

const SocialPlatforms: React.FC = () => {
  return (
    <ul className='flex items-center space-x-1'>
      {
        artist?.socials?.map((icon: PlatformInterface) => (
          <li
            key={icon.name}
            className='w-10 h-10 lg:w-8 lg:h-8'
          >
            <a
              className='w-full h-full flex items-center justify-center text-inherit hover:bg-main hover:text-body focus:bg-main focus:text-body rounded-full transition-colors duration-500 ease-in-out'
              href='/'
            >
              <icon.icon className="w-5 lg:w-4 text-inherit" />
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default SocialPlatforms;