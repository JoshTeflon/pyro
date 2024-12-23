import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  'h-fit transition-all duration-150 ease-in-out',
  {
    variants: {
      variant: {
          default: 'bg-main text-body',
          primary: 'bg-primary text-main',
          secondary: 'bg-body text-main',
          'secondary-primary': 'bg-body text-primary',
      },
      size: {
          sm: 'text-xs lg:text-sm py-1 px-2',
          md: 'text-sm lg:text-base py-2 px-4',
          lg: 'text-base lg:text-lg py-4 px-8',
      },
      roundness: {
          square: 'rounded-none',
          round: 'rounded-md',
          pill: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        variant: ['primary', 'default'],
        class: 'hover:opacity-80 focus:opacity-80 hover:-translate-y-0.5 active:translate-y-0.5 active:scale-95'
      },
    ],
    defaultVariants: {
        variant: 'default',
        size: 'md',
        roundness: 'square'
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, variant, size, roundness, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={buttonVariants({ className, variant, size, roundness })}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;