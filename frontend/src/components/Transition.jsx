/* eslint-disable no-unused-vars */
// src/components/PageTransition.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Animation variants for the semi-transparent overlay
const overlayVariants = {
  // Initial state (before any animation)
  initial: {
    opacity: 0,
  },
  // Animate state (when a new page is revealed)
  // The overlay fades out to show the new content.
  animate: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.4, // Wait a moment before fading out
    },
  },
  // Exit state (when the old page is leaving)
  // The overlay fades in to cover the old content.
  exit: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    // AnimatePresence handles the enter/exit animations.
    // 'mode="wait"' ensures the exit animation finishes before the enter starts.
    <AnimatePresence mode="wait">
      {/* This key is crucial. It tells AnimatePresence that when the URL
          changes, the component is new and should trigger animations. */}
      <motion.div key={location.pathname}>
        
        {/* Page Content:
            This is the actual page component (e.g., Home, About).
            It doesn't need its own animation variants anymore because
            the overlay will handle the visual transition. */}
        <div>{children}</div>

        {/* The Animated Overlay:
            This div sits on top of the content and animates. */}
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          // We use a semi-transparent green and disable pointer events
          // so it doesn't block clicks after the transition is over.
          className="fixed top-0 left-0 w-full h-screen bg-green-900/80 pointer-events-none z-[9999]"
        />
      </motion.div>
    </AnimatePresence>
  );
};