import { useEffect, useState } from "react";

export const CustomCursor = ({ size = "normal" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverTarget, setHoverTarget] = useState(null);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const target = e.target;
      // This selector already correctly finds buttons and links, so it doesn't need to change.
      setHoverTarget(
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer"
        )
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleHover);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
      document.body.style.cursor = "";
    };
  }, []);

  // Get the tag name of the currently hovered element.
  const tagName = hoverTarget?.tagName?.toLowerCase();
  
  // The cursor is expanded if the tag is 'a' OR 'button'.
  const isExpanded = tagName === "a" || tagName === "button" || tagName==="Link";

  const baseSize = size === "small" ? 4 : size === "large" ? 10 : 6;
  
  // Use the new 'isExpanded' variable to determine the size.
  const dynamicSize = isExpanded ? baseSize * 3 : baseSize * 2;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${position.x - dynamicSize / 2}px, ${
          position.y - dynamicSize / 2
        }px)`,
        transition: "transform 0s", // instant movement
      }}
    >
      <div
        className={`rounded-full ${
          isExpanded ? "bg-green-500" : "bg-green-300"
        }`}
        style={{
          width: dynamicSize,
          height: dynamicSize,
          transition: "all 0.15s ease-in-out",
        }}
      />
    </div>
  );
};