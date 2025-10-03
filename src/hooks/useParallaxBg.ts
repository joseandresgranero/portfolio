"use client";
import { useEffect } from "react";

/**
 * Aplica efecto parallax a un background solo cuando el elemento entra en viewport
 * @param selector Selector CSS del elemento
 * @param speed Velocidad del parallax
 */
export function useParallaxBg(selector: string, speed: number = 0.3) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;

    let observer: IntersectionObserver;
    let handleScroll: () => void;

    // Función para activar parallax
    const activateParallax = () => {
      handleScroll = () => {
        const offset = window.scrollY;
        el.style.backgroundPosition = `center ${offset * speed}px`;
      };
      window.addEventListener("scroll", handleScroll);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateParallax();
          } else if (handleScroll) {
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0 } // Se activa cuando empieza a entrar en pantalla
    );

    observer.observe(el);

    return () => {
      if (handleScroll) window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [selector, speed]);
}
