import { Rock_Salt } from 'next/font/google';

import { artist } from '@/lib/data';

const rockSalt = Rock_Salt({ subsets: ['latin'], weight: ['400'] });

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${rockSalt.className} whitespace-nowrap hover:animate-jello-horizontal`}>
      <h1 className={`${className}`}>{artist?.name}</h1>
    </div>
  )
}

export default Logo;