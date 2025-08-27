import { useState, useEffect } from 'react';

/**
 * A custom hook to detect if the user is on a touch-enabled device.
 * It checks for touch events and navigator properties to determine the device type.
 * @returns {boolean} - True if it's a touch device, false otherwise.
 */
export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the window object is available (prevents errors during server-side rendering)
    if (typeof window !== 'undefined') {
      const onTouch = () => {
        setIsTouchDevice(true);
        // Once a touch is detected, the listener can be removed for performance.
        window.removeEventListener('touchstart', onTouch, { passive: true });
      };
      
      // A primary check for modern touch devices.
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      } else {
        // Fallback for other devices: listen for the very first touch event.
        window.addEventListener('touchstart', onTouch, { passive: true });
      }

      // Cleanup the event listener when the component unmounts.
      return () => {
        window.removeEventListener('touchstart', onTouch, { passive: true });
      };
    }
  }, []);

  return isTouchDevice;
}