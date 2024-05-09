import { SVGProps } from 'react';

const Youtube = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M23.3 7.3c0-.2-.3-1.8-1-2.5-.9-1-1.9-1.1-2.4-1.1h-.1c-3.1-.2-7.7-.2-7.8-.2 0 0-4.7 0-7.8.2h-.1c-.5 0-1.5.1-2.4 1.1-.7.8-1 2.4-1 2.6 0 .1-.2 1.9-.2 3.8v1.7c0 1.9.2 3.7.2 3.8 0 .2.3 1.8 1 2.5.8.9 1.8 1 2.4 1.1h.3c1.8.2 7.3.2 7.5.2 0 0 4.7 0 7.8-.2h.1c.5-.1 1.5-.2 2.4-1.1.7-.8 1-2.4 1-2.6 0-.1.2-1.9.2-3.8v-1.7c.1-1.8-.1-3.7-.1-3.8zm-7.4 4.9l-6 3.2c-.1 0-.1.1-.2.1s-.2 0-.2-.1c-.1-.1-.2-.2-.2-.4V8.5c0-.2.1-.3.2-.4s.3-.1.5 0l6 3.2c.2.1.3.2.3.4s-.2.4-.4.5z" />
    </svg>
  );
};

export default Youtube;