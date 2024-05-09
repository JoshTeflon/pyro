import { SVGProps } from 'react';

const Instagram = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
    >
      <path d="M128 80a48 48 0 1048 48 48.05 48.05 0 00-48-48zm0 80a32 32 0 1132-32 32 32 0 01-32 32zm48-136H80a56.06 56.06 0 00-56 56v96a56.06 56.06 0 0056 56h96a56.06 56.06 0 0056-56V80a56.06 56.06 0 00-56-56zm40 152a40 40 0 01-40 40H80a40 40 0 01-40-40V80a40 40 0 0140-40h96a40 40 0 0140 40zM192 76a12 12 0 11-12-12 12 12 0 0112 12z" />
    </svg>
  );
};

export default Instagram;