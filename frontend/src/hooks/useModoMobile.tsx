import { useState, useEffect } from "react";

export const useModoMobile = (breakpoint: number = 768) => {
  const getIsMobile = () =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false;
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
