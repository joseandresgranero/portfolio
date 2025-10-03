declare module "simple-parallax-js" {
  export interface SimpleParallaxOptions {
    orientation?: "up" | "down" | "left" | "right";
    scale?: number;
    delay?: number;
    transition?: string;
    maxTransition?: number;
    overflow?: boolean;
    customWrapper?: string;
  }

  // Cambiamos a función con dos argumentos
  export default function simpleParallax(
    elements: Element[] | NodeListOf<Element>,
    options?: SimpleParallaxOptions
  ): void;
}