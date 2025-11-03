import { IPlatform } from '@/types';
import { artist } from '@/lib/data';

interface SocialPlatformsProps {
  className?: string
  layout?: 'stack' | 'inline'
}

const SocialPlatforms: React.FC<SocialPlatformsProps> = ({ className, layout = 'stack' }) => {
  return (
    <ul
      className={`${className} flex items-center ${layout === 'stack' ? 'flex-col space-y-6' : 'flex-row space-x-6'}`}
    >
      {
        artist?.socials?.map((icon: IPlatform) => (
          <li
            key={icon.name}
            className='w-6 h-6'
          >
            <a
              className='w-full h-full flex items-center justify-center text-inherit hover:text-body focus:text-body rounded-full transition-colors duration-500 ease-in-out'
              href='/'
            >
              <icon.icon className="w-full h-full text-inherit" />
            </a>
          </li>
          // <li
          //   key={icon.name}
          //   className='w-10 h-10 flex items-center justify-center bg-primary rounded-full'
          // >
          //   <a
          //     className='w-4 h-4 flex items-center justify-center text-body hover:text-body focus:text-body rounded-full transition-colors duration-500 ease-in-out'
          //     href='/'
          //   >
          //     <icon.icon className="w-full h-full text-inherit" />
          //   </a>
          // </li>
        ))
      }
    </ul>
  )
}

export default SocialPlatforms;