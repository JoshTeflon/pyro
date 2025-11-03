import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);

    // Handle hover interactions
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Cleanup event listeners
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: hovered ? "30px" : "24px",
        height: hovered ? "30px" : "24px",
        zIndex: 9999,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="${hovered ? "var(--body-clr)" : "var(--primary-clr)"}" stroke-width="0.5"/>
                </svg>`,
      }}
    />
  );
};

export default CustomCursor;