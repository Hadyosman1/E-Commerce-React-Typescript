import { useLayoutEffect, useState } from "react";

type TSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const useBreakpoints = () => {
  const [windowSize, setWindowSize] = useState<TSizes>(getBreakpoint());

  function getBreakpoint(): TSizes {
    const width = window.innerWidth;
    if (width >= 1400) return "xxl";
    if (width >= 1200) return "xl";
    if (width >= 992) return "lg";
    if (width >= 768) return "md";
    if (width >= 576) return "sm";
    return "xs";
  }
  console.log(windowSize);
  useLayoutEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(getBreakpoint());
    };
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return windowSize;
};

export default useBreakpoints;
