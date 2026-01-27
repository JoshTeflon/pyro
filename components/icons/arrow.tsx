import { SVGProps } from 'react';
import clsx from 'clsx';

type ArrowDirection = 'up' | 'down' | 'left' | 'right';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: ArrowDirection;
}

const rotationMap: Record<ArrowDirection, number> = {
  down: 0,
  up: 180,
  left: 90,
  right: -90,
};

const Arrow = ({
  direction = 'down',
  className,
  style,
  ...props
}: ArrowProps) => {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      style={{
        transform: `rotate(${rotationMap[direction]}deg)`,
        transformOrigin: '50% 50%',
        ...style,
      }}
      {...props}
    >
      <path
        d="M10 3.788v10.606M15.834 9.09L10 14.395 4.167 9.091"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;