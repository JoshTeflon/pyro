import { PlatformInterface } from '@/types';
import { artist } from '@/lib/data';

interface SocialPlatformsProps {
  className?: string
}

const SocialPlatforms: React.FC<SocialPlatformsProps> = ({ className }) => {
  return (
    <div className={`${className ?? ''} mx-auto w-full max-w-xs md:max-w-md lg:max-w-2xl`}>
      <ul className='mb-4 lg:mb-8 w-full flex items-center justify-around'>
        {
          artist?.socials.music?.map((icon: PlatformInterface) => (
            <li
              key={icon.name}
              className='w-20 lg:w-28'
            >
              <a
                className='w-full h-full flex items-center justify-center text-inherit hover:bg-main hover:text-body focus:bg-main focus:text-body rounded-full transition-colors duration-500 ease-in-out'
                href='/'
              >
                <icon.icon className="w-full h-full text-inherit" />
              </a>
            </li>
          ))
        }
      </ul>
      <ul className='w-full flex items-center justify-around'>
        {
          artist?.socials.video?.map((icon: PlatformInterface) => (
            <li
              key={icon.name}
              className='w-6 lg:w-8'
            >
              <a
                className='w-full h-full flex items-center justify-center text-inherit hover:bg-main hover:text-body focus:bg-main focus:text-body rounded-full transition-colors duration-500 ease-in-out'
                href='/'
              >
                <icon.icon className="w-full h-full text-inherit" />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SocialPlatforms;