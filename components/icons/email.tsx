import { SVGProps } from 'react';

const Email = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
    >
      <path
        d="M224 48H32a8 8 0 00-8 8v136a16 16 0 0016 16h176a16 16 0 0016-16V56a8 8 0 00-8-8zm-20.57 16L128 133.15 52.57 64zM216 192H40V74.19l82.59 75.71a8 8 0 0010.82 0L216 74.19V192z"
      />
    </svg>
  );
};

export default Email;