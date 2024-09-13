"use client";
import React from "react";

interface HeroButtonProps {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export default function HeroButton({
  text = "View My Work",
  href = "#projects",
  icon,
}: HeroButtonProps) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-primary transition-all duration-300 ease-out border-2 border-primary rounded-full shadow-md hover:text-white"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary ease">
        {icon}
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform ease">
        {text}
      </span>
      <span className="relative invisible">{text}</span>
      <span className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-full opacity-0 transition-opacity duration-300"></span>
      <style jsx>{`
        a:hover span:first-of-type {
          transform: translateX(0);
        }
        a:hover span:nth-of-type(2) {
          transform: translateX(100%);
        }
        a:hover span:last-of-type {
          opacity: 1;
        }
      `}</style>
    </a>
  );
}
