import { SVGProps } from 'react';

const Music = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.795.094a.5.5 0 00-.445-.07l-8 2.5a.5.5 0 00-.35.474v5.768a3 3 0 00-4.737 3.462A3 3 0 006 10.995V3.368l7-2.19v5.089a3 3 0 00-4.737 3.462A3 3 0 0014 8.496V.499a.5.5 0 00-.205-.405z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Music;