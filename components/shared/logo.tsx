import { Rock_Salt } from 'next/font/google';
import { cva, type VariantProps } from 'class-variance-authority';

import { artist } from '@/lib/data';

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

const rockSalt = Rock_Salt({ subsets: ['latin'], weight: ['400'] });

const logoVariants = cva(
  `${rockSalt.className} whitespace-nowrap hover:animate-jello-horizontal transition-all ease-in-out duration-300`,
  {
    variants: {
      variant: {
          default: 'text-main',
          primary: 'text-primary',
          secondary: 'text-body',
      },
      size: {
          sm: 'text-sm lg:text-base',
          md: 'text-xl lg:text-2xl',
          lg: 'text-4xl lg:text-5xl',
      },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
    },
  }
);

const Logo: React.FC<LogoProps> = ({ className, variant, size }) => {
  return (
    <div className={logoVariants({ variant, size })}>
      <h1 className={`${className}`}>{artist?.name}</h1>
    </div>
  )
}

export default Logo;