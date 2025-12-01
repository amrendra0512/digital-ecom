import { useEffect, useState } from "react";

export const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobileOnly: width < 640,
    isTabletOnly: width >= 640 && width < 1024,
    isDesktopOnly: width >= 1024,
  };
};
