import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { AnimatedText } from '@/components/shared';

import { useApp } from '@/hooks';
import { artist } from '@/lib/data';
import { rockSalt } from '@/lib/fonts';

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
  shortname?: boolean;
  animate?: boolean;
}

const logoVariants = cva(
  `${rockSalt.className} whitespace-nowrap transition-all ease-in-out duration-300`,
  {
    variants: {
      variant: {
        default: 'text-main',
        primary: 'text-primary',
        secondary: 'text-body',
        burn: 'text-burn',
      },
      size: {
        sm: 'text-sm lg:text-base',
        md: 'text-3xl lg:text-4xl',
        lg: 'text-4xl lg:text-5xl',
        xl: 'text-4xl md:text-5xl lg:text-6xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ className, variant, size, shortname, animate = true }, ref) => {
  const { isMobileSize } = useApp();

  return (
    <div
      ref={ref}
      className={logoVariants({ variant, size })}
    >
      <h1 className={`tracking-wide lg:tracking-wider ${className} ${animate ? 'hover:animate-jello-horizontal' : ''}`}>
        <AnimatedText text={shortname || isMobileSize ? artist?.short_name : artist?.name} />
      </h1>
    </div>
  )
});

Logo.displayName = 'Logo';

export default Logo;