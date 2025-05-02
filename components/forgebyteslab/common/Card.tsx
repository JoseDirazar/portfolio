import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated";
  className?: string;
}

export const Card = ({
  children,
  variant = "default",
  className,
}: CardProps) => {
  const baseStyles = "rounded-xl overflow-hidden transition-all duration-300";

  const variants = {
    default: "bg-white dark:bg-gray-800 shadow-sm hover:shadow-md",
    elevated: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl",
  };

  return (
    <div className={twMerge(baseStyles, variants[variant], className)}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={twMerge("p-6", className)}>{children}</div>;
};

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const CardHeader = ({ title, subtitle, className }: CardHeaderProps) => {
  return (
    <div className={twMerge("mb-4", className)}>
      <h3 className="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-white">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};
