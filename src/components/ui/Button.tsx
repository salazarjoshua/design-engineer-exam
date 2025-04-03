import { cn } from "lib/utils";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full border-0 bg-brand-lime px-8 py-4 text-3xl font-semibold leading-none text-brand-teal",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
