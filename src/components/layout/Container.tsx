"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const containerVariants = cva("w-full px-2 lg:px-4 mx-auto", {
  variants: {
    size: {
      default: "max-w-3xl",
      lg: "max-w-5xl",
      xl: "max-w-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, size, className }: ContainerProps) => {
  return (
    <div className={cn(containerVariants({ size, className }))}>{children}</div>
  );
};

export default Container;
