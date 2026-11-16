"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    let animationFrame: number | null = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      element.classList.add("is-active");
    };

    const handleMouseLeave = () => {
      element.classList.remove("is-active");
    };

    const updateGlow = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      element.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(updateGlow);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}