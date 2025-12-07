import { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

export default ArrowDown;