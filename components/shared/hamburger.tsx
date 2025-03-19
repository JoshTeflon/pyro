import { FC } from "react";

interface HamburgerProps {
  isOpen: boolean
  toggleMenu?: () => void
}

const Hamburger: FC<HamburgerProps> = ({ isOpen = false, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu && toggleMenu}
      className='z-[75] relative my-0 mx-auto w-8 h-6'
      aria-label='toggle menu'
    >
      <span
        className={`bar ${
          isOpen ? 'top-2.5 bg-transparent' : 'top-0 bg-primary'
        }`}
      />
      <span
        className={`bar top-2.5 ${
          isOpen ? 'left-0 w-8 rotate-45 bg-main' : 'left-2.5 w-px rotate-90 bg-transparent'
        }`}
      />
      <span
        className={`bar top-2.5 right-0 ${
          isOpen ? 'left-0 w-8 -rotate-45 bg-main' : 'left-2.5 w-px bg-transparent'
        }`}
      />
      <span
        className={`bar top-2.5 bottom-0 ${
          isOpen ? 'bg-transparent' : 'bg-primary'
        }`}
      />
      <span
        className={`bar ${
          isOpen ? 'bg-transparent bottom-3' : 'bottom-0 bg-primary'
        }`}
      />
    </button>
  );
};

export default Hamburger;