import { SVGProps } from 'react';

const Home = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.86 6.663L7.335.138a.475.475 0 00-.67 0L.14 6.663a.474.474 0 10.67.674l.635-.636 1.628 6.25A1.424 1.424 0 004.445 14h.849V9.933a1.69 1.69 0 013.379 0v4.062h.85a1.423 1.423 0 001.376-1.048l1.637-6.265.655.655a.475.475 0 00.669-.674z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Home;