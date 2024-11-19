import { PlatformInterface } from '@/types';
import { artist } from '@/lib/data';

const SocialPlatforms: React.FC = () => {
  return (
    <ul className='flex items-center space-x-1'>
      {
        artist?.socials?.map((icon: PlatformInterface) => (
          <li
            key={icon.name}
            className='w-7 h-7'
          >
            <a
              className='w-full h-full flex items-center justify-center text-inherit hover:bg-main hover:text-body focus:bg-main focus:text-body rounded-full transition-colors duration-500 ease-in-out'
              href='/'
            >
              <icon.icon className="w-4 text-inherit" />
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default SocialPlatforms;