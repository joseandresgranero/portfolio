import { useEffect, useState } from "react";

export function useScrollThreshold(threshold: number = 40): boolean {
  const [passed, setPassed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setPassed(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecutar en el primer render para estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return passed;
}
