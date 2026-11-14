"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionTransition({
  children,
  className = "",
  delay = 0,
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const scrollContainer = element.closest("main");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      {
        root: scrollContainer instanceof Element ? scrollContainer : null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`section-transition ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}