"use client";

import { useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({
  children,
  className = "",
  intensity = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const rotateY = x * intensity;
    const rotateX = -y * intensity;

    element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}