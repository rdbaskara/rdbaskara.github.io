"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export function Parallax({
  children,
  speed = 0.04,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const scrollContainer = element.closest("main");

    if (!scrollContainer) {
      return;
    }

    const safeSpeed = Math.min(Math.max(speed, 0), 0.08);

    let frame = 0;

    const update = () => {
      const elementRect = element.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      const progress =
        (elementRect.top + elementRect.height / 2 - containerRect.top) /
          containerRect.height -
        0.5;

      const translateY = progress * safeSpeed * 100;

      element.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();

    scrollContainer.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-slow ${className}`}>
      {children}
    </div>
  );
}