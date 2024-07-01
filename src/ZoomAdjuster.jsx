// ZoomAdjuster.jsx
import { useEffect } from 'react';

const ZoomAdjuster = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        document.body.style.zoom = '100%';
      } else {
        document.body.style.zoom = '100%';
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Trigger the function on initial load
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};

export default ZoomAdjuster;
