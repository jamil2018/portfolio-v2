import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return <div className={`w-[95vw] mx-auto ${className}`}>{children}</div>;
}
