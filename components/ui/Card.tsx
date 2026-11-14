import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`interactive-card rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-cyan/50 ${className}`}
    >
      {children}
    </div>
  );
}