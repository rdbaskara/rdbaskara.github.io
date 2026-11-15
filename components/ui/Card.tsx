import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
<<<<<<< HEAD
      className={`rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-cyan/50 ${className}`}
=======
      className={`interactive-card rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-cyan/50 ${className}`}
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
    >
      {children}
    </div>
  );
}