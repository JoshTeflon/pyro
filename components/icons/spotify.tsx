import { SVGProps } from 'react';

const Spotify = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8 17.8c-6.4-3.8-17.1-4.2-23.2-2.3-1 .3-2-.3-2.3-1.2-.3-1 .3-2 1.2-2.3 7.1-2.1 18.8-1.7 26.2 2.7.9.5 1.2 1.7.7 2.6-.5.7-1.7 1-2.6.5zm-.2 5.6c-.5.7-1.4 1-2.1.5-5.4-3.3-13.6-4.3-19.9-2.3-.8.2-1.7-.2-1.9-1-.2-.8.2-1.7 1-1.9 7.3-2.2 16.3-1.1 22.5 2.7.6.3.9 1.3.4 2zm-2.4 5.5c-.4.6-1.1.8-1.7.4-4.7-2.9-10.6-3.5-17.6-1.9-.7.2-1.3-.3-1.5-.9-.2-.7.3-1.3.9-1.5 7.6-1.7 14.2-1 19.4 2.2.7.3.8 1.1.5 1.7zM20 0C9 0 0 9 0 20s9 20 20 20 20-9 20-20S31.1 0 20 0z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Spotify;