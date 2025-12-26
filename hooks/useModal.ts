import { RefObject, useEffect } from 'react';

interface UseModalOptions {
  enabled?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  lockScroll?: boolean;
}

const useModal = <T extends HTMLElement>(
  ref: RefObject<T>,
  onClose: () => void,
  {
    enabled = true,
    closeOnOutsideClick = true,
    closeOnEsc = true,
    lockScroll = true,
  }: UseModalOptions = {}
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!closeOnOutsideClick) return;

      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;

      onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!closeOnEsc) return;
      if (event.key !== 'Escape') return;

      const target = event.target as HTMLElement | null;

      // Ignore ESC when typing
      if (
        target &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
      ) {
        return;
      }

      onClose();
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    let originalOverflow = '';
    if (lockScroll) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);

      if (lockScroll) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [
    ref,
    onClose,
    enabled,
    closeOnOutsideClick,
    closeOnEsc,
    lockScroll,
  ]);
};

export default useModal;