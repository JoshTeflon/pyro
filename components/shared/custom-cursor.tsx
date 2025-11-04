import { useEffect, useState, FC } from 'react';

const CursorSVG: FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const strokeColor = isHovered ? "var(--body-clr)" : "var(--primary-clr)";

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1"
      />
    </svg>
  );
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    globalThis.addEventListener("mousemove", moveCursor);

    const interactiveElements = globalThis.document.querySelectorAll("a, button, [data-cursor-interact]");

    for (const el of interactiveElements) {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      globalThis.removeEventListener("mousemove", moveCursor);

      for (const el of interactiveElements) {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: hovered ? "2rem" : "1.5rem",
        height: hovered ? "2rem" : "1.5rem",
        zIndex: 9999,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease, transform 0.1s linear",
      }}
    >
      <CursorSVG isHovered={hovered} />
    </div>
  );
};

export default CustomCursor;
