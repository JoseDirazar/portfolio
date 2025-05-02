import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export const A = ({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
}: AProps) => {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline:
      "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <a
      type={type}
      href={href}
      target="_blank"
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
};
