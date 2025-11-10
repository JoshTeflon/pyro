import { SVGProps } from 'react';

const Flame = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={4}
      height={5}
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.668 1.133C.3 1.7 0 2.348 0 2.953 0 3.496.21 4.016.586 4.4.96 4.784 1.47 5 2 5c.53 0 1.04-.216 1.414-.6C3.79 4.016 4 3.496 4 2.952 4 1.686 3.143.71 2.448 0L1.62 1.782l-.951-.649z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Flame;