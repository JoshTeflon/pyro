import { PlatformInterface } from '@/types';
import { artist } from '@/lib/data';

const SocialPlatforms: React.FC = () => {
  return (
    <ul className='flex items-center space-x-1'>
      {
        artist?.socials?.map((icon: PlatformInterface) => (
          <li
            key={icon.name}
            className='group cursor-pointer w-7 h-7 flex items-center justify-center hover:bg-main rounded-full transition-colors duration-500 ease-in-out'
          >
            <icon.icon className="w-4 text-inherit group-hover:text-body" />
          </li>
        ))
      }
    </ul>
  )
}

export default SocialPlatforms;