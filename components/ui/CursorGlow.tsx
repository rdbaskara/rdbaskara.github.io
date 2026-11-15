"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      element.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      element.classList.add("is-active");
    };

    const handleMouseLeave = () => {
      element.classList.remove("is-active");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" />;
}