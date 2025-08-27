import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // --- START: This check is important ---
    const element = ref.current;
    if (!element) return;
    // --- END: This check is important ---

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element); // Optional: Stop observing after it's visible
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    // Cleanup
    return () => observer.disconnect();
    
    // --- CRITICAL FIX: Add the dependency array ---
  }, []); // <--- Add this empty array!

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};