import { Rock_Salt } from 'next/font/google';

import { artist } from '@/lib/data';

const rockSalt = Rock_Salt({ subsets: ['latin'], weight: ['400'] });

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${rockSalt.className} whitespace-nowrap`}>
      <h1 className={`${className} text-[2.5rem]`}>{artist?.name}</h1>
    </div>
  )
}

export default Logo;