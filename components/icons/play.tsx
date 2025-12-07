import { SVGProps } from 'react';

const Play = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0a12 12 0 100 24 12 12 0 000-24zM9.676 6.462a.46.46 0 01.303.098l6.462 5.077a.461.461 0 010 .726l-6.462 5.075a.462.462 0 01-.748-.365V6.923c0-.25.196-.451.445-.461z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Play;