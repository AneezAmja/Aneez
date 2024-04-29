
import { useState, useEffect } from "react";

const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth < 768 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileView;
};

export default useIsMobileView;
