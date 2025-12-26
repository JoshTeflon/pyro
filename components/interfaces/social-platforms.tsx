import { IPlatform } from '@/types';
import { artist } from '@/lib/data';

interface SocialPlatformsProps {
  className?: string;
  layout?: 'stack' | 'inline';
}

const SocialPlatforms: React.FC<SocialPlatformsProps> = ({ className, layout = 'stack' }) => {
  return (
    <ul
      className={`
        ${className} 
        flex items-center 
        ${layout === 'stack' ? 'flex-col space-y-6 xl:space-y-8' : 'flex-row space-x-6 xl:space-x-8'}
        group/social
      `}
    >
      {artist?.socials?.map((icon: IPlatform) => (
        <li
          key={icon.name}
          className='w-7 h-7 transition-all duration-300 group-hover/social:opacity-30 hover:!opacity-100'
        >
          <a
            className='w-full h-full flex items-center justify-center text-inherit rounded-full transition-all duration-500 ease-in-out focus:opacity-90 hover:animate-jello-horizontal'
            href={icon.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={icon.name}
          >
            <icon.icon className="w-full h-full text-inherit" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialPlatforms;