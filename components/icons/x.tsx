import { SVGProps } from 'react';

const X = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
    >
      <path d="M214.75 211.71l-62.6-98.38 61.77-67.95a8 8 0 00-11.84-10.76l-58.84 64.72-40.49-63.63A8 8 0 0096 32H48a8 8 0 00-6.75 12.3l62.6 98.37-61.77 68a8 8 0 1011.84 10.76l58.84-64.72 40.49 63.63A8 8 0 00160 224h48a8 8 0 006.75-12.29zM164.39 208L62.57 48h29l101.86 160z" />
    </svg>
  );
};

export default X;