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

    const showElement = () => {
      element.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showElement();
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      },
    );

    observer.observe(element);

    const fallbackTimer = window.setTimeout(() => {
      showElement();
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
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